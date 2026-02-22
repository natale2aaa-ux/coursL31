
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Word } from '../data/vocabulary';
import { CheckCircle, XCircle, ArrowRight, RefreshCcw } from 'lucide-react';

interface QuizProps {
  words: Word[];
  onBack: () => void;
  mode: 'mcq' | 'writing';
}

type QuestionType = 'en-fr' | 'fr-en' | 'def-en';

interface Question {
  word: Word;
  type: QuestionType;
  options?: string[]; // For MCQ
}

export default function Quiz({ words, onBack, mode }: QuizProps) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [textInput, setTextInput] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  useEffect(() => {
    generateQuestions();
  }, [words]);

  const generateQuestions = () => {
    // Shuffle words
    const shuffled = [...words].sort(() => 0.5 - Math.random());
    
    const newQuestions: Question[] = shuffled.map(word => {
      const types: QuestionType[] = ['en-fr', 'fr-en', 'def-en'];
      const type = types[Math.floor(Math.random() * types.length)];
      
      let options: string[] = [];
      if (mode === 'mcq') {
        const distractors = words
          .filter(w => w.id !== word.id)
          .sort(() => 0.5 - Math.random())
          .slice(0, 3);
        
        const correctAnswer = type === 'en-fr' ? word.french : word.english;
        const wrongAnswers = distractors.map(w => type === 'en-fr' ? w.french : w.english);
        
        options = [...wrongAnswers, correctAnswer].sort(() => 0.5 - Math.random());
      }

      return { word, type, options };
    });

    setQuestions(newQuestions);
    setCurrentIndex(0);
    setScore(0);
    setShowResult(false);
    setHasAnswered(false);
    setTextInput('');
    setSelectedOption(null);
    setIsCorrect(null);
  };

  const handleAnswer = (answer: string) => {
    if (hasAnswered) return;

    const currentQuestion = questions[currentIndex];
    let correct = false;
    const correctAnswer = currentQuestion.type === 'en-fr' 
      ? currentQuestion.word.french 
      : currentQuestion.word.english;

    // Normalize strings for comparison (remove case, trim)
    const normalize = (s: string) => s.toLowerCase().trim();
    
    // Special handling for multiple correct answers separated by /
    const possibleAnswers = correctAnswer.split('/').map(normalize);
    const userAnswer = normalize(answer);

    if (possibleAnswers.some(ans => userAnswer === ans || userAnswer.includes(ans))) {
      correct = true;
    }

    setIsCorrect(correct);
    if (correct) setScore(s => s + 1);
    setHasAnswered(true);
    setSelectedOption(answer);
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setHasAnswered(false);
      setSelectedOption(null);
      setTextInput('');
      setIsCorrect(null);
    } else {
      setShowResult(true);
    }
  };

  if (questions.length === 0) return <div>Loading...</div>;

  if (showResult) {
    return (
      <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto p-8 bg-white rounded-2xl shadow-xl text-center">
        <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
          <span className="text-4xl">🏆</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Quiz Complete!</h2>
        <p className="text-gray-500 mb-8">You scored {score} out of {questions.length}</p>
        
        <div className="w-full bg-gray-200 rounded-full h-4 mb-8 overflow-hidden">
          <div 
            className="bg-indigo-600 h-full rounded-full transition-all duration-1000"
            style={{ width: `${(score / questions.length) * 100}%` }}
          ></div>
        </div>

        <div className="flex gap-4 w-full">
          <button 
            onClick={onBack}
            className="flex-1 py-3 px-6 rounded-xl border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
          >
            Menu
          </button>
          <button 
            onClick={generateQuestions}
            className="flex-1 py-3 px-6 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
          >
            <RefreshCcw size={18} /> Retry
          </button>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentIndex];
  const questionText = currentQ.type === 'en-fr' 
    ? `Translate to French: "${currentQ.word.english}"`
    : currentQ.type === 'fr-en'
      ? `Translate to English: "${currentQ.word.french}"`
      : `What term matches this definition?\n"${currentQ.word.definition}"`;

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="flex justify-between items-center mb-8">
        <button onClick={onBack} className="text-gray-500 hover:text-gray-900">✕ Exit</button>
        <div className="flex items-center gap-4">
          <div className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
            Score: {score}
          </div>
          <span className="text-gray-400 font-mono text-sm">
            {currentIndex + 1}/{questions.length}
          </span>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-6">
        <h3 className="text-xl font-medium text-gray-900 mb-6 whitespace-pre-wrap text-center">
          {questionText}
        </h3>

        {mode === 'mcq' ? (
          <div className="grid grid-cols-1 gap-3">
            {currentQ.options?.map((option, idx) => {
              let btnClass = "p-4 rounded-xl border-2 text-left transition-all font-medium ";
              
              if (hasAnswered) {
                const isThisCorrect = 
                  currentQ.type === 'en-fr' 
                    ? option === currentQ.word.french 
                    : option === currentQ.word.english;
                
                if (isThisCorrect) {
                  btnClass += "border-green-500 bg-green-50 text-green-700";
                } else if (selectedOption === option) {
                  btnClass += "border-red-500 bg-red-50 text-red-700";
                } else {
                  btnClass += "border-gray-100 text-gray-400";
                }
              } else {
                btnClass += "border-gray-100 hover:border-indigo-200 hover:bg-indigo-50 text-gray-700";
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option)}
                  disabled={hasAnswered}
                  className={btnClass}
                >
                  {option}
                </button>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <input
              type="text"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && !hasAnswered && handleAnswer(textInput)}
              disabled={hasAnswered}
              placeholder="Type your answer..."
              className="w-full p-4 text-lg border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-0 outline-none transition-colors"
              autoFocus
            />
            {!hasAnswered && (
              <button
                onClick={() => handleAnswer(textInput)}
                className="self-end px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium"
              >
                Submit
              </button>
            )}
          </div>
        )}

        {hasAnswered && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-6 p-4 rounded-xl flex items-start gap-3 ${isCorrect ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}
          >
            {isCorrect ? <CheckCircle className="shrink-0 mt-0.5" /> : <XCircle className="shrink-0 mt-0.5" />}
            <div className="flex-1">
              <p className="font-bold">{isCorrect ? 'Correct!' : 'Incorrect'}</p>
              {!isCorrect && (
                <p className="mt-1">
                  The correct answer was: <span className="font-bold">
                    {currentQ.type === 'en-fr' ? currentQ.word.french : currentQ.word.english}
                  </span>
                </p>
              )}
            </div>
            <button 
              onClick={nextQuestion}
              className="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200 text-sm font-medium hover:bg-gray-50 flex items-center gap-2"
            >
              Next <ArrowRight size={16} />
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

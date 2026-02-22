import { useState, ReactNode } from 'react';
import { vocabulary } from './data/vocabulary';
import Flashcards from './components/Flashcards';
import Quiz from './components/Quiz';
import { BookOpen, BrainCircuit, PenTool, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';

type View = 'menu' | 'flashcards' | 'quiz-mcq' | 'quiz-write';
type Category = 'all' | 'climate' | 'labor';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('menu');
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');

  const filteredWords = selectedCategory === 'all' 
    ? vocabulary 
    : vocabulary.filter(w => w.category === selectedCategory);

  const renderContent = () => {
    switch (currentView) {
      case 'flashcards':
        return <Flashcards words={filteredWords} onBack={() => setCurrentView('menu')} />;
      case 'quiz-mcq':
        return <Quiz words={filteredWords} mode="mcq" onBack={() => setCurrentView('menu')} />;
      case 'quiz-write':
        return <Quiz words={filteredWords} mode="writing" onBack={() => setCurrentView('menu')} />;
      default:
        return (
          <div className="max-w-4xl mx-auto w-full px-4 py-12">
            <header className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-600 text-white mb-6 shadow-lg shadow-indigo-200">
                <GraduationCap size={32} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                L3 Economics English
              </h1>
              <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                Master the vocabulary for Climate Change and Labor Relations.
              </p>
            </header>

            <div className="mb-12">
              <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4 text-center">Select Topic</h2>
              <div className="flex justify-center gap-2 md:gap-4 flex-wrap">
                {(['all', 'climate', 'labor'] as Category[]).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === cat
                        ? 'bg-gray-900 text-white shadow-md'
                        : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    {cat === 'all' ? 'All Topics' : cat === 'climate' ? 'Climate Change' : 'Labor Relations'}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <MenuCard
                icon={<BookOpen className="text-blue-500" size={24} />}
                title="Flashcards"
                description="Review terms, definitions, and translations at your own pace."
                onClick={() => setCurrentView('flashcards')}
                color="bg-blue-50 hover:bg-blue-100"
              />
              <MenuCard
                icon={<BrainCircuit className="text-purple-500" size={24} />}
                title="Multiple Choice"
                description="Test your recognition of terms and definitions."
                onClick={() => setCurrentView('quiz-mcq')}
                color="bg-purple-50 hover:bg-purple-100"
              />
              <MenuCard
                icon={<PenTool className="text-emerald-500" size={24} />}
                title="Writing Practice"
                description="Practice spelling and recall by typing the answers."
                onClick={() => setCurrentView('quiz-write')}
                color="bg-emerald-50 hover:bg-emerald-100"
              />
            </div>
            
            <div className="mt-12 text-center text-gray-400 text-sm">
              {filteredWords.length} words available in current selection
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-gray-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {renderContent()}
    </div>
  );
}

function MenuCard({ icon, title, description, onClick, color }: { icon: ReactNode, title: string, description: string, onClick: () => void, color: string }) {
  return (
    <motion.button
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`text-left p-8 rounded-3xl transition-colors border border-transparent hover:border-black/5 ${color} group`}
    >
      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.button>
  );
}

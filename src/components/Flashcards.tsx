
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Word } from '../data/vocabulary';
import { ChevronLeft, ChevronRight, RotateCw } from 'lucide-react';

interface FlashcardsProps {
  words: Word[];
  onBack: () => void;
}

export default function Flashcards({ words, onBack }: FlashcardsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentWord = words[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 200);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + words.length) % words.length);
    }, 200);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto p-4">
      <div className="w-full flex justify-between items-center mb-6">
        <button 
          onClick={onBack}
          className="text-gray-600 hover:text-gray-900 font-medium flex items-center gap-2"
        >
          ← Back to Menu
        </button>
        <span className="text-gray-500 font-mono">
          {currentIndex + 1} / {words.length}
        </span>
      </div>

      <div className="relative w-full aspect-[3/2] cursor-pointer perspective-1000" onClick={handleFlip}>
        <motion.div
          className="w-full h-full relative preserve-3d transition-all duration-500"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Front */}
          <div className="absolute inset-0 backface-hidden bg-white rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center justify-center p-8 text-center">
            <span className="text-sm uppercase tracking-widest text-indigo-500 font-bold mb-4">English Term</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">{currentWord.english}</h2>
            {currentWord.type && (
              <span className="text-gray-400 italic text-lg">({currentWord.type})</span>
            )}
            <div className="absolute bottom-6 text-gray-400 text-sm flex items-center gap-2">
              <RotateCw size={16} /> Click to flip
            </div>
          </div>

          {/* Back */}
          <div 
            className="absolute inset-0 backface-hidden bg-indigo-600 rounded-2xl shadow-xl flex flex-col items-center justify-center p-8 text-center text-white"
            style={{ transform: 'rotateY(180deg)' }}
          >
            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest text-indigo-200 font-bold block mb-2">French Translation</span>
              <h3 className="text-3xl font-bold">{currentWord.french}</h3>
            </div>
            
            <div className="w-16 h-1 bg-white/20 rounded-full mb-6"></div>

            <div>
              <span className="text-xs uppercase tracking-widest text-indigo-200 font-bold block mb-2">Definition</span>
              <p className="text-lg leading-relaxed text-indigo-50">{currentWord.definition}</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex items-center gap-4 mt-8">
        <button
          onClick={(e) => { e.stopPropagation(); handlePrev(); }}
          className="p-4 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-sm"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); handleNext(); }}
          className="p-4 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}

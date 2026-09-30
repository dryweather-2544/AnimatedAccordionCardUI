import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, X, AlertCircle } from "lucide-react";

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
  type?: 'multiple-choice' | 'scenario' | 'comparison' | 'diagnostic';
  wrongAnswerExplanations?: string[]; // Explains why each wrong answer is tempting
}

interface QuizSectionProps {
  quiz: QuizQuestion[];
}

export function QuizSection({ quiz }: QuizSectionProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [confidence, setConfidence] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const getTextColor = (hexColor: string) => {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    return `rgb(${Math.floor(r * 0.4)}, ${Math.floor(g * 0.4)}, ${Math.floor(b * 0.4)})`;
  };

  const handleAnswerSelect = (index: number) => {
    if (showFeedback) return; // Don't allow changing answer after submission
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    
    setShowFeedback(true);
    
    if (selectedAnswer === quiz[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setConfidence(null);
      setShowFeedback(false);
    } else {
      setCompleted(true);
    }
  };

  const handleRetake = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setConfidence(null);
    setShowFeedback(false);
    setScore(0);
    setCompleted(false);
  };

  if (completed) {
    const percentage = Math.round((score / quiz.length) * 100);
    const passed = percentage >= 70;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-6 rounded-2xl"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-4"
            style={{
              backgroundColor: passed ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)',
            }}
          >
            {passed ? (
              <Check className="size-10 text-green-400" />
            ) : (
              <AlertCircle className="size-10 text-red-400" />
            )}
          </motion.div>
          
          <h3 className="text-2xl font-bold text-white mb-2">
            Quiz Complete!
          </h3>
          
          <p className="text-slate-300 mb-4">
            You scored {score} out of {quiz.length}
          </p>
          
          <div className="text-5xl font-bold mb-6" style={{ color: passed ? '#4ade80' : '#f87171' }}>
            {percentage}%
          </div>
          
          <p className="text-slate-200 mb-6">
            {passed 
              ? "Great job! You've mastered this phase." 
              : "Keep practicing to improve your understanding."}
          </p>
          
          <button
            onClick={handleRetake}
            className="px-6 py-3 rounded-xl font-medium transition-all hover:scale-105 bg-slate-600 text-white"
          >
            Retake Quiz
          </button>
        </div>
      </motion.div>
    );
  }

  const question = quiz[currentQuestion];
  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 rounded-2xl"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <AlertCircle className="size-5 text-slate-400" />
          <h3 className="text-white font-semibold">Knowledge Check</h3>
        </div>
        <span className="text-slate-400 text-sm">
          Question {currentQuestion + 1} of {quiz.length}
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-2 bg-black/30 rounded-full mb-6 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-slate-400"
          initial={{ width: 0 }}
          animate={{ width: `${((currentQuestion + 1) / quiz.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Question */}
      <h4 className="text-white text-lg font-medium mb-4">
        {question.question}
      </h4>

      {/* Type indicator */}
      {question.type && (
        <div className="mb-4 px-3 py-1 rounded-full bg-black/30 border border-white/10 inline-block">
          <span className="text-slate-300 text-xs">
            {question.type === 'scenario' && '📋 Scenario-Based'}
            {question.type === 'comparison' && '⚖️ Comparison'}
            {question.type === 'diagnostic' && '🔍 Diagnostic'}
            {question.type === 'multiple-choice' && '📝 Choose the Most Accurate Answer'}
            {!question.type && '📝 Choose the Most Accurate Answer'}
          </span>
        </div>
      )}

      {/* Options */}
      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrectAnswer = index === question.correctAnswer;
          const showCorrect = showFeedback && isCorrectAnswer;
          const showIncorrect = showFeedback && isSelected && !isCorrect;

          return (
            <motion.button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={showFeedback}
              className="w-full text-left px-4 py-3 rounded-xl transition-all relative"
              style={{
                backgroundColor: showCorrect 
                  ? 'rgba(34, 197, 94, 0.2)' 
                  : showIncorrect 
                  ? 'rgba(239, 68, 68, 0.2)'
                  : isSelected
                  ? 'rgba(255, 255, 255, 0.15)'
                  : 'rgba(0, 0, 0, 0.3)',
                border: `2px solid ${
                  showCorrect 
                    ? 'rgb(34, 197, 94)' 
                    : showIncorrect 
                    ? 'rgb(239, 68, 68)'
                    : isSelected
                    ? 'rgba(255, 255, 255, 0.3)'
                    : 'rgba(255, 255, 255, 0.1)'
                }`,
                cursor: showFeedback ? 'default' : 'pointer',
              }}
              whileHover={!showFeedback ? { scale: 1.02 } : {}}
              whileTap={!showFeedback ? { scale: 0.98 } : {}}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-white text-sm">{option}</span>
                {showFeedback && (isCorrectAnswer || (isSelected && !isCorrect)) && (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring" }}
                  >
                    {isCorrectAnswer ? (
                      <Check className="size-5 text-green-400" />
                    ) : (
                      <X className="size-5 text-red-400" />
                    )}
                  </motion.div>
                )}
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Feedback */}
      <AnimatePresence>
        {showFeedback && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-6 space-y-3"
          >
            {/* Main explanation */}
            {question.explanation && (
              <div
                className="p-4 rounded-xl"
                style={{
                  backgroundColor: isCorrect ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                  border: `1px solid ${isCorrect ? 'rgb(34, 197, 94)' : 'rgb(239, 68, 68)'}`,
                }}
              >
                <p className="text-slate-200 text-sm font-medium mb-1">
                  {isCorrect ? '✓ Correct!' : '✗ Not quite.'}
                </p>
                <p className="text-slate-200 text-sm">{question.explanation}</p>
              </div>
            )}

            {/* Wrong answer explanations */}
            {!isCorrect && question.wrongAnswerExplanations && selectedAnswer !== null && question.wrongAnswerExplanations[selectedAnswer] && (
              <div
                className="p-4 rounded-xl"
                style={{
                  backgroundColor: 'rgba(251, 191, 36, 0.1)',
                  border: '1px solid rgba(251, 191, 36, 0.3)',
                }}
              >
                <p className="text-amber-200 text-sm font-medium mb-1">
                  💡 Why this answer is tempting:
                </p>
                <p className="text-slate-200 text-sm">{question.wrongAnswerExplanations[selectedAnswer]}</p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Action button */}
      <div className="flex justify-end">
        {!showFeedback ? (
          <button
            onClick={handleSubmit}
            disabled={selectedAnswer === null}
            className="px-6 py-3 rounded-xl font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 disabled:hover:scale-100 bg-slate-600 text-white"
          >
            Submit Answer
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="px-6 py-3 rounded-xl font-medium transition-all hover:scale-105 bg-slate-600 text-white"
          >
            {currentQuestion < quiz.length - 1 ? 'Next Question' : 'See Results'}
          </button>
        )}
      </div>
    </motion.div>
  );
}
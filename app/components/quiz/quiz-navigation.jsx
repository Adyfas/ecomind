"use client"

import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react"

export function QuizNavigation({ currentIndex, totalQuestions, isFinished, onPrevious, onNext, onTryAgain }) {
  if (isFinished && onTryAgain) {
    return (
      <button
        onClick={onTryAgain}
        className="w-full flex items-center justify-center gap-2 bg-gray-800 hover:bg-black text-white font-medium py-3 rounded-full transition"
      >
        <RotateCcw size={18} />
        Try Again
      </button>
    )
  }

  return (
    <div className="flex justify-between mt-6">
      <button
        onClick={onPrevious}
        disabled={currentIndex === 0}
        className={`flex items-center gap-1 px-5 py-2.5 rounded-full text-sm font-medium transition ${
          currentIndex === 0 ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-gray-200"
        }`}
      >
        <ArrowLeft size={16} />
        Previous
      </button>
      <button
        onClick={onNext}
        className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 px-6 rounded-full text-sm transition shadow hover:shadow"
      >
        {currentIndex === totalQuestions - 1 ? "Finish" : "Next"}
        <ArrowRight size={16} />
      </button>
    </div>
  )
}

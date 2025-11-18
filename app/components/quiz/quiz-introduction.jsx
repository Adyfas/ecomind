"use client"

import { CheckCircle } from "lucide-react"

export function QuizIntroduction({ difficulty, pointPerCorrect, onStart }) {
  return (
    <div className="bg-white rounded-xl p-8 text-center shadow-sm">
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <CheckCircle className="text-blue-600" size={32} />
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-3">
        {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} Mode Selected
      </h2>
      <p className="text-gray-600 mb-6">
        You'll earn <span className="font-bold">{pointPerCorrect} points</span> per correct answer + bonus!
      </p>
      <button
        onClick={onStart}
        className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-full transition shadow-md hover:shadow hover:scale-[1.02]"
      >
        Start Quiz
      </button>
    </div>
  )
}

"use client"

import { Clock } from "lucide-react"
import { motion } from "framer-motion"

export function QuizQuestion({
  question,
  currentIndex,
  totalQuestions,
  timeLeft,
  progressWidth,
  selectedAnswer,
  onSelectAnswer,
}) {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="mb-6">
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: progressWidth }}
            transition={{ duration: 0.4 }}
            className="h-full bg-green-600 rounded-full"
          />
        </div>
      </div>
      <div className="flex justify-between items-center mb-6">
        <span className="text-sm text-gray-600">
          Question {currentIndex + 1} of {totalQuestions}
        </span>
        <div className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">
          <Clock className="text-gray-700" size={14} />
          <span className="text-sm font-medium text-gray-800">{formatTime(timeLeft)}</span>
        </div>
      </div>
      <h2 className="text-lg font-semibold text-gray-800 mb-6 leading-relaxed">{question.question}</h2>
      {question.type === "image" && (
        <div className="flex justify-center mb-6">
          <div className="bg-gray-100 rounded-xl p-3 max-w-[220px]">
            <img
              src={question.imageUrl || "/placeholder.svg"}
              alt="Waste item"
              className="w-full h-auto rounded-lg object-cover"
              onError={(e) => (e.target.src = "https://via.placeholder.com/180?text=Image+Not+Found")}
            />
          </div>
        </div>
      )}
      <div className="space-y-3">
        {question.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => onSelectAnswer(option)}
            className={`w-full p-4 rounded-xl text-left transition ${
              selectedAnswer === option
                ? "bg-green-50 border border-green-500 text-green-800"
                : "bg-gray-50 hover:bg-gray-100 border border-transparent text-gray-800"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}

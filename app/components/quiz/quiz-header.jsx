"use client"

import { ArrowLeft, Globe } from "lucide-react"

export function QuizHeader({ onBack }) {
  return (
    <div className="flex justify-between items-center mb-6">
      <button onClick={onBack} className="p-2 rounded-full hover:bg-gray-200 transition" aria-label="Go back">
        <ArrowLeft className="text-gray-700" size={20} />
      </button>
      <h1 className="text-xl font-bold text-gray-800 flex items-center gap-2">
        <Globe className="text-green-600" size={22} />
        Ecomind Quiz
      </h1>
      <div className="w-8"></div>
    </div>
  )
}

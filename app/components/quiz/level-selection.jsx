"use client"

import { difficultyModes } from "./quiz-data"

export function LevelSelection({ onSelectDifficulty }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {difficultyModes.map((mode) => {
        const Icon = mode.icon
        return (
          <div
            key={mode.key}
            onClick={() => onSelectDifficulty(mode.key)}
            className={`p-5 rounded-xl cursor-pointer transition-all border-2 border-transparent ${mode.bg} hover:shadow-md`}
          >
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
              <Icon className="text-gray-800" size={24} />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">{mode.title}</h3>
            <p className="text-sm text-gray-600">{mode.desc}</p>
            <p className="text-xs text-gray-500 mt-2">10 Questions</p>
          </div>
        )
      })}
    </div>
  )
}

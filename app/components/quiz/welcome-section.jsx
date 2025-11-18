import { Target } from "lucide-react"
import { LevelSelection } from "./level-selection"
import { MainLeaderboard } from "./main-leaderboard"

export function WelcomeSection({ onSelectDifficulty }) {
  return (
    <div className="space-y-6">
      <div className="rounded-xl p-6">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Target className="text-green-600" size={32} />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome to Ecomind Quiz</h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Choose your difficulty and test your knowledge about waste sorting!
          </p>
        </div>
        <LevelSelection onSelectDifficulty={onSelectDifficulty} />
      </div>
      <MainLeaderboard />
    </div>
  )
}

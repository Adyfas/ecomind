import { Trophy } from "lucide-react"
import { initialLeaderboard } from "./quiz-data"

export function MainLeaderboard() {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm mt-6">
      <div className="flex items-center gap-2 mb-4">
        <Trophy className="text-yellow-500" size={20} />
        <h3 className="font-bold text-gray-800">Top Players</h3>
      </div>
      <div className="space-y-2">
        {initialLeaderboard.map((player, index) => (
          <div key={player.name} className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-xs font-medium text-gray-700">
              {index + 1}
            </div>
            <img
              src={player.avatar || "/placeholder.svg"}
              alt={player.name}
              className="w-8 h-8 rounded-full object-cover"
              onError={(e) => (e.target.src = "https://via.placeholder.com/32?text=👤")}
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-800 truncate">{player.name}</p>
            </div>
            <span className="text-xs text-gray-500">{player.score} pts</span>
          </div>
        ))}
      </div>
    </div>
  )
}

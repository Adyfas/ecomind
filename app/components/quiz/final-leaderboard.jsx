import { Trophy, Crown } from "lucide-react"
import { initialLeaderboard } from "./quiz-data"

export function FinalLeaderboard({ score }) {
  const leaderboardWithUser = [...initialLeaderboard, { name: "You", score, avatar: "/images/user-avatar.png" }]
  const sorted = leaderboardWithUser.sort((a, b) => b.score - a.score)

  return (
    <div className="rounded-xl p-5 shadow-sm mt-6">
      <div className="flex items-center gap-2 mb-4">
        <Trophy className="text-yellow-500" size={20} />
        <h3 className="font-bold text-gray-800">Leaderboard</h3>
      </div>
      <div className="space-y-3">
        {sorted.map((player, index) => {
          const rank = index + 1
          const isUser = player.name === "You"
          return (
            <div
              key={`${player.name}-${rank}`}
              className={`flex items-center gap-3 p-2 rounded-lg ${
                isUser ? "bg-green-50 border border-green-200" : "hover:bg-gray-50"
              }`}
            >
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-700">
                {rank}
              </div>
              <img
                src={player.avatar || "/placeholder.svg"}
                alt={player.name}
                className="w-9 h-9 rounded-full object-cover"
                onError={(e) => (e.target.src = "https://via.placeholder.com/36?text=👤")}
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-800 truncate">{player.name}</p>
              </div>
              <span className="text-xs font-medium text-gray-600">{player.score} pts</span>
              {rank === 1 && <Crown className="text-yellow-500" size={16} />}
            </div>
          )
        })}
      </div>
    </div>
  )
}

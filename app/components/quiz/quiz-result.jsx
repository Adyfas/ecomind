import { Medal } from "lucide-react"

export function QuizResult({ score, userRank }) {
  return (
    <div className="bg-white rounded-xl p-8 text-center shadow-sm">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <Medal className="text-green-600" size={32} />
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Quiz Completed!</h2>
      <p className="text-gray-600 mb-1">
        Your score: <span className="font-bold text-green-600">{score}</span> points
      </p>
      <p className="text-gray-500">Ranked #{userRank} on the leaderboard</p>
    </div>
  )
}

export function LoadingResult() {
  return (
    <div className="bg-white rounded-xl p-8 text-center shadow-sm">
      <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-600">Calculating your score and rank...</p>
    </div>
  )
}

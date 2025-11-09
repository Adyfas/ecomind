"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 30 Soal — dengan bonus
const allQuestions = [
  {
    id: 1,
    question: "What type of waste is a plastic water bottle?",
    options: ["Organic", "Recyclable", "Residual", "Hazardous"],
    correctAnswer: "Recyclable",
    type: "text",
    bonus: 0,
  },
  {
    id: 2,
    question: "Which of the following is considered organic waste?",
    options: ["Banana peel", "Glass bottle", "Aluminum can", "Plastic bag"],
    correctAnswer: "Banana peel",
    type: "text",
    bonus: 2,
  },
  {
    id: 3,
    question: "What kind of waste is this?",
    imageUrl: "/images/botol-Plastik.jpeg",
    options: ["Recyclable", "Hazardous", "Organic", "Residual"],
    correctAnswer: "Recyclable",
    type: "image",
    bonus: 3,
  },
  {
    id: 4,
    question: "Used batteries should be disposed of as:",
    options: ["Organic", "Residual", "Recyclable", "Hazardous"],
    correctAnswer: "Hazardous",
    type: "text",
    bonus: 5,
  },
  {
    id: 5,
    question: "What type of waste is food scraps?",
    options: ["Recyclable", "Hazardous", "Residual", "Organic"],
    correctAnswer: "Organic",
    type: "text",
    bonus: 1,
  },
  {
    id: 6,
    question: "Which item belongs in the recyclable bin?",
    options: [
      "Old newspaper",
      "Used tissue",
      "Crumpled chip bag",
      "Dirty pizza box",
    ],
    correctAnswer: "Old newspaper",
    type: "text",
    bonus: 0,
  },
  {
    id: 7,
    question: "What kind of waste is this?",
    imageUrl: "/images/almunium-can.jpg",
    options: ["Organic", "Residual", "Recyclable", "Hazardous"],
    correctAnswer: "Recyclable",
    type: "image",
    bonus: 4,
  },
  {
    id: 8,
    question: "Broken ceramics are classified as:",
    options: ["Recyclable", "Organic", "Residual", "Hazardous"],
    correctAnswer: "Residual",
    type: "text",
    bonus: 0,
  },
  {
    id: 9,
    question: "What type of waste is expired medicine?",
    options: ["Organic", "Hazardous", "Recyclable", "Residual"],
    correctAnswer: "Hazardous",
    type: "text",
    bonus: 6,
  },
  {
    id: 10,
    question: "What kind of waste is this?",
    imageUrl: "/images/fruit-peel.jpg",
    options: ["Hazardous", "Residual", "Recyclable", "Organic"],
    correctAnswer: "Organic",
    type: "image",
    bonus: 2,
  },
  {
    id: 11,
    question: "Which bin should you use for eggshells?",
    options: ["Recyclable", "Hazardous", "Organic", "Residual"],
    correctAnswer: "Organic",
    type: "text",
    bonus: 0,
  },
  {
    id: 12,
    question: "Used cooking oil is considered:",
    options: ["Organic", "Hazardous", "Recyclable", "Residual"],
    correctAnswer: "Hazardous",
    type: "text",
    bonus: 5,
  },
  {
    id: 13,
    question: "What kind of waste is this?",
    imageUrl: "/images/newspaper.webp",
    options: ["Residual", "Recyclable", "Hazardous", "Organic"],
    correctAnswer: "Recyclable",
    type: "image",
    bonus: 1,
  },
  {
    id: 14,
    question: "Pizza boxes with grease belong to:",
    options: ["Recyclable", "Organic", "Residual", "Hazardous"],
    correctAnswer: "Residual",
    type: "text",
    bonus: 3,
  },
  {
    id: 15,
    question: "Tea bags (with staples) are:",
    options: ["Organic", "Recyclable", "Residual", "Hazardous"],
    correctAnswer: "Residual",
    type: "text",
    bonus: 4,
  },
  {
    id: 16,
    question: "What kind of waste is this?",
    imageUrl: "/images/broken-glass.jpeg",
    options: ["Recyclable", "Hazardous", "Residual", "Organic"],
    correctAnswer: "Residual",
    type: "image",
    bonus: 0,
  },
  {
    id: 17,
    question: "Which of these is NOT recyclable?",
    options: ["Plastic bottle", "Glass jar", "Styrofoam cup", "Aluminum can"],
    correctAnswer: "Styrofoam cup",
    type: "text",
    bonus: 5,
  },
  {
    id: 18,
    question: "What type of waste is hair from brushing?",
    options: ["Organic", "Residual", "Recyclable", "Hazardous"],
    correctAnswer: "Organic",
    type: "text",
    bonus: 1,
  },
  {
    id: 19,
    question: "What kind of waste is this?",
    imageUrl: "/images/candy-wrapper.jpg",
    options: ["Recyclable", "Organic", "Residual", "Hazardous"],
    correctAnswer: "Residual",
    type: "image",
    bonus: 2,
  },
  {
    id: 20,
    question: "Which bin for coffee grounds?",
    options: ["Organic", "Recyclable", "Hazardous", "Residual"],
    correctAnswer: "Organic",
    type: "text",
    bonus: 0,
  },
  {
    id: 21,
    question: "Old mobile phones are:",
    options: ["Residual", "Hazardous", "Recyclable", "Organic"],
    correctAnswer: "Recyclable",
    type: "text",
    bonus: 6,
  },
  {
    id: 22,
    question: "What kind of waste is this?",
    imageUrl: "/images/battery.jpeg",
    options: ["Organic", "Recyclable", "Hazardous", "Residual"],
    correctAnswer: "Hazardous",
    type: "image",
    bonus: 7,
  },
  {
    id: 23,
    question: "Soiled paper napkins go to:",
    options: ["Recyclable", "Organic", "Residual", "Hazardous"],
    correctAnswer: "Residual",
    type: "text",
    bonus: 0,
  },
  {
    id: 24,
    question: "Dry leaves are classified as:",
    options: ["Residual", "Hazardous", "Organic", "Recyclable"],
    correctAnswer: "Organic",
    type: "text",
    bonus: 1,
  },
  {
    id: 25,
    question: "What kind of waste is this?",
    imageUrl: "/images/lightbulb.jpg",
    options: ["Residual", "Hazardous", "Recyclable", "Organic"],
    correctAnswer: "Hazardous",
    type: "image",
    bonus: 5,
  },
  {
    id: 26,
    question: "Plastic straws are:",
    options: ["Recyclable", "Residual", "Organic", "Hazardous"],
    correctAnswer: "Residual",
    type: "text",
    bonus: 0,
  },
  {
    id: 27,
    question: "Which item is hazardous waste?",
    options: ["Banana peel", "Paint can", "Cardboard box", "Glass bottle"],
    correctAnswer: "Paint can",
    type: "text",
    bonus: 4,
  },
  {
    id: 28,
    question: "What kind of waste is this?",
    imageUrl: "/images/coffee-cup..jpeg",
    options: ["Recyclable", "Organic", "Residual", "Hazardous"],
    correctAnswer: "Residual",
    type: "image",
    bonus: 2,
  },
  {
    id: 29,
    question: "Used diapers are:",
    options: ["Organic", "Hazardous", "Residual", "Recyclable"],
    correctAnswer: "Residual",
    type: "text",
    bonus: 0,
  },
  {
    id: 30,
    question: "Which bin for expired food?",
    options: ["Hazardous", "Residual", "Recyclable", "Organic"],
    correctAnswer: "Organic",
    type: "text",
    bonus: 3,
  },
];

// Leaderboard awal — 8 peserta
const initialLeaderboard = [
  { name: "Adyfas", score: 95, avatar: "/images/adyfas-ver.jpeg" },
  { name: "Dudi", score: 92, avatar: "/images/person-1.jpg" },
  { name: "Nurhaniifah", score: 88, avatar: "/images/person-2.jpg" },
  { name: "Damara", score: 85, avatar: "/images/person-1.jpg" },
  { name: "Rivano", score: 82, avatar: "/images/person-1.jpg" },
  { name: "Samsudin", score: 80, avatar: "/images/person-1.jpg" },
  { name: "Roy", score: 78, avatar: "/images/person-1.jpg" },
  { name: "Hana", score: 75, avatar: "/images/person-2.jpg" },
];

const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

export default function QuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(600);
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [userRank, setUserRank] = useState(null);

  const totalQuestions = questions.length;

  const initializeQuiz = () => {
    const shuffled = shuffleArray(allQuestions).slice(0, 10);
    setQuestions(shuffled);
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setTimeLeft(600);
    setIsFinished(false);
    setScore(0);
    setShowLeaderboard(false);
    setUserRank(null);
  };

  // Timer
  useEffect(() => {
    if (timeLeft > 0 && currentQuestionIndex >= 0 && !isFinished) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !isFinished) {
      setIsFinished(true);
    }
  }, [timeLeft, currentQuestionIndex, isFinished]);

  // Hitung skor — pastikan dependency lengkap
  useEffect(() => {
    if (isFinished && questions.length > 0) {
      let total = 0;
      questions.forEach((q) => {
        if (selectedAnswers[q.id] === q.correctAnswer) {
          total += 10 + (q.bonus || 0);
        }
      });
      setScore(total);

      // Gabungkan user ke data leaderboard asli
      const withUser = [
        ...initialLeaderboard,
        { name: "You", score: total, avatar: "/images/user-avatar.png" },
      ];
      const sorted = withUser.sort((a, b) => b.score - a.score);
      const yourPosition = sorted.findIndex((p) => p.name === "You") + 1;
      setUserRank(yourPosition);

      setTimeout(() => setShowLeaderboard(true), 1200);
    }
  }, [isFinished, questions, selectedAnswers]);

  const handleAnswerSelect = (option) => {
    const q = questions[currentQuestionIndex];
    setSelectedAnswers((prev) => ({
      ...prev,
      [q.id]: option,
    }));
  };

  const goToNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  const goToPrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const progressWidth = totalQuestions
    ? `${((currentQuestionIndex + 1) / totalQuestions) * 100}%`
    : "0%";

  const handleTryAgain = () => {
    setCurrentQuestionIndex(-1);
    setShowLeaderboard(false);
  };

  // ✅ Render Leaderboard: Tampilkan SEMUA (8 + You)
  const renderLeaderboard = () => {
    const leaderboardWithUser = [
      ...initialLeaderboard,
      { name: "You", score, avatar: "/images/user-avatar.png" },
    ];
    const sorted = leaderboardWithUser.sort((a, b) => b.score - a.score);

    return (
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-green-800 mb-5">
          🏆 Leaderboard
        </h2>
        <div className="space-y-3">
          {sorted.map((player, index) => {
            const realRank = index + 1;
            const isUser = player.name === "You";

            return (
              <div
                key={`${player.name}-${realRank}`}
                className={`flex items-center gap-3 p-3 rounded-xl transition ${
                  isUser
                    ? "bg-green-50 border border-green-200"
                    : "hover:bg-gray-50"
                }`}
              >
                <div className="w-8 h-8 flex items-center justify-center font-bold text-sm rounded-full bg-gray-100">
                  {realRank}
                </div>
                <img
                  src={player.avatar}
                  alt={player.name}
                  className="w-10 h-10 rounded-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/40?text=👤";
                  }}
                />
                <div className="flex-1">
                  <div className="font-medium text-gray-800">{player.name}</div>
                  <div className="text-xs text-gray-500">
                    {player.score} points
                  </div>
                </div>
                {realRank <= 3 && (
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      realRank === 1
                        ? "bg-yellow-400 text-black"
                        : realRank === 2
                        ? "bg-gray-300 text-gray-800"
                        : "bg-orange-400 text-white"
                    }`}
                  >
                    {realRank === 1 ? "🥇" : realRank === 2 ? "🥈" : "🥉"}
                  </div>
                )}
                {isUser && realRank === 1 && (
                  <span className="text-green-500 text-lg">⭐</span>
                )}
                {isUser && realRank > 1 && (
                  <span className="text-green-500 text-lg">▲</span>
                )}
              </div>
            );
          })}
        </div>
        <button
          onClick={handleTryAgain}
          className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 rounded-full transition"
        >
          Try Again
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-green-50 p-4 md:p-6 font-sans">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => window.history.back()}
          className="text-green-800 hover:text-green-600 text-2xl font-bold"
        >
          ←
        </button>
        <h1 className="text-xl font-bold text-green-800">Ecomind Quiz</h1>
        <div></div>
      </div>

      {currentQuestionIndex >= 0 && (
        <div className="mb-6">
          <div className="w-full h-1.5 bg-green-200 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: progressWidth }}
              transition={{ duration: 0.4 }}
              className="h-full bg-green-600 rounded-full"
            />
          </div>
        </div>
      )}

      {currentQuestionIndex >= 0 && !isFinished && (
        <div className="mb-6 flex justify-end">
          <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
            {formatTime(timeLeft)}
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        {currentQuestionIndex === -1 ? (
          <motion.div
            key="intro"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="bg-white rounded-2xl p-8 text-center shadow-sm"
          >
            <div className="text-4xl mb-4">🌍</div>
            <h2 className="text-2xl font-bold text-green-800 mb-3">
              Welcome to Ecomind Quiz
            </h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Answer 10 questions about waste sorting. Get up to{" "}
              <span className="font-bold">100+ points</span> with bonuses!
            </p>
            <button
              onClick={initializeQuiz}
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-full transition shadow-md hover:shadow hover:scale-105"
            >
              Start Quiz →
            </button>
          </motion.div>
        ) : isFinished && showLeaderboard ? (
          <motion.div
            key="leaderboard"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-2xl p-6 shadow-sm"
          >
            <div className="text-center mb-5">
              <div className="text-4xl mb-2">🎉</div>
              <h2 className="text-2xl font-bold text-green-800 mb-1">
                You scored {score} points!
              </h2>
              <p className="text-gray-600">
                Ranked #{userRank} on the leaderboard.
              </p>
            </div>
            {renderLeaderboard()}
          </motion.div>
        ) : isFinished ? (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-2xl p-8 text-center shadow-sm"
          >
            <div className="text-5xl mb-4">♻️</div>
            <h2 className="text-2xl font-bold text-green-800 mb-2">
              Quiz Completed!
            </h2>
            <p className="text-gray-600 mb-5">
              Final score:{" "}
              <span className="font-bold text-green-600">{score}</span> points
            </p>
            <div className="animate-pulse text-green-600 font-medium mb-6">
              Calculating your rank...
            </div>
          </motion.div>
        ) : (
          <motion.div
            key={`q-${questions[currentQuestionIndex]?.id || 0}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-2xl p-6 shadow-sm"
          >
            <div className="text-sm text-gray-500 mb-2">
              Question {currentQuestionIndex + 1} of {totalQuestions}
            </div>
            <h2 className="text-lg font-semibold text-green-800 mb-5 leading-relaxed">
              {questions[currentQuestionIndex].question}
            </h2>

            {questions[currentQuestionIndex].type === "image" && (
              <div className="flex justify-center mb-6">
                <div className="bg-gray-100 rounded-xl p-2 max-w-[200px]">
                  <img
                    src={questions[currentQuestionIndex].imageUrl}
                    alt="Waste item"
                    className="w-full h-auto rounded-lg object-cover"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/150?text=Image+Not+Found";
                    }}
                  />
                </div>
              </div>
            )}

            <div className="space-y-3">
              {questions[currentQuestionIndex].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswerSelect(option)}
                  className={`w-full p-3.5 rounded-xl text-left transition ${
                    selectedAnswers[questions[currentQuestionIndex].id] ===
                    option
                      ? "bg-green-50 border border-green-500 text-green-800"
                      : "bg-gray-50 hover:bg-gray-100 border border-transparent text-gray-800"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {currentQuestionIndex >= 0 && !isFinished && (
        <div className="flex justify-between mt-6">
          <button
            onClick={goToPrevious}
            disabled={currentQuestionIndex === 0}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition ${
              currentQuestionIndex === 0
                ? "text-gray-300 cursor-not-allowed"
                : "text-green-700 hover:bg-green-100"
            }`}
          >
            ← Previous
          </button>
          <button
            onClick={goToNext}
            className="bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 px-6 rounded-full text-sm transition shadow hover:shadow-md"
          >
            {currentQuestionIndex === totalQuestions - 1
              ? "Finish →"
              : "Next →"}
          </button>
        </div>
      )}
    </div>
  );
}

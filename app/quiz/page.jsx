"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QuizHeader } from "../components/quiz/quiz-header";
import { WelcomeSection } from "../components/quiz/welcome-section";
import { QuizIntroduction } from "../components/quiz/quiz-introduction";
import { QuizResult } from "../components/quiz/quiz-result";
import { FinalLeaderboard } from "../components/quiz/final-leaderboard";
import { QuizNavigation } from "../components/quiz/quiz-navigation";
import { LoadingResult } from "../components/quiz/loading-result";
import { QuizQuestion } from "../components/quiz/quiz-question";
import {
  allQuestions,
  difficultyModes,
  initialLeaderboard,
} from "../components/quiz/quiz-data";
import Navbar from "../components/Navbar";

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
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [pointPerCorrect, setPointPerCorrect] = useState(0);
  const [audioInitialized, setAudioInitialized] = useState(false);

  const lobyMusicRef = useRef(null);
  const quizMusicRef = useRef(null);

  const totalQuestions = questions.length;

  const initAudio = () => {
    if (audioInitialized) return;
    lobyMusicRef.current = new Audio("/music/music1.mp3");
    quizMusicRef.current = new Audio("/music/music2.mp3");
    lobyMusicRef.current.volume = 0.2;
    quizMusicRef.current.volume = 0.25;
    lobyMusicRef.current.loop = true;
    quizMusicRef.current.loop = true;
    setAudioInitialized(true);
  };

  const playLobyMusic = () => {
    if (!audioInitialized) return;
    quizMusicRef.current?.pause();
    lobyMusicRef.current
      ?.play()
      .catch((e) => console.log("Loby music: ", e));
  };

  const playQuizMusic = () => {
    if (!audioInitialized) return;
    lobyMusicRef.current?.pause();
    quizMusicRef.current
      ?.play()
      .catch((e) => console.log("Question music play: ", e));
  };

  useEffect(() => {
    return () => {
      lobyMusicRef.current?.pause();
      quizMusicRef.current?.pause();
    };
  }, []);

  const initializeQuiz = (difficulty) => {
    initAudio();
    playQuizMusic();
    setSelectedDifficulty(difficulty);
    const filtered = allQuestions.filter((q) => q.difficulty === difficulty);
    const shuffled = shuffleArray(filtered).slice(0, 10);
    setQuestions(shuffled);
    setPointPerCorrect(
      difficulty === "easy" ? 5 : difficulty === "medium" ? 10 : 20
    );
    setSelectedAnswers({});
    setCurrentQuestionIndex(-1);
    setTimeLeft(600);
    setIsFinished(false);
    setScore(0);
    setShowLeaderboard(false);
    setUserRank(null);
  };

  const handleTryAgain = () => {
    setCurrentQuestionIndex(-1);
    setSelectedDifficulty(null);
    setShowLeaderboard(false);
    if (audioInitialized) playLobyMusic();
  };

  useEffect(() => {
    if (currentQuestionIndex === -1 && !selectedDifficulty) {
      initAudio();
      playLobyMusic();
    }
  }, [currentQuestionIndex, selectedDifficulty]);

  useEffect(() => {
    if (timeLeft > 0 && currentQuestionIndex >= 0 && !isFinished) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !isFinished) {
      setIsFinished(true);
    }
  }, [timeLeft, currentQuestionIndex, isFinished]);

  useEffect(() => {
    if (isFinished && questions.length > 0) {
      let total = 0;
      questions.forEach((q) => {
        if (selectedAnswers[q.id] === q.correctAnswer) {
          total += pointPerCorrect + (q.bonus || 0);
        }
      });
      setScore(total);
      const combined = [
        ...initialLeaderboard,
        { name: "You", score: total, avatar: "/images/user-avatar.png" },
      ];
      const sorted = combined.sort((a, b) => b.score - a.score);
      const yourPosition = sorted.findIndex((p) => p.name === "You") + 1;
      setUserRank(yourPosition);
      setTimeout(() => setShowLeaderboard(true), 1200);
    }
  }, [isFinished, questions, selectedAnswers, pointPerCorrect]);

  const handleAnswerSelect = (option) => {
    const q = questions[currentQuestionIndex];
    setSelectedAnswers((prev) => ({ ...prev, [q.id]: option }));
  };

const goToNext = () => {
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedAnswers[currentQuestion.id] === undefined) {
    return;
  }
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

  const progressWidth = totalQuestions
    ? `${((currentQuestionIndex + 1) / totalQuestions) * 100}%`
    : "0%";

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <AnimatePresence mode="wait">
        {currentQuestionIndex === -1 && !selectedDifficulty ? (
          <motion.div
            key="main"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="py-20"
          >
            <WelcomeSection onSelectDifficulty={initializeQuiz} />
          </motion.div>
        ) : currentQuestionIndex === -1 && selectedDifficulty ? (
          <motion.div
            key="intro"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="py-20"
          >
            <QuizIntroduction
              difficulty={selectedDifficulty}
              pointPerCorrect={pointPerCorrect}
              onStart={() => {
                setCurrentQuestionIndex(0);
                playQuizMusic();
              }}
            />
          </motion.div>
        ) : isFinished && showLeaderboard ? (
          <motion.div
            key="result-leaderboard"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="space-y-6 py-20"
          >
            <QuizResult score={score} userRank={userRank} />
            <FinalLeaderboard score={score} />
            <QuizNavigation
              currentIndex={currentQuestionIndex}
              totalQuestions={totalQuestions}
              isFinished={true}
              onPrevious={goToPrevious}
              onNext={goToNext}
              onTryAgain={handleTryAgain}
            />
          </motion.div>
        ) : isFinished ? (
          <motion.div
            key="loading-result"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-20"
          >
            <LoadingResult />
          </motion.div>
        ) : (
          <motion.div
            key={`q-${questions[currentQuestionIndex]?.id || 0}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="py-20"
          >
            <QuizQuestion
              question={questions[currentQuestionIndex]}
              currentIndex={currentQuestionIndex}
              totalQuestions={totalQuestions}
              timeLeft={timeLeft}
              progressWidth={progressWidth}
              selectedAnswer={
                selectedAnswers[questions[currentQuestionIndex].id]
              }
              onSelectAnswer={handleAnswerSelect}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {currentQuestionIndex >= 0 && !isFinished && (
        <QuizNavigation
          currentIndex={currentQuestionIndex}
          totalQuestions={totalQuestions}
          isFinished={false}
          onPrevious={goToPrevious}
          onNext={goToNext}
        />
      )}
    </div>
  );
}

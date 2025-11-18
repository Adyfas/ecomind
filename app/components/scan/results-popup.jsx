"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";

export default function ResultsPopup({
  showResults,
  aiResult,
  onClose,
  onScanNew,
}) {
  return (
    <AnimatePresence>
      {showResults && aiResult && (
        <motion.div
          initial={{ opacity: 0, x: -20, y: -20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -20, y: -20 }}
          className="absolute top-4 left-4 z-30 w-80"
        >
          <div className="bg-surface/95 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-liniar-to-br from-toska to-neon rounded-lg flex items-center justify-center text-white text-sm">
                  {aiResult.type === "recyclable" ? "♻️" : "🌱"}
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm">
                    Analysis Result
                  </h3>
                  <p className="text-toska text-xs">Waste Identified</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-6 h-6 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <X className="w-3 h-3 text-white" />
              </button>
            </div>

            {/* Content - TEXT PUTIH */}
            <div className="p-4">
              <div className="mb-4">
                <span className="inline-block bg-toska/20 text-toska px-2 py-1 rounded-full text-xs font-medium mb-2">
                  {aiResult.type.toUpperCase()}
                </span>
                <h2 className="text-lg font-semibold text-white mb-1 font-display">
                  {aiResult.label}
                </h2>
                <div className="flex items-center justify-between text-xs text-white/80">
                  <span>Confidence</span>
                  <span className="font-semibold text-toska">
                    {aiResult?.confidence &&
                      `${(aiResult.confidence * 100).toFixed(0)}`}{" "}
                    %
                  </span>
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-2 ${
                      aiResult.type === "non_waste"
                        ? "bg-red-500/20 text-red-400"
                        : "bg-toska/20 text-toska"
                    }`}
                  >
                    {aiResult.type === "non_waste"
                      ? "NOT WASTE"
                      : aiResult.type.toUpperCase()}
                  </span>
                </div>
              </div>

              <div className="w-full bg-white/10 rounded-full h-1.5 mb-3">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${aiResult?.confidence * 100}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-1.5 bg-linear-to-r from-toska to-neon rounded-full"
                />
              </div>

              <div className="bg-white/5 rounded-xl p-3 mb-4 border border-white/10">
                <div className="flex items-center gap-2 text-toska mb-1">
                  <Sparkles className="w-3 h-3" />
                  <span className="font-semibold text-xs">
                    Environmental Insight
                  </span>
                </div>
                <p className="text-white text-xs leading-relaxed">
                  {aiResult.impact}
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={onClose}
                  className="flex-1 bg-white/10 text-white py-2 rounded-lg text-xs font-medium transition-colors hover:bg-white/20 border border-white/10"
                >
                  Close
                </button>
                <button
                  onClick={onScanNew}
                  className="flex-1 bg-toska text-white py-2 rounded-lg text-xs font-medium transition-colors hover:bg-toska/90 shadow-lg shadow-toska/25"
                >
                  Scan New
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X } from 'lucide-react';

export default function ErrorToast({ error, onClose }) {
  return (
    <AnimatePresence>
      {error && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
        >
          <div className="bg-red-500/90 text-white px-6 py-4 rounded-2xl text-sm flex items-center gap-3 shadow-2xl backdrop-blur-sm border border-red-400/20">
            <div className="w-2 h-2 bg-white rounded-full" />
            <span>{error}</span>
            <button
              onClick={onClose}
              className="w-6 h-6 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

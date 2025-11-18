"use client";
import { motion } from "framer-motion";

export default function ScanningOverlay({ loading }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="w-80 h-80 border border-neon-dark/20 rounded-3xl relative">
        <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-toska rounded-tl-lg" />
        <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-toska rounded-tr-lg" />
        <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-toska rounded-bl-lg" />
        <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-toska rounded-br-lg" />

        {loading && (
          <motion.div
            className="absolute inset-0 border-2 border-toska rounded-3xl"
            animate={{
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        )}
      </div>
    </div>
  );
}

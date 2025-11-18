"use client";
import { motion } from "framer-motion";
import { Scan } from 'lucide-react';

export default function ScanButton({ loading, cameraActive, onScan }) {
  return (
    <div className="px-6 py-4 max-md:py-7 shrink-0">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onScan}
        disabled={loading || !cameraActive}
        className="w-full bg-green-500 cursor-pointer hover:from-toska/90 hover:to-neon/90 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-200 flex items-center justify-center gap-3 shadow-lg shadow-toska/25"
      >
        {loading ? (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
            />
            <span className="text-sm">ANALYZING COMPOSITION</span>
          </>
        ) : (
          <>
            <Scan className="w-5 h-5" />
            <span className="text-sm">SCAN WASTE ITEM</span>
          </>
        )}
      </motion.button>

      <p className="text-center text-neon-dark text-xs mt-3 max-md:px-10">
        Position item within frame • Ensure good lighting • Single item per scan
      </p>
    </div>
  );
}

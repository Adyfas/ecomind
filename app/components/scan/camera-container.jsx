"use client";
import { motion } from "framer-motion";
import { Camera } from 'lucide-react';
import ScanningOverlay from "./scanning-overlay";

export default function CameraContainer({
  videoRef,
  loading,
  cameraActive,
  onFlipCamera,
  children,
}) {
  return (
    <div className="flex-1 relative bg-black rounded-xl overflow-hidden mx-4 my-2">
      <button
        onClick={onFlipCamera}
        className="p-2 absolute cursor-pointer bottom-2 right-2 transition-all duration-50 bg-white/50 rounded-lg backdrop-blur-sm z-20 lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          className="text-white"
        >
          <path
            fill="black"
            d="M5 6.09v12l-1.29-1.3a1 1 0 0 0-1.42 1.42l3 3a1 1 0 0 0 1.42 0l3-3a1 1 0 0 0 0-1.42a1 1 0 0 0-1.42 0L7 18.09v-12A1.56 1.56 0 0 1 8.53 4.5H11a1 1 0 0 0 0-2H8.53A3.56 3.56 0 0 0 5 6.09m9.29-.3a1 1 0 0 0 1.42 1.42L17 5.91v12a1.56 1.56 0 0 1-1.53 1.59H13a1 1 0 0 0 0 2h2.47A3.56 3.56 0 0 0 19 17.91v-12l1.29 1.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42l-3-3a1 1 0 0 0-1.42 0Z"
          ></path>
        </svg>
      </button>

      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="w-full h-full object-cover"
      />

      <ScanningOverlay loading={loading} />

      {children}

      {!cameraActive && (
        <div className="absolute inset-0 flex items-center justify-center bg-deep-green/95 rounded-xl">
          <div className="text-center text-neon-dark p-8 max-w-sm">
            <Camera className="w-12 h-12 mx-auto mb-4 opacity-60" />
            <h3 className="text-lg font-semibold mb-2">
              Camera Access Required
            </h3>
            <p className="text-neon-dark text-sm">
              Enable camera permissions to analyze waste materials and receive
              sustainability insights.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

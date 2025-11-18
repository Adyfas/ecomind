"use client";
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ScanHeader({ cameraActive }) {
  const router = useRouter();

  return (
    <div className="px-6 py-4 shrink-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-abu rounded-lg flex items-center justify-center">
            <button onClick={() => router.back()}>
              <ArrowLeft className="w-8 h-8 text-neon-dark" />
            </button>
          </div>
          <h1 className="text-xl font-semibold text-green-500 font-neonfuture font-display">
            EcoMind
          </h1>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <div
            className={`w-2 h-2 rounded-full ${
              cameraActive ? "bg-toska" : "bg-red-400"
            }`}
          />
          <span className="text-neon-dark">
            {cameraActive ? "Ready" : "Offline"}
          </span>
        </div>
      </div>
    </div>
  );
}

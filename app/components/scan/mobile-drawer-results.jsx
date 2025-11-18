"use client";
import { motion } from "framer-motion";
import { Drawer } from "vaul";
import { Sparkles } from "lucide-react";

export default function MobileDrawerResults({
  drawerOpen,
  onDrawerOpenChange,
  aiResult,
}) {
  return (
    <Drawer.Root open={drawerOpen} onOpenChange={onDrawerOpenChange}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/60 z-50 lg:hidden" />
        <Drawer.Content className="fixed bottom-0 left-0 right-0 z-50 flex flex-col rounded-t-3xl bg-surface border-t border-white/10 max-h-[85vh] lg:hidden">
          <div className="mx-auto w-12 h-1.5 shrink-0 rounded-full bg-white/20 mt-4 mb-2" />

          <div className="p-6 overflow-auto">
            {aiResult && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-linear-to-br from-toska to-neon rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl text-white shadow-lg">
                  {aiResult.type === "recyclable" ? "♻️" : "🌱"}
                </div>

                <div className="mb-6">
                  <span className="inline-block bg-toska/20 text-toska px-3 py-1 rounded-full text-sm font-medium mb-2">
                    {aiResult.type.toUpperCase()}
                  </span>
                  <h2 className="text-2xl font-semibold text-white mb-2 font-display">
                    {aiResult.label}
                  </h2>
                  <div className="flex items-center justify-center gap-4 text-sm text-white/80">
                    <span>
                      {aiResult?.confidence
                        ? `${(aiResult.confidence * 100).toFixed(
                            0
                          )}% Confidence`
                        : "85% Confidence"}
                    </span>
                  </div>
                </div>

                <div className="bg-white/5 rounded-2xl p-4 mb-6 border border-white/10 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-toska mb-2">
                    <Sparkles className="w-4 h-4" />
                    <span className="font-semibold text-sm">
                      Environmental Insight
                    </span>
                  </div>
                  <p className="text-white text-sm leading-relaxed">
                    {aiResult.impact}
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => onDrawerOpenChange(false)}
                    className="flex-1 bg-white/10 text-white py-3 rounded-xl font-semibold transition-colors hover:bg-white/20 border border-white/10"
                  >
                    Close
                  </button>
                  <button className="flex-1 bg-toska text-white py-3 rounded-xl font-semibold transition-colors hover:bg-toska/90 shadow-lg shadow-toska/25">
                    Learn More
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}

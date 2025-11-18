"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const EcomindApp = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
        className="flex flex-col lg:flex-row items-center gap-8 px-4 py-8 md:px-12 lg:px-20"
      >
        <div className="relative w-full max-w-md lg:max-w-lg">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="relative h-[500px]">
              <Image
                src="/images/ecomind-app.jpg"
                alt="Try Ecomind"
                width={500}
                height={350}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        <div className="w-full max-w-lg space-y-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Scan. Learn. Change.
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
            Discover What You Throw Away
          </h2>
          <p className="text-sm md:text-base text-gray-600 mt-3">
            Behind every piece of waste lies a story — of time, impact, and
            responsibility. With EcoMind, you can see beyond the trash: learn
            how each item affects the planet and how small actions can make a
            big difference.
          </p>
          <div className="mt-6">
            <Link
              href="/scan"
              className="inline-flex items-center px-6 py-3 bg-neon-dark hover:bg-neon-dark/90 hover:scale-105 transform transition-all duration-500 font-medium rounded-full shadow-sm text-white"
            >
              Get Started →
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EcomindApp;

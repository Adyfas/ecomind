// components/TrashTruckCardCentered.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
export default function TrashTruckCardCentered() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen w-full p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
        className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 ease-out cursor-pointer w-full max-w-6xl"
        style={{ height: "clamp(340px, 40vh, 500px)" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src="/images/trash.jpeg"
          alt="Truck Sampah"
          fill
          className={`object-cover transition-transform duration-500 ease-out ${
            isHovered ? "scale-110" : "scale-100"
          }`}
          priority={false}
        />

        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isHovered ? "opacity-40" : "opacity-25"
          }`}
        ></div>

        <div className="absolute top-10 left-4 right-4 text-white md:bottom-6 md:left-6 md:right-6">
          <h3 className="text-xl md:text-5xl font-bold mb-1">
            Test Your EcoMind
          </h3>
          <p className="text-xs md:text-sm opacity-90 my-5 w-1/2">
            Think you know your waste? Challenge yourself with our interactive
            quiz and see how well you can sort waste like an EcoMind expert.
            Learn, play, and make a difference — one question at a time.
          </p>
          <Link
            href={"/quiz"}
            className="relative -bottom-15 bg-neon-dark text-white text-center p-4 text-xl font-bold transform transition-all duration-500 rounded-2xl hover:bg-neon-dark/90 "
          >
            {" "}
            Start the Quiz →
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

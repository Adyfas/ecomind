"use client";
import { motion } from "framer-motion";
import React from "react";

const HeroLearn = () => {
  return (
    <section className="relative min-h-screen py-15 flex items-center max-w-7xl mx-auto px-4">
      <div className="container mx-auto px-4 w-full max-w-none">
        <div className="flex flex-col">

          <motion.div
            className="w-full"
            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            <div className="max-w-5xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-normal">
                ✦ Understanding Our Impact, Shaping Tomorrow's World
              </h1>
            </div>
          </motion.div>

          <motion.div
            className="w-full mt-8 md:mt-12"
            initial={{ opacity: 0, filter: "blur(10px)", y: 30 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          >
            <div className="max-w-4xl ml-auto">
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-600">
                Explore how our everyday choices impact the planet — and
                discover simple, data-driven ways to make a difference. EcoMind
                Learn helps you understand waste, environment, and
                sustainability from a new perspective. Every action counts in
                our journey towards a more sustainable future where data meets
                conscious living.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroLearn;

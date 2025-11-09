"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useTransform } from "framer-motion";
import { useScroll } from "framer-motion";
import ExplodeLine from "../animations/ExplodeLine";

const Hero = () => {
  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "95vh"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.3, 0]);
  return (
    <section
      ref={container}
      className="h-screen w-full flex-col text-center overflow-hidden flex items-center justify-center max-w-7xl mx-auto px-4"
    >
      <motion.div style={{ y, opacity }}>
        <ExplodeLine className={"absolute left-10 top-1/5 z-30"} delay={4000} />
        <ExplodeLine
          className={"absolute right-20 bottom-1/2 z-30"}
          delay={6000}
        />

        <div className="flex flex-col items-center">
          <motion.h1
            className="text-5xl md:text-8xl font-bold gap-3 tracking-widest my-6"
            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1.1 }}
          >
            Welcome
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-8 h-8 md:w-16 md:h-16 text-emerald-500 inline-block align-middle mx-2"
              fill="currentColor"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.15, ease: "easeOut" }}
            >
              <path d="m21.82 15.42l-2.5 4.33c-.49.86-1.4 1.31-2.32 1.25h-2v2l-2.5-4.5L15 14v2h2.82l-2.22-3.85l4.33-2.5l1.8 3.12c.52.77.59 1.8.09 2.65M9.21 3.06h5c.98 0 1.83.57 2.24 1.39l1 1.74l1.73-1l-2.64 4.41l-5.15.09l1.73-1l-1.41-2.45l-2.21 3.85l-4.34-2.5l1.8-3.12c.41-.83 1.26-1.41 2.25-1.41m-4.16 16.7l-2.5-4.33c-.49-.85-.42-1.87.09-2.64l1-1.73l-1.73-1l5.14.08l2.65 4.42l-1.73-1L6.56 16H11v5H7.4a2.51 2.51 0 0 1-2.35-1.24"></path>
            </motion.svg>
            to the Green Era of
            <motion.span
              className="text-emerald-500 font-neonfuture mx-2"
              initial={{ opacity: 0, scale: 0.8, filter: "blur(6px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 1.15, ease: "easeOut" }}
            >
              EcoMind
            </motion.span>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-8 h-8 md:w-16 md:h-16 text-emerald-500 inline-block align-middle"
              fill="currentColor"
              initial={{ scale: 0.5, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
            >
              <path d="M24.485 2c0 8-18 4-18 20c0 6 2 8 2 8h2s-3-2-3-8c0-4 9-8 9-8s-7.98 4.328-7.98 8.436C21.238 24.43 28.287 9.606 24.484 2z"></path>
            </motion.svg>
          </motion.h1>

          <motion.p
            className="text-sm md:text-2xl text-gray-600 w-1/2 max-md:w-full"
            initial={{ opacity: 0, filter: "blur(6px)", y: 20 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 1, delay: 2.2, ease: "easeOut" }}
          >
            Empowering minds to build a greener future through smart innovation
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

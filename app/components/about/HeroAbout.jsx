"use client";

import { motion } from "framer-motion";
import React from "react";

const HeroAbout = () => {
  return (
    <section className="relative min-h-screen py-25 flex items-center max-w-7xl mx-auto px-4">
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
                ✦ Meet us <span className="font-neonfuture">EcoMind</span>, we believe we can do it
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
                We are committed that we can learn from wherever we are, to
                learn to assess things in an elegant way, to sort things in an
                intelligent way, and look around you... There are many things
                you can change by learning at{" "}
                <span className="font-neonfuture">EcoMind</span>.
              </p>
            </div>
            <div className="max-w-4xl ml-auto py-5">
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-600">
                <span className="font-neonfuture">EcoMind</span> started as a
                student project driven by curiosity and care for the planet. We
                saw how waste management awareness in our community was still
                low — so we built something that makes learning about
                sustainability easier, smarter, and more fun. From there,
                <span className="font-neonfuture"> EcoMind</span> grew into more than just a web app — it became a
                movement to inspire conscious action through technology.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;

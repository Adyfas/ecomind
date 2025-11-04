"use client";
import React from 'react'

import { motion } from "framer-motion";

export default function TextSplitBlur({ headline = "Yoo bro what up", className}) {
const words = headline.split(" "); 

return (
  <div>
    {words.map((word, index) => (
      <motion.p
        initial={{ filter: "blur(10px)", opacity: 0, y: 12 }}
        animate={{ filter: "blur(0)", opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 * index }}
        key={index}
        className={className}
      >
        {word}
      </motion.p>
    ))}
  </div>
);
}

import { motion } from "framer-motion";
import React from "react";

const BoxContact = () => {
  return (
    <motion.div
      className="mt-16 bg-gray-100 rounded-xl overflow-hidden shadow-lg max-w-4xl mx-auto px-4"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-4">Collaboration Invitation</h2>
          <p className="text-gray-700 mb-6">
            We believe small actions can create big change. If you share the
            same vision, let’s collaborate and make sustainability accessible
            for everyone.
          </p>
          <button className="bg-neon-dark hover:bg-neon-dark/90 text-white cursor-pointer font-semibold py-2 px-6 rounded transition-colors duration-300">
            Support →
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default BoxContact;

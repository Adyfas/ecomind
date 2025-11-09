import React from "react";
import { motion } from "framer-motion";

const WasteManagementSection = () => {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] md:grid-rows-[auto_auto] gap-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="relative rounded-3xl overflow-hidden bg-linear-to-br from-green-100 to-emerald-50 p-8 md:p-10 text-gray-900 shadow-2xl md:col-span-2"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-4 max-w-4xl">
              <p className="text-xs uppercase font-medium text-gray-500">
                IMPROVE WASTE MANAGEMENT AT SCALE
              </p>
              <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                For Everyday Heroes
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                Empowering students, families, and communities to recognize
                waste, learn from it, and take meaningful action.
              </p>

              <motion.button
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 15px rgba(74, 222, 128, 0.2)",
                }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 px-6 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-all duration-300"
              >
                Learn More →
              </motion.button>
            </div>
          </div>

          <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-200 rounded-full blur-xl opacity-50"></div>
          <div className="absolute right-5 bottom-0 transform rotate-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="74"
              height="74"
              viewBox="0 0 24 24"
              className="fill-none"
            >
              <path
                stroke="currentColor"
                stroke-width="1.5"
                d="M12 2.844L9.19 9.22l-6.377 2.811l6.377 2.811L12 21.22l2.812-6.377l6.376-2.811l-6.376-2.811z"
              />
            </svg>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
          className="flex justify-center md:row-start-2 md:order-2"
        >
          <img
            src="/images/truk-sampah-kotoran-dan-orang-orang-dengan-layanan-pengumpulan-di-jalan-di-kota-untuk-kebersihan-lingkungan-publik-daur-ulang-sampah-dan-pria-yang-bekerja-dengan-limbah-atau-sampah-untuk-sanitasi-jalan-dengan-transportasi_590464-298744.avif"
            alt="Garbage truck picking up trash"
            className="rounded-2xl shadow-lg object-cover w-full h-auto md:h-full max-h-[400px]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
          className="relative rounded-3xl overflow-hidden bg-neon-dark text-white p-8 md:p-10 shadow-md md:row-start-2 md:order-1 min-w-[280px] md:min-w-[320px] max-w-full"
        >
          <div className="flex-1 space-y-4">
            <p className="text-xs uppercase font-medium">
              Technology that Cares
            </p>
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              From Awareness to Action
            </h2>
            <p className="text-sm md:text-base">
              Turn what you’ve learned into habits that make a difference —
              EcoMind helps you see waste differently, act wisely, and inspire
              others.
            </p>

            <motion.button
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 15px rgba(59, 130, 246, 0.2)",
              }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 px-6 py-3 bg-neon/50 text-white rounded-lg font-medium hover:bg-neon/70 cursor-pointer transition-all duration-300"
            >
              Take Action →
            </motion.button>
          </div>

          <div className="absolute right-5 bottom-0 transform opacity-40">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="74"
              height="74"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                d="M12 2.844L9.19 9.22l-6.377 2.811l6.377 2.811L12 21.22l2.812-6.377l6.376-2.811l-6.376-2.811z"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WasteManagementSection;

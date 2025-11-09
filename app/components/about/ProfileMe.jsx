"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProfileMe = () => {
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
                src="/images/adyfas-ver.jpeg"
                alt="Try Ecomind"
                width={500}
                height={350}
                className="w-full h-auto -translate-y-35"
              />
            </div>
          </div>
        </div>
        <div className="w-full max-w-lg space-y-4 ">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            This Guy
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
            Just Call Me <span className="font-neonfuture">Adyfas</span>
          </h2>
          <p className="text-sm md:text-base text-gray-600 mt-3">
            Behind the luxury of EcoMind, there are students who are happy to
            educate many people. Meet Ferdi Iskandar or commonly known on the
            internet as Adyfas.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfileMe;

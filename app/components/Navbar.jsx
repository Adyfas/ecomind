"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail } from "lucide-react";
import { SiInstagram, SiWhatsapp, SiGithub } from "react-icons/si";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const itemsNavbar = [
    { name: "Home", link: "/" },
    { name: "AI", link: "/scan" },
    { name: "Library", link: "/learn" },
    { name: "Quiz", link: "/quiz" },
    { name: "Statistics", link: "/statics" },
    { name: "About Us", link: "/aboutus" },
    { name: "Contact", link: "/contact" },
  ];

  const socialMedia = [
    {
      name: "Instagram",
      link: "/",
      icon: <SiInstagram className="w-6 h-6" />,
    },
    {
      name: "Github",
      link: "/",
      icon: <SiGithub className="w-6 h-6" />,
    },
    {
      name: "Whatsaap",
      link: "/",
      icon: <SiWhatsapp className="w-6 h-6" />,
    },
    {
      name: "Email",
      link: "/",
      icon: <Mail className="w-6 h-6" />,
    },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 1.1 }}
      className="fixed w-full bg-abu shadow-md p-4 flex justify-between items-center z-50"
    >
      <Link href={"/"}>
        <h1 className="text-2xl font-neonfuture">EcoMind</h1>
      </Link>

      <ul className="hidden md:flex gap-5">
        {itemsNavbar.map((item, index) => (
          <li key={index}>
            <Link
              href={item.link}
              className="font-bold hover:text-neon-dark/70 text-sm transition-all duration-500"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="hidden md:flex items-center gap-4">
        <button className="w-10 h-10 shadow-2xl bg-gray-300/50 rounded-full flex items-center justify-center cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"
            />
          </svg>
        </button>

        <button className="shadow-2xl bg-neon-dark rounded-full flex items-center justify-start w-35 py-1 cursor-pointer group hover:shadow-2xl">
          <div className="rounded-full w-8 h-8 bg-linear-to-br from-pink-400 via-teal-400 to-green-400 flex items-center justify-center mx-2 group-hover:translate-x-24 transition-all duration-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M10 9a1 1 0 0 1 1-1a1 1 0 0 1 1 1v4.47l1.21.13l4.94 2.19c.53.24.85.77.85 1.35v4.36c-.03.82-.68 1.47-1.5 1.5H11c-.38 0-.74-.15-1-.43l-4.9-4.2l.74-.77c.19-.21.46-.32.74-.32h.22L10 19zm1-4a4 4 0 0 1 4 4c0 1.5-.8 2.77-2 3.46v-1.22c.61-.55 1-1.35 1-2.24a3 3 0 0 0-3-3a3 3 0 0 0-3 3c0 .89.39 1.69 1 2.24v1.22C7.8 11.77 7 10.5 7 9a4 4 0 0 1 4-4"
              />
            </svg>
          </div>
          <p className="group-hover:-translate-x-5 transition-all duration-700 text-white font-bold font-neonfuture tracking-widest text-xl">
            Start
          </p>
        </button>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex items-center justify-center w-10 h-10 rounded-full cursor-pointer"
      >
        {isOpen ? (
          <X size={22} className="text-neon-dark" />
        ) : (
          <Menu size={22} className="text-neon-dark" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="overlay"
              className="fixed inset-0 bg-black/40 backdrop-blur-md z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              key="menu"
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 12,
                bounce: 0.4,
              }}
              className="fixed top-0 left-0 w-full bg-white backdrop-blur-xl shadow-2xl p-6 flex flex-col gap-6 z-50 rounded-b-2xl h-screen"
            >
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-neonfuture">EcoMind</h1>
                <button
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer text-neon-dark"
                >
                  <X size={24} />
                </button>
              </div>

              <input
                type="search"
                placeholder="What are you looking for?"
                className="w-full p-2 rounded-lg border border-gray-200 focus:outline-none"
              />

              <ul className="flex flex-col gap-4 mt-4">
                {itemsNavbar.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.link}
                      onClick={() => setIsOpen(false)}
                      className="block font-semibold hover:text-gray-700 text-neon-dark hover:underline transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <button className="shadow-2xl bg-neon-dark rounded-full flex items-center justify-center w-full py-2 group hover:shadow-xl">
                <div className="rounded-full w-8 h-8 bg-linear-to-br from-pink-400 via-teal-400 to-green-400 flex items-center justify-center mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="white"
                      d="M10 9a1 1 0 0 1 1-1a1 1 0 0 1 1 1v4.47l1.21.13l4.94 2.19c.53.24.85.77.85 1.35v4.36c-.03.82-.68 1.47-1.5 1.5H11c-.38 0-.74-.15-1-.43l-4.9-4.2l.74-.77c.19-.21.46-.32.74-.32h.22L10 19zm1-4a4 4 0 0 1 4 4c0 1.5-.8 2.77-2 3.46v-1.22c.61-.55 1-1.35 1-2.24a3 3 0 0 0-3-3a3 3 0 0 0-3 3c0 .89.39 1.69 1 2.24v1.22C7.8 11.77 7 10.5 7 9a4 4 0 0 1 4-4"
                    />
                  </svg>
                </div>
                <p className="text-white font-bold font-neonfuture tracking-widest text-xl">
                  Start
                </p>
              </button>

              <div className="flex items-center justify-center mt-6 gap-5">
                {socialMedia.map((item, idx) => (
                  <Link key={idx} href={item.link}>
                    {item.icon}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

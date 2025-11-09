"use client";

import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import HeroLearn from "../components/Learn/HeroLearn";
import { motion } from "framer-motion";
import { useScroll } from "framer-motion";
import { useTransform } from "framer-motion";
import BlogSection from "../components/Learn/BlogSection";
import EcomindApp from "../components/Home/EcomindApp";
import FAQSection from "../components/Learn/FAQSection";
import FooterEcomind from "../components/FooterEcomind";
import CardImageTrash from "../components/Home/CardImageTrash";
import Lenis from "lenis";

const page = () => {

useEffect(() => {
  const lenis = new Lenis();
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}, []);

  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "95vh"]);
  return (
    <>
      <Navbar />

      <HeroLearn />
      <BlogSection />
      <FAQSection />
      <EcomindApp />
      <div ref={container}>
        <motion.div className="" style={{ y }}>
          <CardImageTrash />
        </motion.div>
      </div>
      <FooterEcomind />
    </>
  );
};

export default page;

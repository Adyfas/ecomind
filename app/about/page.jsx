"use client";
import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import HeroAbout from "../components/about/HeroAbout";
import Vision from "../components/Home/Vision";
import ProfileMe from "../components/about/ProfileMe";
import CardImageTrash from "../components/Home/CardImageTrash";
import Lenis from "lenis";
import { useScroll } from "framer-motion";
import FooterEcomind from "../components/FooterEcomind";
import { useTransform } from "framer-motion";
import { motion } from "framer-motion";
import RevealMoment from "./RevealMoment";

const page = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      smoothWheel: true,
    });

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
    <section>
      <Navbar />
      <HeroAbout />
      <Vision />
      <RevealMoment />
      <ProfileMe />
      <div ref={container}>
        <motion.div className="" style={{ y }}>
          <CardImageTrash />
        </motion.div>
      </div>

      <FooterEcomind />
    </section>
  );
};

export default page;

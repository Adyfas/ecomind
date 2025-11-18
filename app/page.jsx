"use client";
import Navbar from "./components/Navbar";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import Vision from "./components/Home/Vision";
import DecarbonizationSteps from "./components/Home/DecarbonizationSteps";
import CardImageTrash from "./components/Home/CardImageTrash";
import EcomindApp from "./components/Home/EcomindApp";
import FooterEcomind from "./components/FooterEcomind";
import { useScroll } from "framer-motion";
import { useTransform } from "framer-motion";
import { motion } from "framer-motion";
import Hero from "./components/Home/Hero";
import PointInformation from "./components/Home/PointInformation";

export default function Home() {
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
    <section>
      <Navbar />

      <Hero />
      <DecarbonizationSteps />
      <PointInformation />
      <Vision />
      <EcomindApp />
      <div ref={container}>
        <motion.div className="" style={{ y }}>
          <CardImageTrash />
        </motion.div>
      </div>
      <FooterEcomind />
    </section>
  );
}

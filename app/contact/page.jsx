"use client";
import { useEffect, useRef } from "react";
import BoxContact from "../components/contact/BoxContact";
import InputForm from "../components/contact/InputForm";
import FooterEcomind from "../components/FooterEcomind";
import Navbar from "../components/Navbar";
import Lenis from "lenis";
import { useTransform } from "framer-motion";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";

export default function ContactPage() {
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
      <InputForm />
      <div ref={container}>
        <motion.div className="" style={{ y }}>
          <BoxContact />
        </motion.div>
      </div>
      <FooterEcomind />
    </section>
  );
}

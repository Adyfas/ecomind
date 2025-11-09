"use client";
import FooterEcomind from "@/app/components/FooterEcomind";
import BlogSection from "@/app/components/Learn/BlogSection";
import Navbar from "@/app/components/Navbar";
import { useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { useScroll } from "framer-motion";
import Lenis from "lenis";
import React, { useEffect, useRef, useState } from "react";

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
  const [searchQuery, setSearchQuery] = useState("");

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "95vh"]);
  return (
    <>
      <Navbar Search={true} onSearch={setSearchQuery} />
      <div ref={container}>
        <motion.div className="py-15" style={{ y }}>
          <div className="h-[190vh]">
            <BlogSection page={true} searchQuery={searchQuery} />
          </div>
        </motion.div>
      </div>
      <FooterEcomind />
    </>
  );
};

export default page;

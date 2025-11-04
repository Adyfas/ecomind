"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Home/Hero";
import PointInformation from "@/components/Home/PointInformation";
import { useEffect } from "react";
import Lenis from "lenis";
import Vision from "./components/Home/Vision";
import DecarbonizationSteps from "./components/Home/DecarbonizationSteps";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <section className="container">
      <Navbar />

      <Hero />

      <DecarbonizationSteps />
      <PointInformation />

      <Vision />
    </section>
  );
}

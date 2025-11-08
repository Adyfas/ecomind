"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Home/Hero";
import PointInformation from "@/components/Home/PointInformation";
import { useEffect } from "react";
import Lenis from "lenis";
import Vision from "./components/Home/Vision";
import DecarbonizationSteps from "./components/Home/DecarbonizationSteps";
import VisionMobile from "./components/Home/VisionMobile";
import CardImageTrash from "./components/Home/CardImageTrash";
import EcomindApp from "./components/Home/EcomindApp";

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
    <section>
      <Navbar />

      <Hero />

      <DecarbonizationSteps />
      <PointInformation />
      <Vision />
      <EcomindApp />
      <CardImageTrash />
    </section>
  );
}

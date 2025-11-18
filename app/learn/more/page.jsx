"use client";
import Lenis from "lenis";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import BlogSection from "../../components/Learn/BlogSection";
import FooterEcomind from "../../components/FooterEcomind";

const page = () => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <Navbar Search={true} onSearch={setSearchQuery} />
      <div className="pt-30">
        <BlogSection page={true} searchQuery={searchQuery} />
      </div>
      <FooterEcomind />
    </>
  );
};

export default page;

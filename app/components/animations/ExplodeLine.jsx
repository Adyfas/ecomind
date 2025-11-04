"use client";
import "@/styles/explode.css";
import React, { useEffect, useState } from "react";

const ExplodeLine = ({ className, delay = 10000, duration = 800, color ='bg-neon-dark' }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timeoutId;
    let intervalId;
    timeoutId = setTimeout(() => {
      setVisible(true);
      const hideTimer = setTimeout(() => {
        setVisible(false);
      }, duration);
      intervalId = setInterval(() => {
        setVisible(true);

        const hideIntervalTimer = setTimeout(() => {
          setVisible(false);
        }, duration);
        return () => clearTimeout(hideIntervalTimer);
      }, delay + duration);
      return () => {
        clearTimeout(hideTimer);
        clearInterval(intervalId);
      };
    }, delay);
    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [delay, duration]);

  return (
    <div className={className}>
      <div
        className={`explosion-animation-element explosion-animation-element--dark home-hero-heading__explosion home-hero-heading__explosion--1 transition-all duration-800 ease-out ${
          visible ? "block" : "hidden"
        }`}
      >
        <div className="explosion-animation-element__box">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="explosion-animation-element__line-outer">
              <div className={`explosion-animation-element__line ${color}`}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExplodeLine;

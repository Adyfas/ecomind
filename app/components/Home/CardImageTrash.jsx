// components/TrashTruckCardCentered.jsx
"use client";

import { useState } from "react";
import Image from "next/image";

export default function TrashTruckCardCentered() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen w-full p-4">
      <div
        className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 ease-out cursor-pointer w-full max-w-6xl"
        style={{ height: "clamp(340px, 40vh, 500px)" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src="/images/trash.jpeg"
          alt="Truck Sampah"
          fill
          className={`object-cover transition-transform duration-500 ease-out ${
            isHovered ? "scale-110" : "scale-100"
          }`}
          priority={false}
        />

        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isHovered ? "opacity-40" : "opacity-25"
          }`}
        ></div>

        <div className="absolute top-4 left-4 right-4 text-white md:bottom-6 md:left-6 md:right-6">
          <h3 className="text-xl md:text-2xl font-bold mb-1">
            Waste Management Solutions
          </h3>
          <p className="text-xs md:text-sm opacity-90">
            Modern, efficient, and eco-friendly — transforming urban cleanliness
            one truck at a time.
          </p>
        </div>
      </div>
    </div>
  );
}

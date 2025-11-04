"use client";

import { motion } from "framer-motion";
import DecarbonizationSteps from "./DecarbonizationSteps";

const ReadMoreButton = () => (
  <button className="group inline-flex items-center gap-2 text-gray-900 font-medium hover:translate-x-1 transition-transform cursor-pointer">
    Read More
    <span className="group-hover:translate-x-0.5 transition-transform">›</span>
  </button>
);

const ImageBox = ({ imageUrl, alt, rounded = true, className }) => (
  <motion.div
    className={`relative overflow-hidden ${
      rounded ? "rounded-3xl" : "rounded-2xl"
    } shadow-lg ${className ? className : "h-80 md:h-96"}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <img
      src={imageUrl || "/placeholder.svg"}
      alt={alt}
      className="w-full h-full object-cover"
    />
  </motion.div>
);

const PointInformation = () => {
  return (
    <div className="w-full py-16 md:py-28 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-20 md:mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 order-2 md:order-1"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Every Day Matters
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Every day, millions of tons of waste end up polluting our land,
              rivers, and oceans. Indonesia alone generates more than 175,000
              tons of waste daily — much of which is mismanaged or burned in
              open air. This crisis isn't just about trash; it's about the air
              we breathe, the food we eat, and the future we leave behind.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <ImageBox
              imageUrl="/images/pollution-4001555_1280.jpg"
              alt="Waste landfill pollution"
              rounded={true}
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-12 md:gap-16 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 md:order-1"
          >
            <ImageBox
              imageUrl="/images/mountain-but-.jpg"
              alt="Green forest canopy"
              rounded={true}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 order-2 md:order-2"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Together We Can Restore Our Planet
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Environmental awareness isn't optional anymore — it's essential.
              By understanding where our waste goes and how it impacts our
              planet, we can start building habits that make a real difference.
              Small actions today shape the cleaner, greener world of tomorrow.
              The waste we ignore today will return to us tomorrow — in the
              water we drink, the food we eat, and the air we breathe.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PointInformation;

// "use client";

// import { motion } from "framer-motion";
// import React from "react";
// import ExplodeLine from "../animations/ExplodeLine";

// const PointInformation = () => {
//   return (
//     <section className="relative flex h-screen w-full flex-col items-center justify-center bg-neon-dark p-4 pt-16 text-white">
//       <ExplodeLine
//         className="absolute right-15 bottom-1/5 z-30"
//         delay={7000}
//         color="bg-white"
//       />
//       <ExplodeLine
//         className="absolute top-5 left-15 z-30"
//         delay={9000}
//         color="bg-white"
//       />

//       <motion.h1
//         className="text-center font-bold text-3xl md:text-6xl"
//         initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
//         whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
//       >
//         The world is drowning in waste — and Indonesia is no exception.
//       </motion.h1>

//       <div className="mt-10 flex w-full max-w-6xl flex-col items-center gap-8 md:flex-row">
//         <motion.div
//           className="w-full md:w-1/2"
//           initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
//           whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
//         >
//           <iframe
//             className="h-[250px] w-full rounded-lg shadow-lg md:h-[400px]"
//             src="https://www.youtube.com/embed/nb0pM93tmi8"
//             title="YouTube video player"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             allowFullScreen
//           ></iframe>
//         </motion.div>

//         <div className="flex w-full flex-col items-center gap-5 md:w-1/2 md:items-start">
//           <motion.p
//             className="text-base md:text-left md:text-lg text-start"
//             initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
//             whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
//           >
//             Every day, millions of tons of waste end up polluting our land,
//             rivers, and oceans. Indonesia alone generates more than 175,000 tons
//             of waste daily — much of which is mismanaged or burned in open air.
//             This crisis isn’t just about trash; it’s about the air we breathe,
//             the food we eat, and the future we leave behind.
//           </motion.p>
//           <motion.p
//             className="text-start text-sm md:text-left md:text-lg"
//             initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
//             whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
//           >
//             Environmental awareness isn’t optional anymore — it’s essential. By
//             understanding where our waste goes and how it impacts our planet, we
//             can start building habits that make a real difference. Small actions
//             today shape the cleaner, greener world of tomorrow. The waste we
//             ignore today will return to us tomorrow — in the water we drink, the
//             food we eat, and the air we breathe.
//           </motion.p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PointInformation;

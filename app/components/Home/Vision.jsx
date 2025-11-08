import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import VisionMobile from "./VisionMobile";
import LightGreenBox from "./WasteManagementSection";

const Vision = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["10%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 1], [0, 1, 1]);

  const itemSpacing = 20;

  const items = [
    {
      id: 1,
      title: "Sustainability",
      description:
        "Empowering people to make sustainable choices through intelligent technology.",
      side: "left",
      icon: "🌱",
    },
    {
      id: 2,
      title: "Technology & Innovation",
      description:
        "Bridging innovation and environment for a cleaner, smarter future.",
      side: "right",
      icon: "📚",
    },
    {
      id: 3,
      title: "Education & Awareness",
      description:
        "Membangun jaringan kolaboratif antara individu, komunitas, dan pelaku industri untuk menciptakan solusi lingkungan yang inovatif.",
      side: "left",
      icon: "🤝",
    },
    {
      id: 4,
      title: "Community Impact",
      description:
        "Inspiring the next generation to innovate for a sustainable planet.",
      side: "right",
      icon: "🚀",
    },
  ];

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const dotVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "backOut",
      },
    },
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-neon-dark mb-6">
            Our Roots of Purpose
          </h1>
        </motion.div>
        <div
          ref={containerRef}
          className="relative md:h-[180vh] max-md:h-screen"
        >
          {" "}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2">
            <div className="absolute inset-0 max-md:hidden bg-gray-300 rounded-full" />
            <motion.div
              className="absolute max-md:hidden top-0 left-0 w-full bg-neon-dark rounded-full origin-top"
              style={{
                height: lineHeight,
                opacity: opacity,
              }}
            />
          </div>
          {items.map((item, index) => {
            const progress = (index + 1) / items.length;
            const itemScrollProgress = useTransform(
              scrollYProgress,
              [progress - 0.2, progress],
              [0, 1]
            );

            const isLeft = item.side === "left";
            const topPosition = `${itemSpacing + index * itemSpacing}%`;

            return (
              <motion.div
                key={item.id}
                className={`absolute max-md:hidden ${
                  isLeft ? "left-0" : "right-0"
                } w-1/2`}
                style={{
                  top: topPosition,
                  opacity: itemScrollProgress,
                }}
              >
                <motion.div
                  className={`absolute top-8 h-0.5 bg-neon-dark hidden md:block ${
                    isLeft ? "right-0" : "left-0"
                  }`}
                  variants={lineVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  style={{
                    width: isLeft ? "calc(50% - 2rem)" : "calc(50% - 2rem)",
                  }}
                />

                <motion.div
                  className={`absolute top-8 w-4 h-4 rounded-full bg-neon-dark hidden md:block ${
                    isLeft
                      ? "right-0 transform translate-x-2"
                      : "left-0 transform -translate-x-2"
                  }`}
                  variants={dotVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                />

                <motion.div
                  className={`relative ${
                    isLeft ? "pr-4 m-auto md:m-0 md:pr-8" : "pl-4 md:pl-8"
                  } ${
                    isLeft
                      ? "md:text-right max-md:text-ceter"
                      : "md:text-left mac-md:text-center"
                  } text-center md:text-left`}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "0px" }}
                >
                  <div
                    className={`inline-block w-full md:w-auto ${
                      isLeft ? "md:ml-auto" : "md:mr-auto"
                    }`}
                  >
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-gray-300">
                      <div
                        className={`flex flex-col md:flex-row items-center gap-4 mb-4 ${
                          isLeft ? "md:flex-row-reverse" : "md:flex-row"
                        }`}
                      >
                        <div className="text-3xl">{item.icon}</div>
                        <h3 className="text-2xl font-bold text-neon-dark">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {item.description}
                      </p>
                    </div>

                    <div
                      className={`absolute top-8 w-8 h-8 rounded-full bg-white border-2 border-neon-dark items-center justify-center text-neon-dark font-bold text-sm hidden md:flex ${
                        isLeft ? "-right-4" : "-left-4"
                      }`}
                    >
                      {index + 1}
                    </div>

                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white border-2 border-neon-dark flex items-center justify-center text-neon-dark font-bold text-sm md:hidden">
                      {index + 1}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
          <VisionMobile/>
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neon-dark mb-6">
            Bergabunglah dalam Perjalanan Kami
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Bersama-sama kita dapat menumbuhkan perubahan yang berkelanjutan dan
            meninggalkan warisan hijau untuk generasi mendatang.
          </p>
          <button className="bg-neon-dark text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gray-400/25 border-2 border-neon-dark hover:bg-gray-800">
            Mulai Perjalanan
          </button>
        </motion.div> */}
        <LightGreenBox />
      </div>
    </div>
  );
};

export default Vision;

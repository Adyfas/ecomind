"use client";

import { motion } from "framer-motion";

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
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
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
              imageUrl="/images/mountain-trash.jpg"
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
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
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

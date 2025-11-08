import React from "react";
import { motion } from "framer-motion";

const VisionMobile = () => {
  const VisionEcomind = [
    {
      id: 1,
      title: "Sustainability",
      description:
        "Empowering people to make sustainable choices through intelligent technology.",
      icon: "🌱",
    },
    {
      id: 2,
      title: "Technology & Innovation",
      description:
        "Bridging innovation and environment for a cleaner, smarter future.",
      icon: "💡",
    },
    {
      id: 3,
      title: "Education & Awareness",
      description: "Transforming waste awareness into real-world impact.",
      icon: "📚",
    },
    {
      id: 4,
      title: "Community Impact",
      description:
        "Inspiring the next generation to innovate for a sustainable planet.",
      icon: "🤝",
    },
  ];

  return (
    <section className="sm:hidden lg:hidden block relative px-4">
      <div className="max-w-md mx-auto">
        <div className="space-y-4">
          {VisionEcomind.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-5 border border-gray-200 hover:border-green-400 transition-all duration-300 my-5"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className="shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-lg"
                >
                  {item.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <span
                      className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full"
                    >
                      0{index + 1}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMobile;

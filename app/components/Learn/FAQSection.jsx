"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-neon-dark rounded-lg mb-4 bg-abu overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center cursor-pointer hover:bg-[#e8e8e8] transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-neon-dark pr-4">
          {question}
        </span>
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 w-6 h-6 text-neon-dark"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.2, delay: 0.1 },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.2 },
              },
            }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-4">
              <p className="text-gray-700 leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  const [faqData] = useState([
    {
      question:
        "Did you know that a single plastic bottle can take longer to decompose than the lifespan of an average human?",
      answer:
        "It takes around 450 years for a plastic bottle to decompose — that’s about six generations of humans.",
    },
    {
      question:
        "Did you know that cigarette butts are the world’s most littered item?",
      answer:
        "Over 4.5 trillion cigarette butts are discarded each year, and their filters can take up to 12 years to decompose.",
    },
    {
      question: "Did you know that food waste could power entire cities?",
      answer:
        "Through biogas technology, organic waste can be converted into renewable energy — turning trash into electricity.",
    },
    {
      question: "Did you know that one ton of recycled paper saves 17 trees?",
      answer:
        "Recycling paper not only saves trees but also reduces water pollution by 35% and air pollution by 75%.",
    },
  ]);

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <motion.h2
        className="text-3xl font-bold text-center mb-12 text-neon-dark"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
      >
        Did You Know?
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
      >
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          >
            <FAQItem question={faq.question} answer={faq.answer} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FAQSection;

// ---

// ## 🌍 “Did You Know?” — 12 Mind-Blowing Eco Facts

// 1️⃣
// **Q:** Did you know that a single plastic bottle can take longer to decompose than the lifespan of an average human?
// **A:** It takes around **450 years** for a plastic bottle to decompose — that’s about six generations of humans.

// ---

// 2️⃣
// **Q:** Did you know that cigarette butts are the world’s most littered item?
// **A:** Over **4.5 trillion cigarette butts** are discarded each year, and their filters can take **up to 12 years** to decompose.

// ---

// 3️⃣
// **Q:** Did you know that food waste could power entire cities?
// **A:** Through **biogas technology**, organic waste can be converted into renewable energy — turning trash into electricity.

// ---

// 4️⃣
// **Q:** Did you know that one ton of recycled paper saves 17 trees?
// **A:** Recycling paper not only saves trees but also reduces water pollution by **35%** and air pollution by **75%**.

// ---

// 5️⃣
// **Q:** Did you know that ocean plastic could outweigh all the fish by 2050?
// **A:** If current trends continue, there will be **more plastic than fish** in the ocean by weight within the next 25 years.

// ---

// 6️⃣
// **Q:** Did you know that your smartphone could contain recycled e-waste materials?
// **A:** Modern electronics can reuse **metals like gold and copper** extracted from discarded devices — saving both money and resources.

// ---

// 7️⃣
// **Q:** Did you know that aluminum is 100% recyclable?
// **A:** Every **aluminum can** you recycle can be back on the shelf in **less than 60 days**, infinitely reusable without losing quality.

// ---

// 8️⃣
// **Q:** Did you know that composting reduces landfill methane by up to 50%?
// **A:** Organic waste in landfills releases methane — a greenhouse gas **25x more powerful** than carbon dioxide. Composting helps stop that.

// ---

// 9️⃣
// **Q:** Did you know that glass can take millions of years to decompose?
// **A:** Unlike plastic or paper, **glass doesn’t biodegrade** — but it’s infinitely recyclable if properly managed.

// ---

// 10️⃣
// **Q:** Did you know that fashion is one of the most polluting industries on Earth?
// **A:** The fashion industry produces **10% of global carbon emissions** — more than all international flights and shipping combined.

// ---

// 11️⃣
// **Q:** Did you know that 90% of the trash floating in oceans is plastic?
// **A:** Around **8 million tons of plastic** enter the oceans every year — that’s one truckload every single minute.

// ---

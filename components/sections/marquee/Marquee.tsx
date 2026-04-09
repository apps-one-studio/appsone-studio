"use client";

import { motion } from "framer-motion";

const items = [
  "AI-Powered Solutions",
  "Conversion-Focused UX",
  "Scalable SaaS Systems",
  "Growth-Driven Engineering",
  "High-Performance Websites",
];

export default function Marquee() {
  const repeated = [...items, ...items, ...items, ...items]; // 🔥 extend width

  return (
    <div className="bg-[var(--color-primary)] text-white py-3 overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap gap-8"
        animate={{ x: [0, -1000] }} // 🔥 pixel-based movement
        transition={{
          repeat: Infinity,
          duration: 12, // 🔥 faster
          ease: "linear",
        }}
      > 
        {repeated.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-4 text-sm tracking-wide"
          >
            {item}
            <span className="w-1.5 h-1.5 bg-white rounded-full" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
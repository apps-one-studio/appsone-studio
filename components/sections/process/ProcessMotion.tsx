"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code, TrendingUp } from "lucide-react";

const steps = [
  {
    title: "Discover",
    desc: "We analyze your business, users, and market opportunities.",
    icon: <Search className="w-6 h-6" />,
  },
  {
    title: "Design",
    desc: "We craft UX systems and scalable product architecture.",
    icon: <PenTool className="w-6 h-6" />,
  },
  {
    title: "Build",
    desc: "We engineer high-performance, scalable digital platforms.",
    icon: <Code className="w-6 h-6" />,
  },
  {
    title: "Grow",
    desc: "We optimize, analyze, and scale your growth systems.",
    icon: <TrendingUp className="w-6 h-6" />,
  },
];

export default function ProcessMotion() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#022C22] via-[#065F46] to-[#22C55E] text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Our Proven Process
        </h2>

        <p className="text-white/80 max-w-2xl mx-auto mb-16">
          A structured approach that transforms ideas into scalable digital products.
        </p>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-8">

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Connector Line (desktop) */}
              {i !== steps.length - 1 && (
                <div className="hidden md:block absolute top-8 right-[-50%] w-full h-[2px] bg-white/20" />
              )}

              {/* Card */}
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition">

                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--color-accent)] text-black mx-auto mb-4">
                  {step.icon}
                </div>

                <h3 className="text-xl font-semibold mb-2">
                  {step.title}
                </h3>

                <p className="text-sm text-white/80">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
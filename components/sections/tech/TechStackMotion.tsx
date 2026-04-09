"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Next.js / React", level: 95 },
  { name: "UI/UX Design Systems", level: 92 },
  { name: "Backend Architecture", level: 90 },
  { name: "AI Integration", level: 88 },
  { name: "Performance Optimization", level: 93 },
  { name: "SEO & Growth Systems", level: 89 },
];

export default function TechStackMotion() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-black">
      <div className="max-w-5xl mx-auto px-4">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Our Technical Expertise
        </h2>

        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          We combine engineering excellence with growth-driven systems to deliver scalable digital products.
        </p>

        <div className="space-y-8">
          {skills.map((skill, i) => (
            <div key={i}>

              {/* Label */}
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-gray-500">
                  {skill.level}%
                </span>
              </div>

              {/* Bar */}
              <div className="w-full h-3 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
            {/* className="h-full bg-[var(--color-accent)] shadow-[0_0_10px_#22C55E] rounded-full" */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full bg-[var(--color-accent)] rounded-full"
                />

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
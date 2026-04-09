"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function CaseStudiesMotion() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }} // slight improvement
      className="py-20 bg-gray-50 dark:bg-black"
    >
      <h2 className="text-3xl font-bold text-center mb-12">
        Proven Results
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <motion.div
          variants={fadeInUp}
          className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow"
        >
          <h3 className="text-xl text-accent font-bold text-center mb-4">FinTech Platform</h3>
          <p className="text-center">Increased user conversion by 120%.</p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow"
        >
          <h3 className="text-xl text-accent font-bold text-center mb-4">E-commerce System</h3>
          <p className="text-center">Reduced bounce rate by 45%.</p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow"
        >
          <h3 className="text-xl text-accent font-bold text-center mb-4">SaaS Dashboard</h3>
          <p className="text-center">Improved retention by 60%.</p>
        </motion.div>
      </div>
    </motion.section>
  );
}
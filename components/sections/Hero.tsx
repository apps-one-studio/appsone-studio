"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import TypingText from "@/components/ui/TypingText";

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-white">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-primary pointer-events-none" />

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-glow pointer-events-none" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-28 text-center">

        {/* MAIN HEADLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          We Build Digital Products
          <br />
          <span className="text-[var(--color-accent)]">
            That Grow Your Business
          </span>
        </motion.h1>

        {/* TYPING LINE (ONLY ONCE) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-lg md:text-xl"
        >
          <h1 className="text-2xl font-bold">
            <TypingText />
          </h1>

        </motion.div>

        {/* SUPPORT TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-gray-200 max-w-2xl mx-auto"
        >
          AI-powered development, UX strategy, and growth systems
          designed to scale modern businesses globally.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-10 flex justify-center gap-4 flex-wrap"
        >
          <Link href="/contact" className="btn-primary">
            Start a Project
          </Link>

          <Link
            href="/services"
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
          >
            Explore Services
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

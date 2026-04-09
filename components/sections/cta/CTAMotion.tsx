"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTAMotion() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#022C22] via-[#065F46] to-[#22C55E] text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Ready to Build Something Powerful?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/80 mb-10 text-lg"
        >
          Partner with Appsone Studio to design, build, and scale intelligent digital systems that drive real growth.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >

          {/* Primary CTA */}
          <Link
            href="/contact"
            className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            Start a Project
          </Link>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/2348077776001?text=Hello%20Appsone%20Studio,%20I%20want%20to%20start%20a%20project"
            target="_blank"
            className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition"
          >
            Chat on WhatsApp
          </a>

        </motion.div>

      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "David A.",
    location: "Lagos, Nigeria",
    text: "Appsone Studio transformed our entire digital platform. Our conversions skyrocketed.",
  },
  {
    name: "Sarah M.",
    location: "Porthacourt, Nigeria",
    text: "Professional, fast, and extremely strategic. Highly recommended.",
  },
  {
    name: "James K.",
    location: "Nairobi, Kenya",
    text: "Their AI solutions gave us a serious competitive edge.",
  },
  {
    name: "Oyekade A.",
    location: "Abuja, Nigeria",
    text: "Top-tier development and communication throughout.",
  },
  {
    name: "Grace T.",
    location: "Accra, Ghana",
    text: "Beautiful UI and strong backend systems. Perfect balance.",
  },
  {
    name: "Hassan A.",
    location: "Kano, Nigeria",
    text: "They think beyond design — they think growth.",
  },
  {
    name: "Fatima S.",
    location: "Dubai, UAE",
    text: "The UX improvements alone increased our retention massively.",
  },
  {
    name: "Helen J.",
    location: "Uyo, Nigeria",
    text: "Clean architecture, scalable systems, and excellent support.",
  },
];

export default function TestimonialsMotion() {
  return (
    <section className="py-24 bg-white dark:bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          What Our Clients Say
        </h2>

        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Real results from businesses we have helped grow and scale.
        </p>

        {/* Carousel */}
        <div className="relative overflow-hidden">

          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="min-w-[300px] md:min-w-[350px] bg-gray-100 dark:bg-gray-900 p-6 rounded-2xl shadow-lg"
              >
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  “{t.text}”
                </p>

                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-gray-500">{t.location}</div>
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
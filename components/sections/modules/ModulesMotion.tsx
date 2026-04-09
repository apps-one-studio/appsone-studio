"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const modules = [
  {
    title: "Product Development",
    desc: "We build scalable SaaS platforms, web apps, and APIs designed for performance and growth.",
    image: "/images/dev.png",
    link: "/services/development",
    prefetch: true,
  },
  {
    title: "UX & Digital Experience",
    desc: "User-centered design systems that convert, engage, and retain customers.",
    image: "/images/ux.png",
    link: "/services/strategy-and-ux",
    prefetch: true,
  },
  {
    title: "Growth & Analytics",
    desc: "Data-driven strategies, CRO, and analytics systems that scale revenue.",
    image: "/images/growth.png",
    link: "/services/growth",
    prefetch: true,
  },
  {
    title: "AI Engineering",
    desc: "AI-powered websites, automation systems, and intelligent digital infrastructure.",
    image: "/images/ai.png",
    link: "/services/ai-systems",
    prefetch: true,
  },
];

export default function ModulesMotion() {
  return (
    <section className="py-24 space-y-24 max-w-7xl mx-auto px-4">

      <h2 className="text-4xl font-bold text-center">
        Our Core Capabilities
      </h2>

      {modules.map((module, index) => {
        const isReverse = index % 2 !== 0;

        return (
          <motion.div
            key={module.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`grid md:grid-cols-2 gap-12 items-center ${
              isReverse ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* TEXT */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                {module.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {module.desc}
              </p>

              <Link
                href={module.link}
                className="btn-primary inline-block"
              >
                Explore →
              </Link>
            </div>

            {/* IMAGE */}
            <div className="relative aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={module.image}
                alt={module.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        );
      })}
    </section>
  );
}

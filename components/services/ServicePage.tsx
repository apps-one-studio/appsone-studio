"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import Link from "next/link";
import Image from "next/image";

/* ✅ DEFINE TYPES */
type Testimonial = {
  text: string;
  name: string;
  role: string;
};

type Pricing = {
  title: string;
  price: string;
  features: string[];
};

type Service = {
  title: string;
  hero: string;
  desc: string;
  image: string;

  problems: string[];
  solutions: string[];
  features: string[];
  process: string[];

  testimonials: Testimonial[];
  pricing: Pricing[];

  results: string;
};

export default function ServicePage({ service }: { service: Service }) {
  return (
    <div>

      {/* HERO */}
      <section className="py-24 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-4xl md:text-6xl font-bold">
              {service.hero}
            </h1>

            <p className="mt-6">{service.desc}</p>

            <Link
              href="/contact"
              className="inline-block mt-8 bg-[var(--color-accent)] px-6 py-3 rounded-lg"
            >
              Start Project
            </Link>
          </div>

          <div className="relative aspect-[4/3] md:aspect-[16/9]">
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover rounded-2xl"
            />
          </div>

        </div>
      </section>

      {/* 🔴 PROBLEMS */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 max-w-6xl mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">
          Common Challenges
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {service.problems.map((item, i) => (
            <div key={i} className="p-6 bg-red-50 rounded-xl">
              {item}
            </div>
          ))}
        </div>
      </motion.section>

      {/* 🟢 SOLUTIONS */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Our Solution
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {service.solutions.map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-xl shadow">
                {item}
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ⚙️ FEATURES */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 max-w-6xl mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">
          What You Get
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {service.features.map((item, i) => (
            <div key={i} className="p-6 border rounded-xl">
              {item}
            </div>
          ))}
        </div>
      </motion.section>

      {/* 🧩 PROCESS */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Our Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {service.process.map((step, i) => (
              <div key={i} className="p-6 bg-white rounded-xl shadow text-center">
                <p className="font-semibold">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 💬 TESTIMONIALS */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            What Clients Say
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {service.testimonials.map((t, i) => (
              <div key={i} className="p-6 border rounded-xl">
                <p className="italic">&quot;{t.text}&quot;</p>

                <div className="mt-4 font-semibold">
                  {t.name}
                </div>
                <div className="text-sm text-gray-500">
                  {t.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 💰 PRICING */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Pricing
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {service.pricing.map((p, i) => (
              <div key={i} className="p-6 bg-white rounded-xl shadow">
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="text-2xl text-[var(--color-accent)] mt-2">
                  {p.price}
                </p>

                <ul className="mt-4 space-y-2">
                  {p.features.map((f, j) => (
                    <li key={j}>• {f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 📈 RESULTS */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">
          Results You Can Expect
        </h2>

        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          {service.results}
        </p>
      </motion.section>

    </div>
  );
}
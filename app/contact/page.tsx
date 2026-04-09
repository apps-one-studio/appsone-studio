"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-black">
      <div className="max-w-6xl mx-auto px-4">

        <h1 className="text-4xl font-bold text-center mb-6">
          Start Your Project
        </h1>

        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Tell us about your project. We’ll respond within 24 hours.
        </p>

        <div className="grid md:grid-cols-2 gap-12">

          {/* FORM */}
          <motion.form
            action="https://formspree.io/f/xqegnlog"
            method="POST"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg border"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full p-3 rounded-lg border"
            />

            <select
              name="project"
              className="w-full p-3 rounded-lg border"
            >
              <option>Project Type</option>
              <option>Web Development</option>
              <option>AI Integration</option>
              <option>UX Design</option>
              <option>Growth & Analytics</option>
            </select>

            <input
              type="text"
              name="budget"
              placeholder="Estimated Budget"
              className="w-full p-3 rounded-lg border"
            />

            <textarea
              name="message"
              placeholder="Tell us about your project..."
              rows={5}
              className="w-full p-3 rounded-lg border"
            />

            <button
              type="submit"
              className="w-full bg-[var(--color-accent)] text-white py-3 rounded-lg hover:scale-105 transition"
            >
              Send Message
            </button>
          </motion.form>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >

            {/* WhatsApp */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow">
              <h3 className="text-xl font-semibold mb-2">
                Chat on WhatsApp
              </h3>

              <p className="text-gray-600 mb-4">
                Need a faster response? Chat with us directly.
              </p>

              <a
                href="https://wa.me/2348077776001?text=Hello%20Appsone%20Studio,%20I%20want%20to%20start%20a%20project"
                target="_blank"
                className="inline-block bg-green-500 text-white px-5 py-3 rounded-lg"
              >
                Open WhatsApp
              </a>
            </div>

            {/* Contact Info */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow">
              <h3 className="text-xl font-semibold mb-2">
                Contact Info
              </h3>

              <p className="text-gray-600">
                Email: contact@appsonestudio.com
              </p>

              <p className="text-gray-600">
                Location: Lagos, Nigeria
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";

export default function WhatsAppFloat() {
  return ( 
    <motion.a
      href="https://wa.me/2348077776001?text=Hello%20Appsone%20Studio,%20I%20want%20to%20start%20a%20project"
      target="_blank"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1 }}
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 hover:scale-110 transition"
    >
      💬 Chat
    </motion.a>
  );
}
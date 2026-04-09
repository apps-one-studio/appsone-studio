"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 2000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-32 left-1/2 -translate-x-1/2 z-50">
      <Link
        href="/contact"
        className="bg-[var(--color-accent)] text-xs font-semibold text-white px-4 py-1 rounded-full shadow-l hover:scale-105 transition"
      >
        Start Your Project 🚀
      </Link>
    </div>
  );
}
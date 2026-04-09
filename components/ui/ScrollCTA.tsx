"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ScrollCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = document.body.scrollHeight * 0.7;
      setShow(window.scrollY > triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-17 left-5 bg-black text-white p-1 rounded-l shadow-lg max-w-xs">
      <p className="text-xs">
        Need a high-performance website or SaaS product?
      </p>

      <Link
        href="/contact"
        className="block text-xs font-bold text-center bg-[var(--color-primary-3)] text-white rounded-md"
      >
        Get Free Strategy Call
      </Link>
    </div>
  );
}
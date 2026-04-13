"use client";

import { useEffect, useState } from "react";

const texts = [
  "AI-powered web platforms",
  "Conversion-focused UX systems",
  "Scalable SaaS architectures",
  "Growth-driven digital solutions",
    "Search Engine Optimization",
    "Strategic Partnership",
];

export default function TypingText() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;
    const current = texts[textIndex];

    const typing = setInterval(() => {
      setDisplayed(current.slice(0, index));
      index++;

      if (index > current.length) {
        clearInterval(typing);

        setTimeout(() => {
          setTextIndex((prev) => (prev + 1) % texts.length);
          setDisplayed("");
        }, 1500);
      }
    }, 50);

    return () => clearInterval(typing);
  }, [textIndex]);

  return (
  <span className="text-[var(--color-accent-soft)] text-xs xl:text-xl">
    {displayed}
    <span className="animate-pulse">|</span>
  </span>
 );
}

// Class,CSS Value,Best Use Case
// text-xs,0.75rem (12px),Mobile screens (Your current setting)
// text-sm,0.875rem (14px),Small/Compact text
// text-base,1rem (16px),"Standard ""Medium"" body text" USE AS "md:text-base"
// text-lg,1.125rem (18px),Slightly larger for emphasis
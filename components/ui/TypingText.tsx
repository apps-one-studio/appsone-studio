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
    <span className="text-[var(--color-accent)]">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}
// "use client";

// import { useEffect, useState } from "react";

// const texts = [
//   "AI-Powered Websites.",
//   "Smart Digital Systems.",
//   "UX Strategy and Industry Solutions.",
//   "Search Engine Optimization.",
//   "Scalable Growth Platforms.",
//   "Strategic Partnership.",
// ];

// export default function TypingText() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % texts.length);
//     }, 2500);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <p className="mt-4 text-green-300 font-medium">
//       {texts[index]}
//     </p>
//   );
// }

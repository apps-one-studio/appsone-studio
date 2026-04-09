"use client";

import React, { memo } from "react";

type CardProps = {
  title: string;
  desc: string;
  icon?: React.ReactNode;
  className?: string;
};

const CardComponent = ({ title, desc, icon, className }: CardProps) => {
  return (
    <div
      className={`p-6 rounded-2xl border border-gray-200 dark:border-gray-800 
      shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ${className || ""}`}
    >
      {icon && (
        <div className="mb-4 text-[var(--color-accent)]">{icon}</div>
      )}

      <h3 className="text-lg font-semibold">{title}</h3>

      <p className="text-gray-600 dark:text-gray-400 mt-2">
        {desc}
      </p>
    </div>
  );
};

// Memoized export
const Card = memo(CardComponent);

Card.displayName = "Card";

export default Card;
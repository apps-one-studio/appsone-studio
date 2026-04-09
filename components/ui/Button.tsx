import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline";
};

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "px-6 py-3 rounded-xl transition-all duration-300 font-medium",
        variant === "primary" &&
          "bg-[var(--color-accent)] text-white hover:scale-105",
        variant === "outline" &&
          "border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
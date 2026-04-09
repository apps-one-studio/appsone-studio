"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export default function NavbarClient() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  // Close all menus (important UX fix)
  const closeAll = () => {
    setOpen(false);
    setServicesOpen(false);
    setAboutOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 dark:bg-black/90 backdrop-blur border-b">

      {/* NAVBAR */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">

        {/* LOGO */}
        <Link
          href="/"
          onClick={closeAll}
          className="text-lg md:text-xl font-bold"
        >
          Appsone Studio
        </Link>

        {/* DESKTOP */}
        <nav className="hidden md:flex items-center gap-6 text-sm">

          <Link href="/" className="hover:text-[var(--color-accent)]">
            Home
          </Link>

          {/* SERVICES */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-[var(--color-accent)]">
              Services <ChevronDown size={16} />
            </button>

            {servicesOpen && ( 
              // <div className="absolute top-10 left-0 bg-white dark:bg-black shadow-xl p-6 rounded-xl grid grid-cols-2 gap-4 w-[420px] border">
              <div className="absolute top-full left-0 pt-3">
                <div className="bg-white dark:bg-black shadow-xl p-6 rounded-xl grid grid-cols-2 gap-4 w-[420px] border">
                <Link href="/services/development" className="hover:text-[var(--color-accent)]">Development</Link>
                <Link href="/services/strategy-and-ux" className="hover:text-[var(--color-accent)]">Strategy & UX</Link>
                <Link href="/services/growth" className="hover:text-[var(--color-accent)]">Growth</Link>
                <Link href="/services/ai-systems" className="hover:text-[var(--color-accent)]">AI Systems</Link>
               </div>
            </div>
            )}
          </div>

          {/* ABOUT */}
          <div
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-[var(--color-accent)]">
              About <ChevronDown size={16} />
            </button>

            {aboutOpen && (
              // <div className="absolute top-10 left-0 bg-white dark:bg-black shadow-xl p-4 rounded-xl flex flex-col gap-3 w-[220px] border">
              <div className="absolute top-full left-0 pt-3">
                <div className="bg-white dark:bg-black shadow-xl p-6 rounded-xl grid grid-cols-2 gap-4 w-[420px] border">
                <Link href="/about" className="hover:text-[var(--color-accent)]">About Us</Link>
                <Link href="/about/mission" className="hover:text-[var(--color-accent)]">Mission</Link>
                <Link href="/about/vision" className="hover:text-[var(--color-accent)]">Vision</Link>
                <Link href="/about/values" className="hover:text-[var(--color-accent)]">Core Values</Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/case-studies" className="hover:text-[var(--color-accent)]">Case Studies</Link>
          <Link href="/contact" className="hover:text-[var(--color-accent)]">Contact</Link>

          <Link
            href="/contact"
            className="btn-primary px-4 py-2 rounded-lg text-white"
          >
            Get Started
          </Link>
        </nav>

        {/* MOBILE BUTTON */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
  <div className="md:hidden bg-white dark:bg-black border-t">

    <div className="px-4 py-4 flex flex-col divide-y">

      {/* HOME */}
      <Link
        href="/"
        onClick={closeAll}
        className="py-3 flex items-center justify-between hover:text-[var(--color-accent)]"
      >
        Home
      </Link>

      {/* SERVICES */}
      <div className="py-3">
        <button
          onClick={() => setServicesOpen(!servicesOpen)}
          className="w-full flex items-center justify-between hover:text-[var(--color-accent)]"
        >
          <span>Services</span>
          <ChevronDown
            size={16}
            className={`transition ${servicesOpen ? "rotate-180" : ""}`}
          />
        </button>

        {servicesOpen && (
          <div className="mt-3 pl-4 flex flex-col gap-3 text-sm text-gray-600 dark:text-gray-300">
            <Link href="/services/development" onClick={closeAll} className="hover:text-[var(--color-accent)]">
              Development
            </Link>
            <Link href="/services/strategy-and-ux" onClick={closeAll} className="hover:text-[var(--color-accent)]">
              Strategy & UX
            </Link>
            <Link href="/services/growth" onClick={closeAll} className="hover:text-[var(--color-accent)]">
              Growth
            </Link>
            <Link href="/services/ai-systems" onClick={closeAll} className="hover:text-[var(--color-accent)]">
              AI Systems
            </Link>
          </div>
        )}
      </div>

      {/* ABOUT */}
      <div className="py-3">
        <button
          onClick={() => setAboutOpen(!aboutOpen)}
          className="w-full flex items-center justify-between hover:text-[var(--color-accent)]"
        >
          <span>About</span>
          <ChevronDown
            size={16}
            className={`transition ${aboutOpen ? "rotate-180" : ""}`}
          />
        </button>

        {aboutOpen && (
          <div className="mt-3 pl-4 flex flex-col gap-3 text-sm text-gray-600 dark:text-gray-300">
            <Link href="/about" onClick={closeAll} className="hover:text-[var(--color-accent)]">About Us</Link>
            <Link href="/about/mission" onClick={closeAll} className="hover:text-[var(--color-accent)]">Mission</Link>
            <Link href="/about/vision" onClick={closeAll} className="hover:text-[var(--color-accent)]">Vision</Link>
            <Link href="/about/values" onClick={closeAll} className="hover:text-[var(--color-accent)]">Core Values</Link>
          </div>
        )}
      </div>

      {/* CASE STUDIES */}
      <Link
        href="/case-studies"
        onClick={closeAll}
        className="py-3 flex items-center justify-between hover:text-[var(--color-accent)]"
      >
        Case Studies
      </Link>

      {/* CONTACT */}
      <Link
        href="/contact"
        onClick={closeAll}
        className="py-3 flex items-center justify-between hover:text-[var(--color-accent)]"
      >
        Contact
      </Link>

      {/* CTA */}
      <div className="pt-4">
        <Link
          href="/contact"
          onClick={closeAll}
          className="block w-full text-center bg-[var(--color-accent)] text-white py-3 rounded-lg"
        >
          Get Started
        </Link>
      </div>

    </div>
  </div>
  )}
    </header>
  );
}
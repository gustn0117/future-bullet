"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-black/40 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10 h-16 md:h-20">
        <a href="#hero" className="flex items-center gap-2">
          <span className="text-xl md:text-2xl font-bold tracking-[0.2em]">
            FUTURE BULLET
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-10 text-sm text-white/70">
          <a href="#growth" className="hover:text-white transition">Growth</a>
          <a href="#brands" className="hover:text-white transition">Brands</a>
          <a href="#vision" className="hover:text-white transition">Vision</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
      </div>
    </header>
  );
}

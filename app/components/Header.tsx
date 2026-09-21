"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Logo from "./icons/Logo";

const LINKS = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Products", href: "#ecosystem" },
  { label: "Insights", href: "#insights" },
  { label: "About", href: "#about" },
  { label: "Careers", href: "#careers" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center"
    >
      <div
        className={`mt-3 flex w-[min(1180px,94vw)] items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
          scrolled
            ? "border border-line bg-bg/70 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.35)]"
            : "border border-transparent bg-transparent"
        }`}
      >
        <a
          href="#top"
          data-cursor=""
          className="flex items-center gap-2 text-text-primary"
        >
          <Logo className="h-6 w-6 text-accent" />
          <span className="font-display text-sm font-extrabold tracking-[0.28em]">
            JARVIS
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] text-text-secondary transition-colors hover:text-text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          data-cursor="OPEN"
          className="group hidden items-center gap-1.5 rounded-full border border-line-strong px-4 py-2 text-[13px] font-medium text-text-primary transition-colors hover:border-accent hover:bg-accent-soft md:inline-flex"
        >
          Get In Touch
          <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            ↗
          </span>
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-5 bg-text-primary transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-5 bg-text-primary transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="absolute left-1/2 top-full mt-2 w-[92vw] -translate-x-1/2 rounded-3xl border border-line bg-bg-elevated p-6 md:hidden">
          <nav className="flex flex-col gap-5">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-lg text-text-primary"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-full border border-line-strong px-4 py-2 text-sm text-text-primary"
            >
              Get In Touch ↗
            </a>
          </nav>
        </div>
      )}
    </motion.header>
  );
}

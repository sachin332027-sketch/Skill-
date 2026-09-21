"use client";

import { motion } from "framer-motion";

const ARTICLES = [
  {
    category: "Research",
    title: "The data infrastructure behind modern political strategy",
    date: "Mar 2026",
    readTime: "8 min read",
  },
  {
    category: "Policy Insight",
    title: "Why governance platforms fail without field intelligence",
    date: "Feb 2026",
    readTime: "6 min read",
  },
  {
    category: "Data Story",
    title: "Mapping sentiment across 4,000 constituencies",
    date: "Jan 2026",
    readTime: "10 min read",
  },
  {
    category: "Perspective",
    title: "AI will not replace strategists. It will remove their blind spots.",
    date: "Dec 2025",
    readTime: "5 min read",
  },
];

export default function Insights() {
  return (
    <section id="insights" className="relative bg-bg py-28 md:py-36">
      <div className="container-px">
        <div className="mb-16 flex items-end justify-between gap-6">
          <h2 className="font-display max-w-xl text-4xl font-bold leading-[1.05] text-text-primary md:text-5xl">
            Ideas shaping
            <br />
            the future.
          </h2>
          <a
            href="#"
            data-cursor="OPEN"
            className="hidden items-center gap-1.5 text-sm text-text-secondary transition-colors hover:text-text-primary md:inline-flex"
          >
            All insights ↗
          </a>
        </div>

        <div className="flex flex-col">
          {ARTICLES.map((a, i) => (
            <motion.a
              key={a.title}
              href="#"
              data-cursor="OPEN"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className={`group grid grid-cols-1 items-center gap-3 border-t border-line py-8 transition-colors hover:bg-bg-elevated/40 sm:grid-cols-12 sm:gap-6 sm:px-4 ${
                i === ARTICLES.length - 1 ? "border-b" : ""
              }`}
            >
              <span className="mono-tag text-accent-cyan sm:col-span-2">
                {a.category}
              </span>
              <h3 className="font-display text-xl font-semibold text-text-primary transition-transform duration-300 group-hover:translate-x-1 sm:col-span-7 md:text-2xl">
                {a.title}
              </h3>
              <span className="text-xs text-text-tertiary sm:col-span-2">
                {a.date} · {a.readTime}
              </span>
              <span className="text-text-secondary transition-transform duration-300 group-hover:translate-x-1 group-hover:text-text-primary sm:col-span-1 sm:text-right">
                →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

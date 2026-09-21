"use client";

import { motion } from "framer-motion";

export default function Careers() {
  return (
    <section
      id="careers"
      className="relative overflow-hidden bg-bg-elevated py-28 md:py-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_60%_at_80%_50%,rgba(255,138,61,0.06),transparent_70%)]" />

      <div className="container-px relative grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl font-bold leading-[1.05] text-text-primary md:text-6xl"
          >
            Build what
            <br />
            matters.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 max-w-md text-lg leading-relaxed text-text-secondary"
          >
            Work at the intersection of technology, strategy, data and
            impact.
          </motion.p>
          <motion.a
            href="#contact"
            data-cursor="OPEN"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-text-primary px-6 py-3.5 text-sm font-semibold text-bg transition-transform hover:scale-[1.02]"
          >
            Explore Careers
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </motion.a>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {[
            "Technology & AI",
            "Data Science",
            "Strategy",
            "Field Operations",
          ].map((role, i) => (
            <motion.div
              key={role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="flex aspect-square flex-col justify-between rounded-3xl border border-line bg-bg p-6 transition-colors hover:border-accent/50"
            >
              <span className="mono-tag text-text-tertiary">
                0{i + 1}
              </span>
              <span className="font-display text-lg font-semibold text-text-primary">
                {role}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

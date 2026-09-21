"use client";

import { motion } from "framer-motion";

const STAGES = ["Data", "AI", "Intelligence", "Decision", "Impact"];

export default function TechFlow() {
  return (
    <section className="relative overflow-hidden bg-bg-elevated py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(76,125,255,0.08),transparent_70%)]" />

      <div className="container-px relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mono-tag text-accent-cyan">Technology & AI</span>
          <h2 className="font-display mt-4 text-4xl font-bold text-text-primary md:text-5xl">
            Intelligence, engineered.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-text-secondary">
            We combine data, technology, AI and human insight to transform
            complex information into actionable intelligence.
          </p>
        </div>

        <div className="relative mt-24">
          <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-line md:block" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "left" }}
            className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-accent-cyan via-accent to-accent-saffron md:block"
          />

          <div className="relative grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-4">
            {STAGES.map((stage, i) => (
              <motion.div
                key={stage}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex flex-col items-center gap-4 text-center"
              >
                <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-line-strong bg-bg">
                  <span className="h-2 w-2 rounded-full bg-accent-cyan" />
                  <motion.span
                    animate={{ scale: [1, 1.9, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{
                      duration: 2.4,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                    className="absolute inset-0 rounded-full border border-accent/40"
                  />
                </div>
                <span className="font-display text-lg font-semibold text-text-primary">
                  {stage}
                </span>
                {i < STAGES.length - 1 && (
                  <span className="text-text-tertiary md:hidden">↓</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, type Variants } from "framer-motion";
import IntelligenceNetwork from "./IntelligenceNetwork";

const line: Variants = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: "0%",
    transition: {
      duration: 1,
      delay: 0.15 * i,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export default function Hero() {
  const words = ["Technology.", "Intelligence.", "Impact."];

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] w-full items-end overflow-hidden pb-20 pt-40"
    >
      <div className="absolute inset-0">
        <IntelligenceNetwork />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_20%,rgba(76,125,255,0.10),transparent_70%)]" />
      </div>

      <div className="container-px relative z-10 w-full">
        <div className="mb-8 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
          <span className="mono-tag text-text-secondary">
            Strategy × Technology × Data × AI × Governance
          </span>
        </div>

        <h1 className="font-display max-w-5xl text-[13vw] font-extrabold leading-[0.98] tracking-tight text-text-primary sm:text-[9vw] md:text-[6.4vw] lg:text-[88px] xl:text-[96px]">
          {words.map((w, i) => (
            <span key={w} className="block overflow-hidden">
              <motion.span
                custom={i}
                initial="hidden"
                animate="visible"
                variants={line}
                className="block"
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-lg text-lg leading-relaxed text-text-secondary md:text-xl"
        >
          Building technology and strategic intelligence for the people,
          institutions and leaders shaping India.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#capabilities"
            data-cursor="VIEW"
            className="group inline-flex items-center gap-2 rounded-full bg-text-primary px-6 py-3.5 text-sm font-semibold text-bg transition-transform hover:scale-[1.02]"
          >
            Explore Capabilities
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#contact"
            data-cursor="OPEN"
            className="inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3.5 text-sm font-semibold text-text-primary transition-colors hover:border-accent hover:bg-accent-soft"
          >
            Start a Conversation ↗
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
        className="absolute bottom-8 right-6 z-10 hidden flex-col items-end gap-1 md:flex"
      >
        <span className="mono-tag text-text-tertiary">Scroll</span>
        <span className="h-10 w-px animate-pulse bg-line-strong" />
      </motion.div>
    </section>
  );
}

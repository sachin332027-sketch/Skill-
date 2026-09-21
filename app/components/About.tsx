"use client";

import { motion } from "framer-motion";

const WORDS = ["Strategy.", "Technology.", "Data.", "People.", "Execution.", "Impact."];

export default function About() {
  return (
    <section id="about" className="relative bg-bg-elevated py-28 md:py-36">
      <div className="container-px">
        <span className="mono-tag text-accent-cyan">About Jarvis</span>

        <h2 className="font-display mt-6 max-w-3xl text-4xl font-bold leading-[1.1] text-text-primary md:text-5xl">
          We work where complexity
          <br />
          meets consequence.
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="max-w-md text-lg leading-relaxed text-text-secondary">
              Jarvis was founded in 2016 at the intersection of strategy,
              technology and political intelligence. What began as an
              election-strategy practice has grown into a full-stack
              intelligence and technology consultancy — trusted by leaders,
              institutions and governments shaping India&apos;s future.
            </p>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-text-secondary">
              Today, a 280-person team of technologists, analysts,
              strategists and field operators works on problems where
              scale, speed and stakes are equally high.
            </p>
          </div>

          <div className="flex flex-wrap content-start gap-x-4 gap-y-2 md:col-span-6">
            {WORDS.map((w, i) => (
              <motion.span
                key={w}
                initial={{ opacity: 0.15, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="font-display text-4xl font-extrabold text-text-primary md:text-5xl"
              >
                {w}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

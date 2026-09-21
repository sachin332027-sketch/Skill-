"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    n: "01",
    title: "Understand",
    desc: "We immerse in the context — political, institutional, cultural — before proposing a single solution.",
  },
  {
    n: "02",
    title: "Analyze",
    desc: "Billions of data points are structured into patterns, signals and strategic implications.",
  },
  {
    n: "03",
    title: "Strategize",
    desc: "Intelligence is translated into a clear, executable strategic architecture.",
  },
  {
    n: "04",
    title: "Execute",
    desc: "Technology, field operations and communication move in tandem, at scale.",
  },
  {
    n: "05",
    title: "Measure",
    desc: "Every action is tracked against outcome — strategy stays alive, not static.",
  },
];

export default function Impact() {
  return (
    <section id="impact" className="relative bg-bg py-28 md:py-36">
      <div className="container-px">
        <div className="mb-20 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display max-w-xl text-4xl font-bold leading-[1.05] text-text-primary md:text-5xl">
            From insight
            <br />
            to impact.
          </h2>
          <p className="max-w-sm text-base leading-relaxed text-text-secondary">
            A disciplined process that moves from raw information to
            measurable outcomes — repeatable at national scale.
          </p>
        </div>

        <div className="flex flex-col">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className={`group grid grid-cols-1 items-center gap-6 border-t border-line py-10 md:grid-cols-12 ${
                i === STEPS.length - 1 ? "border-b" : ""
              }`}
            >
              <span className="font-display text-2xl font-semibold text-text-tertiary transition-colors group-hover:text-accent md:col-span-2 md:text-3xl">
                {s.n}
              </span>
              <h3 className="font-display text-2xl font-bold text-text-primary md:col-span-3 md:text-3xl">
                {s.title}
              </h3>
              <p className="text-base leading-relaxed text-text-secondary md:col-span-5">
                {s.desc}
              </p>
              <div className="hidden justify-end md:col-span-2 md:flex">
                <div className="h-px w-0 bg-accent transition-all duration-700 group-hover:w-16" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

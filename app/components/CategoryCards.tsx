"use client";

import { motion } from "framer-motion";
import CountUp from "./CountUp";

const CARDS = [
  {
    value: 44,
    eyebrow: "Technology driven solutions",
    title: "Products",
    desc: "Complementing dynamic development, massive structure, and new challenges of the party, our thoroughly thought-out designed products have always helped the party maintain its competitive edge.",
    tint: "from-accent/25 via-accent/5 to-transparent",
    glow: "bg-accent/20",
  },
  {
    value: 252,
    eyebrow: "Campaigns done so far",
    title: "Campaigns",
    desc: "We designed and executed mega as well as fractional campaigns at the grass-root level involving strategic imperatives that have been responsible for driving votes and activities to support the election.",
    tint: "from-fuchsia-500/20 via-fuchsia-500/5 to-transparent",
    glow: "bg-fuchsia-500/15",
  },
  {
    value: 160,
    suffix: "Bn",
    eyebrow: "Dynamic data attributes managed",
    title: "Data",
    desc: "Amassing and processing vast amounts of data, we work on big data that helps the party understand and communicate with the electorate better and work in line with their democratic interests.",
    tint: "from-emerald-500/20 via-emerald-500/5 to-transparent",
    glow: "bg-emerald-500/15",
  },
];

export default function CategoryCards() {
  return (
    <section className="relative bg-bg pb-28 md:pb-36">
      <div className="container-px grid grid-cols-1 gap-5 md:grid-cols-3">
        {CARDS.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-3xl border border-line bg-gradient-to-br ${c.tint} bg-bg-elevated p-8`}
          >
            <div
              className={`pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full ${c.glow} blur-3xl`}
            />
            <div className="relative">
              <div className="font-display text-5xl font-extrabold text-text-primary">
                <CountUp value={c.value} suffix={c.suffix ? ` ${c.suffix}` : ""} />
              </div>
              <div className="mono-tag mt-3 text-text-secondary">
                {c.eyebrow}
              </div>
            </div>
            <div className="relative">
              <p className="mb-5 text-sm leading-relaxed text-text-secondary">
                {c.desc}
              </p>
              <div className="font-display text-2xl font-bold text-text-primary">
                {c.title}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

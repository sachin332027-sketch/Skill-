"use client";

import { motion } from "framer-motion";
import CountUp from "./CountUp";

const STATS = [
  { value: 7, pad: 2, label: "Years" },
  { value: 252, label: "Campaigns done so far" },
  { value: 44, label: "Technology-driven products" },
  { value: 160, suffix: " Bn", label: "Dynamic data attributes managed" },
  { value: 2, pad: 2, label: "General elections" },
  { value: 18, pad: 2, label: "Assembly elections" },
] as const;

export default function ScaleSection() {
  return (
    <section className="relative border-y border-line bg-bg py-24">
      <div className="container-px">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7 }}
          className="font-display max-w-2xl text-3xl font-semibold leading-tight text-text-primary md:text-4xl"
        >
          Built for complexity.{" "}
          <span className="text-text-secondary">Proven at scale.</span>
        </motion.p>

        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-14 border-t border-line pt-12 sm:grid-cols-3 md:grid-cols-6">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="flex flex-col gap-2"
            >
              <div className="font-display text-4xl font-extrabold tracking-tight text-text-primary md:text-5xl">
                <CountUp
                  value={s.value}
                  suffix={"suffix" in s ? s.suffix : ""}
                  separator={!("pad" in s)}
                  pad={"pad" in s ? s.pad : 0}
                />
              </div>
              <div className="text-sm text-text-secondary">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

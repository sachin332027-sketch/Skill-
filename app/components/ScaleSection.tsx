"use client";

import { motion } from "framer-motion";
import CountUp from "./CountUp";

const STATS = [
  { kind: "count", value: 10, suffix: "+", label: "Years of experience" },
  { kind: "text", display: "Billions", label: "of data points processed" },
  {
    kind: "text",
    display: "National + State",
    label: "campaign experience",
  },
  { kind: "count", value: 2016, label: "Founded", noSeparator: true },
  { kind: "count", value: 280, suffix: "+", label: "Team members" },
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

        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-14 border-t border-line pt-12 md:grid-cols-5">
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
                {s.kind === "count" ? (
                  <CountUp
                    value={s.value}
                    suffix={"suffix" in s ? s.suffix : ""}
                    separator={!("noSeparator" in s && s.noSeparator)}
                  />
                ) : (
                  s.display
                )}
              </div>
              <div className="text-sm text-text-secondary">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

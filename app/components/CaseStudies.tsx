"use client";

import { motion } from "framer-motion";

const CASES = [
  {
    category: "Political Intelligence",
    title: "State Election War Room",
    challenge:
      "Fragmented voter data across 200+ constituencies with no unified intelligence layer.",
    approach:
      "Built a real-time signal-fusion system merging survey, social and field data.",
    tech: "Custom ML models, live dashboards, field app network",
    impact: "40M+ data points processed across a single election cycle.",
    hue: "from-[#1a2244] to-[#0d1226]",
  },
  {
    category: "Governance & Policy",
    title: "Public Service Delivery Platform",
    challenge:
      "Citizen grievance redressal was slow, opaque and impossible to measure.",
    approach:
      "Designed a governance intelligence platform tracking delivery in real time.",
    tech: "Workflow automation, GIS mapping, predictive escalation",
    impact: "60% reduction in average resolution time.",
    hue: "from-[#12292b] to-[#0a1618]",
  },
  {
    category: "Digital Transformation",
    title: "National Field Operations Network",
    challenge:
      "No standardised way to coordinate thousands of on-ground volunteers.",
    approach:
      "Engineered a mobile-first field operations OS with offline-first sync.",
    tech: "React Native, edge sync, geo-fenced task routing",
    impact: "280+ team members coordinated across every state.",
    hue: "from-[#2a1e12] to-[#160d08]",
  },
];

export default function CaseStudies() {
  return (
    <section className="relative bg-bg-elevated py-28 md:py-36">
      <div className="container-px">
        <div className="mb-16 flex items-end justify-between gap-6">
          <h2 className="font-display max-w-xl text-4xl font-bold leading-[1.05] text-text-primary md:text-5xl">
            Work that moves
            <br />
            the needle.
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          {CASES.map((c, i) => (
            <motion.a
              key={c.title}
              href="#contact"
              data-cursor="VIEW"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              className="group relative grid grid-cols-1 overflow-hidden rounded-3xl border border-line bg-bg-elevated-2 md:grid-cols-2"
            >
              <div
                className={`relative flex min-h-[260px] flex-col justify-between overflow-hidden bg-gradient-to-br ${c.hue} p-8 md:p-10`}
              >
                <div className="pointer-events-none absolute inset-0 opacity-40 transition-transform duration-700 group-hover:scale-105">
                  <div className="absolute -bottom-10 -left-10 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />
                  <div className="absolute -top-10 -right-10 h-56 w-56 rounded-full bg-accent-cyan/10 blur-3xl" />
                </div>
                <span className="mono-tag relative text-accent-cyan">
                  {c.category}
                </span>
                <div className="relative flex items-end justify-between">
                  <h3 className="font-display max-w-xs text-2xl font-bold text-text-primary md:text-3xl">
                    {c.title}
                  </h3>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line-strong text-text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 p-8 sm:grid-cols-2 md:p-10">
                <div>
                  <span className="mono-tag text-text-tertiary">
                    Challenge
                  </span>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {c.challenge}
                  </p>
                </div>
                <div>
                  <span className="mono-tag text-text-tertiary">
                    Approach
                  </span>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {c.approach}
                  </p>
                </div>
                <div>
                  <span className="mono-tag text-text-tertiary">
                    Technology
                  </span>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {c.tech}
                  </p>
                </div>
                <div>
                  <span className="mono-tag text-text-tertiary">Impact</span>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-text-primary">
                    {c.impact}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

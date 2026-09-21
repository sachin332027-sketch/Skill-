"use client";

import { motion } from "framer-motion";
import JarvisMark from "./icons/JarvisMark";

const CASES = [
  {
    category: "Political Intelligence",
    title: "Data-Driven Campaign War Rooms",
    challenge:
      "India's largest political party needed a unified way to connect with voters and target messaging at grassroots scale.",
    approach:
      "Built data-driven solutions for internal work management, voter connect and message targeting across constituencies.",
    tech: "Custom dashboards, field data pipelines, big-data processing",
    impact: "252 campaigns executed so far — mega and fractional, at the grass-root level.",
    hue: "from-[#1a2244] to-[#0d1226]",
  },
  {
    category: "Governance & Public Policy",
    title: "Government Unit Technology Solutions",
    challenge:
      "Various government units needed a leading, data-driven provider to stay ahead of an evolving governance landscape.",
    approach:
      "Deployed people-centric tech and data capabilities purpose-built for the governance and political domain.",
    tech: "Governance platforms, analytics, workflow automation",
    impact: "02 general elections and 18 assembly elections supported to date.",
    hue: "from-[#12292b] to-[#0a1618]",
  },
  {
    category: "Data & Technology",
    title: "44 Technology-Driven Products",
    challenge:
      "The party's dynamic development and massive structure demanded products that keep it competitive as challenges evolve.",
    approach:
      "Designed and shipped a thoroughly thought-out product suite, backed by 160 Bn dynamic data attributes managed.",
    tech: "Big data infrastructure, product engineering, analytics",
    impact: "44 products maintaining a durable competitive edge, 7 years running.",
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
                <span className="relative flex items-center gap-2 text-accent-cyan">
                  <JarvisMark className="h-4 w-4" />
                  <span className="mono-tag">{c.category}</span>
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

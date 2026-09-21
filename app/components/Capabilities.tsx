"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconRadar,
  IconChip,
  IconBars,
  IconTarget,
  IconInstitution,
  IconBroadcast,
  IconNetworkPin,
  IconLayers,
} from "./icons/CapabilityIcons";

const CAPABILITIES = [
  {
    n: "01",
    title: "Political Intelligence",
    desc: "Real-time signal tracking, sentiment mapping and strategic risk assessment across the political landscape.",
    tags: ["Signal Intelligence", "Risk Mapping", "Sentiment"],
    Icon: IconRadar,
  },
  {
    n: "02",
    title: "Technology & AI",
    desc: "Custom AI systems, machine learning pipelines and platforms engineered for scale and speed.",
    tags: ["Machine Learning", "Platforms", "Automation"],
    Icon: IconChip,
  },
  {
    n: "03",
    title: "Data & Analytics",
    desc: "Turning billions of fragmented data points into clear, decision-ready intelligence.",
    tags: ["Big Data", "Modelling", "Dashboards"],
    Icon: IconBars,
  },
  {
    n: "04",
    title: "Campaign Strategy",
    desc: "End-to-end strategic architecture for national and state-level campaigns.",
    tags: ["Positioning", "Narrative", "War Room"],
    Icon: IconTarget,
  },
  {
    n: "05",
    title: "Governance & Public Policy",
    desc: "Evidence-based policy design and implementation frameworks for institutions.",
    tags: ["Policy Design", "Institutions", "Delivery"],
    Icon: IconInstitution,
  },
  {
    n: "06",
    title: "Strategic Communications",
    desc: "Message architecture and multi-channel communication built on data, not instinct.",
    tags: ["Narrative", "Media", "Messaging"],
    Icon: IconBroadcast,
  },
  {
    n: "07",
    title: "Field Operations",
    desc: "On-ground execution networks spanning constituencies, districts and states.",
    tags: ["Ground Networks", "Logistics", "Execution"],
    Icon: IconNetworkPin,
  },
  {
    n: "08",
    title: "Digital Transformation",
    desc: "Modernising institutional technology stacks for a data-first future.",
    tags: ["Platforms", "Infrastructure", "Scale"],
    Icon: IconLayers,
  },
];

export default function Capabilities() {
  const [active, setActive] = useState(0);

  return (
    <section id="capabilities" className="relative bg-bg py-28 md:py-36">
      <div className="container-px">
        <div className="mb-16 flex items-end justify-between gap-6">
          <h2 className="font-display max-w-xl text-4xl font-bold leading-[1.05] text-text-primary md:text-5xl">
            What we build.
            <br />
            <span className="text-text-secondary">What we solve.</span>
          </h2>
          <span className="mono-tag hidden text-text-tertiary md:block">
            8 Capabilities
          </span>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col">
            {CAPABILITIES.map((c, i) => (
              <button
                key={c.n}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                data-cursor="VIEW"
                className={`group flex items-center gap-6 border-b border-line py-6 text-left transition-colors ${
                  i === 0 ? "border-t" : ""
                }`}
              >
                <span
                  className={`font-display text-sm transition-colors ${
                    active === i ? "text-accent" : "text-text-tertiary"
                  }`}
                >
                  {c.n}
                </span>
                <c.Icon
                  className={`h-5 w-5 shrink-0 transition-colors ${
                    active === i ? "text-accent" : "text-text-tertiary"
                  }`}
                />
                <span
                  className={`font-display flex-1 text-2xl font-semibold transition-all duration-300 md:text-3xl ${
                    active === i
                      ? "translate-x-2 text-text-primary"
                      : "text-text-secondary group-hover:text-text-primary"
                  }`}
                >
                  {c.title}
                </span>
                <span
                  className={`text-xl transition-all duration-300 ${
                    active === i
                      ? "translate-x-0 opacity-100 text-accent"
                      : "-translate-x-2 opacity-0"
                  }`}
                >
                  →
                </span>
              </button>
            ))}
          </div>

          <div className="relative hidden min-h-[420px] overflow-hidden rounded-3xl border border-line bg-bg-elevated p-10 md:flex">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex w-full flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-8xl font-extrabold text-line-strong">
                      {CAPABILITIES[active].n}
                    </span>
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-line-strong bg-bg text-accent">
                      {(() => {
                        const ActiveIcon = CAPABILITIES[active].Icon;
                        return <ActiveIcon className="h-7 w-7" />;
                      })()}
                    </div>
                  </div>
                  <h3 className="font-display mt-6 text-3xl font-bold text-text-primary">
                    {CAPABILITIES[active].title}
                  </h3>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-text-secondary">
                    {CAPABILITIES[active].desc}
                  </p>
                </div>

                <div className="mt-10 flex flex-wrap gap-2">
                  {CAPABILITIES[active].tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-line-strong px-3 py-1.5 text-xs text-text-secondary"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

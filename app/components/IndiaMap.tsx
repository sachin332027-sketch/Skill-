"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const REGIONS = [
  { key: "north", label: "North", x: 175, y: 90, stat: "Delhi NCR", detail: "Policy & governance engagements" },
  { key: "west", label: "West", x: 110, y: 220, stat: "Mumbai · Ahmedabad", detail: "Technology & data operations hub" },
  { key: "central", label: "Central", x: 190, y: 210, stat: "Bhopal", detail: "Field operations coordination" },
  { key: "east", label: "East", x: 260, y: 200, stat: "Kolkata · Patna", detail: "Campaign strategy & analytics" },
  { key: "south", label: "South", x: 175, y: 360, stat: "Bengaluru · Chennai", detail: "AI & platform engineering" },
  { key: "northeast", label: "Northeast", x: 300, y: 140, stat: "Guwahati", detail: "Regional intelligence network" },
];

// Stylised, abstracted contour — not a literal or political map.
const INDIA_PATH =
  "M180 20 L220 45 L245 90 L290 110 L320 150 L300 175 L260 190 L270 230 L235 260 L215 310 L200 370 L185 430 L165 400 L150 340 L120 300 L95 260 L110 230 L80 200 L95 160 L70 130 L100 100 L130 70 L150 40 Z";

export default function IndiaMap() {
  const [hovered, setHovered] = useState<string | null>(null);
  const active = REGIONS.find((r) => r.key === hovered);

  return (
    <section className="relative bg-bg py-28 md:py-36">
      <div className="container-px grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div>
          <span className="mono-tag text-accent-cyan">National Footprint</span>
          <h2 className="font-display mt-4 text-4xl font-bold leading-[1.05] text-text-primary md:text-5xl">
            Signal, sourced
            <br />
            from everywhere.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-text-secondary">
            Jarvis operates across every region of India — a distributed
            network of data, technology and field intelligence.
          </p>

          <div className="mt-10 h-20">
            <AnimatePresence mode="wait">
              {active && (
                <motion.div
                  key={active.key}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="font-display text-lg font-semibold text-text-primary">
                    {active.label} · {active.stat}
                  </span>
                  <p className="mt-1 text-sm text-text-secondary">
                    {active.detail}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="relative mx-auto aspect-[380/450] w-full max-w-sm">
          <svg
            viewBox="0 0 380 450"
            className="h-full w-full overflow-visible"
          >
            <path
              d={INDIA_PATH}
              fill="rgba(76,125,255,0.06)"
              stroke="rgba(245,245,242,0.22)"
              strokeWidth={1.2}
            />
            {REGIONS.map((r) => (
              <g key={r.key}>
                <motion.circle
                  cx={r.x}
                  cy={r.y}
                  r={hovered === r.key ? 9 : 5}
                  fill={hovered === r.key ? "#4C7DFF" : "#6FE3F0"}
                  opacity={hovered && hovered !== r.key ? 0.35 : 1}
                  style={{ cursor: "pointer", transition: "all 0.25s ease" }}
                  onMouseEnter={() => setHovered(r.key)}
                  onMouseLeave={() => setHovered(null)}
                />
                <motion.circle
                  cx={r.x}
                  cy={r.y}
                  r={5}
                  fill="none"
                  stroke="#4C7DFF"
                  strokeWidth={1}
                  style={{ transformOrigin: `${r.x}px ${r.y}px` }}
                  animate={{
                    scale: [1, 3.2, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2.6,
                    repeat: Infinity,
                    delay: REGIONS.indexOf(r) * 0.3,
                  }}
                />
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}

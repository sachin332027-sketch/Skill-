"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const NODES = [
  { key: "data", label: "Data", desc: "Structured, unstructured and real-time data pipelines.", angle: -90 },
  { key: "ai", label: "AI", desc: "Machine learning models tuned for strategic signal.", angle: -38.6 },
  { key: "analytics", label: "Analytics", desc: "Statistical modelling and predictive analytics.", angle: 12.8 },
  { key: "field", label: "Field Operations", desc: "Ground networks converting insight into action.", angle: 64.3 },
  { key: "comms", label: "Communication", desc: "Narrative and message systems built on evidence.", angle: 115.7 },
  { key: "research", label: "Research", desc: "Primary and secondary research at scale.", angle: 167.1 },
  { key: "products", label: "Technology Products", desc: "Proprietary platforms powering every engagement.", angle: 218.6 },
];

function polar(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: Math.cos(rad) * radius, y: Math.sin(rad) * radius };
}

export default function Ecosystem() {
  const [hovered, setHovered] = useState<string | null>(null);
  const active = NODES.find((n) => n.key === hovered);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [radius, setRadius] = useState(230);

  useEffect(() => {
    function update() {
      const w = wrapRef.current?.clientWidth ?? 600;
      setRadius(Math.min(230, w * 0.34));
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section id="ecosystem" className="relative bg-bg py-28 md:py-36">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mono-tag text-accent-cyan">Products &amp; Ecosystem</span>
          <h2 className="font-display mt-4 text-4xl font-bold text-text-primary md:text-5xl">
            One system. 44 products.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-text-secondary">
            Jarvis Technology operates as a connected intelligence ecosystem
            of 44 thoroughly designed, technology-driven products — not a
            set of disconnected services.
          </p>
        </div>

        {/* Mobile: simple tap grid, no radial overlap */}
        <div className="mt-16 grid grid-cols-2 gap-3 md:hidden">
          {NODES.map((n) => {
            const isActive = hovered === n.key;
            return (
              <button
                key={n.key}
                onClick={() => setHovered(isActive ? null : n.key)}
                className={`rounded-2xl border px-4 py-4 text-left text-sm font-medium transition-colors ${
                  isActive
                    ? "border-accent bg-accent-soft text-text-primary"
                    : "border-line-strong bg-bg-elevated text-text-secondary"
                }`}
              >
                {n.label}
              </button>
            );
          })}
        </div>

        <div
          ref={wrapRef}
          className="relative mx-auto mt-20 hidden h-[560px] max-w-3xl items-center justify-center overflow-hidden md:flex md:h-[620px]"
        >
          <svg
            viewBox="-300 -300 600 600"
            className="absolute inset-0 h-full w-full"
          >
            {NODES.map((n) => {
              const p = polar(n.angle, 230);
              const isActive = hovered === n.key;
              const dim = hovered && !isActive;
              return (
                <line
                  key={n.key}
                  x1={0}
                  y1={0}
                  x2={p.x}
                  y2={p.y}
                  stroke={isActive ? "#4C7DFF" : "rgba(245,245,242,0.14)"}
                  strokeWidth={isActive ? 1.5 : 1}
                  opacity={dim ? 0.25 : 1}
                  style={{ transition: "all 0.3s ease" }}
                />
              );
            })}
          </svg>

          {/* center node */}
          <div className="relative z-10 flex h-36 w-36 flex-col items-center justify-center rounded-full border border-accent/40 bg-bg-elevated text-center shadow-[0_0_60px_rgba(76,125,255,0.15)] md:h-40 md:w-40">
            <span className="font-display text-[13px] font-bold leading-tight tracking-wide text-text-primary">
              JARVIS
              <br />
              TECHNOLOGY
            </span>
          </div>

          {NODES.map((n) => {
            const p = polar(n.angle, radius);
            const isActive = hovered === n.key;
            const dim = hovered && !isActive;
            return (
              <button
                key={n.key}
                onMouseEnter={() => setHovered(n.key)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(n.key)}
                onBlur={() => setHovered(null)}
                data-cursor="VIEW"
                style={{
                  transform: `translate(${p.x}px, ${p.y}px)`,
                }}
                className="absolute left-1/2 top-1/2 z-10 -ml-16 -mt-9 flex w-32 flex-col items-center gap-1 transition-transform duration-300"
              >
                <motion.span
                  animate={{
                    scale: isActive ? 1.12 : 1,
                    opacity: dim ? 0.4 : 1,
                  }}
                  transition={{ duration: 0.25 }}
                  className={`rounded-2xl border px-4 py-3 text-center text-xs font-medium leading-tight ${
                    isActive
                      ? "border-accent bg-accent-soft text-text-primary"
                      : "border-line-strong bg-bg-elevated text-text-secondary"
                  }`}
                >
                  {n.label}
                </motion.span>
              </button>
            );
          })}
        </div>

        <div className="mx-auto mt-4 h-16 max-w-md text-center">
          {active && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm leading-relaxed text-text-secondary"
            >
              {active.desc}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}

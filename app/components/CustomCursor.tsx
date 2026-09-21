"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)")
      .matches;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time sync from a browser capability, not derived React state
    setEnabled(canHover);
    if (!canHover) return;

    let ringX = 0,
      ringY = 0,
      mouseX = 0,
      mouseY = 0;

    function onMove(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
      const target = e.target as HTMLElement;
      const trigger = target.closest<HTMLElement>("[data-cursor]");
      setLabel(trigger?.dataset.cursor ?? "");
    }

    let raf: number;
    function tick() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[999] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[998] flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-line-strong transition-[width,height,background-color] duration-200"
        style={{
          width: label ? 72 : 32,
          height: label ? 72 : 32,
          background: label ? "rgba(76,125,255,0.12)" : "transparent",
        }}
      >
        {label && (
          <span className="mono-tag text-[10px] text-text-primary">
            {label}
          </span>
        )}
      </div>
    </>
  );
}

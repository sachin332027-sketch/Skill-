"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function CountUp({
  value,
  suffix = "",
  prefix = "",
  duration = 1.6,
  separator = true,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  separator?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf: number;
    const start = performance.now();
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);

    function tick(now: number) {
      const t = Math.min((now - start) / (duration * 1000), 1);
      setDisplay(Math.round(ease(t) * value));
      if (t < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {separator ? display.toLocaleString("en-IN") : display}
      {suffix}
    </span>
  );
}

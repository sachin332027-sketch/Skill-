"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  life: number;
  maxLife: number;
};

export default function IntelligenceNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes: Node[] = [];
    const pointer = { x: -9999, y: -9999 };
    let rafId = 0;

    function resize() {
      const parent = canvas!.parentElement;
      width = parent ? parent.clientWidth : window.innerWidth;
      height = parent ? parent.clientHeight : window.innerHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.round((width * height) / 16000);
      nodes = Array.from({ length: Math.min(count, 110) }, () => spawnNode());
    }

    function spawnNode(): Node {
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 1.4 + 0.6,
        life: 0,
        maxLife: 600 + Math.random() * 800,
      };
    }

    function onPointerMove(e: PointerEvent) {
      const rect = canvas!.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
    }
    function onPointerLeave() {
      pointer.x = -9999;
      pointer.y = -9999;
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height);

      // subtle grid
      ctx!.strokeStyle = "rgba(245,245,242,0.035)";
      ctx!.lineWidth = 1;
      const gap = 56;
      for (let x = 0; x < width; x += gap) {
        ctx!.beginPath();
        ctx!.moveTo(x, 0);
        ctx!.lineTo(x, height);
        ctx!.stroke();
      }
      for (let y = 0; y < height; y += gap) {
        ctx!.beginPath();
        ctx!.moveTo(0, y);
        ctx!.lineTo(width, y);
        ctx!.stroke();
      }

      for (const n of nodes) {
        if (!prefersReduced) {
          n.x += n.vx;
          n.y += n.vy;
          n.life += 1;

          const dx = pointer.x - n.x;
          const dy = pointer.y - n.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 140) {
            n.x -= (dx / dist) * 0.6;
            n.y -= (dy / dist) * 0.6;
          }

          if (n.x < 0) n.x = width;
          if (n.x > width) n.x = 0;
          if (n.y < 0) n.y = height;
          if (n.y > height) n.y = 0;
        }
      }

      // connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 130) {
            const alpha = (1 - d / 130) * 0.22;
            ctx!.strokeStyle = `rgba(76,125,255,${alpha})`;
            ctx!.lineWidth = 0.7;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      // nodes
      for (const n of nodes) {
        const fade =
          n.life < 60
            ? n.life / 60
            : n.life > n.maxLife - 60
              ? Math.max(0, (n.maxLife - n.life) / 60)
              : 1;
        ctx!.beginPath();
        ctx!.fillStyle = `rgba(111,227,240,${0.55 * fade})`;
        ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx!.fill();

        if (!prefersReduced && n.life > n.maxLife) {
          Object.assign(n, spawnNode(), { life: 0 });
        }
      }

      // pointer glow
      if (pointer.x > -100) {
        const grad = ctx!.createRadialGradient(
          pointer.x,
          pointer.y,
          0,
          pointer.x,
          pointer.y,
          160
        );
        grad.addColorStop(0, "rgba(76,125,255,0.10)");
        grad.addColorStop(1, "rgba(76,125,255,0)");
        ctx!.fillStyle = grad;
        ctx!.beginPath();
        ctx!.arc(pointer.x, pointer.y, 160, 0, Math.PI * 2);
        ctx!.fill();
      }

      rafId = requestAnimationFrame(draw);
    }

    resize();
    draw();

    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerleave", onPointerLeave);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}

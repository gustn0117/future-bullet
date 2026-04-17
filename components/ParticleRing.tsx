"use client";

import { useEffect, useRef } from "react";

/**
 * Canvas-rendered particle ring inspired by the hero reference.
 * Uses a sphere of particles rotated in 3D, projected to 2D.
 */
export default function ParticleRing() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const PARTICLE_COUNT = 1800;
    type P = { x: number; y: number; z: number };
    const particles: P[] = [];

    // Distribute particles roughly on a sphere surface with slight thickness
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // fibonacci sphere
      const k = i + 0.5;
      const phi = Math.acos(1 - (2 * k) / PARTICLE_COUNT);
      const theta = Math.PI * (1 + Math.sqrt(5)) * k;
      const x = Math.sin(phi) * Math.cos(theta);
      const y = Math.sin(phi) * Math.sin(theta);
      const z = Math.cos(phi);
      // jitter
      const j = 0.02;
      particles.push({
        x: x + (Math.random() - 0.5) * j,
        y: y + (Math.random() - 0.5) * j,
        z: z + (Math.random() - 0.5) * j,
      });
    }

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    let raf = 0;
    let t = 0;

    const render = () => {
      t += 0.0025;
      ctx.clearRect(0, 0, width, height);

      // Background radial glow
      const cx = width / 2;
      const cy = height / 2;
      const radius = Math.min(width, height) * 0.32;

      const bg = ctx.createRadialGradient(cx, cy, radius * 0.05, cx, cy, radius * 2.2);
      bg.addColorStop(0, "rgba(120, 80, 255, 0.25)");
      bg.addColorStop(0.35, "rgba(60, 100, 255, 0.14)");
      bg.addColorStop(1, "rgba(5, 7, 13, 0)");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);

      // Rotation matrices (Y and X rotation)
      const cosY = Math.cos(t);
      const sinY = Math.sin(t);
      const cosX = Math.cos(t * 0.4);
      const sinX = Math.sin(t * 0.4);

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const p = particles[i];
        // rotate around Y
        let x = p.x * cosY + p.z * sinY;
        let z = -p.x * sinY + p.z * cosY;
        // rotate around X
        let y = p.y * cosX - z * sinX;
        z = p.y * sinX + z * cosX;

        // Perspective projection
        const persp = 1 / (1.7 - z * 0.7);
        const px = cx + x * radius * 1.25 * persp;
        const py = cy + y * radius * 1.25 * persp;

        // Depth-based styling
        const depth = (z + 1) / 2; // 0 (back) -> 1 (front)
        const size = (0.4 + depth * 1.6) * persp;
        const alpha = 0.15 + depth * 0.85;

        // Gradient blue -> purple by position
        const tone = (p.x + 1) / 2; // 0 -> 1
        const r = Math.round(80 + tone * 120);
        const g = Math.round(130 - tone * 60);
        const b = Math.round(255);

        ctx.beginPath();
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden
    />
  );
}

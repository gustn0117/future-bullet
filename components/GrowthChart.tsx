"use client";

import { useEffect, useRef, useState } from "react";

type Point = { year: string; value: number; label: string; isForecast?: boolean };

const data: Point[] = [
  { year: "2023", value: 8, label: "시작" },
  { year: "2024", value: 32, label: "32억" },
  { year: "2025", value: 102, label: "102억" },
  { year: "2026", value: 300, label: "300억+", isForecast: true },
];

export default function GrowthChart() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0); // 0 -> 1 animated once visible

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const start = performance.now();
            const dur = 1800;
            const tick = (t: number) => {
              const k = Math.min(1, (t - start) / dur);
              const eased = 1 - Math.pow(1 - k, 3);
              setProgress(eased);
              if (k < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            io.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const max = Math.max(...data.map((d) => d.value));

  // chart geometry
  const W = 1000;
  const H = 420;
  const padX = 70;
  const padY = 60;
  const innerW = W - padX * 2;
  const innerH = H - padY * 2;

  const xFor = (i: number) => padX + (innerW / (data.length - 1)) * i;
  const yFor = (v: number) => padY + innerH - (v / max) * innerH;

  // build animated path
  const points = data.map((d, i) => ({ x: xFor(i), y: yFor(d.value * progress) }));

  const line = points
    .map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`))
    .join(" ");

  const area = `M ${points[0].x} ${padY + innerH} ${points
    .map((p) => `L ${p.x} ${p.y}`)
    .join(" ")} L ${points[points.length - 1].x} ${padY + innerH} Z`;

  return (
    <section
      id="growth"
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-black via-[#060814] to-[#05070d] py-28 md:py-40"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-xs tracking-[0.35em] text-[#7aa4ff] mb-4">BREAKING A NEW HIGH</p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            매년 <span className="text-[#7aa4ff]">폭발적인 성장</span>을 보여주며
            <br />
            결과로 증명합니다.
          </h2>
          <p className="mt-6 text-white/60 md:text-lg">
            2년 만에 매출 100억 돌파,<br />
            퓨처블릿의 성장은 이제 시작입니다.
          </p>
        </div>

        <div className="mt-16 rounded-3xl border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent p-4 md:p-8 backdrop-blur-sm">
          <div className="relative w-full">
            <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto">
              <defs>
                <linearGradient id="lineGrad" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="#4f8bff" />
                  <stop offset="100%" stopColor="#a77dff" />
                </linearGradient>
                <linearGradient id="areaGrad" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#4f8bff" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#4f8bff" stopOpacity="0" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* grid */}
              {[0, 0.25, 0.5, 0.75, 1].map((g, i) => (
                <line
                  key={i}
                  x1={padX}
                  x2={W - padX}
                  y1={padY + innerH * g}
                  y2={padY + innerH * g}
                  stroke="rgba(255,255,255,0.06)"
                  strokeDasharray="3 4"
                />
              ))}

              {/* area */}
              <path d={area} fill="url(#areaGrad)" />

              {/* line */}
              <path
                d={line}
                fill="none"
                stroke="url(#lineGrad)"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#glow)"
              />

              {/* points + labels */}
              {points.map((p, i) => {
                const d = data[i];
                return (
                  <g key={i}>
                    <circle cx={p.x} cy={p.y} r={6} fill="#0a0d15" stroke="url(#lineGrad)" strokeWidth={2.5} />
                    <text
                      x={p.x}
                      y={p.y - 18}
                      textAnchor="middle"
                      fill="#ffffff"
                      fontSize={16}
                      fontWeight={700}
                      opacity={progress}
                    >
                      {d.label}
                    </text>
                    <text
                      x={p.x}
                      y={H - 20}
                      textAnchor="middle"
                      fill="rgba(255,255,255,0.55)"
                      fontSize={14}
                      letterSpacing="0.1em"
                    >
                      {d.year}
                    </text>
                  </g>
                );
              })}

              {/* forecast arrow */}
              {progress > 0.8 && (
                <g
                  style={{
                    opacity: (progress - 0.8) / 0.2,
                    transition: "opacity 0.3s",
                  }}
                >
                  <line
                    x1={points[points.length - 1].x}
                    y1={points[points.length - 1].y}
                    x2={points[points.length - 1].x + 40}
                    y2={points[points.length - 1].y - 50}
                    stroke="#a77dff"
                    strokeWidth={2}
                    strokeDasharray="4 4"
                  />
                  <text
                    x={points[points.length - 1].x + 44}
                    y={points[points.length - 1].y - 52}
                    fill="#a77dff"
                    fontSize={14}
                    fontWeight={600}
                  >
                    500억+
                  </text>
                </g>
              )}
            </svg>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
            {data.map((d) => (
              <div
                key={d.year}
                className="rounded-xl border border-white/5 bg-white/[0.02] p-4"
              >
                <div className="text-xs tracking-widest text-white/50">{d.year}</div>
                <div className="mt-1 text-xl md:text-2xl font-bold">
                  {d.label}
                  {d.isForecast && (
                    <span className="ml-2 rounded-full border border-[#a77dff]/50 bg-[#a77dff]/10 px-2 py-0.5 text-[10px] text-[#c4a8ff]">
                      예상
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

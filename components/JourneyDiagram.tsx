"use client";

import { useEffect, useRef, useState } from "react";

interface Stage {
  id: string;
  label: string;
  description: string;
  x: number;
  y: number;
}

const STAGES: Stage[] = [
  {
    id: "excitement",
    label: "Initial Excitement",
    description:
      "Early energy is high. The team is small, the mission is clear, and everyone pulls in the same direction naturally.",
    x: 60,
    y: 80,
  },
  {
    id: "valley",
    label: "The Valley of Death",
    description:
      "As the organisation scales, alignment drifts. Execution becomes chaotic. Teams feel stretched and founders worry if what made them great will survive.",
    x: 240,
    y: 200,
  },
  {
    id: "anchor",
    label: "The Anchor",
    description:
      "Intentional rituals create clarity, psychological safety, and rhythm. Small, repeatable behaviours absorb pressure and restore alignment.",
    x: 400,
    y: 160,
  },
  {
    id: "rhythm",
    label: "Sustained Growth",
    description:
      "With rituals embedded, growth becomes rigorous without being ruthless. Culture compounds. The organisation runs on rhythm.",
    x: 560,
    y: 60,
  },
];

// The SVG path — a smooth curve through all four stages
const PATH_D =
  "M 60 80 C 120 80, 150 200, 240 200 S 330 160, 400 160 S 490 60, 560 60";

export default function JourneyDiagram() {
  const [active, setActive] = useState<string | null>(null);
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Trigger animation on scroll-into-view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const activeStage = STAGES.find((s) => s.id === active) ?? null;

  return (
    <div ref={ref} className="w-full">
      {/* SVG diagram */}
      <div className="relative w-full" style={{ paddingBottom: "38%" }}>
        <svg
          viewBox="0 0 620 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full"
          aria-label="Valley of Death growth journey diagram"
          role="img"
        >
          {/* Grid lines */}
          {[80, 140, 200].map((y) => (
            <line
              key={y}
              x1="40"
              y1={y}
              x2="590"
              y2={y}
              stroke="rgba(42,42,40,0.06)"
              strokeWidth="1"
              strokeDasharray="4 6"
            />
          ))}

          {/* Gradient fill under curve */}
          <defs>
            <linearGradient id="curveGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#B5654A" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#B5654A" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="pathGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#7A8B6F" />
              <stop offset="40%" stopColor="#B5654A" />
              <stop offset="100%" stopColor="#2A2A28" />
            </linearGradient>
          </defs>

          {/* Fill area */}
          {animated && (
            <path
              d={`${PATH_D} L 560 280 L 60 280 Z`}
              fill="url(#curveGrad)"
              className="animate-fade-in opacity-0 delay-500"
            />
          )}

          {/* Main journey path */}
          <path
            d={PATH_D}
            stroke="url(#pathGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="2000"
            strokeDashoffset={animated ? "0" : "2000"}
            style={{
              transition: animated ? "stroke-dashoffset 2.4s ease-out" : "none",
            }}
          />

          {/* Stage dots */}
          {STAGES.map((stage) => (
            <g
              key={stage.id}
              style={{ cursor: "pointer" }}
              onClick={() => setActive(active === stage.id ? null : stage.id)}
              onMouseEnter={() => setActive(stage.id)}
              onMouseLeave={() => setActive(null)}
              role="button"
              tabIndex={0}
              aria-label={stage.label}
              onKeyDown={(e) =>
                e.key === "Enter" && setActive(active === stage.id ? null : stage.id)
              }
            >
              {/* Outer ring */}
              <circle
                cx={stage.x}
                cy={stage.y}
                r={active === stage.id ? 14 : 10}
                fill="white"
                stroke={active === stage.id ? "#B5654A" : "rgba(42,42,40,0.2)"}
                strokeWidth={active === stage.id ? 2 : 1.5}
                style={{ transition: "all 0.2s ease" }}
              />
              {/* Inner dot */}
              <circle
                cx={stage.x}
                cy={stage.y}
                r={active === stage.id ? 5 : 3.5}
                fill={active === stage.id ? "#B5654A" : "rgba(42,42,40,0.4)"}
                style={{ transition: "all 0.2s ease" }}
              />

              {/* Label */}
              <text
                x={stage.x}
                y={
                  stage.id === "valley"
                    ? stage.y + 28
                    : stage.y - 18
                }
                textAnchor="middle"
                fontSize="9"
                fontFamily="var(--font-jakarta)"
                fontWeight="500"
                fill={active === stage.id ? "#B5654A" : "rgba(42,42,40,0.5)"}
                style={{ transition: "fill 0.2s ease", userSelect: "none" }}
              >
                {stage.label}
              </text>
            </g>
          ))}

          {/* X-axis label */}
          <text
            x="310"
            y="270"
            textAnchor="middle"
            fontSize="8.5"
            fontFamily="var(--font-jakarta)"
            fill="rgba(42,42,40,0.35)"
          >
            Journey of growth →
          </text>

          {/* Y-axis label */}
          <text
            x="18"
            y="150"
            textAnchor="middle"
            fontSize="8.5"
            fontFamily="var(--font-jakarta)"
            fill="rgba(42,42,40,0.35)"
            transform="rotate(-90, 18, 150)"
          >
            Alignment &amp; momentum
          </text>
        </svg>
      </div>

      {/* Info panel — appears when a stage is active */}
      <div
        className={`mt-6 transition-all duration-300 ${
          activeStage
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-2 pointer-events-none"
        }`}
        aria-live="polite"
        style={{ minHeight: "3.5rem" }}
      >
        {activeStage && (
          <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[rgba(42,42,40,0.08)] shadow-soft">
            <div className="w-2 h-2 rounded-full bg-[#B5654A] mt-2 shrink-0" />
            <div>
              <p className="font-serif font-semibold text-[#2A2A28] text-base mb-1">
                {activeStage.label}
              </p>
              <p className="font-sans text-sm text-[rgba(42,42,40,0.65)] leading-relaxed max-w-xl">
                {activeStage.description}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Touch-friendly stage buttons for mobile */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4 md:hidden">
        {STAGES.map((stage) => (
          <button
            key={stage.id}
            onClick={() => setActive(active === stage.id ? null : stage.id)}
            className={`p-3 rounded-xl border text-xs font-sans font-medium text-left transition-all ${
              active === stage.id
                ? "border-[#B5654A] bg-[rgba(181,101,74,0.08)] text-[#B5654A]"
                : "border-[rgba(42,42,40,0.1)] text-[rgba(42,42,40,0.6)] hover:border-[rgba(42,42,40,0.2)]"
            }`}
          >
            {stage.label}
          </button>
        ))}
      </div>
    </div>
  );
}

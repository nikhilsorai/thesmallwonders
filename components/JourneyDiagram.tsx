"use client";

import { useState } from "react";

interface Stage {
  id: string;
  number: string;
  label: string;
  subtitle: string;
  description: string;
  x: number;
  y: number;
}

const STAGES: Stage[] = [
  {
    id: "excitement",
    number: "01",
    label: "Initial Excitement",
    subtitle: "Organic alignment",
    description:
      "Early energy is high. The team is small, the mission is intuitive, and everyone pulls in the same direction without needing formalized processes.",
    x: 70,
    y: 90,
  },
  {
    id: "valley",
    number: "02",
    label: "The Valley of Death",
    subtitle: "Energy leaks & drift",
    description:
      "As headcount grows, alignment drifts. Meetings multiply, communication breaks, and founders worry whether what made them great will survive the scale-up.",
    x: 250,
    y: 210,
  },
  {
    id: "anchor",
    number: "03",
    label: "The Anchor",
    subtitle: "Intentional rituals embedded",
    description:
      "Intentional rituals introduce clarity, psychological safety, and rhythm. Small repeatable behaviours absorb pressure and restore genuine alignment.",
    x: 430,
    y: 155,
  },
  {
    id: "growth",
    number: "04",
    label: "Sustained Growth",
    subtitle: "Rhythm for results",
    description:
      "With rituals rooted in daily practice, growth becomes rigorous without being ruthless. Culture compounds over quarters, not just retreats.",
    x: 610,
    y: 65,
  },
];

const PATH_D =
  "M 70 90 C 140 90, 170 210, 250 210 C 330 210, 360 155, 430 155 C 500 155, 540 65, 610 65";

export default function JourneyDiagram() {
  const [activeStageId, setActiveStageId] = useState<string>("valley");

  const currentStage = STAGES.find((s) => s.id === activeStageId) || STAGES[1];

  return (
    <div className="w-full">
      {/* Hand-considered architectural drawing SVG */}
      <div className="relative w-full bg-white rounded-3xl border border-[rgba(34,34,34,0.08)] p-6 sm:p-10 mb-8 shadow-sm">
        <div className="flex items-center justify-between text-xs text-[#222222]/45 font-sans mb-4">
          <span className="tracking-[0.14em] uppercase">The Dynamics of Growth</span>
          <span className="font-serif italic">Fig. 1 — The Valley &amp; The Anchor</span>
        </div>

        <div className="relative w-full aspect-[2.4/1] min-h-[220px]">
          <svg
            viewBox="0 0 680 280"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            role="img"
            aria-label="The Journey of Growth: Valley of Death and Rituals"
          >
            <defs>
              <linearGradient id="warmClayFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#C46243" stopOpacity="0.10" />
                <stop offset="100%" stopColor="#C46243" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Subtle horizontal reference lines */}
            <line x1="50" y1="70" x2="630" y2="70" stroke="rgba(36,35,32,0.06)" strokeWidth="1" strokeDasharray="3 5" />
            <line x1="50" y1="150" x2="630" y2="150" stroke="rgba(36,35,32,0.06)" strokeWidth="1" strokeDasharray="3 5" />
            <line x1="50" y1="220" x2="630" y2="220" stroke="rgba(36,35,32,0.06)" strokeWidth="1" strokeDasharray="3 5" />

            {/* Fill under the curve */}
            <path
              d={`${PATH_D} L 610 270 L 70 270 Z`}
              fill="url(#warmClayFill)"
            />

            {/* The main continuous curve line */}
            <path
              d={PATH_D}
              stroke="#242320"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Stage nodes */}
            {STAGES.map((stage) => {
              const isActive = stage.id === activeStageId;
              return (
                <g
                  key={stage.id}
                  className="cursor-pointer transition-all duration-300"
                  onClick={() => setActiveStageId(stage.id)}
                  tabIndex={0}
                  role="button"
                  aria-label={stage.label}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setActiveStageId(stage.id);
                    }
                  }}
                >
                  {/* Target circle */}
                  <circle
                    cx={stage.x}
                    cy={stage.y}
                    r={isActive ? 16 : 10}
                    fill={isActive ? "rgba(196, 98, 67, 0.12)" : "transparent"}
                    stroke={isActive ? "#C46243" : "rgba(36,35,32,0.18)"}
                    strokeWidth="1.5"
                    className="transition-all duration-300"
                  />

                  {/* Center dot */}
                  <circle
                    cx={stage.x}
                    cy={stage.y}
                    r={isActive ? 4.5 : 3}
                    fill={isActive ? "#C46243" : "#242320"}
                    className="transition-all duration-300"
                  />

                  {/* Stage Number & Label */}
                  <text
                    x={stage.x}
                    y={stage.id === "valley" ? stage.y + 26 : stage.y - 18}
                    textAnchor="middle"
                    fontSize="11.5"
                    fontFamily="var(--font-serif)"
                    fontStyle={isActive ? "italic" : "normal"}
                    fontWeight={isActive ? "600" : "400"}
                    fill={isActive ? "#C46243" : "rgba(36,35,32,0.8)"}
                    className="select-none transition-colors duration-200"
                  >
                    {stage.number}. {stage.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Stage Details Panel */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
        {STAGES.map((stage) => {
          const isActive = stage.id === activeStageId;
          return (
            <button
              key={stage.id}
              onClick={() => setActiveStageId(stage.id)}
              className={`text-left p-5 rounded-2xl transition-all duration-300 cursor-pointer ${
                isActive
                  ? "bg-white border-l-4 border-[#C46243] shadow-sm"
                  : "bg-transparent hover:bg-white/60 border-l-4 border-transparent"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`text-xs font-mono font-semibold ${
                    isActive ? "text-[#C46243]" : "text-[#242320]/40"
                  }`}
                >
                  {stage.number}
                </span>
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isActive ? "bg-[#C46243]" : "bg-[#242320]/20"
                  }`}
                />
              </div>
              <h3 className="font-serif text-base text-[#242320] font-medium mb-1">
                {stage.label}
              </h3>
              <p className="font-sans text-xs text-[#242320]/60 leading-relaxed">
                {stage.subtitle}
              </p>
            </button>
          );
        })}
      </div>

      {/* Active Stage Callout */}
      <div className="mt-6 p-6 rounded-2xl bg-white border border-[rgba(36,35,32,0.08)] shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
          <span className="font-serif text-lg font-medium text-[#242320]">
            Stage {currentStage.number} — {currentStage.label}
          </span>
          <span className="text-xs font-sans uppercase tracking-widest text-[#C46243] font-medium">
            {currentStage.subtitle}
          </span>
        </div>
        <p className="font-sans text-sm sm:text-base text-[#242320]/75 leading-relaxed max-w-2xl">
          {currentStage.description}
        </p>
      </div>
    </div>
  );
}

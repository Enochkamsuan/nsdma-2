"use client"

import { useState } from "react";
import { Droplets, CloudRain, Thermometer } from "lucide-react";
import { districts } from "../weatherData/page";
import WeatherStationMarker from "../weatherStationMarkers/page";
import { WeatherIcon, conditionTone } from "../weatherIcon/page";

const VIEW_W = 600;
const VIEW_H = 780;

// Stylised outline of Nagaland (decorative, not geographically precise).
const OUTLINE =
  "M150 120 L240 96 L320 150 L380 130 L460 180 L520 250 L545 340 L520 430 L470 500 L430 560 L360 620 L300 660 L240 660 L180 620 L130 560 L110 470 L100 380 L120 280 L130 190 Z";

export default function NagalandMap() {
  const [active, setActive] = useState(null);

  return (
    <section id="map" aria-labelledby="map-title" className="glass-strong animate-rise rounded-3xl p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 id="map-title" className="font-display text-xl font-bold text-foreground">Interactive Weather Map</h2>
          <p className="mt-1 text-sm text-muted-foreground">Hover or focus a station to inspect live district telemetry.</p>
        </div>
        <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
          {["Sunny", "Cloudy", "Rainy", "Thunderstorm"].map((c) => (
            <span key={c} className="inline-flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: `var(--color-${c === "Sunny" ? "sun" : c === "Cloudy" ? "muted-foreground" : c === "Rainy" ? "rain" : "storm"})` }} />
              {c}
            </span>
          ))}
        </div>
      </div>

      <div className="relative mt-5 w-full">
        <svg
          viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
          className="h-auto w-full"
          role="img"
          aria-label="Map of Nagaland districts with live weather stations"
        >
          <defs>
            <linearGradient id="landFill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="oklch(0.35 0.06 250 / 0.55)" />
              <stop offset="100%" stopColor="oklch(0.26 0.05 262 / 0.4)" />
            </linearGradient>
            <filter id="landGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* faint grid */}
          <g opacity="0.12" stroke="var(--color-aqua)" strokeWidth="0.5">
            {Array.from({ length: 11 }).map((_, i) => (
              <line key={`v${i}`} x1={(i + 1) * 50} y1="0" x2={(i + 1) * 50} y2={VIEW_H} />
            ))}
            {Array.from({ length: 15 }).map((_, i) => (
              <line key={`h${i}`} x1="0" y1={(i + 1) * 50} x2={VIEW_W} y2={(i + 1) * 50} />
            ))}
          </g>

          {/* land */}
          <path d={OUTLINE} fill="url(#landFill)" stroke="var(--color-primary)" strokeWidth="2.5" filter="url(#landGlow)" strokeLinejoin="round" />

          {/* markers */}
          {districts.map((d) => (
            <WeatherStationMarker
              key={d.name}
              district={d}
              active={active?.name === d.name}
              onActivate={setActive}
              onDeactivate={() => setActive(null)}
            />
          ))}
        </svg>

        {/* HTML tooltip overlaid using marker coordinates */}
        {active && (
          <div
            className="glass-strong pointer-events-none absolute z-10 w-52 -translate-x-1/2 -translate-y-[115%] rounded-2xl p-4 animate-scale-in"
            style={{ left: `${(active.x / VIEW_W) * 100}%`, top: `${(active.y / VIEW_H) * 100}%` }}
            role="status"
          >
            <div className="flex items-center justify-between">
              <p className="font-display text-sm font-bold text-foreground">{active.name}</p>
              <WeatherIcon condition={active.condition} className="h-5 w-5" />
            </div>
            <p className={`mt-0.5 text-xs font-medium ${conditionTone(active.condition)}`}>{active.condition}</p>
            <div className="mt-3 space-y-1.5 text-xs">
              <p className="flex items-center justify-between text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><Thermometer className="h-3.5 w-3.5 text-sun" />Temp</span>
                <span className="font-semibold text-foreground">{active.temp}°C</span>
              </p>
              <p className="flex items-center justify-between text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><Droplets className="h-3.5 w-3.5 text-aqua" />Humidity</span>
                <span className="font-semibold text-foreground">{active.humidity}%</span>
              </p>
              <p className="flex items-center justify-between text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><CloudRain className="h-3.5 w-3.5 text-rain" />Rainfall</span>
                <span className="font-semibold text-foreground">{active.rainfall} mm</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

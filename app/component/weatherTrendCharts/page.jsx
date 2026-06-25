"use client"

import { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { weekTrend } from "../weatherData/page";

function ChartTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="glass-strong rounded-xl px-3 py-2 text-xs">
      <p className="font-display text-sm font-bold text-foreground">{label}</p>
      {payload.map((p) => (
        <p key={p.dataKey} className="mt-1 flex items-center gap-2 text-muted-foreground">
          <span className="h-2 w-2 rounded-full" style={{ background: p.color }} />
          {p.name}:<span className="font-semibold text-foreground">{p.value}{p.dataKey === "rainfall" ? " mm" : "°C"}</span>
        </p>
      ))}
    </div>
  );
}

function ChartSkeleton() {
  return <div className="h-[320px] w-full shimmer rounded-2xl" aria-hidden="true" />;
}

export default function WeatherTrendChart() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section aria-labelledby="trend-title" className="glass-strong animate-rise rounded-3xl p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h2 id="trend-title" className="font-display text-xl font-bold text-foreground">7-Day Weather Trend</h2>
          <p className="mt-1 text-sm text-muted-foreground">Max / min temperature and rainfall forecast.</p>
        </div>
        <span className="rounded-full border border-glass-border bg-white/5 px-3 py-1 text-xs font-medium text-aqua">Forecast</span>
      </div>

      <div className="mt-5">
        {!mounted ? (
          <ChartSkeleton />
        ) : (
          <ResponsiveContainer width="100%" height={320}>
            <AreaChart data={weekTrend} margin={{ top: 10, right: 8, left: -18, bottom: 0 }}>
              <defs>
                <linearGradient id="maxFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--color-sun)" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="var(--color-sun)" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="rainFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--color-rain)" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="var(--color-rain)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 6" stroke="var(--color-border)" vertical={false} />
              <XAxis dataKey="day" stroke="var(--color-muted-foreground)" tickLine={false} axisLine={false} fontSize={12} />
              <YAxis stroke="var(--color-muted-foreground)" tickLine={false} axisLine={false} fontSize={12} />
              <Tooltip content={<ChartTooltip />} cursor={{ stroke: "var(--color-primary)", strokeWidth: 1, strokeDasharray: "4 4" }} />
              <Legend wrapperStyle={{ fontSize: 12, paddingTop: 8 }} />
              <Area type="monotone" dataKey="rainfall" name="Rainfall" stroke="var(--color-rain)" strokeWidth={2} fill="url(#rainFill)" />
              <Area type="monotone" dataKey="max" name="Max Temp" stroke="var(--color-sun)" strokeWidth={2.5} fill="url(#maxFill)" />
              <Line type="monotone" dataKey="min" name="Min Temp" stroke="var(--color-aqua)" strokeWidth={2.5} dot={{ r: 3 }} />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </div>
    </section>
  );
}

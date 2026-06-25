import React from 'react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {CLIMATE_SCOPE_LABEL,rainfallData,metricsData,METRIC_META} from "../../data/data";

function RainfallTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl border border-white/10 bg-slate-900/95 backdrop-blur-xl px-3 py-2 shadow-xl">
      <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
        {label}
      </p>
      <p className="mt-1 font-mono text-sm font-semibold text-cyan-300">
        {payload[0].value} mm
      </p>
    </div>
  );
}

 function ChartCard({ title, subtitle, children }) {
  return (
    <div className="relative h-full overflow-hidden rounded-3xl bg-linear-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-white/10 p-5 shadow-xl shadow-black/30 flex flex-col">
      <div className="flex items-start justify-between">
        <div>
          <h4 className="text-sm font-semibold text-white">{title}</h4>
          <p className="text-xs text-slate-500">{subtitle}</p>
        </div>
        <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          <span className="font-mono text-[11px] text-emerald-300">LIVE</span>
        </div>
      </div>
      <div className="mt-4 flex-1">{children}</div>
    </div>
  );
}

function RainfallChart() {
  return (
    <ChartCard title="Annual Rainfall" subtitle="Monthly average · mm">
      <ResponsiveContainer width="100%" height={200}>
        <BarChart
          data={rainfallData}
          margin={{ top: 4, right: 4, left: -20, bottom: 0 }}
        >
          <defs>
            <linearGradient id="rainfallGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity={0.9} />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity={0.4} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.06)" />
          <XAxis
            dataKey="month"
            tick={{ fill: "#64748b", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: "#64748b", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            content={<RainfallTooltip />}
            cursor={{ fill: "rgba(255,255,255,0.04)" }}
          />
          <Bar
            dataKey="mm"
            fill="url(#rainfallGradient)"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

function MetricsTrendChart() {
  return (
    <ChartCard
      title="7-Day Trend"
      subtitle="Temp · Humidity · Precip · Wind · AQI"
    >
      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          data={metricsData}
          margin={{ top: 4, right: 4, left: -20, bottom: 0 }}
        >
          <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.06)" />
          <XAxis
            dataKey="day"
            tick={{ fill: "#64748b", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis hide domain={[0, 100]} />
          <Tooltip
            content={<MetricsTooltip />}
            cursor={{ stroke: "rgba(255,255,255,0.1)" }}
          />
          {Object.entries(METRIC_META).map(([key, meta]) => (
            <Line
              key={key}
              type="monotone"
              dataKey={key}
              stroke={meta.color}
              strokeWidth={2}
              dot={{ r: 2.5, fill: meta.color, strokeWidth: 0 }}
              activeDot={{ r: 4 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
        {Object.entries(METRIC_META).map(([key, meta]) => (
          <span
            key={key}
            className="flex items-center gap-1.5 text-[11px] text-slate-400"
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: meta.color }}
            />
            {meta.label}
          </span>
        ))}
      </div>
    </ChartCard>
  );
}

function AirQualityCard() {
  const pm25 = 38;
  const pm10 = 72;

  // Example AQI calculation
  const aqi = Math.max(pm25, pm10);

  const getAQIStatus = (value) => {
    if (value <= 50)
      return {
        label: "Good",
        color: "#22c55e",
      };

    if (value <= 100)
      return {
        label: "Moderate",
        color: "#eab308",
      };

    if (value <= 200)
      return {
        label: "Poor",
        color: "#f97316",
      };

    if (value <= 300)
      return {
        label: "Unhealthy",
        color: "#ef4444",
      };

    if (value <= 400)
      return {
        label: "Severe",
        color: "#a855f7",
      };

    return {
      label: "Hazardous",
      color: "#7f1d1d",
    };
  };

  const status = getAQIStatus(aqi);

  return (
    <ChartCard title="Air Quality Index" subtitle="PM2.5 · PM10">
      <div className="flex items-center justify-between">
        <div>
          <div
            className="text-5xl font-bold leading-none"
            style={{ color: status.color }}
          >
            {aqi}
          </div>

          <div
            className="mt-2 text-sm font-medium"
            style={{ color: status.color }}
          >
            {status.label}
          </div>
        </div>

        <div
          className="flex h-16 w-16 items-center justify-center rounded-full border-4"
          style={{
            borderColor: status.color,
            color: status.color,
          }}
        >
          AQI
        </div>
      </div>

      <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full"
          style={{
            width: `${Math.min((aqi / 500) * 100, 100)}%`,
            backgroundColor: status.color,
          }}
        />
      </div>

      <div className="mt-2 flex justify-between text-[10px] text-slate-500">
        <span>Good</span>
        <span>Moderate</span>
        <span>Poor</span>
        <span>Unhealthy</span>
        <span>Severe</span>
        <span>Haz.</span>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-white/5 bg-white/5 p-3">
          <div className="text-[11px] text-slate-400">PM2.5</div>
          <div className="mt-1 text-lg font-semibold text-slate-100">
            {pm25}
            <span className="ml-1 text-xs text-slate-400">μg/m³</span>
          </div>
        </div>

        <div className="rounded-xl border border-white/5 bg-white/5 p-3">
          <div className="text-[11px] text-slate-400">PM10</div>
          <div className="mt-1 text-lg font-semibold text-slate-100">
            {pm10}
            <span className="ml-1 text-xs text-slate-400">μg/m³</span>
          </div>
        </div>
      </div>
    </ChartCard>
  );
}

function MetricsTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  const raw = payload[0].payload.raw;
  return (
    <div className="rounded-xl border border-white/10 bg-slate-900/95 backdrop-blur-xl p-3 shadow-xl">
      <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
        {label}
      </p>
      <div className="space-y-1.5">
        {Object.entries(METRIC_META).map(([key, meta]) => (
          <div
            key={key}
            className="flex items-center justify-between gap-4 text-xs"
          >
            <span className="flex items-center gap-1.5 text-slate-300">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: meta.color }}
              />
              {meta.label}
            </span>
            <span className="font-mono font-medium text-white">
              {raw[key]}
              {meta.unit}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const Page = () => {
  return (
    <div>
       <div className="mb-4">
          <h2 className="text-2xl font-extrabold text-white">Climate Trends</h2>
          <p className="text-sm text-slate-400 mt-1">{CLIMATE_SCOPE_LABEL}</p>
        </div>
        <div className="w-full mt-3">
          <div className="grid grid-cols-1 md:grid-cols-3 items-stretch gap-3">
            <div className="h-85">
              <RainfallChart />
            </div>
            <div className="h-85">
              <MetricsTrendChart />
            </div>
            <div>
              <AirQualityCard />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Page

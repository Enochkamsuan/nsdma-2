"use client";

import { useState, useEffect } from "react";
import {
  CloudSun,
  CloudRain,
  Cloud,
  CloudLightning,
  CloudSnow,
  Wind,
  Droplets,
  Eye,
  ArrowRight,
} from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, Tooltip } from "recharts";
import { districts } from "./mockdata";
import city from "../assets/images/city.jpg";

const week = [
  { day: "SAT", temp: "10°", Icon: CloudSun },
  { day: "SUN", temp: "15°", Icon: CloudRain },
  { day: "MON", temp: "11°", Icon: Cloud },
  { day: "TUE", temp: "9°", Icon: CloudLightning },
  { day: "WED", temp: "12°", Icon: CloudSun },
  { day: "THU", temp: "10°", Icon: CloudSnow },
];

const cities = [
  { country: "CHINA", city: "Beijing", condition: "Cloudy", Icon: Cloud },
  { country: "US", city: "California", condition: "Windy", Icon: Wind },
  {
    country: "DUBAI",
    city: "Arab Emirates",
    condition: "Mostly Sunny",
    Icon: CloudSun,
  },
  {
    country: "CANADA",
    city: "Charlottetown",
    condition: "Light Snowshower",
    Icon: CloudSnow,
  },
];

const rainData = [
  { t: "3AM", v: 40 },
  { t: "6AM", v: 65 },
  { t: "9AM", v: 55 },
  { t: "12PM", v: 80 },
  { t: "3PM", v: 60 },
  { t: "6PM", v: 45 },
];

const windBars = [
  5, 8, 6, 9, 7, 10, 8, 11, 9, 12, 10, 13, 11, 9, 8, 7, 10, 12, 9, 8,
];

function UVArc({ value = 5.5, max = 12 }) {
  const r = 70,
    cx = 100,
    cy = 105;
  const startAngle = -210,
    endAngle = 30;
  const totalAngle = endAngle - startAngle;
  const pct = Math.min(value / max, 1);
  const circumference = ((Math.PI * totalAngle) / 180) * r;
  const offset = circumference * (1 - pct);

  const toRad = (deg) => (deg * Math.PI) / 180;
  const arcPath = (start, end) => {
    const s = {
      x: cx + r * Math.cos(toRad(start)),
      y: cy + r * Math.sin(toRad(start)),
    };
    const e = {
      x: cx + r * Math.cos(toRad(end)),
      y: cy + r * Math.sin(toRad(end)),
    };
    const large = Math.abs(end - start) > 180 ? 1 : 0;
    return `M ${s.x} ${s.y} A ${r} ${r} 0 ${large} 1 ${e.x} ${e.y}`;
  };

  return (
    <svg viewBox="0 0 200 140" width="100%" style={{ maxWidth: 200 }}>
      <path
        d={arcPath(startAngle, endAngle)}
        stroke="#2a2d3e"
        strokeWidth={14}
        fill="none"
        strokeLinecap="round"
      />
      <path
        d={arcPath(startAngle, endAngle)}
        stroke="#38bdf8"
        strokeWidth={14}
        fill="none"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        style={{ transition: "stroke-dashoffset 0.8s ease" }}
      />
    </svg>
  );
}

export default function Page() {
  const [activeTab, setActiveTab] = useState("Next 7days");
  const [selectedDistrict, setSelectedDistrict] = useState("Kohima");
  const [selectedStation, setSelectedStation] = useState("DC Office");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(id);
  }, []);

  const timeStr = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const dayStr = now.toLocaleDateString([], { weekday: "long" });

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      const seed = selectedDistrict.length + selectedStation.length;
      setWeatherData({
        temperature: 16 + (seed % 8),
        realFeel: 14 + (seed % 6),
        wind: (4 + seed / 5).toFixed(1),
        pressure: 700 + (seed % 50),
        humidity: 65 + (seed % 25),
        sunrise: "5:30 AM",
        sunset: "6:45 PM",
        visibility: 4,
        uv: 5.5,
        rain: rainData,
      });
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    handleSearch();
  }, []);

  const card = {
    background: "#1a1d27",
    border: "1px solid #2a2d3e",
    borderRadius: 16,
    padding: "20px",
  };

  return (
    <main
      style={{
        background: "#0f1117",
        minHeight: "100vh",
        padding: "24px 28px",
        color: "#fff",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div style={{ display: "flex", gap: 28, marginBottom: 24 }}>
        {["Today", "Tomorrow", "Next 7days"].map((tab) => (
          <span
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              fontSize: 15,
              cursor: "pointer",
              paddingBottom: 3,
              color: activeTab === tab ? "#fff" : "#555870",
              fontWeight: activeTab === tab ? 700 : 400,
              borderBottom:
                activeTab === tab ? "2px solid #fff" : "2px solid transparent",
              transition: "all 0.2s",
            }}
          >
            {tab}
          </span>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "300px 1fr 280px",
          gap: 14,
          marginBottom: 14,
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, #f97316 0%, #fbbf24 100%)",
            borderRadius: 20,
            padding: "20px 22px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: 290,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 13,
              opacity: 0.9,
              fontWeight: 500,
            }}
          >
            <span>{dayStr}</span>sss
            <span>{timeStr}</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 8,
            }}
          >
            <div>
              <div style={{ fontSize: 60, fontWeight: 800, lineHeight: 1 }}>
                {weatherData?.temperature ?? "—"}°
              </div>
              <div style={{ fontSize: 13, marginTop: 6, opacity: 0.85 }}>
                Real Feel: {weatherData?.realFeel ?? "—"}°
              </div>
            </div>
            <CloudSun size={68} strokeWidth={1.4} />
          </div>

          <div
            style={{
              marginTop: 14,
              display: "flex",
              flexDirection: "column",
              gap: 7,
            }}
          >
            {[
              ["Wind", `${weatherData?.wind ?? "—"} km/h`],
              ["Pressure", `${weatherData?.pressure ?? "—"} MB`],
              ["Humidity", `${weatherData?.humidity ?? "—"}%`],
              ["Sunrise", weatherData?.sunrise ?? "—"],
              ["Sunset", weatherData?.sunset ?? "—"],
            ].map(([label, val]) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 13,
                  opacity: 0.9,
                }}
              >
                <span>{label}</span>
                <span style={{ fontWeight: 600 }}>{val}</span>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: 10,
          }}
        >
          {week.map(({ day, temp, Icon }) => (
            <div
              key={day}
              style={{
                ...card,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "20px 10px",
                gap: 14,
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  color: "#8b8fa8",
                  fontWeight: 600,
                  letterSpacing: 1,
                }}
              >
                {day}
              </span>
              <Icon size={32} color="#f97316" strokeWidth={1.5} />
              <span style={{ fontSize: 20, fontWeight: 700 }}>{temp}</span>
            </div>
          ))}
        </div>
        <div style={card}>
          <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 12 }}>
            Chance Of Rain
          </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              marginBottom: 8,
            }}
          >
            {["Rainy", "Sunny", "Heavy"].map((l) => (
              <span key={l} style={{ fontSize: 11, color: "#555870" }}>
                {l}
              </span>
            ))}
          </div>
          <div style={{ height: 130 }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={weatherData?.rain ?? []}>
                <defs>
                  <linearGradient id="rg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity={0.5} />
                    <stop
                      offset="100%"
                      stopColor="#38bdf8"
                      stopOpacity={0.02}
                    />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="t"
                  tick={{ fill: "#555870", fontSize: 10 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={{
                    background: "#1a1d27",
                    border: "1px solid #2a2d3e",
                    borderRadius: 8,
                    color: "#fff",
                    fontSize: 12,
                  }}
                />
                <Area
                  dataKey="v"
                  stroke="#38bdf8"
                  strokeWidth={2}
                  fill="url(#rg)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div style={{ ...card, marginTop: 18 }}>
          <h2 style={{ fontSize: 15, fontWeight: 700, marginBottom: 16 }}>
            Weather Monitoring Station
          </h2>
          <div style={{ gridTemplateColumns: "1fr 1fr auto", gap: 14 }}>
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: 12,
                  color: "#8b8fa8",
                  marginBottom: 8,
                }}
              >
                District
              </label>
              <select
                value={selectedDistrict}
                onChange={(e) => {
                  setSelectedDistrict(e.target.value);
                  setSelectedStation(districts[e.target.value][0]);
                }}
                style={{
                  width: "100%",
                  background: "#111420",
                  color: "#fff",
                  border: "1px solid #2a2d3e",
                  borderRadius: 12,
                  padding: "12px 16px",
                  fontSize: 14,
                  outline: "none",
                }}
              >
                {Object.keys(districts).map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: 12,
                  color: "#8b8fa8",
                  marginBottom: 8,
                }}
              >
                Station
              </label>
              <select
                value={selectedStation}
                onChange={(e) => setSelectedStation(e.target.value)}
                style={{
                  width: "100%",
                  background: "#111420",
                  color: "#fff",
                  border: "1px solid #2a2d3e",
                  borderRadius: 12,
                  padding: "12px 16px",
                  fontSize: 14,
                  outline: "none",
                }}
              >
                {(districts[selectedDistrict] ?? []).map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-3">
              <button
                onClick={handleSearch}
                disabled={loading}
                style={{
                  background: "#38bdf8",
                  color: "#000",
                  border: "none",
                  borderRadius: 12,
                  padding: "12px 28px",
                  fontWeight: 700,
                  fontSize: 14,
                  cursor: loading ? "not-allowed" : "pointer",
                  opacity: loading ? 0.6 : 1,
                  whiteSpace: "nowrap",
                }}
              >
                {loading ? "Loading…" : "Search Weather"}
              </button>
            </div>
          </div>
        </div>
        <div
          className=" row-span-2 rounded-2xl overflow-hidden relative flex flex-col justify-between p-5 border border-[#2a2d3e] bg-cover bg-center"
          style={{ backgroundImage: `url(${city.src})` }}
        >
          <p
            style={{
              fontSize: 18,
              fontWeight: 700,
              lineHeight: 1.35,
            }}
          >
            Explore global map of wind weather and ocean condition
          </p>
          <button
            style={{
              background: "rgba(255,255,255,0.95)",
              color: "#111",
              border: "none",
              borderRadius: 999,
              padding: "11px 22px",
              fontWeight: 700,
              fontSize: 13,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 8,
              width: "fit-content",
              letterSpacing: 0.5,
            }}
          >
            GET STARTED <ArrowRight size={14} />
          </button>
        </div>
        <div>
          <h2 style={{ fontSize: 17, fontWeight: 700, marginBottom: 14 }}>
            Today's Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center space-y-2 gap-3">
            <div
              style={{
                ...card,
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <span style={{ fontSize: 12, color: "#8b8fa8" }}>
                Wind Status
              </span>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  gap: 3,
                  height: 55,
                }}
              >
                {windBars.map((h, i) => (
                  <div
                    key={i}
                    style={{
                      width: 6,
                      borderRadius: 3,
                      height: `${(h / 13) * 100}%`,
                      background: "#f97316",
                      opacity: 0.7 + (i % 3) * 0.1,
                    }}
                  />
                ))}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                }}
              >
                <div>
                  <span style={{ fontSize: 26, fontWeight: 800 }}>
                    {weatherData?.wind ?? "—"}
                  </span>
                  <span
                    style={{ fontSize: 12, color: "#8b8fa8", marginLeft: 4 }}
                  >
                    km/h
                  </span>
                </div>
                <span style={{ fontSize: 11, color: "#555870" }}>6:20 AM</span>
              </div>
            </div>
            <div className="flex flex-col bg-[#1a1d27] border border-[#2a2d3e] rounded-2xl p-5">
              <span className="text-xs text-[#8b8fa8] mb-1">UV Index</span>
              <div className="flex flex-1 justify-center">
                <UVArc value={weatherData?.uv ?? 5.5} />
              </div>
              <div style={{ marginTop: -10 }}>
                <span style={{ fontSize: 26, fontWeight: 800 }}>
                  {weatherData?.uv ?? "—"}
                </span>
                <span style={{ fontSize: 12, color: "#8b8fa8", marginLeft: 6 }}>
                  UV
                </span>
              </div>
            </div>
            {/* Humidity */}
            <div style={card}>
              <span style={{ fontSize: 12, color: "#8b8fa8" }}>Humidity</span>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginTop: 14,
                }}
              >
                <Droplets size={38} color="#38bdf8" strokeWidth={1.5} />
                <span style={{ fontSize: 32, fontWeight: 800 }}>
                  {weatherData?.humidity ?? "—"}%
                </span>
              </div>
              <p style={{ fontSize: 11, color: "#555870", marginTop: 8 }}>
                The dew point is {weatherData?.realFeel ?? "—"}° right now
              </p>
            </div>
            {/* Visibility */}
            <div style={card}>
              <span style={{ fontSize: 12, color: "#8b8fa8" }}>Visibility</span>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginTop: 14,
                }}
              >
                <Eye size={38} color="#8b8fa8" strokeWidth={1.5} />
                <div>
                  <span style={{ fontSize: 32, fontWeight: 800 }}>
                    {weatherData?.visibility ?? "—"}
                  </span>
                  <span
                    style={{ fontSize: 12, color: "#8b8fa8", marginLeft: 4 }}
                  >
                    km
                  </span>
                </div>
              </div>
              <p style={{ fontSize: 11, color: "#555870", marginTop: 8 }}>
                Haze is affecting visibility
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

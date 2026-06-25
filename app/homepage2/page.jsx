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
import NalandStationMap from "../component/nagalandStationMap"

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
  const [now, setNow] = useState(null);

  useEffect(() => {
    setNow(new Date());

    const id = setInterval(() => {
      setNow(new Date());
    }, 60_000);

    return () => clearInterval(id);
  }, []);

  const timeStr = now
    ? now.toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
    : "--:--";

  const dayStr = now
    ? now.toLocaleDateString("en-IN", {
        timeZone: "Asia/Kolkata",
        weekday: "long",
      })
    : "Loading...";

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

  if (!now) return null;

  const card = {
    background: "#1a1d27",
    border: "1px solid #2a2d3e",
    borderRadius: 16,
    padding: "20px",
  };

  return (
    <main className="bg-[#0f1117] min-h-screen px-7 py-6 text-white font-sans">
      <div className="flex mb-6 gap-7">
        {["Today", "Tomorrow", "Next 7days"].map((tab) => (
          <span
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`cursor-pointer text-base pb-1 transition-all duration-200 ${activeTab === tab ? "#fff font-bold border-b-2 border-white" : "#555870 font-normal border-b-2 border-transparent"}`}
          >
            {tab}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 items-stretch gap-4 mb-3.5">
        <div className="md:col-span-3">
          <div className="bg-linear-to-br from-orange-500 to-amber-400 rounded-[20px] px-5.5 py-5 flex flex-col justify-between h-full">
            <div className="flex justify-between text-[13px] opacity-90 font-medium">
              <span>{dayStr}</span>
              <span>{timeStr}</span>
            </div>
            <div className="flex items-center justify-between mt-2">
              <div>
                <div className="text-6xl font-extrabold leading-none">
                  {weatherData?.temperature ?? "—"}°
                </div>
                <div className="text-sm mt-1.5 opacity-[0.35]">
                  Real Feel: {weatherData?.realFeel ?? "—"}°
                </div>
              </div>
              <CloudSun size={68} strokeWidth={1.4} />
            </div>

            <div className="flex flex-col gap-2 mt-3.5">
              {[
                ["Wind", `${weatherData?.wind ?? "—"} km/h`],
                ["Pressure", `${weatherData?.pressure ?? "—"} MB`],
                ["Humidity", `${weatherData?.humidity ?? "—"}%`],
                ["Sunrise", weatherData?.sunrise ?? "—"],
                ["Sunset", weatherData?.sunset ?? "—"],
              ].map(([label, val]) => (
                <div
                  className="flex justify-between text-base opacity-90"
                  key={label}
                >
                  <span>{label}</span>
                  <span className="font-semibold">{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="md:col-span-6">
          <div className="flex items-stretch h-full gap-2.5">
            {week.map(({ day, temp, Icon }) => (
              <div
                className="w-full flex flex-col justify-between h-full"
                key={day}
                style={{
                  ...card,
                }}
              >
                <span className="text-xs text-[#8b8fa8] font-semibold tracking-[1px]">
                  {day}
                </span>
                <Icon size={32} color="#f97316" strokeWidth={1.5} />
                <span style={{ fontSize: 20, fontWeight: 700 }}>{temp}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-3" style={card}>
          <h3 className="font-bold mb-3 text-base">Chance Of Rain</h3>
          <div className="flex flex-col gap-1 mb-2">
            {["Rainy", "Sunny", "Heavy"].map((l) => (
              <span className="text-xs text-[#555870]" key={l}>
                {l}
              </span>
            ))}
          </div>
          <div className="h-32">
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
      <div className="grid grid-cols-1 items-stretch md:grid-cols-3 gap-3 min-h-[420px]">
        <div className="h-full">
          <div className="h-full" style={{ ...card }}>
          <h2 className="text-sm font-bold mb-4">Weather Monitoring Station</h2>
          <div>
            <div>
              <label className="block text-xs text-[#8b8fa8] mb-2">
                District
              </label>
              <select
                value={selectedDistrict}
                onChange={(e) => {
                  setSelectedDistrict(e.target.value);
                  setSelectedStation(districts[e.target.value][0]);
                }}
                className="w-full bg-[#111420] border border-[#2a2d3e] rounded-xl outline-none text-sm p-3"
              >
                {Object.keys(districts).map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs text-[#8b8fa8] mb-2">
                Station
              </label>
              <select
                value={selectedStation}
                onChange={(e) => setSelectedStation(e.target.value)}
                className="w-full bg-[#111420] border border-[#2a2d3e] rounded-xl outline-none text-sm p-3"
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
                className={`bg-[#38bdf8] text-black border-none rounded-lg px-3 py-2 font-bold text-sm ${loading ? "cursor-not-allowed opacity-60" : "cursor-pointer opacity-100"}`}
              >
                {loading ? "Loading…" : "Search Weather"}
              </button>
            </div>
          </div>
        </div>
        </div>
        <div className="rounded-2xl overflow-hidden relative flex flex-col justify-between p-5 border border-[#2a2d3e] bg-cover bg-center h-full"
          style={{ backgroundImage: `url(${city.src})` }}
        >
          <p className="text-lg font-bold leading-7">
            Explore global map of wind weather and ocean condition
          </p>
          <button className="bg-white/95 text-[#111] border-0 rounded-full px-5.5 py-2.75 font-bold text-[13px] cursor-pointer flex items-center gap-2 w-fit tracking-[0.5px]">
            GET STARTED <ArrowRight size={14} />
          </button>
        </div>
        <div className="h-full flex flex-col">
          <h2 className="text-base font-bold mb-3.5">Today's Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 items-stretch gap-3">
            <div
              className="flex flex-col h-full gap-3"
              style={{
                ...card,
              }}
            >
              <span className="text-xs text-[#8b8fa8]">Wind Status</span>
              <div className="flex items-end h-14 gap-1">
                {windBars.map((h, i) => (
                  <div
                    key={i}
                    className="w-1.5 rounded-[3px] bg-orange-500"
                    style={{
                      height: `${(h / 13) * 100}%`,
                      opacity: 0.7 + (i % 3) * 0.1,
                    }}
                  />
                ))}
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <span className="text-3xl font-extrabold">
                    {weatherData?.wind ?? "—"}
                  </span>
                  <span className="text-xs text-[#8b8fa8] ml-1">
                    km/h
                  </span>
                </div>
                <span className="text-xs text-[#555870]">6:20 AM</span>
              </div>
            </div>
            <div className="flex flex-col h-full bg-[#1a1d27] border border-[#2a2d3e] rounded-2xl p-5">
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
            <div className="h-full" style={card}>
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
            <div className="h-full" style={card}>
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

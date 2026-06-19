"use client";

import React, { useState, useRef } from "react";
import hero from "../assets/images/nagaland-hero.jpg";
import { CiLocationOn } from "react-icons/ci";
import { FaSearch, FaTint, FaWind } from "react-icons/fa";
import { Sun, CloudSun, CloudRain, Moon } from "lucide-react";
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
// import Map from "../component/MapSvg";
import map from "../assets/images/nagaland-map-slide1.png";
import Image from "next/image";
import {
  WiDaySunny,
  WiCloudy,
  WiRain,
  WiSunrise,
  WiSunset,
} from "react-icons/wi";
import WeatherAnimation from "../component/weatherAnimation/page";

const dailyForecast = [
  { day: "Today", high: 28, low: 19, condition: "Sunny", icon: WiDaySunny },
  { day: "Tomorrow", high: 25, low: 18, condition: "Cloudy", icon: WiCloudy },
  { day: "Sun", high: 22, low: 17, condition: "Rain", icon: WiRain },
];

const sunTimes = {
  sunrise: "5:12 AM",
  sunset: "6:48 PM",
};

const weatherData = [
  {
    district: "Chumoukedima",
    condition: "Cloudy",
    high: 22,
    low: 14,
    icon: "☁️",
  },
  { district: "Dimapur", condition: "Sunny", high: 31, low: 22, icon: "☀️" },
  { district: "Kiphire", condition: "Rain", high: 24, low: 17, icon: "🌧️" },
  { district: "Kohima", condition: "Cloudy", high: 21, low: 13, icon: "⛅" },
  { district: "Longleng", condition: "Rain", high: 26, low: 19, icon: "🌧️" },
  { district: "Meluri", condition: "Cloudy", high: 25, low: 16, icon: "☁️" },
  {
    district: "Mokokchung",
    condition: "Cloudy",
    high: 23,
    low: 15,
    icon: "☁️",
  },
  { district: "Mon", condition: "Rain", high: 27, low: 20, icon: "🌧️" },
  { district: "Niuland", condition: "Sunny", high: 30, low: 21, icon: "☀️" },
  { district: "Noklak", condition: "Cloudy", high: 22, low: 15, icon: "☁️" },
  { district: "Peren", condition: "Rain", high: 25, low: 18, icon: "🌧️" },
  { district: "Phek", condition: "Cloudy", high: 21, low: 12, icon: "⛅" },
  { district: "Shamator", condition: "Rain", high: 24, low: 17, icon: "🌧️" },
  { district: "Tsheminyu", condition: "Cloudy", high: 23, low: 14, icon: "☁️" },
  { district: "Tuensang", condition: "Rain", high: 22, low: 15, icon: "🌧️" },
  { district: "Wokha", condition: "Cloudy", high: 25, low: 16, icon: "☁️" },
  { district: "Zhunheboto", condition: "Sunny", high: 29, low: 20, icon: "☀️" },
];

const rainfallData = [
  { month: "Jan", mm: 12 },
  { month: "Feb", mm: 18 },
  { month: "Mar", mm: 45 },
  { month: "Apr", mm: 110 },
  { month: "May", mm: 220 },
  { month: "Jun", mm: 380 },
  { month: "Jul", mm: 420 },
  { month: "Aug", mm: 390 },
  { month: "Sep", mm: 280 },
  { month: "Oct", mm: 140 },
  { month: "Nov", mm: 35 },
  { month: "Dec", mm: 10 },
];

const metricsRaw = [
  { day: "Mon", temp: 24, humidity: 78, precip: 12, wind: 8, aqi: 42 },
  { day: "Tue", temp: 25, humidity: 74, precip: 5, wind: 10, aqi: 38 },
  { day: "Wed", temp: 23, humidity: 81, precip: 22, wind: 14, aqi: 55 },
  { day: "Thu", temp: 22, humidity: 85, precip: 30, wind: 18, aqi: 61 },
  { day: "Fri", temp: 26, humidity: 70, precip: 4, wind: 9, aqi: 47 },
  { day: "Sat", temp: 27, humidity: 65, precip: 0, wind: 7, aqi: 35 },
  { day: "Sun", temp: 25, humidity: 72, precip: 8, wind: 11, aqi: 40 },
];

const METRIC_META = {
  temp: {
    label: "Temperature",
    color: "#fbbf24",
    unit: "°C",
    min: 15,
    max: 35,
  },
  humidity: {
    label: "Humidity",
    color: "#38bdf8",
    unit: "%",
    min: 0,
    max: 100,
  },
  precip: {
    label: "Precipitation",
    color: "#818cf8",
    unit: "mm",
    min: 0,
    max: 50,
  },
  wind: {
    label: "Wind Speed",
    color: "#2dd4bf",
    unit: "km/h",
    min: 0,
    max: 40,
  },
  aqi: { label: "AQI", color: "#fb7185", unit: "", min: 0, max: 150 },
};

const normalize = (key, value) => {
  const { min, max } = METRIC_META[key];
  return Math.round(((value - min) / (max - min)) * 100);
};

const metricsData = metricsRaw.map((d) => ({
  day: d.day,
  raw: d,
  temp: normalize("temp", d.temp),
  humidity: normalize("humidity", d.humidity),
  precip: normalize("precip", d.precip),
  wind: normalize("wind", d.wind),
  aqi: normalize("aqi", d.aqi),
}));

const ICONS = [Sun, CloudSun, CloudRain, Moon];

const createHourlyData = (dayIndex = 0) =>
  Array.from({ length: 24 }, (_, hour) => {
    const displayHour = hour % 12 === 0 ? 12 : hour % 12;
    const period = hour < 12 ? "AM" : "PM";
    const seed = dayIndex * 24 + hour;

    return {
      time: `${displayHour} ${period}`,
      temp: 22 + ((seed * 7 + 3) % 10),
      rain: (seed * 13 + 5) % 100,
      wind: 3 + ((seed * 11 + 7) % 15),
      icon: ICONS[(seed * 3 + dayIndex) % ICONS.length],
    };
  });

const forecastDays = [
  { day: "Today", high: 31, low: 22, hourly: createHourlyData(0) },
  { day: "Thu", high: 30, low: 21, hourly: createHourlyData(1) },
  { day: "Fri", high: 29, low: 20, hourly: createHourlyData(2) },
  { day: "Sat", high: 27, low: 19, hourly: createHourlyData(3) },
  { day: "Sun", high: 28, low: 20, hourly: createHourlyData(4) },
  { day: "Mon", high: 30, low: 21, hourly: createHourlyData(5) },
  { day: "Tue", high: 32, low: 23, hourly: createHourlyData(6) },
  { day: "Wed", high: 31, low: 22, hourly: createHourlyData(7) },
];

const STATIONS = [
  "DC Office",
  "Dhansiripar",
  "Medzhephima",
  "Patkai Christian College",
  "Pherima, Crucifix Pilgrim",
  "Piphema Council Hall",
  "Razaphe Bawe (Eden Ram)",
  "Zoological Park, Nagaland",
];

const districts = {
  Chumoukedima: STATIONS,
  Dimapur: STATIONS,
  Kiphire: STATIONS,
  Kohima: STATIONS,
  Longleng: STATIONS,
  Meluri: STATIONS,
  Mokokchung: STATIONS,
  Mon: STATIONS,
  Niuland: STATIONS,
  Noklak: STATIONS,
  Peren: STATIONS,
  Phek: STATIONS,
  Shamator: STATIONS,
  Tsheminyu: STATIONS,
  Tuensang: STATIONS,
  Wokha: STATIONS,
  Zhunheboto: STATIONS,
};

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

function ForecastSection() {
  const [selectedDay, setSelectedDay] = useState(0);
  const scrollRef = useRef(null);

  const scrollLeft = () =>
    scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" });
  const scrollRight = () =>
    scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" });

  const currentDay = forecastDays[selectedDay];

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/90 backdrop-blur-xl overflow-hidden">
      <div className="px-6 pt-6">
        <h2 className="text-xl font-semibold text-white">Next 8 Days</h2>
      </div>

      {/* Day tabs */}
      <div className="mt-5 border-b relative border-white/10">
        <button
          onClick={scrollLeft}
          className="absolute left-2 top-[83%] z-10 -translate-y-1/2 text-white cursor-pointer"
        >
          ←
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-2 top-[83%] z-10 -translate-y-1/2 text-white cursor-pointer"
        >
          →
        </button>

        <div ref={scrollRef} className="flex overflow-x-auto scrollbar-hide">
          {forecastDays.map((day, index) => (
            <button
              key={day.day}
              onClick={() => setSelectedDay(index)}
              className={`min-w-35 px-4 py-4 transition-all ${
                selectedDay === index
                  ? "bg-white/5 border-b-2 border-cyan-400"
                  : "hover:bg-white/5"
              }`}
            >
              <p className="text-xs text-slate-400">{day.day}</p>
              <div className="mt-2 flex justify-center gap-2">
                <span className="font-semibold text-white">{day.high}°</span>
                <span className="text-slate-500">{day.low}°</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="p-6">
        <h3 className="mb-4 text-sm font-medium text-slate-300">
          Hourly Forecast
        </h3>
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex min-w-max gap-3">
            {currentDay.hourly.map((hour) => {
              const Icon = hour.icon;
              return (
                <div
                  key={hour.time}
                  className="w-28 shrink-0 rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
                >
                  <p className="text-xs text-slate-400">{hour.time}</p>
                  <Icon className="mx-auto my-3 h-7 w-7 text-yellow-400" />
                  <p className="text-xl font-semibold text-white">
                    {hour.temp}°
                  </p>
                  <div className="mt-3 space-y-1">
                    <p className="text-xs text-cyan-300">🌧 {hour.rain}%</p>
                    <p className="text-xs text-slate-500">
                      💨 {hour.wind} km/h
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

const Landing = () => {
  const [district, setDistrict] = useState("");
  const [station, setStation] = useState("");
  const [current, setCurrent] = useState(0);

  const slides = [];
  for (let i = 0; i < weatherData.length; i += 3) {
    slides.push(weatherData.slice(i, i + 3));
  }

  const handleDistrictChange = (e) => {
    setDistrict(e.target.value);
    setStation("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ district, station });
  };

  return (
    <div>
      <section>
        <div
          style={{ backgroundImage: `url(${hero.src})` }}
          className="min-h-[80vh] bg-cover bg-center relative bg-no-repeat after:absolute after:content-[''] after:bg-black/50 after:inset-0 after:z-0 px-2 sm:px-6 lg:px-16"
        >
          <WeatherAnimation condition={dailyForecast[0]?.condition} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 py-4 md:py-16 items-center relative z-10">
            <div className="max-w-xl">
              <div className="inline-flex border rounded-full bg-white/20 px-2 items-center">
                <CiLocationOn />
                <span> Nagaland · India</span>
              </div>
              <div className="text-lg md:text-3xl font-extrabold">
                Hyper-local weather across the{" "}
                <span className="text-[#fc9e47fa]">land of festivals</span>
              </div>
              <div className="py-4">
                Real-time forecasts from weather stations spread across every
                district of Nagaland. Pick your district and station to begin.
              </div>
            </div>

            <div className="w-full max-w-xl flex flex-col gap-4">
              <div className="bg-white rounded-md p-3">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col md:flex-row gap-3 items-stretch">
                    <div className="flex-1">
                      <select
                        value={district}
                        onChange={handleDistrictChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-3 text-gray-900 bg-white"
                      >
                        <option value="">Select District</option>
                        {Object.keys(districts).map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="flex-1">
                      <select
                        value={station}
                        onChange={(e) => setStation(e.target.value)}
                        disabled={!district}
                        className="w-full rounded-md border border-gray-300 px-3 py-3 text-gray-900 bg-white disabled:cursor-not-allowed disabled:bg-gray-100"
                      >
                        <option value="">
                          {district
                            ? "Select Station"
                            : "Select District First"}
                        </option>
                        {district &&
                          districts[district].map((item) => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={!district || !station}
                      className="text-black transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <FaSearch className="text-lg" />
                    </button>
                  </div>
                </form>
              </div>
              {/* Daily forecast card */}
              <div>
                <div className="text-sm font-semibold text-white mb-2">
                  3-Day Forecast
                </div>
                <div className="flex gap-2 z-10 rounded-md">
                  {dailyForecast.map((day) => (
                    <div
                      key={day.day}
                      className="flex flex-1 flex-col items-center gap-1 rounded-md bg-white/20 py-2"
                    >
                      <span className="text-xs font-medium text-gray-900">
                        {day.day}
                      </span>
                      <day.icon className="text-xl text-[#fc9e47fa]" />
                      <span className="text-sm font-bold text-gray-900">
                        {day.high}°/{day.low}°
                      </span>
                      <span className="text-[10px] text-white">
                        {day.condition}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative z-10 bg-white/90 rounded-md p-3">
                <div className="text-sm font-semibold text-gray-700 mb-2">
                  Sun Times
                </div>
                <div className="flex gap-2">
                  <div className="flex flex-1 items-center gap-2 rounded-md bg-white/20 py-2 px-3">
                    <WiSunrise className="text-2xl text-[#fc9e47fa]" />
                    <div className="flex flex-col">
                      <span className="text-[10px] text-gray-500">Sunrise</span>
                      <span className="text-sm font-bold text-gray-900">
                        {sunTimes.sunrise}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 items-center gap-2 rounded-md bg-white/20 py-2 px-3">
                    <WiSunset className="text-2xl text-[#fc9e47fa]" />
                    <div className="flex flex-col">
                      <span className="text-[10px] text-gray-500">Sunset</span>
                      <span className="text-sm font-bold text-gray-900">
                        {sunTimes.sunset}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-2 sm:px-6 lg:px-16">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, slideIndex) => (
              <div key={slideIndex} className="w-full shrink-0 px-3">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {slide.map((row, i) => (
                    <div
                      key={i}
                      className="group relative overflow-hidden rounded-3xl bg-linear-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-white/10 p-6 shadow-xl shadow-black/30 hover:border-white/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-cyan-400/20 blur-3xl transition-colors duration-300 group-hover:bg-cyan-400/30" />
                      <div className="relative flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-semibold tracking-tight text-white">
                            {row.district}
                          </h3>
                          <p className="mt-0.5 text-sm text-slate-400">
                            {row.condition}
                          </p>
                        </div>
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl">
                          {row.icon}
                        </div>
                      </div>
                      <div className="relative mt-8 flex items-end gap-2">
                        <span className="font-mono text-5xl font-bold tabular-nums text-white">
                          {row.high}°
                        </span>
                        <span className="mb-1.5 text-lg text-slate-500">
                          / {row.low}°C
                        </span>
                      </div>
                      <div className="relative my-5 h-px bg-linear-to-r from-white/0 via-white/15 to-white/0" />
                      <div className="relative flex items-center justify-between text-sm text-slate-300">
                        <span className="flex items-center gap-1.5">
                          <FaTint className="text-sky-400" /> 76%
                        </span>
                        <span className="flex items-center gap-1.5">
                          <FaWind className="text-teal-300" /> 10 km/h
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                current === i
                  ? "w-10 bg-cyan-500"
                  : "w-2 bg-slate-600 hover:bg-slate-500"
              }`}
            />
          ))}
        </div>

        {/* Charts */}
        <div className="w-full md:w-2/3 mt-3">
          <div className="grid grid-cols-1 md:grid-cols-2 items-stretch gap-3">
            <div className="h-85">
              <RainfallChart />
            </div>
            <div className="h-85">
              <MetricsTrendChart />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-2 sm:px-6 lg:px-16">
        <div className="grid grid-cols-12 gap-4 items-center">
          <div className="col-span-12 lg:col-span-8">
            <ForecastSection />
          </div>
          <div className="col-span-12 lg:col-span-4">
            {/* <Map /> */}
            <Image
              className="w-full"
              src={map}
              height={200}
              width={200}
              alt="map"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;

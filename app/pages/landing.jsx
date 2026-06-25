"use client";

import React, { useState, useRef, useMemo } from "react";
import hero from "../assets/images/nagaland-hero.jpg";
import { CiLocationOn } from "react-icons/ci";
import { FaSearch, FaTint, FaWind } from "react-icons/fa";
import { Sun, CloudSun, CloudRain, Moon } from "lucide-react";
import { WiSunrise, WiSunset } from "react-icons/wi";
import WeatherAnimation from "../component/weatherAnimation/page";
import NagalandStationMap from "../component/nagalandStationMap";
import {
  mockStationWeather,
  districts,
  districtWeatherData,
  DEFAULT_DISTRICT,
  DEFAULT_STATION,
  buildDailyForecast,
  buildForecastDays,
  sunTimes,
} from "../data/data";
import Chart from "../component/charts/page";

const ICON_MAP = {
  sun: Sun,
  "cloud-sun": CloudSun,
  "cloud-rain": CloudRain,
  moon: Moon,
};

function DistrictBadge({ district }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-[#fc9e47fa]/90 px-2.5 py-1 text-[11px] font-semibold text-white">
      <CiLocationOn className="text-sm" />
      {district}
    </span>
  );
}

function ForecastSection({ district, forecastDays }) {
  const [selectedDay, setSelectedDay] = useState(0);
  const scrollRef = useRef(null);

  const scrollLeft = () =>
    scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" });
  const scrollRight = () =>
    scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" });

  const currentDay = forecastDays[selectedDay];

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/90 backdrop-blur-xl overflow-hidden">
      <div className="px-6 pt-6 flex items-center justify-between gap-3 flex-wrap">
        <div>
          <h2 className="text-xl font-semibold text-white">
            8-Day Hourly Outlook
          </h2>
          <p className="text-xs text-white mt-0.5">
            Hour-by-hour temperature, rain chance, and wind for your selected
            station
          </p>
        </div>
        <DistrictBadge district={district} />
      </div>
      <div className="mt-5 border-b relative border-white/10">
        <div className="flex overflow-x-auto scrollbar-hide">
          {forecastDays.map((day, index) => (
            <button
              key={`${day.day}-${index}`}
              onClick={() => setSelectedDay(index)}
              className={`w-full px-4 py-4 transition-all ${
                selectedDay === index
                  ? "bg-white/5 border-b-2 border-cyan-400"
                  : "hover:bg-white/5"
              }`}
            >
              <p className="text-xs text-slate-300">{day.day}</p>
              <p className="text-[10px] text-slate-300">{day.date}</p>
              <div className="mt-2 flex justify-center gap-2">
                <span className="font-semibold text-white">{day.high}°</span>
                <span className="text-slate-300">{day.low}°</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="p-6">
        <h3 className="mb-4 text-sm font-medium text-slate-300">
          Hourly Forecast — {currentDay.day}, {currentDay.date}
        </h3>
        <button
          onClick={scrollLeft}
          className="absolute left-1 top-[71%] z-10 -translate-y-1/2 text-white cursor-pointer"
        >
          ←
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-1 top-[71%] z-10 -translate-y-1/2 text-white cursor-pointer"
        >
          →
        </button>
        <div ref={scrollRef} className="overflow-x-auto scrollbar-hide">
          <div className="flex min-w-max gap-3">
            {currentDay.hourly.map((hour) => {
              const Icon = ICON_MAP[hour.iconKey];
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
  const [district, setDistrict] = useState(DEFAULT_DISTRICT);
  const [station, setStation] = useState(DEFAULT_STATION);
  const [current, setCurrent] = useState(0);
  const [lastSearched, setLastSearched] = useState(
    `${DEFAULT_STATION}, ${DEFAULT_DISTRICT}`,
  );

  const slides = [];
  for (let i = 0; i < districtWeatherData.length; i += 3) {
    slides.push(districtWeatherData.slice(i, i + 3));
  }

  const activeDistrict = district || DEFAULT_DISTRICT;

  const dailyForecast = useMemo(
    () => buildDailyForecast(activeDistrict),
    [activeDistrict],
  );

  const forecastDays = useMemo(
    () => buildForecastDays(activeDistrict),
    [activeDistrict],
  );

  const handleDistrictChange = (e) => {
    setDistrict(e.target.value);
    setStation("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLastSearched(`${station}, ${district}`);
  };

  return (
    <div>
      <section>
        <div
          style={{ backgroundImage: `url(${hero.src})` }}
          className="min-h-[80vh] bg-cover bg-center relative bg-no-repeat after:absolute after:content-[''] after:bg-black/50 after:inset-0 after:z-0 px-2 sm:px-6 lg:px-16">
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
                      <label htmlFor="district" aria-label="Select District" />
                      <select
                      id="district"
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
                      <label htmlFor="station" aria-label="Select Station" />
                      <select
                      id="station"
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
                          districts[district]?.map((item) => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                      </select>
                    </div>

                    <button
                      type="submit"
                      aria-label="search"
                      disabled={!district || !station}
                      className="text-black transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <FaSearch className="text-lg" />
                    </button>
                  </div>
                </form>
                {lastSearched && (
                  <p className="mt-2 text-xs text-gray-500">
                    Showing weather for{" "}
                    <span className="font-medium text-gray-700">
                      {lastSearched}
                    </span>
                  </p>
                )}
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-semibold text-white">
                    3-Day Forecast
                  </div>
                  <DistrictBadge district={activeDistrict} />
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
      <section className="pt-16 px-2 sm:px-6 lg:px-16">
        <div className="mb-6">
          <h2 className="text-2xl font-extrabold text-white">
            All Districts at a Glance
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Current conditions for every district in Nagaland — independent of
            the district selected above
          </p>
        </div>
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
        <div className="flex justify-center gap-2 my-8">
          {slides.map((_, i) => (
            <button
            aria-label={`go to slide ${i+1}`}
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-6 rounded-full transition-all duration-300 cursor-pointer ${
                current === i
                  ? "w-10 bg-cyan-500"
                  : "w-2 bg-slate-600 hover:bg-slate-500"
              }`}
            />
          ))}
        </div>
       <Chart />
      </section>
      <section className="pt-16 px-2 sm:px-6 lg:px-16">
        <div className="text-center mb-2">
          <h2 className="text-2xl font-extrabold tracking-widest">
            Live Station Map
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Hover a marker to see that station's current high/low and conditions
          </p>
        </div>
        <div className="flex justify-center">
          <NagalandStationMap
            weatherByStationId={mockStationWeather}
            className="w-full h-[95vh]"
          />
        </div>
      </section>
      <section className="py-16 px-2 sm:px-6 lg:px-16">
        <ForecastSection
          district={activeDistrict}
          forecastDays={forecastDays}
        />
      </section>
    </div>
  );
};

export default Landing;

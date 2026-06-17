"use client";

import React, { useState } from "react";
import hero from "../assets/images/nagaland-hero.jpg";
import { CiLocationOn } from "react-icons/ci";
import Image from "next/image";

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

const Landing = () => {
  const districts = {
    Chumoukedima: [
      "DC Office",
      "Dhansiripar",
      "Medzhephima",
      "Patkai Christian College",
      "Pherima, Crucifix Pilgrim",
      "Piphema Council Hall",
      "Razaphe Bawe (Eden Ram)",
      "Zoological Park, Nagaland",
    ],
    Dimapur: [
      "DC Office",
      "Dhansiripar",
      "Medzhephima",
      "Patkai Christian College",
      "Pherima, Crucifix Pilgrim",
      "Piphema Council Hall",
      "Razaphe Bawe (Eden Ram)",
      "Zoological Park, Nagaland",
    ],
    Kiphire: [
      "DC Office",
      "Dhansiripar",
      "Medzhephima",
      "Patkai Christian College",
      "Pherima, Crucifix Pilgrim",
      "Piphema Council Hall",
      "Razaphe Bawe (Eden Ram)",
      "Zoological Park, Nagaland",
    ],
    Kohima: [
      "DC Office",
      "Dhansiripar",
      "Medzhephima",
      "Patkai Christian College",
      "Pherima, Crucifix Pilgrim",
      "Piphema Council Hall",
      "Razaphe Bawe (Eden Ram)",
      "Zoological Park, Nagaland",
    ],
    Longleng: [
      "DC Office",
      "Dhansiripar",
      "Medzhephima",
      "Patkai Christian College",
      "Pherima, Crucifix Pilgrim",
      "Piphema Council Hall",
      "Razaphe Bawe (Eden Ram)",
      "Zoological Park, Nagaland",
    ],
    Meluri: [
      "DC Office",
      "Dhansiripar",
      "Medzhephima",
      "Patkai Christian College",
      "Pherima, Crucifix Pilgrim",
      "Piphema Council Hall",
      "Razaphe Bawe (Eden Ram)",
      "Zoological Park, Nagaland",
    ],
    Mokokchung: [
      "DC Office",
      "Dhansiripar",
      "Medzhephima",
      "Patkai Christian College",
      "Pherima, Crucifix Pilgrim",
      "Piphema Council Hall",
      "Razaphe Bawe (Eden Ram)",
      "Zoological Park, Nagaland",
    ],
    Mon: [
      "DC Office",
      "Dhansiripar",
      "Medzhephima",
      "Patkai Christian College",
      "Pherima, Crucifix Pilgrim",
      "Piphema Council Hall",
      "Razaphe Bawe (Eden Ram)",
      "Zoological Park, Nagaland",
    ],
    Niuland: [
      "DC Office",
      "Dhansiripar",
      "Medzhephima",
      "Patkai Christian College",
      "Pherima, Crucifix Pilgrim",
      "Piphema Council Hall",
      "Razaphe Bawe (Eden Ram)",
      "Zoological Park, Nagaland",
    ],
    Noklak: [
      "DC Office",
      "Dhansiripar",
      "Medzhephima",
      "Patkai Christian College",
      "Pherima, Crucifix Pilgrim",
      "Piphema Council Hall",
      "Razaphe Bawe (Eden Ram)",
      "Zoological Park, Nagaland",
    ],
    Peren: [
      "DC Office",
      "Dhansiripar",
      "Medzhephima",
      "Patkai Christian College",
      "Pherima, Crucifix Pilgrim",
      "Piphema Council Hall",
      "Razaphe Bawe (Eden Ram)",
      "Zoological Park, Nagaland",
    ],
    Phek: [
      "DC Office",
      "Dhansiripar",
      "Medzhephima",
      "Patkai Christian College",
      "Pherima, Crucifix Pilgrim",
      "Piphema Council Hall",
      "Razaphe Bawe (Eden Ram)",
      "Zoological Park, Nagaland",
    ],
    Shamator: [
      "DC Office",
      "Dhansiripar",
      "Medzhephima",
      "Patkai Christian College",
      "Pherima, Crucifix Pilgrim",
      "Piphema Council Hall",
      "Razaphe Bawe (Eden Ram)",
      "Zoological Park, Nagaland",
    ],
    Tsheminyu: [
      "DC Office",
      "Dhansiripar",
      "Medzhephima",
      "Patkai Christian College",
      "Pherima, Crucifix Pilgrim",
      "Piphema Council Hall",
      "Razaphe Bawe (Eden Ram)",
      "Zoological Park, Nagaland",
    ],
    Tuensang: [
      "DC Office",
      "Dhansiripar",
      "Medzhephima",
      "Patkai Christian College",
      "Pherima, Crucifix Pilgrim",
      "Piphema Council Hall",
      "Razaphe Bawe (Eden Ram)",
      "Zoological Park, Nagaland",
    ],
    Wokha: [
      "DC Office",
      "Dhansiripar",
      "Medzhephima",
      "Patkai Christian College",
      "Pherima, Crucifix Pilgrim",
      "Piphema Council Hall",
      "Razaphe Bawe (Eden Ram)",
      "Zoological Park, Nagaland",
    ],
    Zhunheboto: [
      "DC Office",
      "Dhansiripar",
      "Medzhephima",
      "Patkai Christian College",
      "Pherima, Crucifix Pilgrim",
      "Piphema Council Hall",
      "Razaphe Bawe (Eden Ram)",
      "Zoological Park, Nagaland",
    ],
  };
  const [district, setDistrict] = useState("");
  const [station, setStation] = useState("");
  const [current, setCurrent] = useState(0);

  const slides = [];

  for (let i = 0; i < weatherData.length; i += 6) {
    slides.push(weatherData.slice(i, i + 6));
  }

  const handleDistrictChange = (e) => {
    setDistrict(e.target.value);
    setStation(""); // reset station when district changes
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      district,
      station,
    });
  };

  return (
    <div>
      <section>
        <div
          style={{ backgroundImage: `url(${hero.src})` }}
          className="min-h-[80vh] bg-cover bg-center relative bg-no-repeat after:absolute after:content-[''] after:bg-black/50 after:inset-0 after:z-0 px-2 sm:px-6 lg:px-16"
        >
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
            <div className="w-full max-w-xl mx-auto rounded-3xl border border-white/20 bg-white/95 backdrop-blur-lg shadow-2xl p-6 md:p-8">
              <div className="text-mist-950 font-medium text-lg">
                Check the forecast
              </div>
              <div className="text-gray-500">
                Select a district and weather station.
              </div>
              <form onSubmit={handleSubmit} className="max-w-md space-y-4 p-6">
                {/* District */}
                <div>
                  <label className="mb-2 block font-medium text-gray-900">
                    Select District
                  </label>

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

                {/* Station */}
                <div>
                  <label className="mb-2 block font-medium text-gray-900">
                    Select Station
                  </label>

                  <select
                    value={station}
                    onChange={(e) => setStation(e.target.value)}
                    disabled={!district}
                    className="w-full rounded-md border border-gray-300 px-3 py-3 text-gray-900 bg-white disabled:cursor-not-allowed disabled:bg-gray-100"
                  >
                    <option value="">
                      {district ? "Select Station" : "Select District First"}
                    </option>

                    {district &&
                      districts[district].map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!district || !station}
                  className="rounded-md bg-blue-600 px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-2 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${current * 100}%)`,
                }}
              >
                {slides.map((slide, slideIndex) => (
                  <div key={slideIndex} className="w-full shrink-0 px-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                      {slide.map((row, i) => (
                        <div
                          key={i}
className="relative overflow-hidden rounded-3xl bg-slate-600/80 p-6 shadow-lg border border-slate-700 hover:border-slate-600 hover:shadow-xl transition-all duration-300"                        >
                          <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-blue-100" />
                          <div className="absolute top-5 right-5 text-4xl">
                            {row.icon}
                          </div>
                          <h3 className="text-xl font-bold text-slate-900">
                            {row.district}
                          </h3>
                          <p className="mt-1 text-slate-500">{row.condition}</p>
                          <div className="mt-8 flex items-end gap-3">
                            <span className="text-5xl font-bold text-slate-900">
                              {row.high}°
                            </span>
                            <span className="mb-1 text-xl text-slate-500">
                              / {row.low}°C
                            </span>
                          </div>
                          <div className="my-6 h-px bg-slate-200" />
                          <div className="flex justify-between text-slate-500">
                            <span>💧 76%</span>
                            <span>🌬️ 10 km/h</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-8">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    current === i
                      ? "w-10 bg-blue-600"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="text-2xl font-bold text-gray-500 mb-3">
              State Forecast Overview
            </div>
            <div className="relative">
              <Image
                src="/video/motion-cloud.gif"
                width={500}
                height={400}
                alt="motion-cloud"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute text-white top-1/2 left-1/2 transform-[-50%] translate-[-50%] text-xl cursor-pointer whitespace-nowrap font-bold">
                CLick Here For Update
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-500 my-3">
              Latest Update
            </div>
            <div>
              <video
                autoPlay
                loop
                muted
                playsInline
                controls
                className="w-full"
              >
                <source
                  className="w-full"
                  src="/video/Weather-forecast-video.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;

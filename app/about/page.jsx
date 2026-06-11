"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import aboutbanner from "../assets/images/about-us_bannersz.jpg";
import slideimg_1 from "../assets/images/about-us-01.jpeg";
import slideimg_2 from "../assets/images/about-us-02.jpeg";
import slideimg_3 from "../assets/images/about-us-03.jpeg";
import slideimg_4 from "../assets/images/server-image.jpeg";

const Page = () => {
  const slides = [slideimg_1, slideimg_2, slideimg_3, slideimg_4];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white">
      <Image
        src={aboutbanner}
        className="h-[80vh] w-full object-cover"
        alt="about-banner"
      />
      <div className=" py-16 px-2 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="md:col-span-8">
            <div className="text-lg md:text-3xl font-bold text-[#051937]">
              About the NSDMA Weather Portal
            </div>
            <div className="text-gray-700 my-3">
              Developed by the{" "}
              <span className="font-extrabold">
                Nagaland State Disaster Management Authority (NSDMA)
              </span>
              , the official weather portal-nsdmaweather.com serves as a
              centralized hub for real-time weather updates, early warning
              alerts, and climate-related insights, supporting informed
              decision-making for disaster preparedness and risk reduction
              across the state.
            </div>
            <div className="text-gray-700">
              The portal operates under the umbrella of the{" "}
              <span className="font-extrabold">
                Nagaland Centre for Disaster Management and Atmospheric Research
                (NaCDAR)
              </span>{" "}
              — a dedicated research and monitoring initiative of NSDMA focused
              on enhancing disaster resilience and climate adaptation through
              data-driven strategies. It provides location-specific
              meteorological information, early warning alerts, and climate
              trend analytics to support operational decision-making across
              sectors such as disaster management, agriculture, urban planning,
              and infrastructure development.
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${current * 100}%)`,
                }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className="w-full shrink-0">
                    <Image
                      src={slide}
                      alt={`Slide ${index + 1}`}
                      className="h-56 w-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Previous Button */}
              <button
                onClick={() =>
                  setCurrent(current === 0 ? slides.length - 1 : current - 1)
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white h-10 w-10 rounded-full flex items-center justify-center"
              >
                ❮
              </button>

              {/* Next Button */}
              <button
                onClick={() =>
                  setCurrent(current === slides.length - 1 ? 0 : current + 1)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white h-10 w-10 rounded-full flex items-center justify-center"
              >
                ❯
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      current === index ? "w-8 bg-white" : "w-2 bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="text-gray-700 my-3">
          Designed as a comprehensive interface for weather monitoring,
          forecasting, and hazard risk analysis, the portal integrates data from
          a network of{" "}
          <span className="font-extrabold">
            automatic weather stations (AWS), satellite imagery, and GIS-based
            systems
          </span>
          .
        </div>
        <div className="text-gray-700">
          By leveraging advanced technologies such as automatic weather
          stations, satellite imagery, and GIS-based mapping, the portal aims to
          deliver accurate, timely, and location-specific information to
          government agencies, first responders, farmers, planners, and the
          general public.
        </div>
        <div className="text-gray-700 my-3">
          <span className="font-extrabold">The NSDMA Weather Portal</span> is
          part of the state's broader vision to strengthen early warning
          systems, mitigate the impacts of extreme weather events, and build a
          safer, more climate-resilient Nagaland.
        </div>
        <div className="text-lg md:text-3xl font-bold text-[#051937]">Access NSDMA Weather Portal Demo Video</div>
      </div>
    </section>
  );
};

export default Page;

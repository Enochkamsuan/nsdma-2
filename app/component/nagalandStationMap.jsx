"use client";

import React, { useState } from "react";
import { stationMarkers, NAGALAND_STATION_VIEWBOX } from "../data/data";

const NagalandStationMap = ({ weatherByStationId, className }) => {
  const [hoverId, setHoverId] = useState(null);
  const [tooltipPos, setTooltipPos] = useState(null);

  const hoverStation = hoverId
    ? stationMarkers.find((s) => s.id === hoverId)
    : null;
  const hoverWeather = hoverId ? weatherByStationId?.[hoverId] : null;

  const wrapperClassName = className ? `relative ${className}` : "relative";

  return (
    <div className={wrapperClassName}>
      <img src="/map/map.svg" className="w-full h-full" />
      <svg
        viewBox={NAGALAND_STATION_VIEWBOX}
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {stationMarkers.map((s) => {
          const isHovered = hoverId === s.id;
          return (
            <circle
              key={s.id}
              cx={s.x}
              cy={s.y}
              r={isHovered ? 7 : 5}
              fill={isHovered ? "#2563eb" : "#1d4ed8"}
              stroke="#ffffff"
              strokeWidth={1.5}
              style={{
                cursor: "pointer",
                transition: "r 120ms ease, fill 120ms ease",
              }}
              onMouseEnter={() => setHoverId(s.id)}
              onMouseMove={(e) => {
                const svg = e.currentTarget.ownerSVGElement;
                if (!svg) return;
                const rect = svg.getBoundingClientRect();
                setTooltipPos({
                  x: ((e.clientX - rect.left) / rect.width) * 100,
                  y: ((e.clientY - rect.top) / rect.height) * 100,
                });
              }}
              onMouseLeave={() => {
                setHoverId(null);
                setTooltipPos(null);
              }}
            >
              <title>{`${s.district} \u2014 ${s.station}`}</title>
            </circle>
          );
        })}
      </svg>
      {hoverStation && tooltipPos && (
        <div
          className="pointer-events-none absolute z-10 whitespace-pre-line rounded-lg bg-white px-3 py-2 text-sm text-gray-800 shadow-lg ring-1 ring-gray-200"
          style={{
            left: `${tooltipPos.x}%`,
            top: `${tooltipPos.y}%`,
            transform: "translate(-50%, -130%)",
          }}
        >
          <div>
            <span className="font-semibold">District - </span>
            {hoverStation.district}
          </div>
          <div>
            <span className="font-semibold">Station - </span>
            {hoverStation.station}
          </div>
          {hoverWeather ? (
            <>
              <div>
                <span className="font-semibold">Max Temp - </span>
                {hoverWeather.max_temp ?? "N/A"}°C
              </div>
              <div>
                <span className="font-semibold">Min Temp - </span>
                {hoverWeather.min_temp ?? "N/A"}°C
              </div>
              <div>
                <span className="font-semibold">Condition - </span>
                {hoverWeather.weather_description ?? "N/A"}
              </div>
            </>
          ) : (
            <div className="italic text-gray-400">Data not available</div>
          )}
        </div>
      )}
    </div>
  );
};

export default NagalandStationMap;

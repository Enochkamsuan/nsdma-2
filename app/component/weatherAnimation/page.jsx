"use client";

import { useMemo,useEffect,useState } from "react";

function classifyCondition(condition = "") {
  const c = condition.toLowerCase();
  if (
    c.includes("rain") ||
    c.includes("shower") ||
    c.includes("drizzle") ||
    c.includes("storm")
  ) {
    return "rainy";
  }
  if (
    c.includes("cloud") ||
    c.includes("overcast") ||
    c.includes("fog") ||
    c.includes("mist") ||
    c.includes("haze")
  ) {
    return "cloudy";
  }
  if (c.includes("sun") || c.includes("clear")) {
    return "sunny";
  }
  return "sunny";
}

export default function WeatherAnimationBackground({ condition }) {
  const type = useMemo(() => classifyCondition(condition), [condition]);

  return (
    <div className="absolute inset-0 z-1 overflow-hidden pointer-events-none">
      {type === "sunny" && <SunnyAnimation />}
      {type === "cloudy" && <CloudyAnimation />}
      {type === "rainy" && <RainyAnimation />}
    </div>
  );
}

function SunnyAnimation() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 weather-sun-wash" />
      <div className="absolute top-[-20%] right-[8%] sm:right-[12%]">
        <div className="relative w-24 h-24 sm:w-36 sm:h-36">
          <div className="absolute inset-0 rounded-full weather-sun-glow" />
          <div className="absolute inset-0 weather-sun-rays">
            {Array.from({ length: 12 }).map((_, i) => (
              <span
                key={i}
                className="absolute left-1/2 top-1/2 origin-bottom weather-ray"
                style={{
                  transform: `translate(-50%, -100%) rotate(${i * 30}deg)`,
                }}
              />
            ))}
          </div>
          <div className="absolute inset-[22%] rounded-full weather-sun-core" />
        </div>
      </div>
      <div className="absolute inset-0 weather-sun-sweep" />
      <style jsx>{`
        .weather-sun-wash {
          background: radial-gradient(
            circle at 78% 12%,
            rgba(255, 200, 110, 0.35) 0%,
            rgba(255, 170, 70, 0.12) 35%,
            rgba(255, 170, 70, 0) 65%
          );
          animation: sunWashPulse 6s ease-in-out infinite;
        }
        .weather-sun-glow {
          background: radial-gradient(
            circle,
            rgba(255, 214, 130, 0.85) 0%,
            rgba(255, 174, 71, 0.45) 45%,
            rgba(255, 174, 71, 0) 75%
          );
          filter: blur(2px);
          animation: sunGlowPulse 3.2s ease-in-out infinite;
        }
        .weather-sun-core {
          background: radial-gradient(
            circle at 35% 35%,
            #fff6d9,
            #fdbc4b 60%,
            #fc9e47fa 100%
          );
          box-shadow: 0 0 30px 6px rgba(253, 188, 75, 0.6);
        }
        .weather-sun-rays {
          animation: sunRayRotate 24s linear infinite;
        }
        .weather-ray {
          width: 3px;
          height: 46%;
          background: linear-gradient(
            to top,
            rgba(255, 214, 130, 0) 0%,
            rgba(255, 214, 130, 0.8) 100%
          );
          border-radius: 2px;
        }
        .weather-sun-sweep {
          background: linear-gradient(
            115deg,
            transparent 0%,
            transparent 40%,
            rgba(255, 230, 180, 0.18) 50%,
            transparent 60%,
            transparent 100%
          );
          background-size: 250% 250%;
          animation: sunSweep 9s ease-in-out infinite;
        }

        @keyframes sunWashPulse {
          0%,
          100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }
        @keyframes sunGlowPulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.18);
            opacity: 1;
          }
        }
        @keyframes sunRayRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes sunSweep {
          0% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          100% {
            background-position: 0% 0%;
          }
        }
      `}</style>
    </div>
  );
}

function CloudyAnimation() {
  const clouds = [
    { top: "10%", scale: 1.1, duration: 38, opacity: 0.55, delay: 0 },
    { top: "22%", scale: 0.7, duration: 28, opacity: 0.4, delay: -10 },
    { top: "5%", scale: 0.85, duration: 46, opacity: 0.5, delay: -22 },
    { top: "32%", scale: 1.3, duration: 55, opacity: 0.35, delay: -6 },
    { top: "16%", scale: 0.6, duration: 24, opacity: 0.45, delay: -16 },
  ];

  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 weather-cloud-wash" />
      {clouds.map((c, i) => (
        <div
          key={i}
          className="absolute weather-cloud-track"
          style={{
            top: c.top,
            animationDuration: `${c.duration}s`,
            animationDelay: `${c.delay}s`,
            opacity: c.opacity,
          }}
        >
          <CloudShape scale={c.scale} />
        </div>
      ))}

      <style jsx>{`
        .weather-cloud-wash {
          background: linear-gradient(
            to bottom,
            rgba(140, 150, 165, 0.25) 0%,
            rgba(140, 150, 165, 0.08) 40%,
            rgba(140, 150, 165, 0) 70%
          );
        }
        .weather-cloud-track {
          left: -25%;
          animation-name: cloudDrift;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        @keyframes cloudDrift {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(150vw);
          }
        }
      `}</style>
    </div>
  );
}

function CloudShape({ scale = 1 }) {
  return (
    <svg
      width={160 * scale}
      height={80 * scale}
      viewBox="0 0 160 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="45" cy="50" rx="40" ry="24" fill="white" />
      <ellipse cx="85" cy="38" rx="32" ry="28" fill="white" />
      <ellipse cx="120" cy="50" rx="32" ry="20" fill="white" />
      <ellipse cx="70" cy="58" rx="55" ry="18" fill="white" />
    </svg>
  );
}

function RainyAnimation() {
  const [drops, setDrops] = useState([]);

  useEffect(() => {
    const generatedDrops = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 0.6 + Math.random() * 0.9,
      delay: Math.random() * 2,
      length: 14 + Math.random() * 22,
      opacity: 0.25 + Math.random() * 0.45,
    }));

    setDrops(generatedDrops);
  }, []);

  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 weather-rain-wash" />
       <div className="absolute inset-0">
        {drops.map((d) => (
          <span
            key={d.id}
            className="absolute top-[-10%] weather-raindrop"
            style={{
              left: `${d.left}%`,
              height: `${d.length}px`,
              opacity: d.opacity,
              animationDuration: `${d.duration}s`,
              animationDelay: `${d.delay}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        .weather-rain-wash {
          background: linear-gradient(
            to bottom,
            rgba(60, 70, 90, 0.25) 0%,
            rgba(60, 70, 90, 0.05) 50%,
            rgba(60, 70, 90, 0) 80%
          );
        }
        .weather-raindrop {
          width: 2px;
          background: linear-gradient(
            to bottom,
            rgba(180, 210, 255, 0) 0%,
            rgba(180, 210, 255, 0.85) 100%
          );
          border-radius: 2px;
          animation-name: rainFall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        @keyframes rainFall {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(115vh);
          }
        }
      `}</style>
    </div>
  );
}

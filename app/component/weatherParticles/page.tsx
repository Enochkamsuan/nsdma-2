import { Cloud } from "lucide-react";

export default function WeatherParticles() {
  const particles = [
    { left: "8%", top: "22%", size: 6, delay: "0s", dur: "9s" },
    { left: "22%", top: "64%", size: 4, delay: "1.4s", dur: "11s" },
    { left: "38%", top: "12%", size: 5, delay: "0.6s", dur: "8s" },
    { left: "54%", top: "48%", size: 3, delay: "2.1s", dur: "13s" },
    { left: "68%", top: "28%", size: 7, delay: "0.2s", dur: "10s" },
    { left: "82%", top: "58%", size: 4, delay: "1.8s", dur: "12s" },
    { left: "91%", top: "18%", size: 5, delay: "0.9s", dur: "9s" },
    { left: "15%", top: "84%", size: 3, delay: "2.6s", dur: "14s" },
  ];

  const clouds = [
    { top: "10%", size: 120, opacity: 0.08, dur: "55s", delay: "0s" },
    { top: "34%", size: 180, opacity: 0.06, dur: "75s", delay: "-20s" },
    { top: "62%", size: 90, opacity: 0.07, dur: "48s", delay: "-8s" },
  ];

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* gradient glow blobs */}
      <div className="absolute -left-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-primary/25 blur-[120px] animate-glow-pulse" />
      <div className="absolute right-[-6rem] top-1/3 h-[24rem] w-[24rem] rounded-full bg-storm/20 blur-[130px] animate-glow-pulse" style={{ animationDelay: "-2.5s" }} />
      <div className="absolute bottom-[-8rem] left-1/3 h-[26rem] w-[26rem] rounded-full bg-aqua/15 blur-[140px] animate-glow-pulse" style={{ animationDelay: "-1.2s" }} />

      {/* drifting clouds */}
      {clouds.map((c, i) => (
        <Cloud
          key={`cloud-${i}`}
          className="absolute text-aqua animate-drift"
          style={{ top: c.top, width: c.size, height: c.size, opacity: c.opacity, animationDuration: c.dur, animationDelay: c.delay }}
        />
      ))}

      {/* floating particles */}
      {particles.map((p, i) => (
        <span
          key={`p-${i}`}
          className="absolute rounded-full bg-aqua/40 animate-float"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDuration: p.dur,
            animationDelay: p.delay,
            boxShadow: "0 0 12px 2px oklch(0.78 0.13 195 / 0.45)",
          }}
        />
      ))}
    </div>
  );
}

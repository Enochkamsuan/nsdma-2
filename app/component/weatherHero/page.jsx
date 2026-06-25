import { Droplets, Wind, CloudRain, MapPin, ArrowUp, ArrowDown } from "lucide-react";
import { heroSummary } from "../weatherData/page";
import { WeatherIcon } from "../weatherIcon/page";

function Metric({ icon: Icon, label, value, unit }) {
  return (
    <div className="glass rounded-2xl p-4 card-hover">
      <div className="flex items-center gap-2 text-muted-foreground">
        <Icon className="h-4 w-4 text-aqua" aria-hidden="true" />
        <span className="text-xs font-medium uppercase tracking-wider">{label}</span>
      </div>
      <p className="mt-2 font-display text-2xl font-semibold text-foreground">
        {value}
        <span className="ml-1 text-sm font-medium text-muted-foreground">{unit}</span>
      </p>
    </div>
  );
}

export default function WeatherHero() {
  const s = heroSummary;
  return (
    <section className="relative animate-rise" aria-labelledby="hero-title">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        {/* Intro */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-glass-border bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-aqua backdrop-blur-md">
            <span className="h-2 w-2 animate-pulse rounded-full bg-success" />
            Live · 16 districts monitored
          </span>
          <h1 id="hero-title" className="mt-5 font-display text-4xl font-bold leading-tight text-gradient sm:text-5xl lg:text-6xl">
            Nagaland Weather Intelligence Dashboard
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Real-time meteorological monitoring across every district of Nagaland — live station
            telemetry, predictive analytics and severe-weather alerts in a single command center.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#map"
              className="rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5 hover:shadow-primary/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Explore live map
            </a>
            <a
              href="#alerts"
              className="rounded-2xl border border-glass-border bg-white/5 px-5 py-3 text-sm font-semibold text-foreground backdrop-blur-md transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              View active alerts
            </a>
          </div>
        </div>

        {/* Current weather summary card */}
        <div className="glass-strong relative overflow-hidden rounded-3xl p-7 card-hover">
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-sun/20 blur-3xl animate-float-slow" />
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-aqua" aria-hidden="true" />
                {s.location}
              </div>
              <div className="mt-3 flex items-end gap-2">
                <span className="font-display text-7xl font-bold leading-none text-foreground">{s.temperature}°</span>
                <span className="pb-2 text-sm text-muted-foreground">C</span>
              </div>
              <p className="mt-1 text-sm font-medium text-aqua">{s.condition} · feels like {s.feelsLike}°</p>
              <div className="mt-2 flex items-center gap-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1"><ArrowUp className="h-3.5 w-3.5 text-sun" />{s.high}°</span>
                <span className="inline-flex items-center gap-1"><ArrowDown className="h-3.5 w-3.5 text-rain" />{s.low}°</span>
              </div>
            </div>
            <div className="rounded-2xl bg-white/5 p-3 backdrop-blur-md">
              <WeatherIcon condition={s.condition} className="h-12 w-12 animate-float" />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            <Metric icon={Droplets} label="Humidity" value={s.humidity} unit="%" />
            <Metric icon={Wind} label="Wind" value={s.wind} unit="km/h" />
            <Metric icon={CloudRain} label="Rainfall" value={s.rainfall} unit="mm" />
          </div>
        </div>
      </div>
    </section>
  );
}

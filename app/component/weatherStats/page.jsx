import {
  Radio,
  Signal,
  Thermometer,
  Droplets,
  CloudRain,
  Wind,
  TrendingUp,
  TrendingDown,
  Minus,
} from "lucide-react";
import { stats } from "../weatherData/page";

const icons = {
  radio: Radio,
  signal: Signal,
  thermometer: Thermometer,
  droplets: Droplets,
  "cloud-rain": CloudRain,
  wind: Wind,
};

function Trend({ value, label }) {
  const up = value > 0;
  const flat = value === 0;
  const Icon = flat ? Minus : up ? TrendingUp : TrendingDown;
  const tone = flat ? "text-muted-foreground" : up ? "text-success" : "text-rain";
  return (
    <div className="flex items-center gap-1.5 text-xs">
      <span className={`inline-flex items-center gap-0.5 font-semibold ${tone}`}>
        <Icon className="h-3.5 w-3.5" aria-hidden="true" />
        {flat ? "—" : `${up ? "+" : ""}${value}%`}
      </span>
      <span className="text-muted-foreground">{label}</span>
    </div>
  );
}

export default function WeatherStats() {
  return (
    <section aria-label="Weather statistics" className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
      {stats.map((stat, i) => {
        const Icon = icons[stat.icon] ?? Radio;
        return (
          <article
            key={stat.id}
            className="glass card-hover animate-rise rounded-2xl p-5"
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <div className="flex items-center justify-between">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
            </div>
            <p className="mt-4 font-display text-3xl font-bold text-foreground">
              {stat.value}
              {stat.unit && <span className="ml-0.5 text-base font-semibold text-muted-foreground">{stat.unit}</span>}
            </p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">{stat.label}</p>
            <div className="mt-3">
              <Trend value={stat.trend} label={stat.trendLabel} />
            </div>
          </article>
        );
      })}
    </section>
  );
}

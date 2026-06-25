import { Droplets, Wind, CloudRain, Thermometer } from "lucide-react";
import { districts } from "../weatherData/page";
import { WeatherIcon, conditionTone } from "../weatherIcon/page";

function Stat({ icon: Icon, value, tone }) {
  return (
    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
      <Icon className={`h-3.5 w-3.5 ${tone}`} aria-hidden="true" />
      <span className="font-semibold text-foreground">{value}</span>
    </div>
  );
}

export default function DistrictWeatherGrid() {
  return (
    <section aria-labelledby="grid-title">
      <div className="mb-5 flex items-end justify-between">
        <div>
          <h2 id="grid-title" className="font-display text-2xl font-bold text-foreground">District Weather</h2>
          <p className="mt-1 text-sm text-muted-foreground">Live conditions across all {districts.length} districts.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {districts.map((d, i) => (
          <article
            key={d.name}
            className="glass card-hover animate-rise rounded-2xl p-5"
            style={{ animationDelay: `${i * 40}ms` }}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">{d.name}</h3>
                <p className={`text-xs font-medium ${conditionTone(d.condition)}`}>{d.condition}</p>
              </div>
              <div className="rounded-xl bg-white/5 p-2">
                <WeatherIcon condition={d.condition} className="h-7 w-7" />
              </div>
            </div>

            <p className="mt-4 font-display text-4xl font-bold text-foreground">
              {d.temp}<span className="text-xl text-muted-foreground">°C</span>
            </p>

            <div className="mt-4 grid grid-cols-2 gap-2 border-t border-glass-border pt-4">
              <Stat icon={Droplets} value={`${d.humidity}%`} tone="text-aqua" />
              <Stat icon={CloudRain} value={`${d.rainfall} mm`} tone="text-rain" />
              <Stat icon={Wind} value={`${d.wind} km/h`} tone="text-primary" />
              <Stat icon={Thermometer} value={`${d.temp}°C`} tone="text-sun" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

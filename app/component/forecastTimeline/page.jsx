import { Umbrella } from "lucide-react";
import { hourlyForecast } from "../weatherData/page";
import { WeatherIcon } from "../weatherIcon/page";

export default function ForecastTimeline() {
  return (
    <section aria-labelledby="timeline-title" className="glass-strong animate-rise rounded-3xl p-6">
      <div className="mb-5">
        <h2 id="timeline-title" className="font-display text-xl font-bold text-foreground">Today's Forecast Timeline</h2>
        <p className="mt-1 text-sm text-muted-foreground">Hourly temperature and rain probability.</p>
      </div>

      <ol className="flex gap-3 overflow-x-auto pb-2 [scrollbar-thin]">
        {hourlyForecast.map((h, i) => (
          <li
            key={h.time}
            className="glass card-hover animate-rise flex min-w-30 flex-1 flex-col items-center gap-3 rounded-2xl p-4 text-center"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <span className="text-sm font-semibold text-muted-foreground">{h.time}</span>
            <WeatherIcon condition={h.condition} className="h-9 w-9 animate-float" />
            <span className="font-display text-2xl font-bold text-foreground">{h.temp}°</span>
            <span className="inline-flex items-center gap-1 rounded-full bg-rain/15 px-2 py-1 text-xs font-medium text-rain">
              <Umbrella className="h-3 w-3" aria-hidden="true" />{h.rainProb}%
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}

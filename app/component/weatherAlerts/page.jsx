import { AlertTriangle, CloudLightning, Waves, Wind, Clock, MapPin } from "lucide-react";
import { alerts, severityStyles } from "../weatherData/page";

const alertIcons = {
  "Heavy Rain Warning": Waves,
  "Thunderstorm Alert": CloudLightning,
  "Flash Flood Watch": Waves,
  "Strong Wind Advisory": Wind,
};

export default function WeatherAlerts() {
  return (
    <section id="alerts" aria-labelledby="alerts-title">
      <div className="mb-5 flex items-center gap-2">
        <AlertTriangle className="h-5 w-5 text-warning" aria-hidden="true" />
        <h2 id="alerts-title" className="font-display text-2xl font-bold text-foreground">Active Weather Alerts</h2>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {alerts.map((a, i) => {
          const Icon = alertIcons[a.title] ?? AlertTriangle;
          return (
            <article
              key={a.id}
              className="glass card-hover animate-rise rounded-2xl p-5"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex min-w-0 items-start gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/5">
                    <Icon className="h-5 w-5 text-warning" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="truncate font-display text-base font-bold text-foreground">{a.title}</h3>
                    <p className="mt-0.5 inline-flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" aria-hidden="true" />{a.region}
                    </p>
                  </div>
                </div>
                <span className={`shrink-0 rounded-full border px-2.5 py-1 text-xs font-semibold ${severityStyles[a.severity]}`}>
                  {a.severity}
                </span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.description}</p>

              <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />{a.time}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

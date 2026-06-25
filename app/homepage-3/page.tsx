import { Activity } from "lucide-react";
import WeatherParticles from "../component/weatherParticles/page";
import WeatherHero from "../component/weatherHero/page";
import WeatherStats from "../component/weatherStats/page";
import NagalandMap from "../component/NagalandMap/page";
import WeatherTrendChart from "../component/WeatherTrendCharts/page";
import DistrictWeatherGrid from "../component/districtWeatherGrid/page";
import WeatherAlerts from "../component/weatherAlerts/page";
import ForecastTimeline from "../component/forecastTimeline/page";

export const metadata = {
  title: "Nagaland Weather Intelligence Dashboard",
  description:
    "Live weather command center for all 16 districts of Nagaland — interactive map, KPI analytics, 7-day trends, alerts and hourly forecast.",
};

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <WeatherParticles />

      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        {/* Top bar */}
        <header className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/20 text-primary">
              <Activity className="h-6 w-6" aria-hidden="true" />
            </span>

            <div>
              <p className="font-display text-sm font-bold text-foreground">
                NWI Command Center
              </p>
              <p className="text-xs text-muted-foreground">
                Meteorological Department · Nagaland
              </p>
            </div>
          </div>

          <span className="hidden items-center gap-2 rounded-full border border-glass-border bg-white/5 px-4 py-2 text-xs font-medium text-muted-foreground backdrop-blur-md sm:inline-flex">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            Systems operational
          </span>
        </header>

        <div className="space-y-14">
          <WeatherHero />

          <WeatherStats />

          {/* Main dashboard */}
          <div className="grid gap-6 lg:grid-cols-2">
            <NagalandMap />

            <div className="space-y-6">
              <WeatherTrendChart />
              <ForecastTimeline />
            </div>
          </div>

          <DistrictWeatherGrid />

          <WeatherAlerts />
        </div>

        <footer className="mt-16 border-t border-glass-border pt-6 text-center text-xs text-muted-foreground">
          Nagaland Weather Intelligence Dashboard · Illustrative mock data for
          demonstration.
        </footer>
      </div>
    </main>
  );
}
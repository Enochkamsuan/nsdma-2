import { Sun, Cloud, CloudRain, CloudLightning } from "lucide-react";

const map = {
  Sunny: Sun,
  Cloudy: Cloud,
  Rainy: CloudRain,
  Thunderstorm: CloudLightning,
  "Partly Cloudy": Cloud,
};

const tone = {
  Sunny: "text-sun",
  Cloudy: "text-muted-foreground",
  Rainy: "text-rain",
  Thunderstorm: "text-storm",
  "Partly Cloudy": "text-aqua",
};

export function WeatherIcon({ condition, className = "h-6 w-6" }) {
  const Icon = map[condition] ?? Cloud;
  return <Icon className={`${className} ${tone[condition] ?? "text-aqua"}`} aria-hidden="true" />;
}

export function conditionTone(condition) {
  return tone[condition] ?? "text-aqua";
}

// Reusable mock weather data for the Nagaland Weather Intelligence Dashboard.
// All values are illustrative mock data for demo purposes.

export const conditions = {
  Sunny: { label: "Sunny", color: "var(--color-sun)" },
  Cloudy: { label: "Cloudy", color: "var(--color-muted-foreground)" },
  Rainy: { label: "Rainy", color: "var(--color-rain)" },
  Thunderstorm: { label: "Thunderstorm", color: "var(--color-storm)" },
};

// x / y are coordinates inside the NagalandMap SVG (viewBox 0 0 600 780).
export const districts = [
  { name: "Kohima", temp: 19, humidity: 78, rainfall: 12, wind: 9, condition: "Cloudy", x: 196, y: 540 },
  { name: "Dimapur", temp: 27, humidity: 71, rainfall: 4, wind: 7, condition: "Sunny", x: 138, y: 452 },
  { name: "Chümoukedima", temp: 25, humidity: 73, rainfall: 6, wind: 8, condition: "Cloudy", x: 166, y: 486 },
  { name: "Niuland", temp: 28, humidity: 69, rainfall: 3, wind: 6, condition: "Sunny", x: 122, y: 506 },
  { name: "Peren", temp: 22, humidity: 80, rainfall: 18, wind: 10, condition: "Rainy", x: 150, y: 600 },
  { name: "Phek", temp: 18, humidity: 82, rainfall: 22, wind: 12, condition: "Rainy", x: 286, y: 588 },
  { name: "Zunheboto", temp: 20, humidity: 76, rainfall: 9, wind: 8, condition: "Cloudy", x: 296, y: 470 },
  { name: "Wokha", temp: 23, humidity: 70, rainfall: 7, wind: 7, condition: "Sunny", x: 214, y: 396 },
  { name: "Tseminyu", temp: 21, humidity: 74, rainfall: 8, wind: 9, condition: "Cloudy", x: 232, y: 458 },
  { name: "Mokokchung", temp: 24, humidity: 68, rainfall: 5, wind: 6, condition: "Sunny", x: 268, y: 332 },
  { name: "Longleng", temp: 22, humidity: 75, rainfall: 11, wind: 8, condition: "Cloudy", x: 344, y: 300 },
  { name: "Tuensang", temp: 17, humidity: 84, rainfall: 26, wind: 14, condition: "Thunderstorm", x: 410, y: 412 },
  { name: "Shamator", temp: 16, humidity: 86, rainfall: 31, wind: 15, condition: "Thunderstorm", x: 462, y: 452 },
  { name: "Kiphire", temp: 18, humidity: 83, rainfall: 24, wind: 13, condition: "Rainy", x: 392, y: 520 },
  { name: "Noklak", temp: 15, humidity: 88, rainfall: 34, wind: 16, condition: "Thunderstorm", x: 502, y: 392 },
  { name: "Mon", temp: 21, humidity: 79, rainfall: 17, wind: 11, condition: "Rainy", x: 446, y: 224 },
];

export const heroSummary = {
  location: "Kohima, Nagaland",
  temperature: 19,
  condition: "Partly Cloudy",
  feelsLike: 18,
  humidity: 78,
  wind: 9,
  rainfall: 12,
  high: 24,
  low: 15,
};

const avg = (key) =>
  Math.round(districts.reduce((s, d) => s + d[key], 0) / districts.length);

export const stats = [
  { id: "stations", label: "Total Weather Stations", value: districts.length, unit: "", icon: "radio", trend: 0, trendLabel: "network stable" },
  { id: "active", label: "Active Stations", value: districts.length - 1, unit: "", icon: "signal", trend: 2.4, trendLabel: "uptime 99.8%" },
  { id: "temp", label: "Average Temperature", value: avg("temp"), unit: "°C", icon: "thermometer", trend: 1.6, trendLabel: "vs yesterday" },
  { id: "humidity", label: "Average Humidity", value: avg("humidity"), unit: "%", icon: "droplets", trend: -3.1, trendLabel: "vs yesterday" },
  { id: "rain", label: "Rainfall Today", value: districts.reduce((s, d) => s + d.rainfall, 0), unit: "mm", icon: "cloud-rain", trend: 8.2, trendLabel: "rising trend" },
  { id: "wind", label: "Average Wind Speed", value: avg("wind"), unit: "km/h", icon: "wind", trend: -1.2, trendLabel: "calmer" },
];

export const weekTrend = [
  { day: "Mon", max: 24, min: 15, rainfall: 6 },
  { day: "Tue", max: 26, min: 16, rainfall: 3 },
  { day: "Wed", max: 23, min: 15, rainfall: 14 },
  { day: "Thu", max: 21, min: 14, rainfall: 22 },
  { day: "Fri", max: 22, min: 14, rainfall: 18 },
  { day: "Sat", max: 25, min: 16, rainfall: 8 },
  { day: "Sun", max: 27, min: 17, rainfall: 4 },
];

export const alerts = [
  {
    id: 1,
    title: "Heavy Rain Warning",
    severity: "High",
    region: "Noklak · Shamator · Tuensang",
    time: "Today, 14:20 IST",
    description: "Intense rainfall of 30–35mm expected over the next 6 hours. Risk of localized waterlogging on hill roads.",
  },
  {
    id: 2,
    title: "Thunderstorm Alert",
    severity: "Critical",
    region: "Tuensang · Noklak",
    time: "Today, 13:05 IST",
    description: "Severe thunderstorms with frequent lightning and gusty winds up to 60 km/h. Avoid open areas and ridgelines.",
  },
  {
    id: 3,
    title: "Flash Flood Watch",
    severity: "Medium",
    region: "Kiphire · Phek",
    time: "Today, 11:40 IST",
    description: "Rising stream levels in lower catchments. Communities near riverbanks should stay alert through the evening.",
  },
  {
    id: 4,
    title: "Strong Wind Advisory",
    severity: "Low",
    region: "Mon · Longleng",
    time: "Today, 09:15 IST",
    description: "Sustained winds of 15–20 km/h with occasional gusts. Secure loose rooftop materials and outdoor signage.",
  },
];

export const hourlyForecast = [
  { time: "06:00", temp: 15, rainProb: 20, condition: "Cloudy" },
  { time: "09:00", temp: 18, rainProb: 10, condition: "Sunny" },
  { time: "12:00", temp: 23, rainProb: 15, condition: "Sunny" },
  { time: "15:00", temp: 22, rainProb: 45, condition: "Rainy" },
  { time: "18:00", temp: 19, rainProb: 65, condition: "Thunderstorm" },
  { time: "21:00", temp: 16, rainProb: 35, condition: "Cloudy" },
];

export const severityStyles = {
  Low: "text-success border-success/40 bg-success/10",
  Medium: "text-sun border-sun/40 bg-sun/10",
  High: "text-[oklch(0.78_0.15_45)] border-[oklch(0.78_0.15_45)]/40 bg-[oklch(0.78_0.15_45)]/10",
  Critical: "text-danger border-danger/45 bg-danger/12",
};

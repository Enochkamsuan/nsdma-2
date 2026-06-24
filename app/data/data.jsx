import {
  WiDaySunny,
  WiCloudy,
  WiRain,
} from "react-icons/wi";

export const stationMarkers = [
  { id: "2206", districtId: "peren", district: "Peren", station: "Jalukie", x: 472.6, y: 583.2 },
  { id: "2500", districtId: "peren", district: "Peren", station: "Benreu Village. Near BSNL Tower", x: 502.6, y: 553.2 },
  { id: "2510", districtId: "peren", district: "Peren", station: "Lamhai Council Hall", x: 432.6, y: 553.2 },
  { id: "2469", districtId: "peren", district: "Peren", station: "Nsong", x: 412.6, y: 673.2 },
  { id: "2518", districtId: "peren", district: "Peren", station: "DC Residence", x: 422.6, y: 653.2 },
  { id: "2044", districtId: "peren", district: "Peren", station: "Tening", x: 422.6, y: 623.2 },

  { id: "2010", districtId: "dimapur", district: "Dimapur", station: "Bank Colony", x: 465.1, y: 468.1 },
  { id: "2514", districtId: "dimapur", district: "Dimapur", station: "Dimapur Sadar ( Circuit House)", x: 483.1, y: 468.1 },
  { id: "2488", districtId: "dimapur", district: "Dimapur", station: "Khusiabill", x: 475.1, y: 458.0 },

  { id: "2190", districtId: "niuland", district: "Niuland", station: "Kuhuboto", x: 513.1, y: 463.0 },
  { id: "2517", districtId: "niuland", district: "Niuland", station: "DC Office", x: 523.1, y: 443.0 },

  { id: "2519", districtId: "tseminyu", district: "Tseminyu", station: "DC Office", x: 605.1, y: 458.0 },

  { id: "2516", districtId: "chumoukedima", district: "Chumoukedima", station: "DC Office", x: 473.1, y: 503.0 },
  { id: "2494", districtId: "chumoukedima", district: "Chumoukedima", station: "Patkai Christian College", x: 513.1, y: 493.0 },
  { id: "2512", districtId: "chumoukedima", district: "Chumoukedima", station: "Zoological park.Nagaland", x: 473.1, y: 473.0 },
  { id: "2501", districtId: "chumoukedima", district: "Chumoukedima", station: "Razaphe Bawe (Eden Ram)", x: 458.1, y: 488.0 },
  { id: "2189", districtId: "chumoukedima", district: "Chumoukedima", station: "Dhansiripar", x: 433.1, y: 523.0 },
  { id: "2191", districtId: "chumoukedima", district: "Chumoukedima", station: "Medziphema", x: 505.1, y: 518.0 },
  { id: "2511", districtId: "chumoukedima", district: "Chumoukedima", station: "Pherima, Crucifix Pilgrim", x: 505.1, y: 533.0 },
  { id: "2493", districtId: "chumoukedima", district: "Chumoukedima", station: "Piphema Council Hall", x: 523.1, y: 543.0 },

  { id: "2193", districtId: "kohima", district: "Kohima", station: "Jakhama", x: 583.3, y: 558.4 },
  { id: "2498", districtId: "kohima", district: "Kohima", station: "Sechu Zubza SDO Office", x: 543.3, y: 553.4 },
  { id: "2499", districtId: "kohima", district: "Kohima", station: "Khonoma Catholic School", x: 543.3, y: 573.4 },
  { id: "2496", districtId: "kohima", district: "Kohima", station: "Botsa EAC Office", x: 573.3, y: 473.4 },
  { id: "2465", districtId: "kohima", district: "Kohima", station: "Raj bhavan", x: 563.3, y: 503.4 },
  { id: "2489", districtId: "kohima", district: "Kohima", station: "Chiephobozou ADC Office", x: 533.3, y: 523.3 },
  { id: "2369", districtId: "kohima", district: "Kohima", station: "New Minister Hill", x: 603.3, y: 533.4 },
  { id: "2515", districtId: "kohima", district: "Kohima", station: "Nagaland Legislative Assembly", x: 598.3, y: 513.4 },

  { id: "2209", districtId: "phek", district: "Phek", station: "Pfutsero", x: 648.3, y: 573.4 },
  { id: "2490", districtId: "phek", district: "Phek", station: "ADC Office Chozuba", x: 668.3, y: 533.4 },
  { id: "2528", districtId: "phek", district: "Phek", station: "DC Residence", x: 673.3, y: 563.4 },

  { id: "2529", districtId: "meluri", district: "Meluri", station: "Geological Site", x: 743.3, y: 553.4 },
  { id: "2036", districtId: "meluri", district: "Meluri", station: "Phokhungri", x: 798.3, y: 573.4 },

  { id: "2016", districtId: "kiphire", district: "Kiphire", station: "Kiphire", x: 763.3, y: 463.4 },
  { id: "2503", districtId: "kiphire", district: "Kiphire", station: "Khongsa ECA office Nagaland", x: 793.3, y: 473.4 },
  { id: "2505", districtId: "kiphire", district: "Kiphire", station: "Kiusam EAC office", x: 783.3, y: 443.4 },
  { id: "2208", districtId: "kiphire", district: "Kiphire", station: "Pungro", x: 823.3, y: 493.4 },

  { id: "2197", districtId: "zunheboto", district: "Zunheboto", station: "Aghunato", x: 713.5, y: 433.4 },
  { id: "2491", districtId: "zunheboto", district: "Zunheboto", station: "Nagaland University", x: 703.5, y: 373.4 },
  { id: "2513", districtId: "zunheboto", district: "Zunheboto", station: "Satakha", x: 693.5, y: 393.4 },
  { id: "2527", districtId: "zunheboto", district: "Zunheboto", station: "DC Residence", x: 683.5, y: 373.4 },

  { id: "2196", districtId: "wokha", district: "Wokha", station: "Aitepyong", x: 633.1, y: 333.0 },
  { id: "2502", districtId: "wokha", district: "Wokha", station: "Sanis ADC Residence", x: 603.1, y: 323.0 },
  { id: "2040", districtId: "wokha", district: "Wokha", station: "Bhandari", x: 583.1, y: 373.0 },
  { id: "2480", districtId: "wokha", district: "Wokha", station: "Ralan Police quater", x: 633.1, y: 393.0 },
  { id: "2526", districtId: "wokha", district: "Wokha", station: "DC Residence", x: 603.1, y: 383.0 },

  { id: "2204", districtId: "mokokchung", district: "Mokokchung", station: "Mangkolemba", x: 673.5, y: 272.6 },
  { id: "2507", districtId: "mokokchung", district: "Mokokchung", station: "Sdo office Changtongya", x: 673.5, y: 242.6 },
  { id: "2508", districtId: "mokokchung", district: "Mokokchung", station: "Changki village", x: 673.5, y: 292.6 },
  { id: "2525", districtId: "mokokchung", district: "Mokokchung", station: "DC Residence", x: 703.5, y: 302.6 },
  { id: "2492", districtId: "mokokchung", district: "Mokokchung", station: "EAC office", x: 733.5, y: 292.6 },
  { id: "2039", districtId: "mokokchung", district: "Mokokchung", station: "Tuli", x: 743.5, y: 192.6 },

  { id: "2524", districtId: "longleng", district: "Longleng", station: "New GA Guest House", x: 802.6, y: 257.8 },
  { id: "2202", districtId: "longleng", district: "Longleng", station: "Tamlu", x: 792.6, y: 187.8 },

  { id: "2520", districtId: "mon", district: "Mon", station: "DC Residence", x: 833.0, y: 223.4 },
  { id: "2034", districtId: "mon", district: "Mon", station: "Aboi ADC Quater", x: 853.0, y: 243.4 },
  { id: "2509", districtId: "mon", district: "Mon", station: "ADC office Naginimora", x: 853.0, y: 153.4 },
  { id: "2203", districtId: "mon", district: "Mon", station: "Tobu", x: 863.0, y: 283.4 },

  { id: "2477", districtId: "tuensang", district: "Tuensang", station: "Chare EAC office", x: 762.8, y: 332.7 },
  { id: "2506", districtId: "tuensang", district: "Tuensang", station: "Noksen SDO Office", x: 792.8, y: 322.7 },
  { id: "2523", districtId: "tuensang", district: "Tuensang", station: "DC Residence", x: 782.8, y: 342.7 },

  { id: "2473", districtId: "shamator", district: "Shamator", station: "Chessor Sdo office", x: 782.8, y: 392.7 },
  { id: "2522", districtId: "shamator", district: "Shamator", station: "DC Office", x: 822.8, y: 382.7 },
];

export const NAGALAND_STATION_VIEWBOX = "350 50 650 700";

export const mockStationWeather = {
  "2206": { max_temp: 30.2, min_temp: 29.5, weather_description: "Localized thunderstorms and lightning with light rain at scattered locations" },
  "2500": { max_temp: 23.9, min_temp: 22.4, weather_description: "Light rain at a few places" },
  "2510": { max_temp: 30.8, min_temp: 23.6, weather_description: "Light rain at a few places" },
  "2469": { max_temp: 29.4, min_temp: 28.7, weather_description: "Light rain at a few places" },
  "2518": { max_temp: 23.5, min_temp: 19.2, weather_description: "Light rain at a few places" },
  "2044": { max_temp: 29.0, min_temp: 23.1, weather_description: "Partly cloudy" },
  "2010": { max_temp: 28.7, min_temp: 26.5, weather_description: "Light to moderate rain at most places" },
  "2514": { max_temp: 24.5, min_temp: 17.5, weather_description: "Clear sky" },
  "2488": { max_temp: 32.9, min_temp: 27.2, weather_description: "Localized thunderstorms and lightning with light rain at scattered locations" },
  "2190": { max_temp: 24.4, min_temp: 22.3, weather_description: "Clear sky" },
  "2517": { max_temp: 25.4, min_temp: 24.2, weather_description: "Light rain at a few places" },
  "2519": { max_temp: 25.7, min_temp: 22.6, weather_description: "Localized thunderstorms and lightning with light rain at scattered locations" },
  "2516": { max_temp: 32.9, min_temp: 26.9, weather_description: "Light to moderate rain at most places" },
  "2494": { max_temp: 22.0, min_temp: 14.6, weather_description: "Light rain at a few places" },
  "2512": { max_temp: 28.8, min_temp: 22.1, weather_description: "Light to moderate rain at most places" },
  "2501": { max_temp: 34.2, min_temp: 31.0, weather_description: "Light rain showers" },
  "2189": { max_temp: 31.3, min_temp: 30.5, weather_description: "Light rain showers" },
  "2191": { max_temp: 32.4, min_temp: 24.5, weather_description: "Clear sky" },
  "2511": { max_temp: 23.7, min_temp: 22.4, weather_description: "Localized thunderstorms and lightning with light rain at scattered locations" },
  "2493": { max_temp: 27.3, min_temp: 20.5, weather_description: "Light rain showers" },
  "2193": { max_temp: 25.9, min_temp: 23.8, weather_description: "Localized thunderstorms and lightning with light rain at scattered locations" },
  "2498": { max_temp: 31.2, min_temp: 25.6, weather_description: "Light rain at a few places" },
  "2499": { max_temp: 29.7, min_temp: 27.9, weather_description: "Partly cloudy" },
  "2496": { max_temp: 23.9, min_temp: 19.9, weather_description: "Localized thunderstorms and lightning with light rain at scattered locations" },
  "2465": { max_temp: 35.8, min_temp: 30.5, weather_description: "Light to moderate rain at most places" },
  "2489": { max_temp: 23.5, min_temp: 20.6, weather_description: "Clear sky" },
  "2369": { max_temp: 32.4, min_temp: 30.2, weather_description: "Light rain at a few places" },
  "2515": { max_temp: 32.9, min_temp: 29.4, weather_description: "Light rain at a few places" },
  "2209": { max_temp: 23.4, min_temp: 15.8, weather_description: "Partly cloudy" },
  "2490": { max_temp: 25.0, min_temp: 19.6, weather_description: "Scattered thunderstorms" },
  "2528": { max_temp: 34.2, min_temp: 28.9, weather_description: "Light rain showers" },
  "2529": { max_temp: 24.2, min_temp: 21.9, weather_description: "Light to moderate rain at most places" },
  "2036": { max_temp: 28.6, min_temp: 22.5, weather_description: "Scattered thunderstorms" },
  "2016": { max_temp: 34.4, min_temp: 30.9, weather_description: "Light rain showers" },
  "2503": { max_temp: 36.0, min_temp: 34.5, weather_description: "Scattered thunderstorms" },
  "2505": { max_temp: 21.5, min_temp: 20.6, weather_description: "Light rain at a few places" },
  "2208": { max_temp: 22.4, min_temp: 20.7, weather_description: "Partly cloudy" },
  "2197": { max_temp: 26.8, min_temp: 25.8, weather_description: "Scattered thunderstorms" },
  "2491": { max_temp: 29.5, min_temp: 25.5, weather_description: "Localized thunderstorms and lightning with light rain at scattered locations" },
  "2513": { max_temp: 35.5, min_temp: 28.5, weather_description: "Light rain at a few places" },
  "2527": { max_temp: 30.9, min_temp: 29.5, weather_description: "Light to moderate rain at most places" },
  "2196": { max_temp: 32.0, min_temp: 25.7, weather_description: "Localized thunderstorms and lightning with light rain at scattered locations" },
  "2502": { max_temp: 21.8, min_temp: 18.0, weather_description: "Scattered thunderstorms" },
  "2040": { max_temp: 20.1, min_temp: 14.2, weather_description: "Partly cloudy" },
  "2480": { max_temp: 24.2, min_temp: 19.9, weather_description: "Light rain showers" },
  "2526": { max_temp: 28.1, min_temp: 26.8, weather_description: "Partly cloudy" },
  "2204": { max_temp: 24.8, min_temp: 19.5, weather_description: "Light to moderate rain at most places" },
  "2507": { max_temp: 23.2, min_temp: 19.9, weather_description: "Light rain showers" },
  "2508": { max_temp: 28.6, min_temp: 22.3, weather_description: "Light to moderate rain at most places" },
  "2525": { max_temp: 34.7, min_temp: 29.7, weather_description: "Scattered thunderstorms" },
  "2492": { max_temp: 20.3, min_temp: 12.8, weather_description: "Clear sky" },
  "2039": { max_temp: 32.9, min_temp: 30.6, weather_description: "Light rain showers" },
  "2524": { max_temp: 34.0, min_temp: 26.4, weather_description: "Light rain at a few places" },
  "2202": { max_temp: 31.7, min_temp: 25.1, weather_description: "Clear sky" },
  "2520": { max_temp: 27.6, min_temp: 23.0, weather_description: "Localized thunderstorms and lightning with light rain at scattered locations" },
  "2034": { max_temp: 28.4, min_temp: 23.4, weather_description: "Light rain showers" },
  "2509": { max_temp: 34.9, min_temp: 28.7, weather_description: "Partly cloudy" },
  "2203": { max_temp: 23.2, min_temp: 20.4, weather_description: "Partly cloudy" },
  "2477": { max_temp: 30.4, min_temp: 26.6, weather_description: "Light to moderate rain at most places" },
  "2506": { max_temp: 27.2, min_temp: 24.8, weather_description: "Light rain at a few places" },
  "2523": { max_temp: 25.4, min_temp: 20.5, weather_description: "Light rain showers" },
  "2473": { max_temp: 29.4, min_temp: 28.8, weather_description: "Partly cloudy" },
  "2522": { max_temp: 30.1, min_temp: 27.9, weather_description: "Light rain at a few places" },
};

export const districts = stationMarkers.reduce((acc, marker) => {
  if (!acc[marker.district]) acc[marker.district] = [];
  acc[marker.district].push(marker.station);
  return acc;
}, {});

export const stationByDistrictAndName = stationMarkers.reduce((acc, marker) => {
  acc[`${marker.district}|${marker.station}`] = marker;
  return acc;
}, {});

export const districtWeatherData = [
  { district: "Chumoukedima", condition: "Cloudy", high: 22, low: 14, icon: "☁️" },
  { district: "Dimapur", condition: "Sunny", high: 31, low: 22, icon: "☀️" },
  { district: "Kiphire", condition: "Rain", high: 24, low: 17, icon: "🌧️" },
  { district: "Kohima", condition: "Cloudy", high: 21, low: 13, icon: "⛅" },
  { district: "Longleng", condition: "Rain", high: 26, low: 19, icon: "🌧️" },
  { district: "Meluri", condition: "Cloudy", high: 25, low: 16, icon: "☁️" },
  { district: "Mokokchung", condition: "Cloudy", high: 23, low: 15, icon: "☁️" },
  { district: "Mon", condition: "Rain", high: 27, low: 20, icon: "🌧️" },
  { district: "Niuland", condition: "Sunny", high: 30, low: 21, icon: "☀️" },
  { district: "Peren", condition: "Rain", high: 25, low: 18, icon: "🌧️" },
  { district: "Phek", condition: "Cloudy", high: 21, low: 12, icon: "⛅" },
  { district: "Shamator", condition: "Rain", high: 24, low: 17, icon: "🌧️" },
  { district: "Tseminyu", condition: "Cloudy", high: 23, low: 14, icon: "☁️" },
  { district: "Tuensang", condition: "Rain", high: 22, low: 15, icon: "🌧️" },
  { district: "Wokha", condition: "Cloudy", high: 25, low: 16, icon: "☁️" },
  { district: "Zunheboto", condition: "Sunny", high: 29, low: 20, icon: "☀️" },
];

export const DEFAULT_DISTRICT = "Kohima";
export const DEFAULT_STATION = "Raj bhavan";

export const districtForecastData = {
  Chumoukedima: [
    { high: 23, low: 15, condition: "Cloudy" },
    { high: 25, low: 16, condition: "Cloudy" },
    { high: 27, low: 18, condition: "Sunny" },
  ],
  Dimapur: [
    { high: 31, low: 22, condition: "Sunny" },
    { high: 32, low: 23, condition: "Sunny" },
    { high: 29, low: 21, condition: "Rain" },
  ],
  Kiphire: [
    { high: 24, low: 17, condition: "Rain" },
    { high: 23, low: 16, condition: "Rain" },
    { high: 26, low: 18, condition: "Cloudy" },
  ],
  Kohima: [
    { high: 22, low: 17, condition: "Rain" },
    { high: 25, low: 18, condition: "Cloudy" },
    { high: 28, low: 19, condition: "Sunny" },
  ],
  Longleng: [
    { high: 26, low: 19, condition: "Rain" },
    { high: 27, low: 20, condition: "Rain" },
    { high: 25, low: 18, condition: "Cloudy" },
  ],
  Meluri: [
    { high: 25, low: 16, condition: "Cloudy" },
    { high: 24, low: 15, condition: "Rain" },
    { high: 26, low: 17, condition: "Cloudy" },
  ],
  Mokokchung: [
    { high: 23, low: 15, condition: "Cloudy" },
    { high: 22, low: 14, condition: "Rain" },
    { high: 25, low: 16, condition: "Sunny" },
  ],
  Mon: [
    { high: 27, low: 20, condition: "Rain" },
    { high: 28, low: 21, condition: "Cloudy" },
    { high: 26, low: 19, condition: "Rain" },
  ],
  Niuland: [
    { high: 30, low: 21, condition: "Sunny" },
    { high: 31, low: 22, condition: "Sunny" },
    { high: 28, low: 20, condition: "Cloudy" },
  ],
  Peren: [
    { high: 25, low: 18, condition: "Rain" },
    { high: 24, low: 17, condition: "Rain" },
    { high: 27, low: 19, condition: "Cloudy" },
  ],
  Phek: [
    { high: 21, low: 12, condition: "Cloudy" },
    { high: 20, low: 11, condition: "Rain" },
    { high: 23, low: 14, condition: "Sunny" },
  ],
  Shamator: [
    { high: 24, low: 17, condition: "Rain" },
    { high: 25, low: 18, condition: "Cloudy" },
    { high: 23, low: 16, condition: "Rain" },
  ],
  Tseminyu: [
    { high: 23, low: 14, condition: "Cloudy" },
    { high: 24, low: 15, condition: "Cloudy" },
    { high: 26, low: 17, condition: "Sunny" },
  ],
  Tuensang: [
    { high: 22, low: 15, condition: "Rain" },
    { high: 23, low: 16, condition: "Rain" },
    { high: 25, low: 17, condition: "Cloudy" },
  ],
  Wokha: [
    { high: 25, low: 16, condition: "Cloudy" },
    { high: 26, low: 17, condition: "Sunny" },
    { high: 24, low: 15, condition: "Rain" },
  ],
  Zunheboto: [
    { high: 29, low: 20, condition: "Sunny" },
    { high: 30, low: 21, condition: "Sunny" },
    { high: 27, low: 19, condition: "Cloudy" },
  ],
};

export const CONDITION_ICONS = {
  Rain: WiRain,
  Cloudy: WiCloudy,
  Sunny: WiDaySunny,
};

export const buildDailyForecast = (district) => {
  const data = districtForecastData[district] || districtForecastData[DEFAULT_DISTRICT];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today = new Date();

  return data.map((entry, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    let label;
    if (i === 0) label = "Today";
    else if (i === 1) label = "Tomorrow";
    else label = dayNames[date.getDay()];

    return {
      day: label,
      high: entry.high,
      low: entry.low,
      condition: entry.condition,
      icon: CONDITION_ICONS[entry.condition] || WiCloudy,
    };
  });
};


export const sunTimes = {
  sunrise: "5:12 AM",
  sunset: "6:48 PM",
};

export const rainfallData = [
  { month: "Jan", mm: 12 },
  { month: "Feb", mm: 18 },
  { month: "Mar", mm: 45 },
  { month: "Apr", mm: 110 },
  { month: "May", mm: 220 },
  { month: "Jun", mm: 380 },
  { month: "Jul", mm: 420 },
  { month: "Aug", mm: 390 },
  { month: "Sep", mm: 280 },
  { month: "Oct", mm: 140 },
  { month: "Nov", mm: 35 },
  { month: "Dec", mm: 10 },
];

export const metricsRaw = [
  { day: "Mon", temp: 24, humidity: 78, precip: 12, wind: 8, aqi: 42 },
  { day: "Tue", temp: 25, humidity: 74, precip: 5, wind: 10, aqi: 38 },
  { day: "Wed", temp: 23, humidity: 81, precip: 22, wind: 14, aqi: 55 },
  { day: "Thu", temp: 22, humidity: 85, precip: 30, wind: 18, aqi: 61 },
  { day: "Fri", temp: 26, humidity: 70, precip: 4, wind: 9, aqi: 47 },
  { day: "Sat", temp: 27, humidity: 65, precip: 0, wind: 7, aqi: 35 },
  { day: "Sun", temp: 25, humidity: 72, precip: 8, wind: 11, aqi: 40 },
];

export const METRIC_META = {
  temp: { label: "Temperature", color: "#fbbf24", unit: "°C", min: 15, max: 35 },
  humidity: { label: "Humidity", color: "#38bdf8", unit: "%", min: 0, max: 100 },
  precip: { label: "Precipitation", color: "#818cf8", unit: "mm", min: 0, max: 50 },
  wind: { label: "Wind Speed", color: "#2dd4bf", unit: "km/h", min: 0, max: 40 },
  aqi: { label: "AQI", color: "#fb7185", unit: "", min: 0, max: 150 },
};

export const normalize = (key, value) => {
  const { min, max } = METRIC_META[key];
  return Math.round(((value - min) / (max - min)) * 100);
};

export const metricsData = metricsRaw.map((d) => ({
  day: d.day,
  raw: d,
  temp: normalize("temp", d.temp),
  humidity: normalize("humidity", d.humidity),
  precip: normalize("precip", d.precip),
  wind: normalize("wind", d.wind),
  aqi: normalize("aqi", d.aqi),
}));

export const ICON_KEYS = ["sun", "cloud-sun", "cloud-rain", "moon"];

export const createHourlyData = (dayIndex = 0) =>
  Array.from({ length: 24 }, (_, hour) => {
    const displayHour = hour % 12 === 0 ? 12 : hour % 12;
    const period = hour < 12 ? "AM" : "PM";
    const seed = dayIndex * 24 + hour;

    return {
      time: `${displayHour} ${period}`,
      temp: 22 + ((seed * 7 + 3) % 10),
      rain: (seed * 13 + 5) % 100,
      wind: 3 + ((seed * 11 + 7) % 15),
      iconKey: ICON_KEYS[(seed * 3 + dayIndex) % ICON_KEYS.length],
    };
  });

export const forecastDays = [
  { day: "Today", high: 31, low: 22, hourly: createHourlyData(0) },
  { day: "Thu", high: 30, low: 21, hourly: createHourlyData(1) },
  { day: "Fri", high: 29, low: 20, hourly: createHourlyData(2) },
  { day: "Sat", high: 27, low: 19, hourly: createHourlyData(3) },
  { day: "Sun", high: 28, low: 20, hourly: createHourlyData(4) },
  { day: "Mon", high: 30, low: 21, hourly: createHourlyData(5) },
  { day: "Tue", high: 32, low: 23, hourly: createHourlyData(6) },
  { day: "Wed", high: 31, low: 22, hourly: createHourlyData(7) },
];
import type { WeatherData, ForecastData } from "../types/weather";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export async function fetchWeather(city: string): Promise<WeatherData> {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  if (!res.ok) throw new Error("City not found");
  return res.json();
}

export async function fetchForecast(city: string): Promise<ForecastData> {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=5&appid=${API_KEY}&units=metric`
  );
  if (!res.ok) throw new Error("");
  return res.json();
}

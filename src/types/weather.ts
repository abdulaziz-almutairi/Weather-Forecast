export interface WeatherMain {
  temp: number;
  feels_like: number;
  humidity: number;
  // …other fields
}
export interface WeatherDescription {
  main: string;
  description: string;
  icon: string;
}
export interface WeatherData {
  name: string;
  sys: { country: string };
  weather: WeatherDescription[];
  main: WeatherMain;
  wind: { speed: number };
  // … add fields for forecast list if you fetch multi‑day
}
export interface ForecastDay {
  dt: number; // timestamp
  weather: WeatherDescription[];
  temp: { day: number; night: number };
  // … etc
}
export interface ForecastData {
  city: { name: string; country: string };
  list: ForecastDay[];
}

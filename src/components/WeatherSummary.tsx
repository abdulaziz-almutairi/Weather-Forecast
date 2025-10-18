import React from "react";
import type { WeatherData } from "../types/weather";

interface Props {
  data: WeatherData;
}

const WeatherSummary: React.FC<Props> = ({ data }) => {
  const weather = data.weather[0];

  return (
    <div className="text-gray-800 space-y-2">
      <h2 className="text-2xl font-bold">
        {data.name}, {data.sys.country}
      </h2>
      <img
        src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
        alt={weather.description}
        className="mx-auto"
      />
      <p className="capitalize">{weather.description}</p>
      <p className="text-3xl font-bold">{data.main.temp}°C</p>
      <p>Feels like: {data.main.feels_like}°C</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind: {data.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherSummary;

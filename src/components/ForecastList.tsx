import React from "react";
import type { ForecastDay } from "../types/weather";

interface Props {
  days: ForecastDay[];
}

const ForecastList: React.FC<Props> = ({ days }) => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      {days.map((day) => (
        <div
          key={day.dt}
          className="bg-white/60 rounded-md p-3 text-center shadow-md"
        >
          <p className="font-semibold">
            {new Date(day.dt * 1000).toLocaleDateString(undefined, {
              weekday: "short",
            })}
          </p>
          <img
            src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
            alt={day.weather[0].main}
            className="mx-auto"
          />
          <p>{day.weather[0].main}</p>
          <p>Day: {day.temp.day}°C</p>
          <p>Night: {day.temp.night}°C</p>
        </div>
      ))}
    </div>
  );
};

export default ForecastList;

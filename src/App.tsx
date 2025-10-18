import React, { useEffect, useState } from "react";
import type { WeatherData, ForecastData } from "./types/weather";
import { fetchWeather, fetchForecast } from "./utils/weatherApi";
import SearchForm from "./components/SearchForm";
import WeatherSummary from "./components/WeatherSummary";
import ForecastList from "./components/ForecastList";

const App: React.FC = () => {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (city: string) => {
    try {
      setError(null);
      const w = await fetchWeather(city);
      setWeather(w);
      const f = await fetchForecast(city);
      setForecast(f);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(() => {
      handleSearch("Riyadh");
    });
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-200 to-slate-300 flex items-center justify-center p-4">
      <div className="p-8 rounded-xl bg-white/30 backdrop-blur-md border border-white/40 shadow-xl text-center w-full max-w-md space-y-6">
        <h1 className="text-4xl font-black text-gray-800">Weather Forecast</h1>
        <SearchForm
          value={search}
          onChange={setSearch}
          onSubmit={() => handleSearch(search)}
        />
        {error && <p className="text-red-600">{error}</p>}
        {weather && <WeatherSummary data={weather} />}
        {forecast && <ForecastList days={forecast.list} />}
      </div>
    </main>
  );
};

export default App;

import { useState } from "react";
import "./App.css";

import Sidebar from "./components/Sidebar/Sidebar";
import SearchBar from "./components/SearchBar/SearchBar";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import Highlights from "./components/Highlights/Highlights";
import ForecastList from "./components/ForecastList/ForecastList";

import { fetchWeather, fetchForecast } from "./services/weatherapi";

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    try {
      setLoading(true);
      setError(null);

      const weatherData = await fetchWeather(city);
      const forecastData = await fetchForecast(city);

      setWeather(weatherData);

      const dailyForecast = forecastData.list
        .filter((_, i) => i % 8 === 0)
        .slice(0, 6);

      setForecast(dailyForecast);
    } catch (err) {
      setError("City not found. Please try again.");
      setWeather(null);
      setForecast([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <Sidebar />

      <div className="main">
        <SearchBar onSearch={handleSearch} />

        {loading && <p className="loading">Loading weather data...</p>}
        {error && <p className="error">{error}</p>}

        {!weather && !loading && !error && (
          <p className="hint">Search any city to view weather</p>
        )}

        {weather && (
          <>
            <WeatherCard weather={weather} />
            <Highlights weather={weather} />
          </>
        )}

        {forecast.length > 0 && (
          <ForecastList forecast={forecast} />
        )}
      </div>
    </div>
  );
}

export default App;
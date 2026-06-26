import "./WeatherCard.css";
import {
  WiDaySunny,
  WiCloud,
  WiRain,
  WiSnow,
  WiThunderstorm,
  WiFog
} from "react-icons/wi";

function WeatherCard({ weather }) {
  if (!weather) return null;

  const temp = Math.round(weather.main.temp);
  const condition = weather.weather[0].main;
  const description = weather.weather[0].description;

  const getWeatherIcon = () => {
    switch (condition) {
      case "Clear":
        return <WiDaySunny className="sunny" />;

      case "Clouds":
        return <WiCloud className="cloudy" />;

      case "Rain":
        return <WiRain className="rainy" />;

      case "Snow":
        return <WiSnow className="snowy" />;

      case "Thunderstorm":
        return <WiThunderstorm className="stormy" />;

      case "Mist":
      case "Fog":
        return <WiFog className="foggy" />;

      default:
        return <WiDaySunny className="sunny" />;
    }
  };

  return (
    <div className="weather-card">
      <div className="location">
        📍 {weather.name}, {weather.sys.country}
      </div>

      <div className="weather-icon">
        {getWeatherIcon()}
      </div>

      <h1>{temp}°C</h1>

      <p className="condition">
        {description}
      </p>

      <div className="feels-like">
        Feels Like {Math.round(weather.main.feels_like)}°C
      </div>
    </div>
  );
}

export default WeatherCard;
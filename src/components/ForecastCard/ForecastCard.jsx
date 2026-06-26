import "./ForecastCard.css";
import { WiDaySunny, WiCloud, WiRain } from "react-icons/wi";

function ForecastCard({ data }) {
  if (!data) return null;

  const temp = Math.round(data.main.temp);
  const type = data.weather[0].main;

  const renderIcon = () => {
    switch (type) {
      case "Clear":
        return <WiDaySunny />;
      case "Clouds":
        return <WiCloud />;
      case "Rain":
        return <WiRain />;
      default:
        return <WiDaySunny />;
    }
  };

  return (
    <div className="forecast-card">
      <div className="icon">{renderIcon()}</div>

      <p className="temp">{temp}°C</p>
      <p className="type">{type}</p>
    </div>
  );
}

export default ForecastCard;
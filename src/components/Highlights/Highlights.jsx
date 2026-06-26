import "./Highlights.css";
import { WiHumidity, WiStrongWind } from "react-icons/wi";
import { BsSpeedometer2 } from "react-icons/bs";
import { FaTemperatureHigh } from "react-icons/fa";

function Highlights({ weather }) {
  if (!weather) return null;

  const { humidity, pressure, feels_like } = weather.main;
  const windSpeed = weather.wind.speed;

  return (
    <div className="highlights">
      <h3 className="highlights-title">
        Today's Highlights
      </h3>

      <div className="highlights-grid">

        <div className="highlight-card humidity">
          <WiHumidity className="highlight-icon" />
          <p>Humidity</p>
          <h2>{humidity}%</h2>
        </div>

        <div className="highlight-card wind">
          <WiStrongWind className="highlight-icon" />
          <p>Wind Speed</p>
          <h2>{windSpeed} m/s</h2>
        </div>

        <div className="highlight-card pressure">
          <BsSpeedometer2 className="highlight-icon" />
          <p>Pressure</p>
          <h2>{pressure} hPa</h2>
        </div>

        <div className="highlight-card feels">
          <FaTemperatureHigh className="highlight-icon" />
          <p>Feels Like</p>
          <h2>{Math.round(feels_like)}°C</h2>
        </div>

      </div>
    </div>
  );
}

export default Highlights;
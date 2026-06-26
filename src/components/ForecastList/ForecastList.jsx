import "./ForecastList.css";
import ForecastCard from "../ForecastCard/ForecastCard";

function ForecastList({ forecast }) {
  if (!forecast || forecast.length === 0) return null;

  return (
    <div className="forecast">
      <h3 className="title">5 Day Forecast</h3>

      <div className="list">
        {forecast.map((item, index) => (
          <ForecastCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

export default ForecastList;
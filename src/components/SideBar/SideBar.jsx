import "./Sidebar.css";
import { FiHome, FiCloud, FiBarChart2, FiSettings } from "react-icons/fi";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="brand">🌤 WeatherDash</div>

      <div className="menu">
        <p className="active"><FiHome /> Dashboard</p>
        <p><FiCloud /> Forecast</p>
        <p><FiBarChart2 /> Highlights</p>
        <p><FiSettings /> Settings</p>
      </div>
    </div>
  );
}

export default Sidebar;
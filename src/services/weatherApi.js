const API_KEY = "b29105c7180a2e3ed7c282a8439d5a61";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export async function fetchWeather(city) {
  const res = await fetch(
    `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`
  );

  if (!res.ok) throw new Error("City not found");
  return res.json();
}

export async function fetchForecast(city) {
  const res = await fetch(
    `${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`
  );

  if (!res.ok) throw new Error("Forecast not found");
  return res.json();
}
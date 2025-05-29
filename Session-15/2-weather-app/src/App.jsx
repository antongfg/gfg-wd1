import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export const API_KEY = "7d9925376dfc79f48e562127c9794956";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const getWeather = async () => {
    try {
      if (!city) {
        return;
      }
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      setWeather(data);
      setError("");
    } catch (error) {
      setError("Failed to fetch weather data");
      setWeather(null);
    }
  };

  return (
    <div className="weather-container">
      <h1>🌤️ Weather App</h1>
      <div className="input-group">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={getWeather}>Search</button>
      </div>

      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="weather-info">
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].main}</p>
          <p>{Math.round(weather.main.temp)}&deg; C</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default App;

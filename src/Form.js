import React, { useState } from "react";
import axios from "axios";
import Current from "./Current";
import Forecast from "./Forecast";
import "./Form.css";

export default function Form(props) {
  let [inputValue, setInputValue] = useState("");
  let [weatherData, setWeatherData] = useState({});
  let [forecastData, setForecastData] = useState(null); // Add state for forecast data
  let [city, setCity] = useState(null);
  let [searchMade, setSearchMade] = useState(false);

  function handleClick(event) {
    event.preventDefault();
    let city = inputValue;
    setCity(city);
    updateInput(city);
  }

  function updateInput(city) {
    let key = `528fa09953b7eb5b52fb10a3t4oae266`;
    let currentWeatherUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=metric`;
    let forecastUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${key}&units=metric`;

    axios.get(currentWeatherUrl).then(showTemp);
    axios.get(forecastUrl).then(showForecast);
  }

  function showTemp(response) {
    setWeatherData({
      temperature: `${Math.round(response.data.temperature.current)}°`,
      description: response.data.condition.description,
      humidity: `Humidity: ${Math.round(response.data.temperature.humidity)}%`,
      wind: ` Wind: ${response.data.wind.speed}km/h`,
      date: new Date(response.data.time * 1000),
      iconUrl: response.data.condition.icon_url,
    });
    setSearchMade(true);
    setInputValue("");
  }

  function showForecast(response) {
    setForecastData(response.data.daily);
  }

  function handleChange(event) {
    event.preventDefault();
    setInputValue(event.target.value);
  }

  return (
    <div className="square">
      <div className="Form">
        <div className="form-group">
          <input
            placeholder="Enter City"
            type="text"
            id="inputCity"
            value={inputValue}
            onChange={handleChange}
            className="form-control"
            aria-describedby="passwordHelpInline"
          />
          <button
            type="button"
            className="btn"
            id="search-button"
            onClick={handleClick}
          >
            Search
          </button>
          <button type="button" className="btn" id="current-location-button">
            📍
          </button>
        </div>
      </div>

      {searchMade && (
        <div className="forecastSection">
          <Current weatherData={weatherData} city={city} />
          {forecastData && <Forecast forecastData={forecastData} />}{" "}
          {/* Pass forecast data */}
        </div>
      )}

      <div className="Footer">
        <footer>
          <a href="https://github.com/selinatisha/react-weather-app">
            Open-source code
          </a>
          by Selina Andersson
        </footer>
      </div>
    </div>
  );
}

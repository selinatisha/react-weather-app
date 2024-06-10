import React, { useState } from "react";
import axios from "axios";
import Current from "./Current";
import Forecast from "./Forecast";

export default function Form(props) {
  let [inputValue, setInputValue] = useState("");
  let [weatherData, setWeatherData] = useState({});
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
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=metric`;
    axios.get(url).then(showTemp);
  }

  function showTemp(response) {
    console.log(response.data);
    setWeatherData({
      temperature: `${Math.round(response.data.temperature.current)}°`,
      description: response.data.condition.description,
      humidity: `Humidity: ${Math.round(response.data.temperature.humidity)}%`,
      wind: `Wind: ${response.data.wind.speed}km/h`,
      iconUrl: response.data.condition.icon_url,
    });
    setSearchMade(true);
    setInputValue("");
  }

  function handleChange(event) {
    event.preventDefault();
    setInputValue(event.target.value);
  }

  return (
    <div className="square">
      <div className="Form">
        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <label for="inputPassword6" className="col-form-label"></label>
          </div>
          <div className="col-auto">
            <input
              placeholder="Enter City"
              type="text"
              id="inputCity"
              value={inputValue}
              onChange={handleChange}
              className="form-control"
              aria-describedby="passwordHelpInline"
            />
          </div>
          <div className="col-auto">
            <span id="passwordHelpInline" className="form-text">
              {" "}
            </span>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-danger"
          id="search-button"
          onClick={handleClick}
        >
          Search
        </button>
        <button
          type="button"
          className="btn btn-info"
          id="current-location-button"
        >
          📍{" "}
        </button>
      </div>

      {searchMade && (
        <div className="forecastSection">
          <Current weatherData={weatherData} city={city} />
          <Forecast />
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

import React, { useState } from "react";
import axios from "axios";
import Current from "./Current";
import Forecast from "./Forecast";

export default function Form(props) {
  let [inputValue, setInputValue] = useState("");
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [iconUrl, setIconUrl] = useState(null);
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
    setTemperature(`${Math.round(response.data.temperature.current)}`);
    setDescription(`Description: ${response.data.condition.description}`);
    setHumidity(`Humidity: ${Math.round(response.data.temperature.humidity)}%`);
    setWind(`Wind: ${response.data.wind.speed}km/h`);
    setIconUrl(response.data.condition.icon_url);
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
          <Current
            temperature={temperature}
            city={city}
            description={description}
            humidity={humidity}
            wind={wind}
            iconUrl={iconUrl}
          />
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

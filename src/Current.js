import React from "react";
import CurrentDay from "./CurrentDay";
export default function Current({ weatherData, city }) {
  return (
    <section className="current">
      <div className="today">
        <li className="third" id="current-city">
          {city}
        </li>
        <div className="main-info">
          <div className="image">
            <img
              src={weatherData.iconUrl}
              className="sun"
              id="WeatherIcon"
              alt=""
            />
          </div>

          <li className="first" id="current-temp">
            {weatherData.temperature}C
          </li>
        </div>
        <li className="second" id="current-date">
          <CurrentDay date={weatherData.date} />
        </li>
        <ul className="today2">
          <li className="description" id="temperature-description">
            {weatherData.description}
          </li>
          <li className="humid" id="humidForecast">
            {weatherData.humidity}
          </li>
          <li className="windSpeed" id="Wind">
            {weatherData.wind}
          </li>
        </ul>
      </div>
    </section>
  );
}

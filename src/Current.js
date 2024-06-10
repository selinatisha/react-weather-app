import React from "react";
export default function Current({ weatherData, city }) {
  return (
    <section className="current">
      <ul className="today">
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

        <li className="third" id="current-city">
          {city}
        </li>
        <li className="second" id="current-date">
          Thursday 20:00
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
      </ul>
    </section>
  );
}

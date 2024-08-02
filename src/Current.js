import React from "react";
import CurrentDay from "./CurrentDay";
export default function Current({ weatherData, city }) {
  return (
    <section className="current">
      <div className="today">
        <li className="third" id="current-city">
          {city}
        </li>
        <li className="second" id="current-date">
          <CurrentDay date={weatherData.date} />
        </li>
        <div className="main-info">
          <div className="image">
            <img
              src={weatherData.iconUrl}
              className="sun"
              id="WeatherIcon"
              alt=""
            />
            <li className="description" id="temperature-description">
              {weatherData.description}
            </li>
          </div>

          <li className="first" id="current-temp">
            {weatherData.temperature}C
          </li>
          <ul className="today2">
            <li className="humid" id="humidForecast">
              <span>
                {weatherData.humidity}
                {weatherData.wind}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

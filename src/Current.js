import React from "react";
export default function Current() {
  return (
    <section className="current">
      <ul className="today">
        <div className="image">
          <img
            className="sun"
            id="WeatherIcon"
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
            alt=""
          />
        </div>
        <li className="first" id="current-temp">
          18<span className="units"> °C</span>
        </li>

        <li className="third" id="current-city">
          Malmö
        </li>
        <li className="second" id="current-date">
          Thursday 20:00
        </li>
        <ul className="today2">
          <li className="description" id="temperature-description">
            clear
          </li>
          <li className="humid" id="humidForecast">
            Humidity: <span className="humid" id="humidity"></span>
          </li>
          <li className="windSpeed" id="Wind">
            Wind: <span className="windSpeed" id="wind"></span>
          </li>
        </ul>
      </ul>
    </section>
  );
}

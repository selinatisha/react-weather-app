import React from "react";
export default function Current({
  temperature,
  city,
  description,
  humidity,
  wind,
  iconUrl,
}) {
  return (
    <section className="current">
      <ul className="today">
        <div className="image">
          <img src={iconUrl} className="sun" id="WeatherIcon" alt="" />
        </div>
        <li className="first" id="current-temp">
          {temperature} °C
        </li>

        <li className="third" id="current-city">
          {city}
        </li>
        <li className="second" id="current-date">
          Thursday 20:00
        </li>
        <ul className="today2">
          <li className="description" id="temperature-description">
            {description}
          </li>
          <li className="humid" id="humidForecast">
            {humidity}
          </li>
          <li className="windSpeed" id="Wind">
            {wind}
          </li>
        </ul>
      </ul>
    </section>
  );
}

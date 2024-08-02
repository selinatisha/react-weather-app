import React, { useState } from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temp = Math.round(props.data.temperature.maximum);
    return `${temp}`;
  }
  function minTemperature() {
    let minTemp = Math.round(props.data.temperature.minimum);
    return `${minTemp}`;
  }
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="ForecastApp">
      <div className="forecast-day">{day()}</div>
      <img
        className="forecastEmoji"
        id="forecastWeatherIcon"
        src={props.data.condition.icon_url}
        alt=""
        size={36}
      />

      <div className="temp">
        <span className="forecast-temperature-max">{maxTemperature()}° </span>/
        <span className="forecast-temperature-min"> {minTemperature()}°</span>
      </div>
    </div>
  );
}

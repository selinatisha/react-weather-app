import React from "react";
import WeatherForecastDay from "./WeatherForecastDay";

export default function Forecast({ forecastData }) {
  return (
    <div className="Forecast">
      <div className="weather-forecast" id="forecast">
        <div className="row align-items-start">
          {forecastData.map((dailyForecast, index) => {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
}

import React from "react";
export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="weather-forecast" id="forecast">
        <div className="row align-items-start">
          <div className="col">
            <div className="forecast-day">Thu</div>
            <div className="emoji">
              <img
                className="forecastEmoji"
                id="forecastWeatherIcon"
                src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png"
                alt=""
                width="42"
              />
            </div>
            <div className="temp">
              <span className="forecast-temperature-max">18 °</span>/
              <span className="forecast-temperature-min">18 °</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

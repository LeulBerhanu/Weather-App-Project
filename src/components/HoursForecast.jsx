import React from "react";
import { currentHours } from "../utils/dateData";

export default function HoursForecast({ data, tempUnit }) {
  const hourData = data.forecast.forecastday[0].hour.slice(currentHours);

  return (
    <div className="hours-card__body">
      <p className="hours-card__caption">Today At</p>
      <div className="hours-card__container">
        {hourData.map((hour, idx) => {
          const isCurrentHour =
            parseInt(hour.time.split(" ")[1].split(":")[0]) === currentHours;

          const time = isCurrentHour ? "Now" : hour.time.split(" ")[1];

          return (
            <div key={idx} className="hours-card__item">
              <div>{time}</div>
              <img
                className="icon__weather"
                src={hour.condition.icon}
                alt={hour.condition.text}
              />
              <div>{tempUnit > 0 ? hour.temp_f : hour.temp_c}&deg;</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

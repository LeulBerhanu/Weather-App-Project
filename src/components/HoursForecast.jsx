import React from "react";
import { currentHours, fullDate } from "../utils/dateData";

export default function HoursForecast({ data }) {
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
              <div>{hour.temp_c}&deg;c</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

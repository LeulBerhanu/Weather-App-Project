import React from "react";
import { daysOfWeek } from "../utils/dateData";

export default function DaysForecast({ data }) {
  return (
    <div>
      <p className="days-card__caption">10 Day Forecast</p>
      <div className="days-card__container">
        {data.forecast.forecastday.map((day, idx) => {
          const date = new Date(day.date);
          const dayName = daysOfWeek[date.getDay()];

          return (
            <div key={idx} className="days-card__item">
              <img
                className="icon__weather"
                src={day.day.condition.icon}
                alt={day.day.condition.text}
              />
              <div>{dayName}</div>
              <div className="min-maxtemp">
                <span>{day.day.mintemp_c}&deg;</span> -{" "}
                <span>{day.day.maxtemp_c}&deg;</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

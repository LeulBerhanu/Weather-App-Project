import { WiHumidity, WiThermometer } from "react-icons/wi";
import { PiWindDuotone } from "react-icons/pi";
import { AiFillEye } from "react-icons/ai";

export default function CurrentConditionDetails({ data, tempUnit }) {
  return (
    <div className="current-condition-details__container">
      <p className="current-condition-details__caption">Today's Highlights</p>
      <div className="current-condition-details">
        <div className="humidity">
          <p className="caption">Humidity</p>
          <div>
            <WiHumidity className="icon__highlights" />
            {data.current.humidity}
          </div>
        </div>
        <div className="wind-speed">
          <p className="caption">Wind Speed</p>
          <div>
            <PiWindDuotone className="icon__highlights" />
            {data.current.wind_kph}
            <span className="unit">kph</span>
          </div>
        </div>
        <div className="visibility">
          <p className="caption">Visibility</p>
          <div>
            <AiFillEye className="icon__highlights" />
            {data.current.vis_km}
            <span className="unit">km</span>
          </div>
        </div>
        <div className="feels-like">
          <p className="caption">Feels Like</p>
          <div>
            <WiThermometer className="icon__highlights" />
            {tempUnit > 0 ? data.current.feelslike_f : data.current.feelslike_c}
            &deg;
          </div>
        </div>
      </div>
    </div>
  );
}

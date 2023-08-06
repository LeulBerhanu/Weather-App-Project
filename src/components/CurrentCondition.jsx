export default function CurrentCondition({ data, tempUnit }) {
  return (
    <div className="current-condition">
      <div className="place">
        <p className="city">{data.location.name}</p>
        <p className="country">{data.location.country}</p>
        <div className="temp">
          {tempUnit > 0
            ? Math.round(data.current.temp_f)
            : Math.round(data.current.temp_c)}
          &deg;
        </div>
      </div>
      <div>
        <img
          src={data.current.condition.icon}
          alt={data.current.condition.text}
        />
        <p className="condition-text">{data.current.condition.text}</p>
      </div>
    </div>
  );
}

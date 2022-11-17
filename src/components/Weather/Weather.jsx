import "./Weather.scss";

const Weather = ({ weathers, currentDate, currentTime }) => {
  const current = weathers.current;
  console.log(weathers.current);
  return (
    <div className="weather">
      <div className="weather__content">
        <div className="weather__container">
          {current != undefined && <img src={`${current.condition.icon}`} alt="Todays Weather" className="weather__icon" />}
          {current != undefined && <p className="weather__info">{current.temp_c}°</p>}
          <p className="weather__info">| {currentDate}</p>
        </div>
        <p className="weather__time">{currentTime}</p>
      </div>
    </div>
  );
};

export default Weather;

import { useEffect, useState } from "react";
// import Forecast from "../../components/Forecast/Forecast";
import Weather from "../../components/Weather/Weather";
import "./WeatherContainer.scss";

const WeatherContainer = () => {
  const [weathers, setWeathers] = useState({});
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();
  const [currentTime, setCurrentTime] = useState();
  // const [forecast, setForecast] = useState();

  const location = () => {
    const success = (position) => {
      setLongitude(position.coords.longitude);
      setLatitude(position.coords.latitude);
    };
    const error = () => {
      console.log("Failed");
    };
    navigator.geolocation.getCurrentPosition(success, error);
  };

  useEffect(() => {
    setTimeout(function () {
      location();
    }, 1000);
  }, []);

  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  const getWeather = async () => {
    const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${latitude}, ${longitude}&days=7&aqi=no`);
    const data = await res.json();
    setWeathers(data);
  };
  useEffect(() => {
    getWeather();
  }, []);

  const date = new Date();
  let dayName = date.toString().split(" ")[0];
  let day = date.getDate();
  let month = date.toString().split(" ")[1];
  let currentDate = `${dayName}, ${day} ${month}`;
  console.log(currentDate);
  console.log(dayName);

  function theTime() {
    let Datte = new Date();
    let H = Datte.getHours();
    let m = Datte.getMinutes();
    if (H < 10 ){
        H = "0" + H;
    }
    if (m < 10 ){
        m = "0" + m;
    }
    setCurrentTime(`${H} : ${m}`); 
}

 setInterval(() => {
  theTime()
 }, 10000)
  // const getForecast = () => {
  //   const forecasting = weathers.forecast;
  //   setForecast(forecasting.forecastday);
  // };
  return (
    <div className="weatherContainer">
      <button onClick={getWeather} className="weatherContainer__button">
        Get Weather
      </button>
      <Weather weathers={weathers} currentDate={currentDate} currentTime={currentTime}/>
      {/* <button onClick={getForecast}>forecast</button> */}
      {/* {forecast != undefined && <Forecast  />} */}
    </div>
  );
};

export default WeatherContainer;

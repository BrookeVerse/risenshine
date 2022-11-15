import { useEffect, useState } from "react";
import Forecast from "../../components/Forecast/Forecast";
import Weather from "../../components/Weather/Weather";
import "./WeatherContainer.scss";

const WeatherContainer = () => {
  const [weathers, setWeathers] = useState({});
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();
  const [forecast, setForecast] = useState();

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

  const getForecast = () => {
    const forecasting = weathers.forecast;
    setForecast(forecasting.forecastday);
  };

  
  return (
    <div className="weatherContainer">
      {weathers.current != undefined && <Weather weathers={weathers} />}
      <button onClick={getWeather}>Get Current</button>
      {/* <button onClick={getForecast}>forecast</button> */}
      {/* {forecast != undefined && <Forecast  />} */}
    </div>
  );
};

export default WeatherContainer;

import { useEffect, useState } from "react";
import Weather from "../../components/Weather/Weather";
import "./WeatherContainer.scss";

const WeatherContainer = () => {
  const [weathers, setWeathers] = useState({});
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();

  const location = () => {
    const success = (position) => {
    setLongitude(position.coords.longitude)
    setLatitude(position.coords.latitude);
    }
    const error = () => {
        console.log("Failed");
    }
    navigator.geolocation.getCurrentPosition(success, error)
  }

  useEffect(() => {
    setTimeout(function(){
        location()
    }, 1000)
  }, [])

  const apiKey= ``;

  const getWeather = async () => {
    const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${latitude}, ${longitude}&days=7&aqi=no`);
    const data = await res.json();
    setWeathers(data);
  };

//   useEffect(() => {
//     getWeather()
//   }, []);
// const forecastDays = forecast.forecastday
//   const weatherCard = forecastDays.map((forecastDay, index) => {
//           return <img key={index} src={forecastDay.condition} alt="location weather"/>
//       })
    console.log(weathers.current);
//   console.log(weather);
  return (
    <div className="weatherContainer">
      {weathers.current != undefined && <Weather weathers={weathers} />}
      <button onClick={getWeather}>Get it</button>
    </div>
  );
};

export default WeatherContainer;

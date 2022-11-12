import "./Weather.scss"

const Weather = ({weathers}) => {
    const image = weathers.current
  return (
    <div className="weather">
        <img src={`${image.condition.icon}`} alt="Todays Weather" className="weather__icon" />
    </div>
  )
}

export default Weather
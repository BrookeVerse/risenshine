import "./Main.scss"
import WeatherContainer from "../../container/WeatherContainer/WeatherContainer"
import Affirmations from "../Affirmations/Affirmations"
const Main = ({weathers, colRef, db}) => {
  return (
    <div>
        <WeatherContainer weathers={weathers}/>
        <Affirmations colRef={colRef}  db={db}/>
    </div>
  )
}

export default Main
import "./Main.scss";
import WeatherContainer from "../../container/WeatherContainer/WeatherContainer";
import Affirmations from "../Affirmations/Affirmations";
import { Welcome } from "../Welcome/Welcome";
const Main = ({ weathers, colRef, db, user }) => {
  return (
    <div>
      <Welcome user={user}/>
      <WeatherContainer weathers={weathers} />
      <Affirmations colRef={colRef} db={db} />
    </div>
  );
};

export default Main;

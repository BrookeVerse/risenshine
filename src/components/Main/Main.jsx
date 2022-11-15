import "./Main.scss";
import WeatherContainer from "../../container/WeatherContainer/WeatherContainer";

import { Welcome } from "../Welcome/Welcome";
const Main = ({ weathers, user, randomAffirmations}) => {
  return (
    <div>
      <Welcome user={user} />
      <WeatherContainer weathers={weathers} />
      {randomAffirmations != undefined && <p>{randomAffirmations.affirmation}</p>}
    </div>
  );
};

export default Main;

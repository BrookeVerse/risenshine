import "./Main.scss";
import WeatherContainer from "../../container/WeatherContainer/WeatherContainer";

import { Welcome } from "../Welcome/Welcome";
const Main = ({ weathers, user, randomAffirmations,}) => {
  return (
    <div className="main">
      <Welcome user={user} />
      <WeatherContainer weathers={weathers} />
      <div className="main__affirmation">
        <h2>Daily Affirmation</h2>
      {randomAffirmations != undefined && <p className="main__daily">{randomAffirmations.affirmation}</p>}
      </div>
    </div>
  );
};

export default Main;

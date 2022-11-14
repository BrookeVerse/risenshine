import "./Main.scss";
import WeatherContainer from "../../container/WeatherContainer/WeatherContainer";
import Affirmations from "../Affirmations/Affirmations";
import { Welcome } from "../Welcome/Welcome";
import { Link } from "react-router-dom";
const Main = ({ weathers, colRef, db, user, randomAffirmations, longitude, latitude }) => {
  return (
    <div>
      <Welcome user={user} />
      <WeatherContainer weathers={weathers} />
      {randomAffirmations != undefined && <p>{randomAffirmations.affirmation}</p>}
      <Affirmations colRef={colRef} db={db} />
      <Link to={"/map"}>
        <button>Map</button>
      </Link>
    </div>
  );
};

export default Main;

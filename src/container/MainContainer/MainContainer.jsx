import Main from "../../components/Main/Main";
import NavBarContainer from "../NavBarContainer/NavBarContainer";
import "./MainContainer.scss";

const MainContainer = ({ weathers, user, colRef, db, randomAffirmations, longitude, latitude }) => {
  return (
    <div className="mainContainer">
      <NavBarContainer />
      <Main
        weathers={weathers}
        user={user}
        colRef={colRef}
        db={db}
        randomAffirmations={randomAffirmations}
        longitude={longitude}
        latitude={latitude}
      />
    </div>
  );
};

export default MainContainer;

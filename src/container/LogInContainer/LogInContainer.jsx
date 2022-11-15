import "./LogInContainer.scss";

import LogIn from "../../components/LogIn/LogIn";

const LogInContainer = ({ auth, getWeather }) => {
  return (
    <div className="logInContainer">
      <div>
        <LogIn auth={auth} getWeather={getWeather} />
      </div>
    </div>
  );
};

export default LogInContainer;

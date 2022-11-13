import "./LogInContainer.scss";

import LogIn from "../../components/LogIn/LogIn";
import Register from "../../components/Register/Register";

const LogInContainer = ({auth, getWeather}) => {

  return (
    <div>
        <LogIn auth={auth} getWeather={getWeather}/>
        <Register auth={auth}/>
    </div>
  )
}

export default LogInContainer
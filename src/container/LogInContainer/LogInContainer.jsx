import "./LogInContainer.scss";

import LogIn from "../../components/LogIn/LogIn";
import Register from "../../components/Register/Register";

const LogInContainer = ({auth}) => {

  return (
    <div>
        <LogIn auth={auth}/>
        <Register auth={auth}/>
    </div>
  )
}

export default LogInContainer
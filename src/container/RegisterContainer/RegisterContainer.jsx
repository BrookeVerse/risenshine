import "./RegisterContainer.scss"
import Register from "../../components/Register/Register";
const RegisterContainer = ({auth}) => {
  return (
    <div className="registerContainer">
        <Register auth={auth}/>
    </div>
  )
}

export default RegisterContainer
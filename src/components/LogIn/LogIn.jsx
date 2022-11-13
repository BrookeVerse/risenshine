import "./LogIn.scss";
import { signOut, signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogIn = ({ auth, getWeather }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const logOut = (event) => {
    event.preventDefault();
    signOut(auth).catch((error) => {
      console.log(error.message);
    });
  };
  const logInForm = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // navigate("/home");
        navigate("/profile");
        logInForm.reset();
      })
      .catch((error) => {
        console.log(error.message);
      });
    getWeather();
  };
  // subscribing to auth changes
  onAuthStateChanged(auth, (user) => {
    console.log("user status changed:", user);
    
  });

  return (
    <div className="LogIn">
      <h2>Welcome!</h2>
      <form className="logIn__form" onSubmit={logInForm}>
        <div className="LogIn__content">
          <input type="text" placeholder="UserName" className="LogIn__userName" onChange={(event) => setEmail(event.target.value)} />
          <input type="text" placeholder="Password" className="LogIn__password" onChange={(event) => setPassword(event.target.value)} />
          <button>Log In</button>
        </div>
      </form>
      <button onClick={logOut}>Log Out</button>
    </div>
  );
};

export default LogIn;

import "./LogIn.scss";
import { signOut, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FaUser, FaLock, FaChevronRight } from "react-icons/fa";

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
        if (auth.currentUser.displayName !== null) {
          navigate("/home");
        } else {
          navigate("/profile");
        }
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
    <div className="logIn">
      <div className="logIn__container">
        <div className="logIn__screen">
          <div className="logIn__content">
            <form className="logIn__form" onSubmit={logInForm}>
              <div className="logIn__field">
                <FaUser className="logIn__icon" />
                <input type="text" placeholder="Email" className="logIn__input" onChange={(event) => setEmail(event.target.value)} />
              </div>
              <div className="logIn__field">
                <FaLock className="logIn__icon" />
                <input type="password" placeholder="Password" className="logIn__input" onChange={(event) => setPassword(event.target.value)} />
              </div>
              <button className="logIn__submit">
                <span className="logIn__text">Log In</span>
                <FaChevronRight className="logIn__buttonIcon" />
              </button>
              <a href="">
                <p className="logIn__register">Sign up</p>
              </a>
            </form>
          </div>
          <div className="logIn__background">
            <span className="logIn__shape4 logIn__shape"></span>
            <span className="logIn__shape3 logIn__shape"></span>
            <span className="logIn__shape2 logIn__shape"></span>
            <span className="logIn__shape1 logIn__shape"></span>
          </div>
        </div>
      </div>
      <button onClick={logOut}>Log Out</button>
    </div>
  );
};

export default LogIn;

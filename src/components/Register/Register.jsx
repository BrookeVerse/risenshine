import "./Register.scss";

import { useState } from "react";
import { FaUser, FaLock, FaChevronRight } from "react-icons/fa";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

const Register = ({ auth }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const signUp = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        console.log("user created:", cred.user);
        alert("Account created!")
        document.getElementById("register__form").reset();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="register">
      <div className="register__container">
        <div className="register__screen">
          <div className="register__content">
            <form className="register__form" onSubmit={signUp} id="register__form">
              <h2 className="register__title">Register Today</h2>
              <div className="register__field">
                <FaUser className="register__icon" />
                <input type="text" placeholder="email" className="register__input" onChange={(event) => setEmail(event.target.value)} required />
              </div>
              <div className="register__field">
                <FaLock className="register__icon" />
                <input
                  type="text"
                  placeholder="password"
                  className="register__input"
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />
              </div>
              <button className="register__submit">
                <span className="register__text">Sign up</span>
                <FaChevronRight className="logIn__buttonIcon" />
              </button>
              <Link to={"/"}>
                <button className="register__submit">
                  <span className="register__text">back</span>
                  <FaChevronRight className="logIn__buttonIcon" />
                </button>
              </Link>
            </form>
          </div>
          <div className="register__background">
            <span className="register__shape4 register__shape"></span>
            <span className="register__shape3 register__shape"></span>
            <span className="register__shape2 register__shape"></span>
            <span className="register__shape1 register__shape"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

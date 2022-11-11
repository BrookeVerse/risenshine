import "./Register.scss"

import { useState } from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = ({auth}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const signUp = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((cred) => {
                console.log("user created:", cred.user);
                signUp.reset()
            })
            .catch((error) => {
                console.log(error.message);
            })
    }
  return (
    <div className="Register">
        <h2 className="Register__title">Register New User</h2>
        <form className="Register__form" onSubmit={signUp}>
            <input type="text" placeholder="email" onChange={(event => setEmail(event.target.value))}/>
            <input type="text" placeholder="password" onChange={(event => setPassword(event.target.value))}/>
            <button>Sign up</button>
        </form>
    </div>
  )
}

export default Register
import "./App.scss";

import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LogInContainer from "./container/LogInContainer/LogInContainer";
import { useState, useEffect } from "react";
import MainContainer from "./container/MainContainer/MainContainer";

// import Affirmations from "./components/Affirmations/Affirmations";
// import LogInContainer from "./container/LogInContainer/LogInContainer";
function App() {
  const [weathers, setWeathers] = useState({});
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();

  const firebaseConfig = {
    apiKey: "",
    authDomain: "risenshine-cd3dd.firebaseapp.com",
    projectId: "risenshine-cd3dd",
    storageBucket: "risenshine-cd3dd.appspot.com",
    messagingSenderId: "642039955447",
    appId: "1:642039955447:web:af29a9f84a0c9029d838f2",
  };
  // init firebase app
  initializeApp(firebaseConfig);
  // init services
  const db = getFirestore();
  const auth = getAuth();
  // collection ref
  const colRef = collection(db, "affirmations");

  //queries
  // const q = query(colRef, where("affirmation", "==", "It takes strength to ask for help."))

  //real time collection data
  onSnapshot(colRef, (snapshot) => {
    let affirmations = [];
    snapshot.docs.forEach((doc) => {
      affirmations.push({ ...doc.data(), id: doc.id });
    });
    console.log(affirmations);
  });

  // get a single document
  const docRef = doc(db, "affirmations", "0Am1xfSPPs8F6mgz2XXo");
  onSnapshot(docRef, (doc) => {
    console.log(doc.data(), doc.id);
  });

  const location = () => {
    const success = (position) => {
      setLongitude(position.coords.longitude);
      setLatitude(position.coords.latitude);
    };
    const error = () => {
      console.log("Failed");
    };
    navigator.geolocation.getCurrentPosition(success, error);
  };

  useEffect(() => {
    setTimeout(function () {
      location();
    }, 1000);
  }, []);

  const apiKey = ``;

  const getWeather = async () => {
    const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${latitude}, ${longitude}&days=7&aqi=no`);
    const data = await res.json();
    setWeathers(data);
  };
  return (
    <div className="App">
      {/* <Affirmations colRef={colRef}  db={db}/> */}
      {/* <LogInContainer auth={auth}/> */}
      <Router>
        <Routes>
          <Route path="/home" element={<MainContainer weathers={weathers} colRef={colRef}  db={db}/>}></Route>
          <Route path="/" element={<LogInContainer auth={auth} getWeather={getWeather} />}>
            {}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

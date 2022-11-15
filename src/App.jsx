import "./App.scss";

import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LogInContainer from "./container/LogInContainer/LogInContainer";
import { useState, useEffect } from "react";
import MainContainer from "./container/MainContainer/MainContainer";
import ProfileContainer from "./container/ProfileContainer/ProfileContainer";
import MapContainer from "./container/MapContainer/MapContainer";

// import Affirmations from "./components/Affirmations/Affirmations";
// import LogInContainer from "./container/LogInContainer/LogInContainer";
function App() {
  const [weathers, setWeathers] = useState({});
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();
  const [randomAffirmations, setRandomAffirmations] = useState();

  

  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
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
  const user = auth.currentUser;
  //queries
  // const q = query(colRef, where("affirmation", "==", "It takes strength to ask for help."))

  //real time collection data
  let affirmations = [];

  useEffect(() => {
    onSnapshot(colRef, (snapshot) => {
      snapshot.docs.forEach((doc) => {
        affirmations.push({ ...doc.data(), id: doc.id });
      });
      console.log(affirmations);
      let randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
      setRandomAffirmations(randomAffirmation)
    });
  }, [])

  
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

  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  const getWeather = async () => {
    const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${latitude}, ${longitude}&days=7&aqi=no`);
    const data = await res.json();
    setWeathers(data);
  };
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/map" element={<MapContainer long={longitude} lat={latitude}/>}></Route>
          <Route path="/profile" element={<ProfileContainer auth={auth}/>}></Route>
          <Route path="/home" element={<MainContainer weathers={weathers} colRef={colRef}  db={db} user={user} randomAffirmations={randomAffirmations} longitude={longitude} latitude={latitude}/>}></Route>
          <Route path="/" element={<LogInContainer auth={auth} getWeather={getWeather} />}>
            {}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

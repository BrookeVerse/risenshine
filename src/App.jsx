import "./App.scss";

import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot, doc} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import WeatherContainer from "./container/WeatherContainer/WeatherContainer";
// import Affirmations from "./components/Affirmations/Affirmations";
  // import LogInContainer from "./container/LogInContainer/LogInContainer";
function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyCU6m7yeAQKd4GYVZghAeHhxPEiV4G-RsU",
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
  })
  
  // get a single document
  const docRef = doc(db, "affirmations", "0Am1xfSPPs8F6mgz2XXo")
  onSnapshot(docRef, (doc) => {
    console.log(doc.data(), doc.id);
  })
  return (
    <div className="App">
      {/* <Affirmations colRef={colRef}  db={db}/> */}
      {/* <LogInContainer auth={auth}/> */}
      <WeatherContainer />
    </div>
  );
}

export default App;

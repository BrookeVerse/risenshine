import "./App.scss";
import LogInContainer from "./container/LogInContainer/LogInContainer";
import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs} from "firebase/firestore";
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
  // collection ref
  const colRef = collection(db, "affirmations");
  //get collection data
  getDocs(colRef)
    .then((snapshot) => {
      let affirmations = [];
      snapshot.docs.forEach((doc) => {
        affirmations.push({ ...doc.data(), id: doc.id })
      })
      console.log(affirmations);
    });
  return (
    <div className="App">
      <LogInContainer />
    </div>
  );
}

export default App;

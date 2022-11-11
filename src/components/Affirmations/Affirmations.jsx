import "./Affirmations.scss";

import { useState } from "react";
import { addDoc, collection, deleteDoc, doc, updateDoc } from "firebase/firestore";

const Affirmations = ({ db }) => {
  const [affirmation, setAffirmation] = useState();
  const [id, setId] = useState();
  const [updatedAffirmation, setUpdatedAffirmation] = useState();
  const addAffirmation = async (e) => {
    e.preventDefault();
    e.target.reset();
    try {
      const docRef = await addDoc(collection(db, "affirmations"), {
        affirmation: affirmation,
      });
      
    } catch (e) {
      console.error("error adding document: ", e);
    }
  };
  const deleteAffirmation = async (e) => {
    e.preventDefault();
    const docRef = doc(db, "affirmations", id)
    deleteDoc(docRef)
    .then(() => {
        deleteAffirmation.reset();
    })
  }
  const updateAffirmation = async (e) => {
    e.preventDefault();
    const docRef = doc(db, "affirmations", id)
    updateDoc(docRef, {
        affirmation: updatedAffirmation,
    })
    .then(() => {
        updateAffirmation.reset();
    })
  }
  return (
    <div className="Affirmations" onSubmit={addAffirmation}>
      <form className="Affirmations__add">
        <input type="text" placeholder="Daily Affirmation" onChange={(event) => setAffirmation(event.target.value)} required />
        <button>Add Affirmation</button>
      </form>
      <form className="Affirmations__update" onSubmit={updateAffirmation}>
        <input type="text" placeholder="Affirmation Id" onChange={(event => setId(event.target.value))} required/>
        <input type="text" placeholder="Update Affirmation" onChange={(event => setUpdatedAffirmation(event.target.value))} required/>
        <button>Update Affirmation</button>
      </form>
      <form className="Affirmations__delete" onSubmit={deleteAffirmation}>
        <input type="text" placeholder="Id" required onChange={(event => setId(event.target.value))}/>
        <button>Delete Affirmation</button>
      </form>
    </div>
  );
};

export default Affirmations;

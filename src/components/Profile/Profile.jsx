import { updateProfile } from "firebase/auth";
import { useState } from "react"
import "./Profile.scss"
import { useNavigate } from "react-router-dom";

const Profile = ({auth}) => {
    const [userName, setUserName] = useState();
    const navigate = useNavigate();
    const createUserName = () =>{
        updateProfile(auth.currentUser, {
            displayName: `${userName}`
        }) .then(() => {
            console.log("Profile Has Been Updated!");
        })
    }
    const goHome = () => {
        navigate("/home")
    }
  return (
    <div>
        <h2 className="Profile__Update">Update Profile</h2>
        <form onSubmit={createUserName}>
        <input type="text" placeholder="userName" onChange={(event => setUserName(event.target.value))}/>
        <button>Submit</button>
        </form>
        <button onClick={goHome}>Home</button>
    </div>
  )
}

export default Profile
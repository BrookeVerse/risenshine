import Profile from "../../components/Profile/Profile"
import "./ProfileContainer.scss"

const ProfileContainer = ({auth}) => {
  return (
    <div className="profileContainer">
        <Profile auth={auth}/>
    </div>
  )
}

export default ProfileContainer
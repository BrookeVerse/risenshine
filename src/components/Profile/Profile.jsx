import { updateProfile } from "firebase/auth";
import { useState } from "react";
import "./Profile.scss";
import { useNavigate } from "react-router-dom";
import { FaUser, FaChevronRight } from "react-icons/fa";

const Profile = ({ auth }) => {
  const [userName, setUserName] = useState();
  const navigate = useNavigate();
  const createUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: `${userName}`,
    }).then(() => {
      document.getElementById("profile__form").reset();
      alert("Profile Has Been Updated!");
    });
  };
  const goHome = () => {
    navigate("/home");
  };
  return (
    <div className="profile">
      <div className="profile__container">
        <div className="profile__screen">
          <form onSubmit={createUserName} className="profile__form" id="profile__form">
            <h2 className="profile__title">Update Profile</h2>
            <div className="profile__field">
              <FaUser className="profile__icon" />
              <input type="text" placeholder="userName" className="profile__input" onChange={(event) => setUserName(event.target.value)} />
            </div>
            <button className="profile__submit">
              <span className="profile__text">Update</span>
              <FaChevronRight className="logIn__buttonIcon" />
            </button>
            <button onClick={goHome} className="profile__submit">
              <span className="profile__text">Home</span>
              <FaChevronRight className="logIn__buttonIcon" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;

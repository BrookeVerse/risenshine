import "./Header.scss";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import profile from "../../assets/images/profile.jpg";

const Header = () => {
  const date = new Date();
  const current_date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  const current_time = date.getHours() + ":" + date.getMinutes();
  return (
    <header className="header">
      <div className="header__layout">
        <h2 className="header__title">Rise 'n' Shine</h2>
        <ProfileHeader image={profile} name={"Brooke"} date={current_date} time={current_time} />
      </div>
    </header>
  );
};

export default Header;

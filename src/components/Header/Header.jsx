import "./Header.scss";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import profile from "../../assets/images/profile.jpg";

const Header = () => {
    const date = new Date();
    const current_date = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();
    const current_time = date.getHours()+":"+ date.getMinutes();
  return (
    <header>
        <h2>Rise 'n' Shine</h2>
        <ProfileHeader image={profile} name={"Brooke"} date={current_date} time={current_time}/>
    </header>
  )
}

export default Header
import "./Welcome.scss";
import sunrise from "../../assets/images/sunrise.png";
import sun from "../../assets/images/sun.png";
import moon from "../../assets/images/moon.png";

export const Welcome = ({ user }) => {
  const currentHour = new Date().getHours();
  let greetingImg = sunrise;
  let greetingTime = "Moring";

  if (currentHour >= 12) {
    greetingImg = sun;
    greetingTime = "Afternoon";
  }
  if (currentHour >= 18) {
    greetingImg = moon;
    greetingTime = "Evening";
  }
  return (
    <div className="Welcome">
      <img src={greetingImg} alt={greetingTime} />
      <h2 className="Welcome__title">Good {greetingTime}</h2>
      {user != null && <h2 className="Welcome__userName">{user.displayName}</h2>}
    </div>
  );
};

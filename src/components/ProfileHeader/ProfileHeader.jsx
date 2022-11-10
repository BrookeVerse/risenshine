import "./ProfileHeader.scss";

const ProfileHeader = ({ name, image, date, time }) => {
  return (
    <div className="profileHeader">
      <img src={image} alt="" className="profileHeader__image" />
      <div>
        <h3>{name}</h3>
        <p>{date}</p>
        <p>{time}</p>
      </div>
    </div>
  );
};

export default ProfileHeader;

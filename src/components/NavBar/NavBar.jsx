import "./NavBar.scss";

import { GrMapLocation, GrNotes, GrUser } from "react-icons/gr";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar">
      <h2 className="navBar__title">
        Rise 'n' Shine <span>Morning Routine</span>
      </h2>

      <input id="burger" type="checkbox" className="navBar__input" />

      <label for="burger" className="navBar__label">
        <span></span>
        <span></span>
        <span></span>
      </label>

      <nav>
        <ul>
          <li>
            <Link to={"/map"}>
              <GrMapLocation className="navBar__icon" />
              <span>Map</span>
            </Link>
          </li>
          <li>
            <Link to={"/affirmations"}>
                <GrNotes className="navBar__icon"/>
              <span>Edit Affirmations</span>
            </Link>
          </li>
          <li>
            <Link to={"/profile"}>
                <GrUser className="navBar__icon" />
            <span>Profile</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;

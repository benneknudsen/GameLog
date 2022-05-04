import React from "react";
import { Link } from "react-router-dom";
import "/Users/benjamin/Documents/GameLog/GameLog/gamelog/src/styles/navbar.scss";
import logo from "/Users/benjamin/Documents/GameLog/GameLog/gamelog/src/gamelog-icon.png";

const Header = () => {
  return (
    <div className="navigationbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/games">Games</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </div>
    </div>
  );
};
export default Header;

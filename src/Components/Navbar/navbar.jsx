import React from "react";
import "./navbar.css";
import Menu_Icon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import SearchIcon from "../../assets/search.png";
import Upload_icon from "../../assets/upload.png";
import More_icon from "../../assets/more.png";
import Notification_icon from "../../assets/notification.png";
import Profile_icon from "../../assets/jack.png";
const navbar = () => {
  return (
    <nav>
      <div className="flex-div">
        <div className="nav-lest flex-div">
          <img className="menu-icon" src={Menu_Icon} alt="" />
          <img className="logo" src={logo} alt="" />
        </div>
        <div className="nav-middle flex-div">
          <input type="text" placeholder="Search" />
          <img src={SearchIcon} alt="" />
        </div>
        <div className="nav-right flex-div">
          <img src={Upload_icon} alt="" />
          <img src={More_icon} alt="" />
          <img src={Notification_icon} alt="" />
          <img src={Profile_icon} alt="" className="user-icon" />
        </div>
      </div>
    </nav>
  );
};

export default navbar;

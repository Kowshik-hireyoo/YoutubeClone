import React from "react";
import "./navbar.css";
import Menu_Icon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import SearchIcon from "../../assets/search.png";
import Upload_icon from "../../assets/upload.png";
import More_icon from "../../assets/more.png";
import Notification_icon from "../../assets/notification.png";
import Profile_icon from "../../assets/jack.png";
const navbar = ({ setSidebar }) => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img
          className="menu-icon"
          onClick={() => setSidebar((prev) => (prev === false ? true : false))}
          src={Menu_Icon}
          alt=""
        />
        <img className="logo" src={logo} alt="" />
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <img src={SearchIcon} alt="" />
        </div>
      </div>

      <div className="nav-right flex-div">
        <img src={Upload_icon} alt="" />
        <img src={More_icon} alt="" />
        <img src={Notification_icon} alt="" />
        <img src={Profile_icon} alt="" className="user-icon" />
      </div>
    </nav>
  );
};

export default navbar;

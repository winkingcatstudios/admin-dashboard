import React, { useContext } from "react";
import { NotificationsNone, Language, ArrowDropDown } from "@material-ui/icons";

import { AuthContext } from "../../context/auth-context";
import "./topbar.scss";

export default function Topbar() {
  const auth = useContext(AuthContext);

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Dice Cats Admin Console</span>
        </div>
        <div className="topRight">
          {/* <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <img
            src="https://whatsondisneyplus.com/wp-content/uploads/2020/12/the-Ghost-of-Christmas-Present-1024x559.jpg"
            alt=""
            className="topAvatar"
          /> */}
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              {/* <Link to="/" className="link"> */}
              <span>Settings</span>
              {/* </Link> */}
              <span onClick={auth.logout}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

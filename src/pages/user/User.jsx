import React from "react";
import {
  PermIdentity,
  CalendarToday,
  PhoneAndroid,
  MailOutline,
  LocationSearching,
  Publish,
} from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

import "./user.css";

export default function User() {
  const location = useLocation();
  const { user } = location.state;

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="productListAddButton">Create User</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userDisplay">
          <div className="userDisplayBottom">
            <span className="userDisplayTitle">Account Details</span>
            <div className="userDisplayInfo">
              <PermIdentity className="userDisplayIcon" />
              <span className="userDisplayInfoTitle">{user.name}</span>
            </div>
            <div className="userDisplayInfo">
              <MailOutline className="userDisplayIcon" />
              <span className="userDisplayInfoTitle">i{user.email}</span>
            </div>
            <span className="userDisplayTitle">Signed Up</span>
            <div className="userDisplayInfo">
              <CalendarToday className="userDisplayIcon" />
              <span className="userDisplayInfoTitle">{user.createdAt}</span>
            </div>
            <span className="userDisplayTitle">Last Modified</span>
            <div className="userDisplayInfo">
              <CalendarToday className="userDisplayIcon" />
              <span className="userDisplayInfoTitle">{user.updatedAt}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Name</label>
                <input
                  type="text"
                  placeholder={user.name}
                  className="userUpdateInput"
                ></input>
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder={user.email}
                  className="userUpdateInput"
                ></input>
              </div>
              <div className="userUpdateItem">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="userUpdateInput"
                ></input>
              </div>
            </div>
            <div className="userUpdateRight">
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

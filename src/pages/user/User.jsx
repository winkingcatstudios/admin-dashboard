import React, { useContext, useState } from "react";
import {
  PermIdentity,
  CalendarToday,
  PhoneAndroid,
  MailOutline,
  LocationSearching,
  Publish,
  LocalOfferOutlined,
} from "@material-ui/icons";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { getUsers } from "../../context/userContext/apiCalls";
import { UserContext } from "../../context/userContext/UserContext";
import { updateUser } from "../../context/userContext/apiCalls";
import "./user.css";

export default function User() {
  const location = useLocation();
  const { user } = location.state;
  const navigate = useNavigate();
  const { dispatch } = useContext(UserContext);
  const [updatedUser, setUpdatedUser] = useState({
    name: user.name,
    email: user.email,
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setUpdatedUser({ ...updatedUser, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const jsonUser = JSON.stringify({
      name: updatedUser.name,
      email: updatedUser.email,
    });

    updateUser(user.id, jsonUser, dispatch);
    navigate("/users");
  };

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">User</h1>
        <Link to="/newUser">
          <button className="productListAddButton">Create User</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userDisplay">
          <div className="userDisplayBottom">
            <span className="userDisplayTitle">Account Details</span>
            <div className="userDisplayInfo">
              <LocalOfferOutlined className="userDisplayIcon" />
              <span className="userDisplayInfoTitle">{user.id}</span>
            </div>
            <div className="userDisplayInfo">
              <PermIdentity className="userDisplayIcon" />
              <span className="userDisplayInfoTitle">{user.name}</span>
            </div>
            <div className="userDisplayInfo">
              <MailOutline className="userDisplayIcon" />
              <span className="userDisplayInfoTitle">{user.email}</span>
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
          <form className="newUserForm">
            <div className="formLeft">
              <div className="addProductItem">
                <label>Name</label>
                <input
                  type="text"
                  placeholder={user.name}
                  name="name"
                  onChange={handleChange}
                />
              </div>
              <div className="addProductItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder={user.email}
                  name="email"
                  onChange={handleChange}
                />
              </div>
              <button className="newUserButton" onClick={handleSubmit}>
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

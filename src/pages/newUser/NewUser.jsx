import React from "react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getUsers } from "../../context/userContext/apiCalls";
import { UserContext } from "../../context/userContext/UserContext";
import { createUser } from "../../context/userContext/apiCalls";

import "./newUser.css";

export default function NewUser() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const { dispatch } = useContext(UserContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const jsonUser = JSON.stringify({
      name: user.name,
      email: user.email,
      password: user.password,
    });

    createUser(jsonUser, dispatch);
    navigate("/users");
  };

  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="formLeft">
          <div className="addProductItem">
            <label>Name</label>
            <input
              type="text"
              placeholder="username"
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Email</label>
            <input
              type="text"
              placeholder="example@example.com"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
          </div>

          <button className="newUserButton" onClick={handleSubmit}>
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

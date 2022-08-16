import React from "react";
import { Visibility } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import "./widgetSm.css";

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/users?new=true`,
          {
            headers: {
              Authorization:
                "Bearer " + JSON.parse(localStorage.getItem("userData")).token,
            },
          }
        );
        setNewUsers(response.data.users);
      } catch (err) {
        console.log(err);
      }
    };
    getNewUsers();
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Newly Created Users</span>
      <ul className="widgetSmList">
        {newUsers.map((user) => (
          <li className="widgetSmallListItem" key={user.id}>
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.createdAt}</span>
            </div>
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.name}</span>
            </div>
            <button onClick={() =>
                navigate("/users/" + user.id, {
                  state: { user: user },
                })
              }
              className="widgetSmButton"
            >
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

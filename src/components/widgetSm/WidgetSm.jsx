import React from "react";
import { Visibility } from "@material-ui/icons";

import "./widgetSm.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/users?new=true",
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmYxYjM5OGViNDIxMTEzYmQxY2QzZmEiLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2NjAxNDYwNzUsImV4cCI6MTY2MDIzMjQ3NX0.g9IlhhJtsYYXKge5kQsEEjjPmapqTcSfkxecv5RK4Y0",
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
      <span className="widgetSmTitle">Newly Joined Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user) => (
          <li className="widgetSmallListItem">
            <img
              src={
                user.profilePic ||
                "https://upload.wikimedia.org/wikipedia/en/6/62/Kermit_the_Frog.jpg"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.name}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

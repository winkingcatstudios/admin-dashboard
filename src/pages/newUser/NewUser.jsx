import React from "react";

import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="dkercher" />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="Dan Kercher" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="info@email.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 7890" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="New York, USA" />
        </div>
        <div className="newUserItem">
          <label>Has Cat?</label>
          <div className="newUserRadio">
            <input type="radio" name="textable" id="yes" value="yes" />
            <label for="yes">Yes</label>
            <input type="radio" name="textable" id="no" value="no" />
            <label for="no">No</label>
            <input type="radio" name="textable" id="maybe" value="maybe" />
            <label for="maybe">Maybe</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">NO</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}

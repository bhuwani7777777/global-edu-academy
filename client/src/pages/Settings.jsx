import React, { useState } from "react";
import "./AdminPages.css";

export default function Settings() {

  const [schoolName, setSchoolName] = useState("Global Educational Academy");

  return (
    <div className="admin-page">
      <h1>⚙ Settings</h1>

      <div className="settings-card">

        <label>School Name</label>
        <input
          value={schoolName}
          onChange={(e) => setSchoolName(e.target.value)}
        />

        <label>Email</label>
        <input placeholder="school@email.com" />

        <label>Phone</label>
        <input placeholder="+977-98XXXXXXXX" />

        <button className="save-btn">Save Changes</button>

      </div>
    </div>
  );
}
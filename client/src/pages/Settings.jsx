import React, { useState } from "react";

import {
  FaHome,
  FaUsers,
  FaChalkboardTeacher,
  FaUserPlus,
  FaMoneyBillWave,
  FaCog,
  FaBars,
  FaSearch,
  FaBell,
  FaSave,
  FaUniversity,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

import "./AdminPages.css";

export default function Settings() {

  const [schoolName, setSchoolName] = useState("Global Educational Academy");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSave = () => {
    alert("Settings saved successfully ✔");
  };

  return (
    <div className="dashboard-layout">

      {/* OVERLAY */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* SIDEBAR */}
      <aside className={`sidebar ${sidebarOpen ? "show-sidebar" : ""}`}>

        <div className="brand">
          <div className="brand-logo">🎓</div>
          <div>
            <h2>Global Academy</h2>
            <p>Admin Panel</p>
          </div>
        </div>

        <nav className="sidebar-menu">

          <a href="/admin">
            <FaHome /> Dashboard
          </a>

          <a href="/admin/students">
            <FaUsers /> Students
          </a>

          <a href="/admin/teachers">
            <FaChalkboardTeacher /> Teachers
          </a>

          <a href="/admin/admissions">
            <FaUserPlus /> Admissions
          </a>

          <a href="/admin/payments">
            <FaMoneyBillWave /> Payments
          </a>

          <a href="/admin/settings" className="active">
            <FaCog /> Settings
          </a>

        </nav>

      </aside>

      {/* MAIN */}
      <main className="main-content">

        {/* TOPBAR */}
        <div className="topbar">

          <div className="topbar-left">

            <button
              className="menu-toggle"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <FaBars />
            </button>

            <div>
              <h1>Settings</h1>
              <p>Manage system configuration</p>
            </div>

          </div>

          <div className="topbar-right">

            <div className="search-box">
              <FaSearch className="search-icon" />
              <input placeholder="Search settings..." />
            </div>

            <button className="notification-btn">
              <FaBell />
            </button>

          </div>

        </div>

        {/* SETTINGS CARD */}
        <div className="settings-card">

          <div className="settings-header">
            <FaUniversity />
            <h2>School Information</h2>
          </div>

          <div className="form-grid">

            <div className="input-group">

              <FaUniversity />

              <input
                value={schoolName}
                onChange={(e) => setSchoolName(e.target.value)}
              />

              <label>School Name</label>

            </div>

            <div className="input-group">

              <FaEnvelope />

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="school@email.com"
              />

              <label>Email Address</label>

            </div>

            <div className="input-group">

              <FaPhone />

              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+977-98XXXXXXXX"
              />

              <label>Phone Number</label>

            </div>

          </div>

          <button className="save-btn" onClick={handleSave}>
            <FaSave />
            Save Changes
          </button>

        </div>

      </main>

    </div>
  );
}
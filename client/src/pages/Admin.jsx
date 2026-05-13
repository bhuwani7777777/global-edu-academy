import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

import {
  FaHome,
  FaUsers,
  FaChalkboardTeacher,
  FaUserPlus,
  FaMoneyBillWave,
  FaCog,
  FaBars,
} from "react-icons/fa";

import "./Admin.css";

export default function Admin() {
  const [open, setOpen] = useState(false);

  return (
    <div className="admin-layout">

      {/* SIDEBAR */}
      <aside className={`sidebar ${open ? "active" : ""}`}>

        <div className="brand">
          🎓 <span>Global Academy</span>
        </div>

        <nav>
          <Link to="/admindashboard" className="nav-item">
            <FaHome /> Dashboard
          </Link>

          <Link to="/admin/students" className="nav-item">
            <FaUsers /> Students
          </Link>

          <Link to="/admin/teachers" className="nav-item">
            <FaChalkboardTeacher /> Teachers
          </Link>

          <Link to="/adminadmissions" className="nav-item">
            <FaUserPlus /> Admissions
          </Link>

          <Link to="/admin/payments" className="nav-item">
            <FaMoneyBillWave /> Payments
          </Link>

          <Link to="/admin/settings" className="nav-item">
            <FaCog /> Settings
          </Link>

        </nav>
      </aside>

      {/* MAIN AREA */}
      <main className="main">

        {/* TOPBAR */}
        <div className="topbar">

          <button className="menu-btn" onClick={() => setOpen(!open)}>
            <FaBars />
          </button>

          <h2>Admin Panel</h2>

        </div>

        {/* PAGE CONTENT */}
        <div className="content">
          <Outlet />
        </div>

      </main>

    </div>
  );
}
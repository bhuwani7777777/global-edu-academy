import React, { useState } from "react";

import {
  FaChalkboardTeacher,
  FaSearch,
  FaPlus,
  FaBars,
  FaSchool,
  FaUsers,
  FaUserGraduate,
  FaMoneyBillWave,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

import "./Teachers.css";

export default function Teachers() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");

  const teachers = [
    {
      name: "Ram Sharma",
      subject: "Mathematics",
      email: "ram@gmail.com",
      phone: "9800000001",
    },
    {
      name: "Sita Rai",
      subject: "Science",
      email: "sita@gmail.com",
      phone: "9800000002",
    },
    {
      name: "Hari KC",
      subject: "English",
      email: "hari@gmail.com",
      phone: "9800000003",
    },
    {
      name: "Anita Gurung",
      subject: "Computer",
      email: "anita@gmail.com",
      phone: "9800000004",
    },
  ];

  const filteredTeachers = teachers.filter(
    (t) =>
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="teachers-layout">

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
            <FaSchool /> Dashboard
          </a>

          <a href="/admin/students">
            <FaUsers /> Students
          </a>

          <a href="/admin/teachers" className="active">
            <FaChalkboardTeacher /> Teachers
          </a>

          <a href="/admin/admissions">
            <FaUserGraduate /> Admissions
          </a>

          <a href="/admin/payments">
            <FaMoneyBillWave /> Payments
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
              <h1>Teachers</h1>
              <p>Manage teacher information</p>
            </div>

          </div>

          <div className="topbar-right">

            <div className="search-box">

              <FaSearch className="search-icon" />

              <input
                type="text"
                placeholder="Search teachers..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

            </div>

            <button className="add-btn">
              <FaPlus />
              Add Teacher
            </button>

          </div>

        </div>

        {/* STATS */}
        <div className="teacher-stats">

          <div className="stat-card">
            <h2>{teachers.length}</h2>
            <p>Total Teachers</p>
          </div>

          <div className="stat-card">
            <h2>12</h2>
            <p>Departments</p>
          </div>

          <div className="stat-card">
            <h2>98%</h2>
            <p>Attendance</p>
          </div>

          <div className="stat-card">
            <h2>15</h2>
            <p>New Hires</p>
          </div>

        </div>

        {/* TEACHERS GRID */}
        <div className="teachers-grid">

          {filteredTeachers.map((teacher, index) => (

            <div className="teacher-card" key={index}>

              <div className="teacher-avatar">
                {teacher.name.charAt(0)}
              </div>

              <h2>{teacher.name}</h2>

              <p className="subject">
                {teacher.subject} Teacher
              </p>

              <div className="teacher-info">

                <div className="info-row">
                  <FaEnvelope />
                  <span>{teacher.email}</span>
                </div>

                <div className="info-row">
                  <FaPhone />
                  <span>{teacher.phone}</span>
                </div>

              </div>

              <button className="view-btn">
                View Profile
              </button>

            </div>

          ))}

        </div>

      </main>

    </div>
  );
}
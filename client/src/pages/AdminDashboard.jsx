// AdminDashboard.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  FaUsers,
  FaChalkboardTeacher,
  FaMoneyBillWave,
  FaSchool,
  FaBell,
  FaSearch,
  FaPlus,
  FaBars,
  FaUserGraduate,
  FaChartLine,
  FaClipboardCheck,
  FaClock,
} from "react-icons/fa";

import "./AdminDashboard.css";

export default function AdminDashboard() {

  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {

    axios
      .get("http://localhost:5000/api/students")
      .then((res) => setStudents(res.data))
      .catch((err) => console.log(err));

  }, []);

  const filteredStudents = students.filter(
    (s) =>
      s.name?.toLowerCase().includes(search.toLowerCase()) ||
      s.className?.toLowerCase().includes(search.toLowerCase()) ||
      s.email?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dashboard-layout">

      {/* MOBILE OVERLAY */}
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
            <p>Admin Dashboard</p>
          </div>

        </div>

        <nav className="sidebar-menu">

          <a href="/admin" className="active">
            <FaSchool /> Dashboard
          </a>

          <a href="/admin/students">
            <FaUsers /> Students
          </a>

          <a href="/admin/teachers">
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
              <h1>Admin Dashboard</h1>
              <p>Welcome back 👋 Manage your school efficiently</p>
            </div>

          </div>

          <div className="topbar-right">

            <div className="search-box">

              <FaSearch className="search-icon" />

              <input
                type="text"
                placeholder="Search students..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

            </div>

            <button className="notification-btn">
              <FaBell />
            </button>

            <button className="add-btn">
              <FaPlus />
              Add Student
            </button>

          </div>

        </div>

        {/* STATS */}
        <div className="stats-grid">

          <div className="stat-card">

            <div className="stat-icon blue">
              <FaUsers />
            </div>

            <div>
              <h3>{students.length}</h3>
              <p>Total Students</p>
            </div>

          </div>

          <div className="stat-card">

            <div className="stat-icon purple">
              <FaChalkboardTeacher />
            </div>

            <div>
              <h3>25</h3>
              <p>Total Teachers</p>
            </div>

          </div>

          <div className="stat-card">

            <div className="stat-icon green">
              <FaClipboardCheck />
            </div>

            <div>
              <h3>92%</h3>
              <p>Attendance</p>
            </div>

          </div>

          <div className="stat-card">

            <div className="stat-icon orange">
              <FaMoneyBillWave />
            </div>

            <div>
              <h3>Rs. 85K</h3>
              <p>Total Revenue</p>
            </div>

          </div>

        </div>

        {/* EXTRA CARDS */}
        <div className="analytics-grid">

          <div className="analytics-card">

            <div className="analytics-header">
              <h2>School Performance</h2>
              <FaChartLine />
            </div>

            <div className="progress-item">

              <div className="progress-title">
                <span>Exam Result</span>
                <span>88%</span>
              </div>

              <div className="progress-bar">
                <div className="progress-fill blue-fill"></div>
              </div>

            </div>

            <div className="progress-item">

              <div className="progress-title">
                <span>Attendance</span>
                <span>92%</span>
              </div>

              <div className="progress-bar">
                <div className="progress-fill green-fill"></div>
              </div>

            </div>

            <div className="progress-item">

              <div className="progress-title">
                <span>Assignments</span>
                <span>80%</span>
              </div>

              <div className="progress-bar">
                <div className="progress-fill purple-fill"></div>
              </div>

            </div>

          </div>

          {/* ACTIVITY */}
          <div className="analytics-card">

            <div className="analytics-header">
              <h2>Recent Activities</h2>
              <FaClock />
            </div>

            <div className="activity-list">

              <div className="activity-item">
                <div className="activity-dot blue-bg"></div>
                <div>
                  <h4>New Admission</h4>
                  <p>Ram Sharma applied for Grade 10</p>
                </div>
              </div>

              <div className="activity-item">
                <div className="activity-dot green-bg"></div>
                <div>
                  <h4>Fee Paid</h4>
                  <p>Sita Rai paid school fee</p>
                </div>
              </div>

              <div className="activity-item">
                <div className="activity-dot purple-bg"></div>
                <div>
                  <h4>New Teacher Added</h4>
                  <p>Computer Teacher added</p>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* STUDENT TABLE */}
        <div className="table-card">

          <div className="table-header">

            <div>
              <h2>Recent Students</h2>
              <p>Latest student records</p>
            </div>

            <button className="view-btn">
              View All
            </button>

          </div>

          <div className="table-wrapper">

            <table>

              <thead>

                <tr>
                  <th>#</th>
                  <th>Student</th>
                  <th>Class</th>
                  <th>Email</th>
                  <th>Status</th>
                </tr>

              </thead>

              <tbody>

                {filteredStudents.length > 0 ? (

                  filteredStudents.map((s, i) => (

                    <tr key={i}>

                      <td>{i + 1}</td>

                      <td>

                        <div className="student-info">

                          <div className="student-avatar">
                            {s.name?.charAt(0)}
                          </div>

                          <div>
                            <h4>{s.name}</h4>
                            <p>Student ID: #{1000 + i}</p>
                          </div>

                        </div>

                      </td>

                      <td>{s.className}</td>

                      <td>{s.email}</td>

                      <td>
                        <span className="status active-status">
                          Active
                        </span>
                      </td>

                    </tr>

                  ))

                ) : (

                  <tr>
                    <td colSpan="5" className="no-data">
                      No students found
                    </td>
                  </tr>

                )}

              </tbody>

            </table>

          </div>

        </div>

      </main>

    </div>
  );
}
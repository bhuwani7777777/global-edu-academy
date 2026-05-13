import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  FaUsers,
  FaSearch,
  FaPlus,
  FaBars,
  FaSchool,
  FaChalkboardTeacher,
  FaMoneyBillWave,
  FaUserGraduate,
} from "react-icons/fa";

import "./Students.css";

export default function Students() {

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
    <div className="students-layout">

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

          <a href="/admin/students" className="active">
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
              <h1>Students</h1>
              <p>Manage all student records</p>
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

            <button className="add-btn">
              <FaPlus />
              Add Student
            </button>

          </div>

        </div>

        {/* STATS */}
        <div className="student-stats">

          <div className="stat-card">
            <h2>{students.length}</h2>
            <p>Total Students</p>
          </div>

          <div className="stat-card">
            <h2>15</h2>
            <p>Classes</p>
          </div>

          <div className="stat-card">
            <h2>92%</h2>
            <p>Attendance</p>
          </div>

          <div className="stat-card">
            <h2>120</h2>
            <p>New Admissions</p>
          </div>

        </div>

        {/* TABLE */}
        <div className="table-card">

          <div className="table-header">

            <div>
              <h2>Student Records</h2>
              <p>All registered students</p>
            </div>

          </div>

          <div className="table-wrapper">

            <table>

              <thead>

                <tr>
                  <th>#</th>
                  <th>Student</th>
                  <th>Class</th>
                  <th>Age</th>
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
                            <p>ID: #{1000 + i}</p>
                          </div>

                        </div>

                      </td>

                      <td>{s.className}</td>

                      <td>{s.age}</td>

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
                    <td colSpan="6" className="no-data">
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
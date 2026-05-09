import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

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
    <div className="admin-dashboard">

      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="logo-section">
          <div className="logo-circle">🎓</div>

          <div>
            <h2>Global Academy</h2>
            <p>Admin Panel</p>
          </div>
        </div>

        <nav className="menu">
          <a href="/" className="active">🏠 Dashboard</a>
          <a href="/">👨‍🎓 Students</a>
          <a href="/">👩‍🏫 Teachers</a>
          <a href="/">📚 Classes</a>
          <a href="/">💰 Payments</a>
          <a href="/">⚙ Settings</a>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="main-content">

        {/* TOPBAR */}
        <div className="topbar">

          <div>
            <h1>Admin Dashboard</h1>
            <p>Manage students and school activities</p>
          </div>

          <div className="top-actions">
            <input
              type="text"
              placeholder="Search students..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button>+ Add Student</button>
          </div>
        </div>

        {/* STATS */}
        <div className="stats-grid">

          <div className="stat-card">
            <h3>{students.length}</h3>
            <p>Total Students</p>
          </div>

          <div className="stat-card">
            <h3>32</h3>
            <p>Teachers</p>
          </div>

          <div className="stat-card">
            <h3>15</h3>
            <p>Classes</p>
          </div>

          <div className="stat-card">
            <h3>98%</h3>
            <p>Attendance</p>
          </div>

        </div>

        {/* TABLE CARD */}
        <div className="table-card">

          <div className="table-header">
            <h2>Student Records</h2>
          </div>

          <div className="table-wrapper">

            <table>

              <thead>
                <tr>
                  <th>#</th>
                  <th>Student Name</th>
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
                      <td>{s.name}</td>
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
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Admin.css";

export default function Admin() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/students")
      .then(res => setStudents(res.data))
      .catch(err => console.log(err));
  }, []);

  const filtered = students.filter(
    (s) =>
      s.name?.toLowerCase().includes(search.toLowerCase()) ||
      s.className?.toLowerCase().includes(search.toLowerCase()) ||
      s.email?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="admin-layout">

      {/* SIDEBAR */}
      <aside className="sidebar">

        <div className="brand">
          🎓 <span>Global Academy</span>
        </div>

        <nav>
          <a className="active">Dashboard</a>
          <a href="/admin/students">Students</a>
          <a href="/admin/teachers">Teachers</a>
          <a href="/admin/admissions">Admissions</a>
          <a href="/admin/payments">Payments</a>
          <a href="/admin/settings">Settings</a>
        </nav>

      </aside>

      {/* MAIN CONTENT */}
      <main className="main">

        {/* TOP BAR */}
        <div className="topbar">

          <div>
            <h1>Admin Dashboard</h1>
            <p>Manage your school system efficiently</p>
          </div>

          <input
            type="text"
            placeholder="Search students..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        {/* STATS */}
        <div className="stats">

          <div className="stat-card">
            <h2>{students.length}</h2>
            <p>Total Students</p>
          </div>

          <div className="stat-card">
            <h2>25</h2>
            <p>Teachers</p>
          </div>

          <div className="stat-card">
            <h2>15</h2>
            <p>Classes</p>
          </div>

          <div className="stat-card">
            <h2>92%</h2>
            <p>Attendance</p>
          </div>

        </div>

        {/* TABLE */}
        <div className="table-container">

          <h2>Recent Students</h2>

          <table>

            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Class</th>
                <th>Age</th>
                <th>Email</th>
              </tr>
            </thead>

            <tbody>

              {filtered.map((s, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{s.name}</td>
                  <td>{s.className}</td>
                  <td>{s.age}</td>
                  <td>{s.email}</td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </main>

    </div>
  );
}
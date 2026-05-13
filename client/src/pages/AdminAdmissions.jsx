import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  FaUserGraduate,
  FaSearch,
  FaBars,
  FaSchool,
  FaUsers,
  FaChalkboardTeacher,
  FaMoneyBillWave,
  FaCog,
  FaCheckCircle,
  FaTimesCircle,
  FaClock,
  FaEye,
  FaPlus,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "./AdminAdmissions.css";

export default function AdminAdmissions() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [search, setSearch] = useState("");

  const [admissions, setAdmissions] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    axios
      .get("http://localhost:5000/api/admissions")

      .then((res) => {

        setAdmissions(res.data);
        setLoading(false);

      })

      .catch((err) => {

        console.log(err);
        setLoading(false);

      });

  }, []);

  /* FILTER */

  const filteredAdmissions = admissions.filter(
    (a) =>
      a.name?.toLowerCase().includes(search.toLowerCase()) ||
      a.classApplied?.toLowerCase().includes(search.toLowerCase()) ||
      a.fatherName?.toLowerCase().includes(search.toLowerCase()) ||
      a.guardianPhone?.includes(search)
  );

  return (
    <div className="admin-admissions-layout">

      {/* MOBILE OVERLAY */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* SIDEBAR */}
      <aside className={`sidebar ${sidebarOpen ? "show-sidebar" : ""}`}>

        {/* LOGO */}
        <div className="brand-section">

          <div className="brand-logo">
            🎓
          </div>

          <div>
            <h2>Global Academy</h2>
            <p>School Admin Panel</p>
          </div>

        </div>

        {/* MENU */}
        <nav className="sidebar-menu">

          <a href="/admin">
            <FaSchool />
            Dashboard
          </a>

          <a href="/admin/students">
            <FaUsers />
            Students
          </a>

          <a href="/admin/teachers">
            <FaChalkboardTeacher />
            Teachers
          </a>

          <a href="/admin/admissions" className="active">
            <FaUserGraduate />
            Admissions
          </a>

          <a href="/admin/payments">
            <FaMoneyBillWave />
            Payments
          </a>

          <a href="/admin/settings">
            <FaCog />
            Settings
          </a>

        </nav>

      </aside>

      {/* MAIN CONTENT */}
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
              <h1>Admissions Management</h1>
              <p>
                Manage all student admission requests and applications
              </p>
            </div>

          </div>

          <div className="topbar-right">

            {/* SEARCH */}
            <div className="search-box">

              <FaSearch className="search-icon" />

              <input
                type="text"
                placeholder="Search admissions..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

            </div>

            {/* BUTTON */}
            <button className="add-btn">

              <FaPlus />

              Add Admission

            </button>

          </div>

        </div>

        {/* STATS */}
        <div className="stats-grid">

          <div className="stat-card total-card">

            <div>
              <h2>{admissions.length}</h2>
              <p>Total Applications</p>
            </div>

            <FaUserGraduate className="stat-icon" />

          </div>

          <div className="stat-card approved-card">

            <div>
              <h2>25</h2>
              <p>Approved</p>
            </div>

            <FaCheckCircle className="stat-icon" />

          </div>

          <div className="stat-card pending-card">

            <div>
              <h2>10</h2>
              <p>Pending</p>
            </div>

            <FaClock className="stat-icon" />

          </div>

          <div className="stat-card rejected-card">

            <div>
              <h2>5</h2>
              <p>Rejected</p>
            </div>

            <FaTimesCircle className="stat-icon" />

          </div>

        </div>

        {/* TABLE SECTION */}
        <div className="table-card">

          {/* TABLE HEADER */}
          <div className="table-header">

            <div>
              <h2>Admission Requests</h2>
              <p>
                View and manage all student admission applications
              </p>
            </div>

            <button className="export-btn">
              Export Data
            </button>

          </div>

          {/* TABLE */}
          <div className="table-wrapper">

            <table>

              <thead>

                <tr>

                  <th>#</th>

                  <th>Student</th>

                  <th>Class</th>

                  <th>Guardian</th>

                  <th>Contact</th>

                  <th>Location</th>

                  <th>Status</th>

                  <th>Actions</th>

                </tr>

              </thead>

              <tbody>

                {loading ? (

                  <tr>

                    <td colSpan="8" className="loading-text">
                      Loading admissions...
                    </td>

                  </tr>

                ) : filteredAdmissions.length > 0 ? (

                  filteredAdmissions.map((admission, index) => (

                    <tr key={index}>

                      <td>
                        #{index + 1}
                      </td>

                      {/* STUDENT */}
                      <td>

                        <div className="student-info">

                          <div className="student-avatar">
                            {admission.name?.charAt(0)}
                          </div>

                          <div>

                            <h4>
                              {admission.name}
                            </h4>

                            <p>
                              Applicant
                            </p>

                          </div>

                        </div>

                      </td>

                      {/* CLASS */}
                      <td>

                        <span className="class-badge">
                          {admission.classApplied}
                        </span>

                      </td>

                      {/* GUARDIAN */}
                      <td>

                        <div className="guardian-info">

                          <h4>
                            {admission.fatherName}
                          </h4>

                          <p>
                            Parent / Guardian
                          </p>

                        </div>

                      </td>

                      {/* CONTACT */}
                      <td>

                        <div className="contact-info">

                          <div>
                            <FaPhone />
                            {admission.guardianPhone}
                          </div>

                          <div>
                            <FaEnvelope />
                            {admission.email || "N/A"}
                          </div>

                        </div>

                      </td>

                      {/* LOCATION */}
                      <td>

                        <div className="location-info">

                          <FaMapMarkerAlt />

                          <span>
                            {admission.address || "Damak"}
                          </span>

                        </div>

                      </td>

                      {/* STATUS */}
                      <td>

                        <span className="status pending-status">

                          <FaClock />

                          Pending

                        </span>

                      </td>

                      {/* ACTIONS */}
                      <td>

                        <div className="action-buttons">

                          <button className="view-btn">

                            <FaEye />

                          </button>

                          <button className="approve-btn">

                            <FaCheckCircle />

                          </button>

                          <button className="reject-btn">

                            <FaTimesCircle />

                          </button>

                        </div>

                      </td>

                    </tr>

                  ))

                ) : (

                  <tr>

                    <td colSpan="8" className="no-data">
                      No admission records found
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
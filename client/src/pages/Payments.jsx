// Payments.jsx

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
  FaPlus,
  FaCheckCircle,
  FaClock,
  FaWallet,
  FaChartLine,
} from "react-icons/fa";

import "./AdminPages.css";

export default function Payments() {

  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const payments = [
    {
      name: "Ram Sharma",
      amount: "5000",
      status: "Paid",
      method: "eSewa",
      className: "Grade 10",
    },

    {
      name: "Sita Rai",
      amount: "3000",
      status: "Pending",
      method: "Khalti",
      className: "Grade 8",
    },

    {
      name: "Hari KC",
      amount: "4500",
      status: "Paid",
      method: "Cash",
      className: "Grade 9",
    },

    {
      name: "Anita Gurung",
      amount: "6000",
      status: "Pending",
      method: "Bank Transfer",
      className: "Grade 11",
    },
  ];

  const filteredPayments = payments.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.status.toLowerCase().includes(search.toLowerCase()) ||
      p.method.toLowerCase().includes(search.toLowerCase())
  );

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

          <a href="/admin/payments" className="active">
            <FaMoneyBillWave /> Payments
          </a>

          <a href="/admin/settings">
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
              <h1>Payments Management</h1>
              <p>Manage school fees and transactions</p>
            </div>

          </div>

          <div className="topbar-right">

            <div className="search-box">

              <FaSearch className="search-icon" />

              <input
                type="text"
                placeholder="Search payments..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

            </div>

            <button className="notification-btn">
              <FaBell />
            </button>

            <button className="add-btn">
              <FaPlus />
              Add Payment
            </button>

          </div>

        </div>

        {/* STATS */}
        <div className="stats-grid">

          <div className="stat-card">

            <div className="stat-icon green">
              <FaWallet />
            </div>

            <div>
              <h3>Rs. 18K</h3>
              <p>Total Collection</p>
            </div>

          </div>

          <div className="stat-card">

            <div className="stat-icon blue">
              <FaCheckCircle />
            </div>

            <div>
              <h3>2</h3>
              <p>Paid Payments</p>
            </div>

          </div>

          <div className="stat-card">

            <div className="stat-icon orange">
              <FaClock />
            </div>

            <div>
              <h3>2</h3>
              <p>Pending Payments</p>
            </div>

          </div>

          <div className="stat-card">

            <div className="stat-icon purple">
              <FaChartLine />
            </div>

            <div>
              <h3>85%</h3>
              <p>Collection Rate</p>
            </div>

          </div>

        </div>

        {/* TABLE */}
        <div className="table-container">

          <div className="table-header">

            <div>
              <h2>Payment Records</h2>
              <p>Recent school fee transactions</p>
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
                  <th>Amount</th>
                  <th>Method</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>

                {filteredPayments.length > 0 ? (

                  filteredPayments.map((p, i) => (

                    <tr key={i}>

                      <td>{i + 1}</td>

                      <td>

                        <div className="student-info">

                          <div className="student-avatar">
                            {p.name.charAt(0)}
                          </div>

                          <div>
                            <h4>{p.name}</h4>
                            <p>ID: PAY-{1000 + i}</p>
                          </div>

                        </div>

                      </td>

                      <td>{p.className}</td>

                      <td>Rs. {p.amount}</td>

                      <td>{p.method}</td>

                      <td>

                        <span
                          className={`status-badge ${
                            p.status === "Paid"
                              ? "paid-status"
                              : "pending-status"
                          }`}
                        >
                          {p.status}
                        </span>

                      </td>

                    </tr>
                  ))

                ) : (

                  <tr>
                    <td colSpan="6" className="no-data">
                      No Payments Found
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
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="logo">
        <h2>Global Edu</h2>
        <span>Academy</span>
      </div>

      {/* LINKS */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>

        <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
        <NavLink to="/academics" onClick={() => setMenuOpen(false)}>Academics</NavLink>
        <NavLink to="/classes" onClick={() => setMenuOpen(false)}>Classes</NavLink>
        <NavLink to="/admissions" onClick={() => setMenuOpen(false)}>Admissions</NavLink>
        <NavLink to="/notices" onClick={() => setMenuOpen(false)}>Notices</NavLink>
        <NavLink to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</NavLink>
        <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>

        {/* ADMIN BUTTON */}
        <NavLink
          to="/admin"
          className="admin-btn"
          onClick={() => setMenuOpen(false)}
        >
          Admin
        </NavLink>

      </div>

      {/* MOBILE MENU */}
      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </div>

    </nav>
  );
}
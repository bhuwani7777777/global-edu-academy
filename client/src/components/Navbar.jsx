import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">

      {/* LOGO (CLICK → HOME) */}
      <Link to="/" className="logo" onClick={closeMenu}>

        <img src={logo} alt="Global Educational Academy" />

        <div className="logo-text">
          <h1>Global Educational</h1>
          <span>Academy</span>
        </div>

      </Link>

      {/* NAV LINKS */}
      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>

        <NavLink to="/" onClick={closeMenu}>Home</NavLink>
        <NavLink to="/about" onClick={closeMenu}>About</NavLink>
        <NavLink to="/academics" onClick={closeMenu}>Academics</NavLink>
        <NavLink to="/classes" onClick={closeMenu}>Classes</NavLink>
        <NavLink to="/admissions" onClick={closeMenu}>Admissions</NavLink>
        <NavLink to="/gallery" onClick={closeMenu}>Gallery</NavLink>
        <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>

        <NavLink to="/admin" className="admin-btn" onClick={closeMenu}>
          Admin Panel
        </NavLink>

      </nav>

      {/* MOBILE MENU ICON */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✕" : "☰"}
      </div>

    </header>
  );
}
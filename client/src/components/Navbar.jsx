import React, { useEffect, useState } from "react";
import {
  NavLink,
  Link,
  useLocation,
} from "react-router-dom";

import {
  FaBars,
  FaTimes,
  FaGraduationCap,
  FaUserShield,
  FaPhoneAlt,
} from "react-icons/fa";

import "./Navbar.css";

import logo from "../assets/logo.png";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  /* SCROLL EFFECT */
  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  /* CLOSE MOBILE MENU */
  useEffect(() => {

    setMenuOpen(false);

  }, [location]);

  return (

    <header
      className={`navbar ${
        scrolled ? "scrolled" : ""
      }`}
    >

      {/* TOPBAR */}
      <div className="topbar">

        <div className="topbar-left">

          <span>
            <FaGraduationCap />
            Excellence In Education
          </span>

        </div>

        <div className="topbar-right">

          <span>
            <FaPhoneAlt />
            +977-98XXXXXXXX
          </span>

        </div>

      </div>

      {/* MAIN NAVBAR */}
      <div className="navbar-container">

        {/* LOGO */}
        <Link
          to="/"
          className="logo"
          onClick={closeMenu}
        >

          <img
            src={logo}
            alt="Global Educational Academy"
          />

          <div className="logo-text">

            <h1>Global Educational</h1>

            <span>Academy</span>

          </div>

        </Link>

        {/* NAVIGATION */}
        <nav
          className={`nav-links ${
            menuOpen ? "active" : ""
          }`}
        >

          <NavLink to="/">
            Home
          </NavLink>

          <NavLink to="/about">
            About
          </NavLink>

          <NavLink to="/academics">
            Academics
          </NavLink>

          <NavLink to="/classes">
            Classes
          </NavLink>

          <NavLink to="/admissions">
            Admissions
          </NavLink>

          <NavLink to="/gallery">
            Gallery
          </NavLink>

          <NavLink to="/contact">
            Contact
          </NavLink>

          {/* ADMIN LOGIN */}
          <NavLink
            to="/login"
            className="admin-btn"
          >

            <FaUserShield />

            Admin Login

          </NavLink>

        </nav>

        {/* MOBILE ICON */}
        <button
          className="menu-icon"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >

          {menuOpen ? (
            <FaTimes />
          ) : (
            <FaBars />
          )}

        </button>

      </div>

    </header>

  );
}
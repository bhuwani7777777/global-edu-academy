import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">

      {/* TOP SECTION */}
      <div className="footer-container">

        {/* ABOUT */}
        <div className="footer-box">
          <h2>Global Educational Academy</h2>
          <p>
            Providing quality education from Nursery to Class 12 with modern
            learning, discipline, and innovation in Damak, Nepal.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-box">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/classes">Classes</Link></li>
            <li><Link to="/admissions">Admissions</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-box">
          <h3>Contact Info</h3>
          <p>📍 Damak, Jhapa, Nepal</p>
          <p>📞 +977-98XXXXXXXX</p>
          <p>📧 info@globalacademy.edu.np</p>
        </div>

        {/* SOCIAL */}
        <div className="footer-box">
          <h3>Follow Us</h3>

          <div className="socials">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">YouTube</a>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Global Educational Academy. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}
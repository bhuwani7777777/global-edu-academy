import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaPhone,
  FaEye,
  FaEyeSlash,
  FaGraduationCap,
  FaArrowRight,
} from "react-icons/fa";

import "./Auth.css";

export default function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "student",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "https://your-vercel-app.vercel.app/api/register",
        formData
      );

      const data = res.data;

      if (!data.success) {
        alert(data.message || "Registration failed");
        setLoading(false);
        return;
      }

      alert("Registration Successful ✔");

      navigate("/login");

    } catch (err) {
      console.log(err);
      alert(
        err.response?.data?.message || "Registration failed"
      );
    }

    setLoading(false);
  };

  return (
    <div className="auth-container">

      {/* LEFT SIDE */}
      <div className="auth-left">
        <div className="overlay"></div>

        <div className="left-content">
          <div className="logo-box">
            <FaGraduationCap />
          </div>

          <h1>Global Academy</h1>
          <p>Smart Education Platform</p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="auth-right">

        <form className="auth-card" onSubmit={handleSubmit}>

          <div className="auth-header">
            <h2>Create Account ✨</h2>
            <p>Register to continue</p>
          </div>

          {/* NAME */}
          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* EMAIL */}
          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* PHONE */}
          <div className="input-group">
            <FaPhone className="input-icon" />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          {/* PASSWORD */}
          <div className="input-group">
            <FaLock className="input-icon" />

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Create Password"
              required
              value={formData.password}
              onChange={handleChange}
            />

            <span
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* ROLE */}
          <div className="input-group">
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>

          {/* BUTTON */}
          <button className="auth-btn" type="submit">
            {loading ? "Creating..." : (
              <>
                Register <FaArrowRight />
              </>
            )}
          </button>

          {/* LINK */}
          <div className="bottom-text">
            Already have an account?
            <Link to="/login"> Login</Link>
          </div>

        </form>

      </div>
    </div>
  );
}
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGraduationCap,
  FaArrowRight,
  FaShieldAlt,
} from "react-icons/fa";

import "./Auth.css";

export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
        "https://global-edu-academy-8uqb-ojv1ykili-bhuwani7777777s-projects.vercel.app/login",
        formData
      );

      const data = res.data;

      if (!data.success) {
        alert(data.message || "Login failed");
        setLoading(false);
        return;
      }

      // Save token & role
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.user.role);

      alert("Login Successful ✔");

      // Role-based redirect
      if (data.user.role === "admin") {
        navigate("/admindashboard");
      } else if (data.user.role === "teacher") {
        navigate("/teacher");
      } else {
        navigate("/student");
      }

    } catch (err) {
      console.log(err);
      alert(
        err.response?.data?.message || "Invalid email or password"
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
          <p>Smart School Management System</p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="auth-right">

        <form className="auth-card" onSubmit={handleSubmit}>

          <div className="auth-header">
            <div className="auth-badge">
              <FaShieldAlt />
              <span>Secure Login</span>
            </div>

            <h2>Welcome Back 👋</h2>
            <p>Login to continue</p>
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

          {/* PASSWORD */}
          <div className="input-group">
            <FaLock className="input-icon" />

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
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

          {/* BUTTON */}
          <button className="auth-btn" type="submit">
            {loading ? "Logging in..." : (
              <>
                Login <FaArrowRight />
              </>
            )}
          </button>

          {/* LINK */}
          <div className="bottom-text">
            Don't have an account?
            <Link to="/register"> Register</Link>
          </div>

        </form>

      </div>
    </div>
  );
}
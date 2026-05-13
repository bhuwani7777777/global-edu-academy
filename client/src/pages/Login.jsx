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
      const response = await axios.post(
        "https://your-vercel-app.vercel.app/api/auth/login",
        formData
      );

      const data = response.data;

      if (!data || !data.token) {
        alert("Login failed ❌ No token received");
        setLoading(false);
        return;
      }

      // SAVE TOKEN
      localStorage.setItem("token", data.token);

      // SAVE ROLE (safe check)
      localStorage.setItem("role", data.user?.role || "student");

      alert("Login Successful ✔");

      // ROLE BASED ROUTING
      const role = data.user?.role;

      if (role === "admin") {
        navigate("/admindashboard");
      } else if (role === "teacher") {
        navigate("/teacher");
      } else {
        navigate("/student");
      }

    } catch (err) {
      console.log(err.response?.data || err.message);
      alert(err.response?.data?.message || "Invalid Email or Password ❌");
    }

    setLoading(false);
  };

  return (
    <div className="auth-container">

      {/* LEFT */}
      <div className="auth-left">
        <div className="overlay"></div>

        <div className="left-content">
          <div className="logo-box">
            <FaGraduationCap />
          </div>

          <h1>Global Academy</h1>
          <p>Modern School Management System</p>
        </div>
      </div>

      {/* RIGHT */}
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
            {loading ? "Logging In..." : <>Login <FaArrowRight /></>}
          </button>

          {/* REGISTER */}
          <div className="bottom-text">
            Don't have an account?
            <Link to="/register"> Register</Link>
          </div>

        </form>
      </div>

    </div>
  );
}
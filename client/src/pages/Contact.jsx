import React from "react";
export default function Contact() {
  return (
    <div className="section container">

      <h1>Contact Us</h1>

      <div className="grid" style={{ gridTemplateColumns: "1fr 1fr" }}>

        <div className="card">
          <h3>📍 Address</h3>
          <p>Damak, Nepal</p>

          <h3>📞 Phone</h3>
          <p>9800000000</p>

          <h3>📧 Email</h3>
          <p>info@globalacademy.com</p>
        </div>

        <div className="card">
          <h3>Office Hours</h3>
          <p>Sunday - Friday</p>
          <p>9:00 AM - 4:00 PM</p>
        </div>

      </div>

    </div>
  );
}
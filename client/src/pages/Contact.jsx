import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-page">
      {/* HERO SECTION */}
      <section className="contact-hero">
        <div className="contact-overlay">
          <h1>Contact Us</h1>
          <p>
            We are always ready to help students, parents, and visitors.
            Connect with us anytime.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-container container">
        {/* LEFT SIDE */}
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>
            Feel free to contact us for admissions, academic information,
            school activities, and other inquiries.
          </p>

          <div className="info-box">
            <FaMapMarkerAlt className="icon" />
            <div>
              <h3>Address</h3>
              <p>Damak, Nepal</p>
            </div>
          </div>

          <div className="info-box">
            <FaPhoneAlt className="icon" />
            <div>
              <h3>Phone</h3>
              <p>9800000000</p>
            </div>
          </div>

          <div className="info-box">
            <FaEnvelope className="icon" />
            <div>
              <h3>Email</h3>
              <p>info@globalacademy.com</p>
            </div>
          </div>

          <div className="office-hours">
            <h3>Office Hours</h3>
            <p>Sunday - Friday</p>
            <p>9:00 AM - 4:00 PM</p>
          </div>

          {/* SOCIAL */}
          <div className="social-icons">
            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-form-card">
          <h2>Send Message</h2>

          <form>
            <input type="text" placeholder="Your Full Name" required />

            <input type="email" placeholder="Your Email Address" required />

            <input type="text" placeholder="Subject" required />

            <textarea
              rows="6"
              placeholder="Write your message here..."
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="map-section">
        <iframe
          title="school-location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.468517854758!2d87.67686957517355!3d26.664468976791406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6c2cf3c95d89%3A0x4f4c97d4ef95b0d4!2sDamak!5e0!3m2!1sen!2snp!4v1710000000000!5m2!1sen!2snp"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
}

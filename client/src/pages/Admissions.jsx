import { useState } from "react";
import axios from "axios";
import "../styles/admissions.css";

export default function Admissions() {
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      await axios.post("http://localhost:5000/api/admissions", form);
      setSuccess(true);
      setForm({});
    } catch (err) {
      alert("Submission failed!");
    }

    setLoading(false);
  };

  return (
    <div className="admission-wrapper">

      {/* LEFT INFO PANEL */}
      <div className="admission-info">

        <h1>🎓 Admissions Open 2026</h1>
        <p>
          Join Global Educational Academy, Damak — from Nursery to Class 12.
          Build your future with modern education, smart classrooms, and expert teachers.
        </p>

        <div className="info-card">
          <h3>📌 Why Choose Us?</h3>
          <ul>
            <li>✔ Smart Classroom Learning</li>
            <li>✔ Experienced Teachers</li>
            <li>✔ Science & Computer Labs</li>
            <li>✔ Sports & Creative Activities</li>
            <li>✔ Safe Learning Environment</li>
          </ul>
        </div>

        <div className="info-card">
          <h3>📍 Location</h3>
          <p>Damak, Jhapa, Nepal</p>
        </div>

        <div className="info-card highlight">
          <h3>🔥 Limited Seats Available</h3>
          <p>Apply early to secure your admission.</p>
        </div>

      </div>

      {/* RIGHT FORM PANEL */}
      <div className="admission-form-section">

        <div className="form-header">
          <h2>Student Admission Form</h2>
          <p>Fill all required details carefully</p>
        </div>

        {success && (
          <div className="success-box">
            🎉 Application submitted successfully!
          </div>
        )}

        <form className="admission-form card" onSubmit={submit}>

          {/* STUDENT INFO */}
          <h3>👨‍🎓 Student Details</h3>

          <div className="grid-2">
            <input name="name" placeholder="Full Name" onChange={handleChange} value={form.name || ""} required />
            <input name="dob" placeholder="Date of Birth" onChange={handleChange} value={form.dob || ""} />
          </div>

          <div className="grid-2">
            <input name="email" placeholder="Email Address" onChange={handleChange} value={form.email || ""} />
            <input name="phone" placeholder="Phone Number" onChange={handleChange} value={form.phone || ""} />
          </div>

          <div className="grid-2">
            <input name="address" placeholder="Address" onChange={handleChange} value={form.address || ""} />
            <input name="classApplied" placeholder="Applying Class" onChange={handleChange} value={form.classApplied || ""} />
          </div>

          {/* PARENT INFO */}
          <h3>👨‍👩‍👧 Parent Details</h3>

          <div className="grid-2">
            <input name="fatherName" placeholder="Father Name" onChange={handleChange} value={form.fatherName || ""} />
            <input name="motherName" placeholder="Mother Name" onChange={handleChange} value={form.motherName || ""} />
          </div>

          <div className="grid-2">
            <input name="guardianPhone" placeholder="Guardian Phone" onChange={handleChange} value={form.guardianPhone || ""} />
            <input name="occupation" placeholder="Parent Occupation" onChange={handleChange} value={form.occupation || ""} />
          </div>

          {/* EXTRA */}
          <h3>📌 Additional Information</h3>

          <textarea
            name="message"
            placeholder="Write any special notes or requirements..."
            onChange={handleChange}
            value={form.message || ""}
          ></textarea>

          <button className="btn full-btn" disabled={loading}>
            {loading ? "Submitting..." : "Submit Application"}
          </button>

        </form>
      </div>

    </div>
  );
}
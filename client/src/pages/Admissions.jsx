import { useState } from "react";
import axios from "axios";
import "./Admissions.css";
import { motion, AnimatePresence } from "framer-motion";

export default function Admissions() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const next = () => setStep((prev) => prev + 1);
  const prev = () => setStep((prev) => prev - 1);

  const submit = async () => {
    setLoading(true);
    try {
      await axios.post("http://localhost:5000/api/admissions", form);
      setSuccess(true);
    } catch {
      alert("Submission failed");
    }
    setLoading(false);
  };

  return (
    <div className="admission-wrapper">

      {/* BACKGROUND EFFECT */}
      <div className="bg-gradient"></div>

      {/* CARD */}
      <div className="glass-card">

        {/* HEADER */}
        <div className="header">
          <h1>🎓 Admission 2026</h1>
          <p>Global Educational Academy • Damak</p>
        </div>

        {/* PROGRESS */}
        <div className="progress">
          <div className={`dot ${step >= 1 && "active"}`}></div>
          <div className={`dot ${step >= 2 && "active"}`}></div>
          <div className={`dot ${step >= 3 && "active"}`}></div>
        </div>

        {success ? (
          <motion.div className="success" initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
            🎉 Admission Submitted Successfully!
          </motion.div>
        ) : (

          <AnimatePresence mode="wait">

            {/* STEP 1 */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                className="form-step"
              >
                <h2>Student Info</h2>

                <div className="input">
                  <input name="name" required onChange={handleChange} />
                  <label>Full Name</label>
                </div>

                <div className="input">
                  <input name="dob" onChange={handleChange} />
                  <label>Date of Birth</label>
                </div>

                <div className="input">
                  <input name="classApplied" onChange={handleChange} />
                  <label>Applying Class</label>
                </div>

                <button onClick={next} className="primary">Next →</button>
              </motion.div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                className="form-step"
              >
                <h2>Parent Info</h2>

                <div className="input">
                  <input name="fatherName" onChange={handleChange} />
                  <label>Father Name</label>
                </div>

                <div className="input">
                  <input name="motherName" onChange={handleChange} />
                  <label>Mother Name</label>
                </div>

                <div className="input">
                  <input name="guardianPhone" onChange={handleChange} />
                  <label>Phone</label>
                </div>

                <div className="btn-row">
                  <button onClick={prev}>← Back</button>
                  <button onClick={next} className="primary">Next →</button>
                </div>
              </motion.div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                className="form-step"
              >
                <h2>Payment</h2>

                <div className="payment">
                  <button className="esewa">eSewa</button>
                  <button className="khalti">Khalti</button>
                </div>

                <div className="input">
                  <textarea name="message" onChange={handleChange}></textarea>
                  <label>Additional Notes</label>
                </div>

                <div className="btn-row">
                  <button onClick={prev}>← Back</button>
                  <button onClick={submit} className="primary">
                    {loading ? "Processing..." : "Submit ✔"}
                  </button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        )}

      </div>
    </div>
  );
}
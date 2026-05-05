import "./Home.css";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Particles from "react-tsparticles";

export default function Home() {
  return (
    <div className="home">

      {/* PARTICLES */}
      <Particles className="particles" />

      {/* HERO */}
      <section className="hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="title">
            <Typewriter
              words={[
                "Global Educational Academy",
                "Smart Learning in Damak",
                "Future Ready Students",
                "Nursery to Class 12 Education"
              ]}
              loop
              cursor
            />
          </h1>

          <p className="subtitle">
            A modern learning environment focused on innovation, discipline, and excellence in education.
          </p>

          <div className="hero-buttons">
            <button className="btn">Apply Now</button>
            <button className="btn-outline">Explore Programs</button>
          </div>
        </motion.div>
      </section>

      {/* QUICK HIGHLIGHTS */}
      <section className="highlights">
        {[
          "Smart Classrooms",
          "Experienced Teachers",
          "Modern Labs",
          "Safe Environment"
        ].map((item, i) => (
          <motion.div
            key={i}
            className="highlight-card"
            whileHover={{ scale: 1.05 }}
          >
            {item}
          </motion.div>
        ))}
      </section>

      {/* ABOUT SHORT */}
      <section className="about-section">
        <motion.div className="about-card">
          <h2>About Our Academy</h2>
          <p>
            Global Educational Academy in Damak provides world-class education
            from Nursery to Class 12 with smart learning systems, experienced teachers,
            and a disciplined academic environment focused on student success.
          </p>
        </motion.div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why">
        <h2>Why Choose Us</h2>

        <div className="grid">
          {[
            "Modern Teaching Methods",
            "Digital Learning System",
            "Individual Student Care",
            "Extra Curricular Activities",
            "Safe & Friendly Campus",
            "High Success Rate"
          ].map((item, i) => (
            <motion.div
              key={i}
              className="card"
              whileHover={{ scale: 1.05 }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CLASSES LEVELS */}
      <section className="levels">
        <h2>Academic Levels</h2>

        <div className="timeline">
          <div>Nursery</div>
          <div>Primary</div>
          <div>Lower Secondary</div>
          <div>SEE Preparation</div>
          <div>+2 Science</div>
          <div>+2 Management</div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="facilities">
        <h2>Facilities</h2>

        <div className="grid">
          <div className="card">Computer Lab</div>
          <div className="card">Science Lab</div>
          <div className="card">Library</div>
          <div className="card">Sports Ground</div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="events">
        <h2>Latest Events</h2>

        <div className="grid">
          <div className="card">Annual Sports Day</div>
          <div className="card">Science Exhibition</div>
          <div className="card">Parent Meeting</div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Admissions Open 2026</h2>
        <p>Start your journey with Global Educational Academy</p>
        <button className="btn">Apply Now</button>
      </section>

    </div>
  );
}
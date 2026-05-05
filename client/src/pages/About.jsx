import "./About.css";

export default function About() {
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <div className="hero-overlay">
          <h1>Global Educational Academy</h1>
          <p>
            A modern learning institution in Damak, Nepal providing quality education
            from Nursery to Class 12 with innovation, discipline, and excellence.
          </p>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="intro-section">
        <div className="intro-card">
          <h2>🏫 Who We Are</h2>
          <p>
            Global Educational Academy is a progressive school dedicated to
            shaping future leaders through modern education, smart classrooms,
            and practical learning approaches.
          </p>
        </div>

        <div className="intro-card highlight">
          <h2>📍 Location</h2>
          <p>Damak, Jhapa, Nepal</p>

          <h2>🎓 Levels</h2>
          <p>Nursery – Grade 12</p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2 className="section-title">Why Choose Us</h2>

        <div className="feature-grid">

          <div className="feature-card">
            <h3>📘 Smart Learning</h3>
            <p>Interactive digital classrooms with modern teaching methods.</p>
          </div>

          <div className="feature-card">
            <h3>👨‍🏫 Expert Teachers</h3>
            <p>Highly qualified and experienced teaching staff.</p>
          </div>

          <div className="feature-card">
            <h3>💻 Tech Education</h3>
            <p>Computer labs and IT-based learning environment.</p>
          </div>

          <div className="feature-card">
            <h3>🏆 Results Focus</h3>
            <p>Strong academic performance and student success rate.</p>
          </div>

          <div className="feature-card">
            <h3>🎯 Discipline</h3>
            <p>Well-structured environment for student growth.</p>
          </div>

          <div className="feature-card">
            <h3>🌍 Future Ready</h3>
            <p>Preparing students for global opportunities.</p>
          </div>

        </div>
      </section>

      {/* TIMELINE */}
      <section className="timeline-section">
        <h2 className="section-title">Our Journey</h2>

        <div className="timeline">

          <div className="timeline-item">
            <span>2015</span>
            <p>Foundation of Global Educational Academy</p>
          </div>

          <div className="timeline-item">
            <span>2018</span>
            <p>Introduction of Smart Classroom System</p>
          </div>

          <div className="timeline-item">
            <span>2021</span>
            <p>Expansion up to Grade 12</p>
          </div>

          <div className="timeline-item">
            <span>2025</span>
            <p>Digital Learning Transformation</p>
          </div>

        </div>
      </section>

      {/* CEO SECTION */}
      <section className="ceo-section">

        <div className="ceo-card">
          <div className="ceo-image"></div>

          <div className="ceo-text">
            <h2>👨‍💼 CEO Message</h2>
            <p>
              “Our mission is to transform traditional education into a modern,
              skill-based learning experience. We believe every student has the
              potential to succeed with the right guidance.”
            </p>

            <h4>Bhuwani Bikram Nembang</h4>
            <span>Founder & CEO</span>
          </div>
        </div>

      </section>

    </div>
  );
}
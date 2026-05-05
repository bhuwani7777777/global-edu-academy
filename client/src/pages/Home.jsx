import "./Home.css";

export default function Home() {
  return (
    <div className="home">

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>Global Educational Academy</h1>
          <p>Modern Learning from Nursery to Class 12 in Damak, Nepal</p>

          <div className="hero-buttons">
            <button className="btn">Apply Now</button>
            <button className="btn-outline">Explore Programs</button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="card">
          <h2>1200+</h2>
          <p>Students</p>
        </div>
        <div className="card">
          <h2>65+</h2>
          <p>Teachers</p>
        </div>
        <div className="card">
          <h2>25+</h2>
          <p>Smart Classes</p>
        </div>
        <div className="card">
          <h2>95%</h2>
          <p>Success Rate</p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about">
        <div className="card">
          <h2>About Our School</h2>
          <p>
            Global Educational Academy is a modern institution in Damak providing
            quality education from Nursery to Class 12 with smart learning systems,
            experienced teachers, and a disciplined environment.
          </p>
        </div>

        <div className="about-box"></div>
      </section>

      {/* PROGRAMS */}
      <section className="section">
        <h2 className="title">Our Programs</h2>

        <div className="grid">
          <div className="card">Nursery & Primary</div>
          <div className="card">Lower Secondary</div>
          <div className="card">SEE Preparation</div>
          <div className="card">+2 Science</div>
          <div className="card">+2 Management</div>
          <div className="card">Extra Activities</div>
        </div>
      </section>

      {/* PRINCIPAL */}
      <section className="principal">
        <div className="card">
          <h2>Principal Message</h2>
          <p>
            “We aim to build disciplined, skilled, and future-ready students through
            modern education and strong values.”
          </p>
          <span>- Principal, Global Educational Academy</span>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <h2 className="title">What People Say</h2>

        <div className="grid">
          <div className="card">
            “Best school in Damak with modern teaching style.”
          </div>
          <div className="card">
            “Teachers are very supportive and friendly.”
          </div>
          <div className="card">
            “Great environment for learning and growth.”
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Admissions Open 2026</h2>
        <p>Start your journey with us today</p>
        <button className="btn">Apply Now</button>
      </section>

    </div>
  );
}
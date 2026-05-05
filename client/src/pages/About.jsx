export default function About() {
  return (
    <div className="section container">

      <h1>About Our Academy</h1>

      <p>
        Global Educational Academy is committed to delivering high-quality
        education with modern teaching methods and student-focused learning.
      </p>

      <div className="grid" style={{ gridTemplateColumns: "1fr 1fr" }}>

        <div className="card">
          <h3>🎯 Mission</h3>
          <p>
            To empower students with knowledge, skills, and confidence for the future.
          </p>
        </div>

        <div className="card">
          <h3>🌍 Vision</h3>
          <p>
            To become a leading educational institution in Nepal.
          </p>
        </div>

      </div>

      <div className="card" style={{ marginTop: 20 }}>
        <h3>👨‍🏫 CEO Message</h3>
        <p>
          Bhuwani Bikram Nembang believes in practical learning, discipline,
          and innovation in education.
        </p>
      </div>

    </div>
  );
}
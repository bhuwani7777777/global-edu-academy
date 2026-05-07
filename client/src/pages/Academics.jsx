import React from "react";
import {
  FaBookOpen,
  FaLaptopCode,
  FaFlask,
  FaChalkboardTeacher,
  FaGraduationCap,
  FaUsers,
} from "react-icons/fa";

import "./Academics.css";

export default function Academics() {
  const data = [
    {
      title: "Nursery Program",
      desc: "Interactive learning, creativity, games, and child-friendly activities.",
      icon: <FaBookOpen />,
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Primary Level",
      desc: "Strong academic foundation with practical and creative learning.",
      icon: <FaChalkboardTeacher />,
      image:
        "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Lower Secondary",
      desc: "Focused on skill development, teamwork, and advanced studies.",
      icon: <FaUsers />,
      image:
        "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "SEE Preparation",
      desc: "Advanced preparation classes with experienced teachers.",
      icon: <FaGraduationCap />,
      image:
        "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "+2 Science",
      desc: "Engineering, medical, and technology-oriented education path.",
      icon: <FaFlask />,
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "+2 Management",
      desc: "Business studies, leadership, entrepreneurship, and finance.",
      icon: <FaLaptopCode />,
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="academics-page">
      {/* HERO SECTION */}
      <section className="academics-hero">
        <div className="academics-overlay">
          <h1>Academic Programs</h1>
          <p>
            We provide modern education with innovation, creativity, and
            academic excellence for every student.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="academics-intro container">
        <h2>Our Learning System</h2>
        <p>
          Our school focuses on holistic education, combining academics,
          technology, practical learning, leadership, sports, and creativity to
          prepare students for future success.
        </p>
      </section>

      {/* ACADEMIC CARDS */}
      <section className="academics-grid container">
        {data.map((d, i) => (
          <div className="academic-card" key={i}>
            <div className="academic-image">
              <img src={d.image} alt={d.title} />
            </div>

            <div className="academic-content">
              <div className="academic-icon">{d.icon}</div>

              <h3>{d.title}</h3>

              <p>{d.desc}</p>

              <button>Learn More</button>
            </div>
          </div>
        ))}
      </section>

      {/* EXTRA SECTION */}
      <section className="academic-bottom">
        <div className="bottom-content container">
          <h2>Building Future Leaders</h2>

          <p>
            Our academic environment encourages innovation, confidence,
            discipline, and leadership through modern education systems.
          </p>

          <button>Apply Admission</button>
        </div>
      </section>
    </div>
  );
}

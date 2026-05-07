import "./Gallery.css";
import React from "react";
import "./Gallery.css";

const galleryImages = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
    title: "Smart Classroom",
    desc: "Modern digital learning environment for students.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
    title: "School Campus",
    desc: "Beautiful and peaceful educational campus.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop",
    title: "Computer Lab",
    desc: "Advanced computer learning and IT education.",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=1200&auto=format&fit=crop",
    title: "Library",
    desc: "Quiet study space with thousands of books.",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop",
    title: "Science Lab",
    desc: "Hands-on experiments and science projects.",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200&auto=format&fit=crop",
    title: "Sports Activities",
    desc: "Encouraging sportsmanship and teamwork.",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1200&auto=format&fit=crop",
    title: "Students Group",
    desc: "Happy students enjoying school life.",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
    title: "Interactive Learning",
    desc: "Creative and engaging classroom sessions.",
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    title: "Technology Education",
    desc: "Learning modern technology and innovation.",
  },
];

export default function Gallery() {
  return (
    <div className="gallery-page">
      {/* HERO SECTION */}
      <section className="gallery-hero">
        <div className="gallery-overlay">
          <h1>School Gallery</h1>
          <p>
            Explore our classrooms, events, activities, labs, sports, and
            student life moments.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="gallery-intro container">
        <h2>Memories & Activities</h2>
        <p>
          Our school provides quality education with modern facilities,
          innovative learning methods, extracurricular activities, and a safe
          environment for every student.
        </p>
      </section>

      {/* GALLERY GRID */}
      <section className="gallery-container container">
        {galleryImages.map((item) => (
          <div className="gallery-card" key={item.id}>
            <img src={item.image} alt={item.title} />

            <div className="gallery-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* EXTRA SECTION */}
      <section className="gallery-bottom">
        <div className="bottom-content container">
          <h2>Creating Bright Futures</h2>
          <p>
            We focus on academic excellence, innovation, discipline, leadership,
            and creativity to help students succeed in the future.
          </p>

          <button>Explore More</button>
        </div>
      </section>
    </div>
  );
}
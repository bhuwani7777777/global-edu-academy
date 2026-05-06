import "./Classes.css";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Classes() {

  const [search, setSearch] = useState("");

  const classes = [
    { name: "Nursery", level: "Pre-Primary" },
    { name: "LKG", level: "Pre-Primary" },
    { name: "UKG", level: "Pre-Primary" },
    { name: "Class 1", level: "Primary" },
    { name: "Class 2", level: "Primary" },
    { name: "Class 3", level: "Primary" },
    { name: "Class 4", level: "Primary" },
    { name: "Class 5", level: "Primary" },
    { name: "Class 6", level: "Lower Secondary" },
    { name: "Class 7", level: "Lower Secondary" },
    { name: "Class 8", level: "Lower Secondary" },
    { name: "Class 9", level: "Secondary" },
    { name: "Class 10", level: "Secondary" },
    { name: "Class 11", level: "+2" },
    { name: "Class 12", level: "+2" },
  ];

  const filtered = classes.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="classes-page">

      {/* HERO */}
      <section className="classes-hero">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Explore Our Classes
        </motion.h1>

        <p>From Nursery to Class 12 with modern digital learning</p>

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search class..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </section>

      {/* GRID */}
      <div className="classes-grid">

        {filtered.map((c, i) => (
          <motion.div
            key={i}
            className="class-card"
            whileHover={{ scale: 1.05 }}
          >

            <div className="class-top">
              <span className="level">{c.level}</span>
            </div>

            <h2>{c.name}</h2>

            <p>
              Smart classes, experienced teachers, and activity-based learning.
            </p>

            <div className="features">
              <span>Digital</span>
              <span>Weekly Tests</span>
              <span>Activities</span>
            </div>

            <button className="apply-btn">Apply Now</button>

          </motion.div>
        ))}

      </div>

    </div>
  );
}
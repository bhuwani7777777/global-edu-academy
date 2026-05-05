import React from "react";

export default function ClassCard({ title, desc, level }) {
  return (
    <div className="class-card">
      <div className="class-badge">{level}</div>

      <h2>{title}</h2>
      <p>{desc}</p>

      <button className="class-btn">Explore</button>
    </div>
  );
}
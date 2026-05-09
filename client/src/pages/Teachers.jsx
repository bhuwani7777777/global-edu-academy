import React from "react";
import "./AdminPages.css";

export default function Teachers() {

  const teachers = [
    { name: "Ram Sharma", subject: "Math" },
    { name: "Sita Rai", subject: "Science" },
    { name: "Hari KC", subject: "English" }
  ];

  return (
    <div className="admin-page">
      <h1>👩‍🏫 Teachers</h1>

      <div className="grid">
        {teachers.map((t, i) => (
          <div className="card" key={i}>
            <h2>{t.name}</h2>
            <p>Subject: {t.subject}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminPages.css";

export default function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/students")
      .then(res => setStudents(res.data));
  }, []);

  return (
    <div className="admin-page">
      <h1>👨‍🎓 Students</h1>

      <div className="card-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Class</th>
              <th>Age</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>
            {students.map((s, i) => (
              <tr key={i}>
                <td>{s.name}</td>
                <td>{s.className}</td>
                <td>{s.age}</td>
                <td>{s.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
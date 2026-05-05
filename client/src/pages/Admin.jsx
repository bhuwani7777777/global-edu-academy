import { useEffect, useState } from "react";
import axios from "axios";

export default function Admin() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/admissions")
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="section container">

      <h1>Admin Dashboard</h1>

      {data.length === 0 && <p>No admissions found</p>}

      <div className="grid">

        {data.map((d) => (
          <div className="card" key={d._id}>
            <h3>{d.name}</h3>
            <p>Email: {d.email}</p>
            <p>Phone: {d.phone}</p>
            <p>Class: {d.classApplied}</p>
            <p>Status: {d.status}</p>
          </div>
        ))}

      </div>

    </div>
  );
}
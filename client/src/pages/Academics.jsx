export default function Academics() {
  const data = [
    { title: "Nursery", desc: "Basic learning & activities" },
    { title: "Primary", desc: "Foundation building" },
    { title: "Lower Secondary", desc: "Skill development" },
    { title: "SEE Level", desc: "Exam preparation" },
    { title: "+2 Science", desc: "Engineering & medical path" },
    { title: "+2 Management", desc: "Business & leadership" }
  ];

  return (
    <div className="section container">

      <h1>Academics</h1>

      <div className="grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
        {data.map((d,i)=>(
          <div className="card" key={i}>
            <h3>{d.title}</h3>
            <p>{d.desc}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
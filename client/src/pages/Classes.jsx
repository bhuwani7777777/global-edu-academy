export default function Classes() {
  const classes = [
    "Nursery","LKG","UKG","Class 1","Class 2","Class 3",
    "Class 4","Class 5","Class 6","Class 7","Class 8",
    "Class 9","Class 10","Class 11","Class 12"
  ];

  return (
    <div className="section container">

      <h1>Our Classes</h1>

      <div className="grid" style={{ gridTemplateColumns: "repeat(4,1fr)" }}>
        {classes.map((c,i)=>(
          <div className="card" key={i}>
            <h3>{c}</h3>
            <p>Structured learning program</p>
          </div>
        ))}
      </div>

    </div>
  );
}
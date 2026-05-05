export default function Gallery() {
  return (
    <div className="section container">

      <h1>Gallery</h1>

      <div className="grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
        {[1,2,3,4,5,6].map((i)=>(
          <img
            key={i}
            className="card"
            src="https://via.placeholder.com/300"
            alt="school"
          />
        ))}
      </div>

    </div>
  );
}
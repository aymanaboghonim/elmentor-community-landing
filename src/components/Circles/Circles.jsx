import './Circles.css';

const Circles = () => {
  const circles = [
    { id: 1, name: 'Tech Circle', description: 'Explore cutting-edge technology and innovation' },
    { id: 2, name: 'Business Circle', description: 'Navigate the world of entrepreneurship and business' },
    { id: 3, name: 'Creative Circle', description: 'Express yourself through art, design, and creativity' },
  ];

  return (
    <section id="circles" className="circles">
      <div className="circles-container">
        <h2>Our Circles</h2>
        <div className="circles-grid">
          {circles.map(circle => (
            <div key={circle.id} className="circle-card">
              <h3>{circle.name}</h3>
              <p>{circle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Circles;

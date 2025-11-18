import './Founders.css';

const Founders = () => {
  const founders = [
    { id: 1, name: 'Jane Smith', role: 'Co-Founder & CEO', bio: 'Passionate about building communities and fostering growth' },
    { id: 2, name: 'John Doe', role: 'Co-Founder & CTO', bio: 'Technology enthusiast dedicated to innovative solutions' },
  ];

  return (
    <section id="founders" className="founders">
      <div className="founders-container">
        <h2>Meet Our Founders</h2>
        <div className="founders-grid">
          {founders.map(founder => (
            <div key={founder.id} className="founder-card">
              <div className="founder-avatar">
                {founder.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3>{founder.name}</h3>
              <p className="founder-role">{founder.role}</p>
              <p className="founder-bio">{founder.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;

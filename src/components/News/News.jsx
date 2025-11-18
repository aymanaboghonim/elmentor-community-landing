import './News.css';

const News = () => {
  const newsItems = [
    { id: 1, date: '2025-11-15', title: 'Community Meetup Success', description: 'Over 100 members attended our monthly community meetup' },
    { id: 2, date: '2025-11-10', title: 'New Workshop Series', description: 'Launching a new series of professional development workshops' },
    { id: 3, date: '2025-11-05', title: 'Partnership Announcement', description: 'Excited to partner with leading tech organizations' },
  ];

  return (
    <section id="news" className="news">
      <div className="news-container">
        <h2>News & Activities</h2>
        <div className="news-grid">
          {newsItems.map(item => (
            <div key={item.id} className="news-card">
              <span className="news-date">{item.date}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;

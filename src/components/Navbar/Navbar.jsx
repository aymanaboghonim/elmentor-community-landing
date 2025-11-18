import './Navbar.css';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h2>Elmentor Community</h2>
        </div>
        <ul className="navbar-menu">
          <li><a onClick={() => scrollToSection('hero')}>Home</a></li>
          <li><a onClick={() => scrollToSection('about')}>About</a></li>
          <li><a onClick={() => scrollToSection('circles')}>Circles</a></li>
          <li><a onClick={() => scrollToSection('news')}>News</a></li>
          <li><a onClick={() => scrollToSection('founders')}>Founders</a></li>
          <li><a onClick={() => scrollToSection('cta')}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

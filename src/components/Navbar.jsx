import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__left">
        <h1 className="navbar__logo">KODFLIX</h1>
        <ul className="navbar__links">
          <li className="navbar__link navbar__link--active">Home</li>
          <li className="navbar__link">TV Shows</li>
          <li className="navbar__link">Movies</li>
          <li className="navbar__link">New & Popular</li>
          <li className="navbar__link">My List</li>
        </ul>
      </div>
      <div className="navbar__right">
        <span className="navbar__icon">🔍</span>
        <span className="navbar__icon">🔔</span>
        <div className="navbar__avatar">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
            alt="User Avatar" 
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

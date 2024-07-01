import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import './Header.css';

const Header = () => {
  const location = useLocation(); // Utilisation de useLocation pour obtenir l'URL actuelle

  return (
    <header className="header">
      <img src={require('../../assets/images/LOGO.png')} alt='logo' />
      <div className="nav-links">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Accueil</Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>A Propos</Link>
      </div>
    </header>
  );
};

export default Header;
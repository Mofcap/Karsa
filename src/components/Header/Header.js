import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import './Header.css';
import logoImg from '../../assets/images/LOGO.png';
const Header = () => {
  const location = useLocation(); // Utilisation de useLocation pour obtenir l'URL actuelle

  return (
    <header className="header">
<Link to="/">
      <img src={logoImg} alt='logo' />
    </Link>      <div className="nav-links">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Accueil</Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>A Propos</Link>
      </div>
    </header>
  );
};

export default Header;
import React from 'react';
import './Header.css';

const Header = () => (
  <header className="header">
   <img src={require('../../assets/images/LOGO.png')} alt='logo' />
    <div>
        <a>Accueil</a>
        <a>A Propos</a>
    </div>
  </header>
);

export default Header;
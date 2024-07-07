import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => (
  <div className="not-found">
    <h1>404</h1>
    <p>Oups! La page que vous demandez n'existe pas.</p>
    <Link className='return' to="/">Retourner à la page d'accueil</Link>
  </div>
);

export default NotFound;

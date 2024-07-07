import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => (
  <div className="not-found">
    <h1 className='h1notfount'>404</h1>
    <p className='parnotfound'>Oups! La  page que vous demandez n'existe pas.</p>
    <Link className='return' to="/">Retourner à la page d'accueil</Link>
  </div>
);

export default NotFound;

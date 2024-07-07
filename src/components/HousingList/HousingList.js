import React from 'react';
import { Link } from 'react-router-dom';
import './HousingList.scss';
import housings from '../../data.json';

const HousingList = () => (
  <div className="housing-list">
    <div className="cards">
      {housings.map((housing) => (
        <Link to={`/housing/${housing.id}`}>
        <div key={housing.id} className="card">
        <img src={housing.cover} alt={housing.title} />
          <h3>{housing.title}</h3>
          
        </div>
        </Link>
      ))}
    </div>
  </div>
);

export default HousingList;
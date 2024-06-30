import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import housings from '../../data.json';
import './HousingDetail.css';

const HousingDetail = () => {
  const { id } = useParams();
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);
  const [areEquipmentsVisible, setEquipmentsVisible] = useState(false);

  const housing = housings.find((item) => item.id === id);

  const getStarRating = (rating) => {
    const totalStars = 5;
    const filledStars = parseInt(rating); // Convert string to number
    const emptyStars = totalStars - filledStars;

    const filledStarStyle = {
      color: '#FF6060',
    };

    const emptyStarStyle = {
      color: '#E3E3E3',
    };

    return (
      <div className='ratting'>
      {[...Array(filledStars)].map((_, index) => (
        <p key={index} style={filledStarStyle}>★</p>
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <p key={index} style={emptyStarStyle}>☆</p>
      ))}
    </div>
    );
  };

  return (
    <main className="housing-detail">
      <div className="photo">
        <img src={housing.cover} alt={housing.title} />
      </div>
      <section className='second'>
        <div className='medium'>
          <h1>{housing.title}</h1>
          <h4>{housing.location}</h4>
          <div className="tags">
            {housing.tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
          <button onClick={() => setDescriptionVisible(!isDescriptionVisible)}>Toggle Description</button>
          {isDescriptionVisible && (
            <p className="description">
              {housing.description}
            </p>
          )}
        </div>
        <div className='medium2'>
          <div className='hostt'>
            <p>{housing.host.name}</p>
            <img src={housing.host.picture} alt='hostpicture' />
          </div>
          <div className="rating">
            {getStarRating(housing.rating)}
          </div>
          <button className='equipments' onClick={() => setEquipmentsVisible(!areEquipmentsVisible)}>
            Toggle Equipments
          </button>
          {areEquipmentsVisible && (
            <div className="equipments">
              <h3>Equipments</h3>
              <ul>
                {housing.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default HousingDetail;

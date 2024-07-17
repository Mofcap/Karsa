import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import housings from '../../data.json';
import './HousingDetail.css';
import leftArrow from '../../assets/images/output.png'; 
import rightArrow from '../../assets/images/output.png'; 
import downArrow from '../../assets/images/output.png';
import upArrow from '../../assets/images/output.png';

const HousingDetail = () => {
  const { id } = useParams();
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);
  const [areEquipmentsVisible, setEquipmentsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const housing = housings.find((item) => item.id === id);

  if (!housing) {
    return <Navigate to="/not-found" />;
  }

  const hasMultiplePhotos = housing.pictures.length > 1;

  const getStarRating = (rating) => {
    const totalStars = 5;
    const filledStars = parseInt(rating, 10);
    const emptyStars = totalStars - filledStars;

    const filledStarStyle = { color: '#FF6060' };
    const emptyStarStyle = { color: '#E3E3E3' };

    return (
      <div className='rating'>
        {[...Array(filledStars)].map((_, index) => (
          <h1 key={index} style={filledStarStyle}>★</h1>
        ))}
        {[...Array(emptyStars)].map((_, index) => (
          <h1 key={index} style={emptyStarStyle}>☆</h1>
        ))}
      </div>
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % housing.pictures.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + housing.pictures.length) % housing.pictures.length);
  };

  return (
    <main className="housing-detail">
      <div className="photo">
        <img src={housing.pictures[currentImageIndex]} alt={housing.title} />
        {hasMultiplePhotos && (
          <>
            <div className="photo-index">
              {currentImageIndex + 1} / {housing.pictures.length}
            </div>
            <button className="nav-button left" onClick={handlePrevImage}>
              <img src={leftArrow} alt='Previous' />
            </button>
            <button className="nav-button right" onClick={handleNextImage}>
              <img src={rightArrow} alt='Next' />
            </button>
          </>
        )}
      </div>
      <section className='second'>
        <div className='medium'>
          <h1>{housing.title}</h1>
          <h4>{housing.location}</h4>
          <div className="tags">
            {housing.tags.map((tag, index) => (
              <span className='tag' key={index}>{tag}</span>
            ))}
          </div>
        </div>
        <div className='medium2'>
          <div className='hostt'>
            <p>{housing.host.name}</p>
            <img src={housing.host.picture} alt='Host' />
          </div>
          <div className="rating">
            {getStarRating(housing.rating)}
          </div>
        </div>
      </section>
      <div className='medium3'>
        <div className='mesbtn'>
          <button className='equipments' onClick={() => setDescriptionVisible(!isDescriptionVisible)}>
            <h2>Description</h2> 
            <img src={isDescriptionVisible ? upArrow : downArrow} alt='toggle' className={isDescriptionVisible ? 'rotated' : ''} />
          </button>
          {isDescriptionVisible && (
            <p className="description">
              {housing.description}
            </p>
          )}
        </div>
        <div className='mesbtn'>
          <button className='equipments' onClick={() => setEquipmentsVisible(!areEquipmentsVisible)}>
             <h2>Equipments</h2> 
             <img src={areEquipmentsVisible ? upArrow : downArrow} alt='toggle' className={areEquipmentsVisible ? 'rotated' : ''} />
          </button>
          {areEquipmentsVisible && (
            <div className="equipment">
              <ul>
                {housing.equipments.map((equipment, index) => (
                  <p key={index}>{equipment}</p>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default HousingDetail;

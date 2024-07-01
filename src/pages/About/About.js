import React, { useState } from 'react';
import '../../components/HousingDetail/HousingDetail.css';
const About = () => {
  const [isFiabiliteVisible, setFiabiliteVisible] = useState(false);
  const [isRespectVisible, setRespectVisible] = useState(false);
  const [isServiceVisible, setServiceVisible] = useState(false);
  const [isSécuritéVisible, setSécuritéVisible] = useState(false);

  const Arrow = ({ isOpen }) => (
    <img
      src={require('../../assets/images/output.png')}
      alt="arrow"
      className={`arrow ${isOpen ? 'open' : ''}`}
    />
  );

  return (
    <div className='about'>
      <img src={require('../../assets/images/b9995860bb6384a77ca7dc9bf52da3be.jpeg')} alt='photo2' />
      <div className="section">
        <button className='equipments' onClick={() => setFiabiliteVisible(!isFiabiliteVisible)}>
          Fiabilité
          <Arrow isOpen={isFiabiliteVisible} />
        </button>
        {isFiabiliteVisible && (
          <p className="description">
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les photo sont conformes aux logements, et toutes les information
            sont régulièrement vérifiées par nos équipes.
          </p>
        )}
      </div>
      <div className="section">
        <button className='equipments' onClick={() => setRespectVisible(!isRespectVisible)}>
          Respect
          <Arrow isOpen={isRespectVisible} />
        </button>
        {isRespectVisible && (
          <p className="description">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage
            entrainera une exclusion de notre plateforme.
          </p>
        )}
      </div>
      <div className="section">
        <button className='equipments' onClick={() => setServiceVisible(!isServiceVisible)}>
          Service
          <Arrow isOpen={isServiceVisible} />
        </button>
        {isServiceVisible && (
          <p className="description">
               La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou
                de perturbation du voisinage entraînera une exclusion de notre plateforme.
          </p>
        )}
      </div>
      <div className="section">
        <button className='equipments' onClick={() => setSécuritéVisible(!isSécuritéVisible)}>
          Sécurité
          <Arrow isOpen={isSécuritéVisible} />
        </button>
        {isSécuritéVisible && (
          <p className="description">
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.
             Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        )}
      </div>
    </div>
  );
};

export default About;
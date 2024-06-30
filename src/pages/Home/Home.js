import React from 'react';
import HousingList from '../../components/HousingList/HousingList';
import './Home.css';
import Footer from '../../components/Footer/Footer';

const Home = () => (
  <div className="home">
    <div>
    <img src={require('../../assets/images/e270fc8fc902a1eb738458e7b29c1899.jpeg')} alt='photo1'/>
    <h2>Chez vous, partout et ailleurs</h2>
    </div>
    
    <HousingList />
   
  </div>
);

export default Home;
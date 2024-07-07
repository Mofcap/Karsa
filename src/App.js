import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home'; // Page d'accueil
import About from './pages/About/About'; // Page A Propos
import NotFound from './pages/NotFound/NotFound';
import HousingDetail from './components/HousingDetail/HousingDetail';
import Footer from './components/Footer/Footer';

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/housing/:id" element={<HousingDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;

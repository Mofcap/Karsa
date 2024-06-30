import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import HousingDetail from './components/HousingDetail/HousingDetail';
import NotFound from './pages/NotFound/NotFound';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/housing/:id" element={<HousingDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default AppRoutes;
import React from 'react';
import AppRoutes from './routes';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => (
  <div className="App">
    <Header />
    <AppRoutes />
    <Footer />
  </div>
);

export default App;
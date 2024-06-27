import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Banner from '../components/Banner/Banner';
import MiniBanner from '../components/MiniBanner/MiniBanner';
import ProductList from '../components/Product/ProductList';
import Footer from '../components/Footer/Footer'; 
import './HomePage.css';

function HomePage({ onAddToCart, totalItems }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <Navbar totalItems={totalItems} onSearch={handleSearch} />
      <Banner />
      <div className="section-title">
        <h1>MUNDO GAMER</h1>
      </div>
      <MiniBanner />
      <ProductList onAddToCart={onAddToCart} searchTerm={searchTerm} />
      <Footer /> 
    </div>
  );
}

export default HomePage;
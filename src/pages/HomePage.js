import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Banner from '../components/Banner/Banner';
import MiniBanner from '../components/MiniBanner/MiniBanner';
import ProductList from '../components/Product/ProductList';
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
        <h2>MUNDO GAMER</h2>
      </div>
      <MiniBanner />
      <ProductList onAddToCart={onAddToCart} searchTerm={searchTerm} />
    </div>
  );
}

export default HomePage;

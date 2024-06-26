import React from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../components/Product/ProductList';

function HomePage({ onAddToCart }) {
  return (
    <div>
      <nav>
        <Link to="/cart">Ver Carrinho</Link>
      </nav>
      <ProductList onAddToCart={onAddToCart} />
    </div>
  );
}

export default HomePage;

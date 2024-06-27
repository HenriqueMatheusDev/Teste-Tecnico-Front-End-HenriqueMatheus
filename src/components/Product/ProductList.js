import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';
import './ProductList.css';

import product1 from '../assets/images/product1.jpg';
import product2 from '../assets/images/product2.jpg';
import product3 from '../assets/images/product3.jpg';
import product4 from '../assets/images/product4.jpg';

const ITEMS_PER_PAGE = 10;

function ProductList({ onAddToCart, searchTerm }) {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const fetchedProducts = await getProductsFromAPI();
    setProducts(fetchedProducts);
  };

  const getProductsFromAPI = async () => {
    return [
      { id: 1, name: 'Produto 1', price: '29.99', image: product1 },
      { id: 2, name: 'Produto 2', price: '49.99', image: product2 },
      { id: 3, name: 'Produto 3', price: '19.99', image: product3 },
      { id: 4, name: 'Produto 4', price: '19.99', image: product4 },
    ];
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="product-list-container">
      <h1>LISTA DE PRODUTOS</h1>
      <div className="product-list">
        {paginatedProducts.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <p>{product.name}</p>
            <p>R${product.price}</p>
          </Link>
        ))}
      </div>
      <Pagination 
        currentPage={currentPage} 
        totalPages={Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)} 
        onPageChange={handlePageChange} 
      />
    </div>
  );
}

export default ProductList;

import React, { useState, useEffect } from 'react';
import Pagination from '../Pagination/Pagination';
import './ProductList.css';

const ITEMS_PER_PAGE = 10;

function ProductList({ onAddToCart }) {
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
    return Array.from({ length: 50 }, (_, i) => ({
      id: i + 1,
      name: `Produto ${i + 1}`,
      price: (Math.random() * 100).toFixed(2) // Preço aleatório para os produtos
    }));
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleAddToCart = (product) => {
    onAddToCart(product);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="product-list-container">
      <h1>Lista de Produtos</h1>
      <div className="product-list">
        {paginatedProducts.map((product) => (
          <div key={product.id} className="product-item" onClick={() => handleAddToCart(product)}>
            {product.name} - R${product.price}
          </div>
        ))}
      </div>
      <Pagination 
        currentPage={currentPage} 
        totalPages={Math.ceil(products.length / ITEMS_PER_PAGE)} 
        onPageChange={handlePageChange} 
      />
    </div>
  );
}

export default ProductList;

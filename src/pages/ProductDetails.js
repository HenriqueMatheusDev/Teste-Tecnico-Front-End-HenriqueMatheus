import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import product1Image from '../components/assets/images/product1.jpg';
import product2Image from '../components/assets/images/product2.jpg';
import product3Image from '../components/assets/images/product3.jpg';
import product4Image from '../components/assets/images/product4.jpg';
import './ProductDetails.css'

const ProductDetails = ({ onAddToCart, totalItems }) => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); // Estado para controlar a quantidade, inicializado com 1

  useEffect(() => {
    fetchProduct(productId);
  }, [productId]);

  const fetchProduct = async (id) => {
    const productFromAPI = await getProductFromAPI(id);
    setProduct(productFromAPI);
  };

  const getProductFromAPI = async (id) => {
    const products = [
      { id: 1, name: 'Produto 1', price: '29.99', image: product1Image },
      { id: 2, name: 'Produto 2', price: '49.99', image: product2Image },
      { id: 3, name: 'Produto 3', price: '19.99', image: product3Image },
      { id: 4, name: 'Produto 4', price: '19.99', image: product4Image },
    ];
    return products.find(product => product.id === parseInt(id));
  };

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setQuantity(value); 
  };

  const handleAddToCartClick = () => {
    if (product) {
      const productToAdd = {
        ...product,
        quantity: quantity 
      };
      onAddToCart(productToAdd); 
      navigate('/cart'); 
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar totalItems={totalItems} />
      <div className="product-details-select">
      <img src={product.image} alt={product.name} className="product-image-select" />
      <div className='info-product-select'>
        <h2>{product.name}</h2>
        <p>Preço: R${product.price}</p>
        <div>
          <label htmlFor="quantity">Quantidade:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            value={quantity}
            onChange={handleQuantityChange} 
          /> 
           <button className="button-add-products" onClick={handleAddToCartClick}>Adicionar ao Carrinho</button>
       
        </div>
      </div>
        
      
      </div>
    </div>
  );
};

export default ProductDetails;

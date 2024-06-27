import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import product1Image from '../components/assets/images/product1.jpg';
import product2Image from '../components/assets/images/product2.jpg';
import product3Image from '../components/assets/images/product3.jpg';
import product4Image from '../components/assets/images/product4.jpg';

const ProductDetails = ({ onAddToCart }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

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

  const handleAddToCartClick = () => {
    if (product) {
      const productToAdd = {
        ...product,
        quantity: 1
      };
      onAddToCart(productToAdd);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} className="product-image" />
      <p>Preço: R${product.price}</p>
      <button onClick={handleAddToCartClick}>Adicionar ao Carrinho</button>
      <Link to="/">Voltar para a Lista de Produtos</Link>
    </div>
  );
};

export default ProductDetails;

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import ProductDetails from './pages/ProductDetails'; 

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + product.quantity } 
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: product.quantity }]);
    }
  };

  const handleRemoveFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    setCartItems(cartItems.map(item =>
      item.id === id
        ? { ...item, quantity } 
        : item
    ));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage onAddToCart={handleAddToCart} totalItems={cartItems.length} />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} onUpdateQuantity={handleUpdateQuantity} />} />
        <Route path="/product/:productId" element={<ProductDetails onAddToCart={handleAddToCart} totalItems={cartItems.length} />} />
      </Routes>
    </Router>
  );
}

export default App;

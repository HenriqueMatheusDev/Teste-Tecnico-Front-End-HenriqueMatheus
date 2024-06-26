import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import './CartPage.css';

function CartPage({ cartItems, onRemoveFromCart, onUpdateQuantity }) {
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0).toFixed(2);
  };

  return (
    <div>
      <Navbar totalItems={cartItems.length} onSearch={() => {}} />
      <div className="cart-page-container">
        <div className="cart-header">
          <h1 className="cart-title">Meu Carrinho</h1>
          <h2 className="cart-total">Total: R${getTotalPrice()}</h2>
        </div>
        <ul className="cart-items">
          {cartItems.length === 0 ? (
            <li>Carrinho vazio</li>
          ) : (
            cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <p className="cart-item-name">{item.name}</p>
                  <p className="cart-item-price">R${item.price}</p>
                  <div className="cart-item-quantity">
                    <input 
                      type="number" 
                      min="1" 
                      value={item.quantity} 
                      onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value, 10))} 
                    />
                    <button onClick={() => onRemoveFromCart(item.id)}>Remover</button>
                  </div>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default CartPage;

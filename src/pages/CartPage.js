import React from 'react';

function CartPage({ cartItems, onRemoveFromCart, onUpdateQuantity }) {
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0).toFixed(2);
  };

  return (
    <div>
      <h1>Meu Carrinho</h1>
      <ul>
        {cartItems.length === 0 ? (
          <li>Carrinho vazio</li>
        ) : (
          cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - R${item.price}
              <input 
                type="number" 
                min="1" 
                value={item.quantity} 
                onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value, 10))} 
              />
              <button onClick={() => onRemoveFromCart(item.id)}>Remover</button>
            </li>
          ))
        )}
      </ul>
      {cartItems.length > 0 && <h2>Total: R${getTotalPrice()}</h2>}
    </div>
  );
}

export default CartPage;

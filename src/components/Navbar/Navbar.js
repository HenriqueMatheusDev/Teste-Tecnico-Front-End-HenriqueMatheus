import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/images/logo.png';

function Navbar({ totalItems, onSearch }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="navbar-search">
        <input 
          type="text" 
          placeholder="Pesquisar produtos..." 
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      <div className="navbar-cart">
        <Link to="/cart" className="cart-link">
          Carrinho
          {totalItems > 0 && (
            <span className="cart-count">{totalItems}</span>
          )}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

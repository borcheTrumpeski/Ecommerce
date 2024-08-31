import React, { useState } from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.PNG';
import cart from '../Assets/cart-icon.PNG';
import { useSelector } from 'react-redux';
import CurrencyConverter from './CurrencyConverter';

function Navbar() {
  const [menu, setMenu] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const cartNumber = useSelector((state) => state.cart.items.length);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='logo' className='logo' />
        <p>Shopping</p>
      </div>

      <div className='hamburger-menu' onClick={toggleMenu}>
        <div className='hamburger-line'></div>
        <div className='hamburger-line'></div>
        <div className='hamburger-line'></div>
      </div>

      <ul className={`nav-menu ${showMenu ? 'show' : ''}`}>
        <li onClick={() => { setMenu("shop"); setShowMenu(false); }}>
          <Link style={{ textDecoration: 'none' }} to='/'>Home</Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("about"); setShowMenu(false); }}>
          <Link style={{ textDecoration: 'none' }} to='/about'>About</Link>
          {menu === "about" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("contact"); setShowMenu(false); }}>
          <Link style={{ textDecoration: 'none' }} to='/contact'>Contact</Link>
          {menu === "contact" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("allproducts"); setShowMenu(false); }}>
          <Link style={{ textDecoration: 'none' }} to='/allproducts/all'>All products</Link>
          {menu === "allproducts" ? <hr /> : <></>}
        </li>
      </ul>

      <div className='nav-login-cart'>
        <CurrencyConverter />
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart} alt='cart' className='cart-icon' /></Link>
        <div className='nav-cart-count'>{cartNumber}</div>
      </div>
    </div>
  );
}

export default Navbar;

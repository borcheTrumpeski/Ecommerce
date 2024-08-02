import React, { useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import logo from '../Assets/logo.PNG'
import cart from '../Assets/cart-icon.PNG'
import { useSelector } from 'react-redux';

function Navbar() {

  const [menu, setMenu] = useState("")
  const cartNumber = useSelector((state) => state.cart.items.length);

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='logo' className='logo' />
        <p>Shopping</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={() => { setMenu("shop"); }}>
          <Link style={{ textDecoration: 'none' }} to='/'>Home</Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("about"); }}>
          <Link style={{ textDecoration: 'none' }} to='/about'>About</Link>
          {menu === "about" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("contact"); }}>
          <Link style={{ textDecoration: 'none' }} to='/contact'>Contact</Link>
          {menu === "contact" ? <hr /> : <></>}

        </li>
        <li onClick={() => { setMenu("allproducts"); }}>
          <Link style={{ textDecoration: 'none' }} to='/allproducts/all'>Allproducts</Link>
          {menu === "allproducts" ? <hr /> : <></>}
        </li>
      </ul>

      <div className='nav-login-cart'>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart} alt='cart' className='cart-icon' /></Link>
        <div className='nav-cart-count'>{cartNumber}</div>
      </div>
    </div>
  )
}

export default Navbar

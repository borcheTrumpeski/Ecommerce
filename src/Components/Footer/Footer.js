import React from 'react'
import './Footer.css'
import facebookLogo from '../Assets/facebook-logo.PNG'
import instagramLogo from '../Assets/instagram-logo.PNG'
import twitterLogo from '../Assets/twitter-logo.PNG'
import logo from '../Assets/logo.PNG'

//zavrseno

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-logo'>
                <img src={logo} alt='' />
                <p>Shoping</p>
            </div>
            <ul className='footer-links'>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

            <div className='footer-icons-container'>
                <img src={facebookLogo} alt='facebook' className='social-icons' />
                <img src={instagramLogo} alt='instragram' className='social-icons' />
                <img src={twitterLogo} alt='twitter' className='social-icons' />
            </div>

            <div className='footer-copyright'>
                <hr />
                <p>Copyright @ 2024 - All Right Reserved</p>
            </div>
        </div>
    )
}

export default Footer
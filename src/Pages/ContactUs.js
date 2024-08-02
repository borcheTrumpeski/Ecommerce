import React from 'react';
import './CSS/ContactUs.css';
import NewsLetter from '../Components/NewsLetter/NewsLetter';
import Hero from '../Components/Hero/Hero';

const ContactUs = () => {
    return (
        <div className='contact'>
            <Hero />
            <div className="contact-us-container">
                <h1>Contact Us</h1>
                <div className="contact-section">
                    <h2>Contact Information</h2>
                    <ul>
                        <li><strong>Email:</strong> shopping@shopping.com</li>
                        <li><strong>Phone:</strong> (123) 456-7890</li>
                        <li><strong>Address:</strong> 48th St., New York, USA</li>
                    </ul>
                </div>
                <div className="contact-section">
                    <h2>Business Hours</h2>
                    <p>Our customer service team is available during the following hours:</p>
                    <ul>
                        <li><strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM</li>
                        <li><strong>Saturday:</strong> 10:00 AM - 2:00 PM</li>
                        <li><strong>Sunday:</strong> Closed</li>
                    </ul>
                </div>
            </div>
            <NewsLetter />
        </div>
    );
};

export default ContactUs;

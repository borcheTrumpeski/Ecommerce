import React from 'react';
import './CSS/AboutUs.css';
import Hero from '../Components/Hero/Hero';
import NewsLetter from '../Components/NewsLetter/NewsLetter';

const AboutUs = () => {
    return (
        <div className='about'>
            <Hero />
            <div className="about-us-container">
                <h1>About Us</h1>
                <div className="about-section">
                    <h2>Our Story</h2>
                    <p>Founded in 2024, Shopping began with a simple mission: to make shopping enjoyable and accessible for everyone. What started as a small venture has grown into a thriving online store, thanks to our loyal customers and dedicated team.</p>
                </div>
                <div className="about-section">
                    <h2>Our Values</h2>
                    <ul>
                        <li><strong>Quality:</strong> We handpick every product to ensure it meets our high standards, providing you with items that are not only stylish but also durable and reliable.</li>
                        <li><strong>Customer Satisfaction:</strong> Your happiness is our priority. Our customer service team is always ready to assist you with any inquiries, returns, or exchanges, ensuring you have a positive shopping experience.</li>
                        <li><strong>Affordability:</strong> We believe that quality shouldn’t come at a high price. That’s why we strive to offer competitive prices on all our products, making great style and innovation accessible to all.</li>
                        <li><strong>Innovation:</strong> We continuously seek out the latest trends and advancements, bringing you new and exciting products that enhance your lifestyle.</li>
                    </ul>
                </div>
                <div className="about-section">
                    <h2>Our Commitment</h2>
                    <p>We are committed to sustainability and ethical practices. We source our products responsibly and aim to minimize our environmental impact. We believe in giving back to the community and regularly participate in charitable activities and initiatives.</p>
                </div>
                <div className="about-section">
                    <h2>Join Our Community</h2>
                    <p>Stay connected with us through our social media channels and newsletter. Follow us for the latest updates, exclusive offers, and behind-the-scenes looks at new arrivals.</p>
                </div>
                <p>Thank you for choosing Shopping. We look forward to serving you and making your shopping experience delightful!</p>
            </div>
            <NewsLetter />
        </div>
    );
};

export default AboutUs;

import React from 'react'
import './Hero.css'
import arrow from '../Assets/arrow.PNG'
import bell from '../Assets/bell.PNG'
import woman from '../Assets/woman.PNG'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-left'>
                <h2>New Arrivals</h2>
                <div>
                    <div className='hero-hand-icon'>
                        <p>new</p>
                        <img src={bell} alt='bell' />
                    </div>
                    <p>collection</p>
                    <p>for everyone</p>
                </div>

                <div className='hero-latest-button'>
                    <div>Latest Collections</div>
                    <img src={arrow} alt='arrow' className='hero-latest-image' />
                </div>
            </div>
            <div lassName='hero-right'>
                <img className='hero-right-img' src={woman} alt='woman' />
            </div>

        </div>
    )
}

export default Hero
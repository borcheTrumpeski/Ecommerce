import React from 'react'
import './Offers.css'
import woman from '../Assets/woman.PNG'

const Offers = () => {
    return (
        <div className='offers'>
            <div className='offers-left'>
                <h1>Exclusive</h1>
                <h1>Offers for you</h1>
                <p>Only on best sellers products</p>
                <button>Check now</button>
            </div>
            <div className='offers-right'>
                <img className='offers-right-img' src={woman} alt='woman' />
            </div>
        </div>
    )
}

export default Offers
import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
    return (
        <div className='news-letter'>
            <h1>Get exclusive offers on your email</h1>
            <p>subscribe to our newletter and stay update</p>
            <div>
                <input type='email' placeholder='enter your email' />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter
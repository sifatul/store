import React from 'react'
import { herobg,herobannerbg, burger6 } from '../assets'
import PowerBank from '/power-bank.jpg'

import './Styles/Hero.css'
function Hero() {

    const containerStyle = {
        backgroundImage: `url(${herobg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '90vh',
    };
    const burgerstyle = {
        backgroundImage: `url(${herobannerbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
    return (
        <div className='hero-container' style={containerStyle}>
            <div className='hero-info'>
                <h6>Unbelievable Discount</h6>
                <h1 className='hero-heading'> Just Check & Compare once </h1>
                <p className='hero-discription'>JOYROOM JR-PBF12 2.4A LED Power Bank 12.5W 10000mAh.</p>
                <button className='button'>Order Now</button>
            </div>
            <div  className='burger' style={burgerstyle}>
                <img  src={burger6} width={550} />
            </div>
        </div>
    )
}

export default Hero
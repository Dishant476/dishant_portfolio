import React from 'react'
import './hero.css'
const Hero = () => {
  return (
    <div className='hero-container h-100 w-100'>
      <div className="hero-inner w-100 h-100p">
        <div className="blob-container w-100 h-100p">
            <div className="blob big blur"></div>
            <div className="blob mid semi-blur"></div>
            <div className="blob small little-blur"></div>
            <div className="blob extra-small too-little-blur"></div>
            <div className="blob small little-blur bottom-left"></div>
            <div className="blob mid semi-blur bottom-right"></div>
            <div className="blob extra-small too-little-blur bottom-little-far-left"></div>
            <div className="blob small little-blur bottom-mid"></div>
        </div>
      </div>
    </div>
  )
}

export default Hero

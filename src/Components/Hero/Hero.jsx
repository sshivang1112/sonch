import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Empowering Lives for a Brighter Future</h1>
        <p>Our initiatives are designed to empower communities with the knowledge, skills, and resources needed to thrive in a just and equitable society.</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero

import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({ setPlayState }) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' onClick={() => { setPlayState(true) }} />
      </div>
      <div className="about-right">
        <h3>ABOUT US</h3>
        <h2>Empowering Communities Since 2002</h2>
        <p><strong>SONCH</strong> is a non-governmental organization dedicated to fostering social transformation in Bihar and Jharkhand. Founded by visionary activists, including Mr. Ashwini Pratapsingh, we work tirelessly to improve lives in underserved regions.</p>
        <p>Our mission:</p>
        <ul>
          <li>Advocate for progressive policies</li>
          <li>Enhance community capacities</li>
          <li>Promote social equity</li>
          <li>Empower local governance</li>
        </ul>
        <p>We focus on empowering <em>marginalized groups</em>, ensuring their voices are heard in decision-making processes. Our goal is to create a society where <strong>every individual can thrive with dignity</strong>.</p>
        <p>Join us in building stronger, more resilient communities.</p>
      </div>
    </div>
  )
}

export default About

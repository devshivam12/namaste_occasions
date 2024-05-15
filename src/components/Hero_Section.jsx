import React from 'react'
import heroBanner from '../assets/main-images/pic1.jpg'
import { Link } from 'react-router-dom'

const Hero_Section = () => {
  return (
    <div className="inner-container">
    <div className="two-sections">
      <div className="hero-section">
        <h1>Creating Unforgettable Events</h1>
        <p>Namaste Occasion offers expert event planning and coordination services to ensure your celebration is unique,
          memorable and stress-free.</p>
        <Link to='/services' className="btn1">View All Services</Link>
      </div>
      <div className="section2">
        <img className="rectangle-img" src={heroBanner} />
      </div>
    </div>
  </div>
  )
}

export default Hero_Section
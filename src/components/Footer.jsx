import React from 'react'
import Footer_Icons from '../components/Footer__Icons'
const Footer = () => {
  return (
    <footer>
      <div className="footermain">

        <div className="footersub2">
          <h1>Subscribe to Newsletter</h1>
          <p>Enter your email address to register to our newsletter subscription!</p>
          <div className="footersub3">
            <input className="subscribeemail" type="email" placeholder="Enter Email Address" />
            <button className="subscribe">Subscribe</button>
          </div>

        </div>

        <Footer_Icons />
        
        <div className="horizontal-line">
          <span></span>
        </div>
        <div className="connect">
          @2024NamsteOccasions.com
        </div>
      </div>

    </footer>
  )
}

export default Footer
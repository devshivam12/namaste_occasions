import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

import Party1 from '../assets/main-images/party planning 1.jpg'
import Party2 from '../assets/main-images/party planning 2.jpg'
import Party3 from '../assets/main-images/party planning 3.jpg'

import { Link } from 'react-router-dom'

const Party_Planing = () => {

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>

      <Nav />
      <div className="slideshow-container">

        <div className={`mySlides fade ${currentSlideIndex === 0 ? 'active' : ''}`}>
          <img src={Party1} alt="Slide 1" />
        </div>
        <div className={`mySlides fade ${currentSlideIndex === 1 ? 'active' : ''}`}>
          <img src={Party2} alt="Slide 2" />
        </div>
        <div className={`mySlides fade ${currentSlideIndex === 2 ? 'active' : ''}`}>
          <img src={Party3} alt="Slide 3" />
        </div>

      </div>

      <div className="description-main">
        <div className="description-horizontal1">
          <h1>Description</h1>
          <div className="horizontalsub1">
            <Link to='/bookevents' className='prev' >Get Started</Link>
          </div>
        </div>
        <div className="description-horizontal2">
          <div className="horizontalsub2">
            <p>
              Planning a party can be a stressful and time-consuming process,
              especially if you’re juggling work and family commitments. At
              Namaste Occasion, we take the hassle out of party planning, so you
              can sit back, relax, and enjoy your celebration.
            </p>
            <p>
              Our party planning services are designed to ensure that your party
              is a success, whether it’s a birthday party, engagement party, or
              any other celebration. We’ll work with you to create a vision for
              your party that reflects your style and personality, and handle all
              the details, from venue selection to decor and entertainment.
            </p>
            <h3>Our party planning services include:</h3>
            <ul>
              <li>
                Theme Creation: We work with you to create a unique and customized
                theme for your party.
              </li>
              <li>
                Venue Selection: We help you select the perfect venue for your
                party, based on your budget and preferences.
              </li>
              <li>
                Decor and Entertainment: We handle all aspects of decor and
                entertainment, ensuring that your party is visually stunning and
                engaging.
              </li>
              <li>
                Catering: We help you choose the perfect catering option that
                suits your budget and theme.
              </li>
              <li>
                On-site Coordination: We are present on-site during the party,
                ensuring that everything runs smoothly and that you and your
                guests have a great time.
              </li>
              <p>
                Let Namaste Occasion handle your party planning needs, so you can
                relax and enjoy a memorable celebration. Contact us today to learn
                more about our party planning services.
              </p>
            </ul>
          </div>
        </div>
        <div className="description-horizontal3">
          <div className="horizontalsub3">
            <h1>Key points</h1>
            <ul>
              <li>Custom Event Planning</li>
              <li>Comprehensive Celebration Management</li>
              <li>Stress-free Party Planning</li>
              <li>Thorough Budget and Timeline Management</li>
              <li>Reliable Ongoing Support</li>
            </ul>
          </div>
          <div className="horizontalsub3">
            <h1>User testimonial</h1>
            <p>
              Jessica Simon<br />I hired Namaste Occasion for my daughter’s sweet
              16 party, and it was a huge success! They listened to our wishes and
              created a magical atmosphere that exceeded our expectations.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Party_Planing
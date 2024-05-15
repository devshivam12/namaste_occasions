import React, {useState, useEffect} from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

import { Link } from 'react-router-dom'

import Celeb1 from '../assets/main-images/pa.jpg'
import Celeb2 from '../assets/main-images/img1.jpg'
import Celeb3 from '../assets/main-images/img2.jpg'

const Celebration_Management = () => {
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
          <img src={Celeb1} alt="Slide 1" />
        </div>
        <div className={`mySlides fade ${currentSlideIndex === 1 ? 'active' : ''}`}>
          <img src={Celeb2} alt="Slide 2" />
        </div>
        <div className={`mySlides fade ${currentSlideIndex === 2 ? 'active' : ''}`}>
          <img src={Celeb3} alt="Slide 3" />
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
            Managing a celebration can be overwhelming, especially if you’re hosting a large event. At Namaste Occasion, we offer comprehensive celebration management services, ensuring that your event runs smoothly and exceeds your expectations.
          </p>
          <p>
            Our celebration management services are designed to handle all aspects of your event, from conception to execution. We work with you to create a vision for your event, and handle all the details, from vendor management to decor and entertainment.
          </p>
          <h3>Our party planning services include:</h3>
          <ul>
            <li>
                Conceptualization: We work with you to create a unique and customized vision for your event.
            </li>
            <li>
                Vendor Management: We manage all vendors involved in your event, ensuring that they meet your expectations and deliver quality services.
            </li>
            <li>
                Budget Management: We help you create a realistic budget for your event and ensure that expenses are managed within your budget.
            </li>
            <li>
                Timeline Management: We create a detailed timeline for your event, ensuring that everything runs smoothly and everyone is on the same page.
            </li>
            <li>
                On-site Coordination: We are present on-site during the event, ensuring that everything is set up according to plan, and all issues are addressed promptly.
            </li>
            <p>
                At Namaste Occasion, we ensure that your event is a success, leaving you with precious memories that will last a lifetime. Contact us today to learn more about our celebration management services.
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

export default Celebration_Management
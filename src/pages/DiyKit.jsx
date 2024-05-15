import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Kit_1 from '../assets/main-images/DIY1.png';
import Kit_2 from '../assets/main-images/DIY2.jpeg';
import Kit_3 from '../assets/main-images/DIY3.jpeg';
import Kit_4 from '../assets/main-images/DIY4.jpeg';
import Kit_5 from '../assets/main-images/DIY5.jpeg';
import '../utils/diykit.css';

const DiyKit = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % 5);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Nav />
      <div className="slideshow-container">

        <div className={`mySlides fade ${currentSlideIndex === 0 ? 'active' : ''}`}>
          <img src={Kit_1} alt="Slide 1" />
        </div>
        <div className={`mySlides fade ${currentSlideIndex === 1 ? 'active' : ''}`}>
          <img src={Kit_2} alt="Slide 2" />
        </div>
        <div className={`mySlides fade ${currentSlideIndex === 2 ? 'active' : ''}`}>
          <img src={Kit_3} alt="Slide 3" />
        </div>
        <div className={`mySlides fade ${currentSlideIndex === 3 ? 'active' : ''}`}>
          <img src={Kit_4} alt="Slide 4" />
        </div>
        <div className={`mySlides fade ${currentSlideIndex === 4 ? 'active' : ''}`}>
          <img src={Kit_5} alt="Slide 5" />
        </div>
      </div>
      <div className="buy-message">
        <p>! Let's Buy for your Loved Ones !</p>
      </div>
      <div className="cardslide">
        <div className="wrapper">
          <ul className="carousel">
            <li className="card">
              <div className="img"><img src={Kit_1} alt="" draggable="false" /> </div>
              <div className="info">
                <h1>Birthday kit</h1>
                <p className="price">1999 ₹</p>
                <p>Unbox joy with our complete party kit featuring banners, balloons, tableware, and more. Elevate
                  your celebration effortlessly with Namaste Occasions.</p>
                <button className="btn">Buy</button>
              </div>
            </li>
            <li className="card">
              <div className="img"><img src={Kit_2} alt="" draggable="false" /> </div>
              <div className="info">
                <h1>Engagement kit</h1>
                <p className="price">2999 ₹</p>
                <p>Enhance your engagement affair with our curated essentials, including banners, props, and décor.
                  Trust Namaste Occasions for seamless celebration planning.</p>
                <button className="btn">Buy</button>
              </div>
            </li>
            <li className="card">
              <div className="img"><img src={Kit_3} alt="" draggable="false" /> </div>
              <div className="info">
                <h1>Haldi kit</h1>
                <p className="price">4999 ₹</p>
                <p>Elevate your Haldi ceremony with our comprehensive essentials, from turmeric supplies to floral
                  décor. Trust Namaste Occasions for seamless celebration planning.</p>
                <button className="btn">Buy</button>
              </div>
            </li>
            <li className="card">
              <div className="img"><img src={Kit_4} alt="" draggable="false" /> </div>
              <div className="info">
                <h1>Mahendi kit</h1>
                <p className="price">4999 ₹</p>
                <p>Get ready for Mehendi festivities with our curated kit, featuring henna supplies, decorative
                  bowls, and floral décor. Let Namaste Occasions add magic to your celebration.</p>
                <button className="btn">Buy</button>
              </div>
            </li>
            <li className="card">
              <div className="img"><img src={Kit_5} alt="" draggable="false" /> </div>
              <div className="info">
                <h1>Anniversary kit</h1>
                <p className="price">999 ₹</p>
                <p>Enhance your anniversary with our special kit, featuring banners, photo frames,
                  and romantic décor. Let Namaste Occasions add charm to your celebration.</p>
                <button className="btn">Buy</button>
              </div>
            </li>
            <li className="card">
              <div className="img"><img src={Kit_3} alt="" draggable="false" /> </div>
              <div className="info">
                <h1>Surprise kit</h1>
                <p className="price">999 ₹</p>
                <p>Enhance your anniversary with our special kit, featuring banners, photo frames,
                  and romantic décor. Let Namaste Occasions add charm to your celebration.</p>
                <button className="btn">Buy</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DiyKit;

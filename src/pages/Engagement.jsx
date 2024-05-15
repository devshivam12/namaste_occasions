import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import '../utils/engagement.css'

import Eng_1 from '../assets/main-images/engagement.jpg'
import Eng_2 from '../assets/main-images/engagement1.jpg'
import Eng_3 from '../assets/main-images/engegement5.jpg'
import Eng_4 from '../assets/main-images/engagement4.jpg'

const Engagement = () => {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="container2">
          <div className="box" id="box1"><img src={Eng_1} /></div>
          <div className="box" id="box2"><img src={Eng_2} /></div>
          <div className="box" id="box3"><img src={Eng_3} /></div>
         
          
        </div>
      </div>

      <div class="birthdaydescription">
        <h1>Engagement</h1>
      </div>

      <div className="section1">
        <div className="two-sections">
          <div className="section1sub1">
            <img className="birthdayimg1" src={Eng_4} />
          </div>
          <div className="section1sub2">
            <h1>Cake Cutting</h1>
            <p>Today marks the beginning of our journey towards forever. Let love lead the way."</p>
          </div>
        </div>
      </div>


      <div className="section2">
        <div className="two-sections2">
          <div className="section1sub11">
            <h1>Fun Moments</h1>
            <p>Together we stand, hand in hand, embarking on the greatest adventure of all - love."</p>
          </div>
          <div className="section1sub22">
            <img className="birthdayimg1" src={Eng_1} />
          </div>
        </div>
      </div>


      <div className="section1">
        <div className="two-sections">
          <div className="section1sub1">
            <img className="birthdayimg1" src={Eng_2} />
          </div>
          <div className="section1sub2">
            <h1>Ring Ceremony</h1>
            <p>"As we exchange rings and vows, let's celebrate the beautiful bond that unites us in love and commitment."</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Engagement
import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

import Mile_1 from '../assets/main-images/mile1.jpg'
import Mile_2 from '../assets/main-images/mile2.jpg'
import Mile_3 from '../assets/main-images/mile3.jpg'
import Mile_4 from '../assets/main-images/mile4.jpg'
import Mile_5 from '../assets/main-images/mile5.jpg'
import Mile_6 from '../assets/main-images/mile6.jpg'

const Milestone = () => {
  return (
    <>
      <Nav />

      <div className="container">
        <div className="container2">
          <div className="box" id="box1"><img src={Mile_1} /></div>
          <div className="box" id="box2"><img src={Mile_2} /></div>
          <div className="box" id="box3"><img src={Mile_3} /></div>

        </div>
      </div>

      <div className="birthdaydescription">
        <h1>Milestone</h1>
      </div>

      <div className="section1">
        <div className="two-sections">
          <div className="section1sub1">
            <img className="birthdayimg1" src={Mile_4} />
          </div>
          <div className="section1sub2">
            <h1>Cake Cutting</h1>
            <p>Through laughter and tears, side by side we've grown, celebrating the milestones of love we've known."</p>
          </div>
        </div>
      </div>


      <div className="section2">
        <div className="two-sections2">
          <div className="section1sub11">
            <h1>Fun Moments</h1>
            <p>With every passing year, our love grows stronger, marking milestones together, forever and longer."</p>
          </div>
          <div className="section1sub22">
            <img className="birthdayimg1" src={Mile_5} />
          </div>
        </div>
      </div>


      <div className="section1">
        <div className="two-sections">
          <div className="section1sub1">
            <img className="birthdayimg1" src={Mile_6} />
          </div>
          <div className="section1sub2">
            <h1>Other Celebration</h1>
            <p>"In the tapestry of time, our journey intertwines, marking milestones with love's enduring shine."</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Milestone
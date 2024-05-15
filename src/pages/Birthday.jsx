import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import '../utils/birthday.css'

import Pic_1 from '../assets/main-images/birth1.jpg'
import Pic_2 from '../assets/main-images/birth2.jpg'
import Pic_3 from '../assets/main-images/birth3.jpg'
import Pic_4 from '../assets/main-images/birth4.jpg'
// import Pic_5 from '../assets/birth5.jpg'

const Birthday = () => {
    return (
        <>
            <Nav />
            <div className="container">
                <div class="container2">
                    <div className="box" id="box1"><img src={Pic_1} /></div>
                    <div className="box" id="box2"><img src={Pic_2} /></div>
                    <div className="box" id="box3"><img src={Pic_3} /></div>
                </div>
            </div>

            <div className="birthdaydescription">
                <h1>Birthday Celebrations</h1>
            </div>

            <div className="section1">
                <div className="two-sections">
                    <div className="section1sub1">
                        <img className="birthdayimg1" src={Pic_2} />
                    </div>
                    <div className="section1sub2">
                        <h1>Cake Cutting</h1>
                        <p>Feel the joyous atmosphere as the birthday celebrant takes a deep breath, ready to make a wish before blowing out the flickering candles adorning their cake.</p>
                    </div>
                </div>
            </div>


            <div className="section2">
                <div className="two-sections">
                    <div className="section1sub1">
                        <h1>Fun Moments</h1>
                        <p>Witness the carefree moments of childhood as children engage in playful activities, forming lasting memories and strengthening bonds in the midst of a vibrant birthday party atmosphere."</p>
                    </div>
                    <div className="section1sub2">
                        <img className="birthdayimg1" src={Pic_4} />
                    </div>
                </div>
            </div>


            <div className="section1">
                <div className="two-sections">
                    <div className="section1sub1">
                        <img className="birthdayimg1" src={Pic_3} />
                    </div>
                    <div className="section1sub22">
                        <h1>Other Celebration</h1>
                        <p>"Birthdays are like little milestones, reminding us of the journey we've traveled and the adventures yet to come."</p>

                        <p>"A birthday is not just a celebration of growing older, but a celebration of the unique story each of us carries within us."</p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Birthday
import React from 'react'
import Kalyan from '../assets/main-images/kalyan.jpg'
import Mangalam from '../assets/main-images/mangalam.jpeg'
import Cinnamon from '../assets/main-images/cinnamon.png'
import Navin from '../assets/main-images/navin-catering-high-resolution-logo-black-transparent.png'
import { AiFillStar } from 'react-icons/ai'

const Company = ({ noOfStar }) => {
  return (
    <div className="main-div">
      <div className="horizontal-div">
        <h1>Featured In</h1>
        <img src={Navin} />
        <img src={Kalyan} />
        <img src={Mangalam} />
        <img src={Cinnamon} />
      </div>

      <div className="vertical">
        <div className="vertical-div1">
          <div classNames="rating">
            <h1>4.8</h1>
            {
              [...Array(noOfStar)].map((_, index) => {
                return (<AiFillStar key={index} size={25} color='orange' />)

              })
            }
            <p>2,394 Ratings</p>
            <p>Google Reviews</p>
          </div>


          <div className="rating">
            <h1>A++</h1>
            {
              [...Array(noOfStar)].map((_, index) => {
                return (<AiFillStar size={25} color='orange' />)
              })
            }
            <p>125 Reviews</p>
            <p>BBB Rating</p>

          </div>
        </div>
        
        <div className="vertical-div2">
          <h1> What Our Clients Say</h1>
          <h3>AKSHAT PANCHAL</h3>
          <p>Namaste Occasion took care of everything for my wedding, from the venue and decorations to the catering and
            entertainment. It was a dream come true!</p>
        </div>
      </div>
    </div>
  )
}

export default Company
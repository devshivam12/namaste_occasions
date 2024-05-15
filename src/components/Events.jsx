import React from 'react'
import Event_Cordination from '../assets/main-images/Event coordination.jpg'
import Celebration_Management from '../assets/main-images/img2.jpg'
import Party_Planing from '../assets/main-images/party planning.jpg'
import Featured from '../assets/main-images/f&b.jpg'
import { Link } from 'react-router-dom'
const Events = () => {
    return (
        <>
            <div className="services">
                <h1>Our Events</h1>
                <Link to='/services' className="Service">View All Services</Link>
            </div>
            <div className="major-container">

                <div className="sub-container">
                    <Link to='/eventcordination'><img src={Event_Cordination} /></Link>
                    <Link to='/eventcordination'>
                    <h1>Event coordination</h1>
                    </Link>
                    <p>We handle everything from venue selection to vendor management to ensure that your event runs smoothly and
                        exceeds your expectations.
                        Read More</p>
                </div>
                <div className="sub-container">
                  <Link to='/celebrationmanagement'><img src={Celebration_Management} alt="Image 2" /></Link>
                    <Link to='/celebrationmanagement'>
                        <h1>Celebration Management</h1>
                    </Link >
                    <p>We handle all aspects of your event, from vendor management to decor and entertainment, ensuring that your
                        celebration runs smoothly and exceeds your expectations.
                        Read More</p>
                </div>
                <div className="sub-container">
                <Link to='/partyplaning' ><img src={Party_Planing} alt="Image 3" /></Link>
                    <Link to='/partyplaning'>
                        <h1>Party Planning</h1>
                    </Link>
                    <p>We handle all the planning and details for your party, from theme creation to decor and entertainment, so you
                        can relax and enjoy the celebration.
                        Read More</p>
                </div>
            </div>

            <div className="horizontal-line">
                <span>Features & Benefits</span>
            </div>

            <div className="major-container2">
                <div className="sub-container2">
                    <h1>Features</h1>
                    <p>Expert Event Coordination</p>
                    <p>Innovative Party Planning</p>
                    <p>Stress-Free Celebration Management</p>
                    <p>Personalized Attention to Detail</p>
                    <p>Creative and Unique Ideas</p>
                </div>
                <div className="sub-container2">
                    <h1>Benefits</h1>
                    <p>Unforgettable Experiences</p>
                    <p>Stress-Free Planning</p>
                    <p>Expert Coordination</p>
                    <p>Personalized Service</p>
                    <p>Affordable Pricing</p>
                </div>
                <div className="sub-container2">
                    <img src={Featured} alt="Image 3" />
                </div>
            </div>

        </>
    )
}

export default Events
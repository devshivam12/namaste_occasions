import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import '../utils/bookevent.css'
import '../index.css'

const BookEvents = () => {
  return (
    <>
      <Nav />

      <form>
        <div className="pdetails">
          <h3>Personal Details</h3>
          <br />
          <hr />

          <br />

          <input className="in" type="text" name="" id="" placeholder="Full Name" />
          <input className="in" type="text" placeholder="State" />
          <input className="in" type="text" placeholder="City" />
          <input className="in" type="email" placeholder="Email" />
          <input className="in" type="tel" placeholder="Contact Number" />

          <h3>Event Information</h3>
          <br />
          <hr />

          <br />
          <select className="select" name="event_type" id="event_type" placeholder="select">
            <option value="select">Select a event</option>
            <option value="wedding">Wedding</option>
            <option value="birthday">Birthday Party/Celebration</option>
            <option value="engagement">Engagement</option>
            <option value="Baby shower">Baby Shower</option>
            <option value="milestone">Milestone</option>
          </select>

          <input className="in" type="text" placeholder="Theme" />

          <textarea className="in" name="" id="" cols="30" rows="10" placeholder="Your Thoughts" />

          <br />
          <div>
            <h3>Booking Details</h3>
            <br />
            <hr />
            <br />
            <label className="lb" htmlFor="">Start date:</label>
            <input type="date" className="date" placeholder="Date of Event" />
            <label htmlFor="" className="lb">End Date:</label>
            <input type="date" className="date" />
            <input className="in" type="text" placeholder="Functions Details" />
          </div>
        </div>
      </form>

      <Footer />
    </>
  );
}

export default BookEvents;

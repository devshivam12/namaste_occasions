import React from 'react';

import Client_1 from '../assets/main-images/testi1.jpg';
import Client_2 from '../assets/main-images/testi2.jpg';
import Client_3 from '../assets/main-images/testi3.jpg';
import Client_4 from '../assets/main-images/testi4.jpg';

import { AiFillStar } from 'react-icons/ai'


const Testimonials = ({ noOfStar }) => {
  return (
    <div className="Testimonials">
      <div className="horizontal2">
        <h1>Client Testimonials</h1>
        <p>Hear What Our Clients Have to Say About Us</p>
      </div>
      <div className="vertical2">
        <div className="verti1">
          <div className="rating1">

            {[...Array(noOfStar)].map((_, index) => {
             
              return (
                <AiFillStar color='orange' size={25}/>
              )
            })}

            <div className="testi">
              <p>Namaste Occasion planned my company's annual party, and it was the talk of the office for
                weeks! They handled everything with professionalism to detail, making it a night to
                remember.</p>
              <div className="testivertical">
                <img src={Client_1} alt="Client 1" />
                <h3>Hemadri Sharma</h3>
              </div>
            </div>
          </div>
          <div className="rating1">
            {
              [...Array(noOfStar)].map((_,index)=>{
               
                return (
              <AiFillStar size={25} color='orange'/>
             )
              })
            }
            <div className="testi">
              <p>Namaste Occasion created a beautiful and elegant setting for my anniversary celebration.
                Their attention
                to detail and personalized approach made it a truly special event.</p>
              <div className="testivertical">
                <img src={Client_2} alt="Client 2" />
                <h3>Mohit Nai</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="verti2">
          <div className="rating1">
          {
            [...Array(noOfStar)].map((_,index)=>{
              return (
                <AiFillStar color='orange' size={25}/>
              )
            })
          }
            <div className="testi">
              <p>I was impressed with Namaste Occasion's creativity and unique ideas for my son's graduation
                party. They
                made sure every detail was taken care of, and it was a stress-free experience for us.</p>
              <div className="testivertical">
                <img src={Client_3} alt="Client 3" />
                <h3>Shreya Kothari</h3>
              </div>
            </div>
          </div>
          <div className="rating1">
            {
              [...Array(noOfStar)].map((_, index)=>{
                return (
                  <AiFillStar size={25} color='orange'/> 
                )
              })
            }
            <div className="testi">
              <p>Namaste Occasion exceeded our expectations with their party planning services. They were able
                to bring
                our vision to life and create a fun and unique experience for everyone.</p>
              <div className="testivertical">
                <img src={Client_4} alt="Client 4" />
                <h3>Shamaldas Patel</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

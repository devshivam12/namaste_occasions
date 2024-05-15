import React, { useState, useEffect } from 'react';
import Logo from '../assets/main-images/Namaste logo.png';

import { Link } from 'react-router-dom';

const Nav = () => {
  
    return (
        <>
           
                <nav className="navbar" id="navbar">
                    <div className="navbar-container" id="dropdownContent">
                        <div className="nav-toggle">
                            <button className="nav-toggle-btn">
                                <i className="fas fa-bars"></i>
                            </button>
                        </div>
                        <div className="nav-left">
                            <Link to='/' className="nav-button">Home</Link>
                            <div className="dropdown">
                                <p className="dropbtn">Personal events</p>
                                <div className="dropdown-content">
                                    <Link to='/personalevents/birthday'>birthday</Link>
                                    <Link to='/personalevents/engagement'>engagement</Link>
                                    <Link to='/personalevents/marriage'>marriage</Link>
                                    <Link to='/personalevents/milestone'>milestone</Link>
                                </div>
                            </div>
                            <Link to='/bookevents' className="nav-button2">Book Events</Link>
                        </div>
                        <div className="logo">
                            <img className="lmg" src={Logo} alt="logo" />
                        </div>
                        <div className="nav-right">
                            <Link to='/diykit' className="nav-button">Diy Kit</Link>
                            <Link to='/joinus' className="nav-button">Join Us</Link>
                            <Link to='/contact' className="nav-button">Contact</Link>
                        </div>
                    </div>
                </nav>
           
        </>
    );
};

export default Nav;

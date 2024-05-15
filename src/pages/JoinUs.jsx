import React, { useState } from 'react';
import '../utils/joinus.css';
// import {FaClosedCaptioning} from 'react-icons/fa'
import { Link } from 'react-router-dom';
Link
const JoinUs = () => {
    const [activePanel, setActivePanel] = useState('register');

    const handleToggle = () => {
        setActivePanel(activePanel === 'register' ? 'login' : 'register');
    };

    return (
        <div className='join'>
        <div className="join-us-container" id="join-us-container">
            <div className={`form-container ${activePanel}`}>
                <form>
                    {activePanel === 'register' ? (
                        <h1>Create Account</h1>
                    ) : (
                        <h1>Sign In</h1>
                    )}
                    <br />
                    {activePanel === 'register' ? (
                        <span>or use your email for registration</span>
                    ) : (
                        <span>or use your email password</span>
                    )}
                    {activePanel === 'register' && <input type="text" placeholder="Name" />}
                    <input type="email" placeholder="Email" />
                    <input type="tel" name="phone" placeholder="Enter your phone number" />
                    <input type="password" placeholder="Password" />
                    {activePanel === 'register' ? (
                        <button>Sign Up</button>
                    ) : (
                        <button>Sign In</button>
                    )}
                </form>
            </div>
            <div className="toggle-container">
           <Link to='/'><span class="close-symbol">×</span></Link>

                <div className="toggle">
                    <div className={`toggle-panel toggle-left ${activePanel === 'login' ? 'active' : ''}`}>
                        <h1>Welcome Back !</h1>
                        <p>Enter your personal details to use all site features</p>
                        <button className="hidden" id="login" onClick={handleToggle}>Sign In</button>
                    </div>
                    <div className={`toggle-panel toggle-right ${activePanel === 'register' ? 'active' : ''}`}>
                        <h1>Welcome, Friend!</h1>
                        <p>Enter your personal details to use all site features</p>
                        <button className="hidden" id="register" onClick={handleToggle}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default JoinUs;

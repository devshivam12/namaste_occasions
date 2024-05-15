import React from 'react'
import '../utils/contact.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Contact = () => {
    return (
        <>
            <Nav />
            <div className="contact-container">
                <div className="contact-info">
                    <h2>Have Questions?</h2>
                    <p>Please feel free to call or email us, or use our
                        contact form to get in touch with us. We look
                        forward to hearing from you!</p>
                    <p><strong>Emergency? Call Us:</strong></p>
                    <p>+1234567890</p>
                    <p><strong>Send Us Mail:</strong> </p>
                    <p>info@example.com</p>
                    <p><strong>Find The company</strong></p>
                    <p>titaniuam city center block-A/811 prahlad nagar ahmedabad</p>
                    <image></image>
                </div>
                <div class="contact-form">
                    <form>
                        <div className="form-group">
                            <input type="text" id="name" name="name" placeholder="Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" id="email" name="email" placeholder="Email" required />
                        </div>
                        <div className="form-group">
                            <input type="text" id="subject" name="subject" placeholder="Subject" required />
                        </div>
                        <div className="form-group">
                            <textarea id="message" name="message" rows="4" placeholder="Message" required />
                        </div>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact
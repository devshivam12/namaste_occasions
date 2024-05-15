import React from 'react'
import Nav from '../components/Nav'
import Hero_Section from '../components/Hero_Section'
import Company from '../components/Company'
import Events from '../components/Events'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div>
        <Nav />
        <Hero_Section />
        <Company noOfStar={5} />
        <Events />
        <Testimonials noOfStar={5} />
        <Footer />
    </div>
  )
}

export default Home
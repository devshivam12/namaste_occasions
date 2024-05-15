import React from 'react'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import BookEvents from './pages/BookEvents'
import DiyKit from './pages/DiyKit'
import JoinUs from './pages/JoinUs'
import Birthday from './pages/Birthday'
import Engagement from './pages/Engagement'
import Milestone from './pages/Milestone'
import Marriage from './pages/Marriage'
import Services from './pages/Services'
import Party_Planing from './pages/Party_Planing'
import Celebration_Management from './pages/Celebration_Management'
import Event_Cordination from './pages/Event_Cordination'


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/personalevents/birthday' element={<Birthday />} />
        <Route path='/personalevents/engagement' element={<Engagement />} />
        <Route path='/personalevents/marriage' element={<Marriage />} />
        <Route path='/personalevents/milestone' element={<Milestone />} />
        <Route path='/services' element={<Services />} />
        <Route path='/bookevents' element={<BookEvents />} />
        <Route path='/diykit' element={<DiyKit />} />
        <Route path='/joinus' element={<JoinUs />} />

        <Route path='/contact' element={<Contact />} />
        <Route path='/eventcordination' element={<Event_Cordination />} />
        <Route path='/celebrationmanagement' element={<Celebration_Management />} />
        <Route path='/partyplaning' element={<Party_Planing />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

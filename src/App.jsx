// import { useState } from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Navbar from './components/Navbar'
// import HeroSection from './components/HeroSection'
// import NextEvent from './components/NextEvent'
// import Sponsors from './components/Sponsors'
// import Speakers from './components/Speakers'
// import Blogs from './components/Blogs'
// import Paid from './components/Paid'
// import Presence from './components/Presence'
// import Contact from './components/Contact'
// import Login from './components/auth/login'
// import Register from './components/Register'

// // Create a HomePage component that contains all your main sections
// function HomePage() {
//   return (
//     <>
//       <section id="home">
//         <HeroSection/>
//       </section>
//       <section id="events">
//         <NextEvent/>
//         <Sponsors/>
//         <Paid/>
//         <Presence/>
//       </section>
//       <section id="speaker">
//         <Speakers/>
//       </section>
//       <section id="blogs">
//         <Blogs/>
//       </section>
//       <section id="contact">
//         <Contact/>
//       </section>
//     </>
//   )
// }

// function App() {
//   return (
//     <Router>
//       <Navbar/>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//       </Routes>
//     </Router>
//   )
// }

// export default App


import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import NextEvent from './components/NextEvent'
import Sponsors from './components/Sponsors'
import Login from './components/Login'
import Register from './components/Register'
import PastEvents from './components/PastEvents'
import RegistrationPage from './components/Registration'
import LegacyPage from './components/Legacy'
import TeamPage from './components/Team'
import ExperiencePage from './components/Experience'
import FAQPage from './components/Faq'
import TestimonialsPage from './components/Testinomials'

function HomePage() {
  return (
    <>
      <section id="home">
        <HeroSection/>
      </section>
      <section id="events">
        <NextEvent/>
        {/* <Presence/> */}
      </section>
      <section id="speaker">
        {/* <Speakers/> */}
      </section>
      <section id="tickets">
        <RegistrationPage/>
      </section>
      <section id="experience">
        <ExperiencePage/>
      </section>
      <section id="sponsors">
        <Sponsors/>
      </section>
      <section id="legacy">
        <LegacyPage/>
      </section>
      <section id="team">
        <TeamPage/>
      </section>
      <section id="blogs">
        {/* <Blogs/> */}
      </section>
      <section id="contact">
        {/* <Contact/> */}
      </section>
      <section id="faqs">
        <FAQPage/>
        <TestimonialsPage/>
      </section>
    </>
  )
}

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pastevent" element={<PastEvents />} />
      </Routes>
    </Router>
  )
}

export default App;
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
import Speakers from './components/Speakers'
import Blogs from './components/Blogs'
import Paid from './components/Paid'
import Presence from './components/Presence'
import Contact from './components/Contact'
// Fixed imports - make sure these paths match your actual file structure
// import LoginPage from './components/auth/login' // or './components/auth/login/index' if it's in a folder
import Login from './components/Login'
import Register from './components/Register'

function HomePage() {
  return (
    <>
      <section id="home">
        <HeroSection/>
      </section>
      <section id="events">
        <NextEvent/>
        <Sponsors/>
        <Paid/>
        <Presence/>
      </section>
      <section id="speaker">
        <Speakers/>
      </section>
      <section id="blogs">
        <Blogs/>
      </section>
      <section id="contact">
        <Contact/>
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
      </Routes>
    </Router>
  )
}

export default App;
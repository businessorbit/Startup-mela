// import { useState } from 'react'
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

// function App() {

//   return (
//     <>
//       <Navbar/>
//       <HeroSection/>
//       <NextEvent/>
//       <Sponsors/>
//       <Speakers/>
//       <Blogs/>
//       <Paid/>
//       <Presence/>
//       <Contact/>
//     </>
//   )
// }

// export default App


import { useState } from 'react'
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

function App() {

  return (
    <>
      <Navbar/>
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

export default App
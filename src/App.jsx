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
      <HeroSection/>
      <NextEvent/>
      <Sponsors/>
      <Speakers/>
      <Blogs/>
      <Paid/>
      <Presence/>
      <Contact/>
    </>
  )
}

export default App

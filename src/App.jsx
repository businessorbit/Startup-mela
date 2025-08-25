import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
import ContactPage from './components/Contact'
import Footer from './components/Footer'

function HomePage() {
  return (
    <>

      <div className="max-w-[1400px] mx-auto px-8 bg-white">
        <section id="home">
          <HeroSection />
        </section>
      </div>
      <div className="max-w-[1400px] mx-auto px-8 bg-white">
        <section id="events">
          <NextEvent />
          {/* <Presence/> */}
        </section>
      </div>
      <div className="max-w-[1400px] mx-auto px-8 bg-[#E7E7E7]">
        <section id="tickets">
          <RegistrationPage />
        </section>
      </div>
      <div className="max-w-[1400px] mx-auto px-8 bg-white">
        <section id="experience">
          <ExperiencePage />
        </section>
      </div>
      <div className="max-w-[1400px] mx-auto px-8 bg-[#E7E7E7]">
        <section id="sponsors">
          <Sponsors />
        </section>
      </div>
      <div className="max-w-[1400px] mx-auto px-8 bg-white">
        <section id="team">
          <TeamPage />
        </section>
      </div>

      <div className="max-w-[1400px] mx-auto px-8 bg-[#E7E7E7]">
        {/* <section id="legacy">
        <LegacyPage/>
      </section> */}
        <section id="faqs">
          <FAQPage />
        </section>
      </div>
      <Footer />
    </>
  )
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pastevent" element={<PastEvents />} />
        <Route path="/contact" element={<ContactPage />} />

      </Routes>
    </Router>
  )
}

export default App;
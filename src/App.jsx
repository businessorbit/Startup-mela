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
      <div className="max-w-[1400px] mx-auto px-8 bg-[#FDF9F3]">
        <section id="home">
          <HeroSection />
        </section>
        <section id="events">
          <NextEvent />
          {/* <Presence/> */}
        </section>
        <section id="speaker">
          {/* <Speakers/> */}
        </section>
        <section id="tickets">
          <RegistrationPage />
        </section>
        <section id="experience">
          <ExperiencePage />
        </section>
        <section id="sponsors">
          <Sponsors />
        </section>
        {/* <section id="legacy">
        <LegacyPage/>
      </section> */}
        <section id="team">
          <TeamPage />
        </section>
        <section id="blogs">
          {/* <Blogs/> */}
        </section>
        <section id="contact">
          {/* <Contact/> */}
        </section>
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
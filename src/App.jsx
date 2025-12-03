import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import NextEvent from './components/NextEvent'
import Sponsors2 from './components/Sponsors2'
import RegistrationPage from './components/Registration'
import TeamPage from './components/Team'
import ExperiencePage from './components/Experience'
import FAQPage from './components/Faq'
import ContactPage from './components/Contact'
import Footer from './components/Footer'
import TermsAndConditions from './components/TermsAndConditions'

function HomePage() {
  return (
    <>

      <div className="max-w-[1400px] mx-auto px-0 sm:px-8 bg-white">
        <section id="home">
          <HeroSection />
        </section>
      </div>
      <div className="max-w-[1400px] mx-auto px-0 sm:px-8 bg-white">
        <section id="events">
          <NextEvent />
          {/* <Presence/> */}
        </section>
      </div>
      <div className="max-w-[1400px] mx-auto px-0 sm:px-8 bg-[#E7E7E7]">
        <section id="tickets">
          <RegistrationPage />
        </section>
      </div>
      <div className="max-w-[1400px] mx-auto px-0 sm:px-8 bg-white">
        <section id="experience">
          <ExperiencePage />
        </section>
      </div>
      <div className="max-w-[1400px] mx-auto px-0 sm:px-8 bg-white">
        <section id="sponsors">
          {/* <Sponsors /> */}
          <Sponsors2 />
        </section>
      </div>
      <div className="max-w-[1400px] mx-auto px-0 sm:px-8 bg-white">
        <section id="team">
          <TeamPage />
        </section>
      </div>

      <div className="max-w-[1400px] mx-auto px-0 sm:px-8 bg-[#E7E7E7]">
        {/* <section id="legacy">
        <LegacyPage/>
      </section> */}
        <section id="faqs">
          <FAQPage />
        </section>
      </div>
    </>
  )
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/terms" element={<TermsAndConditions />} />
      </Routes>
      <div className="max-w-[1400px] mx-auto px-0 sm:px-8 bg-[#E7E7E7]">
        <Footer />
      </div>
    </Router>
  )
}

export default App;
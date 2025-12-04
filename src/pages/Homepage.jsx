import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import AboutSection from '../components/AboutSection/AboutSection';
import ExperienceSection from '../components/Experience/Experience';
import ZonesSection from '../components/Zones/Zones';
import PassesSection from '../components/Passes/Passes';
import AgendaSection from '../components/Agenda/Agends';
import FooterSection from '../components/Footer/FooterSection';

const HomePage = () => {
  return (
    <div className="relative min-h-screen w-full selection:bg-[#00C2FF]/30">
      

      {/* 2. Navigation
        Fixed to top, z-index 50.
      */}
      <Navbar />

      {/* 3. Main Content
        Includes Hero and future sections.
      */}
      <main className="relative z-10">
        <Hero />
        <AboutSection />
        <ExperienceSection />
        <ZonesSection />
        <PassesSection />
        <AgendaSection />
      </main>

      <FooterSection />
    </div>
  );
};

export default HomePage;
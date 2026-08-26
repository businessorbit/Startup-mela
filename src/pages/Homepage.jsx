import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import AboutSection from "../components/AboutSection/AboutSection";
import ExperienceSection from "../components/Experience/Experience";
import ZonesSection from "../components/Zones/Zones";
import PassesSection from "../components/Passes/Passes";
import AgendaSection from "../components/Agenda/Agends";
import FooterSection from "../components/Footer/FooterSection";

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    // Wait for sections to mount before scrolling to hash targets
    const timer = setTimeout(() => {
      document
        .querySelector(location.hash)
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);

    return () => clearTimeout(timer);
  }, [location.hash, location.pathname]);

  return (
    <div className="relative min-h-screen w-full selection:bg-[#00C2FF]/30">
      <Navbar />

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

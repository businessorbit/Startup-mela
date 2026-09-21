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
import SEO from "../components/SEO/SEO";
import {
  pageSEO,
  buildEventSchema,
  buildOrganizationSchema,
  buildWebSiteSchema,
} from "../data/seo";

const HomePage = () => {
  const location = useLocation();
  const seo = pageSEO.home;

  useEffect(() => {
    if (!location.hash) return;

    const timer = setTimeout(() => {
      document
        .querySelector(location.hash)
        ?.scrollIntoView({ behavior: "smooth" });
    }, 150);

    return () => clearTimeout(timer);
  }, [location.hash, location.pathname]);

  return (
    <div className="relative min-h-screen w-full selection:bg-[#00C2FF]/30">
      <SEO
        title={seo.title}
        description={seo.description}
        path={seo.path}
        keywords={seo.keywords}
        jsonLd={[
          buildOrganizationSchema(),
          buildWebSiteSchema(),
          buildEventSchema(),
        ]}
      />
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

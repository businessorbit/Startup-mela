import { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import FooterSection from "../components/Footer/FooterSection";

const PDF_SRC = "/Start%20Up%20mela%202027%20new.pdf";

const EventPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-dvh w-full bg-black text-white">
      <Navbar />

      <main
        data-theme="dark"
        className="relative z-10 pt-20 sm:pt-24 md:pt-28 px-4 sm:px-6 md:px-12 pb-12"
      >
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 sm:mb-8">
            Event Details
          </h1>

          {/* Mobile: open PDF in-browser (iframe often blank on iOS) */}
          <div className="sm:hidden flex flex-col items-center gap-6 py-10 px-4 rounded-2xl border border-white/10 bg-neutral-950 text-center">
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              View the full Startup Mela 2027 brochure on your phone.
            </p>
            <a
              href={PDF_SRC}
              className="inline-flex items-center justify-center w-full max-w-xs px-8 py-4 rounded-full bg-white text-black font-bold text-base active:scale-95 transition-transform"
            >
              Open Brochure
            </a>
          </div>

          {/* Desktop / tablet: embedded viewer */}
          <div className="hidden sm:block w-full h-[75vh] md:h-[80vh] rounded-2xl overflow-hidden border border-white/10 bg-neutral-950">
            <iframe
              title="Startup Mela 2027 Event Brochure"
              src={PDF_SRC}
              className="w-full h-full border-0"
            />
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default EventPage;

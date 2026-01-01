import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import ExhibitionStalls from "../components/ExhibitionStalls/ExhibitionStalls";
import FooterSection from "../components/Footer/FooterSection";

const ExhibitionStallsPage = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section with custom heading */}
        <section
          data-theme="dark"
          className="relative h-screen w-full flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-12 py-8"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {/* Reuse AnimatedBg from Hero */}
          <div className="absolute inset-0 bg-linear-to-b from-[#0a0a0a] via-[#0f172a] to-black z-0"></div>

          {/* Graphic Wave Overlay */}
          <div className="absolute inset-0 z-0 pointer-events-none mix-blend-overlay opacity-30">
            <svg
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 800"
              preserveAspectRatio="none"
            >
              <path
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="2"
                d="M-100,400 C200,200 400,600 700,400 C1000,200 1200,600 1500,400"
              />
              <path
                fill="none"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="2"
                d="M-100,450 C200,250 400,650 700,450 C1000,250 1200,650 1500,450"
              />
              <path
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="2"
                d="M-100,500 C200,300 400,700 700,500 C1000,300 1200,700 1500,500"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00C2FF" />
                  <stop offset="50%" stopColor="#0070FF" />
                  <stop offset="100%" stopColor="#00E29B" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center w-full max-w-350 mx-auto">
            {/* Main Heading */}
            <h1 className="w-full font-extrabold tracking-tighter leading-none mb-6">
              <span className="block text-[10vw] xl:text-[120px] text-white">
                Exhibit at
              </span>
              <span className="block text-[12vw] xl:text-[160px] mt-2">
                <span className="text-white">Startup </span>
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00C2FF] via-[#0070FF] to-[#00E29B]">
                  Mela
                </span>
              </span>
              <span className="block text-[8vw] xl:text-[100px] text-white mt-2">
                2026
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-lg md:text-2xl font-light text-neutral-300 mb-6 tracking-wide max-w-3xl leading-relaxed">
              Showcase your brand, connect with thousands of attendees, and be
              part of North India's largest startup and entrepreneurship event.
            </p>

            {/* Supporting Text */}
            <p className="text-base md:text-lg text-neutral-400 mb-10 max-w-2xl">
              Choose a stall size that fits your goals—from early-stage exposure
              to premium brand presence.
            </p>

            {/* CTA Button */}
            <button
              onClick={() => {
                document
                  .getElementById("exhibition-stalls")
                  .scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative px-12 py-5 rounded-full bg-white text-black font-bold text-xl shadow-lg shadow-white/10 hover:shadow-white/25 hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden flex items-center gap-3"
            >
              <span className="relative z-10">View Stall Options</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="relative z-10 group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </section>

        {/* Exhibition Stalls Section */}
        <ExhibitionStalls />
      </main>
      <FooterSection />
    </>
  );
};

export default ExhibitionStallsPage;

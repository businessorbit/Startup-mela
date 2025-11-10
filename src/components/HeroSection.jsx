import React from "react";
import { Star, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden m-0 p-0">
      {/* Fullscreen Background Video */}
      <video
        className="fixed inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        aria-hidden="true"
      >
        <source
          src="https://res.cloudinary.com/doujv3bfg/video/upload/v1761846238/event/event_o6fjh0.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="fixed inset-0 bg-black/70 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-screen w-full px-4">
        {/* Event Badge */}
        <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md px-5 py-3 rounded-full border border-white/20 shadow-lg mb-8">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="text-sm font-semibold tracking-wide text-white">
              CHANDIGARH'S PREMIER STARTUP EVENT
            </span>
            <Sparkles className="w-5 h-5 text-pink-400" />
            <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold leading-tight mb-6">
          <span className="block text-gray-100 text-2xl sm:text-4xl mb-2">
            Startup Mela 2026
          </span>
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Networking Summit
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl text-lg sm:text-2xl text-gray-200 mb-10">
          Join Chandigarh’s Largest Gathering of{" "}
          <span className="font-bold bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
            Innovators, Investors & Industry Leaders
          </span>
        </p>

        {/* Brochure Button */}
        <a
          href="/EVENT DETAILS (1).pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          📄 View Event Brochure
        </a>
      </div>

      {/* Floating Particles (optional aesthetic) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-br from-blue-400 to-pink-500 rounded-full animate-ping opacity-60"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;

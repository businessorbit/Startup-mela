import React from 'react';
import { Music, Star, Sparkles, Calendar, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background Image with Low Opacity */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage: `url('/cheer.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom'

        }}
      />

      <div className="absolute inset-0 bg-white/30 backdrop-blur-[0.5px]" />

      <div className="absolute bottom-0 left-0 right-0 h-16 opacity-60">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="absolute bottom-0 bg-gradient-to-t from-slate-700 to-slate-500 rounded-t-full animate-pulse"
            style={{
              left: `${5 + i * 4.5}%`,
              width: `${Math.random() * 8 + 6}px`,
              height: `${Math.random() * 30 + 20}px`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 pt-20">
        <div className="text-center space-y-12 max-w-5xl">
          {/* Premium Badge */}
          <div className="inline-flex items-center space-x-3 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <span className="text-sm font-semibold text-slate-700 tracking-wide">CHANDIGARH'S PREMIER STARTUP EVENT</span>
              <Sparkles className="w-5 h-5 text-blue-500" />
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight">
              <span className="block text-3xl md:text-4xl font-bold text-slate-800 mb-4 tracking-wider">
                Startup Mela 2025
              </span>
              <span className="block relative">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent ">
                  Entrepreneurship Summit
                </span>
                {/* Decorative underline */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-blue-400 to-pink-400 rounded-full opacity-60 animate-pulse" />
              </span>
            </h1>

            <div className="space-y-4 max-w-4xl mx-auto">
              <p className="text-2xl md:text-3xl text-slate-800 font-medium leading-relaxed">
                Join North India's Largest Gathering of{' '}
                <span className="font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Innovators, Investors, and Industry Leaders
                </span>
              </p>


            </div>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12">
            <div className="inline-flex items-center space-x-8 bg-white/70 backdrop-blur-md px-8 py-4 rounded-2xl border border-slate-200 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-slate-700">Live Business Pitching</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-slate-700">Network with Investors</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-slate-700">Premier Startup Event</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full animate-ping opacity-60"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
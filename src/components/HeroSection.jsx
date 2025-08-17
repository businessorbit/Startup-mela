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
          backgroundImage: `url('/event.jpg')`, // Replace with your actual image path
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[0.5px]" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200/40 to-purple-300/30 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-pink-200/40 to-orange-300/30 rounded-full blur-lg animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-60 left-1/4 w-28 h-28 bg-gradient-to-br from-indigo-200/40 to-cyan-300/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 right-1/4 w-20 h-20 bg-gradient-to-br from-violet-200/40 to-pink-300/30 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1.5s' }} />

        {/* Modern Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full w-full">
            {Array.from({ length: 48 }, (_, i) => (
              <div key={i} className="border border-slate-300 rounded-lg" />
            ))}
          </div>
        </div>

        {/* Floating Icons */}
        <div className="absolute top-32 left-1/3 text-blue-400/30 animate-bounce" style={{ animationDelay: '0.2s' }}>
          <Music size={24} />
        </div>
        <div className="absolute top-96 right-1/3 text-purple-400/30 animate-bounce" style={{ animationDelay: '0.8s' }}>
          <Calendar size={20} />
        </div>
        <div className="absolute bottom-32 left-1/5 text-pink-400/30 animate-bounce" style={{ animationDelay: '1.2s' }}>
          <Users size={22} />
        </div>
        <div className="absolute bottom-96 right-1/5 text-indigo-400/30 animate-bounce" style={{ animationDelay: '0.4s' }}>
          <Sparkles size={18} />
        </div>
      </div>

      {/* Modern Stage Illustration */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-80">
        <div className="relative">
          {/* Main Stage Platform */}
          <div className="w-48 h-20 bg-gradient-to-t from-slate-300 to-slate-100 rounded-2xl shadow-2xl border border-slate-200">
            {/* Stage Lights */}
            <div className="absolute -top-8 left-6 w-6 h-12 bg-gradient-to-b from-slate-600 to-slate-400 rounded-full shadow-lg">
              <div className="absolute top-2 left-1 w-4 h-4 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full animate-pulse shadow-lg" />
            </div>
            <div className="absolute -top-8 right-6 w-6 h-12 bg-gradient-to-b from-slate-600 to-slate-400 rounded-full shadow-lg">
              <div className="absolute top-2 left-1 w-4 h-4 bg-gradient-to-br from-blue-300 to-purple-400 rounded-full animate-pulse shadow-lg" style={{ animationDelay: '0.3s' }} />
            </div>

            {/* Center Podium */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-t from-slate-400 to-slate-200 rounded-lg shadow-inner border border-slate-300">
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-8 bg-slate-600 rounded-full" />
              <div className="absolute bottom-2 left-2 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <div className="absolute bottom-2 right-2 w-3 h-3 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
            </div>
          </div>

          {/* Sound Waves */}
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {Array.from({ length: 7 }, (_, i) => (
              <div
                key={i}
                className={`w-1 bg-gradient-to-t from-blue-400 to-purple-500 rounded animate-pulse`}
                style={{
                  height: `${Math.random() * 20 + 10}px`,
                  animationDelay: `${i * 0.1}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Crowd Silhouettes */}
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
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
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
              {/* <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
                This is more than just a conference; it's a three-day festival of innovation, a launchpad for groundbreaking businesses, and the ultimate networking event in the Tricity. Join us from <span className="font-bold text-blue-600">January 16-18, 2025</span>, at the iconic <span className="font-bold text-purple-600">Sector 34 Ground, Chandigarh</span>, for an unparalleled experience designed to connect, inspire, and accelerate growth for startups and entrepreneurs.
              </p> */}
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed max-w-3xl mx-auto border border-gray-400/30 bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                This is more than just a conference; it's a three-day festival of innovation, a launchpad for groundbreaking businesses, and the ultimate networking event in the Tricity. Join us from <span className="font-bold text-green-300">January 16-18, 2025</span>, at the iconic <span className="font-bold text-purple-300">Sector 34 Ground, Chandigarh</span>, for an unparalleled experience designed to connect, inspire, and accelerate growth for startups and entrepreneurs.
              </p>

              {/* <p className="text-lg md:text-xl text-gray-800 leading-relaxed max-w-3xl mx-auto border border-gray-300 bg-gray-100 p-6 rounded-lg shadow-sm">
                This is more than just a conference; it's a three-day festival of innovation, a launchpad for groundbreaking businesses, and the ultimate networking event in the Tricity. Join us from <span className="font-bold text-green-700">January 16-18, 2025</span>, at the iconic <span className="font-bold text-purple-700">Sector 34 Ground, Chandigarh</span>, for an unparalleled experience designed to connect, inspire, and accelerate growth for startups and entrepreneurs.
              </p> */}

              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-3 rounded-2xl border border-blue-100 shadow-lg">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="text-lg font-semibold text-blue-700">
                  Your Journey to Success Starts Here - Secure your spot at the most anticipated business event of the year!
                </span>
                <Sparkles className="w-5 h-5 text-purple-600" />
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { value: '500+', label: 'Startups & Investors', color: 'from-yellow-400 to-orange-500', icon: Star },
              { value: '50+', label: 'Industry Speakers', color: 'from-blue-400 to-cyan-500', icon: Users },
              { value: '3 Days', label: 'Networking & Pitching', color: 'from-pink-400 to-purple-500', icon: Sparkles }
            ].map((stat, index) => (
              <div key={index} className="group bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className={`text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div> */}

          {/* CTA Buttons */}
          

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
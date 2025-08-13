import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><radialGradient id="stage" cx="50%" cy="20%" r="60%"><stop offset="0%" stop-color="%23ff6b35" stop-opacity="0.8"/><stop offset="40%" stop-color="%23f7931e" stop-opacity="0.6"/><stop offset="100%" stop-color="%23000000" stop-opacity="0.9"/></radialGradient><radialGradient id="crowd" cx="50%" cy="100%" r="80%"><stop offset="0%" stop-color="%23ff6b35" stop-opacity="0.3"/><stop offset="50%" stop-color="%23000000" stop-opacity="0.8"/><stop offset="100%" stop-color="%23000000" stop-opacity="1"/></radialGradient></defs><rect width="1200" height="800" fill="url(%23stage)"/><rect width="1200" height="400" y="400" fill="url(%23crowd)"/></svg>')`
        }}
      >
        {/* Stage Lights Effect */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-1/4 w-32 h-32 bg-orange-400/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-16 right-1/3 w-24 h-24 bg-yellow-400/40 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-20 left-1/2 w-28 h-28 bg-red-400/35 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-12 right-1/4 w-20 h-20 bg-orange-300/45 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        {/* DJ Silhouette */}
        <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2">
          <div className="relative">
            <div className="w-32 h-32 bg-black/80 rounded-full"></div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-48 h-20 bg-black/60 rounded-t-full"></div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-orange-400 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 left-1/2 transform translate-x-4 w-4 h-4 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
        
        {/* Crowd Silhouettes */}
        <div className="absolute bottom-0 left-0 right-0 h-40">
          <div className="absolute bottom-0 left-10 w-4 h-16 bg-black/70 rounded-t-full"></div>
          <div className="absolute bottom-0 left-20 w-3 h-12 bg-black/60 rounded-t-full"></div>
          <div className="absolute bottom-0 left-32 w-5 h-20 bg-black/80 rounded-t-full"></div>
          <div className="absolute bottom-0 left-44 w-3 h-14 bg-black/65 rounded-t-full"></div>
          <div className="absolute bottom-0 right-10 w-4 h-18 bg-black/75 rounded-t-full"></div>
          <div className="absolute bottom-0 right-24 w-5 h-16 bg-black/70 rounded-t-full"></div>
          <div className="absolute bottom-0 right-40 w-3 h-22 bg-black/80 rounded-t-full"></div>
          <div className="absolute bottom-0 right-56 w-4 h-14 bg-black/65 rounded-t-full"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="text-center space-y-8 max-w-4xl">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              <span className="block text-4xl md:text-6xl font-light italic text-orange-200">
                Make Every Event
              </span>
              <span className="block bg-gradient-to-r from-orange-400 via-red-400 to-orange-400 bg-clip-text text-transparent">
                Unforgettable
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 font-light max-w-2xl mx-auto leading-relaxed">
              Professional Event Management Services That Bring Your Vision To Life
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-lg shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300 hover:from-orange-500 hover:to-red-500">
              Know More
            </button>
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300">
              Register
            </button>
          </div>
        </div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-orange-400 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-red-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-orange-300 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
      </div>
    </div>
  );
};

export default HeroSection;
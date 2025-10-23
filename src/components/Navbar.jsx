import React, { useState } from 'react';
import { Menu, X, Calendar, Users, BookOpen, MessageCircle, Mic, Info, Ticket, FileText, Trophy, Heart, Award, HelpCircle } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const EventNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Home', icon: Calendar, href: '#home', section: 'home' },
    { name: 'Event Details', icon: FileText, href: '#events', section: 'events' },
    { name: 'Registration', icon: Ticket, href: '#tickets', section: 'tickets' },
    { name: 'Experience', icon: Heart, href: '#experience', section: 'experience' },
    { name: 'Sponsors', icon: Trophy, href: '#sponsors', section: 'sponsors' },
    { name: 'Team', icon: Users, href: '#team', section: 'team' },
    { name: 'FAQs', icon: HelpCircle, href: '#faqs', section: 'faqs' },
  ];

  // Enhanced navigation handler
  const handleNavigation = (e, href, section) => {
    e.preventDefault();
    
    // Check if we're on the homepage
    const isHomePage = location.pathname === '/' || location.pathname === '';
    
    if (isHomePage) {
      // If on homepage, use smooth scroll
      handleSmoothScroll(section);
    } else {
      // If on other pages, navigate to homepage with hash
      navigate(`/${href}`);
    }
    
    // Close mobile menu after clicking
    setIsOpen(false);
  };

  // Smooth scroll function (only works on homepage)
  const handleSmoothScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const navbarHeight = 64; // h-16 = 64px
      const targetPosition = targetElement.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Handle logo click - always go to homepage
  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/' && location.pathname !== '') {
      navigate('/');
    } else {
      // If already on homepage, scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#40403E] text-black backdrop-blur-md border-b border-purple-500/20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Clickable to go home */}
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={handleLogoClick}>
              <div className="ml-3 flex items-center space-x-3">
                <img 
                  src="/Startup Mela Logo.png" 
                  alt="Startup Mela Logo" 
                  className="h-8 w-auto object-contain"
                />
                <h1 className="text-xl font-bold text-white bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent hover:from-purple-200 hover:to-white transition-all duration-300">
                  Startup Mela
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-0 overflow-x-auto">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavigation(e, item.href, item.section)}
                      className="group relative px-3 py-2 font-bold rounded-lg text-white hover:text-gray-200 transition-all duration-300 ease-in-out cursor-pointer whitespace-nowrap"
                    >
                      <div className="flex items-center space-x-1">
                        <Icon className="w-3 h-3 group-hover:scale-110 transition-transform duration-300" />
                        <span className="font-medium text-sm">{item.name}</span>
                      </div>
                      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Mobile Menu */}
            <div className="flex items-center space-x-4">

              {/* Mobile menu button */}
              <div className="lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="relative z-50 p-2 rounded-lg text-white hover:text-[#40403E] hover:bg-[#BFBFBD] transition-all duration-300 transform hover:scale-110"
                >
                  <div className="w-6 h-6 relative">
                    <div className={`absolute inset-0 transform transition-all duration-300 ${isOpen ? 'rotate-45 opacity-100' : 'rotate-0 opacity-100'}`}>
                      {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay - Right to Left Slide */}
      <div className={`lg:hidden fixed inset-0 z-40 transform transition-all duration-500 ease-in-out ${
        isOpen ? 'translate-x-0 opacity-100 visible' : 'translate-x-full opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        />
        
        {/* Side Menu Panel */}
        <div className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-[#40403E] shadow-2xl transform transition-all duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-purple-500/20 bg-gradient-to-r from-[#40403E] to-[#4a4a48]">
            <div>
              <h2 className="text-xl font-bold text-white bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Startup Mela
              </h2>
              <p className="text-sm text-gray-300 mt-1">Navigation Menu</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg text-white hover:text-purple-200 hover:bg-purple-800/30 transition-all duration-300 transform hover:scale-110"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col h-[calc(100vh-140px)] overflow-y-auto">
            <div className="flex-1 py-6 px-4 space-y-2">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavigation(e, item.href, item.section)}
                    className={`group relative flex items-center space-x-4 px-4 py-4 rounded-xl text-white hover:text-[#40403E] hover:bg-[#BFBFBD] transition-all duration-300 cursor-pointer transform hover:scale-[1.02] hover:shadow-lg border border-transparent hover:border-purple-500/30 ${
                      index % 2 === 0 ? 'animate-fade-in-left' : 'animate-fade-in-right'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex-shrink-0">
                      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300 hover:text-[#40403E] hover:bg-[#BFBFBD]" />
                    </div>
                    <span className="font-medium text-base">{item.name}</span>
                    
                    {/* Hover Effect Line */}
                    {/* <div className="absolute left-0 top-0 h-full w-1 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-r-lg"></div> */}
                  </a>
                );
              })}
            </div>
            
            {/* Bottom Action Buttons */}
            <div className="p-4 border-t border-gray-500/20 bg-gradient-to-r from-[#40403E] to-[#4a4a48] space-y-3">
              <button 
                onClick={() => {
                  navigate('/');
                  setIsOpen(false);
                }}
                className="w-full px-4 py-3 bg-[#BFBFBD] text-[#40403E] font-semibold rounded-xl shadow-lg hover:shadow-gray-500/25 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2 hover:bg-gray-200"
              >
                <Calendar className="w-5 h-5" />
                <span>Back to Home</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in-left {
          animation: fade-in-left 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in-right {
          animation: fade-in-right 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default EventNavbar;
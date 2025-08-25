import React, { useState } from 'react';
import { Menu, X, Calendar, Users, BookOpen, MessageCircle, Mic, Info, Ticket, FileText, Trophy, Heart, Award, UserCheck, HelpCircle } from 'lucide-react';
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
    // { name: 'Our Legacy', icon: Award, href: '#legacy', section: 'legacy' },
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
              <div className="ml-3">
                <h1 className="text-xl font-bold text-[#BFBFBD] bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent hover:from-purple-200 hover:to-white transition-all duration-300">
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
                      className="group relative px-3 py-2 font-bold rounded-lg text-[#BFBFBD] hover:text-white transition-all duration-300 ease-in-out cursor-pointer whitespace-nowrap"
                    >
                      <div className="flex items-center space-x-1">
                        <Icon className="w-3 h-3 group-hover:scale-110 transition-transform duration-300" />
                        <span className="font-medium text-sm">{item.name}</span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Register Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Conditional Login/Register or Back to Home Button */}
              {location.pathname === '/' || location.pathname === '' ? (
                // Show Login/Register on homepage
                <button 
                  onClick={() => navigate('/login')}
                  className="hidden lg:block relative overflow-hidden px-6 py-2 bg-[#BFBFBD] text-[#40403E] font-semibold rounded-lg shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 group">
                  <span className="relative z-10 flex items-center space-x-2">
                    <UserCheck className="w-4 h-4" />
                    <span>Login/Register</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              ) : (
                // Show Back to Home on other pages
                <button 
                  onClick={() => navigate('/')}
                  className="hidden lg:block relative overflow-hidden px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 group">
                  <span className="relative z-10 flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>Back to Home</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              )}

              {/* Mobile menu button */}
              <div className="lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-purple-800/50 transition-colors duration-300"
                >
                  {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-md border-t border-purple-500/20 max-h-80 overflow-y-auto">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavigation(e, item.href, item.section)}
                  className="group flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-800/30 hover:to-pink-800/30 transition-all duration-300 cursor-pointer"
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium">{item.name}</span>
                </a>
              );
            })}
            
            {/* Mobile Login & Register Buttons - Conditional */}
            {location.pathname === '/' || location.pathname === '' ? (
              <>
                <button 
                  onClick={() => navigate('/login')}
                  className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-purple-500/25 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2">
                  <UserCheck className="w-4 h-4" />
                  <span>Login</span>
                </button>
                <button 
                  onClick={() => navigate('/register')}
                  className="w-full mt-2 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-purple-500/25 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>Register</span>
                </button>
              </>
            ) : (
              <button 
                onClick={() => navigate('/')}
                className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-purple-500/25 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Back to Home</span>
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default EventNavbar;
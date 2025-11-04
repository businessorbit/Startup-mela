import React from 'react';
import { Instagram, Linkedin, Twitter, Mail, Phone } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Navigation items matching the Navbar
  const navItems = [
    { name: 'Home', href: '#home', section: 'home' },
    { name: 'Event Details', href: '#events', section: 'events' },
    { name: 'Registration', href: '#tickets', section: 'tickets' },
    { name: 'Experience', href: '#experience', section: 'experience' },
    { name: 'Sponsorship', href: '#sponsors', section: 'sponsors' },
    { name: 'Team', href: '#team', section: 'team' },
    { name: 'FAQs', href: '#faqs', section: 'faqs' },
    { name: 'Contact Us', href: '/contact', section: null },
    { name: 'Terms & Conditions', href: '#', section: null },
  ];

  // Enhanced navigation handler (same as Navbar)
  const handleNavigation = (e, href, section) => {
    e.preventDefault();
    
    // Handle Contact Us and Terms & Conditions differently
    if (href === '/contact') {
      navigate('/contact');
      return;
    }
    
    if (href === '#') {
      // Terms & Conditions - can be handled later if needed
      return;
    }
    
    // Check if we're on the homepage
    const isHomePage = location.pathname === '/' || location.pathname === '';
    
    if (isHomePage && section) {
      // If on homepage, use smooth scroll
      handleSmoothScroll(section);
    } else {
      // If on other pages, navigate to homepage with hash
      navigate(`/${href}`);
    }
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

  return (
    <footer className="bg-[#E7E7E7] text-gray-800 py-12 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Contact Us Section */}
          <div>
            <h3 className="text-gray-900 text-lg font-semibold mb-4">Contact Us:</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <a 
                  href="mailto:contact@businessorbit.org" 
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  contact@businessorbit.org
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <a 
                  href="tel:+917696834279" 
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  +91 76968 34279
                </a>
              </div>
            </div>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="text-gray-900 text-lg font-semibold mb-4">Follow Us:</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-2 bg-white rounded-full hover:bg-blue-600 transition-colors duration-200 group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-gray-700 group-hover:text-white" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-white rounded-full hover:bg-blue-600 transition-colors duration-200 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-700 group-hover:text-white" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-white rounded-full hover:bg-blue-600 transition-colors duration-200 group"
                aria-label="Twitter/X"
              >
                <Twitter className="w-5 h-5 text-gray-700 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-gray-900 text-lg font-semibold mb-4">Quick Links:</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavigation(e, item.href, item.section)}
                  className="block text-gray-700 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-400 pt-8">
          {/* Bottom Links */}
          <div className="flex justify-center items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-sm text-gray-600 font-bold">
              © 2025 Startup Mela. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
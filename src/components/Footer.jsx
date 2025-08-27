import React from 'react';
import { Instagram, Linkedin, Twitter, Mail, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Contact Us Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us:</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a 
                  href="mailto:contact@businessorbit.org" 
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  contact@businessorbit.org
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <a 
                  href="tel:+917696834279" 
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  +91 76968 34279
                </a>
              </div>
            </div>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Follow Us:</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors duration-200 group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 group-hover:text-white" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors duration-200 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 group-hover:text-white" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors duration-200 group"
                aria-label="Twitter/X"
              >
                <Twitter className="w-5 h-5 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links:</h3>
            <div className="space-y-2">
              <a 
                href="#" 
                className="block hover:text-blue-400 transition-colors duration-200"
              >
                About Us
              </a>
              <a 
                href="#" 
                className="block hover:text-blue-400 transition-colors duration-200"
              >
                Sponsorships
              </a>
              <a 
                href="#" 
                className="block hover:text-blue-400 transition-colors duration-200"
              >
                Terms and Conditions
              </a>
              <a 
                href="#" 
                className="block hover:text-blue-400 transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a 
                href="" 
                className="block hover:text-blue-400 transition-colors duration-200"
                onClick={() => {navigate('./contact')}}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          {/* Bottom Links */}
          <div className="flex justify-center items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-sm text-gray-400">
              © 2025 Startup Mela. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
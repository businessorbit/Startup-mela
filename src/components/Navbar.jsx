// import React, { useState } from 'react';
// import { Menu, X, Calendar, Users, BookOpen, MessageCircle, Mic } from 'lucide-react';

// const EventNavbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navItems = [
//     { name: 'Home', icon: Calendar, href: '#home' },
//     { name: 'Events', icon: Calendar, href: '#events' },
//     { name: 'Blogs', icon: BookOpen, href: '#blogs' },
//     { name: 'Contact', icon: MessageCircle, href: '#contact' },
//     { name: 'Speaker', icon: Mic, href: '#speaker' }
//   ];

//   return (
//     <div >
//       {/* Navbar */}
//       <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 backdrop-blur-md border-b border-purple-500/20 shadow-2xl">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             {/* Logo */}
//             <div className="flex-shrink-0 flex items-center">
//               <div className="relative">
//                 <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
//                   <Calendar className="w-6 h-6 text-white" />
//                 </div>
//                 <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-30 animate-pulse"></div>
//               </div>
//               <div className="ml-3">
//                 <h1 className="text-xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
//                   EventHub
//                 </h1>
//                 <p className="text-xs text-purple-300">College Events</p>
//               </div>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden md:block">
//               <div className="ml-10 flex items-baseline space-x-1">
//                 {navItems.map((item, index) => {
//                   const Icon = item.icon;
//                   return (
//                     <a
//                       key={item.name}
//                       href={item.href}
//                       className="group relative px-4 py-2 rounded-lg text-gray-300 hover:text-white transition-all duration-300 ease-in-out"
//                     >
//                       <div className="flex items-center space-x-2">
//                         <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
//                         <span className="font-medium">{item.name}</span>
//                       </div>
//                       <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                       <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></div>
//                     </a>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Register Button & Mobile Menu */}
//             <div className="flex items-center space-x-4">
//               {/* Register Button */}
//               <button className="hidden md:block relative overflow-hidden px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 group">
//                 <span className="relative z-10 flex items-center space-x-2">
//                   <Users className="w-4 h-4" />
//                   <span>Register</span>
//                 </span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               </button>

//               {/* Mobile menu button */}
//               <div className="md:hidden">
//                 <button
//                   onClick={() => setIsOpen(!isOpen)}
//                   className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-purple-800/50 transition-colors duration-300"
//                 >
//                   {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Navigation Menu */}
//         <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
//           <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-md border-t border-purple-500/20">
//             {navItems.map((item, index) => {
//               const Icon = item.icon;
//               return (
//                 <a
//                   key={item.name}
//                   href={item.href}
//                   className="group flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-800/30 hover:to-pink-800/30 transition-all duration-300"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
//                   <span className="font-medium">{item.name}</span>
//                 </a>
//               );
//             })}
            
//             {/* Mobile Register Button */}
//             <button className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-purple-500/25 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2">
//               <Users className="w-4 h-4" />
//               <span>Register</span>
//             </button>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default EventNavbar;

import React, { useState } from 'react';
import { Menu, X, Calendar, Users, BookOpen, MessageCircle, Mic } from 'lucide-react';

const EventNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', icon: Calendar, href: '#home' },
    { name: 'Events', icon: Calendar, href: '#events' },
    { name: 'Blogs', icon: BookOpen, href: '#blogs' },
    { name: 'Contact', icon: MessageCircle, href: '#contact' },
    { name: 'Speaker', icon: Mic, href: '#speaker' }
  ];

  // Smooth scroll function
  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1); // Remove the '#' from href
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const navbarHeight = 64; // Adjust this to your navbar height (h-16 = 64px)
      const targetPosition = targetElement.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    
    // Close mobile menu after clicking
    setIsOpen(false);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 backdrop-blur-md border-b border-purple-500/20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-30 animate-pulse"></div>
              </div>
              <div className="ml-3">
                <h1 className="text-xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  EventHub
                </h1>
                <p className="text-xs text-purple-300">College Events</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleSmoothScroll(e, item.href)}
                      className="group relative px-4 py-2 rounded-lg text-gray-300 hover:text-white transition-all duration-300 ease-in-out cursor-pointer"
                    >
                      <div className="flex items-center space-x-2">
                        <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                        <span className="font-medium">{item.name}</span>
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
              {/* Register Button */}
              <button className="hidden md:block relative overflow-hidden px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 group">
                <span className="relative z-10 flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>Login</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="hidden md:block relative overflow-hidden px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 group">
                <span className="relative z-10 flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>Register</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              {/* Mobile menu button */}
              <div className="md:hidden">
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
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-md border-t border-purple-500/20">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="group flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-800/30 hover:to-pink-800/30 transition-all duration-300 cursor-pointer"
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium">{item.name}</span>
                </a>
              );
            })}
            
            {/* Mobile Register Button */}
            <button className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-purple-500/25 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2">
              <Users className="w-4 h-4" />
              <span>Register</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default EventNavbar;
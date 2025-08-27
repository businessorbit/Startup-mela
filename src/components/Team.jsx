// import React, { useState } from 'react';
// import { Users, Target, TrendingUp, Lightbulb, Building, Wrench, Handshake, Palette, Star, Play } from 'lucide-react';

// const TeamPage = () => {
//   const [hoveredTeam, setHoveredTeam] = useState(null);

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header Section */}
//       <div className="relative overflow-hidden bg-white">
//         <div className="relative max-w-7xl bg-white mx-auto px-6 lg:px-8 py-10">
//           <div className="space-y-8 bg-white">
//             {/* Centered Tag */}
//             <div className="flex justify-center">
//               <div className="inline-flex items-center px-6 py-3 bg-[#828385] text-white backdrop-blur-sm rounded-full text-sm font-semibold shadow-lg border border-gray-200/50">
//                 <Users className="w-4 h-4 mr-2" />
//                 The Dream Team
//               </div>
//             </div>

//             {/* Left aligned Heading */}
//             <h1 className="text-2xl md:text-4xl bg-white font-medium text-gray-900 leading-tight text-left"
//               style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
//               Orchestrated by the Best in the Business
//               <span className="block text-5xl md:text-7xl mt-4 text-black font-bold"
//                 style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
//                 Experts Behind the Startup Mela
//               </span>
//             </h1>
//           </div>
//         </div>
//       </div>

//       {/* Interactive Team Section */}
//       {/* <div className="w-full px-6"> */}
//       <div className={`w-full px-6 transition-all duration-500 ${hoveredTeam ? 'mb-[400px]' : 'mb-[100px]'}`}>
//         <div className="max-w-6xl mx-17">
//           {/* Top Center - Poppy Pie */}
//           <div className="flex justify-center mb-5">
//             <div
//               className={`cursor-pointer transform transition-all duration-500 relative ${hoveredTeam === 'poppypie' ? 'scale-110' : 'hover:scale-105'}`}
//               onMouseEnter={() => setHoveredTeam('poppypie')}
//               onMouseLeave={() => setHoveredTeam(null)}
//             >
//               <div className="w-48 h-48 border border-black bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full shadow-2xl flex items-center justify-center hover:shadow-3xl transition-shadow duration-500 overflow-hidden">
//                 <img
//                   src="/poppy.jpg"
//                   alt="Poppy pie Logo"
//                   className="w-48 h-48 object-cover rounded-full"
//                 />
//               </div>

//               {/* Poppy Pie Content */}
//               <div className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 w-96 z-20 transition-all duration-500 ${hoveredTeam === 'poppypie' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
//                 }`}>
//                 <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
//                   <div className="p-6 space-y-4">
//                     <div className="space-y-3">
//                       <div className="inline-flex items-center px-3 py-1 bg-[#40403E] text-white rounded-full text-xs font-semibold">
//                         <TrendingUp className="w-3 h-3 mr-1" />
//                         Marketing & Brand Management
//                       </div>
//                       <h2 className="text-3xl font-black text-gray-900"
//                         style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>The Poppy Pie</h2>
//                       <h3 className="text-lg font-medium text-gray-800"
//                         style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>Strategic Marketing Masters</h3>
//                     </div>

//                     <p className="text-sm text-gray-700 leading-relaxed">
//                       As the top marketing and branding agency in the Tricity, The Poppy Pie is the strategic mind behind our outreach.
//                       They ensure that every startup, sponsor, and attendee receives maximum visibility and that the Mela's message resonates far and wide.
//                     </p>

//                     <div className="space-y-2">
//                       {[
//                         { icon: Target, title: "Brand Strategy", desc: "Creating compelling narratives and positioning" },
//                         { icon: TrendingUp, title: "Digital Marketing", desc: "Multi-channel promotion and engagement" },
//                         { icon: Lightbulb, title: "Creative Content", desc: "Engaging visuals and messaging campaigns" }
//                       ].map((item, index) => (
//                         <div key={index} className="flex items-center space-x-2 p-2 bg-[#E7E7E7] rounded-lg">
//                           <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center shadow-sm">
//                             <item.icon className="w-3 h-3 text-black" />
//                           </div>
//                           <div>
//                             <p className="font-semibold text-gray-900 text-xs">{item.title}</p>
//                             <p className="text-gray-600 text-xs">{item.desc}</p>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Bottom Row - Navrasa (Left) and Khaba (Right) */}
//           <div className="flex justify-between items-start">

//             {/* Navrasa Logo - Left Side */}
//             <div
//               className={`cursor-pointer transform transition-all duration-500 relative ${hoveredTeam === 'navrasa' ? 'scale-125' : 'hover:scale-110'}`}
//               onMouseEnter={() => setHoveredTeam('navrasa')}
//               onMouseLeave={() => setHoveredTeam(null)}
//             >
//               <div className="w-48 h-48 border border-black bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full shadow-2xl flex items-center justify-center hover:shadow-3xl transition-shadow duration-500 overflow-hidden">
//                 <img
//                   src="/Navrasa.png"
//                   alt="Navrasa Logo"
//                   className="w-48 h-48 object-cover rounded-full"
//                 />
//               </div>

//               {/* Navrasa Content */}
//               <div className={`absolute top-0 left-full ml-6 w-[400px] !z-[99999] transition-all duration-500 ${hoveredTeam === 'navrasa' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'

//                 }`}
//               >
//                 <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
//                   <div className="p-6 space-y-4">
//                     <div className="space-y-3">
//                       <div className="inline-flex items-center px-3 py-1 bg-[#40403E] text-white rounded-full text-xs font-semibold">
//                         <Wrench className="w-3 h-3 mr-1" />
//                         Event Management
//                       </div>
//                       <h2 className="text-3xl font-black text-gray-900"
//                         style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>Navrasa</h2>
//                       <h3 className="text-lg font-medium text-gray-800"
//                         style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>Seamless Experience Architects</h3>
//                     </div>

//                     <p className="text-sm text-gray-700 leading-relaxed">
//                       Recognized as the best event management company in the region, Navrasa is the architect of the seamless
//                       on-ground experience. From logistics and production to hospitality, their expertise guarantees a world-class,
//                       professionally executed event.
//                     </p>

//                     <div className="space-y-2">
//                       {[
//                         { icon: Building, title: "Logistics Management", desc: "End-to-end coordination" },
//                         { icon: Wrench, title: "Production Excellence", desc: "Technical setup management" },
//                         { icon: Handshake, title: "Hospitality Services", desc: "Premium guest experience" }
//                       ].map((item, index) => (
//                         <div key={index} className="flex items-center space-x-2 p-2 bg-[#E7E7E7] rounded-lg">
//                           <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center shadow-sm">
//                             <item.icon className="w-3 h-3 text-black" />
//                           </div>
//                           <div>
//                             <p className="font-semibold text-gray-900 text-xs">{item.title}</p>
//                             <p className="text-gray-600 text-xs">{item.desc}</p>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Khaba Logo - Right Side */}
//             <div
//               className={`cursor-pointer transform transition-all duration-500 relative ${hoveredTeam === 'khaba' ? 'scale-125' : 'hover:scale-110'}`}
//               onMouseEnter={() => setHoveredTeam('khaba')}
//               onMouseLeave={() => setHoveredTeam(null)}
//             >
//               <div className="w-48 h-48 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full shadow-2xl flex items-center justify-center hover:shadow-3xl transition-shadow duration-500 overflow-hidden">
//                 <img
//                   src="/khaba.jpg"
//                   alt="khaba Logo"
//                   className="w-48 h-48 object-cover rounded-full"
//                 />
//               </div>

//               {/* Khaba Content */}
//               <div className={`absolute top-0 right-full mr-6 w-[400px] z-10 transition-all duration-500 ${hoveredTeam === 'khaba' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
//                 }`}>
//                 <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
//                   <div className="p-6 space-y-4">
//                     <div className="space-y-3">
//                       <div className="inline-flex items-center px-3 py-1 bg-[#40403E] text-white rounded-full text-xs font-semibold">
//                         <Palette className="w-3 h-3 mr-1" />
//                         Architectural Design
//                       </div>
//                       <h2 className="text-3xl font-black text-gray-900"
//                         style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>Khaba</h2>
//                       <h3 className="text-lg font-medium text-gray-800"
//                         style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>Visionary Space Designers</h3>
//                     </div>

//                     <p className="text-sm text-gray-700 leading-relaxed">
//                       An innovative architectural design firm from Chandigarh, Khaba is the visionary behind the event's physical space.
//                       They are transforming the Sector 34 Ground into an immersive, functional, and aesthetically stunning environment
//                       designed for interaction and discovery.
//                     </p>

//                     <div className="space-y-2">
//                       {[
//                         { icon: Palette, title: "Space Design", desc: "Creating immersive environments" },
//                         { icon: Building, title: "Venue Transformation", desc: "Converting spaces to experiences" },
//                         { icon: Star, title: "Aesthetic Excellence", desc: "Stunning visual appeal" }
//                       ].map((item, index) => (
//                         <div key={index} className="flex items-center space-x-2 p-2 bg-[#E7E7E7] rounded-lg">
//                           <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center shadow-sm">
//                             <item.icon className="w-3 h-3 text-black" />
//                           </div>
//                           <div>
//                             <p className="font-semibold text-gray-900 text-xs">{item.title}</p>
//                             <p className="text-gray-600 text-xs">{item.desc}</p>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeamPage;

// import React, { useState, useEffect } from 'react';
// import { Users, Target, TrendingUp, Lightbulb, Building, Wrench, Handshake, Palette, Star, Play } from 'lucide-react';

// const TeamPage = () => {
//   const [hoveredTeam, setHoveredTeam] = useState(null);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
    
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
    
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   const handleTeamHover = (team) => {
//     if (!isMobile) {
//       setHoveredTeam(team);
//     }
//   };

//   const handleTeamLeave = () => {
//     if (!isMobile) {
//       setHoveredTeam(null);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header Section */}
//       <div className="relative overflow-hidden bg-white">
//         <div className="relative max-w-7xl bg-white mx-auto px-6 lg:px-8 py-10">
//           <div className="space-y-8 bg-white">
//             {/* Centered Tag */}
//             <div className="flex justify-center">
//               <div className="inline-flex items-center px-6 py-3 bg-[#828385] text-white backdrop-blur-sm rounded-full text-sm font-semibold shadow-lg border border-gray-200/50">
//                 <Users className="w-4 h-4 mr-2" />
//                 The Dream Team
//               </div>
//             </div>

//             {/* Left aligned Heading */}
//             <h1 className="text-2xl md:text-4xl bg-white font-medium text-gray-900 leading-tight text-left"
//               style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
//               Orchestrated by the Best in the Business
//               <span className="block text-3xl md:text-5xl lg:text-7xl mt-4 text-black font-bold"
//                 style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
//                 Experts Behind the Startup Mela
//               </span>
//             </h1>
//           </div>
//         </div>
//       </div>

//       {/* Interactive Team Section */}
//       <div className={`w-full px-6 transition-all duration-500 ${hoveredTeam && !isMobile ? 'mb-[400px]' : 'mb-[100px]'}`}>
//         <div className="max-w-6xl mx-auto">
          
//           {/* Mobile Layout - Single Column */}
//           <div className="md:hidden flex flex-col items-center space-y-8">
//             {/* Poppy Pie - Mobile */}
//             <div className="cursor-pointer transform transition-all duration-300 hover:scale-105">
//               <div className="w-32 h-32 sm:w-40 sm:h-40 border border-black bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full shadow-2xl flex items-center justify-center overflow-hidden">
//                 <img
//                   src="/poppy.jpg"
//                   alt="Poppy pie Logo"
//                   className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full"
//                 />
//               </div>
//             </div>

//             {/* Navrasa - Mobile */}
//             <div className="cursor-pointer transform transition-all duration-300 hover:scale-105">
//               <div className="w-32 h-32 sm:w-40 sm:h-40 border border-black bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full shadow-2xl flex items-center justify-center overflow-hidden">
//                 <img
//                   src="/Navrasa.png"
//                   alt="Navrasa Logo"
//                   className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full"
//                 />
//               </div>
//             </div>

//             {/* Khaba - Mobile */}
//             <div className="cursor-pointer transform transition-all duration-300 hover:scale-105">
//               <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full shadow-2xl flex items-center justify-center overflow-hidden">
//                 <img
//                   src="/khaba.jpg"
//                   alt="khaba Logo"
//                   className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Desktop Layout - Grid System */}
//           <div className="hidden md:block">
//             {/* Grid Container for Perfect Spacing */}
//             <div className="grid grid-cols-3 gap-8 items-start">
//               {/* Navrasa - Left Column */}
//               <div className="flex justify-center">
//                 <div
//                   className={`cursor-pointer transform transition-all duration-500 relative ${hoveredTeam === 'navrasa' ? 'scale-125' : 'hover:scale-110'}`}
//                   onMouseEnter={() => handleTeamHover('navrasa')}
//                   onMouseLeave={handleTeamLeave}
//                 >
//                   <div className="w-48 h-48 border border-black bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full shadow-2xl flex items-center justify-center hover:shadow-3xl transition-shadow duration-500 overflow-hidden">
//                     <img
//                       src="/Navrasa.png"
//                       alt="Navrasa Logo"
//                       className="w-48 h-48 object-cover rounded-full"
//                     />
//                   </div>

//                   {/* Navrasa Content */}
//                   <div className={`absolute top-0 left-full ml-6 w-[400px] !z-[99999] transition-all duration-500 ${hoveredTeam === 'navrasa' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'
//                     }`}>
//                     <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
//                       <div className="p-6 space-y-4">
//                         <div className="space-y-3">
//                           <div className="inline-flex items-center px-3 py-1 bg-[#40403E] text-white rounded-full text-xs font-semibold">
//                             <Wrench className="w-3 h-3 mr-1" />
//                             Event Management
//                           </div>
//                           <h2 className="text-3xl font-black text-gray-900"
//                             style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>Navrasa</h2>
//                           <h3 className="text-lg font-medium text-gray-800"
//                             style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>Seamless Experience Architects</h3>
//                         </div>

//                         <p className="text-sm text-gray-700 leading-relaxed">
//                           Recognized as the best event management company in the region, Navrasa is the architect of the seamless
//                           on-ground experience. From logistics and production to hospitality, their expertise guarantees a world-class,
//                           professionally executed event.
//                         </p>

//                         <div className="space-y-2">
//                           {[
//                             { icon: Building, title: "Logistics Management", desc: "End-to-end coordination" },
//                             { icon: Wrench, title: "Production Excellence", desc: "Technical setup management" },
//                             { icon: Handshake, title: "Hospitality Services", desc: "Premium guest experience" }
//                           ].map((item, index) => (
//                             <div key={index} className="flex items-center space-x-2 p-2 bg-[#E7E7E7] rounded-lg">
//                               <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center shadow-sm">
//                                 <item.icon className="w-3 h-3 text-black" />
//                               </div>
//                               <div>
//                                 <p className="font-semibold text-gray-900 text-xs">{item.title}</p>
//                                 <p className="text-gray-600 text-xs">{item.desc}</p>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Poppy Pie - Center Column */}
//               <div className="flex justify-center">
//                 <div
//                   className={`cursor-pointer transform transition-all duration-500 relative ${hoveredTeam === 'poppypie' ? 'scale-110' : 'hover:scale-105'}`}
//                   onMouseEnter={() => handleTeamHover('poppypie')}
//                   onMouseLeave={handleTeamLeave}
//                 >
//                   <div className="w-48 h-48 border border-black bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full shadow-2xl flex items-center justify-center hover:shadow-3xl transition-shadow duration-500 overflow-hidden">
//                     <img
//                       src="/poppy.jpg"
//                       alt="Poppy pie Logo"
//                       className="w-48 h-48 object-cover rounded-full"
//                     />
//                   </div>

//                   {/* Poppy Pie Content */}
//                   <div className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 w-96 z-20 transition-all duration-500 ${hoveredTeam === 'poppypie' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
//                     }`}>
//                     <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
//                       <div className="p-6 space-y-4">
//                         <div className="space-y-3">
//                           <div className="inline-flex items-center px-3 py-1 bg-[#40403E] text-white rounded-full text-xs font-semibold">
//                             <TrendingUp className="w-3 h-3 mr-1" />
//                             Marketing & Brand Management
//                           </div>
//                           <h2 className="text-3xl font-black text-gray-900"
//                             style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>The Poppy Pie</h2>
//                           <h3 className="text-lg font-medium text-gray-800"
//                             style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>Strategic Marketing Masters</h3>
//                         </div>

//                         <p className="text-sm text-gray-700 leading-relaxed">
//                           As the top marketing and branding agency in the Tricity, The Poppy Pie is the strategic mind behind our outreach.
//                           They ensure that every startup, sponsor, and attendee receives maximum visibility and that the Mela's message resonates far and wide.
//                         </p>

//                         <div className="space-y-2">
//                           {[
//                             { icon: Target, title: "Brand Strategy", desc: "Creating compelling narratives and positioning" },
//                             { icon: TrendingUp, title: "Digital Marketing", desc: "Multi-channel promotion and engagement" },
//                             { icon: Lightbulb, title: "Creative Content", desc: "Engaging visuals and messaging campaigns" }
//                           ].map((item, index) => (
//                             <div key={index} className="flex items-center space-x-2 p-2 bg-[#E7E7E7] rounded-lg">
//                               <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center shadow-sm">
//                                 <item.icon className="w-3 h-3 text-black" />
//                               </div>
//                               <div>
//                                 <p className="font-semibold text-gray-900 text-xs">{item.title}</p>
//                                 <p className="text-gray-600 text-xs">{item.desc}</p>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Khaba - Right Column */}
//               <div className="flex justify-center">
//                 <div
//                   className={`cursor-pointer transform transition-all duration-500 relative ${hoveredTeam === 'khaba' ? 'scale-125' : 'hover:scale-110'}`}
//                   onMouseEnter={() => handleTeamHover('khaba')}
//                   onMouseLeave={handleTeamLeave}
//                 >
//                   <div className="w-48 h-48 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full shadow-2xl flex items-center justify-center hover:shadow-3xl transition-shadow duration-500 overflow-hidden">
//                     <img
//                       src="/khaba.jpg"
//                       alt="khaba Logo"
//                       className="w-48 h-48 object-cover rounded-full"
//                     />
//                   </div>

//                   {/* Khaba Content */}
//                   <div className={`absolute top-0 right-full mr-6 w-[400px] z-10 transition-all duration-500 ${hoveredTeam === 'khaba' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
//                     }`}>
//                     <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
//                       <div className="p-6 space-y-4">
//                         <div className="space-y-3">
//                           <div className="inline-flex items-center px-3 py-1 bg-[#40403E] text-white rounded-full text-xs font-semibold">
//                             <Palette className="w-3 h-3 mr-1" />
//                             Architectural Design
//                           </div>
//                           <h2 className="text-3xl font-black text-gray-900"
//                             style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>Khaba</h2>
//                           <h3 className="text-lg font-medium text-gray-800"
//                             style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>Visionary Space Designers</h3>
//                         </div>

//                         <p className="text-sm text-gray-700 leading-relaxed">
//                           An innovative architectural design firm from Chandigarh, Khaba is the visionary behind the event's physical space.
//                           They are transforming the Sector 34 Ground into an immersive, functional, and aesthetically stunning environment
//                           designed for interaction and discovery.
//                         </p>

//                         <div className="space-y-2">
//                           {[
//                             { icon: Palette, title: "Space Design", desc: "Creating immersive environments" },
//                             { icon: Building, title: "Venue Transformation", desc: "Converting spaces to experiences" },
//                             { icon: Star, title: "Aesthetic Excellence", desc: "Stunning visual appeal" }
//                           ].map((item, index) => (
//                             <div key={index} className="flex items-center space-x-2 p-2 bg-[#E7E7E7] rounded-lg">
//                               <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center shadow-sm">
//                                 <item.icon className="w-3 h-3 text-black" />
//                               </div>
//                               <div>
//                                 <p className="font-semibold text-gray-900 text-xs">{item.title}</p>
//                                 <p className="text-gray-600 text-xs">{item.desc}</p>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeamPage;

// import React, { useState, useEffect } from 'react';
// import { Users, Target, TrendingUp, Lightbulb, Building, Wrench, Handshake, Palette, Star, Play } from 'lucide-react';

// const TeamPage = () => {
//   const [hoveredTeam, setHoveredTeam] = useState(null);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
    
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
    
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   const handleTeamHover = (team) => {
//     if (!isMobile) {
//       setHoveredTeam(team);
//     }
//   };

//   const handleTeamLeave = () => {
//     if (!isMobile) {
//       setHoveredTeam(null);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header Section */}
//       <div className="relative overflow-hidden bg-white">
//         <div className="relative max-w-7xl bg-white mx-auto px-6 lg:px-8 py-10">
//           <div className="space-y-8 bg-white">
//             {/* Centered Tag */}
//             <div className="flex justify-center">
//               <div className="inline-flex items-center px-6 py-3 bg-[#828385] text-white backdrop-blur-sm rounded-full text-sm font-semibold shadow-lg border border-gray-200/50">
//                 <Users className="w-4 h-4 mr-2" />
//                 The Dream Team
//               </div>
//             </div>

//             {/* Left aligned Heading */}
//             <h1 className="text-2xl md:text-4xl bg-white font-medium text-gray-900 leading-tight text-left"
//               style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
//               Orchestrated by the Best in the Business
//               <span className="block text-3xl md:text-5xl lg:text-7xl mt-4 text-black font-bold"
//                 style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
//                 Experts Behind the Startup Mela
//               </span>
//             </h1>
//           </div>
//         </div>
//       </div>

//       {/* Interactive Team Section */}
//       <div className={`w-full px-6 transition-all duration-500 ${hoveredTeam && !isMobile ? 'mb-[400px]' : 'mb-[100px]'}`}>
//         <div className="max-w-6xl mx-auto">
          
//           {/* Mobile Layout - Single Column */}
//           <div className="md:hidden flex flex-col items-center space-y-8">
//             {/* Poppy Pie - Mobile */}
//             <div className="cursor-pointer transform transition-all duration-300 hover:scale-105">
//               <div className="w-32 h-32 sm:w-40 sm:h-40 border border-black bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full shadow-2xl flex items-center justify-center overflow-hidden">
//                 <img
//                   src="/poppy.jpg"
//                   alt="Poppy pie Logo"
//                   className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full"
//                 />
//               </div>
//             </div>

//             {/* Navrasa - Mobile */}
//             <div className="cursor-pointer transform transition-all duration-300 hover:scale-105">
//               <div className="w-32 h-32 sm:w-40 sm:h-40 border border-black bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full shadow-2xl flex items-center justify-center overflow-hidden">
//                 <img
//                   src="/Navrasa.png"
//                   alt="Navrasa Logo"
//                   className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full"
//                 />
//               </div>
//             </div>

//             {/* Khaba - Mobile */}
//             <div className="cursor-pointer transform transition-all duration-300 hover:scale-105">
//               <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full shadow-2xl flex items-center justify-center overflow-hidden">
//                 <img
//                   src="/khaba.jpg"
//                   alt="khaba Logo"
//                   className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Desktop Layout - Original Triangular Layout */}
//           <div className="hidden md:block">
//             {/* Top Center - Poppy Pie (Elevated) */}
//             <div className="flex justify-center mb-8">
//               <div
//                 className={`cursor-pointer transform transition-all duration-500 relative ${hoveredTeam === 'poppypie' ? 'scale-110' : 'hover:scale-105'}`}
//                 onMouseEnter={() => handleTeamHover('poppypie')}
//                 onMouseLeave={handleTeamLeave}
//               >
//                 <div className="w-48 h-48 border border-black bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full shadow-2xl flex items-center justify-center hover:shadow-3xl transition-shadow duration-500 overflow-hidden">
//                   <img
//                     src="/poppy.jpg"
//                     alt="Poppy pie Logo"
//                     className="w-48 h-48 object-cover rounded-full"
//                   />
//                 </div>

//                 {/* Poppy Pie Content */}
//                 <div className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 w-96 z-20 transition-all duration-500 ${hoveredTeam === 'poppypie' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
//                   }`}>
//                   <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
//                     <div className="p-6 space-y-4">
//                       <div className="space-y-3">
//                         <div className="inline-flex items-center px-3 py-1 bg-[#40403E] text-white rounded-full text-xs font-semibold">
//                           <TrendingUp className="w-3 h-3 mr-1" />
//                           Marketing & Brand Management
//                         </div>
//                         <h2 className="text-3xl font-black text-gray-900"
//                           style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>The Poppy Pie</h2>
//                         <h3 className="text-lg font-medium text-gray-800"
//                           style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>Strategic Marketing Masters</h3>
//                       </div>

//                       <p className="text-sm text-gray-700 leading-relaxed">
//                         As the top marketing and branding agency in the Tricity, The Poppy Pie is the strategic mind behind our outreach.
//                         They ensure that every startup, sponsor, and attendee receives maximum visibility and that the Mela's message resonates far and wide.
//                       </p>

//                       <div className="space-y-2">
//                         {[
//                           { icon: Target, title: "Brand Strategy", desc: "Creating compelling narratives and positioning" },
//                           { icon: TrendingUp, title: "Digital Marketing", desc: "Multi-channel promotion and engagement" },
//                           { icon: Lightbulb, title: "Creative Content", desc: "Engaging visuals and messaging campaigns" }
//                         ].map((item, index) => (
//                           <div key={index} className="flex items-center space-x-2 p-2 bg-[#E7E7E7] rounded-lg">
//                             <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center shadow-sm">
//                               <item.icon className="w-3 h-3 text-black" />
//                             </div>
//                             <div>
//                               <p className="font-semibold text-gray-900 text-xs">{item.title}</p>
//                               <p className="text-gray-600 text-xs">{item.desc}</p>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Bottom Row - Navrasa (Left) and Khaba (Right) with Equal Margins */}
//             <div className="max-w-6xl mx-auto px-8">
//               <div className="flex justify-between items-start">
//                 {/* Navrasa Logo - Left Side */}
//                 <div
//                   className={`cursor-pointer transform transition-all duration-500 relative ${hoveredTeam === 'navrasa' ? 'scale-125' : 'hover:scale-110'}`}
//                   onMouseEnter={() => handleTeamHover('navrasa')}
//                   onMouseLeave={handleTeamLeave}
//                 >
//                   <div className="w-48 h-48 border border-black bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full shadow-2xl flex items-center justify-center hover:shadow-3xl transition-shadow duration-500 overflow-hidden">
//                     <img
//                       src="/Navrasa.png"
//                       alt="Navrasa Logo"
//                       className="w-48 h-48 object-cover rounded-full"
//                     />
//                   </div>

//                   {/* Navrasa Content */}
//                   <div className={`absolute top-0 left-full ml-6 w-[400px] !z-[99999] transition-all duration-500 ${hoveredTeam === 'navrasa' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'
//                     }`}>
//                     <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
//                       <div className="p-6 space-y-4">
//                         <div className="space-y-3">
//                           <div className="inline-flex items-center px-3 py-1 bg-[#40403E] text-white rounded-full text-xs font-semibold">
//                             <Wrench className="w-3 h-3 mr-1" />
//                             Event Management
//                           </div>
//                           <h2 className="text-3xl font-black text-gray-900"
//                             style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>Navrasa</h2>
//                           <h3 className="text-lg font-medium text-gray-800"
//                             style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>Seamless Experience Architects</h3>
//                         </div>

//                         <p className="text-sm text-gray-700 leading-relaxed">
//                           Recognized as the best event management company in the region, Navrasa is the architect of the seamless
//                           on-ground experience. From logistics and production to hospitality, their expertise guarantees a world-class,
//                           professionally executed event.
//                         </p>

//                         <div className="space-y-2">
//                           {[
//                             { icon: Building, title: "Logistics Management", desc: "End-to-end coordination" },
//                             { icon: Wrench, title: "Production Excellence", desc: "Technical setup management" },
//                             { icon: Handshake, title: "Hospitality Services", desc: "Premium guest experience" }
//                           ].map((item, index) => (
//                             <div key={index} className="flex items-center space-x-2 p-2 bg-[#E7E7E7] rounded-lg">
//                               <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center shadow-sm">
//                                 <item.icon className="w-3 h-3 text-black" />
//                               </div>
//                               <div>
//                                 <p className="font-semibold text-gray-900 text-xs">{item.title}</p>
//                                 <p className="text-gray-600 text-xs">{item.desc}</p>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Khaba Logo - Right Side */}
//                 <div
//                   className={`cursor-pointer transform transition-all duration-500 relative ${hoveredTeam === 'khaba' ? 'scale-125' : 'hover:scale-110'}`}
//                   onMouseEnter={() => handleTeamHover('khaba')}
//                   onMouseLeave={handleTeamLeave}
//                 >
//                   <div className="w-48 h-48 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full shadow-2xl flex items-center justify-center hover:shadow-3xl transition-shadow duration-500 overflow-hidden">
//                     <img
//                       src="/khaba.jpg"
//                       alt="khaba Logo"
//                       className="w-48 h-48 object-cover rounded-full"
//                     />
//                   </div>

//                   {/* Khaba Content */}
//                   <div className={`absolute top-0 right-full mr-6 w-[400px] z-10 transition-all duration-500 ${hoveredTeam === 'khaba' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
//                     }`}>
//                     <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
//                       <div className="p-6 space-y-4">
//                         <div className="space-y-3">
//                           <div className="inline-flex items-center px-3 py-1 bg-[#40403E] text-white rounded-full text-xs font-semibold">
//                             <Palette className="w-3 h-3 mr-1" />
//                             Architectural Design
//                           </div>
//                           <h2 className="text-3xl font-black text-gray-900"
//                             style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>Khaba</h2>
//                           <h3 className="text-lg font-medium text-gray-800"
//                             style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>Visionary Space Designers</h3>
//                         </div>

//                         <p className="text-sm text-gray-700 leading-relaxed">
//                           An innovative architectural design firm from Chandigarh, Khaba is the visionary behind the event's physical space.
//                           They are transforming the Sector 34 Ground into an immersive, functional, and aesthetically stunning environment
//                           designed for interaction and discovery.
//                         </p>

//                         <div className="space-y-2">
//                           {[
//                             { icon: Palette, title: "Space Design", desc: "Creating immersive environments" },
//                             { icon: Building, title: "Venue Transformation", desc: "Converting spaces to experiences" },
//                             { icon: Star, title: "Aesthetic Excellence", desc: "Stunning visual appeal" }
//                           ].map((item, index) => (
//                             <div key={index} className="flex items-center space-x-2 p-2 bg-[#E7E7E7] rounded-lg">
//                               <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center shadow-sm">
//                                 <item.icon className="w-3 h-3 text-black" />
//                               </div>
//                               <div>
//                                 <p className="font-semibold text-gray-900 text-xs">{item.title}</p>
//                                 <p className="text-gray-600 text-xs">{item.desc}</p>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeamPage;

import React, { useState, useEffect } from 'react';
import { Users, Target, TrendingUp, Lightbulb, Building, Wrench, Handshake, Palette, Star, Play } from 'lucide-react';

const TeamPage = () => {
  const [hoveredTeam, setHoveredTeam] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleTeamHover = (team) => {
    if (!isMobile) {
      setHoveredTeam(team);
    }
  };

  const handleTeamLeave = () => {
    if (!isMobile) {
      setHoveredTeam(null);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-white">
        <div className="relative max-w-7xl bg-white mx-auto px-6 lg:px-8 py-10">
          <div className="space-y-8 bg-white">
            {/* Centered Tag */}
            <div className="flex justify-center">
              <div className="inline-flex items-center px-6 py-3 bg-[#828385] text-white backdrop-blur-sm rounded-full text-sm font-semibold shadow-lg border border-gray-200/50">
                <Users className="w-4 h-4 mr-2" />
                The Dream Team
              </div>
            </div>

            {/* Left aligned Heading */}
            <h1 className="text-2xl md:text-4xl bg-white font-medium text-gray-900 leading-tight text-left"
              style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
              Orchestrated by the Best in the Business
              <span className="block text-3xl md:text-5xl lg:text-7xl mt-4 text-black font-bold"
                style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
                Experts Behind the Startup Mela
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* Interactive Team Section */}
      <div className={`w-full px-6 transition-all duration-500 ${hoveredTeam && !isMobile ? 'mb-[400px] 2xl:mb-[500px]' : 'mb-[100px]'}`}>
        <div className="max-w-6xl mx-auto">
          
          {/* Mobile Layout - Single Column */}
          <div className="md:hidden flex flex-col items-center space-y-8">
            {/* Poppy Pie - Mobile */}
            <div className="cursor-pointer transform transition-all duration-300 hover:scale-105">
              <div className="w-32 h-32 sm:w-40 sm:h-40 border border-black bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full shadow-2xl flex items-center justify-center overflow-hidden">
                <img
                  src="/poppy.jpg"
                  alt="Poppy pie Logo"
                  className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full"
                />
              </div>
            </div>

            {/* Navrasa - Mobile */}
            <div className="cursor-pointer transform transition-all duration-300 hover:scale-105">
              <div className="w-32 h-32 sm:w-40 sm:h-40 border border-black bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full shadow-2xl flex items-center justify-center overflow-hidden">
                <img
                  src="/Navrasa.png"
                  alt="Navrasa Logo"
                  className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full"
                />
              </div>
            </div>

            {/* Khaba - Mobile */}
            <div className="cursor-pointer transform transition-all duration-300 hover:scale-105">
              <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full shadow-2xl flex items-center justify-center overflow-hidden">
                <img
                  src="/khaba.jpg"
                  alt="khaba Logo"
                  className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Desktop Layout - Responsive Triangular Layout */}
          <div className="hidden md:block">
            {/* Top Center - Poppy Pie (Elevated) */}
            <div className="flex justify-center mb-8">
              <div
                className={`cursor-pointer transform transition-all duration-500 relative ${hoveredTeam === 'poppypie' ? 'scale-110' : 'hover:scale-105'}`}
                onMouseEnter={() => handleTeamHover('poppypie')}
                onMouseLeave={handleTeamLeave}
              >
                <div className="w-48 h-48 border border-black bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full shadow-2xl flex items-center justify-center hover:shadow-3xl transition-shadow duration-500 overflow-hidden">
                  <img
                    src="/poppy.jpg"
                    alt="Poppy pie Logo"
                    className="w-48 h-48 object-cover rounded-full"
                  />
                </div>

                {/* Poppy Pie Content */}
                <div className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 w-96 z-20 transition-all duration-500 ${hoveredTeam === 'poppypie' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                  }`}>
                  <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                    <div className="p-6 space-y-4">
                      <div className="space-y-3">
                        <div className="inline-flex items-center px-3 py-1 bg-[#40403E] text-white rounded-full text-xs font-semibold">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Marketing & Brand Management
                        </div>
                        <h2 className="text-3xl font-black text-gray-900"
                          style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>The Poppy Pie</h2>
                        <h3 className="text-lg font-medium text-gray-800"
                          style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>Strategic Marketing Masters</h3>
                      </div>

                      <p className="text-sm text-gray-700 leading-relaxed">
                        As the top marketing and branding agency in the Tricity, The Poppy Pie is the strategic mind behind our outreach.
                        They ensure that every startup, sponsor, and attendee receives maximum visibility and that the Mela's message resonates far and wide.
                      </p>

                      <div className="space-y-2">
                        {[
                          { icon: Target, title: "Brand Strategy", desc: "Creating compelling narratives and positioning" },
                          { icon: TrendingUp, title: "Digital Marketing", desc: "Multi-channel promotion and engagement" },
                          { icon: Lightbulb, title: "Creative Content", desc: "Engaging visuals and messaging campaigns" }
                        ].map((item, index) => (
                          <div key={index} className="flex items-center space-x-2 p-2 bg-[#E7E7E7] rounded-lg">
                            <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center shadow-sm">
                              <item.icon className="w-3 h-3 text-black" />
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900 text-xs">{item.title}</p>
                              <p className="text-gray-600 text-xs">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row - Navrasa (Left) and Khaba (Right) with Equal Margins */}
            <div className="max-w-6xl mx-auto px-8">
              <div className="flex justify-between items-start">
                {/* Navrasa Logo - Left Side */}
                <div
                  className={`cursor-pointer transform transition-all duration-500 relative ${hoveredTeam === 'navrasa' ? 'scale-125' : 'hover:scale-110'}`}
                  onMouseEnter={() => handleTeamHover('navrasa')}
                  onMouseLeave={handleTeamLeave}
                >
                  <div className="w-48 h-48 border border-black bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full shadow-2xl flex items-center justify-center hover:shadow-3xl transition-shadow duration-500 overflow-hidden">
                    <img
                      src="/Navrasa.png"
                      alt="Navrasa Logo"
                      className="w-48 h-48 object-cover rounded-full"
                    />
                  </div>

                  {/* Navrasa Content */}
                  <div className={`absolute top-0 left-full ml-6 w-[400px] !z-[99999] transition-all duration-500 ${hoveredTeam === 'navrasa' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'
                    }`}>
                    <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                      <div className="p-6 space-y-4">
                        <div className="space-y-3">
                          <div className="inline-flex items-center px-3 py-1 bg-[#40403E] text-white rounded-full text-xs font-semibold">
                            <Wrench className="w-3 h-3 mr-1" />
                            Event Management
                          </div>
                          <h2 className="text-3xl font-black text-gray-900"
                            style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>Navrasa</h2>
                          <h3 className="text-lg font-medium text-gray-800"
                            style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>Seamless Experience Architects</h3>
                        </div>

                        <p className="text-sm text-gray-700 leading-relaxed">
                          Recognized as the best event management company in the region, Navrasa is the architect of the seamless
                          on-ground experience. From logistics and production to hospitality, their expertise guarantees a world-class,
                          professionally executed event.
                        </p>

                        <div className="space-y-2">
                          {[
                            { icon: Building, title: "Logistics Management", desc: "End-to-end coordination" },
                            { icon: Wrench, title: "Production Excellence", desc: "Technical setup management" },
                            { icon: Handshake, title: "Hospitality Services", desc: "Premium guest experience" }
                          ].map((item, index) => (
                            <div key={index} className="flex items-center space-x-2 p-2 bg-[#E7E7E7] rounded-lg">
                              <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center shadow-sm">
                                <item.icon className="w-3 h-3 text-black" />
                              </div>
                              <div>
                                <p className="font-semibold text-gray-900 text-xs">{item.title}</p>
                                <p className="text-gray-600 text-xs">{item.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Khaba Logo - Right Side */}
                <div
                  className={`cursor-pointer transform transition-all duration-500 relative ${hoveredTeam === 'khaba' ? 'scale-125' : 'hover:scale-110'}`}
                  onMouseEnter={() => handleTeamHover('khaba')}
                  onMouseLeave={handleTeamLeave}
                >
                  <div className="w-48 h-48 xl:w-56 xl:h-56 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full shadow-2xl flex items-center justify-center hover:shadow-3xl transition-shadow duration-500 overflow-hidden">
                    <img
                      src="/khaba.jpg"
                      alt="khaba Logo"
                      className="w-48 h-48 xl:w-56 xl:h-56 object-cover rounded-full"
                    />
                  </div>

                  {/* Khaba Content */}
                  <div className={`absolute top-0 right-full mr-6 xl:mr-8 w-[400px] xl:w-[420px] z-10 transition-all duration-500 ${hoveredTeam === 'khaba' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
                    }`}>
                    <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                      <div className="p-6 space-y-4">
                        <div className="space-y-3">
                          <div className="inline-flex items-center px-3 py-1 bg-[#40403E] text-white rounded-full text-xs font-semibold">
                            <Palette className="w-3 h-3 mr-1" />
                            Architectural Design
                          </div>
                          <h2 className="text-3xl font-black text-gray-900"
                            style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>Khaba</h2>
                          <h3 className="text-lg font-medium text-gray-800"
                            style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>Visionary Space Designers</h3>
                        </div>

                        <p className="text-sm text-gray-700 leading-relaxed">
                          An innovative architectural design firm from Chandigarh, Khaba is the visionary behind the event's physical space.
                          They are transforming the Sector 34 Ground into an immersive, functional, and aesthetically stunning environment
                          designed for interaction and discovery.
                        </p>

                        <div className="space-y-2">
                          {[
                            { icon: Palette, title: "Space Design", desc: "Creating immersive environments" },
                            { icon: Building, title: "Venue Transformation", desc: "Converting spaces to experiences" },
                            { icon: Star, title: "Aesthetic Excellence", desc: "Stunning visual appeal" }
                          ].map((item, index) => (
                            <div key={index} className="flex items-center space-x-2 p-2 bg-[#E7E7E7] rounded-lg">
                              <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center shadow-sm">
                                <item.icon className="w-3 h-3 text-black" />
                              </div>
                              <div>
                                <p className="font-semibold text-gray-900 text-xs">{item.title}</p>
                                <p className="text-gray-600 text-xs">{item.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
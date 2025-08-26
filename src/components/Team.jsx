// import React from 'react';
// import { Calendar, Clock, MapPin, Users, Play, Star, ArrowRight, Building, Target, Network, Award, TrendingUp, Handshake, Palette, Wrench, Lightbulb } from 'lucide-react';
// import { useNavigate } from 'react-router-dom'

// const TeamPage = () => {
//   const navigate = useNavigate();
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header Section */}
//       <div className="relative overflow-hidden bg-white">
//         <div className="relative max-w-7xl bg-white mx-auto px-6 lg:px-8 py-24">
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
//             style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
//               Orchestrated by the Best in the Business
//               <span className="block text-5xl md:text-7xl mt-4 text-black font-bold"
//               style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
//                 Experts Behind the Startup Mela
//               </span>
//             </h1>
//           </div>
//         </div>
//       </div>


//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-32">


//         {/* The Poppy Pie - Marketing & Brand Management */}
//         <div className="relative">
//           <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl transform rotate-1"></div>
//           <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden transform -rotate-1 hover:rotate-0 transition-transform duration-700">
//             <div className="grid lg:grid-cols-2">
//               {/* Content Section */}
//               <div className="p-12 lg:p-16 space-y-10">
//                 <div className="space-y-6">
//                   <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full text-sm font-semibold shadow-lg">
//                     <TrendingUp className="w-4 h-4 mr-2" />
//                     Marketing & Brand Management
//                   </div>
//                   <h2 className="text-6xl font-black bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
//                     The Poppy Pie
//                   </h2>
//                   <h3 className="text-3xl font-bold text-gray-800">Strategic Marketing Masters</h3>
//                 </div>

//                 <p className="text-lg text-gray-700 leading-relaxed">
//                   As the top marketing and branding agency in the Tricity, The Poppy Pie is the strategic mind behind our outreach.
//                   They ensure that every startup, sponsor, and attendee receives maximum visibility and that the Mela's message resonates far and wide.
//                 </p>

//                 <div className="space-y-4">
//                   {[
//                     { icon: Target, title: "Brand Strategy", desc: "Creating compelling narratives and positioning" },
//                     { icon: TrendingUp, title: "Digital Marketing", desc: "Multi-channel promotion and engagement" },
//                     { icon: Lightbulb, title: "Creative Content", desc: "Engaging visuals and messaging campaigns" }
//                   ].map((item, index) => (
//                     <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl hover:bg-pink-50 transition-colors duration-300">
//                       <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md">
//                         <item.icon className="w-6 h-6 text-pink-500" />
//                       </div>
//                       <div>
//                         <p className="font-bold text-gray-900">{item.title}</p>
//                         <p className="text-gray-600 text-sm">{item.desc}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Visual Section */}
//               <div className="relative bg-gradient-to-br from-pink-100 to-rose-100 p-12 flex items-center justify-center">
//                 <div className="relative">
//                   <div className="w-80 h-80 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl flex items-center justify-center">
//                     <div className="grid grid-cols-2 gap-6">
//                       <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center shadow-xl">
//                         <TrendingUp className="w-12 h-12 text-white" />
//                       </div>
//                       <div className="w-24 h-24 bg-gradient-to-br from-rose-400 to-pink-400 rounded-2xl flex items-center justify-center shadow-xl">
//                         <Target className="w-12 h-12 text-white" />
//                       </div>
//                       <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-rose-400 rounded-2xl flex items-center justify-center shadow-xl">
//                         <Lightbulb className="w-12 h-12 text-white" />
//                       </div>
//                       <div className="w-24 h-24 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl relative">
//                         <Play className="w-12 h-12 text-white" />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full shadow-xl animate-bounce flex items-center justify-center">
//                     <Star className="w-8 h-8 text-white" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Navrasa - Event Management */}
//         <div className="relative">
//           <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl transform -rotate-1"></div>
//           <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-700">
//             <div className="grid lg:grid-cols-2">
//               {/* Visual Section */}
//               <div className="relative bg-gradient-to-br from-blue-100 to-indigo-100 p-12 flex items-center justify-center lg:order-1">
//                 <div className="relative">
//                   <div className="w-80 h-80 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl flex items-center justify-center">
//                     <div className="grid grid-cols-2 gap-6">
//                       <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-xl">
//                         <Building className="w-12 h-12 text-white" />
//                       </div>
//                       <div className="w-24 h-24 bg-gradient-to-br from-indigo-400 to-blue-400 rounded-2xl flex items-center justify-center shadow-xl">
//                         <Wrench className="w-12 h-12 text-white" />
//                       </div>
//                       <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-2xl flex items-center justify-center shadow-xl">
//                         <Handshake className="w-12 h-12 text-white" />
//                       </div>
//                       <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl relative">
//                         <Play className="w-12 h-12 text-white" />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full shadow-xl animate-bounce flex items-center justify-center">
//                     <Users className="w-8 h-8 text-white" />
//                   </div>
//                 </div>
//               </div>

//               {/* Content Section */}
//               <div className="p-12 lg:p-16 space-y-10 lg:order-2">
//                 <div className="space-y-6">
//                   <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full text-sm font-semibold shadow-lg">
//                     <Wrench className="w-4 h-4 mr-2" />
//                     Event Management
//                   </div>
//                   <h2 className="text-6xl font-black bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
//                     Navrasa
//                   </h2>
//                   <h3 className="text-3xl font-bold text-gray-800">Seamless Experience Architects</h3>
//                 </div>

//                 <p className="text-lg text-gray-700 leading-relaxed">
//                   Recognized as the best event management company in the region, Navrasa is the architect of the seamless
//                   on-ground experience. From logistics and production to hospitality, their expertise guarantees a world-class,
//                   professionally executed event.
//                 </p>

//                 <div className="space-y-4">
//                   {[
//                     { icon: Building, title: "Logistics Management", desc: "End-to-end event coordination and planning" },
//                     { icon: Wrench, title: "Production Excellence", desc: "Technical setup and equipment management" },
//                     { icon: Handshake, title: "Hospitality Services", desc: "Premium guest experience and support" }
//                   ].map((item, index) => (
//                     <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors duration-300">
//                       <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md">
//                         <item.icon className="w-6 h-6 text-blue-500" />
//                       </div>
//                       <div>
//                         <p className="font-bold text-gray-900">{item.title}</p>
//                         <p className="text-gray-600 text-sm">{item.desc}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Khaba - Architectural Design */}
//         <div className="relative mb-20">
//           <div className="absolute inset-0 bg-gradient-to-br mb-20 from-purple-50 to-indigo-50 rounded-3xl transform rotate-1"></div>
//           <div className="relative bg-white rounded-3xl mb-20 shadow-2xl border border-gray-100 overflow-hidden transform -rotate-1 hover:rotate-0 transition-transform duration-700">
//             <div className="grid lg:grid-cols-2">
//               {/* Content Section */}
//               <div className="p-12 lg:p-16 space-y-10">
//                 <div className="space-y-6">
//                   <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full text-sm font-semibold shadow-lg">
//                     <Palette className="w-4 h-4 mr-2" />
//                     Architectural Design
//                   </div>
//                   <h2 className="text-6xl font-black bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
//                     Khaba
//                   </h2>
//                   <h3 className="text-3xl font-bold text-gray-800">Visionary Space Designers</h3>
//                 </div>

//                 <p className="text-lg text-gray-700 leading-relaxed">
//                   An innovative architectural design firm from Chandigarh, Khaba is the visionary behind the event's physical space.
//                   They are transforming the Sector 34 Ground into an immersive, functional, and aesthetically stunning environment
//                   designed for interaction and discovery.
//                 </p>

//                 <div className="space-y-4">
//                   {[
//                     { icon: Palette, title: "Space Design", desc: "Creating immersive and functional environments" },
//                     { icon: Building, title: "Venue Transformation", desc: "Converting spaces into engaging experiences" },
//                     { icon: Star, title: "Aesthetic Excellence", desc: "Stunning visual appeal and user experience" }
//                   ].map((item, index) => (
//                     <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl hover:bg-purple-50 transition-colors duration-300">
//                       <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md">
//                         <item.icon className="w-6 h-6 text-purple-500" />
//                       </div>
//                       <div>
//                         <p className="font-bold text-gray-900">{item.title}</p>
//                         <p className="text-gray-600 text-sm">{item.desc}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Visual Section */}
//               <div className="relative bg-gradient-to-br from-purple-100 to-indigo-100 p-12 flex items-center justify-center">
//                 <div className="relative">
//                   <div className="w-80 h-80 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl flex items-center justify-center">
//                     <div className="grid grid-cols-2 gap-6">
//                       <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-xl">
//                         <Palette className="w-12 h-12 text-white" />
//                       </div>
//                       <div className="w-24 h-24 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-2xl flex items-center justify-center shadow-xl">
//                         <Building className="w-12 h-12 text-white" />
//                       </div>
//                       <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-2xl flex items-center justify-center shadow-xl">
//                         <Star className="w-12 h-12 text-white" />
//                       </div>
//                       <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-xl relative">
//                         <Play className="w-12 h-12 text-white" />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full shadow-xl animate-bounce flex items-center justify-center">
//                     <Lightbulb className="w-8 h-8 text-white" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Team Legacy */}
//         {/* <div className="relative">
//           <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl"></div>
//           <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-16 shadow-xl border border-gray-200/50">
//             <div className="text-center space-y-16">
//               <div className="space-y-8">
//                 <h2 className="text-5xl font-bold text-gray-900">
//                   Our Legacy
//                 </h2>
//                 <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
//                   Built on a Foundation of Successful Events in Chandigarh. We are not new to creating impactful events.
//                   Our team brings a wealth of experience from orchestrating some of the most significant events in the region.
//                 </p>
//               </div>

//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {[
//                   { icon: Award, title: "SFD", desc: "Swarajya First Democracy - A flagship political and social initiative", color: "bg-blue-500" },
//                   { icon: Star, title: "Scitron", desc: "The largest and most celebrated festival of Panjab University", color: "bg-green-500" },
//                   { icon: TrendingUp, title: "Devfest", desc: "Key collaborator in bringing the globally recognized tech conference to our community", color: "bg-purple-500" },
//                   { icon: Lightbulb, title: "Technovate", desc: "The driving force behind the biggest and most competitive hackathon in Chandigarh", color: "bg-orange-500" },
//                   { icon: Network, title: "Community Meetups", desc: "A long history of organizing smaller, focused events that foster community and connection", color: "bg-cyan-500" }
//                 ].map((item, index) => (
//                   <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
//                     <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
//                       <item.icon className="w-8 h-8 text-white" />
//                     </div>
//                     <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
//                     <p className="text-gray-600 leading-relaxed">{item.desc}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default TeamPage;

// import React, { useState } from 'react';
// import { Users, Target, TrendingUp, Lightbulb, Building, Wrench, Handshake, Palette, Star, Play } from 'lucide-react';

// const TeamPage = () => {
//   const [hoveredTeam, setHoveredTeam] = useState(null);

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header Section */}
//       <div className="relative overflow-hidden bg-white">
//         <div className="relative max-w-7xl bg-white mx-auto px-6 lg:px-8 py-24">
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
//             style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
//               Orchestrated by the Best in the Business
//               <span className="block text-5xl md:text-7xl mt-4 text-black font-bold"
//               style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
//                 Experts Behind the Startup Mela
//               </span>
//             </h1>
//           </div>
//         </div>
//       </div>

//       {/* Interactive Team Section */}
//       <div className="w-full px-6">
//         <div className="max-w-6xl mx-17">
//           {/* Top Row - Navrasa (Left) and Khaba (Right) */}
//           <div className="flex justify-between items-start">

//             {/* Navrasa Logo - Left Side */}
//             <div 
//               className={`cursor-pointer transform transition-all duration-500 relative ${hoveredTeam === 'navrasa' ? 'scale-125' : 'hover:scale-110'}`}
//               onMouseEnter={() => setHoveredTeam('navrasa')}
//               onMouseLeave={() => setHoveredTeam(null)}
//             >
//               <div className="w-48 h-48 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full shadow-2xl flex items-center justify-center hover:shadow-3xl transition-shadow duration-500">
//                 <div className="w-40 h-40 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-inner">
//                   <div className="text-center">
//                     <Building className="w-12 h-12 text-white mx-auto mb-2" />
//                     <span className="text-white font-bold text-xl">Navrasa</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Navrasa Content */}
//               <div className={`absolute top-0 left-full ml-6 w-72 z-50 transition-all duration-500 ${
//                 hoveredTeam === 'navrasa' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'
//               }`}>
//                 <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
//                   <div className="p-6 space-y-4">
//                     <div className="space-y-3">
//                       <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full text-xs font-semibold">
//                         <Wrench className="w-3 h-3 mr-1" />
//                         Event Management
//                       </div>
//                       <h2 className="text-3xl font-black text-gray-900">Navrasa</h2>
//                       <h3 className="text-lg font-bold text-gray-800">Seamless Experience Architects</h3>
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
//                         <div key={index} className="flex items-center space-x-2 p-2 bg-blue-50 rounded-lg">
//                           <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center shadow-sm">
//                             <item.icon className="w-3 h-3 text-blue-500" />
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
//               <div className="w-48 h-48 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full shadow-2xl flex items-center justify-center hover:shadow-3xl transition-shadow duration-500">
//                 <div className="w-40 h-40 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center shadow-inner">
//                   <div className="text-center">
//                     <Palette className="w-12 h-12 text-white mx-auto mb-2" />
//                     <span className="text-white font-bold text-xl">Khaba</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Khaba Content */}
//               <div className={`absolute top-0 right-full mr-6 w-72 z-10 transition-all duration-500 ${
//                 hoveredTeam === 'khaba' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
//               }`}>
//                 <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
//                   <div className="p-6 space-y-4">
//                     <div className="space-y-3">
//                       <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full text-xs font-semibold">
//                         <Palette className="w-3 h-3 mr-1" />
//                         Architectural Design
//                       </div>
//                       <h2 className="text-3xl font-black text-gray-900">Khaba</h2>
//                       <h3 className="text-lg font-bold text-gray-800">Visionary Space Designers</h3>
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
//                         <div key={index} className="flex items-center space-x-2 p-2 bg-purple-50 rounded-lg">
//                           <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center shadow-sm">
//                             <item.icon className="w-3 h-3 text-purple-500" />
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

//           {/* Bottom Center - Poppy Pie */}
//           <div className="flex justify-center" style={{ marginTop: '10px' }}>
//             <div 
//               className={`cursor-pointer transform transition-all duration-500 relative ${hoveredTeam === 'poppypie' ? 'scale-110' : 'hover:scale-105'}`}
//               onMouseEnter={() => setHoveredTeam('poppypie')}
//               onMouseLeave={() => setHoveredTeam(null)}
//             >
//               <div className="w-64 h-64 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full shadow-2xl flex items-center justify-center hover:shadow-3xl transition-shadow duration-500">
//                 <div className="w-56 h-56 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center shadow-inner">
//                   <div className="text-center">
//                     <TrendingUp className="w-16 h-16 text-white mx-auto mb-3" />
//                     <span className="text-white font-bold text-2xl">The Poppy Pie</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Poppy Pie Content */}
//               <div className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 w-96 z-20 transition-all duration-500 mb-10${
//                 hoveredTeam === 'poppypie' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
//               }`}>
//                 <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
//                   <div className="p-6 space-y-4">
//                     <div className="space-y-3">
//                       <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full text-xs font-semibold">
//                         <TrendingUp className="w-3 h-3 mr-1" />
//                         Marketing & Brand Management
//                       </div>
//                       <h2 className="text-3xl font-black text-gray-900">The Poppy Pie</h2>
//                       <h3 className="text-lg font-bold text-gray-800">Strategic Marketing Masters</h3>
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
//                         <div key={index} className="flex items-center space-x-2 p-2 bg-pink-50 rounded-lg">
//                           <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center shadow-sm">
//                             <item.icon className="w-3 h-3 text-pink-500" />
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

import React, { useState } from 'react';
import { Users, Target, TrendingUp, Lightbulb, Building, Wrench, Handshake, Palette, Star, Play } from 'lucide-react';

const TeamPage = () => {
  const [hoveredTeam, setHoveredTeam] = useState(null);

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
              <span className="block text-5xl md:text-7xl mt-4 text-black font-bold"
                style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
                Experts Behind the Startup Mela
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* Interactive Team Section */}
      {/* <div className="w-full px-6"> */}
      <div className={`w-full px-6 transition-all duration-500 ${hoveredTeam ? 'mb-[400px]' : 'mb-[100px]'}`}>
        <div className="max-w-6xl mx-17">
          {/* Top Center - Poppy Pie */}
          <div className="flex justify-center mb-5">
            <div
              className={`cursor-pointer transform transition-all duration-500 relative ${hoveredTeam === 'poppypie' ? 'scale-110' : 'hover:scale-105'}`}
              onMouseEnter={() => setHoveredTeam('poppypie')}
              onMouseLeave={() => setHoveredTeam(null)}
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

          {/* Bottom Row - Navrasa (Left) and Khaba (Right) */}
          <div className="flex justify-between items-start">

            {/* Navrasa Logo - Left Side */}
            <div
              className={`cursor-pointer transform transition-all duration-500 relative ${hoveredTeam === 'navrasa' ? 'scale-125' : 'hover:scale-110'}`}
              onMouseEnter={() => setHoveredTeam('navrasa')}
              onMouseLeave={() => setHoveredTeam(null)}
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

                }`}
              >
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
              onMouseEnter={() => setHoveredTeam('khaba')}
              onMouseLeave={() => setHoveredTeam(null)}
            >
              <div className="w-48 h-48 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full shadow-2xl flex items-center justify-center hover:shadow-3xl transition-shadow duration-500 overflow-hidden">
                <img
                  src="/khaba.jpg"
                  alt="khaba Logo"
                  className="w-48 h-48 object-cover rounded-full"
                />
              </div>

              {/* Khaba Content */}
              <div className={`absolute top-0 right-full mr-6 w-[400px] z-10 transition-all duration-500 ${hoveredTeam === 'khaba' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
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
  );
};

export default TeamPage;
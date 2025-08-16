// import React from 'react';
// import { Calendar, Clock, MapPin, Users, Play, Star, ArrowRight, Building, Target, Network, Award, TrendingUp, Handshake, Palette, Wrench, Lightbulb } from 'lucide-react';

// const TeamPage = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
//       {/* Header Section */}
//       <div className="relative overflow-hidden bg-white">
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-50"></div>
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//           <div className="text-center space-y-6">
//             <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
//               <Users className="w-4 h-4 mr-2" />
//               The Dream Team
//             </div>
//             <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
//               Orchestrated by the Best in the Business
//             </h1>
//             <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
//               Startup Mela is the result of a strategic collaboration between three industry-leading companies, 
//               each a master in their respective field. Meet the experts behind the Mela.
//             </p>
//           </div>
//         </div>
        
//         {/* Decorative Elements */}
//         <div className="absolute top-10 right-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl"></div>
//         <div className="absolute bottom-10 left-10 w-16 h-16 bg-indigo-200/40 rounded-full blur-lg"></div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        
//         {/* Team Introduction */}
//         <div className="text-center space-y-12">
//           <div className="space-y-4">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Three Companies, One Vision</h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Our success lies in the perfect synergy of expertise, creativity, and execution. Each partner brings 
//               unique strengths to create an unparalleled event experience.
//             </p>
//           </div>
//         </div>

//         {/* The Poppy Pie - Marketing & Brand Management */}
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div className="relative">
//             <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
//               <div className="aspect-video bg-gradient-to-br from-pink-100 to-rose-200 flex items-center justify-center relative">
//                 {/* Marketing visual */}
//                 <div className="absolute inset-4 bg-white/20 rounded-2xl backdrop-blur-sm"></div>
//                 <div className="relative z-10 flex items-center space-x-4">
//                   <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
//                     <TrendingUp className="w-8 h-8 text-pink-600" />
//                   </div>
//                   <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center">
//                     <Target className="w-6 h-6 text-rose-500" />
//                   </div>
//                   <div className="w-14 h-14 bg-white/75 rounded-full flex items-center justify-center">
//                     <Lightbulb className="w-7 h-7 text-yellow-500" />
//                   </div>
//                 </div>
                
//                 {/* Play Button */}
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <button className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group">
//                     <Play className="w-8 h-8 text-pink-600 ml-1 group-hover:scale-110 transition-transform" />
//                   </button>
//                 </div>
//               </div>
//             </div>
            
//             {/* Decorative corner elements */}
//             <div className="absolute -top-4 -right-4 w-8 h-8 bg-pink-400 rounded-full shadow-lg"></div>
//             <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-rose-500 rounded-full shadow-lg"></div>
//           </div>
          
//           <div className="space-y-8">
//             <div className="space-y-4">
//               <div className="inline-flex items-center px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-sm font-semibold">
//                 <TrendingUp className="w-4 h-4 mr-2" />
//                 Marketing & Brand Management
//               </div>
//               <h2 className="text-4xl font-bold text-pink-500">The Poppy Pie</h2>
//               <h3 className="text-2xl font-semibold text-gray-900">Strategic Marketing Masters</h3>
//             </div>
//             <div className="space-y-6">
//               <p className="text-lg text-gray-700 leading-relaxed">
//                 As the top marketing and branding agency in the Tricity, The Poppy Pie is the strategic mind behind our outreach. 
//                 They ensure that every startup, sponsor, and attendee receives maximum visibility and that the Mela's message resonates far and wide.
//               </p>
//               <div className="space-y-4">
//                 <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-4">
//                   <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
//                     <Target className="w-5 h-5 text-pink-600" />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-gray-900">Brand Strategy</p>
//                     <p className="text-sm text-gray-600">Creating compelling narratives and positioning</p>
//                   </div>
//                 </div>
//                 <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-4">
//                   <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center">
//                     <TrendingUp className="w-5 h-5 text-rose-600" />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-gray-900">Digital Marketing</p>
//                     <p className="text-sm text-gray-600">Multi-channel promotion and engagement</p>
//                   </div>
//                 </div>
//                 <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-4">
//                   <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
//                     <Lightbulb className="w-5 h-5 text-yellow-600" />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-gray-900">Creative Content</p>
//                     <p className="text-sm text-gray-600">Engaging visuals and messaging campaigns</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Navrasa - Event Management */}
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div className="space-y-8 lg:order-1">
//             <div className="space-y-4">
//               <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
//                 <Wrench className="w-4 h-4 mr-2" />
//                 Event Management
//               </div>
//               <h2 className="text-4xl font-bold text-blue-500">Navrasa</h2>
//               <h3 className="text-2xl font-semibold text-gray-900">Seamless Experience Architects</h3>
//             </div>
//             <div className="space-y-6">
//               <p className="text-lg text-gray-700 leading-relaxed">
//                 Recognized as the best event management company in the region, Navrasa is the architect of the seamless 
//                 on-ground experience. From logistics and production to hospitality, their expertise guarantees a world-class, 
//                 professionally executed event.
//               </p>
//               <div className="space-y-4">
//                 <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-4">
//                   <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
//                     <Building className="w-5 h-5 text-blue-600" />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-gray-900">Logistics Management</p>
//                     <p className="text-sm text-gray-600">End-to-end event coordination and planning</p>
//                   </div>
//                 </div>
//                 <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-4">
//                   <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
//                     <Wrench className="w-5 h-5 text-indigo-600" />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-gray-900">Production Excellence</p>
//                     <p className="text-sm text-gray-600">Technical setup and equipment management</p>
//                   </div>
//                 </div>
//                 <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-4">
//                   <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
//                     <Handshake className="w-5 h-5 text-green-600" />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-gray-900">Hospitality Services</p>
//                     <p className="text-sm text-gray-600">Premium guest experience and support</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           <div className="relative lg:order-2">
//             <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
//               <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center relative">
//                 {/* Event management visual */}
//                 <div className="absolute inset-4 bg-white/20 rounded-2xl backdrop-blur-sm"></div>
//                 <div className="relative z-10 grid grid-cols-3 gap-4">
//                   <div className="w-16 h-16 bg-white/90 rounded-xl flex items-center justify-center">
//                     <Building className="w-8 h-8 text-blue-600" />
//                   </div>
//                   <div className="w-16 h-16 bg-white/80 rounded-xl flex items-center justify-center">
//                     <Wrench className="w-8 h-8 text-indigo-600" />
//                   </div>
//                   <div className="w-16 h-16 bg-white/75 rounded-xl flex items-center justify-center">
//                     <Users className="w-8 h-8 text-green-600" />
//                   </div>
//                 </div>
                
//                 {/* Play Button */}
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <button className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group">
//                     <Play className="w-8 h-8 text-blue-600 ml-1 group-hover:scale-110 transition-transform" />
//                   </button>
//                 </div>
//               </div>
//             </div>
            
//             {/* Decorative corner elements */}
//             <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-400 rounded-full shadow-lg"></div>
//             <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-indigo-500 rounded-full shadow-lg"></div>
//           </div>
//         </div>

//         {/* Khaba - Architectural Design */}
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div className="relative">
//             <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
//               <div className="aspect-video bg-gradient-to-br from-purple-100 to-indigo-200 flex items-center justify-center relative">
//                 {/* Architectural design visual */}
//                 <div className="absolute inset-4 bg-white/20 rounded-2xl backdrop-blur-sm"></div>
//                 <div className="relative z-10 flex items-center space-x-4">
//                   <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
//                     <Palette className="w-8 h-8 text-purple-600" />
//                   </div>
//                   <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center">
//                     <Building className="w-6 h-6 text-indigo-500" />
//                   </div>
//                   <div className="w-14 h-14 bg-white/75 rounded-full flex items-center justify-center">
//                     <Star className="w-7 h-7 text-yellow-500" />
//                   </div>
//                 </div>
                
//                 {/* Play Button */}
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <button className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group">
//                     <Play className="w-8 h-8 text-purple-600 ml-1 group-hover:scale-110 transition-transform" />
//                   </button>
//                 </div>
//               </div>
//             </div>
            
//             {/* Decorative corner elements */}
//             <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-400 rounded-full shadow-lg"></div>
//             <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-indigo-500 rounded-full shadow-lg"></div>
//           </div>
          
//           <div className="space-y-8">
//             <div className="space-y-4">
//               <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold">
//                 <Palette className="w-4 h-4 mr-2" />
//                 Architectural Design
//               </div>
//               <h2 className="text-4xl font-bold text-purple-500">Khaba</h2>
//               <h3 className="text-2xl font-semibold text-gray-900">Visionary Space Designers</h3>
//             </div>
//             <div className="space-y-6">
//               <p className="text-lg text-gray-700 leading-relaxed">
//                 An innovative architectural design firm from Chandigarh, Khaba is the visionary behind the event's physical space. 
//                 They are transforming the Sector 34 Ground into an immersive, functional, and aesthetically stunning environment 
//                 designed for interaction and discovery.
//               </p>
//               <div className="space-y-4">
//                 <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-4">
//                   <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
//                     <Palette className="w-5 h-5 text-purple-600" />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-gray-900">Space Design</p>
//                     <p className="text-sm text-gray-600">Creating immersive and functional environments</p>
//                   </div>
//                 </div>
//                 <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-4">
//                   <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
//                     <Building className="w-5 h-5 text-indigo-600" />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-gray-900">Venue Transformation</p>
//                     <p className="text-sm text-gray-600">Converting spaces into engaging experiences</p>
//                   </div>
//                 </div>
//                 <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-4">
//                   <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
//                     <Star className="w-5 h-5 text-yellow-600" />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-gray-900">Aesthetic Excellence</p>
//                     <p className="text-sm text-gray-600">Stunning visual appeal and user experience</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Team Legacy */}
//         <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12">
//           <div className="text-center space-y-12">
//             <div className="space-y-4">
//               <h2 className="text-4xl font-bold text-gray-900">Our Legacy</h2>
//               <p className="text-lg text-gray-700 max-w-3xl mx-auto">
//                 Built on a Foundation of Successful Events in Chandigarh. We are not new to creating impactful events. 
//                 Our team brings a wealth of experience from orchestrating some of the most significant events in the region.
//               </p>
//             </div>
            
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               <div className="bg-white p-6 rounded-2xl shadow-lg">
//                 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Award className="w-8 h-8 text-blue-600" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">SFD</h3>
//                 <p className="text-gray-600">Swarajya First Democracy - A flagship political and social initiative</p>
//               </div>
              
//               <div className="bg-white p-6 rounded-2xl shadow-lg">
//                 <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Star className="w-8 h-8 text-green-600" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">Scitron</h3>
//                 <p className="text-gray-600">The largest and most celebrated festival of Panjab University</p>
//               </div>
              
//               <div className="bg-white p-6 rounded-2xl shadow-lg">
//                 <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <TrendingUp className="w-8 h-8 text-purple-600" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">Devfest</h3>
//                 <p className="text-gray-600">Key collaborator in bringing the globally recognized tech conference to our community</p>
//               </div>
              
//               <div className="bg-white p-6 rounded-2xl shadow-lg">
//                 <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Lightbulb className="w-8 h-8 text-orange-600" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">Technovate</h3>
//                 <p className="text-gray-600">The driving force behind the biggest and most competitive hackathon in Chandigarh</p>
//               </div>
              
//               <div className="bg-white p-6 rounded-2xl shadow-lg">
//                 <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Network className="w-8 h-8 text-teal-600" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">Community Meetups</h3>
//                 <p className="text-gray-600">A long history of organizing smaller, focused events that foster community and connection</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Contact Information */}
//         <div className="text-center space-y-8">
//           <div className="space-y-4">
//             <h2 className="text-4xl font-bold text-gray-900">Ready to Connect?</h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Have questions about our team or want to collaborate? We'd love to hear from you. 
//               Reach out to discuss partnerships, media inquiries, or any other opportunities.
//             </p>
//           </div>
          
//           <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-md mx-auto">
//             <div className="space-y-4">
//               <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
//                 <MapPin className="w-8 h-8 text-blue-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900">Get In Touch</h3>
//               <div className="space-y-2 text-gray-600">
//                 <p>📧 contact@businessorbit.org</p>
//                 <p>📞 +91 76968 34279</p>
//               </div>
//               <div className="flex space-x-4 justify-center mt-6">
//                 <button className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
//                   <Network className="w-6 h-6 text-blue-600" />
//                 </button>
//                 <button className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center hover:bg-pink-200 transition-colors">
//                   <Star className="w-6 h-6 text-pink-600" />
//                 </button>
//                 <button className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-200 transition-colors">
//                   <Users className="w-6 h-6 text-green-600" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
//         <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
//             Experience Excellence in Event Management
//           </h2>
//           <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
//             Join us at Startup Mela 2025 and witness the perfect collaboration of marketing expertise, 
//             event management excellence, and innovative design.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
//               Register for Event
//             </button>
//             <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300">
//               Contact Our Team
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeamPage;

// import React from 'react';
// import { Calendar, Clock, MapPin, Users, Play, Star, ArrowRight, Building, Target, Network, Award, TrendingUp, Handshake, Palette, Wrench, Lightbulb } from 'lucide-react';

// const TeamPage = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
//       {/* Header Section */}
//       <div className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50">
//         <div className="absolute inset-0">
//           <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/40 to-transparent rounded-full blur-3xl"></div>
//           <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-indigo-200/40 to-transparent rounded-full blur-3xl"></div>
//         </div>
        
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//           <div className="text-center space-y-8">
//             <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm border border-blue-200/50">
//               <Users className="w-4 h-4 mr-2" />
//               The Dream Team
//             </div>
//             <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent leading-tight">
//               Orchestrated by the Best
//               <span className="block text-4xl md:text-6xl mt-2">in the Business</span>
//             </h1>
//             <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
//               Startup Mela is the result of a strategic collaboration between three industry-leading companies, 
//               each a master in their respective field. Meet the experts behind the Mela.
//             </p>
//           </div>
//         </div>
        
//         {/* Enhanced Decorative Elements */}
//         <div className="absolute top-20 right-20 w-24 h-24 bg-gradient-to-br from-blue-400/30 to-indigo-400/30 rounded-full blur-xl animate-pulse"></div>
//         <div className="absolute bottom-20 left-20 w-20 h-20 bg-gradient-to-br from-indigo-400/40 to-purple-400/40 rounded-full blur-lg animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-br from-pink-400/20 to-rose-400/20 rounded-full blur-lg"></div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-32">
        
//         {/* Team Introduction */}
//         <div className="text-center space-y-12">
//           <div className="space-y-6">
//             <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
//               Three Companies, One Vision
//             </h2>
//             <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
//               Our success lies in the perfect synergy of expertise, creativity, and execution. Each partner brings 
//               unique strengths to create an unparalleled event experience.
//             </p>
//           </div>
//         </div>

//         {/* The Poppy Pie - Marketing & Brand Management */}
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           <div className="relative group">
//             <div className="absolute inset-0 bg-gradient-to-br from-pink-200/50 to-rose-200/50 rounded-3xl blur-2xl transform group-hover:scale-105 transition-transform duration-700"></div>
//             <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-700 border border-white/20">
//               <div className="aspect-video bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 flex items-center justify-center relative overflow-hidden">
//                 {/* Animated background elements */}
//                 <div className="absolute inset-0">
//                   <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-pink-200/40 to-transparent rounded-full blur-xl animate-pulse"></div>
//                   <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-rose-200/40 to-transparent rounded-full blur-xl animate-pulse delay-500"></div>
//                 </div>
                
//                 <div className="absolute inset-6 bg-white/30 rounded-2xl backdrop-blur-sm border border-white/50"></div>
//                 <div className="relative z-10 flex items-center space-x-6">
//                   <div className="w-20 h-20 bg-gradient-to-br from-white to-pink-50 rounded-2xl flex items-center justify-center shadow-xl border border-white/50">
//                     <TrendingUp className="w-10 h-10 text-pink-600" />
//                   </div>
//                   <div className="w-16 h-16 bg-gradient-to-br from-white to-rose-50 rounded-2xl flex items-center justify-center shadow-lg border border-white/50">
//                     <Target className="w-8 h-8 text-rose-500" />
//                   </div>
//                   <div className="w-18 h-18 bg-gradient-to-br from-white to-yellow-50 rounded-2xl flex items-center justify-center shadow-lg border border-white/50">
//                     <Lightbulb className="w-9 h-9 text-amber-500" />
//                   </div>
//                 </div>
                
//                 {/* Enhanced Play Button */}
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <button className="w-24 h-24 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-500 group border-4 border-pink-200/50">
//                     <Play className="w-10 h-10 text-pink-600 ml-1 group-hover:scale-110 transition-transform duration-300" />
//                   </button>
//                 </div>
//               </div>
//             </div>
            
//             {/* Enhanced decorative elements */}
//             <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full shadow-xl animate-bounce"></div>
//             <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full shadow-xl animate-bounce delay-500"></div>
//           </div>
          
//           <div className="space-y-10">
//             <div className="space-y-6">
//               <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-100 to-rose-100 text-pink-800 rounded-full text-sm font-semibold shadow-lg border border-pink-200/50">
//                 <TrendingUp className="w-4 h-4 mr-2" />
//                 Marketing & Brand Management
//               </div>
//               <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
//                 The Poppy Pie
//               </h2>
//               <h3 className="text-3xl font-semibold text-gray-800">Strategic Marketing Masters</h3>
//             </div>
//             <div className="space-y-8">
//               <p className="text-xl text-gray-700 leading-relaxed font-medium">
//                 As the top marketing and branding agency in the Tricity, The Poppy Pie is the strategic mind behind our outreach. 
//                 They ensure that every startup, sponsor, and attendee receives maximum visibility and that the Mela's message resonates far and wide.
//               </p>
//               <div className="space-y-6">
//                 {[
//                   { icon: Target, title: "Brand Strategy", desc: "Creating compelling narratives and positioning", color: "pink" },
//                   { icon: TrendingUp, title: "Digital Marketing", desc: "Multi-channel promotion and engagement", color: "rose" },
//                   { icon: Lightbulb, title: "Creative Content", desc: "Engaging visuals and messaging campaigns", color: "amber" }
//                 ].map((item, index) => (
//                   <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100/50 flex items-center space-x-6 hover:shadow-xl hover:scale-105 transition-all duration-500">
//                     <div className={`w-14 h-14 bg-gradient-to-br from-${item.color}-100 to-${item.color}-200 rounded-xl flex items-center justify-center shadow-lg`}>
//                       <item.icon className={`w-7 h-7 text-${item.color}-600`} />
//                     </div>
//                     <div>
//                       <p className="font-bold text-gray-900 text-lg">{item.title}</p>
//                       <p className="text-gray-600 font-medium">{item.desc}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Navrasa - Event Management */}
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           <div className="space-y-10 lg:order-1">
//             <div className="space-y-6">
//               <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full text-sm font-semibold shadow-lg border border-blue-200/50">
//                 <Wrench className="w-4 h-4 mr-2" />
//                 Event Management
//               </div>
//               <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
//                 Navrasa
//               </h2>
//               <h3 className="text-3xl font-semibold text-gray-800">Seamless Experience Architects</h3>
//             </div>
//             <div className="space-y-8">
//               <p className="text-xl text-gray-700 leading-relaxed font-medium">
//                 Recognized as the best event management company in the region, Navrasa is the architect of the seamless 
//                 on-ground experience. From logistics and production to hospitality, their expertise guarantees a world-class, 
//                 professionally executed event.
//               </p>
//               <div className="space-y-6">
//                 {[
//                   { icon: Building, title: "Logistics Management", desc: "End-to-end event coordination and planning", color: "blue" },
//                   { icon: Wrench, title: "Production Excellence", desc: "Technical setup and equipment management", color: "indigo" },
//                   { icon: Handshake, title: "Hospitality Services", desc: "Premium guest experience and support", color: "green" }
//                 ].map((item, index) => (
//                   <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100/50 flex items-center space-x-6 hover:shadow-xl hover:scale-105 transition-all duration-500">
//                     <div className={`w-14 h-14 bg-gradient-to-br from-${item.color}-100 to-${item.color}-200 rounded-xl flex items-center justify-center shadow-lg`}>
//                       <item.icon className={`w-7 h-7 text-${item.color}-600`} />
//                     </div>
//                     <div>
//                       <p className="font-bold text-gray-900 text-lg">{item.title}</p>
//                       <p className="text-gray-600 font-medium">{item.desc}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
          
//           <div className="relative group lg:order-2">
//             <div className="absolute inset-0 bg-gradient-to-br from-blue-200/50 to-indigo-200/50 rounded-3xl blur-2xl transform group-hover:scale-105 transition-transform duration-700"></div>
//             <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-700 border border-white/20">
//               <div className="aspect-video bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 flex items-center justify-center relative overflow-hidden">
//                 {/* Animated background elements */}
//                 <div className="absolute inset-0">
//                   <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-blue-200/40 to-transparent rounded-full blur-xl animate-pulse"></div>
//                   <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-indigo-200/40 to-transparent rounded-full blur-xl animate-pulse delay-500"></div>
//                 </div>
                
//                 <div className="absolute inset-6 bg-white/30 rounded-2xl backdrop-blur-sm border border-white/50"></div>
//                 <div className="relative z-10 grid grid-cols-3 gap-4">
//                   <div className="w-20 h-20 bg-gradient-to-br from-white to-blue-50 rounded-2xl flex items-center justify-center shadow-xl border border-white/50">
//                     <Building className="w-10 h-10 text-blue-600" />
//                   </div>
//                   <div className="w-20 h-20 bg-gradient-to-br from-white to-indigo-50 rounded-2xl flex items-center justify-center shadow-lg border border-white/50">
//                     <Wrench className="w-10 h-10 text-indigo-600" />
//                   </div>
//                   <div className="w-20 h-20 bg-gradient-to-br from-white to-green-50 rounded-2xl flex items-center justify-center shadow-lg border border-white/50">
//                     <Users className="w-10 h-10 text-green-600" />
//                   </div>
//                 </div>
                
//                 {/* Enhanced Play Button */}
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <button className="w-24 h-24 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-500 group border-4 border-blue-200/50">
//                     <Play className="w-10 h-10 text-blue-600 ml-1 group-hover:scale-110 transition-transform duration-300" />
//                   </button>
//                 </div>
//               </div>
//             </div>
            
//             {/* Enhanced decorative elements */}
//             <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full shadow-xl animate-bounce"></div>
//             <div className="absolute -bottom-6 -right-6 w-10 h-10 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full shadow-xl animate-bounce delay-500"></div>
//           </div>
//         </div>

//         {/* Khaba - Architectural Design */}
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           <div className="relative group">
//             <div className="absolute inset-0 bg-gradient-to-br from-purple-200/50 to-indigo-200/50 rounded-3xl blur-2xl transform group-hover:scale-105 transition-transform duration-700"></div>
//             <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-700 border border-white/20">
//               <div className="aspect-video bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-100 flex items-center justify-center relative overflow-hidden">
//                 {/* Animated background elements */}
//                 <div className="absolute inset-0">
//                   <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-purple-200/40 to-transparent rounded-full blur-xl animate-pulse"></div>
//                   <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-indigo-200/40 to-transparent rounded-full blur-xl animate-pulse delay-500"></div>
//                 </div>
                
//                 <div className="absolute inset-6 bg-white/30 rounded-2xl backdrop-blur-sm border border-white/50"></div>
//                 <div className="relative z-10 flex items-center space-x-6">
//                   <div className="w-20 h-20 bg-gradient-to-br from-white to-purple-50 rounded-2xl flex items-center justify-center shadow-xl border border-white/50">
//                     <Palette className="w-10 h-10 text-purple-600" />
//                   </div>
//                   <div className="w-16 h-16 bg-gradient-to-br from-white to-indigo-50 rounded-2xl flex items-center justify-center shadow-lg border border-white/50">
//                     <Building className="w-8 h-8 text-indigo-500" />
//                   </div>
//                   <div className="w-18 h-18 bg-gradient-to-br from-white to-yellow-50 rounded-2xl flex items-center justify-center shadow-lg border border-white/50">
//                     <Star className="w-9 h-9 text-amber-500" />
//                   </div>
//                 </div>
                
//                 {/* Enhanced Play Button */}
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <button className="w-24 h-24 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-500 group border-4 border-purple-200/50">
//                     <Play className="w-10 h-10 text-purple-600 ml-1 group-hover:scale-110 transition-transform duration-300" />
//                   </button>
//                 </div>
//               </div>
//             </div>
            
//             {/* Enhanced decorative elements */}
//             <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full shadow-xl animate-bounce"></div>
//             <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full shadow-xl animate-bounce delay-500"></div>
//           </div>
          
//           <div className="space-y-10">
//             <div className="space-y-6">
//               <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-800 rounded-full text-sm font-semibold shadow-lg border border-purple-200/50">
//                 <Palette className="w-4 h-4 mr-2" />
//                 Architectural Design
//               </div>
//               <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
//                 Khaba
//               </h2>
//               <h3 className="text-3xl font-semibold text-gray-800">Visionary Space Designers</h3>
//             </div>
//             <div className="space-y-8">
//               <p className="text-xl text-gray-700 leading-relaxed font-medium">
//                 An innovative architectural design firm from Chandigarh, Khaba is the visionary behind the event's physical space. 
//                 They are transforming the Sector 34 Ground into an immersive, functional, and aesthetically stunning environment 
//                 designed for interaction and discovery.
//               </p>
//               <div className="space-y-6">
//                 {[
//                   { icon: Palette, title: "Space Design", desc: "Creating immersive and functional environments", color: "purple" },
//                   { icon: Building, title: "Venue Transformation", desc: "Converting spaces into engaging experiences", color: "indigo" },
//                   { icon: Star, title: "Aesthetic Excellence", desc: "Stunning visual appeal and user experience", color: "amber" }
//                 ].map((item, index) => (
//                   <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100/50 flex items-center space-x-6 hover:shadow-xl hover:scale-105 transition-all duration-500">
//                     <div className={`w-14 h-14 bg-gradient-to-br from-${item.color}-100 to-${item.color}-200 rounded-xl flex items-center justify-center shadow-lg`}>
//                       <item.icon className={`w-7 h-7 text-${item.color}-600`} />
//                     </div>
//                     <div>
//                       <p className="font-bold text-gray-900 text-lg">{item.title}</p>
//                       <p className="text-gray-600 font-medium">{item.desc}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Enhanced Team Legacy */}
//         <div className="relative">
//           <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 to-blue-100/50 rounded-3xl blur-2xl"></div>
//           <div className="relative bg-white/60 backdrop-blur-xl rounded-3xl p-16 shadow-2xl border border-white/30">
//             <div className="text-center space-y-16">
//               <div className="space-y-8">
//                 <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
//                   Our Legacy
//                 </h2>
//                 <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
//                   Built on a Foundation of Successful Events in Chandigarh. We are not new to creating impactful events. 
//                   Our team brings a wealth of experience from orchestrating some of the most significant events in the region.
//                 </p>
//               </div>
              
//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {[
//                   { icon: Award, title: "SFD", desc: "Swarajya First Democracy - A flagship political and social initiative", color: "blue" },
//                   { icon: Star, title: "Scitron", desc: "The largest and most celebrated festival of Panjab University", color: "green" },
//                   { icon: TrendingUp, title: "Devfest", desc: "Key collaborator in bringing the globally recognized tech conference to our community", color: "purple" },
//                   { icon: Lightbulb, title: "Technovate", desc: "The driving force behind the biggest and most competitive hackathon in Chandigarh", color: "orange" },
//                   { icon: Network, title: "Community Meetups", desc: "A long history of organizing smaller, focused events that foster community and connection", color: "teal" }
//                 ].map((item, index) => (
//                   <div key={index} className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/50">
//                     <div className={`w-20 h-20 bg-gradient-to-br from-${item.color}-100 to-${item.color}-200 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
//                       <item.icon className={`w-10 h-10 text-${item.color}-600`} />
//                     </div>
//                     <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
//                     <p className="text-gray-600 leading-relaxed font-medium">{item.desc}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Enhanced Contact Information */}
//         <div className="text-center space-y-12">
//           <div className="space-y-8">
//             <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
//               Ready to Connect?
//             </h2>
//             <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
//               Have questions about our team or want to collaborate? We'd love to hear from you. 
//               Reach out to discuss partnerships, media inquiries, or any other opportunities.
//             </p>
//           </div>
          
//           <div className="relative max-w-lg mx-auto">
//             <div className="absolute inset-0 bg-gradient-to-br from-blue-200/50 to-indigo-200/50 rounded-3xl blur-2xl"></div>
//             <div className="relative bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/50">
//               <div className="space-y-8">
//                 <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
//                   <MapPin className="w-10 h-10 text-blue-600" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">Get In Touch</h3>
//                 <div className="space-y-4 text-gray-700 font-medium text-lg">
//                   <p>📧 contact@businessorbit.org</p>
//                   <p>📞 +91 76968 34279</p>
//                 </div>
//                 <div className="flex space-x-6 justify-center mt-8">
//                   {[
//                     { icon: Network, color: "blue" },
//                     { icon: Star, color: "pink" },
//                     { icon: Users, color: "green" }
//                   ].map((item, index) => (
//                     <button key={index} className={`w-16 h-16 bg-gradient-to-br from-${item.color}-100 to-${item.color}-200 rounded-2xl flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all duration-300 border border-white/50`}>
//                       <item.icon className={`w-8 h-8 text-${item.color}-600`} />
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Enhanced CTA Section */}
//       <div className="relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800"></div>
//         <div className="absolute inset-0">
//           <div className="absolute top-10 left-1/4 w-96 h-96 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl"></div>
//           <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-gradient-to-br from-indigo-300/20 to-transparent rounded-full blur-3xl"></div>
//         </div>
        
//         <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-24">
//           <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
//             Experience Excellence in
//             <span className="block bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
//               Event Management
//             </span>
//           </h2>
//           <p className="text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
//             Join us at Startup Mela 2025 and witness the perfect collaboration of marketing expertise, 
//             event management excellence, and innovative design.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-6 justify-center">
//             <button className="px-12 py-5 bg-white text-blue-600 font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 text-lg">
//               Register for Event
//             </button>
//             <button className="px-12 py-5 border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300 text-lg backdrop-blur-sm">
//               Contact Our Team
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeamPage;

import React from 'react';
import { Calendar, Clock, MapPin, Users, Play, Star, ArrowRight, Building, Target, Network, Award, TrendingUp, Handshake, Palette, Wrench, Lightbulb } from 'lucide-react';

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="absolute inset-0">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.1" d="M0 400C240 300 480 500 720 400C960 300 1200 500 1440 400V800H0V400Z" fill="url(#gradient1)"/>
            <path opacity="0.1" d="M0 600C360 500 720 700 1440 600V800H0V600Z" fill="url(#gradient2)"/>
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor:'#3B82F6', stopOpacity:0.2}} />
                <stop offset="50%" style={{stopColor:'#8B5CF6', stopOpacity:0.2}} />
                <stop offset="100%" style={{stopColor:'#06B6D4', stopOpacity:0.2}} />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor:'#EC4899', stopOpacity:0.1}} />
                <stop offset="100%" style={{stopColor:'#F59E0B', stopOpacity:0.1}} />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-sm text-gray-700 rounded-full text-sm font-semibold shadow-lg border border-gray-200/50">
              <Users className="w-4 h-4 mr-2 text-blue-600" />
              The Dream Team
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
              Orchestrated by the Best
              <span className="block text-5xl md:text-7xl mt-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                in the Business
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Startup Mela is the result of a strategic collaboration between three industry-leading companies, 
              each a master in their respective field. Meet the experts behind the Mela.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 space-y-32">
        
        {/* Team Introduction */}
        <div className="text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
              Three Companies, One Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our success lies in the perfect synergy of expertise, creativity, and execution. Each partner brings 
              unique strengths to create an unparalleled event experience.
            </p>
          </div>
        </div>

        {/* The Poppy Pie - Marketing & Brand Management */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl transform rotate-1"></div>
          <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden transform -rotate-1 hover:rotate-0 transition-transform duration-700">
            <div className="grid lg:grid-cols-2">
              {/* Content Section */}
              <div className="p-12 lg:p-16 space-y-10">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full text-sm font-semibold shadow-lg">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Marketing & Brand Management
                  </div>
                  <h2 className="text-6xl font-black bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                    The Poppy Pie
                  </h2>
                  <h3 className="text-3xl font-bold text-gray-800">Strategic Marketing Masters</h3>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  As the top marketing and branding agency in the Tricity, The Poppy Pie is the strategic mind behind our outreach. 
                  They ensure that every startup, sponsor, and attendee receives maximum visibility and that the Mela's message resonates far and wide.
                </p>
                
                <div className="space-y-4">
                  {[
                    { icon: Target, title: "Brand Strategy", desc: "Creating compelling narratives and positioning" },
                    { icon: TrendingUp, title: "Digital Marketing", desc: "Multi-channel promotion and engagement" },
                    { icon: Lightbulb, title: "Creative Content", desc: "Engaging visuals and messaging campaigns" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl hover:bg-pink-50 transition-colors duration-300">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md">
                        <item.icon className="w-6 h-6 text-pink-500" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{item.title}</p>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Visual Section */}
              <div className="relative bg-gradient-to-br from-pink-100 to-rose-100 p-12 flex items-center justify-center">
                <div className="relative">
                  <div className="w-80 h-80 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center shadow-xl">
                        <TrendingUp className="w-12 h-12 text-white" />
                      </div>
                      <div className="w-24 h-24 bg-gradient-to-br from-rose-400 to-pink-400 rounded-2xl flex items-center justify-center shadow-xl">
                        <Target className="w-12 h-12 text-white" />
                      </div>
                      <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-rose-400 rounded-2xl flex items-center justify-center shadow-xl">
                        <Lightbulb className="w-12 h-12 text-white" />
                      </div>
                      <div className="w-24 h-24 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl relative">
                        <Play className="w-12 h-12 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full shadow-xl animate-bounce flex items-center justify-center">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navrasa - Event Management */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl transform -rotate-1"></div>
          <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-700">
            <div className="grid lg:grid-cols-2">
              {/* Visual Section */}
              <div className="relative bg-gradient-to-br from-blue-100 to-indigo-100 p-12 flex items-center justify-center lg:order-1">
                <div className="relative">
                  <div className="w-80 h-80 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-xl">
                        <Building className="w-12 h-12 text-white" />
                      </div>
                      <div className="w-24 h-24 bg-gradient-to-br from-indigo-400 to-blue-400 rounded-2xl flex items-center justify-center shadow-xl">
                        <Wrench className="w-12 h-12 text-white" />
                      </div>
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-2xl flex items-center justify-center shadow-xl">
                        <Handshake className="w-12 h-12 text-white" />
                      </div>
                      <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl relative">
                        <Play className="w-12 h-12 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full shadow-xl animate-bounce flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-12 lg:p-16 space-y-10 lg:order-2">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full text-sm font-semibold shadow-lg">
                    <Wrench className="w-4 h-4 mr-2" />
                    Event Management
                  </div>
                  <h2 className="text-6xl font-black bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                    Navrasa
                  </h2>
                  <h3 className="text-3xl font-bold text-gray-800">Seamless Experience Architects</h3>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Recognized as the best event management company in the region, Navrasa is the architect of the seamless 
                  on-ground experience. From logistics and production to hospitality, their expertise guarantees a world-class, 
                  professionally executed event.
                </p>
                
                <div className="space-y-4">
                  {[
                    { icon: Building, title: "Logistics Management", desc: "End-to-end event coordination and planning" },
                    { icon: Wrench, title: "Production Excellence", desc: "Technical setup and equipment management" },
                    { icon: Handshake, title: "Hospitality Services", desc: "Premium guest experience and support" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors duration-300">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md">
                        <item.icon className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{item.title}</p>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Khaba - Architectural Design */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl transform rotate-1"></div>
          <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden transform -rotate-1 hover:rotate-0 transition-transform duration-700">
            <div className="grid lg:grid-cols-2">
              {/* Content Section */}
              <div className="p-12 lg:p-16 space-y-10">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full text-sm font-semibold shadow-lg">
                    <Palette className="w-4 h-4 mr-2" />
                    Architectural Design
                  </div>
                  <h2 className="text-6xl font-black bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
                    Khaba
                  </h2>
                  <h3 className="text-3xl font-bold text-gray-800">Visionary Space Designers</h3>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  An innovative architectural design firm from Chandigarh, Khaba is the visionary behind the event's physical space. 
                  They are transforming the Sector 34 Ground into an immersive, functional, and aesthetically stunning environment 
                  designed for interaction and discovery.
                </p>
                
                <div className="space-y-4">
                  {[
                    { icon: Palette, title: "Space Design", desc: "Creating immersive and functional environments" },
                    { icon: Building, title: "Venue Transformation", desc: "Converting spaces into engaging experiences" },
                    { icon: Star, title: "Aesthetic Excellence", desc: "Stunning visual appeal and user experience" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl hover:bg-purple-50 transition-colors duration-300">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md">
                        <item.icon className="w-6 h-6 text-purple-500" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{item.title}</p>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Visual Section */}
              <div className="relative bg-gradient-to-br from-purple-100 to-indigo-100 p-12 flex items-center justify-center">
                <div className="relative">
                  <div className="w-80 h-80 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-xl">
                        <Palette className="w-12 h-12 text-white" />
                      </div>
                      <div className="w-24 h-24 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-2xl flex items-center justify-center shadow-xl">
                        <Building className="w-12 h-12 text-white" />
                      </div>
                      <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-2xl flex items-center justify-center shadow-xl">
                        <Star className="w-12 h-12 text-white" />
                      </div>
                      <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-xl relative">
                        <Play className="w-12 h-12 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full shadow-xl animate-bounce flex items-center justify-center">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Legacy */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl"></div>
          <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-16 shadow-xl border border-gray-200/50">
            <div className="text-center space-y-16">
              <div className="space-y-8">
                <h2 className="text-5xl font-bold text-gray-900">
                  Our Legacy
                </h2>
                <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                  Built on a Foundation of Successful Events in Chandigarh. We are not new to creating impactful events. 
                  Our team brings a wealth of experience from orchestrating some of the most significant events in the region.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { icon: Award, title: "SFD", desc: "Swarajya First Democracy - A flagship political and social initiative", color: "bg-blue-500" },
                  { icon: Star, title: "Scitron", desc: "The largest and most celebrated festival of Panjab University", color: "bg-green-500" },
                  { icon: TrendingUp, title: "Devfest", desc: "Key collaborator in bringing the globally recognized tech conference to our community", color: "bg-purple-500" },
                  { icon: Lightbulb, title: "Technovate", desc: "The driving force behind the biggest and most competitive hackathon in Chandigarh", color: "bg-orange-500" },
                  { icon: Network, title: "Community Meetups", desc: "A long history of organizing smaller, focused events that foster community and connection", color: "bg-cyan-500" }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                    <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center space-y-12">
          <div className="space-y-8">
            <h2 className="text-5xl font-bold text-gray-900">
              Ready to Connect?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Have questions about our team or want to collaborate? We'd love to hear from you. 
              Reach out to discuss partnerships, media inquiries, or any other opportunities.
            </p>
          </div>
          
          <div className="relative max-w-lg mx-auto">
            <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100">
              <div className="space-y-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <MapPin className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Get In Touch</h3>
                <div className="space-y-4 text-gray-700 text-lg">
                  <p>📧 contact@businessorbit.org</p>
                  <p>📞 +91 76968 34279</p>
                </div>
                <div className="flex space-x-4 justify-center">
                  {[
                    { icon: Network, color: "bg-blue-500" },
                    { icon: Star, color: "bg-pink-500" },
                    { icon: Users, color: "bg-green-500" }
                  ].map((item, index) => (
                    <button key={index} className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300`}>
                      <item.icon className="w-7 h-7 text-white" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="relative max-w-5xl mx-auto text-center px-6 lg:px-8 py-24">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">
            Experience Excellence in
            <span className="block bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
              Event Management
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join us at Startup Mela 2025 and witness the perfect collaboration of marketing expertise, 
            event management excellence, and innovative design.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-4 bg-white text-gray-900 font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg">
              Register for Event
            </button>
            <button className="px-10 py-4 border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-gray-900 transition-all duration-300 text-lg">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
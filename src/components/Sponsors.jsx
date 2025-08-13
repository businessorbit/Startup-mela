// import React from 'react';
// import { Star, Award, Users, Briefcase } from 'lucide-react';

// const SponsorsPage = () => {
//   const sponsors = [
//     { name: 'Waverio', logo: '🌊', color: 'from-blue-400 to-purple-500' },
//     { name: 'LogoIpsum', logo: '📊', color: 'from-gray-400 to-gray-600' },
//     { name: 'Alterbox', logo: '📱', color: 'from-green-400 to-blue-500' },
//     { name: 'Tinygone', logo: '🎯', color: 'from-pink-400 to-red-500' },
//     { name: 'Presto', logo: '⚡', color: 'from-orange-400 to-yellow-500' },
//     { name: 'Ridoria', logo: '🚀', color: 'from-indigo-400 to-blue-600' },
//     { name: 'Carbonia', logo: '💎', color: 'from-gray-600 to-black' },
//     { name: 'Tocanto', logo: '⚡', color: 'from-blue-500 to-indigo-600' }
//   ];

//   const speakers = [
//     {
//       name: 'Jenny Wilson',
//       role: 'Co-Founder & CEO',
//       company: 'TechVision Inc.',
//       image: '👩‍💼',
//       color: 'from-blue-100 to-indigo-100'
//     },
//     {
//       name: 'Marcus Chen',
//       role: 'Lead Developer',
//       company: 'InnovateLabs',
//       image: '👨‍💻',
//       color: 'from-gray-100 to-blue-100'
//     },
//     {
//       name: 'Sarah Martinez',
//       role: 'Product Manager',
//       company: 'FutureCore',
//       image: '👩‍🎓',
//       color: 'from-orange-100 to-yellow-100',
//       featured: true
//     },
//     {
//       name: 'David Kumar',
//       role: 'Tech Architect',
//       company: 'CloudSync',
//       image: '👨‍🔬',
//       color: 'from-purple-100 to-pink-100'
//     },
//     {
//       name: 'Emma Thompson',
//       role: 'Design Director',
//       company: 'CreativeHub',
//       image: '👩‍🎨',
//       color: 'from-green-100 to-blue-100'
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
//       {/* Header Section */}
//       <div className="relative overflow-hidden bg-white">
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-50"></div>
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//           <div className="text-center space-y-6">
//             <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
//               <Award className="w-4 h-4 mr-2" />
//               Our Partners
//             </div>
//             <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
//               Our Sponsors
//             </h1>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               We're proud to partner with industry-leading companies who share our vision 
//               of innovation and excellence in technology and education.
//             </p>
//           </div>
//         </div>
        
//         {/* Decorative Elements */}
//         <div className="absolute top-10 right-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl"></div>
//         <div className="absolute bottom-10 left-10 w-16 h-16 bg-indigo-200/40 rounded-full blur-lg"></div>
//       </div>

//       {/* Sponsors Grid */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
//           {sponsors.map((sponsor, index) => (
//             <div 
//               key={sponsor.name}
//               className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
//             >
//               <div className="text-center space-y-4">
//                 <div className={`w-16 h-16 mx-auto bg-gradient-to-r ${sponsor.color} rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
//                   {sponsor.logo}
//                 </div>
//                 <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
//                   {sponsor.name}
//                 </h3>
//               </div>
              
//               {/* Hover effect overlay */}
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-2xl transition-all duration-300"></div>
//             </div>
//           ))}
//         </div>

//         {/* Statistics Section */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
//           <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
//             <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
//               <Briefcase className="w-8 h-8 text-blue-600" />
//             </div>
//             <h3 className="text-3xl font-bold text-gray-900 mb-2">25+</h3>
//             <p className="text-gray-600">Corporate Partners</p>
//           </div>
          
//           <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
//             <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
//               <Award className="w-8 h-8 text-green-600" />
//             </div>
//             <h3 className="text-3xl font-bold text-gray-900 mb-2">$50K+</h3>
//             <p className="text-gray-600">Total Sponsorship</p>
//           </div>
          
//           <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
//             <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-4">
//               <Users className="w-8 h-8 text-purple-600" />
//             </div>
//             <h3 className="text-3xl font-bold text-gray-900 mb-2">3</h3>
//             <p className="text-gray-600">Years Partnership</p>
//           </div>
//         </div>
//       </div>

//       {/* Meet the Brain Section */}
//       <div className="relative bg-white py-20">
//         <div className="absolute inset-0 bg-gradient-to-r from-yellow-50 to-orange-50 opacity-50"></div>
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <div className="flex items-center justify-center space-x-4 mb-6">
//               <Star className="w-8 h-8 text-yellow-500" />
//               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 italic">
//                 Meet the Brain
//               </h2>
//               <Star className="w-8 h-8 text-yellow-500" />
//             </div>
//             <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
//               Discover the inspiring minds behind our events. Our speakers are industry leaders, creative innovators, and dynamic 
//               professionals who bring a wealth of knowledge and experience to every session. Each one is carefully selected to deliver 
//               insightful, engaging, and impactful presentations that will inspire and empower you. Get to know the experts who are shaping 
//               the future of events and learn from their unique perspectives.
//             </p>
//           </div>

//           {/* Featured Speaker Card */}
//           <div className="mb-12 flex justify-center">
//             <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 max-w-sm">
//               <div className="text-center">
//                 <div className={`w-20 h-20 mx-auto bg-gradient-to-r ${speakers.find(s => s.featured)?.color} rounded-full flex items-center justify-center text-3xl mb-4 shadow-lg`}>
//                   {speakers.find(s => s.featured)?.image}
//                 </div>
//                 <h3 className="font-bold text-gray-900 text-lg">{speakers.find(s => s.featured)?.name}</h3>
//                 <p className="text-gray-600 text-sm">{speakers.find(s => s.featured)?.role}</p>
//               </div>
//             </div>
//           </div>

//           {/* Speakers Grid */}
//           <div className="flex justify-center">
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl">
//               {speakers.filter(speaker => !speaker.featured).map((speaker, index) => (
//                 <div 
//                   key={speaker.name}
//                   className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
//                 >
//                   <div className="text-center space-y-3">
//                     <div className={`w-16 h-16 mx-auto bg-gradient-to-r ${speaker.color} rounded-full flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
//                       {speaker.image}
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-gray-900 text-sm group-hover:text-blue-600 transition-colors duration-300">
//                         {speaker.name}
//                       </h3>
//                       <p className="text-gray-600 text-xs">{speaker.role}</p>
//                       <p className="text-gray-500 text-xs">{speaker.company}</p>
//                     </div>
//                   </div>
                  
//                   {/* Hover effect */}
//                   <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-2xl transition-all duration-300"></div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Decorative Elements */}
//         <div className="absolute top-10 left-10 w-16 h-16 bg-yellow-200/30 rounded-full blur-xl"></div>
//         <div className="absolute bottom-10 right-10 w-20 h-20 bg-orange-200/30 rounded-full blur-xl"></div>
//       </div>

//       {/* CTA Section */}
//       <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
//         <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
//             Want to Become a Sponsor?
//           </h2>
//           <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
//             Join our community of innovative partners and help shape the future of technology education.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
//               Partner With Us
//             </button>
//             <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300">
//               Download Brochure
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SponsorsPage;

import React from 'react';
import { Star, Award, Users, Briefcase } from 'lucide-react';

const SponsorsPage = () => {
  const sponsors = [
    { name: 'Waverio', logo: '🌊', color: 'from-blue-400 to-purple-500' },
    { name: 'LogoIpsum', logo: '📊', color: 'from-gray-400 to-gray-600' },
    { name: 'Alterbox', logo: '📱', color: 'from-green-400 to-blue-500' },
    { name: 'Tinygone', logo: '🎯', color: 'from-pink-400 to-red-500' },
    { name: 'Presto', logo: '⚡', color: 'from-orange-400 to-yellow-500' },
    { name: 'Ridoria', logo: '🚀', color: 'from-indigo-400 to-blue-600' },
    { name: 'Carbonia', logo: '💎', color: 'from-gray-600 to-black' },
    { name: 'Tocanto', logo: '⚡', color: 'from-blue-500 to-indigo-600' }
  ];

  const speakers = [
    {
      name: 'Jenny Wilson',
      role: 'Co-Founder & CEO',
      company: 'TechVision Inc.',
      image: '👩‍💼',
      color: 'from-blue-100 to-indigo-100'
    },
    {
      name: 'Marcus Chen',
      role: 'Lead Developer',
      company: 'InnovateLabs',
      image: '👨‍💻',
      color: 'from-gray-100 to-blue-100'
    },
    {
      name: 'Sarah Martinez',
      role: 'Product Manager',
      company: 'FutureCore',
      image: '👩‍🎓',
      color: 'from-orange-100 to-yellow-100',
      featured: true
    },
    {
      name: 'David Kumar',
      role: 'Tech Architect',
      company: 'CloudSync',
      image: '👨‍🔬',
      color: 'from-purple-100 to-pink-100'
    },
    {
      name: 'Emma Thompson',
      role: 'Design Director',
      company: 'CreativeHub',
      image: '👩‍🎨',
      color: 'from-green-100 to-blue-100'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
              <Award className="w-4 h-4 mr-2" />
              Our Partners
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Our Sponsors
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're proud to partner with industry-leading companies who share our vision 
              of innovation and excellence in technology and education.
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-indigo-200/40 rounded-full blur-lg"></div>
      </div>

      {/* Sponsors Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {sponsors.map((sponsor, index) => (
            <div 
              key={sponsor.name}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-center space-y-4">
                <div className={`w-16 h-16 mx-auto bg-gradient-to-r ${sponsor.color} rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {sponsor.logo}
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {sponsor.name}
                </h3>
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-2xl transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
            <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Briefcase className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">25+</h3>
            <p className="text-gray-600">Corporate Partners</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
            <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Award className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">$50K+</h3>
            <p className="text-gray-600">Total Sponsorship</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
            <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">3</h3>
            <p className="text-gray-600">Years Partnership</p>
          </div>
        </div>
      </div>

      {/* Meet the Brain Section */}
      <div className="relative bg-white py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-50 to-orange-50 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Star className="w-8 h-8 text-yellow-500" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 italic">
                Meet the Brain
              </h2>
              <Star className="w-8 h-8 text-yellow-500" />
            </div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover the inspiring minds behind our events. Our speakers are industry leaders, creative innovators, and dynamic 
              professionals who bring a wealth of knowledge and experience to every session. Each one is carefully selected to deliver 
              insightful, engaging, and impactful presentations that will inspire and empower you. Get to know the experts who are shaping 
              the future of events and learn from their unique perspectives.
            </p>
          </div>

          {/* Speakers Layout - Matching Reference */}
          <div className="relative flex justify-center items-center">
            {/* Container for all speakers */}
            <div className="relative w-full max-w-5xl">
              
              {/* Featured Speaker - Large Center Circle */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="group relative">
                  <div className="w-48 h-48 bg-gradient-to-r from-orange-200 to-yellow-200 rounded-full flex items-center justify-center text-6xl shadow-2xl group-hover:scale-110 transition-transform duration-300 border-4 border-white">
                    {speakers.find(s => s.featured)?.image}
                  </div>
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-lg shadow-lg border border-gray-100">
                    <h3 className="font-bold text-gray-900 text-center whitespace-nowrap">{speakers.find(s => s.featured)?.name}</h3>
                    <p className="text-gray-600 text-sm text-center">{speakers.find(s => s.featured)?.role}</p>
                  </div>
                </div>
              </div>

              {/* Surrounding Speakers - Smaller Circles */}
              <div className="flex items-center justify-center h-96">
                <div className="relative w-full">
                  
                  {/* Left side speakers */}
                  <div className="absolute left-8 top-8">
                    <div className="group relative">
                      <div className={`w-24 h-24 bg-gradient-to-r ${speakers[0]?.color} rounded-full flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 border-2 border-white`}>
                        {speakers[0]?.image}
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-16 bottom-8">
                    <div className="group relative">
                      <div className={`w-20 h-20 bg-gradient-to-r ${speakers[1]?.color} rounded-full flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-transform duration-300 border-2 border-white`}>
                        {speakers[1]?.image}
                      </div>
                    </div>
                  </div>

                  {/* Right side speakers */}
                  <div className="absolute right-8 top-8">
                    <div className="group relative">
                      <div className={`w-24 h-24 bg-gradient-to-r ${speakers[3]?.color} rounded-full flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 border-2 border-white`}>
                        {speakers[3]?.image}
                      </div>
                    </div>
                  </div>

                  <div className="absolute right-16 bottom-8">
                    <div className="group relative">
                      <div className={`w-20 h-20 bg-gradient-to-r ${speakers[4]?.color} rounded-full flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-transform duration-300 border-2 border-white`}>
                        {speakers[4]?.image}
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-yellow-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 bg-orange-200/30 rounded-full blur-xl"></div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Want to Become a Sponsor?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our community of innovative partners and help shape the future of technology education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Partner With Us
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorsPage;
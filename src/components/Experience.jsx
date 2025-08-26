// import React from 'react';
// import { Users, Mic, Lightbulb, MapPin, Calendar, Star, ChevronRight , Award } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// const ExperiencePage = () => {
//   const navigate = useNavigate();
//   const zones = [
//     {
//       id: 1,
//       title: "The Marketplace",
//       subtitle: "Exhibition Stalls",
//       icon: <MapPin className="w-8 h-8 text-blue-600" />,
//       description: "The bustling heart of Startup Mela. A vibrant marketplace where hundreds of startups will showcase their products and services. From tech gadgets and sustainable goods to fashion and food innovations, the Marketplace is where you can see, touch, and experience the future. It's the ultimate platform for brands to engage directly with their target audience.",
//       features: [
//         "Interactive product demonstrations",
//         "Direct networking with startup founders",
//         "Business partnership opportunities",
//         "Investor meetups and pitching sessions"
//       ],
//       color: "bg-gradient-to-br from-blue-50 to-indigo-100",
//       accent: "border-blue-200"
//     },
//     {
//       id: 2,
//       title: "The Hub",
//       subtitle: "Networking & Pitching Lounge",
//       icon: <Users className="w-8 h-8 text-green-600" />,
//       description: "An exclusive, access-controlled zone designed for high-stakes networking and securing startup funding. The Hub is where founders connect with the capital and mentorship they need to scale their business ventures.",
//       features: [
//         "Investor Pitching Sessions: Curated, rapid-fire pitching competitions where startups can present their vision to a panel of investors",
//         "Roundtable Discussions: Intimate conversations on industry challenges and opportunities, led by seasoned experts",
//         "One-on-One Meetings: Pre-scheduled and impromptu meetings between founders, industrialists, and venture capitalists"
//       ],
//       color: "bg-gradient-to-br from-green-50 to-emerald-100",
//       accent: "border-green-200"
//     },
//     {
//       id: 3,
//       title: "The Spotlight",
//       subtitle: "Center Stage",
//       icon: <Mic className="w-8 h-8 text-purple-600" />,
//       description: "The energy and entertainment hub of the Mela. The Spotlight stage will feature a dynamic lineup of events designed to draw crowds and create unforgettable moments for this premier startup event.",
//       features: [
//         "D2C Fashion Runway: A high-energy fashion show where direct-to-consumer apparel and accessory brands can showcase their latest collections",
//         "Tech Launchpad: The official launch platform for new apps, software, and tech products, complete with live demos and media coverage",
//         "Influencer Conclave: A massive meetup where top influencers and content creators connect with brands and share their secrets to digital growth with the audience",
//         "Keynote Speeches & Panel Discussions: Inspiring talks from industry titans and thought-provoking discussions on the future of business"
//       ],
//       color: "bg-gradient-to-br from-purple-50 to-violet-100",
//       accent: "border-purple-200"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <div className="relative overflow-hidden bg-white">
//         <div className="absolute inset-0 opacity-10"></div>
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

//           <div className="text-center">
//             <div className="inline-flex mb-2 items-center px-4 py-2 bg-[#828385] text-white rounded-full text-sm font-semibold">
//               <Award className="w-4 h-4 mr-2" />
//               Our Experience
//             </div>
//           </div>

//           <div className="text-left">
//             <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 tracking-tight"
//               style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
//               The Experience
//             </h1>
//             <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4"
//               style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
//               Three Zones of Opportunity
//             </h2>
//             <div className="max-w-4xl">

//               <div className="relative left-[250px] bottom-[75px]">
//                 <p className="text-lg text-black leading-relaxed text-right">
//                   Startup Mela is structured into three distinct, high-energy zones, each offering a unique
//                 </p>
//                 <p className="text-lg text-black leading-relaxed text-right">
//                   experience for entrepreneurs, and business leaders to network, pitch, and grow.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>


//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Stats Section */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative bottom-20">
//           <div className="text-center">
//             <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
//             <div className="text-gray-600">Startup Participants</div>
//           </div>
//           <div className="text-center">
//             <div className="text-4xl font-bold text-green-600 mb-2">100+</div>
//             <div className="text-gray-600">Investors & VCs</div>
//           </div>
//           <div className="text-center">
//             <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
//             <div className="text-gray-600">Pitching Sessions</div>
//           </div>
//           <div className="text-center">
//             <div className="text-4xl font-bold text-indigo-600 mb-2">3</div>
//             <div className="text-gray-600">Days of Networking</div>
//           </div>
//         </div>

//         {/* Zones Section */}
//         <div className="space-y-12">
//           {zones.map((zone, index) => (
//             <div
//               key={zone.id}
//               className="rounded-3xl p-8 shadow-lg border-2 border-gray-300 bg-[#E8E8E8] hover:shadow-xl hover:scale-[1.02]"
//             >
//               <div className="flex flex-col lg:flex-row gap-8">

//                 {/* Zone Header */}
//                 <div className="lg:w-1/3">
//                   <div className="flex items-center gap-4 mb-6">
//                     {zone.icon}
//                     <div>
//                       <h3 className="text-3xl font-bold text-black"
//                         style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
//                         Zone {zone.id}: {zone.title}
//                       </h3>
//                       <p className="text-lg text-gray-800 font-medium"
//                         style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
//                         ({zone.subtitle})
//                       </p>
//                     </div>
//                   </div>

//                   {/* Zone number badge */}
//                   <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md mb-6">
//                     <span className="text-2xl font-bold text-black">{zone.id}</span>
//                   </div>
//                 </div>

//                 {/* Zone Content */}
//                 <div className="lg:w-2/3">
//                   <p className="text-black text-lg leading-relaxed mb-8">
//                     {zone.description}
//                   </p>

//                   {/* Features */}
//                   <div className="space-y-4">
//                     {zone.features.map((feature, idx) => (
//                       <div
//                         key={idx}
//                         className="flex items-start gap-3 bg-[#E8E8E8] bg-opacity-70 p-4 rounded-xl"
//                       >
//                         <ChevronRight className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
//                         <div>
//                           {feature.includes(':') ? (
//                             <div>
//                               <span className="font-semibold text-black">
//                                 {feature.split(':')[0]}:
//                               </span>
//                               <span className="text-gray-700 ml-1">
//                                 {feature.split(':')[1]}
//                               </span>
//                             </div>
//                           ) : (
//                             <span className="text-black">{feature}</span>
//                           )}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-20 mb-20">
//           <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
//             Why Startup Mela is the Premier Business Networking Event
//           </h3>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
//             <div className="text-center p-6 hover:bg-gray-300 bg-[#E8E8E8]">
//               <Lightbulb className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
//               <h4 className="text-xl font-semibold text-gray-800 mb-3">Innovation Showcase</h4>
//               <p className="text-gray-600">Connect with cutting-edge startups and experience the future of business firsthand</p>
//             </div>
//             <div className="text-center p-6 hover:bg-gray-300 bg-[#E8E8E8] ">
//               <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
//               <h4 className="text-xl font-semibold text-gray-800 mb-3">Elite Networking</h4>
//               <p className="text-gray-600">Build valuable connections with investors, mentors, and fellow entrepreneurs</p>
//             </div>
//             <div className="text-center p-6 hover:bg-gray-300 bg-[#E8E8E8] ">
//               <Star className="w-12 h-12 text-purple-500 mx-auto mb-4" />
//               <h4 className="text-xl font-semibold text-gray-800 mb-3">Pitching Excellence</h4>
//               <p className="text-gray-600">Perfect your pitch and secure funding from top-tier investors and VCs</p>
//             </div>
//           </div>
//           {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
//             <div className="text-center p-6 bg-[#E8E8E8] rounded-xl shadow-lg">
//               <Lightbulb className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
//               <h4 className="text-xl font-semibold text-gray-800 mb-3">Innovation Showcase</h4>
//               <p className="text-gray-600">Connect with cutting-edge startups and experience the future of business firsthand</p>
//             </div>
//             <div className="text-center p-6 bg-[#E8E8E8] rounded-xl shadow-lg">
//               <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
//               <h4 className="text-xl font-semibold text-gray-800 mb-3">Elite Networking</h4>
//               <p className="text-gray-600">Build valuable connections with investors, mentors, and fellow entrepreneurs</p>
//             </div>
//             <div className="text-center p-6 bg-[#E8E8E8]  rounded-xl shadow-lg">
//               <Star className="w-12 h-12 text-purple-500 mx-auto mb-4" />
//               <h4 className="text-xl font-semibold text-gray-800 mb-3">Pitching Excellence</h4>
//               <p className="text-gray-600">Perfect your pitch and secure funding from top-tier investors and VCs</p>
//             </div>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExperiencePage;

import React from 'react';
import { Users, Mic, Lightbulb, MapPin, Calendar, Star, ChevronRight, Award } from 'lucide-react';

const ExperiencePage = () => {
  const navigate = (path) => {
    console.log(`Navigating to: ${path}`);
  };

  const zones = [
    {
      id: 1,
      title: "The Marketplace",
      subtitle: "Exhibition Stalls",
      icon: <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />,
      description: "The bustling heart of Startup Mela. A vibrant marketplace where hundreds of startups will showcase their products and services. From tech gadgets and sustainable goods to fashion and food innovations, the Marketplace is where you can see, touch, and experience the future. It's the ultimate platform for brands to engage directly with their target audience.",
      features: [
        "Interactive product demonstrations",
        "Direct networking with startup founders",
        "Business partnership opportunities",
        "Investor meetups and pitching sessions"
      ],
      color: "bg-gradient-to-br from-blue-50 to-indigo-100",
      accent: "border-blue-200"
    },
    {
      id: 2,
      title: "The Hub",
      subtitle: "Networking & Pitching Lounge",
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />,
      description: "An exclusive, access-controlled zone designed for high-stakes networking and securing startup funding. The Hub is where founders connect with the capital and mentorship they need to scale their business ventures.",
      features: [
        "Investor Pitching Sessions: Curated, rapid-fire pitching competitions where startups can present their vision to a panel of investors",
        "Roundtable Discussions: Intimate conversations on industry challenges and opportunities, led by seasoned experts",
        "One-on-One Meetings: Pre-scheduled and impromptu meetings between founders, industrialists, and venture capitalists"
      ],
      color: "bg-gradient-to-br from-green-50 to-emerald-100",
      accent: "border-green-200"
    },
    {
      id: 3,
      title: "The Spotlight",
      subtitle: "Center Stage",
      icon: <Mic className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />,
      description: "The energy and entertainment hub of the Mela. The Spotlight stage will feature a dynamic lineup of events designed to draw crowds and create unforgettable moments for this premier startup event.",
      features: [
        "D2C Fashion Runway: A high-energy fashion show where direct-to-consumer apparel and accessory brands can showcase their latest collections",
        "Tech Launchpad: The official launch platform for new apps, software, and tech products, complete with live demos and media coverage",
        "Influencer Conclave: A massive meetup where top influencers and content creators connect with brands and share their secrets to digital growth with the audience",
        "Keynote Speeches & Panel Discussions: Inspiring talks from industry titans and thought-provoking discussions on the future of business"
      ],
      color: "bg-gradient-to-br from-purple-50 to-violet-100",
      accent: "border-purple-200"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24">

          {/* Badge - Centered on mobile */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-[#828385] text-white rounded-full text-xs sm:text-sm font-semibold">
              <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Our Experience
            </div>
          </div>

          {/* Mobile: Centered layout without description */}
          <div className="block lg:hidden text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6 tracking-tight leading-tight"
              style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
              The Experience
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-black mb-6 sm:mb-8"
              style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
              Three Zones of Opportunity
            </h2>
          </div>

          {/* Desktop: Original layout with proper positioning */}
          <div className="hidden lg:block">
            <div className="text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6 tracking-tight leading-tight"
                style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
                The Experience
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-black mb-6 sm:mb-8"
                style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
                Three Zones of Opportunity
              </h2>
            </div>
            
            {/* Desktop description - only shown on large screens */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 max-w-2xl mt-[50px]">
              <p className="text-base sm:text-30px text-black leading-relaxed text-right">
                Startup Mela is structured into 3 distinct, high-energy zones, each offering a unique
              </p>
              <p className="text-base sm:text-30px text-black leading-relaxed text-right">
                experience for entrepreneurs, and business leaders to network, pitch, and grow.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Stats Section - Mobile Optimized */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:relative lg:bottom-20">
          <div className="text-center p-3 sm:p-4 bg-gray-50 rounded-xl lg:bg-transparent lg:rounded-none">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">500+</div>
            <div className="text-xs sm:text-sm lg:text-base text-gray-600 leading-tight">Startup Participants</div>
          </div>
          <div className="text-center p-3 sm:p-4 bg-gray-50 rounded-xl lg:bg-transparent lg:rounded-none">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600 mb-1 sm:mb-2">100+</div>
            <div className="text-xs sm:text-sm lg:text-base text-gray-600 leading-tight">Investors & VCs</div>
          </div>
          <div className="text-center p-3 sm:p-4 bg-gray-50 rounded-xl lg:bg-transparent lg:rounded-none">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-600 mb-1 sm:mb-2">50+</div>
            <div className="text-xs sm:text-sm lg:text-base text-gray-600 leading-tight">Pitching Sessions</div>
          </div>
          <div className="text-center p-3 sm:p-4 bg-gray-50 rounded-xl lg:bg-transparent lg:rounded-none">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-600 mb-1 sm:mb-2">3</div>
            <div className="text-xs sm:text-sm lg:text-base text-gray-600 leading-tight">Days of Networking</div>
          </div>
        </div>

        {/* Zones Section - Mobile Optimized */}
        <div className="space-y-6 sm:space-y-8 lg:space-y-12">
          {zones.map((zone, index) => (
            <div
              key={zone.id}
              className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg border-2 border-gray-300 bg-[#E8E8E8] hover:shadow-xl transition-all duration-300 hover:scale-[1.01] sm:hover:scale-[1.02]"
            >
              <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">

                {/* Zone Header - Mobile Stacked, Desktop Side by Side */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:w-full">
                  <div className="flex items-start sm:items-center gap-3 sm:gap-4 flex-1">
                    <div className="flex-shrink-0 mt-1 sm:mt-0">
                      {zone.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl lg:text-3xl font-bold text-black leading-tight"
                        style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
                        Zone {zone.id}: {zone.title}
                      </h3>
                      <p className="text-sm sm:text-base lg:text-lg text-gray-800 font-medium"
                        style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
                        ({zone.subtitle})
                      </p>
                    </div>
                  </div>

                  {/* Zone number badge - Repositioned for mobile */}
                  <div className="flex justify-center sm:justify-end">
                    <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white rounded-full shadow-md">
                      <span className="text-lg sm:text-xl lg:text-2xl font-bold text-black">{zone.id}</span>
                    </div>
                  </div>
                </div>

                {/* Zone Content */}
                <div className="space-y-4 sm:space-y-6">
                  <p className="text-black text-sm sm:text-base lg:text-lg leading-relaxed">
                    {zone.description}
                  </p>

                  {/* Features - Mobile Optimized */}
                  <div className="space-y-3 sm:space-y-4">
                    {zone.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 sm:gap-3 bg-white bg-opacity-50 p-3 sm:p-4 rounded-lg sm:rounded-xl"
                      >
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          {feature.includes(':') ? (
                            <div>
                              <span className="font-semibold text-black text-sm sm:text-base">
                                {feature.split(':')[0]}:
                              </span>
                              <span className="text-gray-700 ml-1 text-sm sm:text-base">
                                {feature.split(':')[1]}
                              </span>
                            </div>
                          ) : (
                            <span className="text-black text-sm sm:text-base">{feature}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section - Mobile Optimized */}
        <div className="mt-12 sm:mt-16 lg:mt-20 mb-12 sm:mb-16 lg:mb-20">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-10 lg:mb-12 px-4">
            Why Startup Mela is the Premier Business Networking Event
          </h3>
          
          {/* Grid - Mobile Single Column, Tablet 2 Columns, Desktop 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
            <div className="text-center p-4 sm:p-6 hover:bg-gray-300 bg-[#E8E8E8] rounded-lg sm:rounded-xl transition-colors duration-300">
              <Lightbulb className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-yellow-500 mx-auto mb-3 sm:mb-4" />
              <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">Innovation Showcase</h4>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Connect with cutting-edge startups and experience the future of business firsthand</p>
            </div>
            <div className="text-center p-4 sm:p-6 hover:bg-gray-300 bg-[#E8E8E8] rounded-lg sm:rounded-xl transition-colors duration-300">
              <Users className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-blue-500 mx-auto mb-3 sm:mb-4" />
              <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">Elite Networking</h4>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Build valuable connections with investors, mentors, and fellow entrepreneurs</p>
            </div>
            <div className="text-center p-4 sm:p-6 hover:bg-gray-300 bg-[#E8E8E8] rounded-lg sm:rounded-xl transition-colors duration-300 md:col-span-2 lg:col-span-1">
              <Star className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-purple-500 mx-auto mb-3 sm:mb-4" />
              <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">Pitching Excellence</h4>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Perfect your pitch and secure funding from top-tier investors and VCs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
// import React, { useState } from 'react';
// import { Check, X } from 'lucide-react';

// const TicketsRegistrationPage = () => {
//   const [isYearly, setIsYearly] = useState(true);

//   const plans = [
//     {
//       name: 'General Entry Pass',
//       description: 'Perfect for students, aspiring entrepreneurs, and the general public who want to get inspired.',
//       price: '₹20',
//       period: '/Pass',
//       buttonText: 'Register Now & Secure Your Spot!',
//       buttonClass: 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50',
//       features: [
//         { name: 'Full access to the Marketplace (Exhibition Stalls) for all three days', included: true },
//         { name: 'Access to all sessions and events on the Spotlight (Center Stage)', included: true },
//         { name: 'An incredible opportunity to witness innovation firsthand and get inspired', included: true },
//         { name: 'Dedicated stall space in the Marketplace', included: false },
//         { name: 'Access to Hub (Networking & Pitching Lounge)', included: false },
//         { name: 'Guaranteed pitching slot', included: false },
//         { name: 'Access to exclusive investor and speaker list', included: false },
//         { name: 'Priority access to all workshops and sessions', included: false }
//       ]
//     },
//     {
//       name: 'Startup Stall Pass',
//       description: 'Ideal for early-stage startups looking for maximum visibility and customer interaction.',
//       price: '₹20,000',
//       period: '/Pass',
//       buttonText: 'Register Now & Secure Your Spot!',
//       buttonClass: 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50',
//       features: [
//         { name: 'Everything in the General Entry Pass', included: true },
//         { name: 'A dedicated stall space in the Marketplace for three days to showcase your product/service', included: true },
//         { name: 'Two team member passes with General Entry access', included: true },
//         { name: 'Listing in the official event directory', included: true },
//         { name: 'Access to Hub (Networking & Pitching Lounge)', included: false },
//         { name: 'Guaranteed pitching slot', included: false },
//         { name: 'Access to exclusive investor and speaker list', included: false },
//         { name: 'Priority access to all workshops and sessions', included: false }
//       ]
//     },
//     {
//       name: 'Lounge + Pitching Access Pass',
//       description: 'Perfect for founders focused on networking and fundraising who may not need a physical stall.',
//       price: '₹25,000',
//       period: '/Pass',
//       buttonText: 'Register Now & Secure Your Spot!',
//       buttonClass: 'bg-blue-600 text-white hover:bg-blue-700',
//       isPopular: true,
//       features: [
//         { name: 'Everything in the General Entry Pass', included: true },
//         { name: 'Access to the exclusive Hub (Networking & Pitching Lounge)', included: true },
//         { name: 'A guaranteed slot in one of our curated Investor Pitching Sessions', included: true },
//         { name: 'Access to the investor and speaker list', included: true },
//         { name: 'Includes General Entry access', included: true },
//         { name: 'Dedicated stall space in the Marketplace', included: false },
//         { name: 'Priority access to all workshops and sessions', included: false },
//         { name: 'Premium stall location', included: false }
//       ]
//     },
//     {
//       name: 'Stall + Lounge Pass',
//       description: 'Perfect for growth-stage startups wanting both customer visibility and investor access.',
//       price: '₹35,000',
//       period: '/Pass',
//       buttonText: 'Register Now & Secure Your Spot!',
//       buttonClass: 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50',
//       features: [
//         { name: 'Everything in the Startup Stall Pass', included: true },
//         { name: 'Everything in the Lounge + Pitching Access Pass', included: true },
//         { name: 'One team member pass upgraded for full access to the Hub (Networking & Pitching Lounge)', included: true },
//         { name: 'Opportunity to apply for pitching slots (not guaranteed)', included: true },
//         { name: 'Access to exclusive investor and speaker list', included: true },
//         { name: 'Priority access to all workshops and sessions', included: false },
//         { name: 'Premium stall location', included: false },
//         { name: 'Dedicated feature on the Spotlight Stage', included: false }
//       ]
//     },
//     {
//       name: 'All-Access VIP Pass',
//       description: 'The ultimate package for startups and businesses that want it all. Maximum impact and opportunities.',
//       price: '₹50,000',
//       period: '/Pass',
//       buttonText: 'Register Now & Secure Your Spot!',
//       buttonClass: 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50',
//       features: [
//         { name: 'Everything in the Startup Stall Pass', included: true },
//         { name: 'Everything in the Stall + Lounge Pass', included: true },
//         { name: 'A guaranteed pitching slot in front of investors', included: true },
//         { name: 'A dedicated feature on the Spotlight Stage (10-minute product demo or launch announcement)', included: true },
//         { name: 'Premium stall location', included: true },
//         { name: 'Additional networking opportunities with curated access', included: true },
//         { name: 'Priority access to all workshops and sessions', included: true },
//         { name: 'Includes General Entry access', included: true }
//       ]
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16 px-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-4">
//             <span className="text-yellow-500 text-3xl">🎫</span>
//             Tickets & Registration
//             <span className="text-yellow-500 text-3xl ml-2">🎫</span>
//           </h1>
//           <p className="text-gray-600 text-lg mb-8">
//             Choose Your Pass. Unlock Your Opportunity.
//           </p>
//           <p className="text-gray-600 text-base mb-8">
//             We offer a range of ticket options designed to provide the ideal experience for every attendee, 
//             from curious visitors to ambitious founders. Find the perfect pass for your goals.
//           </p>

//           {/* Toggle Switch */}
//           <div className="flex items-center justify-center gap-4 mb-8">
//             <span className={`text-sm ${!isYearly ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
//               Individual Pass
//             </span>
//             <div className="relative">
//               <button
//                 onClick={() => setIsYearly(!isYearly)}
//                 className={`w-14 h-7 rounded-full transition-colors duration-200 ${
//                   isYearly ? 'bg-blue-600' : 'bg-gray-300'
//                 }`}
//               >
//                 <div
//                   className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-200 ${
//                     isYearly ? 'translate-x-8' : 'translate-x-1'
//                   } mt-1`}
//                 />
//               </button>
//             </div>
//             <span className={`text-sm ${isYearly ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
//               Team Package
//             </span>
//             {isYearly && (
//               <div className="relative">
//                 <span className="text-blue-600 text-sm font-medium bg-blue-50 px-2 py-1 rounded-full">
//                   Save 15%
//                 </span>
//                 <div className="absolute -top-2 -left-8">
//                   <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
//                     <path d="M2 10C8 4 16 4 22 10" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
//                   </svg>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Pricing Cards - Now in a responsive grid that accommodates 5 cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-full mx-auto">
//           {plans.map((plan, index) => (
//             <div
//               key={index}
//               className={`relative rounded-2xl p-6 transition-all duration-300 ${
//                 plan.isPopular
//                   ? 'bg-blue-600 text-white transform scale-105 shadow-2xl'
//                   : 'bg-white text-gray-900 shadow-lg hover:shadow-xl'
//               } ${plans.length === 5 ? 'xl:max-w-sm' : ''}`}
//             >
//               {/* Plan Name and Description */}
//               <div className="mb-6">
//                 <h3 className={`text-xl font-bold mb-3 ${plan.isPopular ? 'text-white' : 'text-gray-900'}`}>
//                   {plan.name}
//                 </h3>
//                 <p className={`text-xs leading-relaxed ${plan.isPopular ? 'text-blue-100' : 'text-gray-600'}`}>
//                   {plan.description}
//                 </p>
//               </div>

//               {/* Price */}
//               <div className="mb-6">
//                 <div className="flex items-baseline">
//                   <span className={`text-3xl font-bold ${plan.isPopular ? 'text-white' : 'text-gray-900'}`}>
//                     {plan.price}
//                   </span>
//                   <span className={`text-xs ml-1 ${plan.isPopular ? 'text-blue-100' : 'text-gray-500'}`}>
//                     {plan.period}
//                   </span>
//                 </div>
//               </div>

//               {/* CTA Button */}
//               <button className={`w-full py-2 px-4 rounded-lg font-semibold transition-all duration-200 mb-6 text-sm ${
//                 plan.isPopular
//                   ? 'bg-white text-blue-600 hover:bg-gray-50'
//                   : plan.buttonClass
//               }`}>
//                 {plan.buttonText}
//               </button>

//               {/* Features List */}
//               <div className="space-y-3">
//                 {plan.features.map((feature, featureIndex) => (
//                   <div key={featureIndex} className="flex items-start gap-2">
//                     <div className={`mt-0.5 ${feature.included ? '' : 'opacity-50'}`}>
//                       {feature.included ? (
//                         <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
//                           plan.isPopular ? 'bg-blue-500' : 'bg-green-100'
//                         }`}>
//                           <Check className={`w-2.5 h-2.5 ${plan.isPopular ? 'text-white' : 'text-green-600'}`} />
//                         </div>
//                       ) : (
//                         <div className="w-4 h-4 rounded-full bg-gray-200 flex items-center justify-center">
//                           <X className="w-2.5 h-2.5 text-gray-400" />
//                         </div>
//                       )}
//                     </div>
//                     <span className={`text-xs ${
//                       plan.isPopular 
//                         ? feature.included ? 'text-white' : 'text-blue-200'
//                         : feature.included ? 'text-gray-700' : 'text-gray-400'
//                     }`}>
//                       {feature.name}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Additional Information */}
//         <div className="text-center mt-16">
//           <p className="text-gray-600 text-sm mb-4">
//             <strong>Note:</strong> All passes include access to the general event areas and networking opportunities.
//           </p>
//           <p className="text-blue-600 text-sm font-medium">
//             Early bird discounts available! Limited time offer.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TicketsRegistrationPage;

// import React, { useState } from 'react';
// import { Check, X } from 'lucide-react';

// const TicketsRegistrationPage = () => {
//   const [isYearly, setIsYearly] = useState(true);

//   const plans = [
//     {
//       name: 'General Entry Pass',
//       description: 'Perfect for students, aspiring entrepreneurs, and the general public who want to get inspired.',
//       price: '₹20',
//       period: '/Pass',
//       buttonText: 'Register Now',
//       buttonClass: 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50',
//       features: [
//         { name: 'Full access to the Marketplace (Exhibition Stalls)', included: true },
//         { name: 'Access to all sessions and events on the Spotlight', included: true },
//         { name: 'Witness innovation firsthand and get inspired', included: true },
//         { name: 'Dedicated stall space in the Marketplace', included: false },
//         { name: 'Access to Hub (Networking & Pitching Lounge)', included: false },
//         { name: 'Guaranteed pitching slot', included: false }
//       ]
//     },
//     {
//       name: 'Startup Stall Pass',
//       description: 'Ideal for early-stage startups looking for maximum visibility and customer interaction.',
//       price: '₹20,000',
//       period: '/Pass',
//       buttonText: 'Register Now',
//       buttonClass: 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50',
//       features: [
//         { name: 'Everything in General Entry Pass', included: true },
//         { name: 'Dedicated stall space for three days', included: true },
//         { name: 'Two team member passes included', included: true },
//         { name: 'Listing in official event directory', included: true },
//         { name: 'Access to Hub (Networking & Pitching Lounge)', included: false },
//         { name: 'Guaranteed pitching slot', included: false }
//       ]
//     },
//     {
//       name: 'Lounge + Pitching Access',
//       description: 'Perfect for founders focused on networking and fundraising who may not need a physical stall.',
//       price: '₹25,000',
//       period: '/Pass',
//       buttonText: 'Register Now',
//       buttonClass: 'bg-blue-600 text-white hover:bg-blue-700',
//       isPopular: true,
//       features: [
//         { name: 'Everything in General Entry Pass', included: true },
//         { name: 'Access to exclusive Hub (Networking & Pitching)', included: true },
//         { name: 'Guaranteed slot in Investor Pitching Sessions', included: true },
//         { name: 'Access to investor and speaker list', included: true },
//         { name: 'Dedicated stall space in the Marketplace', included: false },
//         { name: 'Premium stall location', included: false }
//       ]
//     },
//     {
//       name: 'Stall + Lounge Pass',
//       description: 'Perfect for growth-stage startups wanting both customer visibility and investor access.',
//       price: '₹35,000',
//       period: '/Pass',
//       buttonText: 'Register Now',
//       buttonClass: 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50',
//       features: [
//         { name: 'Everything in Startup Stall Pass', included: true },
//         { name: 'Everything in Lounge + Pitching Access', included: true },
//         { name: 'Full Hub access for one team member', included: true },
//         { name: 'Priority for pitching slots', included: true },
//         { name: 'Premium stall location', included: false },
//         { name: 'Dedicated Spotlight Stage feature', included: false }
//       ]
//     },
//     {
//       name: 'All-Access VIP Pass',
//       description: 'The ultimate package for startups and businesses that want it all. Maximum impact and opportunities.',
//       price: '₹50,000',
//       period: '/Pass',
//       buttonText: 'Register Now',
//       buttonClass: 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50',
//       features: [
//         { name: 'Everything in Stall + Lounge Pass', included: true },
//         { name: 'Guaranteed pitching slot in front of investors', included: true },
//         { name: 'Dedicated 10-minute Spotlight Stage feature', included: true },
//         { name: 'Premium stall location', included: true },
//         { name: 'Priority access to all workshops', included: true },
//         { name: 'VIP networking opportunities', included: true }
//       ]
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16 px-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="text-center mb-20">
//           <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 flex items-center justify-center gap-4">
//             <span className="text-yellow-500 text-4xl">🎫</span>
//             Tickets & Registration
//             <span className="text-yellow-500 text-4xl ml-2">🎫</span>
//           </h1>
//           <p className="text-gray-600 text-xl mb-6">
//             Choose Your Pass. Unlock Your Opportunity.
//           </p>
//           <p className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
//             We offer a range of ticket options designed to provide the ideal experience for every attendee, 
//             from curious visitors to ambitious founders. Find the perfect pass for your goals.
//           </p>

//           {/* Toggle Switch */}
//           <div className="flex items-center justify-center gap-4 mb-8">
//             <span className={`text-base ${!isYearly ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
//               Individual Pass
//             </span>
//             <div className="relative">
//               <button
//                 onClick={() => setIsYearly(!isYearly)}
//                 className={`w-16 h-8 rounded-full transition-colors duration-200 ${
//                   isYearly ? 'bg-blue-600' : 'bg-gray-300'
//                 }`}
//               >
//                 <div
//                   className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-200 ${
//                     isYearly ? 'translate-x-9' : 'translate-x-1'
//                   } mt-1`}
//                 />
//               </button>
//             </div>
//             <span className={`text-base ${isYearly ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
//               Team Package
//             </span>
//             {isYearly && (
//               <div className="relative">
//                 <span className="text-blue-600 text-base font-medium bg-blue-50 px-3 py-2 rounded-full">
//                   Save 15%
//                 </span>
//                 <div className="absolute -top-2 -left-8">
//                   <svg width="28" height="14" viewBox="0 0 28 14" fill="none">
//                     <path d="M2 12C8 4 18 4 26 12" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
//                   </svg>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Pricing Cards - Staggered Grid Layout */}
//         <div className="space-y-12">
//           {/* First Row - 2 Cards */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
//             {plans.slice(0, 2).map((plan, index) => (
//               <div
//                 key={index}
//                 className="relative rounded-3xl p-10 transition-all duration-300 bg-white text-gray-900 shadow-xl hover:shadow-2xl border border-gray-100"
//               >
//                 {/* Plan Name and Description */}
//                 <div className="mb-8">
//                   <h3 className="text-3xl font-bold mb-4 text-gray-900">
//                     {plan.name}
//                   </h3>
//                   <p className="text-base leading-relaxed text-gray-600">
//                     {plan.description}
//                   </p>
//                 </div>

//                 {/* Price */}
//                 <div className="mb-10">
//                   <div className="flex items-baseline">
//                     <span className="text-6xl font-bold text-gray-900">
//                       {plan.price}
//                     </span>
//                     <span className="text-lg ml-2 text-gray-500">
//                       {plan.period}
//                     </span>
//                   </div>
//                 </div>

//                 {/* CTA Button */}
//                 <button className={`w-full py-4 px-8 rounded-xl font-bold transition-all duration-200 mb-10 text-lg ${plan.buttonClass}`}>
//                   {plan.buttonText}
//                 </button>

//                 {/* Features List */}
//                 <div className="space-y-5">
//                   {plan.features.map((feature, featureIndex) => (
//                     <div key={featureIndex} className="flex items-start gap-4">
//                       <div className={`mt-1 ${feature.included ? '' : 'opacity-50'}`}>
//                         {feature.included ? (
//                           <div className="w-6 h-6 rounded-full flex items-center justify-center bg-green-100">
//                             <Check className="w-4 h-4 text-green-600" />
//                           </div>
//                         ) : (
//                           <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
//                             <X className="w-4 h-4 text-gray-400" />
//                           </div>
//                         )}
//                       </div>
//                       <span className={`text-base ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
//                         {feature.name}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Second Row - Popular Card (Centered) */}
//           <div className="flex justify-center">
//             <div className="relative rounded-3xl p-10 transition-all duration-300 bg-blue-600 text-white transform scale-105 shadow-2xl max-w-lg w-full">
//               {/* Popular Badge */}
//               <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                 <span className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-full text-sm font-bold">
//                   MOST POPULAR
//                 </span>
//               </div>

//               {/* Plan Content */}
//               <div className="mb-8">
//                 <h3 className="text-3xl font-bold mb-4 text-white">
//                   {plans[2].name}
//                 </h3>
//                 <p className="text-base leading-relaxed text-blue-100">
//                   {plans[2].description}
//                 </p>
//               </div>

//               <div className="mb-10">
//                 <div className="flex items-baseline">
//                   <span className="text-6xl font-bold text-white">
//                     {plans[2].price}
//                   </span>
//                   <span className="text-lg ml-2 text-blue-100">
//                     {plans[2].period}
//                   </span>
//                 </div>
//               </div>

//               <button className="w-full py-4 px-8 rounded-xl font-bold transition-all duration-200 mb-10 text-lg bg-white text-blue-600 hover:bg-gray-50">
//                 {plans[2].buttonText}
//               </button>

//               <div className="space-y-5">
//                 {plans[2].features.map((feature, featureIndex) => (
//                   <div key={featureIndex} className="flex items-start gap-4">
//                     <div className={`mt-1 ${feature.included ? '' : 'opacity-50'}`}>
//                       {feature.included ? (
//                         <div className="w-6 h-6 rounded-full flex items-center justify-center bg-blue-500">
//                           <Check className="w-4 h-4 text-white" />
//                         </div>
//                       ) : (
//                         <div className="w-6 h-6 rounded-full bg-blue-400 flex items-center justify-center">
//                           <X className="w-4 h-4 text-blue-200" />
//                         </div>
//                       )}
//                     </div>
//                     <span className={`text-base ${feature.included ? 'text-white' : 'text-blue-200'}`}>
//                       {feature.name}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Third Row - Last 2 Cards */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
//             {plans.slice(3, 5).map((plan, index) => (
//               <div
//                 key={index + 3}
//                 className="relative rounded-3xl p-10 transition-all duration-300 bg-white text-gray-900 shadow-xl hover:shadow-2xl border border-gray-100"
//               >
//                 <div className="mb-8">
//                   <h3 className="text-3xl font-bold mb-4 text-gray-900">
//                     {plan.name}
//                   </h3>
//                   <p className="text-base leading-relaxed text-gray-600">
//                     {plan.description}
//                   </p>
//                 </div>

//                 <div className="mb-10">
//                   <div className="flex items-baseline">
//                     <span className="text-6xl font-bold text-gray-900">
//                       {plan.price}
//                     </span>
//                     <span className="text-lg ml-2 text-gray-500">
//                       {plan.period}
//                     </span>
//                   </div>
//                 </div>

//                 <button className={`w-full py-4 px-8 rounded-xl font-bold transition-all duration-200 mb-10 text-lg ${plan.buttonClass}`}>
//                   {plan.buttonText}
//                 </button>

//                 <div className="space-y-5">
//                   {plan.features.map((feature, featureIndex) => (
//                     <div key={featureIndex} className="flex items-start gap-4">
//                       <div className={`mt-1 ${feature.included ? '' : 'opacity-50'}`}>
//                         {feature.included ? (
//                           <div className="w-6 h-6 rounded-full flex items-center justify-center bg-green-100">
//                             <Check className="w-4 h-4 text-green-600" />
//                           </div>
//                         ) : (
//                           <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
//                             <X className="w-4 h-4 text-gray-400" />
//                           </div>
//                         )}
//                       </div>
//                       <span className={`text-base ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
//                         {feature.name}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Additional Information */}
//         <div className="text-center mt-20">
//           <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
//             <p className="text-gray-700 text-lg mb-4">
//               <strong>Note:</strong> All passes include access to the general event areas and networking opportunities.
//             </p>
//             <p className="text-blue-600 text-lg font-semibold">
//               🎉 Early bird discounts available! Limited time offer.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TicketsRegistrationPage;

import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

const TicketsRegistrationPage = () => {
  const [isYearly, setIsYearly] = useState(true);

  const plans = [
    {
      name: 'General Entry Pass',
      description: 'Perfect for students, aspiring entrepreneurs, and business enthusiasts who want to experience the ultimate startup networking event firsthand.',
      price: '₹20',
      period: '/Pass',
      buttonText: 'Join Startup Network',
      buttonClass: 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50',
      features: [
        { name: 'Full access to startup marketplace and business exhibition', included: true },
        { name: 'Access to all networking sessions and investor talks', included: true },
        { name: 'Witness live pitching competitions and startup demos', included: true },
        { name: 'Network with fellow entrepreneurs and business minds', included: true },
        { name: 'Dedicated business stall space in startup marketplace', included: false },
        { name: 'Exclusive investor networking lounge access', included: false }
      ]
    },
    {
      name: 'Startup Stall Pass',
      description: 'Ideal for early-stage startups and business ventures seeking maximum visibility in our premier networking and pitching event.',
      price: '₹20,000',
      period: '/Pass',
      buttonText: 'Showcase Your Startup',
      buttonClass: 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700',
      isHighlighted: true,
      features: [
        { name: 'Everything in General Entry Pass networking benefits', included: true },
        { name: 'Premium startup stall space for business showcasing', included: true },
        { name: 'Two team member passes for startup networking', included: true },
        { name: 'Official startup directory listing for investor visibility', included: true },
        { name: 'Access to business networking sessions with investors', included: true },
        { name: 'Exclusive investor networking lounge access', included: false }
      ]
    },
    {
      name: 'Investor Pitching Access',
      description: 'Perfect for growth-stage startups focused on investor networking and business pitching opportunities at this exclusive startup event.',
      price: '₹25,000',
      period: '/Pass',
      buttonText: 'Start Pitching to Investors',
      buttonClass: 'bg-blue-600 text-white hover:bg-blue-700',
      isPopular: true,
      features: [
        { name: 'Complete startup networking event access', included: true },
        { name: 'Exclusive investor networking lounge membership', included: true },
        { name: 'Guaranteed startup pitching slot with top investors', included: true },
        { name: 'Direct access to investor network and business contacts', included: true },
        { name: 'Priority networking sessions with venture capitalists', included: true },
        { name: 'Startup mentoring from successful business leaders', included: true }
      ]
    },
    {
      name: 'Business + Investor Pass',
      description: 'Comprehensive startup event package combining business exhibition with exclusive investor networking and pitching opportunities.',
      price: '₹35,000',
      period: '/Pass',
      buttonText: 'Expand Business Network',
      buttonClass: 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50',
      features: [
        { name: 'Premium startup stall plus investor networking benefits', included: true },
        { name: 'Complete investor pitching access and business mentoring', included: true },
        { name: 'Enhanced networking opportunities with startup ecosystem', included: true },
        { name: 'Priority investor meetings and business partnerships', included: true },
        { name: 'Exclusive startup founder networking sessions', included: true },
        { name: 'VIP startup event networking privileges', included: false }
      ]
    },
    {
      name: 'All-Access VIP Networking',
      description: 'Ultimate startup networking package with maximum investor access, premium pitching opportunities, and exclusive business connections.',
      price: '₹50,000',
      period: '/Pass',
      buttonText: 'Join VIP Investor Network',
      buttonClass: 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50',
      features: [
        { name: 'Complete startup event access with VIP networking status', included: true },
        { name: 'Guaranteed investor pitching slots with top venture capitalists', included: true },
        { name: 'Premium startup showcase on main business stage', included: true },
        { name: 'Exclusive investor networking dinners and business meetups', included: true },
        { name: 'Priority access to all startup networking and pitching events', included: true },
        { name: 'Personal investor introductions and business mentoring', included: true }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section with SEO-rich content */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-4">
            <span className="text-yellow-500 text-3xl">🎫</span>
            Startup Event Registration
            <span className="text-yellow-500 text-3xl ml-2">🎫</span>
          </h1>
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">
            Premier Business Networking & Investor Pitching Event
          </h2>
          <p className="text-gray-600 text-lg mb-4">
            Join India's largest startup networking event where entrepreneurs meet investors, businesses showcase innovations, and networking opportunities create lasting partnerships.
          </p>
          <p className="text-gray-600 text-base mb-8 max-w-4xl mx-auto">
            Our startup event brings together the most dynamic business networking community, featuring investor pitching sessions, startup showcases, business exhibitions, and exclusive networking opportunities. Whether you're seeking investor connections, business partnerships, or startup mentoring, this networking event offers unparalleled access to the startup ecosystem.
          </p>

          {/* SEO Keywords Section */}
          <div className="bg-blue-50 rounded-2xl p-6 mb-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Why Join This Startup Networking Event?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
              <div>
                <strong>Investor Networking:</strong> Connect with top investors, venture capitalists, and business angels looking for promising startups and business opportunities.
              </div>
              <div>
                <strong>Startup Pitching:</strong> Present your business to investors through structured pitching sessions and networking meetups designed for startup growth.
              </div>
              <div>
                <strong>Business Partnerships:</strong> Expand your professional network with fellow entrepreneurs, business leaders, and startup founders in our networking environment.
              </div>
            </div>
          </div>

          {/* Toggle Switch */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-sm ${!isYearly ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
              Individual Startup Pass
            </span>
            <div className="relative">
              <button
                onClick={() => setIsYearly(!isYearly)}
                className={`w-14 h-7 rounded-full transition-colors duration-200 ${
                  isYearly ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-200 ${
                    isYearly ? 'translate-x-8' : 'translate-x-1'
                  } mt-1`}
                />
              </button>
            </div>
            <span className={`text-sm ${isYearly ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
              Business Team Package
            </span>
            {isYearly && (
              <div className="relative">
                <span className="text-blue-600 text-sm font-medium bg-blue-50 px-2 py-1 rounded-full">
                  Save 15% on Networking
                </span>
                <div className="absolute -top-2 -left-8">
                  <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
                    <path d="M2 10C8 4 16 4 22 10" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Pricing Cards - First Row: 3 Cards */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.slice(0, 3).map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 transition-all duration-300 ${
                  plan.isPopular
                    ? 'bg-blue-600 text-white transform scale-105 shadow-2xl'
                    : plan.isHighlighted
                    ? 'bg-gradient-to-br from-purple-50 to-blue-50 text-gray-900 shadow-2xl border-2 border-purple-300 transform scale-102'
                    : 'bg-white text-gray-900 shadow-lg hover:shadow-xl'
                }`}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-blue-900 px-4 py-1 rounded-full text-xs font-bold">
                      BEST FOR INVESTOR NETWORKING
                    </span>
                  </div>
                )}

                {/* Highlighted Badge */}
                {plan.isHighlighted && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-xs font-bold">
                      STARTUP SHOWCASE SPECIAL
                    </span>
                  </div>
                )}

                {/* Plan Name and Description */}
                <div className="mb-8">
                  <h3 className={`text-2xl font-bold mb-3 ${plan.isPopular ? 'text-white' : plan.isHighlighted ? 'text-purple-900' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm leading-relaxed ${plan.isPopular ? 'text-blue-100' : plan.isHighlighted ? 'text-purple-700' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className={`text-5xl font-bold ${plan.isPopular ? 'text-white' : plan.isHighlighted ? 'text-purple-900' : 'text-gray-900'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-sm ml-1 ${plan.isPopular ? 'text-blue-100' : plan.isHighlighted ? 'text-purple-600' : 'text-gray-500'}`}>
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 mb-8 ${
                  plan.isPopular
                    ? 'bg-white text-blue-600 hover:bg-gray-50'
                    : plan.buttonClass
                }`}>
                  {plan.buttonText}
                </button>

                {/* Features List */}
                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className={`mt-0.5 ${feature.included ? '' : 'opacity-50'}`}>
                        {feature.included ? (
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                            plan.isPopular ? 'bg-blue-500' : plan.isHighlighted ? 'bg-purple-100' : 'bg-green-100'
                          }`}>
                            <Check className={`w-3 h-3 ${plan.isPopular ? 'text-white' : plan.isHighlighted ? 'text-purple-600' : 'text-green-600'}`} />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center">
                            <X className="w-3 h-3 text-gray-400" />
                          </div>
                        )}
                      </div>
                      <span className={`text-sm ${
                        plan.isPopular 
                          ? feature.included ? 'text-white' : 'text-blue-200'
                          : plan.isHighlighted
                          ? feature.included ? 'text-purple-800' : 'text-purple-400'
                          : feature.included ? 'text-gray-700' : 'text-gray-400'
                      }`}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row: 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.slice(3, 5).map((plan, index) => (
            <div
              key={index + 3}
              className="relative rounded-2xl p-8 transition-all duration-300 bg-white text-gray-900 shadow-lg hover:shadow-xl"
            >
              {/* Plan Name and Description */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {plan.name}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-sm ml-1 text-gray-500">
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 mb-8 ${plan.buttonClass}`}>
                {plan.buttonText}
              </button>

              {/* Features List */}
              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className={`mt-0.5 ${feature.included ? '' : 'opacity-50'}`}>
                      {feature.included ? (
                        <div className="w-5 h-5 rounded-full flex items-center justify-center bg-green-100">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center">
                          <X className="w-3 h-3 text-gray-400" />
                        </div>
                      )}
                    </div>
                    <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional SEO Information */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our Startup Networking Event?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">🚀 Investor Networking Opportunities</h4>
                <p className="text-gray-600 text-sm">Connect directly with angel investors, venture capitalists, and business funding experts actively seeking innovative startups and business ventures.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">💼 Business Pitching Excellence</h4>
                <p className="text-gray-600 text-sm">Perfect your startup pitch through structured pitching sessions, investor feedback, and networking with successful entrepreneurs and business mentors.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">🌐 Startup Community Network</h4>
                <p className="text-gray-600 text-sm">Join a thriving startup ecosystem with fellow entrepreneurs, business innovators, and networking professionals building the future of business.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">📈 Business Growth Acceleration</h4>
                <p className="text-gray-600 text-sm">Access investor connections, business partnerships, startup mentoring, and networking opportunities essential for scaling your business venture.</p>
              </div>
            </div>
            <p className="text-gray-700 text-base mb-4">
              <strong>Register now</strong> for India's premier startup networking event featuring investor pitching, business exhibitions, entrepreneur meetups, and exclusive networking sessions designed to accelerate your startup journey.
            </p>
            <p className="text-blue-600 text-lg font-semibold">
              🎉 Early bird discounts on all networking passes! Limited startup event seats available.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketsRegistrationPage;
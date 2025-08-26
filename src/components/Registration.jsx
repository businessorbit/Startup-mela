// import React, { useState } from 'react';
// import { Calendar, Clock, MapPin, Users, Play, Star, Mic, ArrowRight, Building, Target, Network, Award, TrendingUp, Handshake, CheckCircle, Crown, Zap } from 'lucide-react';

// const RegistrationPage = () => {
//     const [selectedPass, setSelectedPass] = useState(null);

//     const handleSmoothScroll = (targetId) => {
//         const targetElement = document.getElementById(targetId);

//         if (targetElement) {
//             const navbarHeight = 64; // h-16 = 64px
//             const targetPosition = targetElement.offsetTop - navbarHeight;

//             window.scrollTo({
//                 top: targetPosition,
//                 behavior: 'smooth'
//             });
//         }
//     };

//     const ticketOptions = [
//         {
//             id: 'general',
//             name: 'General Entry Pass',
//             price: '₹20',
//             icon: Users,
//             color: '[#40403E]',
//             gradient: 'from-blue-500 to-indigo-500',
//             bgColor: 'bg-[#f5f5f5]',
//             borderColor: 'border-black',
//             whoFor: 'Students, aspiring entrepreneurs, and the general public',
//             features: [
//                 'Full access to the Marketplace (Exhibition Stalls) for all three days',
//                 'Access to all sessions and events on the Spotlight (Center Stage)',
//                 'An incredible opportunity to witness innovation firsthand and get inspired'
//             ],
//             isPremium: false
//         },
//         {
//             id: 'startup-stall',
//             name: 'Startup Stall Pass',
//             price: '₹20,000',
//             icon: Building,
//             color: '[#40403E]',
//             gradient: 'from-green-500 to-emerald-500',
//             bgColor: 'bg-[#f5f5f5]',
//             borderColor: 'border-black',
//             whoFor: 'Early-stage startups looking for maximum visibility and customer interaction',
//             features: [
//                 'A dedicated stall space in the Marketplace for three days to showcase your product/service',
//                 'Two team member passes with General Entry access',
//                 'Listing in the official event directory'
//             ],
//             isPremium: false
//         },
//         {
//             id: 'lounge-pitching',
//             name: 'Lounge + Pitching Pass',
//             price: '₹25,000',
//             icon: Target,
//             color: '[#40403E]',
//             gradient: 'from-purple-500 to-violet-500',
//             bgColor: 'bg-[#f5f5f5]',
//             borderColor: 'border-black',
//             whoFor: 'Founders focused on networking and fundraising who may not need a physical stall',
//             features: [
//                 'One all-access pass to the exclusive Hub (Networking & Pitching Lounge)',
//                 'A guaranteed slot in one of our curated Investor Pitching Sessions',
//                 'Access to the investor and speaker list',
//                 'Includes General Entry access'
//             ],
//             isPremium: false
//         },
//         {
//             id: 'stall-lounge',
//             name: 'Stall + Lounge Pass',
//             price: '₹35,000',
//             icon: Handshake,
//             color: '[#40403E]',
//             gradient: 'from-orange-500 to-red-500',
//             bgColor: 'bg-[#f5f5f5]',
//             borderColor: 'border-black',
//             whoFor: 'Growth-stage startups wanting both customer visibility and investor access',
//             features: [
//                 'Everything in the Startup Stall Pass',
//                 'One team member pass upgraded for full access to the Hub (Networking & Pitching Lounge)',
//                 'Opportunity to apply for pitching slots (not guaranteed)'
//             ],
//             isPremium: false
//         },
//         {
//             id: 'stall-stage-lounge',
//             name: 'Stall + Stage Lounge Pass',
//             price: '₹40,000',
//             icon: Mic,
//             color: '[#40403E]',
//             gradient: 'from-pink-500 to-rose-500',
//             bgColor: 'bg-[#f5f5f5]',
//             borderColor: 'border-black',
//             whoFor: 'Startups who want both strong customer presence and high visibility on stage',
//             features: [
//                 'Everything in the Stall + Lounge Pass',
//                 'A confirmed slot on the Spotlight Stage for product demo / announcement',
//                 'Priority branding in the Marketplace and event promotions',
//                 'Two additional team passes (one with Lounge access)'
//             ],
//             isPremium: false
//         },
//         {
//             id: 'vip-all-access',
//             name: 'All-Access VIP Pass',
//             price: '₹50,000',
//             icon: Crown,
//             color: '[#40403E]',
//             gradient: 'from-yellow-500 to-orange-500',
//             bgColor: 'bg-[#f5f5f5]',
//             borderColor: 'border-black',
//             whoFor: 'Startups and businesses that want it all. The ultimate package for maximum impact',
//             features: [
//                 'Everything in the Stall + Lounge Pass',
//                 'A guaranteed pitching slot in front of investors',
//                 'A dedicated feature on the Spotlight Stage (e.g., a 10-minute product demo or launch announcement)',
//                 'Premium stall location',
//                 'Four team member passes (two with Lounge access)',
//                 'Priority access to all workshops and sessions'
//             ],
//             isPremium: false
//         }
//     ];

//     return (
//         <div className="min-h-screen bg-[#E7E7E7]">
//             {/* Header Section */}
//             <div className="relative overflow-hidden bg-white">
//                 <div className="absolute inset-0 bg-[#E7E7E7]"></div>
//                 <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//                     <div className="space-y-6">
//                         <div className="text-center">
//                             <div className="inline-flex items-center px-4 py-2 bg-[#828385] text-white rounded-full text-sm font-semibold">
//                                 <Calendar className="w-4 h-4 mr-2" />
//                                 Tickets & Registration
//                             </div>
//                         </div>

//                         <div className="relative right-[20px]">
//                             <h1 className="text-[3rem] md:text-[3.2rem] font-bold text-gray-900 leading-tight text-left"
//                                 style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
//                                 Choose Your Pass
//                             </h1>
//                             <h1 className="text-[2.8rem] md:text-[3rem] font-bold !leading-snug text-gray-900  text-left !mt-0"
//                                 style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
//                                 Unlock Your Opportunity
//                             </h1>
//                         </div>

//                         <div className="text-right max-w-xl relative left-[520px] bottom-[90px]">
//                             <p className="text-lg text-gray-600 leading-relaxed !mb-0">
//                                 We Offer several ticket options designed to provide the best
//                             </p>
//                             <p className="text-lg text-gray-600 !mt-0">
//                                 experience to all from curious visitors to ambitious founders
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Main Content */}
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

//                 {/* Ticket Options */}
//                 <div className="space-y-12 relative bottom-[30px] ">
//                     <div className="text-center space-y-4">
//                         <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Select Your Pass</h2>
//                         <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//                             Each pass is carefully crafted to maximize your event experience and ROI
//                         </p>
//                     </div>

//                     <div className="grid lg:grid-cols-3 xl:grid-cols-3 gap-8">
//                         {ticketOptions.map((ticket) => {
//                             const IconComponent = ticket.icon;
//                             const isSelected = selectedPass === ticket.id;

//                             return (
//                                 <div
//                                     key={ticket.id}
//                                     className={`relative rounded-3xl bg-[#f5f5f5] shadow-lg hover:shadow-2xl transition-all duration-300 border-2 cursor-pointer transform hover:scale-[1.02] flex flex-col h-full ${isSelected
//                                         ? `${ticket.borderColor} ring-4 ring-${ticket.color}-200`
//                                         : 'border-gray-100 hover:border-[#40403E] hover:border-4'
//                                         }`}
//                                     onClick={() => setSelectedPass(ticket.id)}
//                                 >

//                                     <div className="p-8 space-y-6 flex-1 flex flex-col">
//                                         {/* Header */}
//                                         <div className="text-center space-y-4">
//                                             <div className={`w-16 h-16 ${ticket.bgColor} rounded-2xl flex items-center justify-center mx-auto`}>
//                                                 <IconComponent className={`w-8 h-8 text-${ticket.color}-600`} />
//                                             </div>
//                                             <div>
//                                                 <h3 className="text-2xl font-bold text-black"
//                                                     style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>{ticket.name}</h3>
//                                             </div>
//                                         </div>

//                                         {/* Content that grows to fill available space */}
//                                         <div className="space-y-6 flex-1">
//                                             {/* Who it's for */}
//                                             <div className="space-y-3">
//                                                 <p className="font-semibold text-gray-900">Who it's for:</p>
//                                                 <div className="flex items-start space-x-3">
//                                                     <CheckCircle className={`w-5 h-5 text-${ticket.color}-500 flex-shrink-0 mt-0.5`} />
//                                                     <p className={`text-sm text-${ticket.color}-800 leading-relaxed`}>
//                                                         {ticket.whoFor}
//                                                     </p>
//                                                 </div>
//                                             </div>

//                                             {/* What's included */}
//                                             <div className="space-y-3">
//                                                 <p className="font-semibold text-gray-900">What's included:</p>
//                                                 {ticket.features.map((feature, index) => (
//                                                     <div key={index} className="flex items-start space-x-3">
//                                                         <CheckCircle className={`w-5 h-5 text-${ticket.color}-500 flex-shrink-0 mt-0.5`} />
//                                                         <p className="text-sm text-black leading-relaxed">{feature}</p>
//                                                     </div>
//                                                 ))}
//                                             </div>
//                                         </div>

//                                         {/* Select Button - This stays at the bottom */}
//                                         <div className="pt-4 mt-auto">
//                                             <button
//                                                 className={`w-full py-4 rounded-full font-semibold transition-all duration-500 transform hover:scale-105 hover:shadow-lg active:scale-95 bg-[#40403E] text-white ${isSelected
//                                                         ? `bg-gradient-to-r ${ticket.gradient} text-white shadow-lg hover:shadow-xl`
//                                                         : `border-2 border-[#40403E] hover:shadow-md`
//                                                     }`}
//                                                 style={{
//                                                     transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
//                                                 }}
//                                                 onMouseEnter={(e) => {
//                                                     if (!isSelected) {
//                                                         e.target.style.transform = 'scale(1.05) translateY(-2px)';
//                                                         e.target.style.boxShadow =
//                                                             '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
//                                                     }
//                                                 }}
//                                                 onMouseLeave={(e) => {
//                                                     if (!isSelected) {
//                                                         e.target.style.transform = 'scale(1) translateY(0)';
//                                                         e.target.style.boxShadow = '';
//                                                     }
//                                                 }}
//                                             >
//                                                 {isSelected ? (
//                                                     <span className="flex items-center justify-center space-x-2">
//                                                         <CheckCircle className="w-5 h-5" />
//                                                         <span>Selected</span>
//                                                     </span>
//                                                 ) : (
//                                                     <span className="flex items-center justify-center space-x-2">
//                                                         <span>Select for {ticket.price}</span>
//                                                         <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
//                                                     </span>
//                                                 )}
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>

//                 {/* Event Details Reminder */}
//                 <div className="bg-[#E8E8E8] rounded-3xl p-12">
//                     <div className="grid lg:grid-cols-2 gap-12 items-center">
//                         <div className="space-y-6">
//                             <h2 className="text-3xl font-bold text-gray-900">Event Details</h2>
//                             <div className="space-y-4">
//                                 <div className="flex items-center space-x-4">
//                                     <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
//                                         <Calendar className="w-6 h-6 text-indigo-600" />
//                                     </div>
//                                     <div>
//                                         <p className="font-semibold text-gray-900">January 16-18, 2025</p>
//                                         <p className="text-gray-600">Thursday to Saturday</p>
//                                     </div>
//                                 </div>
//                                 <div className="flex items-center space-x-4">
//                                     <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
//                                         <Clock className="w-6 h-6 text-green-600" />
//                                     </div>
//                                     <div>
//                                         <p className="font-semibold text-gray-900">10:00 AM - 8:00 PM</p>
//                                         <p className="text-gray-600">Daily Schedule</p>
//                                     </div>
//                                 </div>
//                                 <div className="flex items-center space-x-4">
//                                     <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
//                                         <MapPin className="w-6 h-6 text-purple-600" />
//                                     </div>
//                                     <div>
//                                         <p className="font-semibold text-gray-900">Sector 34 Exhibition Ground</p>
//                                         <p className="text-gray-600">Chandigarh, India</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="bg-white p-8 rounded-2xl shadow-lg">
//                             <h3 className="text-xl font-bold text-gray-900 mb-6">Why Startup Mela?</h3>
//                             <div className="space-y-4">
//                                 <div className="flex items-center space-x-3">
//                                     <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
//                                         <Users className="w-4 h-4 text-blue-600" />
//                                     </div>
//                                     <p className="text-black">500+ Attendees</p>
//                                 </div>
//                                 <div className="flex items-center space-x-3">
//                                     <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
//                                         <Building className="w-4 h-4 text-green-600" />
//                                     </div>
//                                     <p className="text-black">100+ Startups</p>
//                                 </div>
//                                 <div className="flex items-center space-x-3">
//                                     <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
//                                         <Target className="w-4 h-4 text-purple-600" />
//                                     </div>
//                                     <p className="text-black">50+ Investors</p>
//                                 </div>
//                                 <div className="flex items-center space-x-3">
//                                     <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
//                                         <Star className="w-4 h-4 text-orange-600" />
//                                     </div>
//                                     <p className="text-black">3 Days of Innovation</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default RegistrationPage;

import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Play, Star, Mic, ArrowRight, Building, Target, Network, Award, TrendingUp, Handshake, CheckCircle, Crown, Zap } from 'lucide-react';

const RegistrationPage = () => {
    const [selectedPass, setSelectedPass] = useState(null);

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

    const ticketOptions = [
        {
            id: 'general',
            name: 'General Entry Pass',
            price: '₹20',
            icon: Users,
            color: '[#40403E]',
            gradient: 'from-blue-500 to-indigo-500',
            bgColor: 'bg-[#f5f5f5]',
            borderColor: 'border-black',
            whoFor: 'Students, aspiring entrepreneurs, and the general public',
            features: [
                'Full access to the Marketplace (Exhibition Stalls) for all three days',
                'Access to all sessions and events on the Spotlight (Center Stage)',
                'An incredible opportunity to witness innovation firsthand and get inspired'
            ],
            isPremium: false
        },
        {
            id: 'startup-stall',
            name: 'Startup Stall Pass',
            price: '₹20,000',
            icon: Building,
            color: '[#40403E]',
            gradient: 'from-green-500 to-emerald-500',
            bgColor: 'bg-[#f5f5f5]',
            borderColor: 'border-black',
            whoFor: 'Early-stage startups looking for maximum visibility and customer interaction',
            features: [
                'A dedicated stall space in the Marketplace for three days to showcase your product/service',
                'Two team member passes with General Entry access',
                'Listing in the official event directory'
            ],
            isPremium: false
        },
        {
            id: 'lounge-pitching',
            name: 'Lounge + Pitching Pass',
            price: '₹25,000',
            icon: Target,
            color: '[#40403E]',
            gradient: 'from-purple-500 to-violet-500',
            bgColor: 'bg-[#f5f5f5]',
            borderColor: 'border-black',
            whoFor: 'Founders focused on networking and fundraising who may not need a physical stall',
            features: [
                'One all-access pass to the exclusive Hub (Networking & Pitching Lounge)',
                'A guaranteed slot in one of our curated Investor Pitching Sessions',
                'Access to the investor and speaker list',
                'Includes General Entry access'
            ],
            isPremium: false
        },
        {
            id: 'stall-lounge',
            name: 'Stall + Lounge Pass',
            price: '₹35,000',
            icon: Handshake,
            color: '[#40403E]',
            gradient: 'from-orange-500 to-red-500',
            bgColor: 'bg-[#f5f5f5]',
            borderColor: 'border-black',
            whoFor: 'Growth-stage startups wanting both customer visibility and investor access',
            features: [
                'Everything in the Startup Stall Pass',
                'One team member pass upgraded for full access to the Hub (Networking & Pitching Lounge)',
                'Opportunity to apply for pitching slots (not guaranteed)'
            ],
            isPremium: false
        },
        {
            id: 'stall-stage-lounge',
            name: 'Stall + Stage Lounge Pass',
            price: '₹40,000',
            icon: Mic,
            color: '[#40403E]',
            gradient: 'from-pink-500 to-rose-500',
            bgColor: 'bg-[#f5f5f5]',
            borderColor: 'border-black',
            whoFor: 'Startups who want both strong customer presence and high visibility on stage',
            features: [
                'Everything in the Stall + Lounge Pass',
                'A confirmed slot on the Spotlight Stage for product demo / announcement',
                'Priority branding in the Marketplace and event promotions',
                'Two additional team passes (one with Lounge access)'
            ],
            isPremium: false
        },
        {
            id: 'vip-all-access',
            name: 'All-Access VIP Pass',
            price: '₹50,000',
            icon: Crown,
            color: '[#40403E]',
            gradient: 'from-yellow-500 to-orange-500',
            bgColor: 'bg-[#f5f5f5]',
            borderColor: 'border-black',
            whoFor: 'Startups and businesses that want it all. The ultimate package for maximum impact',
            features: [
                'Everything in the Stall + Lounge Pass',
                'A guaranteed pitching slot in front of investors',
                'A dedicated feature on the Spotlight Stage (e.g., a 10-minute product demo or launch announcement)',
                'Premium stall location',
                'Four team member passes (two with Lounge access)',
                'Priority access to all workshops and sessions'
            ],
            isPremium: false
        }
    ];

    return (
        <div className="min-h-screen bg-[#E7E7E7]">
            {/* Header Section */}
            <div className="relative overflow-hidden bg-white">
                <div className="absolute inset-0 bg-[#E7E7E7]"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                    <div className="space-y-6">
                        <div className="text-center">
                            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-[#828385] text-white rounded-full text-xs sm:text-sm font-semibold">
                                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                                Tickets & Registration
                            </div>
                        </div>

                        {/* Mobile: Centered layout, Desktop: Original left-aligned with right description */}
                        <div className="block lg:hidden text-center space-y-4">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
                                style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
                                Choose Your Pass
                            </h1>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-gray-900"
                                style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
                                Unlock Your Opportunity
                            </h1>
                            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed px-4">
                                We Offer several ticket options designed to provide the best
                                experience to all from curious visitors to ambitious founders
                            </p>
                        </div>

                        {/* Desktop: Original layout */}
                        <div className="hidden lg:block">
                            <div className="relative right-[20px]">
                                <h1 className="text-[3rem] md:text-[3.2rem] font-bold text-gray-900 leading-tight text-left"
                                    style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
                                    Choose Your Pass
                                </h1>
                                <h1 className="text-[2.8rem] md:text-[3rem] font-bold !leading-snug text-gray-900  text-left !mt-0"
                                    style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
                                    Unlock Your Opportunity
                                </h1>
                            </div>

                            <div className="text-right max-w-xl relative left-[520px] bottom-[67px]">
                                <p className="text-lg text-gray-600 leading-relaxed !mb-0">
                                    We Offer several ticket options designed to provide the best
                                </p>
                                <p className="text-lg text-gray-600 !mt-0">
                                    experience to all from curious visitors to ambitious founders
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 lg:space-y-16">

                {/* Ticket Options */}
                <div className="space-y-8 lg:space-y-12 relative lg:bottom-[30px]">
                    <div className="text-center space-y-4">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Select Your Pass</h2>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-4 lg:px-0">
                            Each pass is carefully crafted to maximize your event experience and ROI
                        </p>
                    </div>

                    {/* Mobile: Single column, Desktop: Original 3-column grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-8">
                        {ticketOptions.map((ticket) => {
                            const IconComponent = ticket.icon;
                            const isSelected = selectedPass === ticket.id;

                            return (
                                <div
                                    key={ticket.id}
                                    className={`relative rounded-2xl lg:rounded-3xl bg-[#f5f5f5] shadow-lg hover:shadow-2xl transition-all duration-300 border-2 cursor-pointer transform hover:scale-[1.02] flex flex-col h-full ${isSelected
                                        ? `${ticket.borderColor} ring-4 ring-${ticket.color}-200`
                                        : 'border-gray-100 hover:border-[#40403E] hover:border-4'
                                        }`}
                                    onClick={() => setSelectedPass(ticket.id)}
                                >

                                    <div className="p-6 lg:p-8 space-y-4 lg:space-y-6 flex-1 flex flex-col">
                                        {/* Header */}
                                        <div className="text-center space-y-3 lg:space-y-4">
                                            <div className={`w-12 h-12 lg:w-16 lg:h-16 ${ticket.bgColor} rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto`}>
                                                <IconComponent className={`w-6 h-6 lg:w-8 lg:h-8 text-${ticket.color}-600`} />
                                            </div>
                                            <div>
                                                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black"
                                                    style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>{ticket.name}</h3>
                                            </div>
                                        </div>

                                        {/* Content that grows to fill available space */}
                                        <div className="space-y-4 lg:space-y-6 flex-1">
                                            {/* Who it's for */}
                                            <div className="space-y-2 lg:space-y-3">
                                                <p className="font-semibold text-gray-900 text-sm lg:text-base">Who it's for:</p>
                                                <div className="flex items-start space-x-2 lg:space-x-3">
                                                    <CheckCircle className={`w-4 h-4 lg:w-5 lg:h-5 text-${ticket.color}-500 flex-shrink-0 mt-0.5`} />
                                                    <p className={`text-xs lg:text-sm text-${ticket.color}-800 leading-relaxed`}>
                                                        {ticket.whoFor}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* What's included */}
                                            <div className="space-y-2 lg:space-y-3">
                                                <p className="font-semibold text-gray-900 text-sm lg:text-base">What's included:</p>
                                                {ticket.features.map((feature, index) => (
                                                    <div key={index} className="flex items-start space-x-2 lg:space-x-3">
                                                        <CheckCircle className={`w-4 h-4 lg:w-5 lg:h-5 text-${ticket.color}-500 flex-shrink-0 mt-0.5`} />
                                                        <p className="text-xs lg:text-sm text-black leading-relaxed">{feature}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Select Button */}
                                        <div className="pt-3 lg:pt-4 mt-auto">
                                            <button
                                                className={`w-full py-3 lg:py-4 rounded-full font-semibold transition-all duration-500 transform hover:scale-105 hover:shadow-lg active:scale-95 bg-[#40403E] text-white text-sm lg:text-base ${isSelected
                                                        ? `bg-gradient-to-r ${ticket.gradient} text-white shadow-lg hover:shadow-xl`
                                                        : `border-2 border-[#40403E] hover:shadow-md`
                                                    }`}
                                                style={{
                                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                                }}
                                                onMouseEnter={(e) => {
                                                    if (!isSelected) {
                                                        e.target.style.transform = 'scale(1.05) translateY(-2px)';
                                                        e.target.style.boxShadow =
                                                            '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
                                                    }
                                                }}
                                                onMouseLeave={(e) => {
                                                    if (!isSelected) {
                                                        e.target.style.transform = 'scale(1) translateY(0)';
                                                        e.target.style.boxShadow = '';
                                                    }
                                                }}
                                            >
                                                {isSelected ? (
                                                    <span className="flex items-center justify-center space-x-2">
                                                        <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5" />
                                                        <span>Selected</span>
                                                    </span>
                                                ) : (
                                                    <span className="flex items-center justify-center space-x-2">
                                                        <span>Select for {ticket.price}</span>
                                                        <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 transition-transform group-hover:translate-x-1" />
                                                    </span>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Event Details Reminder */}
                <div className="bg-[#E8E8E8] rounded-2xl lg:rounded-3xl p-6 lg:p-12 mb-6 lg:mb-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Event Details</h2>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3 lg:space-x-4">
                                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-indigo-100 rounded-lg lg:rounded-xl flex items-center justify-center">
                                        <Calendar className="w-5 h-5 lg:w-6 lg:h-6 text-indigo-600" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900 text-sm lg:text-base">January 16-18, 2025</p>
                                        <p className="text-gray-600 text-xs lg:text-sm">Thursday to Saturday</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3 lg:space-x-4">
                                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-green-100 rounded-lg lg:rounded-xl flex items-center justify-center">
                                        <Clock className="w-5 h-5 lg:w-6 lg:h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900 text-sm lg:text-base">10:00 AM - 8:00 PM</p>
                                        <p className="text-gray-600 text-xs lg:text-sm">Daily Schedule</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3 lg:space-x-4">
                                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-purple-100 rounded-lg lg:rounded-xl flex items-center justify-center">
                                        <MapPin className="w-5 h-5 lg:w-6 lg:h-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900 text-sm lg:text-base">Sector 34 Exhibition Ground</p>
                                        <p className="text-gray-600 text-xs lg:text-sm">Chandigarh, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 lg:p-8 rounded-xl lg:rounded-2xl shadow-lg">
                            <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-4 lg:mb-6">Why Startup Mela?</h3>
                            <div className="space-y-3 lg:space-y-4">
                                <div className="flex items-center space-x-3">
                                    <div className="w-6 h-6 lg:w-8 lg:h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                        <Users className="w-3 h-3 lg:w-4 lg:h-4 text-blue-600" />
                                    </div>
                                    <p className="text-black text-sm lg:text-base">500+ Attendees</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-6 h-6 lg:w-8 lg:h-8 bg-green-100 rounded-full flex items-center justify-center">
                                        <Building className="w-3 h-3 lg:w-4 lg:h-4 text-green-600" />
                                    </div>
                                    <p className="text-black text-sm lg:text-base">100+ Startups</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-6 h-6 lg:w-8 lg:h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                        <Target className="w-3 h-3 lg:w-4 lg:h-4 text-purple-600" />
                                    </div>
                                    <p className="text-black text-sm lg:text-base">50+ Investors</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-6 h-6 lg:w-8 lg:h-8 bg-orange-100 rounded-full flex items-center justify-center">
                                        <Star className="w-3 h-3 lg:w-4 lg:h-4 text-orange-600" />
                                    </div>
                                    <p className="text-black text-sm lg:text-base">3 Days of Innovation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationPage;

// import React, { useState } from 'react';
// import { Calendar, Clock, MapPin, Users, Play, Star, Mic, ArrowRight, Building, Target, Network, Award, TrendingUp, Handshake, CheckCircle, Crown, Zap } from 'lucide-react';

// const RegistrationPage = () => {
//     const [selectedPass, setSelectedPass] = useState(null);

//     const handleSmoothScroll = (targetId) => {
//         const targetElement = document.getElementById(targetId);

//         if (targetElement) {
//             const navbarHeight = 64; // h-16 = 64px
//             const targetPosition = targetElement.offsetTop - navbarHeight;

//             window.scrollTo({
//                 top: targetPosition,
//                 behavior: 'smooth'
//             });
//         }
//     };

//     const ticketOptions = [
//         {
//             id: 'general',
//             name: 'General Entry Pass',
//             price: '₹20',
//             icon: Users,
//             color: '[#40403E]',
//             gradient: 'from-blue-500 to-indigo-500',
//             bgColor: 'bg-[#f5f5f5]',
//             borderColor: 'border-black',
//             whoFor: 'Students, aspiring entrepreneurs, and the general public',
//             features: [
//                 'Full access to the Marketplace (Exhibition Stalls) for all three days',
//                 'Access to all sessions and events on the Spotlight (Center Stage)',
//                 'An incredible opportunity to witness innovation firsthand and get inspired'
//             ],
//             isPremium: false
//         },
//         {
//             id: 'startup-stall',
//             name: 'Startup Stall Pass',
//             price: '₹20,000',
//             icon: Building,
//             color: '[#40403E]',
//             gradient: 'from-green-500 to-emerald-500',
//             bgColor: 'bg-[#f5f5f5]',
//             borderColor: 'border-black',
//             whoFor: 'Early-stage startups looking for maximum visibility and customer interaction',
//             features: [
//                 'A dedicated stall space in the Marketplace for three days to showcase your product/service',
//                 'Two team member passes with General Entry access',
//                 'Listing in the official event directory'
//             ],
//             isPremium: false
//         },
//         {
//             id: 'lounge-pitching',
//             name: 'Lounge + Pitching Pass',
//             price: '₹25,000',
//             icon: Target,
//             color: '[#40403E]',
//             gradient: 'from-purple-500 to-violet-500',
//             bgColor: 'bg-[#f5f5f5]',
//             borderColor: 'border-black',
//             whoFor: 'Founders focused on networking and fundraising who may not need a physical stall',
//             features: [
//                 'One all-access pass to the exclusive Hub (Networking & Pitching Lounge)',
//                 'A guaranteed slot in one of our curated Investor Pitching Sessions',
//                 'Access to the investor and speaker list',
//                 'Includes General Entry access'
//             ],
//             isPremium: false
//         },
//         {
//             id: 'stall-lounge',
//             name: 'Stall + Lounge Pass',
//             price: '₹35,000',
//             icon: Handshake,
//             color: '[#40403E]',
//             gradient: 'from-orange-500 to-red-500',
//             bgColor: 'bg-[#f5f5f5]',
//             borderColor: 'border-black',
//             whoFor: 'Growth-stage startups wanting both customer visibility and investor access',
//             features: [
//                 'Everything in the Startup Stall Pass',
//                 'One team member pass upgraded for full access to the Hub (Networking & Pitching Lounge)',
//                 'Opportunity to apply for pitching slots (not guaranteed)'
//             ],
//             isPremium: false
//         },
//         {
//             id: 'stall-stage-lounge',
//             name: 'Stall + Stage Lounge Pass',
//             price: '₹40,000',
//             icon: Mic,
//             color: '[#40403E]',
//             gradient: 'from-pink-500 to-rose-500',
//             bgColor: 'bg-[#f5f5f5]',
//             borderColor: 'border-black',
//             whoFor: 'Startups who want both strong customer presence and high visibility on stage',
//             features: [
//                 'Everything in the Stall + Lounge Pass',
//                 'A confirmed slot on the Spotlight Stage for product demo / announcement',
//                 'Priority branding in the Marketplace and event promotions',
//                 'Two additional team passes (one with Lounge access)'
//             ],
//             isPremium: false
//         },
//         {
//             id: 'vip-all-access',
//             name: 'All-Access VIP Pass',
//             price: '₹50,000',
//             icon: Crown,
//             color: '[#40403E]',
//             gradient: 'from-yellow-500 to-orange-500',
//             bgColor: 'bg-[#f5f5f5]',
//             borderColor: 'border-black',
//             whoFor: 'Startups and businesses that want it all. The ultimate package for maximum impact',
//             features: [
//                 'Everything in the Stall + Lounge Pass',
//                 'A guaranteed pitching slot in front of investors',
//                 'A dedicated feature on the Spotlight Stage (e.g., a 10-minute product demo or launch announcement)',
//                 'Premium stall location',
//                 'Four team member passes (two with Lounge access)',
//                 'Priority access to all workshops and sessions'
//             ],
//             isPremium: false
//         }
//     ];

//     return (
//         <div className="min-h-screen bg-[#E7E7E7]">
//             {/* Header Section */}
//             <div className="relative overflow-hidden bg-white">
//                 <div className="absolute inset-0 bg-[#E7E7E7]"></div>
//                 <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
//                     <div className="space-y-6">
//                         <div className="text-center">
//                             <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-[#828385] text-white rounded-full text-xs sm:text-sm font-semibold">
//                                 <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
//                                 Tickets & Registration
//                             </div>
//                         </div>

//                         {/* Mobile: Centered layout, Desktop: Original left-aligned with right description */}
//                         <div className="block lg:hidden text-center space-y-4">
//                             <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
//                                 style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
//                                 Choose Your Pass
//                             </h1>
//                             <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-gray-900"
//                                 style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
//                                 Unlock Your Opportunity
//                             </h1>
//                         </div>

//                         {/* Desktop: Original layout */}
//                         <div className="hidden lg:block">
//                             <div className="flex justify-between items-start">
//                                 {/* Left side - Headings */}
//                                 <div className="flex-shrink-0">
//                                     <h1 className="text-[3rem] md:text-[3.2rem] font-bold text-gray-900 leading-tight text-left"
//                                         style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
//                                         Choose Your Pass
//                                     </h1>
//                                     <h1 className="text-[2.8rem] md:text-[3rem] font-bold !leading-snug text-gray-900 text-left !mt-0"
//                                         style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
//                                         Unlock Your Opportunity
//                                     </h1>
//                                 </div>

//                                 {/* Right side - Description paragraphs */}
//                                 <div className="text-right max-w-xl flex-shrink-0 mt-2">
//                                     <p className="text-lg bg-[#E7E7E7] text-gray-600 leading-tight !mb-0">
//                                         We Offer several ticket options designed to provide the best
//                                     </p>
//                                     <p className="text-lg bg-[#E7E7E7] text-gray-600 leading-tight !mt-0">
//                                         experience to all from curious visitors to ambitious founders.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Main Content */}
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 lg:space-y-16">

//                 {/* Ticket Options */}
//                 <div className="space-y-8 lg:space-y-12 relative lg:bottom-[30px]">
//                     <div className="text-center space-y-4">
//                         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Select Your Pass</h2>
//                         <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-4 lg:px-0">
//                             Each pass is carefully crafted to maximize your event experience and ROI
//                         </p>
//                     </div>

//                     {/* Mobile: Single column, Desktop: Original 3-column grid */}
//                     <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-8">
//                         {ticketOptions.map((ticket) => {
//                             const IconComponent = ticket.icon;
//                             const isSelected = selectedPass === ticket.id;

//                             return (
//                                 <div
//                                     key={ticket.id}
//                                     className={`relative rounded-2xl lg:rounded-3xl bg-[#f5f5f5] shadow-lg hover:shadow-2xl transition-all duration-300 border-2 cursor-pointer transform hover:scale-[1.02] flex flex-col h-full ${isSelected
//                                         ? `${ticket.borderColor} ring-4 ring-${ticket.color}-200`
//                                         : 'border-gray-100 hover:border-[#40403E] hover:border-4'
//                                         }`}
//                                     onClick={() => setSelectedPass(ticket.id)}
//                                 >

//                                     <div className="p-6 lg:p-8 space-y-4 lg:space-y-6 flex-1 flex flex-col">
//                                         {/* Header */}
//                                         <div className="text-center space-y-3 lg:space-y-4">
//                                             <div className={`w-12 h-12 lg:w-16 lg:h-16 ${ticket.bgColor} rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto`}>
//                                                 <IconComponent className={`w-6 h-6 lg:w-8 lg:h-8 text-${ticket.color}-600`} />
//                                             </div>
//                                             <div>
//                                                 <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black"
//                                                     style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>{ticket.name}</h3>
//                                             </div>
//                                         </div>

//                                         {/* Content that grows to fill available space */}
//                                         <div className="space-y-4 lg:space-y-6 flex-1">
//                                             {/* Who it's for */}
//                                             <div className="space-y-2 lg:space-y-3">
//                                                 <p className="font-semibold text-gray-900 text-sm lg:text-base">Who it's for:</p>
//                                                 <div className="flex items-start space-x-2 lg:space-x-3">
//                                                     <CheckCircle className={`w-4 h-4 lg:w-5 lg:h-5 text-${ticket.color}-500 flex-shrink-0 mt-0.5`} />
//                                                     <p className={`text-xs lg:text-sm text-${ticket.color}-800 leading-relaxed`}>
//                                                         {ticket.whoFor}
//                                                     </p>
//                                                 </div>
//                                             </div>

//                                             {/* What's included */}
//                                             <div className="space-y-2 lg:space-y-3">
//                                                 <p className="font-semibold text-gray-900 text-sm lg:text-base">What's included:</p>
//                                                 {ticket.features.map((feature, index) => (
//                                                     <div key={index} className="flex items-start space-x-2 lg:space-x-3">
//                                                         <CheckCircle className={`w-4 h-4 lg:w-5 lg:h-5 text-${ticket.color}-500 flex-shrink-0 mt-0.5`} />
//                                                         <p className="text-xs lg:text-sm text-black leading-relaxed">{feature}</p>
//                                                     </div>
//                                                 ))}
//                                             </div>
//                                         </div>

//                                         {/* Select Button */}
//                                         <div className="pt-3 lg:pt-4 mt-auto">
//                                             <button
//                                                 className={`w-full py-3 lg:py-4 rounded-full font-semibold transition-all duration-500 transform hover:scale-105 hover:shadow-lg active:scale-95 bg-[#40403E] text-white text-sm lg:text-base ${isSelected
//                                                     ? `bg-gradient-to-r ${ticket.gradient} text-white shadow-lg hover:shadow-xl`
//                                                     : `border-2 border-[#40403E] hover:shadow-md`
//                                                     }`}
//                                                 style={{
//                                                     transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
//                                                 }}
//                                                 onMouseEnter={(e) => {
//                                                     if (!isSelected) {
//                                                         e.target.style.transform = 'scale(1.05) translateY(-2px)';
//                                                         e.target.style.boxShadow =
//                                                             '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
//                                                     }
//                                                 }}
//                                                 onMouseLeave={(e) => {
//                                                     if (!isSelected) {
//                                                         e.target.style.transform = 'scale(1) translateY(0)';
//                                                         e.target.style.boxShadow = '';
//                                                     }
//                                                 }}
//                                             >
//                                                 {isSelected ? (
//                                                     <span className="flex items-center justify-center space-x-2">
//                                                         <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5" />
//                                                         <span>Selected</span>
//                                                     </span>
//                                                 ) : (
//                                                     <span className="flex items-center justify-center space-x-2">
//                                                         <span>Select for {ticket.price}</span>
//                                                         <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 transition-transform group-hover:translate-x-1" />
//                                                     </span>
//                                                 )}
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>

//                 {/* Event Details Reminder */}
//                 <div className="bg-[#E8E8E8] rounded-2xl lg:rounded-3xl p-6 lg:p-12 mb-6 lg:mb-0">
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
//                         <div className="space-y-6">
//                             <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Event Details</h2>
//                             <div className="space-y-4">
//                                 <div className="flex items-center space-x-3 lg:space-x-4">
//                                     <div className="w-10 h-10 lg:w-12 lg:h-12 bg-indigo-100 rounded-lg lg:rounded-xl flex items-center justify-center">
//                                         <Calendar className="w-5 h-5 lg:w-6 lg:h-6 text-indigo-600" />
//                                     </div>
//                                     <div>
//                                         <p className="font-semibold text-gray-900 text-sm lg:text-base">January 16-18, 2025</p>
//                                         <p className="text-gray-600 text-xs lg:text-sm">Thursday to Saturday</p>
//                                     </div>
//                                 </div>
//                                 <div className="flex items-center space-x-3 lg:space-x-4">
//                                     <div className="w-10 h-10 lg:w-12 lg:h-12 bg-green-100 rounded-lg lg:rounded-xl flex items-center justify-center">
//                                         <Clock className="w-5 h-5 lg:w-6 lg:h-6 text-green-600" />
//                                     </div>
//                                     <div>
//                                         <p className="font-semibold text-gray-900 text-sm lg:text-base">10:00 AM - 8:00 PM</p>
//                                         <p className="text-gray-600 text-xs lg:text-sm">Daily Schedule</p>
//                                     </div>
//                                 </div>
//                                 <div className="flex items-center space-x-3 lg:space-x-4">
//                                     <div className="w-10 h-10 lg:w-12 lg:h-12 bg-purple-100 rounded-lg lg:rounded-xl flex items-center justify-center">
//                                         <MapPin className="w-5 h-5 lg:w-6 lg:h-6 text-purple-600" />
//                                     </div>
//                                     <div>
//                                         <p className="font-semibold text-gray-900 text-sm lg:text-base">Sector 34 Exhibition Ground</p>
//                                         <p className="text-gray-600 text-xs lg:text-sm">Chandigarh, India</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="bg-white p-6 lg:p-8 rounded-xl lg:rounded-2xl shadow-lg">
//                             <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-4 lg:mb-6">Why Startup Mela?</h3>
//                             <div className="space-y-3 lg:space-y-4">
//                                 <div className="flex items-center space-x-3">
//                                     <div className="w-6 h-6 lg:w-8 lg:h-8 bg-blue-100 rounded-full flex items-center justify-center">
//                                         <Users className="w-3 h-3 lg:w-4 lg:h-4 text-blue-600" />
//                                     </div>
//                                     <p className="text-black text-sm lg:text-base">500+ Attendees</p>
//                                 </div>
//                                 <div className="flex items-center space-x-3">
//                                     <div className="w-6 h-6 lg:w-8 lg:h-8 bg-green-100 rounded-full flex items-center justify-center">
//                                         <Building className="w-3 h-3 lg:w-4 lg:h-4 text-green-600" />
//                                     </div>
//                                     <p className="text-black text-sm lg:text-base">100+ Startups</p>
//                                 </div>
//                                 <div className="flex items-center space-x-3">
//                                     <div className="w-6 h-6 lg:w-8 lg:h-8 bg-purple-100 rounded-full flex items-center justify-center">
//                                         <Target className="w-3 h-3 lg:w-4 lg:h-4 text-purple-600" />
//                                     </div>
//                                     <p className="text-black text-sm lg:text-base">50+ Investors</p>
//                                 </div>
//                                 <div className="flex items-center space-x-3">
//                                     <div className="w-6 h-6 lg:w-8 lg:h-8 bg-orange-100 rounded-full flex items-center justify-center">
//                                         <Star className="w-3 h-3 lg:w-4 lg:h-4 text-orange-600" />
//                                     </div>
//                                     <p className="text-black text-sm lg:text-base">3 Days of Innovation</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default RegistrationPage;
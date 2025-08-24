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
            color: 'blue',
            gradient: 'from-blue-500 to-indigo-500',
            bgColor: 'bg-blue-50',
            borderColor: 'border-blue-200',
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
            color: 'blue',
            gradient: 'from-green-500 to-emerald-500',
            bgColor: 'bg-blue-50',
            borderColor: 'border-blue-200',
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
            color: 'blue',
            gradient: 'from-purple-500 to-violet-500',
            bgColor: 'bg-blue-50',
            borderColor: 'border-blue-200',
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
            color: 'blue',
            gradient: 'from-orange-500 to-red-500',
            bgColor: 'bg-blue-50',
            borderColor: 'border-blue-200',
            whoFor: 'Growth-stage startups wanting both customer visibility and investor access',
            features: [
                'Everything in the Startup Stall Pass',
                'One team member pass upgraded for full access to the Hub (Networking & Pitching Lounge)',
                'Opportunity to apply for pitching slots (not guaranteed)'
            ],
            isPremium: true
        },
        {
            id: 'stall-stage-lounge',
            name: 'Stall + Stage Lounge Pass',
            price: '₹40,000',
            icon: Mic,
            color: 'blue',
            gradient: 'from-pink-500 to-rose-500',
            bgColor: 'bg-blue-50',
            borderColor: 'border-blue-200',
            whoFor: 'Startups who want both strong customer presence and high visibility on stage',
            features: [
                'Everything in the Stall + Lounge Pass',
                'A confirmed slot on the Spotlight Stage for product demo / announcement',
                'Priority branding in the Marketplace and event promotions',
                'Two additional team passes (one with Lounge access)'
            ],
            isPremium: true
        },
        {
            id: 'vip-all-access',
            name: 'All-Access VIP Pass',
            price: '₹50,000',
            icon: Crown,
            color: 'blue',
            gradient: 'from-yellow-500 to-orange-500',
            bgColor: 'bg-blue-50',
            borderColor: 'border-blue-200',
            whoFor: 'Startups and businesses that want it all. The ultimate package for maximum impact',
            features: [
                'Everything in the Stall + Lounge Pass',
                'A guaranteed pitching slot in front of investors',
                'A dedicated feature on the Spotlight Stage (e.g., a 10-minute product demo or launch announcement)',
                'Premium stall location',
                'Four team member passes (two with Lounge access)',
                'Priority access to all workshops and sessions'
            ],
            isPremium: true
        }
    ];

    return (
        <div className="min-h-screen bg-[#FDF9F3]">
            {/* Header Section */}
            <div className="relative overflow-hidden bg-white">
                <div className="absolute inset-0 bg-[#FDF9F3]"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="space-y-6">
                        <div className="text-center">
                            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                                <Calendar className="w-4 h-4 mr-2" />
                                Tickets & Registration
                            </div>
                        </div>

                        <div className="relative right-[20px]">
                            <h1 className="text-[3.3rem] md:text-[3.5rem] font-bold text-gray-900 leading-tight text-left"
                            style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
                            Choose Your Pass
                        </h1>
                        <h1 className="text-[3.2rem] md:text-[3.4rem] font-bold !leading-snug text-gray-900  text-left !mt-0"
                            style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
                            Unlock Your Opportunity
                        </h1>
                        </div>

                        <div className="text-right max-w-xl relative left-[620px] bottom-[95px]">
                            <p className="text-xl text-gray-600 leading-relaxed !mb-0">
                                We Offer several ticket options designed to provide the best
                            </p>
                            <p className="text-xl text-gray-600 !mt-0">
                                experience to all from curious visitors to ambitious founders
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

                {/* Ticket Options */}
                <div className="space-y-12 relative bottom-[30px]">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Select Your Pass</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Each pass is carefully crafted to maximize your event experience and ROI
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                        {ticketOptions.map((ticket) => {
                            const IconComponent = ticket.icon;
                            const isSelected = selectedPass === ticket.id;

                            return (
                                <div
                                    key={ticket.id}
                                    className={`relative bg-[#E8E8E8] rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 cursor-pointer transform hover:scale-[1.02] flex flex-col h-full ${
                                        isSelected 
                                            ? `${ticket.borderColor} ring-4 ring-${ticket.color}-200` 
                                            : 'border-gray-100 hover:border-gray-200'
                                    } ${
                                        ticket.isPremium 
                                            ? 'shadow-xl ring-2 ring-gradient-to-r from-indigo-200 to-purple-200 bg-gradient-to-br from-white to-gray-50' 
                                            : ''
                                    }`}
                                    onClick={() => setSelectedPass(ticket.id)}
                                    style={ticket.isPremium ? {
                                        background: '#E8E8E8',
                                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(99, 102, 241, 0.1)'
                                    } : {}}
                                >

                                    <div className="p-8 space-y-6 flex-1 flex flex-col">
                                        {/* Header */}
                                        <div className="text-center space-y-4">
                                            <div className={`w-16 h-16 ${ticket.bgColor} rounded-2xl flex items-center justify-center mx-auto ${ticket.isPremium ? 'ring-2 ring-indigo-100' : ''}`}>
                                                <IconComponent className={`w-8 h-8 text-${ticket.color}-600`} />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-black">{ticket.name}</h3>
                                                <p className={`text-3xl font-bold text-${ticket.color}-600 mt-2`}>{ticket.price}</p>
                                            </div>
                                        </div>

                                        {/* Who it's for */}
                                        <div className={`${ticket.bgColor} p-4 rounded-xl ${ticket.isPremium ? 'ring-1 ring-indigo-100' : ''}`}>
                                            <p className="text-sm font-semibold text-black mb-2">Who it's for:</p>
                                            <p className={`text-sm text-${ticket.color}-800`}>{ticket.whoFor}</p>
                                        </div>

                                        {/* Features - This will grow to fill available space */}
                                        <div className="space-y-3 flex-1">
                                            <p className="font-semibold text-gray-900">What's included:</p>
                                            {ticket.features.map((feature, index) => (
                                                <div key={index} className="flex items-start space-x-3">
                                                    <CheckCircle className={`w-5 h-5 text-${ticket.color}-500 flex-shrink-0 mt-0.5`} />
                                                    <p className="text-sm text-black leading-relaxed">{feature}</p>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Select Button - This stays at the bottom */}
                                        <div className="pt-4">
                                            <button
                                                className={`w-full py-4 rounded-xl font-semibold transition-all duration-500 transform hover:scale-105 hover:shadow-lg active:scale-95 ${
                                                    isSelected
                                                        ? `bg-gradient-to-r ${ticket.gradient} text-white shadow-lg hover:shadow-xl`
                                                        : `border-2 ${ticket.borderColor} text-${ticket.color}-600 hover:bg-${ticket.color}-50 hover:border-${ticket.color}-300 hover:shadow-md`
                                                } ${
                                                    ticket.isPremium && !isSelected 
                                                        ? `hover:bg-gradient-to-r hover:${ticket.gradient} hover:text-white hover:border-transparent` 
                                                        : ''
                                                }`}
                                                style={{
                                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                                }}
                                                onMouseEnter={(e) => {
                                                    if (!isSelected) {
                                                        e.target.style.transform = 'scale(1.05) translateY(-2px)';
                                                        e.target.style.boxShadow = '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
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
                                                        <CheckCircle className="w-5 h-5" />
                                                        <span>Selected</span>
                                                    </span>
                                                ) : (
                                                    <span className="flex items-center justify-center space-x-2">
                                                        <span>Select This Pass</span>
                                                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-12">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-gray-900">Event Details</h2>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                                        <Calendar className="w-6 h-6 text-indigo-600" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">January 16-18, 2025</p>
                                        <p className="text-gray-600">Thursday to Saturday</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                                        <Clock className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">10:00 AM - 8:00 PM</p>
                                        <p className="text-gray-600">Daily Schedule</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                                        <MapPin className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Sector 34 Exhibition Ground</p>
                                        <p className="text-gray-600">Chandigarh, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#E8E8E8] p-8 rounded-2xl shadow-lg">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Why Startup Mela?</h3>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                        <Users className="w-4 h-4 text-blue-600" />
                                    </div>
                                    <p className="text-black">500+ Attendees</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                        <Building className="w-4 h-4 text-green-600" />
                                    </div>
                                    <p className="text-black">100+ Startups</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                        <Target className="w-4 h-4 text-purple-600" />
                                    </div>
                                    <p className="text-black">50+ Investors</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                                        <Star className="w-4 h-4 text-orange-600" />
                                    </div>
                                    <p className="text-black">3 Days of Innovation</p>
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
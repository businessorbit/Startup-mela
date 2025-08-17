import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Play, Star, ArrowRight, Building, Target, Network, Award, TrendingUp, Handshake, CheckCircle, Crown, Zap } from 'lucide-react';

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
            ]
        },
        {
            id: 'startup-stall',
            name: 'Startup Stall Pass',
            price: '₹20,000',
            icon: Building,
            color: 'green',
            gradient: 'from-green-500 to-emerald-500',
            bgColor: 'bg-green-50',
            borderColor: 'border-green-200',
            whoFor: 'Early-stage startups looking for maximum visibility and customer interaction',
            features: [
                'A dedicated stall space in the Marketplace for three days to showcase your product/service',
                'Two team member passes with General Entry access',
                'Listing in the official event directory'
            ]
        },
        {
            id: 'lounge-pitching',
            name: 'Lounge + Pitching Access Pass',
            price: '₹25,000',
            icon: Target,
            color: 'purple',
            gradient: 'from-purple-500 to-violet-500',
            bgColor: 'bg-purple-50',
            borderColor: 'border-purple-200',
            whoFor: 'Founders focused on networking and fundraising who may not need a physical stall',
            features: [
                'One all-access pass to the exclusive Hub (Networking & Pitching Lounge)',
                'A guaranteed slot in one of our curated Investor Pitching Sessions',
                'Access to the investor and speaker list',
                'Includes General Entry access'
            ]
        },
        {
            id: 'stall-lounge',
            name: 'Stall + Lounge Pass',
            price: '₹35,000',
            icon: Handshake,
            color: 'orange',
            gradient: 'from-orange-500 to-red-500',
            bgColor: 'bg-orange-50',
            borderColor: 'border-orange-200',
            whoFor: 'Growth-stage startups wanting both customer visibility and investor access',
            features: [
                'Everything in the Startup Stall Pass',
                'One team member pass upgraded for full access to the Hub (Networking & Pitching Lounge)',
                'Opportunity to apply for pitching slots (not guaranteed)'
            ]
        },
        {
            id: 'vip-all-access',
            name: 'All-Access VIP Pass',
            price: '₹50,000',
            icon: Crown,
            color: 'yellow',
            gradient: 'from-yellow-500 to-orange-500',
            bgColor: 'bg-yellow-50',
            borderColor: 'border-yellow-200',
            whoFor: 'Startups and businesses that want it all. The ultimate package for maximum impact',
            features: [
                'Everything in the Stall + Lounge Pass',
                'A guaranteed pitching slot in front of investors',
                'A dedicated feature on the Spotlight Stage (e.g., a 10-minute product demo or launch announcement)',
                'Premium stall location',
                'Four team member passes (two with Lounge access)',
                'Priority access to all workshops and sessions'
            ],
            popular: true
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
                            <Calendar className="w-4 h-4 mr-2" />
                            Tickets & Registration
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                            Choose Your Pass. Unlock Your Opportunity.
                        </h1>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            We offer a range of ticket options designed to provide the best experience for every attendee,
                            from curious visitors to ambitious founders. Find the perfect pass for your goals.
                        </p>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-10 right-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl"></div>
                <div className="absolute bottom-10 left-10 w-16 h-16 bg-indigo-200/40 rounded-full blur-lg"></div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

                {/* Ticket Options */}
                <div className="space-y-12">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Select Your Experience</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Each pass is carefully crafted to maximize your event experience and ROI. Choose the one that aligns with your goals.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                        {ticketOptions.map((ticket) => {
                            const IconComponent = ticket.icon;
                            const isSelected = selectedPass === ticket.id;

                            return (
                                <div
                                    key={ticket.id}
                                    className={`relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 cursor-pointer transform hover:scale-[1.02] ${isSelected ? `${ticket.borderColor} ring-4 ring-${ticket.color}-200` : 'border-gray-100 hover:border-gray-200'
                                        } ${ticket.popular ? 'ring-2 ring-yellow-300' : ''}`}
                                    onClick={() => setSelectedPass(ticket.id)}
                                >
                                    {/* Popular Badge */}
                                    {ticket.popular && (
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2">
                                                <Star className="w-4 h-4" />
                                                <span>Most Popular</span>
                                            </div>
                                        </div>
                                    )}

                                    <div className="p-8 space-y-6">
                                        {/* Header */}
                                        <div className="text-center space-y-4">
                                            <div className={`w-16 h-16 ${ticket.bgColor} rounded-2xl flex items-center justify-center mx-auto`}>
                                                <IconComponent className={`w-8 h-8 text-${ticket.color}-600`} />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-gray-900">{ticket.name}</h3>
                                                <p className={`text-3xl font-bold text-${ticket.color}-600 mt-2`}>{ticket.price}</p>
                                            </div>
                                        </div>

                                        {/* Who it's for */}
                                        <div className={`${ticket.bgColor} p-4 rounded-xl`}>
                                            <p className="text-sm font-semibold text-gray-800 mb-2">Who it's for:</p>
                                            <p className={`text-sm text-${ticket.color}-800`}>{ticket.whoFor}</p>
                                        </div>

                                        {/* Features */}
                                        <div className="space-y-3">
                                            <p className="font-semibold text-gray-900">What's included:</p>
                                            {ticket.features.map((feature, index) => (
                                                <div key={index} className="flex items-start space-x-3">
                                                    <CheckCircle className={`w-5 h-5 text-${ticket.color}-500 flex-shrink-0 mt-0.5`} />
                                                    <p className="text-sm text-gray-700 leading-relaxed">{feature}</p>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Select Button */}
                                        <button
                                            className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${isSelected
                                                ? `bg-gradient-to-r ${ticket.gradient} text-white shadow-lg`
                                                : `border-2 ${ticket.borderColor} text-${ticket.color}-600 hover:bg-${ticket.color}-50`
                                                }`}
                                        >
                                            {isSelected ? 'Selected' : 'Select This Pass'}
                                        </button>
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

                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Why Startup Mela?</h3>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                        <Users className="w-4 h-4 text-blue-600" />
                                    </div>
                                    <p className="text-gray-700">500+ Attendees</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                        <Building className="w-4 h-4 text-green-600" />
                                    </div>
                                    <p className="text-gray-700">100+ Startups</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                        <Target className="w-4 h-4 text-purple-600" />
                                    </div>
                                    <p className="text-gray-700">50+ Investors</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                                        <Star className="w-4 h-4 text-orange-600" />
                                    </div>
                                    <p className="text-gray-700">3 Days of Innovation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Special Offers */}
                <div className="bg-white rounded-3xl shadow-lg p-8">
                    <div className="text-center space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-gray-900">Special Offers</h2>
                            <p className="text-lg text-gray-600">Limited time offers to make your registration even more valuable</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200">
                                <div className="space-y-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                                        <Users className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">Group Discount</h3>
                                    <p className="text-gray-700">Register 5 or more General Entry passes and get 20% off</p>
                                    <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold inline-block">
                                        Save ₹20 per pass
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200">
                                <div className="space-y-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto">
                                        <Zap className="w-6 h-6 text-green-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">Early Bird Special</h3>
                                    <p className="text-gray-700">Register before December 31st and get an exclusive welcome kit</p>
                                    <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold inline-block">
                                        Limited Time
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-16 mb-10">
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

                {/* Contact Information */}
                <div className="text-center space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-gray-900">Need Help with Registration?</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Our team is here to help you choose the right pass and answer any questions about the event.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-md mx-auto">
                        <div className="space-y-4">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                                <MapPin className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Contact Support</h3>
                            <div className="space-y-2 text-gray-600">
                                <p>📧 contact@businessorbit.org</p>
                                <p>📞 +91 76968 34279</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-700 mb-10 py-16">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Secure Your Spot?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Join hundreds of entrepreneurs, investors, and innovators at Chandigarh's biggest startup event.
                        Limited spots available!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                            onClick={() => {navigate('./contact')}}
                            disabled={!selectedPass}
                        >
                            {selectedPass ? 'Register Now & Secure Your Spot' : 'Select a Pass to Continue'}
                        </button>
                        <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
                        onClick={() => {navigate('./contact')}}>
                            View Event Details
                        </button>
                    </div>
                    {selectedPass && (
                        <p className="mt-4 text-blue-200 text-sm">
                            Selected: {ticketOptions.find(t => t.id === selectedPass)?.name}
                        </p>
                    )}
                </div>
            </div>


        </div>
    );
};

export default RegistrationPage;

import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Play, Star, Mic, ArrowRight, Building, Target, Network, Award, TrendingUp, Handshake, CheckCircle, Crown, Zap, X, Mail, Phone, User, Building2 } from 'lucide-react';
import { saveRegistration } from '../firebase/database.js';

const RegistrationPage = () => {
    const [selectedPass, setSelectedPass] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        companyName: '',
        selectedType: ''
    });

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

    const handleSelectPass = (item) => {
        setSelectedItem(item);
        setFormData(prev => ({
            ...prev,
            selectedType: item.name
        }));
        setIsModalOpen(true);
        setIsSubmitted(false);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedItem(null);
        setIsSubmitted(false);
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            companyName: '',
            selectedType: ''
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted with data:', formData);
        setIsLoading(true);
        
        try {
            // Save registration data to Firebase
            console.log('Attempting to save registration to Firebase...');
            const result = await saveRegistration(formData);
            console.log('Firebase save result:', result);
            
            if (result.success) {
                console.log('Registration saved successfully:', result.id);
                setIsSubmitted(true);
                // Only set selectedPass after successful form submission
                if (selectedItem) {
                    setSelectedPass(selectedItem.id);
                }
            } else {
                console.error('Failed to save registration:', result.error);
                alert('Failed to save registration. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred. Please try again.');
        } finally {
            setIsLoading(false);
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
            whoFor: 'Attendees interested primarily in exploring the exhibition area (Marketplace).',
            features: [
                'Entry to the exhibition area only.'
            ],
            isPremium: false
        },
        {
            id: 'premium',
            name: 'Premium Entry Pass',
            price: '₹2,500',
            icon: Building,
            color: '[#40403E]',
            gradient: 'from-green-500 to-emerald-500',
            bgColor: 'bg-[#f5f5f5]',
            borderColor: 'border-black',
            whoFor: 'Attendees wanting full access to all talks, events, and shows, in addition to the exhibition.',
            features: [
                'Full access to Arena 1 (all events, speakers, and shows).',
                'Access to the Exhibition area.',
                'Note: Only 1,000 passes available.'
            ],
            isPremium: false
        },
        {
            id: 'business',
            name: 'Business Entry Pass',
            price: '₹7,500',
            icon: Target,
            color: '[#40403E]',
            gradient: 'from-purple-500 to-violet-500',
            bgColor: 'bg-[#f5f5f5]',
            borderColor: 'border-black',
            whoFor: 'Founders, investors, and professionals prioritizing exclusive networking and full event access.',
            features: [
                'Entry to the exclusive Networking Lounge.',
                'Full event access (includes all benefits of the Premium Pass).',
                'Access to the Exhibition area (includes all benefits of the General Pass).',
                'Note: Only 500 passes available.'
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
                        <div className="text-center mb-8 sm:mb-12 lg:mb-14">
                            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-[#828385] text-white rounded-full text-xs sm:text-sm font-semibold">
                                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                                Tickets & Registration
                            </div>
                        </div>

                        {/* Centered layout for both mobile and desktop */}
                        <div className="text-center space-y-4">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] xl:text-[3.2rem] font-bold text-gray-900 leading-tight lg:whitespace-nowrap"
                                style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
                                Choose Your Pass Unlock Your Opportunity
                            </h1>
                            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed px-4 max-w-3xl mx-auto">
                                We Offer several ticket options designed to provide the best experience to all from curious visitors to ambitious founders
                            </p>
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
                                    className={`relative rounded-2xl lg:rounded-3xl bg-[#f5f5f5] shadow-lg hover:shadow-2xl transition-all duration-300 border-2 transform hover:scale-[1.02] flex flex-col h-full ${isSelected
                                        ? `${ticket.borderColor} ring-4 ring-${ticket.color}-200`
                                        : 'border-gray-100 hover:border-[#40403E] hover:border-4'
                                        }`}
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
                                                 onClick={() => handleSelectPass(ticket)}
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

                {/* Registration (Stalls & Pitching) Section */}
                <div className="space-y-8 lg:space-y-12">
                    <div className="text-center space-y-4">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Registration (Stalls & Pitching)</h2>
                    </div>

                    {/* Stalls Section */}
                    <div className="space-y-6">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-left">Stalls</h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 lg:gap-8">
                            {/* 8x8 Stall (Premium Booth) */}
                            <div className="relative rounded-2xl lg:rounded-3xl bg-[#f5f5f5] shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-[#40403E] hover:border-4 cursor-pointer transform hover:scale-[1.02] flex flex-col h-full">
                                <div className="p-6 lg:p-8 space-y-4 lg:space-y-6 flex-1 flex flex-col">
                                    <div className="text-center space-y-3 lg:space-y-4">
                                        <div className="w-12 h-12 lg:w-16 lg:h-16 bg-[#f5f5f5] rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto">
                                            <Building className="w-6 h-6 lg:w-8 lg:h-8 text-[#40403E]-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black"
                                                style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>8x8 Stall (Premium Booth)</h3>
                                        </div>
                                    </div>

                                    <div className="space-y-4 lg:space-y-6 flex-1">
                                        <div className="space-y-2 lg:space-y-3">
                                            <p className="font-semibold text-gray-900 text-sm lg:text-base">Who it's for:</p>
                                            <div className="flex items-start space-x-2 lg:space-x-3">
                                                <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-[#40403E]-500 flex-shrink-0 mt-0.5" />
                                                <p className="text-xs lg:text-sm text-[#40403E]-800 leading-relaxed">
                                                    Established brands, companies launching major products, or those needing significant product display and on-site inventory.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="space-y-2 lg:space-y-3">
                                            <p className="font-semibold text-gray-900 text-sm lg:text-base">What's included:</p>
                                            <div className="space-y-2">
                                                <div className="flex items-start space-x-2 lg:space-x-3">
                                                    <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-[#40403E]-500 flex-shrink-0 mt-0.5" />
                                                    <p className="text-xs lg:text-sm text-black leading-relaxed">Dedicated 8ft x 8ft premium exhibition space</p>
                                                </div>
                                                <div className="flex items-start space-x-2 lg:space-x-3">
                                                    <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-[#40403E]-500 flex-shrink-0 mt-0.5" />
                                                    <p className="text-xs lg:text-sm text-black leading-relaxed">High visibility location on the main floor plan</p>
                                                </div>
                                                <div className="flex items-start space-x-2 lg:space-x-3">
                                                    <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-[#40403E]-500 flex-shrink-0 mt-0.5" />
                                                    <p className="text-xs lg:text-sm text-black leading-relaxed">Power access, basic furniture (table & chairs)</p>
                                                </div>
                                                <div className="flex items-start space-x-2 lg:space-x-3">
                                                    <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-[#40403E]-500 flex-shrink-0 mt-0.5" />
                                                    <p className="text-xs lg:text-sm text-black leading-relaxed">Four (4) Complimentary General Entry Passes</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-3 lg:pt-4 mt-auto">
                                        <div className="text-center">
                                            <p className="text-lg font-bold text-[#40403E]">₹35,000</p>
                                            <p className="text-sm text-gray-600">Availability: 22</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 6x6 Stall (Normal Booth) */}
                            <div className="relative rounded-2xl lg:rounded-3xl bg-[#f5f5f5] shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-[#40403E] hover:border-4 cursor-pointer transform hover:scale-[1.02] flex flex-col h-full">
                                <div className="p-6 lg:p-8 space-y-4 lg:space-y-6 flex-1 flex flex-col">
                                    <div className="text-center space-y-3 lg:space-y-4">
                                        <div className="w-12 h-12 lg:w-16 lg:h-16 bg-[#f5f5f5] rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto">
                                            <Building className="w-6 h-6 lg:w-8 lg:h-8 text-[#40403E]-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black"
                                                style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>6x6 Stall (Normal Booth)</h3>
                                        </div>
                                    </div>

                                    <div className="space-y-4 lg:space-y-6 flex-1">
                                        <div className="space-y-2 lg:space-y-3">
                                            <p className="font-semibold text-gray-900 text-sm lg:text-base">Who it's for:</p>
                                            <div className="flex items-start space-x-2 lg:space-x-3">
                                                <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-[#40403E]-500 flex-shrink-0 mt-0.5" />
                                                <p className="text-xs lg:text-sm text-[#40403E]-800 leading-relaxed">
                                                    Growing startups, SMEs, and companies focused on one-on-one customer demonstrations and lead generation.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="space-y-2 lg:space-y-3">
                                            <p className="font-semibold text-gray-900 text-sm lg:text-base">What's included:</p>
                                            <div className="space-y-2">
                                                <div className="flex items-start space-x-2 lg:space-x-3">
                                                    <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-[#40403E]-500 flex-shrink-0 mt-0.5" />
                                                    <p className="text-xs lg:text-sm text-black leading-relaxed">Dedicated 6ft x 6ft standard exhibition space</p>
                                                </div>
                                                <div className="flex items-start space-x-2 lg:space-x-3">
                                                    <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-[#40403E]-500 flex-shrink-0 mt-0.5" />
                                                    <p className="text-xs lg:text-sm text-black leading-relaxed">Ideal space for a pop-up banner and product display</p>
                                                </div>
                                                <div className="flex items-start space-x-2 lg:space-x-3">
                                                    <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-[#40403E]-500 flex-shrink-0 mt-0.5" />
                                                    <p className="text-xs lg:text-sm text-black leading-relaxed">Power access, basic furniture (table & chairs)</p>
                                                </div>
                                                <div className="flex items-start space-x-2 lg:space-x-3">
                                                    <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-[#40403E]-500 flex-shrink-0 mt-0.5" />
                                                    <p className="text-xs lg:text-sm text-black leading-relaxed">Two (2) Complimentary General Entry Passes</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-3 lg:pt-4 mt-auto">
                                        <div className="text-center">
                                            <p className="text-lg font-bold text-[#40403E]">₹25,000</p>
                                            <p className="text-sm text-gray-600">Availability: 49</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 6x6 Stall (Food Booth) */}
                            <div className="relative rounded-2xl lg:rounded-3xl bg-[#f5f5f5] shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-[#40403E] hover:border-4 cursor-pointer transform hover:scale-[1.02] flex flex-col h-full">
                                <div className="p-6 lg:p-8 space-y-4 lg:space-y-6 flex-1 flex flex-col">
                                    <div className="text-center space-y-3 lg:space-y-4">
                                        <div className="w-12 h-12 lg:w-16 lg:h-16 bg-[#f5f5f5] rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto">
                                            <Building className="w-6 h-6 lg:w-8 lg:h-8 text-[#40403E]-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black"
                                                style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>6x6 Stall (Food Booth)</h3>
                                        </div>
                                    </div>

                                    <div className="space-y-4 lg:space-y-6 flex-1">
                                        <div className="space-y-2 lg:space-y-3">
                                            <p className="font-semibold text-gray-900 text-sm lg:text-base">Who it's for:</p>
                                            <div className="flex items-start space-x-2 lg:space-x-3">
                                                <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-[#40403E]-500 flex-shrink-0 mt-0.5" />
                                                <p className="text-xs lg:text-sm text-[#40403E]-800 leading-relaxed">
                                                    Food and beverage businesses, caterers, or companies selling packaged food and drinks who require a food-grade setup.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="space-y-2 lg:space-y-3">
                                            <p className="font-semibold text-gray-900 text-sm lg:text-base">What's included:</p>
                                            <div className="space-y-2">
                                                <div className="flex items-start space-x-2 lg:space-x-3">
                                                    <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-[#40403E]-500 flex-shrink-0 mt-0.5" />
                                                    <p className="text-xs lg:text-sm text-black leading-relaxed">Dedicated 6ft x 6ft food-grade exhibition space</p>
                                                </div>
                                                <div className="flex items-start space-x-2 lg:space-x-3">
                                                    <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-[#40403E]-500 flex-shrink-0 mt-0.5" />
                                                    <p className="text-xs lg:text-sm text-black leading-relaxed">High-amperage power access and water connection (where available)</p>
                                                </div>
                                                <div className="flex items-start space-x-2 lg:space-x-3">
                                                    <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-[#40403E]-500 flex-shrink-0 mt-0.5" />
                                                    <p className="text-xs lg:text-sm text-black leading-relaxed">Must comply with all local health and safety regulations</p>
                                                </div>
                                                <div className="flex items-start space-x-2 lg:space-x-3">
                                                    <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-[#40403E]-500 flex-shrink-0 mt-0.5" />
                                                    <p className="text-xs lg:text-sm text-black leading-relaxed">Two (2) Complimentary General Entry Passes</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-3 lg:pt-4 mt-auto">
                                        <div className="text-center">
                                            <p className="text-lg font-bold text-[#40403E]">₹25,000</p>
                                            <p className="text-sm text-gray-600">Availability: 30</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 4x2 Table (Starter Desk) */}
                            <div className="relative rounded-2xl lg:rounded-3xl bg-[#f5f5f5] shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-[#40403E] hover:border-4 cursor-pointer transform hover:scale-[1.02] flex flex-col h-full">
                                <div className="p-6 lg:p-8 space-y-4 lg:space-y-6 flex-1 flex flex-col">
                                    <div className="text-center space-y-3 lg:space-y-4">
                                        <div className="w-12 h-12 lg:w-16 lg:h-16 bg-[#f5f5f5] rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto">
                                            <Building className="w-6 h-6 lg:w-8 lg:h-8 text-[#40403E]-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black"
                                                style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>4x2 Table (Starter Desk)</h3>
                                        </div>
                                    </div>

                                    <div className="space-y-4 lg:space-y-6 flex-1">
                                        <div className="space-y-2 lg:space-y-3">
                                            <p className="font-semibold text-gray-900 text-sm lg:text-base">Who it's for:</p>
                                            <div className="flex items-start space-x-2 lg:space-x-3">
                                                <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-[#40403E]-500 flex-shrink-0 mt-0.5" />
                                                <p className="text-xs lg:text-sm text-[#40403E]-800 leading-relaxed">
                                                    Individual entrepreneurs, students, early-stage startups, and non-profits who need a budget-friendly presence.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="space-y-2 lg:space-y-3">
                                            <p className="font-semibold text-gray-900 text-sm lg:text-base">What's included:</p>
                                            <div className="space-y-2">
                                                <div className="flex items-start space-x-2 lg:space-x-3">
                                                    <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-[#40403E]-500 flex-shrink-0 mt-0.5" />
                                                    <p className="text-xs lg:text-sm text-black leading-relaxed">Compact 4ft x 2ft table and dedicated space</p>
                                                </div>
                                                <div className="flex items-start space-x-2 lg:space-x-3">
                                                    <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-[#40403E]-500 flex-shrink-0 mt-0.5" />
                                                    <p className="text-xs lg:text-sm text-black leading-relaxed">Perfect for brochures, laptop demos, and small product display</p>
                                                </div>
                                                <div className="flex items-start space-x-2 lg:space-x-3">
                                                    <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-[#40403E]-500 flex-shrink-0 mt-0.5" />
                                                    <p className="text-xs lg:text-sm text-black leading-relaxed">One (1) Complimentary General Entry Pass</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-3 lg:pt-4 mt-auto">
                                        <div className="text-center">
                                            <p className="text-lg font-bold text-[#40403E]">₹10,000</p>
                                            <p className="text-sm text-gray-600">Availability: 100</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pitching Startups Section */}
                    <div className="space-y-6">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-left">Pitching Startups</h3>
                        <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-6 lg:gap-8 max-w-2xl">
                            {/* Investor Pitch Slot */}
                            <div className="relative rounded-2xl lg:rounded-3xl bg-[#f5f5f5] shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-[#40403E] hover:border-4 cursor-pointer transform hover:scale-[1.02] flex flex-col h-full">
                                <div className="p-6 lg:p-8 space-y-4 lg:space-y-6 flex-1 flex flex-col">
                                    <div className="text-center space-y-3 lg:space-y-4">
                                        <div className="w-12 h-12 lg:w-16 lg:h-16 bg-[#f5f5f5] rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto">
                                            <Target className="w-6 h-6 lg:w-8 lg:h-8 text-[#40403E]-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black"
                                                style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>Investor Pitch Slot</h3>
                                        </div>
                                    </div>

                                    <div className="space-y-4 lg:space-y-6 flex-1">
                                        <div className="space-y-2 lg:space-y-3">
                                            <p className="font-semibold text-gray-900 text-sm lg:text-base">Who it's for:</p>
                                            <div className="flex items-start space-x-2 lg:space-x-3">
                                                <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-[#40403E]-500 flex-shrink-0 mt-0.5" />
                                                <p className="text-xs lg:text-sm text-[#40403E]-800 leading-relaxed">
                                                    Seed-to-Series A startups actively seeking venture capital and ready to pitch their business model to high-profile investors.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="space-y-2 lg:space-y-3">
                                            <p className="font-semibold text-gray-900 text-sm lg:text-base">What's included:</p>
                                            <div className="space-y-2">
                                                <div className="flex items-start space-x-2 lg:space-x-3">
                                                    <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-[#40403E]-500 flex-shrink-0 mt-0.5" />
                                                    <p className="text-xs lg:text-sm text-black leading-relaxed">Guaranteed pitch slot in a private investor session</p>
                                                </div>
                                                <div className="flex items-start space-x-2 lg:space-x-3">
                                                    <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-[#40403E]-500 flex-shrink-0 mt-0.5" />
                                                    <p className="text-xs lg:text-sm text-black leading-relaxed">Access to pitch to a curated group of 50+ investors</p>
                                                </div>
                                                <div className="flex items-start space-x-2 lg:space-x-3">
                                                    <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-[#40403E]-500 flex-shrink-0 mt-0.5" />
                                                    <p className="text-xs lg:text-sm text-black leading-relaxed">Team of 4 access to the Pitching Lounge on the event day</p>
                                                </div>
                                                <div className="flex items-start space-x-2 lg:space-x-3">
                                                    <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-[#40403E]-500 flex-shrink-0 mt-0.5" />
                                                    <p className="text-xs lg:text-sm text-black leading-relaxed">Includes Four (4) Business Entry Passes (Networking Lounge Access)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-3 lg:pt-4 mt-auto">
                                        <div className="text-center">
                                            <p className="text-lg font-bold text-[#40403E]">₹25,000</p>
                                            <p className="text-sm text-gray-600">Availability: 50 seats</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                        <p className="font-semibold text-gray-900 text-sm lg:text-base">February 28 & March 1, 2026</p>
                                        <p className="text-gray-600 text-xs lg:text-sm">Thursday & Friday</p>
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
                                    <p className="text-black text-sm lg:text-base">25,000+ Expected Footfall</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-6 h-6 lg:w-8 lg:h-8 bg-green-100 rounded-full flex items-center justify-center">
                                        <Building className="w-3 h-3 lg:w-4 lg:h-4 text-green-600" />
                                    </div>
                                    <p className="text-black text-sm lg:text-base">5,000+ HNI Attendees</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-6 h-6 lg:w-8 lg:h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                        <Target className="w-3 h-3 lg:w-4 lg:h-4 text-purple-600" />
                                    </div>
                                    <p className="text-black text-sm lg:text-base">500+ Startups</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-6 h-6 lg:w-8 lg:h-8 bg-orange-100 rounded-full flex items-center justify-center">
                                        <Star className="w-3 h-3 lg:w-4 lg:h-4 text-orange-600" />
                                    </div>
                                    <p className="text-black text-sm lg:text-base">50+ Investors</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
                        {!isSubmitted ? (
                            <div className="p-6">
                                {/* Modal Header */}
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900">Registration Form</h3>
                                    <button
                                        onClick={handleCloseModal}
                                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                    >
                                        <X className="w-5 h-5 text-gray-500" />
                                    </button>
                                </div>

                                {/* Selected Item Info */}
                                {selectedItem && (
                                    <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 mb-2">Selected: {selectedItem.name}</h4>
                                        <p className="text-lg font-bold text-[#40403E]">{selectedItem.price}</p>
                                    </div>
                                )}

                                {/* Form */}
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {/* Full Name */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <input
                                                type="text"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#40403E] focus:border-[#40403E] outline-none transition-all duration-200"
                                                placeholder="Enter your full name"
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#40403E] focus:border-[#40403E] outline-none transition-all duration-200"
                                                placeholder="Enter your email"
                                            />
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number *
                                        </label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#40403E] focus:border-[#40403E] outline-none transition-all duration-200"
                                                placeholder="Enter your phone number"
                                            />
                                        </div>
                                    </div>

                                    {/* Company Name */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Company Name (Optional)
                                        </label>
                                        <div className="relative">
                                            <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <input
                                                type="text"
                                                name="companyName"
                                                value={formData.companyName}
                                                onChange={handleInputChange}
                                                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#40403E] focus:border-[#40403E] outline-none transition-all duration-200"
                                                placeholder="Enter your company name"
                                            />
                                        </div>
                                    </div>

                                    {/* Selected Pass/Stall Type */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Selected Stall/Pitching Type *
                                        </label>
                                        <div className="relative">
                                            <Target className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <select
                                                name="selectedType"
                                                value={formData.selectedType}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#40403E] focus:border-[#40403E] outline-none transition-all duration-200 appearance-none bg-white"
                                            >
                                                <option value="">Select your stall/pitching type</option>
                                                <option value="8x8 Stall (Premium Booth)">8x8 Stall (Premium Booth) - ₹35,000</option>
                                                <option value="6x6 Stall (Normal Booth)">6x6 Stall (Normal Booth) - ₹25,000</option>
                                                <option value="6x6 Stall (Food Booth)">6x6 Stall (Food Booth) - ₹25,000</option>
                                                <option value="4x2 Table (Starter Desk)">4x2 Table (Starter Desk) - ₹10,000</option>
                                                <option value="Investor Pitch Slot">Investor Pitch Slot - ₹25,000</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className={`w-full font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg ${
                                                isLoading 
                                                    ? 'bg-gray-400 cursor-not-allowed' 
                                                    : 'bg-[#40403E] hover:bg-[#2a2a28] text-white'
                                            }`}
                                        >
                                            {isLoading ? 'Saving Registration...' : 'Submit Registration'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        ) : (
                            /* Success Message */
                            <div className="p-8 text-center">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Registration Successful!</h3>
                                <p className="text-gray-600 mb-6">
                                    Your registration has been saved successfully. Our team will connect with you in 24 hrs.
                                </p>
                                <button
                                    onClick={handleCloseModal}
                                    className="bg-[#40403E] hover:bg-[#2a2a28] text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200"
                                >
                                    Close
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
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
//                 'Full access to the Marketplace (Exhibition Stalls) for both days',
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
//                 'A dedicated stall space in the Marketplace for both days to showcase your product/service',
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
//                                         <p className="font-semibold text-gray-900 text-sm lg:text-base">February 28 & March 1, 2026</p>
//                                         <p className="text-gray-600 text-xs lg:text-sm">Thursday to Friday</p>
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
//                                     <p className="text-black text-sm lg:text-base">25,000+ Expected Footfall</p>
//                                 </div>
//                                 <div className="flex items-center space-x-3">
//                                     <div className="w-6 h-6 lg:w-8 lg:h-8 bg-green-100 rounded-full flex items-center justify-center">
//                                         <Building className="w-3 h-3 lg:w-4 lg:h-4 text-green-600" />
//                                     </div>
//                                     <p className="text-black text-sm lg:text-base">5,000+ HNI Attendees</p>
//                                 </div>
//                                 <div className="flex items-center space-x-3">
//                                     <div className="w-6 h-6 lg:w-8 lg:h-8 bg-purple-100 rounded-full flex items-center justify-center">
//                                         <Target className="w-3 h-3 lg:w-4 lg:h-4 text-purple-600" />
//                                     </div>
//                                     <p className="text-black text-sm lg:text-base">500+ Startups</p>
//                                 </div>
//                                 <div className="flex items-center space-x-3">
//                                     <div className="w-6 h-6 lg:w-8 lg:h-8 bg-orange-100 rounded-full flex items-center justify-center">
//                                         <Star className="w-3 h-3 lg:w-4 lg:h-4 text-orange-600" />
//                                     </div>
//                                     <p className="text-black text-sm lg:text-base">50+ Investors</p>
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
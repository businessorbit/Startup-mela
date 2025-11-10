//FUlL WORKING CODE - 
// import React from 'react';
// import { Star, Award, Users, Briefcase } from 'lucide-react';
// import { useNavigate } from 'react-router-dom'
// import LogoLoop from '../Animations/LogoLoop.jsx';
// import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
// import { FaChrome } from "react-icons/fa";


// const SponsorsPage = () => {
//     const navigate = useNavigate();
//     // const sponsors = [
//     //     { name: 'Innovate Bank', logo: '🏦', color: 'from-blue-400 to-purple-500' },
//     //     { name: 'TechCorp', logo: '💻', color: 'from-gray-400 to-gray-600' },
//     //     { name: 'Future Ventures', logo: '🚀', color: 'from-green-400 to-blue-500' },
//     //     { name: 'GrowthX Capital', logo: '📈', color: 'from-pink-400 to-red-500' },
//     //     { name: 'Punjab Angels Network', logo: '👼', color: 'from-orange-400 to-yellow-500' }
//     // ];

//     const techLogos = [
//         { node: <SiReact />, title: "React", href: "https://react.dev" },
//         { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
//         { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
//         { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
//     ];

//     const imageLogos = [
//         { src: "/business.png", alt: "Company 1", href: "https://company1.com" },
//         { src: "/edwise.png", alt: "Company 2", href: "https://company2.com" },
//         { src: "/jal.jpeg", alt: "Company 3", href: "https://company3.com" },
//         { src: "/logowithbg.png", alt: "Company 3", href: "https://company3.com" },
//         { src: "/redbull.png", alt: "Company 3", href: "https://company3.com" },
//     ];

//     return (
//         <div className="min-h-screen bg-white pt-6 sm:pt-10">
//             {/* Header Section */}
//             <div className="relative overflow-hidden bg-white">
//                 <div className="absolute inset-0 bg-white opacity-50"></div>
//                 <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-5">
//                     <div className="space-y-4 sm:space-y-6">
//                         {/* Keep this centered */}
//                         <div className="flex justify-center">
//                             <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-[#828385] text-white rounded-full text-xs sm:text-sm font-semibold">
//                                 <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
//                                 Our Partners
//                             </div>
//                         </div>

//                         {/* Flex row: left content vs right content */}
//                         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sm:gap-6">
//                             {/* Left aligned heading + first paragraph */}
//                             <div className="flex-1 w-full">
//                                 <h1
//                                     className="text-2xl sm:text-4xl md:text-6xl font-bold text-gray-900 leading-tight text-center sm:text-left"
//                                     style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}
//                                 >
//                                     Our Sponsors
//                                 </h1>
//                                 <p
//                                     className="text-base sm:text-xl text-gray-600 max-w-3xl leading-relaxed text-center sm:text-left mt-2"
//                                     style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}
//                                 >
//                                     Partners in Building the Future of Entrepreneurship in India
//                                 </p>
//                             </div>

//                             {/* Right aligned additional paragraphs */}
//                             <div className="flex-1 w-full text-center sm:text-right mt-3 sm:mt-5 md:mt-10">
//                                 <p className="text-sm sm:text-lg bg-white text-gray-600 max-w-4xl leading-tight mx-auto sm:ml-auto">
//                                     We are proud to partner with forward-thinking organizations that
//                                 </p>
//                                 <p className="text-sm sm:text-lg bg-white text-gray-600 max-w-4xl leading-tight mx-auto sm:ml-auto">
//                                     are committed to nurturing the growth of the startup ecosystem.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Main Content Section */}
//             <div className="max-w-7xl mx-auto py-6 sm:py-10 px-4 sm:px-6 lg:px-8">
//                 {/* Sponsor Logos Section */}
//                 <div className="mb-10 sm:mb-16">
//                     <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-8 mb-6 sm:mb-8">
                        
//                     </div>
//                 </div>

//                 <LogoLoop className='mb-12 sm:mb-20 ml-0 sm:ml-30'
//                     logos={techLogos}
//                     speed={100}
//                     direction="left"
//                     logoHeight={80} 
//                     gap={50}       
//                     pauseOnHover
//                     scaleOnHover
//                     fadeOut
//                     fadeOutColor="#ffffff"
//                     ariaLabel="Technology partners"
//                 />

//                 {/* Call to Action */}
//                 <div className="text-center mb-10 sm:mb-16">
//                     <h2 className="text-2xl sm:text-4xl flex justify-center md:text-6xl bg-white font-medium text-gray-900 leading-tight text-center"
//                         style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
//                         Want to see your Brand here?
//                     </h2>
//                     <p className="text-center flex justify-center text-sm sm:text-lg text-gray-700 mt-4 sm:mt-6 px-4 sm:px-0"
//                         style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
//                         Partner with Startup Mela and connect with thousands of innovators, early adopters,
//                     </p>
//                     <p className="text-center flex justify-center text-sm sm:text-lg text-gray-700 mb-4 sm:mb-6 px-4 sm:px-0"
//                         style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
//                         and industry leaders. Download our sponsorship
//                         brochure to learn more.
//                     </p>
//                     <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
//                         <button className="px-6 py-3 sm:px-8 sm:py-4 bg-[#828385] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:bg-[#40403E] text-sm sm:text-base"
//                             onClick={() => { navigate('./contact') }}>
//                             Become a Sponsor
//                         </button>
//                     </div>
//                 </div>

//                 {/* Statistics Section */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-0">
//                     <div className="bg-white p-6 sm:p-8 hover:bg-gray-300 text-center rounded-lg sm:rounded-none">
//                         <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
//                             <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
//                         </div>
//                         <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">25+</h3>
//                         <p className="text-gray-600 text-sm sm:text-base">Corporate Partners</p>
//                     </div>

//                     <div className="bg-white p-6 sm:p-8 hover:bg-gray-300 text-center rounded-lg sm:rounded-none">
//                         <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
//                             <Award className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
//                         </div>
//                         <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">$50K+</h3>
//                         <p className="text-gray-600 text-sm sm:text-base">Total Sponsorship</p>
//                     </div>

//                     <div className="bg-white p-6 sm:p-8 hover:bg-gray-300 text-center rounded-lg sm:rounded-none sm:col-span-2 md:col-span-1">
//                         <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
//                             <Users className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
//                         </div>
//                         <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">3</h3>
//                         <p className="text-gray-600 text-sm sm:text-base">Years Partnership</p>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default SponsorsPage;

import React from 'react';
import { Award, Star, Users, Briefcase, CheckCircle, ExternalLink, Phone, Mail, MapPin, Clock, Target, Zap, Shield, Gift, Leaf, Wifi, Car, Printer, CreditCard, Cpu, Camera, Utensils, Coffee } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SponsorshipDeck = () => {
    const navigate = useNavigate();

    const mainSponsorTiers = [
        {
            id: 'title-sponsor',
            name: 'Title Sponsor',
            investment: '₹4 Lakhs',
            availability: '2 Slots',
            color: 'from-blue-600 to-purple-600',
            bgColor: 'bg-[#f5f5f5]',
            borderColor: 'border-[#40403E]',
            icon: <Star className="w-8 h-8" />,
            deliverables: {
                duringEvent: [
                    'Largest and most prominent pod (Prime visibility to 25k+ footfall)',
                    'Marketing and branding across all channels as "Title Sponsor"',
                    'Name and logo on all main LED screens (15-20 times)',
                    '20 standees across all three zones',
                    'Verbal mention after every micro-event',
                    'Marketing agents permitted to market to 5,000+ HNIs',
                    '5 Business Entry Passes',
                    'Present award during award show',
                    'Dedicated collaboration with event influencers'
                ],
                preEvent: [
                    'Company branding across all digital channels (5M+ impressions)',
                    'Co-branding in all event marketing materials',
                    'Name and branding at all pre-event meetups and seminars'
                ],
                postEvent: [
                    'Name included in all "Thank You" communications',
                    'Access to relevant marketing data for follow-ups'
                ]
            }
        },
        {
            id: 'powered-by',
            name: 'Powered By Sponsor',
            investment: '₹2.5 Lakhs',
            availability: '3 Slots',
            color: 'from-green-500 to-emerald-500',
            bgColor: 'bg-[#f5f5f5]',
            borderColor: 'border-[#40403E]',
            icon: <Zap className="w-8 h-8" />,
            deliverables: {
                duringEvent: [
                    '4x4 pod in premium location',
                    'Name and logo on LED screens (10-12 rotations)',
                    '10 standees across the event',
                    'Verbal mention during opening and closing ceremonies',
                    '4 Business Entry Passes'
                ],
                preEvent: [
                    'Logo included in all digital marketing campaigns (2M+ impressions)'
                ],
                postEvent: [
                    'Name included in post-event communications'
                ]
            }
        },
        {
            id: 'co-sponsor',
            name: 'Co-Sponsor',
            investment: '₹1.5 Lakhs',
            availability: 'Multiple Slots',
            color: 'from-purple-500 to-violet-500',
            bgColor: 'bg-[#f5f5f5]',
            borderColor: 'border-[#40403E]',
            icon: <Users className="w-8 h-8" />,
            deliverables: {
                duringEvent: [
                    '4x4 pod in high-traffic area',
                    'Name and logo on LED screens (5-7 rotations)',
                    '5 standees across the event',
                    '3 Premium Entry Passes'
                ],
                preEvent: [
                    'Logo on website and primary social media announcements (1M+ impressions)'
                ],
                postEvent: []
            }
        },
        {
            id: 'co-powered-by',
            name: 'Co-Powered By',
            investment: '₹1 Lakh',
            availability: 'Multiple Slots',
            color: 'from-orange-500 to-red-500',
            bgColor: 'bg-[#f5f5f5]',
            borderColor: 'border-[#40403E]',
            icon: <Briefcase className="w-8 h-8" />,
            deliverables: {
                duringEvent: [
                    '4x4 stall',
                    'Name and logo on LED screens (group rotation)',
                    '2 standees at the event',
                    '2 Premium Entry Passes'
                ],
                preEvent: [
                    'Logo on "Sponsors" section of website',
                    'Logo on shared "Partners" banner at event'
                ],
                postEvent: []
            }
        }
    ];

    const categorySponsors = [
        {
            name: 'Media Partner',
            investment: '₹75,000',
            icon: <Camera className="w-6 h-6" />,
            deliverables: [
                'Official "Media Partner" designation',
                'Dedicated media booth for interviews',
                'Exclusive access to keynote speakers, 50+ investors, 500+ startup founders',
                'Logo on all press releases and priority seating'
            ]
        },
        {
            name: 'Food Partner',
            investment: '₹75,000',
            icon: <Utensils className="w-6 h-6" />,
            deliverables: [
                'Official "Food Partner" designation',
                'Exclusive rights to brand main food court area (25k+ attendees)',
                'Logo on all food-related signage',
                'Special verbal mentions before lunch breaks'
            ]
        },
        {
            name: 'Beverage Partner',
            investment: '₹75,000',
            icon: <Coffee className="w-6 h-6" />,
            deliverables: [
                'Official "Beverage Partner" designation',
                'Exclusive rights to distribute/sell beverages (non-alcoholic)',
                'Branding on all water stations and bars',
                'Option to provide branded water bottles/cups to 5,000+ HNIs'
            ]
        },
        {
            name: 'Telecom Partner',
            investment: '₹75,000',
            icon: <Wifi className="w-6 h-6" />,
            deliverables: [
                'Official "Telecom Partner" designation',
                'Branding as "Official Event Wi-Fi" provider (25k+ users)',
                'Branded charging stations in all 3 zones'
            ]
        },
        {
            name: 'Automobile Partner',
            investment: '₹75,000',
            icon: <Car className="w-6 h-6" />,
            deliverables: [
                'Official "Automobile Partner" designation',
                'Dedicated display area at event entrance for 2-3 vehicles',
                'Logo on all "How to Get Here" and parking signage'
            ]
        },
        {
            name: 'Print Partner',
            investment: '₹75,000',
            icon: <Printer className="w-6 h-6" />,
            deliverables: [
                'Official "Print Partner" designation',
                'Logo prominently featured on all physical printed materials',
                'Includes one 4x4 pod'
            ]
        },
        {
            name: 'Banking Partner',
            investment: '₹75,000',
            icon: <CreditCard className="w-6 h-6" />,
            deliverables: [
                'Official "Banking Partner" designation',
                'Space for branded ATM or financial advisory booth',
                'Direct access to 5,000+ HNIs and 500+ startups',
                'Logo on all on-site and online payment points'
            ]
        },
        {
            name: 'Technology Partner',
            investment: '₹75,000',
            icon: <Cpu className="w-6 h-6" />,
            deliverables: [
                'Official "Technology Partner" designation',
                'Branding on all tech infrastructure',
                'Opportunity to be "Tech Backbone" of the event (25k+ users)'
            ]
        },
        {
            name: 'Gifting Partner',
            investment: '₹75,000',
            icon: <Gift className="w-6 h-6" />,
            deliverables: [
                'Official "Gifting Partner" designation',
                'Exclusive right to place branded gift/voucher in welcome kits',
                'Targeted access to 1,500 premium attendees',
                'Includes one 4x4 pod'
            ]
        },
        {
            name: 'Sustainability Partner',
            investment: '₹75,000',
            icon: <Leaf className="w-6 h-6" />,
            deliverables: [
                'Official "Sustainability Partner" designation',
                'Branding on all recycling and water refill stations',
                'Speaking slot on "Green Business" (agenda permitting)'
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-white pt-6 sm:pt-10">
            {/* Header Section */}
            <div className="relative overflow-hidden bg-white">
                <div className="absolute inset-0 bg-white"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                    <div className="space-y-6">
                        <div className="text-center">
                            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-[#828385] text-white rounded-full text-xs sm:text-sm font-semibold">
                                <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                                Sponsorship Opportunities
                            </div>
                        </div>

                        {/* Mobile: Centered layout, Desktop: Original left-aligned with right description */}
                        <div className="block lg:hidden text-center space-y-4">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
                                style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
                                Become a Sponsor
                            </h1>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-gray-900"
                                style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
                                Partner with Us
                                </h1>
                            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed px-4">
                                Connect with 25,000+ innovators, investors, and industry leaders. 
                                Choose from our comprehensive sponsorship tiers designed to maximize your brand visibility.
                                </p>
                            </div>

                        {/* Desktop: Centered layout */}
                        <div className="hidden lg:block">
                            <div className="text-center space-y-6">
                                <div>
                                    <h1 className="text-[3rem] md:text-[3.2rem] font-bold text-gray-900 leading-tight"
                                        style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
                                        Become a Sponsor
                                    </h1>
                                    <h1 className="text-[2.8rem] md:text-[3rem] font-bold !leading-snug text-gray-900 !mt-0"
                                        style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
                                        Partner with Us
                                    </h1>
                                </div>

                                <div className="max-w-4xl mx-auto">
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        Connect with 25,000+ innovators, investors, and industry leaders. 
                                        Choose from our comprehensive sponsorship tiers designed to maximize your brand visibility.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Sponsor Tiers */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h2 
                        className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
                        style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}
                    >
                        Main Sponsor Tiers
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Select the sponsorship level that best fits your marketing objectives and budget
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {mainSponsorTiers.map((tier, index) => (
                        <div 
                            key={tier.id}
                            className={`${tier.bgColor} ${tier.borderColor} border-2 rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]`}
                        >
                            {/* Tier Header */}
                            <div className="text-center space-y-3 lg:space-y-4 mb-6">
                                <div className={`w-12 h-12 lg:w-16 lg:h-16 ${tier.bgColor} rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto`}>
                                    <div className={`w-6 h-6 lg:w-8 lg:h-8 text-${tier.color.split('-')[1]}-600`}>
                                        {tier.icon}
                                    </div>
                                </div>
                                <div>
                                    <h3 
                                        className="text-lg sm:text-xl lg:text-2xl font-bold text-black"
                                        style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}
                                    >
                                        {tier.name}
                                    </h3>
                                    <p className="text-sm text-gray-600">{tier.availability}</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl lg:text-3xl font-bold text-[#40403E]">{tier.investment}</div>
                    </div>
                </div>

                            {/* Deliverables */}
                            <div className="space-y-4 lg:space-y-6">
                                {Object.entries(tier.deliverables).map(([phase, items]) => (
                                    items.length > 0 && (
                                        <div key={phase}>
                                            <h4 className="font-semibold text-gray-900 text-sm lg:text-base mb-2 lg:mb-3 capitalize">
                                                {phase.replace(/([A-Z])/g, ' $1').trim()}:
                                            </h4>
                                            <ul className="space-y-2">
                                                {items.map((item, itemIndex) => (
                                                    <li key={itemIndex} className="flex items-start space-x-2 lg:space-x-3">
                                                        <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-black flex-shrink-0 mt-0.5" />
                                                        <span className="text-xs lg:text-sm text-black leading-relaxed">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )
                                ))}
                            </div>

                            {/* CTA Button */}
                            <div className="pt-3 lg:pt-4 mt-auto">
                                <button 
                                    className={`w-full py-3 lg:py-4 rounded-full font-semibold transition-all duration-500 transform hover:scale-105 hover:shadow-lg active:scale-95 bg-[#40403E] text-white text-sm lg:text-base`}
                                    onClick={() => navigate('/contact')}
                                >
                                    Choose {tier.name}
                        </button>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>

            {/* Category Sponsors */}
            <div className="bg-[#E7E7E7] py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 
                            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
                            style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}
                        >
                            Category Sponsors
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Specialized partnership opportunities with category exclusivity and targeted audience access
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categorySponsors.map((category, index) => (
                            <div 
                                key={index}
                                className="bg-[#f5f5f5] rounded-2xl lg:rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] border-2 border-gray-100 hover:border-[#40403E] hover:border-4"
                            >
                                <div className="text-center space-y-3 lg:space-y-4 mb-4">
                                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-[#f5f5f5] rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto">
                                        <div className="w-6 h-6 lg:w-8 lg:h-8 text-[#40403E]-600">
                                            {category.icon}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 
                                            className="text-lg sm:text-xl lg:text-2xl font-bold text-black"
                                            style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}
                                        >
                                            {category.name}
                                        </h3>
                                        <p className="text-sm text-gray-600">{category.investment}</p>
                        </div>
                    </div>

                                <ul className="space-y-2 mb-6">
                                    {category.deliverables.map((deliverable, deliverableIndex) => (
                                        <li key={deliverableIndex} className="flex items-start space-x-2 lg:space-x-3">
                                            <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-black flex-shrink-0 mt-0.5" />
                                            <span className="text-xs lg:text-sm text-black leading-relaxed">{deliverable}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button 
                                    className="w-full py-2 px-4 bg-[#40403E] text-white font-semibold rounded-lg hover:bg-[#2a2a28] transition-colors duration-300"
                                    onClick={() => navigate('/contact')}
                                >
                                    Choose {category.name}
                                </button>
                        </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="bg-[#E8E8E8] py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-12 shadow-lg">
                        <div className="text-center space-y-6">
                            <h2 
                                className="text-3xl sm:text-4xl font-bold text-gray-900"
                                style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}
                            >
                                Ready to Partner With Us?
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Contact our partnership team to discuss the best sponsorship option for your brand and objectives.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button 
                                    className="px-8 py-4 bg-[#40403E] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                                    onClick={() => navigate('/contact')}
                                >
                                    <Phone className="w-5 h-5" />
                                    <span>Contact Us</span>
                                </button>
                                <button 
                                    className="px-8 py-4 border-2 border-[#40403E] text-[#40403E] font-semibold rounded-xl hover:bg-[#40403E] hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
                                    onClick={() => navigate('/contact')}
                                >
                                    <Mail className="w-5 h-5" />
                                    <span>Download Brochure</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SponsorshipDeck;
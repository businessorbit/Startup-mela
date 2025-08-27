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
import { Star, Award, Users, Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom'
import LogoLoop from '../Animations/LogoLoop.jsx';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { FaChrome } from "react-icons/fa";


const SponsorsPage = () => {
    const navigate = useNavigate();

    const techLogos = [
        { node: <SiReact />, title: "React", href: "https://react.dev" },
        { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
        { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
        { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    ];

    const imageLogos = [
        { src: "/business.png", alt: "Company 1", href: "https://company1.com" },
        { src: "/edwise2.png", alt: "Company 2", href: "https://company2.com" },
        { src: "/jal.jpeg", alt: "Company 3", href: "https://company3.com" },
        { src: "/logowithbg.png", alt: "Company 4", href: "https://zeerostock.com" },
        { src: "/redbull.png", alt: "Company 5", href: "https://company5.com" },
    ];

    // Combine both logo arrays
    const allLogos = [...techLogos, ...imageLogos];

    return (
        <div className="min-h-screen bg-white pt-6 sm:pt-10">
            {/* Header Section */}
            <div className="relative overflow-hidden bg-white">
                <div className="absolute inset-0 bg-white opacity-50"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-5">
                    <div className="space-y-4 sm:space-y-6">
                        {/* Keep this centered */}
                        <div className="flex justify-center">
                            <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-[#828385] text-white rounded-full text-xs sm:text-sm font-semibold">
                                <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                                Our Partners
                            </div>
                        </div>

                        {/* Flex row: left content vs right content */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sm:gap-6">
                            {/* Left aligned heading + first paragraph */}
                            <div className="flex-1 w-full">
                                <h1
                                    className="text-2xl sm:text-4xl md:text-6xl font-bold text-gray-900 leading-tight text-center sm:text-left"
                                    style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}
                                >
                                    Our Sponsors
                                </h1>
                                <p
                                    className="text-base sm:text-xl text-gray-600 max-w-3xl leading-relaxed text-center sm:text-left mt-2"
                                    style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}
                                >
                                    Partners in Building the Future of Entrepreneurship in India
                                </p>
                            </div>

                            {/* Right aligned additional paragraphs */}
                            <div className="flex-1 w-full text-center sm:text-right mt-3 sm:mt-5 md:mt-10">
                                <p className="text-sm sm:text-lg bg-white text-gray-600 max-w-4xl leading-tight mx-auto sm:ml-auto">
                                    We are proud to partner with forward-thinking organizations that
                                </p>
                                <p className="text-sm sm:text-lg bg-white text-gray-600 max-w-4xl leading-tight mx-auto sm:ml-auto">
                                    are committed to nurturing the growth of the startup ecosystem.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="max-w-7xl mx-auto py-6 sm:py-10 px-4 sm:px-6 lg:px-8">
                {/* Sponsor Logos Section */}
                <div className="mb-10 sm:mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-8 mb-6 sm:mb-8">
                        
                    </div>
                </div>

                {/* Combined Logo Loop - now includes both tech and image logos */}
                <LogoLoop 
                    className='mb-12 sm:mb-20 ml-0 sm:ml-30'
                    logos={imageLogos}
                    speed={100}
                    direction="left"
                    logoHeight={80} 
                    gap={50}       
                    pauseOnHover
                    scaleOnHover
                    fadeOut
                    fadeOutColor="#ffffff"
                    ariaLabel="Technology partners and sponsors"
                />

                {/* Call to Action */}
                <div className="text-center mb-10 sm:mb-16">
                    <h2 className="text-2xl sm:text-4xl flex justify-center md:text-6xl bg-white font-medium text-gray-900 leading-tight text-center"
                        style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
                        Want to see your Brand here?
                    </h2>
                    <p className="text-center flex justify-center text-sm sm:text-lg text-gray-700 mt-4 sm:mt-6 px-4 sm:px-0"
                        style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
                        Partner with Startup Mela and connect with thousands of innovators, early adopters,
                    </p>
                    <p className="text-center flex justify-center text-sm sm:text-lg text-gray-700 mb-4 sm:mb-6 px-4 sm:px-0"
                        style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
                        and industry leaders. Download our sponsorship
                        brochure to learn more.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
                        <button className="px-6 py-3 sm:px-8 sm:py-4 bg-[#828385] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:bg-[#40403E] text-sm sm:text-base"
                            onClick={() => { navigate('./contact') }}>
                            Become a Sponsor
                        </button>
                    </div>
                </div>

                {/* Statistics Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-0">
                    <div className="bg-white p-6 sm:p-8 hover:bg-gray-300 text-center rounded-lg sm:rounded-none">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                            <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">25+</h3>
                        <p className="text-gray-600 text-sm sm:text-base">Corporate Partners</p>
                    </div>

                    <div className="bg-white p-6 sm:p-8 hover:bg-gray-300 text-center rounded-lg sm:rounded-none">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                            <Award className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">$50K+</h3>
                        <p className="text-gray-600 text-sm sm:text-base">Total Sponsorship</p>
                    </div>

                    <div className="bg-white p-6 sm:p-8 hover:bg-gray-300 text-center rounded-lg sm:rounded-none sm:col-span-2 md:col-span-1">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                            <Users className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">3</h3>
                        <p className="text-gray-600 text-sm sm:text-base">Years Partnership</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SponsorsPage;
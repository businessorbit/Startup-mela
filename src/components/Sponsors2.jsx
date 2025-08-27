
// import React from 'react';
// import { Star, Award, Users, Briefcase } from 'lucide-react';
// import { useNavigate } from 'react-router-dom'
// import LogoLoop from '../Animations/LogoLoop.jsx';
// import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
// import { FaChrome } from "react-icons/fa";


// const SponsorsPage = () => {
//     const navigate = useNavigate();
//     const sponsors = [
//         { name: 'Innovate Bank', logo: '🏦', color: 'from-blue-400 to-purple-500' },
//         { name: 'TechCorp', logo: '💻', color: 'from-gray-400 to-gray-600' },
//         { name: 'Future Ventures', logo: '🚀', color: 'from-green-400 to-blue-500' },
//         { name: 'GrowthX Capital', logo: '📈', color: 'from-pink-400 to-red-500' },
//         { name: 'Punjab Angels Network', logo: '👼', color: 'from-orange-400 to-yellow-500' }
//     ];

//     const techLogos = [
//         { node: <SiReact />, title: "React", href: "https://react.dev" },
//         { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
//         { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
//         { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
//     ];

//     // Alternative with image sources
//     const imageLogos = [
//         { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
//         { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
//         { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
//     ];

//     const speakers = [
//         {
//             name: 'Jenny Wilson',
//             role: 'Co-Founder & CEO',
//             company: 'TechVision Inc.',
//             image: '👩‍💼',
//             color: 'from-blue-100 to-indigo-100'
//         },
//         {
//             name: 'Marcus Chen',
//             role: 'Lead Developer',
//             company: 'InnovateLabs',
//             image: '👨‍💻',
//             color: 'from-gray-100 to-blue-100'
//         },
//         {
//             name: 'Sarah Martinez',
//             role: 'Product Manager',
//             company: 'FutureCore',
//             image: '👩‍🎓',
//             color: 'from-orange-100 to-yellow-100',
//             featured: true
//         },
//         {
//             name: 'David Kumar',
//             role: 'Tech Architect',
//             company: 'CloudSync',
//             image: '👨‍🔬',
//             color: 'from-purple-100 to-pink-100'
//         },
//         {
//             name: 'Emma Thompson',
//             role: 'Design Director',
//             company: 'CreativeHub',
//             image: '👩‍🎨',
//             color: 'from-green-100 to-blue-100'
//         }
//     ];

//     return (
//         <div className="min-h-screen bg-[#E7E7E7] pt-10">
//             {/* Header Section */}
//             <div className="relative overflow-hidden bg-[#E7E7E7]">
//                 <div className="absolute inset-0 bg-[#E7E7E7] opacity-50"></div>
//                 <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
//                     <div className="space-y-6">
//                         {/* Keep this centered */}
//                         <div className="flex justify-center">
//                             <div className="inline-flex items-center px-4 py-2 bg-[#828385] text-white rounded-full text-sm font-semibold">
//                                 <Award className="w-4 h-4 mr-2" />
//                                 Our Partners
//                             </div>
//                         </div>

//                         {/* Flex row: left content vs right content */}
//                         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
//                             {/* Left aligned heading + first paragraph */}
//                             <div className="flex-1">
//                                 <h1
//                                     className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight text-left"
//                                     style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}
//                                 >
//                                     Our Sponsors
//                                 </h1>
//                                 <p
//                                     className="text-xl text-gray-600 max-w-3xl leading-relaxed text-left mt-2"
//                                     style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}
//                                 >
//                                     Partners in Building the Future of Entrepreneurship in India
//                                 </p>
//                             </div>

//                             {/* Right aligned additional paragraphs */}
//                             <div className="flex-1 text-right mt-5 md:mt-12">
//                                 <p className="text-lg bg-[#E7E7E7] text-gray-600 max-w-4xl leading-tight ml-auto">
//                                     We are proud to partner with forward-thinking organizations that
//                                 </p>
//                                 <p className="text-lg bg-[#E7E7E7] text-gray-600 max-w-4xl leading-tight ml-auto">
//                                     are committed to nurturing the growth of the startup ecosystem.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Main Content Section */}
//             <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 ">
//                 {/* Sponsor Logos Section */}
//                 <div className="mb-16">
//                     <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
                        
//                     </div>
//                 </div>

//                 <LogoLoop className='mb-20 ml-30'
//                     logos={techLogos}
//                     speed={100}
//                     direction="left"
//                     logoHeight={80}
//                     gap={40}
//                     pauseOnHover
//                     scaleOnHover
//                     fadeOut
//                     fadeOutColor="#ffffff"
//                     ariaLabel="Technology partners"
//                 />

//                 {/* Call to Action */}
//                 <div className="text-center mb-16">
//                     <h2 className="text-4xl flex justify-center md:text-6xl bg-[#E7E7E7] font-medium text-gray-900 leading-tight text-left"
//                         style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
//                         Want to see your Brand here?
//                     </h2>
//                     <p className="text-left flex justify-center text-lg text-gray-700 mt-6"
//                         style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
//                         Partner with Startup Mela and connect with thousands of innovators, early adopters,
//                     </p>
//                     <p className="text-left flex justify-center text-lg text-gray-700 mb-6"
//                         style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
//                         and industry leaders. Download our sponsorship
//                         brochure to learn more.
//                     </p>
//                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                         <button className="px-8 py-4 bg-[#828385] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:bg-[#40403E]"
//                             onClick={() => { navigate('./contact') }}>
//                             Become a Sponsor
//                         </button>
//                     </div>
//                 </div>

//                 {/* Statistics Section */}
//                 <div className="grid grid-cols-1 md:grid-cols-3">
//                     <div className="bg-[#E8E8E8] p-8 hover:bg-gray-300 text-center">
//                         <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
//                             <Briefcase className="w-8 h-8 text-blue-600" />
//                         </div>
//                         <h3 className="text-3xl font-bold text-gray-900 mb-2">25+</h3>
//                         <p className="text-gray-600">Corporate Partners</p>
//                     </div>

//                     <div className="bg-[#E8E8E8] p-8 hover:bg-gray-300 text-center">
//                         <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
//                             <Award className="w-8 h-8 text-green-600" />
//                         </div>
//                         <h3 className="text-3xl font-bold text-gray-900 mb-2">$50K+</h3>
//                         <p className="text-gray-600">Total Sponsorship</p>
//                     </div>

//                     <div className="bg-[#E8E8E8] p-8 hover:bg-gray-300 text-center">
//                         <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-4">
//                             <Users className="w-8 h-8 text-purple-600" />
//                         </div>
//                         <h3 className="text-3xl font-bold text-gray-900 mb-2">3</h3>
//                         <p className="text-gray-600">Years Partnership</p>
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
    const sponsors = [
        { name: 'Innovate Bank', logo: '🏦', color: 'from-blue-400 to-purple-500' },
        { name: 'TechCorp', logo: '💻', color: 'from-gray-400 to-gray-600' },
        { name: 'Future Ventures', logo: '🚀', color: 'from-green-400 to-blue-500' },
        { name: 'GrowthX Capital', logo: '📈', color: 'from-pink-400 to-red-500' },
        { name: 'Punjab Angels Network', logo: '👼', color: 'from-orange-400 to-yellow-500' }
    ];

    const techLogos = [
        { node: <SiReact />, title: "React", href: "https://react.dev" },
        { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
        { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
        { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    ];

    // Alternative with image sources
    const imageLogos = [
        { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
        { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
        { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
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
// import React from 'react';
// import { Star, Award, Users, Briefcase } from 'lucide-react';
// import { useNavigate } from 'react-router-dom'
// import LogoLoop from '../Animations/LogoLoop.jsx';
// import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
// import { FaChrome } from "react-icons/fa";


// const SponsorsPage = () => {
//     const navigate = useNavigate();
//     const sponsors = [
//         { name: 'Innovate Bank', logo: '🏦', color: 'from-blue-400 to-purple-500' },
//         { name: 'TechCorp', logo: '💻', color: 'from-gray-400 to-gray-600' },
//         { name: 'Future Ventures', logo: '🚀', color: 'from-green-400 to-blue-500' },
//         { name: 'GrowthX Capital', logo: '📈', color: 'from-pink-400 to-red-500' },
//         { name: 'Punjab Angels Network', logo: '👼', color: 'from-orange-400 to-yellow-500' }
//     ];

//     const techLogos = [
//         { node: <SiReact />, title: "React", href: "https://react.dev" },
//         { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
//         { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
//         { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
//     ];

//     // Alternative with image sources
//     const imageLogos = [
//         { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
//         { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
//         { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
//     ];

//     const speakers = [
//         {
//             name: 'Jenny Wilson',
//             role: 'Co-Founder & CEO',
//             company: 'TechVision Inc.',
//             image: '👩‍💼',
//             color: 'from-blue-100 to-indigo-100'
//         },
//         {
//             name: 'Marcus Chen',
//             role: 'Lead Developer',
//             company: 'InnovateLabs',
//             image: '👨‍💻',
//             color: 'from-gray-100 to-blue-100'
//         },
//         {
//             name: 'Sarah Martinez',
//             role: 'Product Manager',
//             company: 'FutureCore',
//             image: '👩‍🎓',
//             color: 'from-orange-100 to-yellow-100',
//             featured: true
//         },
//         {
//             name: 'David Kumar',
//             role: 'Tech Architect',
//             company: 'CloudSync',
//             image: '👨‍🔬',
//             color: 'from-purple-100 to-pink-100'
//         },
//         {
//             name: 'Emma Thompson',
//             role: 'Design Director',
//             company: 'CreativeHub',
//             image: '👩‍🎨',
//             color: 'from-green-100 to-blue-100'
//         }
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
//                     logoHeight={80}  // Smaller on mobile
//                     gap={50}         // Smaller gap on mobile
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
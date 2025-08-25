
import React from 'react';
import { Star, Award, Users, Briefcase } from 'lucide-react';
import {useNavigate} from 'react-router-dom'
const SponsorsPage = () => {
  const navigate = useNavigate();
  const sponsors = [
    { name: 'Innovate Bank', logo: '🏦', color: 'from-blue-400 to-purple-500' },
    { name: 'TechCorp', logo: '💻', color: 'from-gray-400 to-gray-600' },
    { name: 'Future Ventures', logo: '🚀', color: 'from-green-400 to-blue-500' },
    { name: 'GrowthX Capital', logo: '📈', color: 'from-pink-400 to-red-500' },
    { name: 'Punjab Angels Network', logo: '👼', color: 'from-orange-400 to-yellow-500' }
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
    <div className="min-h-screen bg-white pt-10">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-white opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="space-y-6">
            {/* Keep this centered */}
            <div className="flex justify-center">
              <div className="inline-flex items-center px-4 py-2 bg-white text-blue-800 rounded-full text-sm font-semibold">
                <Award className="w-4 h-4 mr-2" />
                Our Partners
              </div>
            </div>

            {/* Flex row: left content vs right content */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              {/* Left aligned heading + first paragraph */}
              <div className="flex-1">
                <h1
                  className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight text-left"
                  style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}
                >
                  Our Sponsors
                </h1>
                <p
                  className="text-xl text-gray-600 max-w-3xl leading-relaxed text-left mt-2"
                  style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}
                >
                  Partners in Building the Future of Entrepreneurship in India
                </p>
              </div>

              {/* Right aligned additional paragraphs */}
              <div className="flex-1 text-right mt-5 md:mt-12">
                <p className="text-lg bg-white text-gray-600 max-w-4xl leading-tight ml-auto">
                  We are proud to partner with forward-thinking organizations that
                </p>
                <p className="text-lg bg-white text-gray-600 max-w-4xl leading-tight ml-auto">
                  are committed to nurturing the growth of the startup ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 ">
        {/* Sponsor Logos Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
            {sponsors.map((sponsor, index) => (
              <div
                key={sponsor.name}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-center space-y-4">
                  <div className={`w-16 h-16 mx-auto bg-gradient-to-r ${sponsor.color} rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {sponsor.logo}
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 text-sm">
                    {sponsor.name}
                  </h3>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-2xl transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl bg-white font-medium text-gray-900 leading-tight text-left"
            style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
            Want to see your Brand here?
          </h2>
          <p className="text-left text-lg text-gray-700 mt-6"
          style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
            Partner with Startup Mela and connect with thousands of innovators, early adopters,
          </p>
          <p className="text-left text-lg text-gray-700 mb-6"
          style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
            and industry leaders. Download our sponsorship
            brochure to learn more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-[#E8E8E8] border border-black text-black font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:bg-gray-300"
              onClick={() => { navigate('./contact') }}>
              Become a Sponsor
            </button>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="bg-[#E8E8E8] p-8 hover:bg-gray-300 text-center">
            <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Briefcase className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">25+</h3>
            <p className="text-gray-600">Corporate Partners</p>
          </div>

          <div className="bg-[#E8E8E8] p-8 hover:bg-gray-300 text-center">
            <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Award className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">$50K+</h3>
            <p className="text-gray-600">Total Sponsorship</p>
          </div>

          <div className="bg-[#E8E8E8] p-8 hover:bg-gray-300 text-center">
            <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">3</h3>
            <p className="text-gray-600">Years Partnership</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SponsorsPage;

import React from 'react';
import { Star, Award, Users, Briefcase } from 'lucide-react';

const SponsorsPage = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
              <Award className="w-4 h-4 mr-2" />
              Our Partners
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Our Sponsors
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Partners in Building the Future of Entrepreneurship in India
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-indigo-200/40 rounded-full blur-lg"></div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Description */}
        <div className="text-center mb-5">
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            We are proud to partner with forward-thinking organizations that are committed to nurturing the
            growth of the startup ecosystem.
          </p>
        </div>

        {/* Sponsor Logos Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            (Dummy Sponsor Logos)
          </h2>
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
          <p className="text-lg text-gray-700 mb-6">
            <span className="font-semibold">(Call to Action)</span> Want to see your brand here? Partner with Startup Mela and connect with
            thousands of innovators, early adopters, and industry leaders. Download our sponsorship
            brochure to learn more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:bg-blue-700"
            onClick={() => {navigate('./contact')}}>
              Become a Sponsor
            </button>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
            <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Briefcase className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">25+</h3>
            <p className="text-gray-600">Corporate Partners</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
            <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Award className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">$50K+</h3>
            <p className="text-gray-600">Total Sponsorship</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
            <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">3</h3>
            <p className="text-gray-600">Years Partnership</p>
          </div>
        </div>
      </div>

      {/* Meet the Brain Section */}
      

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-700 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Want to Become a Sponsor?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our community of innovative partners and help shape the future of technology education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            onClick={() => {navigate('./contact')}}>
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorsPage;
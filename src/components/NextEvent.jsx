import React from 'react';
import { Calendar, Clock, MapPin, Users, Play, Star, ArrowRight, Building, Target, Network } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EventDetailsPage = () => {
  const navigate = useNavigate();
  return (
    // <div className="min-h-screen bg-[#FBF6EE]">
    <div className="min-h-screen bg-[#FDF9F3]">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[#FDF9F3]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
              <Calendar className="w-4 h-4 mr-2" />
              Event Details
            </div>
            {/* <div
              className="inline-flex mx-5 items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold"
              onClick={() => {
                navigate('./pastevent');
              }}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Past Events
            </div> */}

            {/* Left aligned heading */}
            
            <h1 className="text-3xl md:text-4xl text-gray-900 leading-tight text-left"
              style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
              All You Need to Know About
            </h1>
            <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 leading-tight text-left mb-0"
              style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
              Chandigarh's
            </h1>
            <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 leading-tight text-left mb-0"
              style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
              Biggest Startup Event
            </h1>

            <div className="text-right max-w-xl relative left-[650px] bottom-[87px]">
              <p className="text-xl text-gray-600 leading-relaxed !mb-0">
                This section provides all the essential information for anyone
              </p>
              <p className="text-xl text-gray-600 !mt-0">
                looking to attend, exhibit at, or sponsor Startup Mela 2025
              </p>
            </div>
          </div>
        </div>


        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-indigo-200/40 rounded-full blur-lg"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 relative bottom-10">

        {/* What Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-0">
          <div className="relative">
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
              <div className="aspect-[7/6] bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center relative">
                {/* Mock image with startup elements */}
                <div className="absolute inset-4 bg-white/20 rounded-2xl backdrop-blur-sm"></div>
                <div className="relative z-10 flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                    <Building className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div className="w-14 h-14 bg-white/75 rounded-full flex items-center justify-center">
                    <Network className="w-7 h-7 text-green-600" />
                  </div>
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group">
                    <Play className="w-8 h-8 text-blue-600 ml-1 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* Decorative corner element */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full shadow-lg"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full shadow-lg"></div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2
                className="text-5xl font-bold text-yellow-500"
                style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}
              >
                What
              </h2>


              <h3 className="text-2xl  text-gray-900"
                style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>What is Startup Mela?</h3>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Startup Mela is the biggest and most dynamic startup festival and business conference in the Tricity region. It's a comprehensive platform featuring:
              </p>
              <div className="space-y-4">
                <div className="bg-[#DCDCDC] p-4 rounded-xl shadow-sm border border-gray-100">
                  <p className="text-black">🏢 A massive exhibition for tech and non-tech startups to showcase their products</p>
                </div>
                <div className="bg-[#DCDCDC] p-4 rounded-xl shadow-sm border border-gray-100">
                  <p className="text-black">💼 An exclusive investor lounge for high-stakes networking and startup funding opportunities</p>
                </div>
                <div className="bg-[#DCDCDC] p-4 rounded-xl shadow-sm border border-gray-100">
                  <p className="text-black">🎯 A center stage for product launches, D2C fashion shows, and influencer meetups</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed font-semibold">
                It is the definitive annual event for the entire business community, from students to seasoned industrialists.
              </p>
            </div>
          </div>
        </div>

        {/* When Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 lg:order-1">
            <div className="space-y-4">
              <h2
                className="text-5xl font-bold text-yellow-500"
                style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}
              >
                When
              </h2>
              <h3 className="text-2xl text-gray-900"
                style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>Mark Your Calendar</h3>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Mark your calendars for three full days packed with opportunities, innovation, and networking experiences.
              </p>
              <div className="bg-[#DCDCDC] p-6 rounded-2xl shadow-lg border border-gray-100 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">January 16-18, 2025</p>
                    <p className="text-gray-600">Thursday, Friday & Saturday</p>
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
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl">
                  <p className="text-blue-800 font-semibold">3 Full Days of Innovation</p>
                  <p className="text-blue-600 text-sm">Experience the ultimate business networking event</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative lg:order-2">
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
              <div className="aspect-[4/3] bg-gradient-to-br from-green-100 to-blue-200 flex items-center justify-center relative">
                {/* Mock calendar/schedule visual */}
                <div className="absolute inset-4 bg-white/20 rounded-2xl backdrop-blur-sm"></div>
                <div className="relative z-10 grid grid-cols-3 gap-4">
                  <div className="w-16 h-16 bg-white/90 rounded-xl flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="w-16 h-16 bg-white/80 rounded-xl flex items-center justify-center">
                    <Clock className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="w-16 h-16 bg-white/75 rounded-xl flex items-center justify-center">
                    <Star className="w-8 h-8 text-yellow-500" />
                  </div>
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group">
                    <Play className="w-8 h-8 text-green-600 ml-1 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* Decorative corner elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-green-400 rounded-full shadow-lg"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-purple-500 rounded-full shadow-lg"></div>
          </div>
        </div>

        {/* Where Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative bg-[#DCDCDC] rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
              <div className="aspect-[5/4] bg-gradient-to-br from-purple-100 to-pink-200 flex items-center justify-center relative">
                {/* Mock venue visual */}
                <div className="absolute inset-4 bg-white/20 rounded-2xl backdrop-blur-sm"></div>
                <div className="relative z-10 flex flex-col items-center space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                      <MapPin className="w-8 h-8 text-purple-600" />
                    </div>
                  </div>
                  <div className="text-center ">
                    <p className="text-white/90 font-semibold">Sector 34 Exhibition Ground</p>
                    <p className="text-white/70 text-sm">Chandigarh</p>
                  </div>
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group">
                    <Play className="w-8 h-8 text-purple-600 ml-1 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* Decorative corner elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-pink-400 rounded-full shadow-lg"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full shadow-lg"></div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2
                className="text-5xl font-bold text-yellow-500"
                style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}
              >
                Where
              </h2>
              <h3 className="text-2xl text-gray-900"
                style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>Find Your Way to Innovation</h3>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                The event will be held at the Sector 34 Exhibition Ground, Chandigarh. Centrally located and easily accessible,
                this expansive venue provides the perfect backdrop for a large-scale festival of innovation.
              </p>
              <div className="bg-[#DCDCDC] p-6 rounded-2xl shadow-lg border border-gray-100 space-y-4">
                <h4 className="font-semibold text-gray-900 text-lg">Sector 34 Exhibition Ground</h4>
                <div className="space-y-3 text-black">
                  <p>📍 Sector 34, Chandigarh, India</p>
                  <p>🚗 Designated paid parking areas available</p>
                  <p>🚌 Well connected by public transport</p>
                  <p>🏢 Expansive venue with ample space for stalls, stages, and networking zones</p>
                  <p>♿ Centrally located and easily accessible</p>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300"
                  onClick={() => { navigate('./contact') }}>
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Why Section */}
        <div className="bg-[#FDF9F3] rounded-3xl p-12">
          <div className="text-left space-y-8">
            <div className="space-y-4">
              <h2
                className="text-6xl font-bold text-green-500"
                style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}
              >
                Why
              </h2>
              <h3
                className="text-4xl font-semibold text-gray-900"
                style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}
              >
                Why Should You Be at Startup Mela?
              </h3>
              <p className="text-lg text-gray-700 max-w-4xl">
                The primary goal of Startup Mela is to dismantle the barriers between
                startups and their audience, creating a space for authentic engagement,
                valuable feedback, and accelerated growth.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-[#DCDCDC] p-8 rounded-2xl shadow-lg 
                      transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-[#E6E6E6]">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Building className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">For Startups</h4>
                <p className="text-gray-700">
                  Gain direct access to customers, generate leads, and find potential
                  co-founders and team members. This is your best chance for market
                  validation and visibility.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#DCDCDC] p-8 rounded-2xl shadow-lg 
                      transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-[#E6E6E6]">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">For Investors</h4>
                <p className="text-gray-700">
                  Discover a curated pipeline of high-potential, vetted startups from
                  across North India. Connect with the next generation of innovative
                  companies.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-[#DCDCDC] p-8 rounded-2xl shadow-lg 
                      transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-[#E6E6E6]">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <Network className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">For Everyone</h4>
                <p className="text-gray-700">
                  Network with the who's who of the business world, learn about emerging
                  industry trends, and get inspired by the next wave of innovation.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-700 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Be Part of Chandigarh's Biggest Startup Event?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't miss out on this opportunity to connect, learn, and innovate with industry leaders and fellow entrepreneurs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              onClick={() => { navigate('./contact') }}>
              Register Now
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
              onClick={() => { navigate('./contact') }}
            >
              View Ticket Options
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPage;
import React from 'react';
import { Calendar, Clock, MapPin, Users, Play, Star, ArrowRight, Building, Target, Network } from 'lucide-react';

const EventDetailsPage = () => {
  const navigate = (path) => {
    console.log(`Navigating to: ${path}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-white"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="text-center space-y-4 sm:space-y-6">
            <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-[#828385] text-white rounded-full text-xs sm:text-sm font-semibold">
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Event Details
            </div>

            <div className="text-left">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-900 leading-tight"
                style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
                All You Need to Know About
              </h1>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[3.2rem] font-semibold text-gray-900 leading-tight mt-4 mb-5"
                style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
                Chandigarh's
              </h1>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[3.2rem] font-semibold text-gray-900 leading-tight mt-5"
                style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
                Biggest Startup Event
              </h1>
            </div>

            {/* Mobile-optimized description */}
            <div className="text-left sm:text-right max-w-full sm:max-w-xl lg:relative lg:left-[530px] lg:bottom-[75px] mt-4 lg:mt-0">
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-0">
                This section provides all the information for anyone who is
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mt-0">
                looking to attend, exhibit at, or sponsor Startup Mela 2025
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Elements - hidden on mobile */}
        <div className="hidden sm:block absolute top-10 right-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl"></div>
        <div className="hidden sm:block absolute bottom-10 left-10 w-16 h-16 bg-indigo-200/40 rounded-full blur-lg"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 lg:space-y-24 relative lg:bottom-10">

        {/* What Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mt-0">
          <div className="relative order-2 lg:order-1">
            <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
              <div className="aspect-[7/6] bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center relative">
                {/* Mock image with startup elements */}
                <div className="absolute inset-2 sm:inset-4 bg-white/20 rounded-xl sm:rounded-2xl backdrop-blur-sm"></div>
                <div className="relative z-10 flex items-center space-x-2 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-white/90 rounded-full flex items-center justify-center">
                    <Building className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-blue-600" />
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/80 rounded-full flex items-center justify-center">
                    <Target className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-yellow-500" />
                  </div>
                  <div className="w-9 h-9 sm:w-11 sm:h-11 lg:w-14 lg:h-14 bg-white/75 rounded-full flex items-center justify-center">
                    <Network className="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 text-green-600" />
                  </div>
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl sm:shadow-2xl hover:scale-110 transition-transform duration-300 group">
                    <Play className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-blue-600 ml-1 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* Decorative corner elements - smaller on mobile */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-full shadow-lg"></div>
            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-blue-500 rounded-full shadow-lg"></div>
          </div>

          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div className="space-y-2 sm:space-y-4">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-medium text-black"
                style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}
              >
                What
              </h2>
              <h3 className="text-lg sm:text-xl lg:text-2xl text-gray-900"
                style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>What is Startup Mela?</h3>
            </div>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Startup Mela is the biggest and most dynamic startup festival and business conference in the Tricity region. It's a comprehensive platform featuring:
              </p>
              <div className="rounded-xl sm:rounded-2xl shadow-lg">
                <div className="bg-[#E8E8E8] p-3 sm:p-4 border">
                  <p className="text-black text-sm sm:text-base">
                    ●  A massive exhibition for tech and non-tech startups to showcase their products
                  </p>
                </div>
                <div className="bg-[#E8E8E8] p-3 sm:p-4 border">
                  <p className="text-black text-sm sm:text-base">
                    ●  An exclusive investor lounge for high-stakes networking and startup funding opportunities
                  </p>
                </div>
                <div className="bg-[#E8E8E8] p-3 sm:p-4 border">
                  <p className="text-black text-sm sm:text-base">
                    ●  A center stage for product launches, D2C fashion shows, and influencer meetups
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* When Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2 sm:space-y-4">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-medium text-black"
                style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}
              >
                When
              </h2>
              <h3 className="text-lg sm:text-xl lg:text-2xl text-gray-900"
                style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>Mark Your Calendar</h3>
            </div>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Mark your calendars for three full days packed with opportunities, innovation, and networking experiences.
              </p>
              <div className="bg-[#E8E8E8] p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 space-y-4">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#E8E8E8] rounded-lg sm:rounded-xl flex items-center justify-center">
                    <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">February 28 & March 1, 2026</p>
                    <p className="text-gray-600 text-xs sm:text-sm">Thursday & Friday</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">10:00 AM - 8:00 PM</p>
                    <p className="text-gray-600 text-xs sm:text-sm">Daily Schedule</p>
                  </div>
                </div>
                <div className="bg-[#E8E8E8] p-3 sm:p-4 rounded-lg sm:rounded-xl">
                  <p className="text-black font-bold text-sm sm:text-base">3 Full Days of Innovation</p>
                  <p className="text-black font-semibold text-xs sm:text-sm">Experience the ultimate business networking event</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
              <div className="aspect-[4/3] bg-gradient-to-br from-green-100 to-blue-200 flex items-center justify-center relative">
                {/* Mock calendar/schedule visual */}
                <div className="absolute inset-2 sm:inset-4 bg-white/20 rounded-xl sm:rounded-2xl backdrop-blur-sm"></div>
                <div className="relative z-10 grid grid-cols-3 gap-2 sm:gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/90 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-blue-600" />
                  </div>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/80 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-green-600" />
                  </div>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/75 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <Star className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-yellow-500" />
                  </div>
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl sm:shadow-2xl hover:scale-110 transition-transform duration-300 group">
                    <Play className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-green-600 ml-1 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* Decorative corner elements */}
            <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 bg-green-400 rounded-full shadow-lg"></div>
            <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-4 h-4 sm:w-6 sm:h-6 bg-purple-500 rounded-full shadow-lg"></div>
          </div>
        </div>

        {/* Where Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative bg-[#E8E8E8] rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
              <div className="aspect-[5/4] bg-gradient-to-br from-purple-100 to-pink-200 flex items-center justify-center relative">
                {/* Mock venue visual */}
                <div className="absolute inset-2 sm:inset-4 bg-white/20 rounded-xl sm:rounded-2xl backdrop-blur-sm"></div>
                <div className="relative z-10 flex flex-col items-center space-y-2 sm:space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/90 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-purple-600" />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-white/90 font-semibold text-sm sm:text-base">Sector 34 Exhibition Ground</p>
                    <p className="text-white/70 text-xs sm:text-sm">Chandigarh</p>
                  </div>
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl sm:shadow-2xl hover:scale-110 transition-transform duration-300 group">
                    <Play className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-purple-600 ml-1 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* Decorative corner elements */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-pink-400 rounded-full shadow-lg"></div>
            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-purple-500 rounded-full shadow-lg"></div>
          </div>

          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div className="space-y-2 sm:space-y-4">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-medium text-black"
                style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}
              >
                Where
              </h2>
              <h3 className="text-lg sm:text-xl lg:text-2xl text-gray-900"
                style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>Find Your Way to Innovation</h3>
            </div>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                The event will be held at the Sector 34 Exhibition Ground, Chandigarh. Centrally located and easily accessible,
                this expansive venue provides the perfect backdrop for a large-scale festival of innovation.
              </p>
              <div className="bg-[#E8E8E8] p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 space-y-4">
                <h4 className="font-semibold text-gray-900 text-base sm:text-lg">Sector 34 Exhibition Ground</h4>
                <div className="space-y-2 sm:space-y-3 text-black text-sm sm:text-base">
                  <p>● Sector 34, Chandigarh, India</p>
                  <p>● Designated paid parking areas available</p>
                  <p>● Well connected by public transport</p>
                  <p>● Expansive venue with ample space for stalls, stages, and networking zones</p>
                  <p>● Centrally located and easily accessible</p>
                </div>
                <button className="w-full bg-[#828385] text-white py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 text-sm sm:text-base"
                  onClick={() => { navigate('./contact') }}>
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Why Section */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
          <div className="text-left space-y-6 sm:space-y-8">
            <div className="space-y-2 sm:space-y-4">
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-medium text-black"
                style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}
              >
                Why
              </h2>
              <h3
                className="text-2xl sm:text-3xl lg:text-4xl text-gray-900"
                style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}
              >
                Why Should You Be at Startup Mela?
              </h3>
              <p className="text-base sm:text-lg text-gray-700 max-w-4xl">
                The primary goal of Startup Mela is to dismantle the barriers between
                startups and their audience, creating a space for authentic engagement,
                valuable feedback, and accelerated growth.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-2">
              {/* Card 1 */}
              <div className="bg-[#E8E8E8] hover:bg-gray-300 p-6 sm:p-8 transition-colors duration-300">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                  <Building className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-blue-600" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">For Startups</h4>
                <p className="text-gray-700 text-sm sm:text-base">
                  Gain direct access to customers, generate leads, and find potential
                  co-founders and team members. This is your best chance for market
                  validation and visibility.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#E8E8E8] hover:bg-gray-300 p-6 sm:p-8 transition-colors duration-300">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                  <Target className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-green-600" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">For Investors</h4>
                <p className="text-gray-700 text-sm sm:text-base">
                  Discover a curated pipeline of high-potential, vetted startups from
                  across North India. Connect with the next generation of innovative
                  companies.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-[#E8E8E8] hover:bg-gray-300 p-6 sm:p-8 transition-colors duration-300 sm:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                  <Network className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-purple-600" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">For Everyone</h4>
                <p className="text-gray-700 text-sm sm:text-base">
                  Network with the who's who of the business world, learn about emerging
                  industry trends, and get inspired by the next wave of innovation.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default EventDetailsPage;
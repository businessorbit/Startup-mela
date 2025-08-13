import React from 'react';
import { Calendar, Clock, MapPin, Users, Play, Star, ArrowRight } from 'lucide-react';

const NextEventPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
              <Calendar className="w-4 h-10 mr-2" />
              Next Event
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Tech Innovation Summit 2025
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get All The Essential Details About Our Upcoming Event In One Place. Whether You're A Returning 
              Attendee Or Considering Joining For The First Time, Here's Everything You Need To Know.
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-indigo-200/40 rounded-full blur-lg"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        
        {/* What Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center relative">
                {/* Mock image with people collaborating */}
                <div className="absolute inset-4 bg-white/20 rounded-2xl backdrop-blur-sm"></div>
                <div className="relative z-10 flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div className="w-14 h-14 bg-white/75 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-7 h-7 text-green-600" />
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
              <h2 className="text-5xl font-bold text-yellow-500 italic">What</h2>
              <h3 className="text-2xl font-semibold text-gray-900">Experience Innovation</h3>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Discover the theme and focus of the event, including key sessions, 
                activities, and highlights designed to inspire and engage.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">500+</p>
                      <p className="text-sm text-gray-600">Attendees</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Star className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">50+</p>
                      <p className="text-sm text-gray-600">Speakers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* When Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 lg:order-1">
            <div className="space-y-4">
              <h2 className="text-5xl font-bold text-blue-500 italic">When</h2>
              <h3 className="text-2xl font-semibold text-gray-900">Mark Your Calendar</h3>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Mark your calendar with the event dates and times—don't miss out on 
                any of the action.
              </p>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">March 15-17, 2025</p>
                    <p className="text-gray-600">3 Days of Innovation</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Daily Schedule</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Innovation Center</p>
                    <p className="text-gray-600">Downtown Tech Hub</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative lg:order-2">
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
              <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-200 flex items-center justify-center relative">
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
                    <MapPin className="w-8 h-8 text-purple-600" />
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
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-200 flex items-center justify-center relative">
                {/* Mock venue visual */}
                <div className="absolute inset-4 bg-white/20 rounded-2xl backdrop-blur-sm"></div>
                <div className="relative z-10 flex flex-col items-center space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                      <MapPin className="w-8 h-8 text-purple-600" />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-white/90 font-semibold">Innovation Center</p>
                    <p className="text-white/70 text-sm">Tech Hub Downtown</p>
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
              <h2 className="text-5xl font-bold text-purple-500 italic">Where</h2>
              <h3 className="text-2xl font-semibold text-gray-900">Find Your Way</h3>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Located in the heart of the tech district, our venue offers 
                state-of-the-art facilities and easy accessibility.
              </p>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 space-y-4">
                <h4 className="font-semibold text-gray-900 text-lg">Innovation Center</h4>
                <div className="space-y-3 text-gray-600">
                  <p>📍 123 Tech Boulevard, Innovation District</p>
                  <p>🚗 Free parking available</p>
                  <p>🚇 Metro accessible - Tech Station</p>
                  <p>♿ Fully accessible facilities</p>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300">
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join the Innovation?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't miss out on this opportunity to connect, learn, and innovate with industry leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Register Now
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextEventPage;
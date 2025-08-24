import React from 'react';
import { Star, Calendar, Clock, Users } from 'lucide-react';

const SpeakersPage = () => {
  const speakers = [
    {
      id: 1,
      image: '👩‍💼',
      title: '5 ERP Implementation Mistakes That Kill Startups',
      description: 'Avoid These Common Pitfalls When Implementing Your First ERP System, Learn From Real Stories',
      author: 'Sarah Martinez',
      date: 'Dec 15, 2024',
      readTime: '8 Min Read',
      category: 'Implementation'
    },
    {
      id: 2,
      image: '👨‍💻',
      title: 'The Complete Guide To Micro-Event ROI',
      description: 'How To Measure Event Success Effectively And Make Your Return On Investment',
      author: 'David Kumar',
      date: 'Dec 18, 2024',
      readTime: '12 Min Read',
      category: 'Analytics'
    },
    {
      id: 3,
      image: '👨‍🎤',
      title: '5 ERP Implementation Mistakes That Kill Startups',
      description: 'Avoid These Common Pitfalls When Implementing Your First ERP System, Learn From Real Stories',
      author: 'Marcus Chen',
      date: 'Dec 20, 2024',
      readTime: '6 Min Read',
      category: 'Implementation'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDF9F3] relative overflow-hidden">
      {/* Holographic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-300 via-pink-200 to-blue-300 opacity-80"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-cyan-200 via-transparent to-purple-200 opacity-60"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-pink-300/30 via-transparent to-blue-300/30"></div>
      
      {/* Holographic shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-white/60 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-300 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-pink-300 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-cyan-300 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-blue-300/60 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Star className="w-8 h-8 text-yellow-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 italic">
              2025 Community Speakers
            </h1>
            <Star className="w-8 h-8 text-yellow-600" />
          </div>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
            Learn From The Best. Our Community Events Featured Industry Leaders, Successful Founders, And Startup Experts Who 
            Shared Their Insights On Scaling Businesses With Smart Technology
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {speakers.map((speaker, index) => (
            <div 
              key={speaker.id}
              className="group relative bg-black/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 border border-white/10"
            >
              {/* Speaker Image/Avatar */}
              <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
                <div className="text-6xl transform group-hover:scale-110 transition-transform duration-500">
                  {speaker.image}
                </div>
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Category badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white font-semibold border border-white/10">
                  {speaker.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300 line-clamp-2">
                  {speaker.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                  {speaker.description}
                </p>
                
                {/* Meta information */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="space-y-1">
                    <p className="text-white font-semibold text-sm">{speaker.author}</p>
                    <div className="flex items-center space-x-4 text-xs text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{speaker.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{speaker.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">50+</h3>
            <p className="text-gray-700 font-medium">Expert Speakers</p>
          </div>
          
          <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mb-4">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">25+</h3>
            <p className="text-gray-700 font-medium">Industry Leaders</p>
          </div>
          
          <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <div className="w-16 h-16 mx-auto bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center mb-4">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">12</h3>
            <p className="text-gray-700 font-medium">Monthly Events</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Ready to Share Your Expertise?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Join our community of thought leaders and inspire the next generation of innovators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                Become a Speaker
              </button>
              <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-gray-800 font-semibold rounded-xl border border-white/30 hover:bg-white/30 transition-all duration-300">
                View All Sessions
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakersPage;
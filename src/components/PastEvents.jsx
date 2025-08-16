import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Play, Star, ArrowRight, Award, TrendingUp, Heart, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PastEventsPage = () => {
    const navigate = useNavigate();
  const [selectedEvent, setSelectedEvent] = useState(null);

  const pastEvents = [
    {
      id: 1,
      title: "AI & Machine Learning Symposium 2024",
      date: "December 8-10, 2024",
      location: "Tech Innovation Hub",
      attendees: 750,
      speakers: 45,
      rating: 4.9,
      image: "from-emerald-100 to-teal-200",
      highlights: ["15 breakthrough presentations", "3 startup pitch sessions", "2 networking galas"],
      description: "A groundbreaking symposium that brought together AI researchers, industry leaders, and students."
    },
    {
      id: 2,
      title: "Sustainable Technology Conference 2024",
      date: "September 22-23, 2024",
      location: "Green Campus Center",
      attendees: 420,
      speakers: 28,
      rating: 4.8,
      image: "from-green-100 to-emerald-200",
      highlights: ["12 eco-innovation showcases", "5 panel discussions", "1 sustainability hackathon"],
      description: "Exploring the intersection of technology and environmental sustainability."
    },
    {
      id: 3,
      title: "Cybersecurity Summit 2024",
      date: "June 15-16, 2024",
      location: "Security Research Facility",
      attendees: 350,
      speakers: 32,
      rating: 4.7,
      image: "from-red-100 to-orange-200",
      highlights: ["8 threat analysis sessions", "4 hands-on workshops", "2 certification tracks"],
      description: "Deep dive into modern cybersecurity challenges and solutions."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center space-y-6">
            <div className="flex justify-center space-x-4 mt-10">
              <div className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-600 rounded-full text-sm font-semibold opacity-60">
                <Calendar className="w-4 h-4 mr-2" />
                Next Event
              </div>
              <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-semibold">
                <Award className="w-4 h-4 mr-2" />
                Past Events
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Our Success Stories
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Relive The Moments That Shaped Our Community. Discover The Impact, Insights, And 
              Incredible Experiences From Our Previous Events.
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-purple-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-indigo-200/40 rounded-full blur-lg"></div>
      </div>

      {/* Stats Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">12+</div>
            <div className="text-gray-600">Events Hosted</div>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">5,200+</div>
            <div className="text-gray-600">Total Attendees</div>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Star className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">4.8</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">250+</div>
            <div className="text-gray-600">Expert Speakers</div>
          </div>
        </div>
      </div>

      {/* Featured Past Events */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Recent Event Highlights</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a look at our most impactful events and the amazing experiences they created.
          </p>
        </div>

        <div className="space-y-16">
          {pastEvents.map((event, index) => (
            <div 
              key={event.id} 
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
            >
              {/* Event Visual */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500 group">
                  <div className={`aspect-video bg-gradient-to-br ${event.image} flex items-center justify-center relative`}>
                    {/* Mock event imagery */}
                    <div className="absolute inset-4 bg-white/20 rounded-2xl backdrop-blur-sm"></div>
                    <div className="relative z-10 flex items-center justify-center space-x-6">
                      <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                        <Users className="w-10 h-10 text-gray-700" />
                      </div>
                      <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center shadow-lg">
                        <Star className="w-8 h-8 text-yellow-500" />
                      </div>
                      <div className="w-18 h-18 bg-white/75 rounded-full flex items-center justify-center shadow-lg">
                        <Award className="w-9 h-9 text-green-600" />
                      </div>
                    </div>
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button 
                        onClick={() => setSelectedEvent(event)}
                        className="w-20 h-20 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300"
                      >
                        <Eye className="w-8 h-8 text-gray-700 ml-1" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Event Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-700 shadow-lg">
                      ⭐ {event.rating}
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-lg"></div>
              </div>
              
              {/* Event Details */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                    {event.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {event.description}
                  </p>
                </div>

                {/* Event Stats */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Users className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-bold text-xl text-gray-900">{event.attendees}</p>
                        <p className="text-sm text-gray-600">Attendees</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <Star className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <p className="font-bold text-xl text-gray-900">{event.speakers}</p>
                        <p className="text-sm text-gray-600">Speakers</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Event Highlights */}
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-2xl border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
                    Event Highlights
                  </h4>
                  <ul className="space-y-2">
                    {event.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <ArrowRight className="w-4 h-4 mr-3 text-green-600" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => setSelectedEvent(event)}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    View Details
                  </button>
                  <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
                    View Photos
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            What Attendees Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
              <div className="flex items-center justify-center mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-lg mb-4 italic">
                "The AI Symposium was incredibly well-organized and insightful. I made valuable connections and learned about cutting-edge research."
              </p>
              <p className="font-semibold">- Sarah Chen, CS Senior</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
              <div className="flex items-center justify-center mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-lg mb-4 italic">
                "Outstanding speakers and engaging workshops. These events consistently exceed expectations and provide real value."
              </p>
              <p className="font-semibold">- Michael Rodriguez, Tech Professional</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Heart className="w-16 h-16 text-red-400 mx-auto mb-4" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't Miss Our Next Event
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our community and be part of the next success story. Stay updated with upcoming events and exclusive opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              View Next Event
            </button>
            <button className="px-8 py-4 border-2 border-gray-400 text-gray-300 font-semibold rounded-xl hover:border-white hover:text-white transition-all duration-300">
              Subscribe for Updates
            </button>
          </div>
        </div>
      </div>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={() => {navigate('/')}}>
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative p-8">
              <button 
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                ✕
              </button>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedEvent.title}</h3>
                  <div className="flex items-center text-gray-600 space-x-4">
                    <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> {selectedEvent.date}</span>
                    <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" /> {selectedEvent.location}</span>
                  </div>
                </div>
                
                <p className="text-gray-700">{selectedEvent.description}</p>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <p className="font-bold text-xl">{selectedEvent.attendees}</p>
                    <p className="text-sm text-gray-600">Attendees</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl">
                    <Star className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <p className="font-bold text-xl">{selectedEvent.speakers}</p>
                    <p className="text-sm text-gray-600">Speakers</p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-xl">
                    <Award className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                    <p className="font-bold text-xl">{selectedEvent.rating}</p>
                    <p className="text-sm text-gray-600">Rating</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Event Highlights</h4>
                  <ul className="space-y-2">
                    {selectedEvent.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <ArrowRight className="w-4 h-4 mr-3 text-green-600" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PastEventsPage;
import React from 'react';
import { Calendar, Clock, MapPin, Users, Play, Star, ArrowRight, Building, Target, Network, Award, TrendingUp, Handshake, Palette, Wrench, Lightbulb } from 'lucide-react';
import {useNavigate} from 'react-router-dom'

const TeamPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="absolute inset-0">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.1" d="M0 400C240 300 480 500 720 400C960 300 1200 500 1440 400V800H0V400Z" fill="url(#gradient1)"/>
            <path opacity="0.1" d="M0 600C360 500 720 700 1440 600V800H0V600Z" fill="url(#gradient2)"/>
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor:'#3B82F6', stopOpacity:0.2}} />
                <stop offset="50%" style={{stopColor:'#8B5CF6', stopOpacity:0.2}} />
                <stop offset="100%" style={{stopColor:'#06B6D4', stopOpacity:0.2}} />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor:'#EC4899', stopOpacity:0.1}} />
                <stop offset="100%" style={{stopColor:'#F59E0B', stopOpacity:0.1}} />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-sm text-gray-700 rounded-full text-sm font-semibold shadow-lg border border-gray-200/50">
              <Users className="w-4 h-4 mr-2 text-blue-600" />
              The Dream Team
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
              Orchestrated by the Best
              <span className="block text-5xl md:text-7xl mt-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                in the Business
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Startup Mela is the result of a strategic collaboration between three industry-leading companies, 
              each a master in their respective field. Meet the experts behind the Mela.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 space-y-32">
        
        {/* Team Introduction */}
        <div className="text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
              Three Companies, One Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our success lies in the perfect synergy of expertise, creativity, and execution. Each partner brings 
              unique strengths to create an unparalleled event experience.
            </p>
          </div>
        </div>

        {/* The Poppy Pie - Marketing & Brand Management */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl transform rotate-1"></div>
          <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden transform -rotate-1 hover:rotate-0 transition-transform duration-700">
            <div className="grid lg:grid-cols-2">
              {/* Content Section */}
              <div className="p-12 lg:p-16 space-y-10">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full text-sm font-semibold shadow-lg">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Marketing & Brand Management
                  </div>
                  <h2 className="text-6xl font-black bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                    The Poppy Pie
                  </h2>
                  <h3 className="text-3xl font-bold text-gray-800">Strategic Marketing Masters</h3>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  As the top marketing and branding agency in the Tricity, The Poppy Pie is the strategic mind behind our outreach. 
                  They ensure that every startup, sponsor, and attendee receives maximum visibility and that the Mela's message resonates far and wide.
                </p>
                
                <div className="space-y-4">
                  {[
                    { icon: Target, title: "Brand Strategy", desc: "Creating compelling narratives and positioning" },
                    { icon: TrendingUp, title: "Digital Marketing", desc: "Multi-channel promotion and engagement" },
                    { icon: Lightbulb, title: "Creative Content", desc: "Engaging visuals and messaging campaigns" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl hover:bg-pink-50 transition-colors duration-300">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md">
                        <item.icon className="w-6 h-6 text-pink-500" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{item.title}</p>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Visual Section */}
              <div className="relative bg-gradient-to-br from-pink-100 to-rose-100 p-12 flex items-center justify-center">
                <div className="relative">
                  <div className="w-80 h-80 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center shadow-xl">
                        <TrendingUp className="w-12 h-12 text-white" />
                      </div>
                      <div className="w-24 h-24 bg-gradient-to-br from-rose-400 to-pink-400 rounded-2xl flex items-center justify-center shadow-xl">
                        <Target className="w-12 h-12 text-white" />
                      </div>
                      <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-rose-400 rounded-2xl flex items-center justify-center shadow-xl">
                        <Lightbulb className="w-12 h-12 text-white" />
                      </div>
                      <div className="w-24 h-24 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl relative">
                        <Play className="w-12 h-12 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full shadow-xl animate-bounce flex items-center justify-center">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navrasa - Event Management */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl transform -rotate-1"></div>
          <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-700">
            <div className="grid lg:grid-cols-2">
              {/* Visual Section */}
              <div className="relative bg-gradient-to-br from-blue-100 to-indigo-100 p-12 flex items-center justify-center lg:order-1">
                <div className="relative">
                  <div className="w-80 h-80 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-xl">
                        <Building className="w-12 h-12 text-white" />
                      </div>
                      <div className="w-24 h-24 bg-gradient-to-br from-indigo-400 to-blue-400 rounded-2xl flex items-center justify-center shadow-xl">
                        <Wrench className="w-12 h-12 text-white" />
                      </div>
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-2xl flex items-center justify-center shadow-xl">
                        <Handshake className="w-12 h-12 text-white" />
                      </div>
                      <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl relative">
                        <Play className="w-12 h-12 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full shadow-xl animate-bounce flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-12 lg:p-16 space-y-10 lg:order-2">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full text-sm font-semibold shadow-lg">
                    <Wrench className="w-4 h-4 mr-2" />
                    Event Management
                  </div>
                  <h2 className="text-6xl font-black bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                    Navrasa
                  </h2>
                  <h3 className="text-3xl font-bold text-gray-800">Seamless Experience Architects</h3>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Recognized as the best event management company in the region, Navrasa is the architect of the seamless 
                  on-ground experience. From logistics and production to hospitality, their expertise guarantees a world-class, 
                  professionally executed event.
                </p>
                
                <div className="space-y-4">
                  {[
                    { icon: Building, title: "Logistics Management", desc: "End-to-end event coordination and planning" },
                    { icon: Wrench, title: "Production Excellence", desc: "Technical setup and equipment management" },
                    { icon: Handshake, title: "Hospitality Services", desc: "Premium guest experience and support" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors duration-300">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md">
                        <item.icon className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{item.title}</p>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Khaba - Architectural Design */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl transform rotate-1"></div>
          <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden transform -rotate-1 hover:rotate-0 transition-transform duration-700">
            <div className="grid lg:grid-cols-2">
              {/* Content Section */}
              <div className="p-12 lg:p-16 space-y-10">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full text-sm font-semibold shadow-lg">
                    <Palette className="w-4 h-4 mr-2" />
                    Architectural Design
                  </div>
                  <h2 className="text-6xl font-black bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
                    Khaba
                  </h2>
                  <h3 className="text-3xl font-bold text-gray-800">Visionary Space Designers</h3>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  An innovative architectural design firm from Chandigarh, Khaba is the visionary behind the event's physical space. 
                  They are transforming the Sector 34 Ground into an immersive, functional, and aesthetically stunning environment 
                  designed for interaction and discovery.
                </p>
                
                <div className="space-y-4">
                  {[
                    { icon: Palette, title: "Space Design", desc: "Creating immersive and functional environments" },
                    { icon: Building, title: "Venue Transformation", desc: "Converting spaces into engaging experiences" },
                    { icon: Star, title: "Aesthetic Excellence", desc: "Stunning visual appeal and user experience" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl hover:bg-purple-50 transition-colors duration-300">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md">
                        <item.icon className="w-6 h-6 text-purple-500" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{item.title}</p>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Visual Section */}
              <div className="relative bg-gradient-to-br from-purple-100 to-indigo-100 p-12 flex items-center justify-center">
                <div className="relative">
                  <div className="w-80 h-80 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-xl">
                        <Palette className="w-12 h-12 text-white" />
                      </div>
                      <div className="w-24 h-24 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-2xl flex items-center justify-center shadow-xl">
                        <Building className="w-12 h-12 text-white" />
                      </div>
                      <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-2xl flex items-center justify-center shadow-xl">
                        <Star className="w-12 h-12 text-white" />
                      </div>
                      <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-xl relative">
                        <Play className="w-12 h-12 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full shadow-xl animate-bounce flex items-center justify-center">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Legacy */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl"></div>
          <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-16 shadow-xl border border-gray-200/50">
            <div className="text-center space-y-16">
              <div className="space-y-8">
                <h2 className="text-5xl font-bold text-gray-900">
                  Our Legacy
                </h2>
                <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                  Built on a Foundation of Successful Events in Chandigarh. We are not new to creating impactful events. 
                  Our team brings a wealth of experience from orchestrating some of the most significant events in the region.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { icon: Award, title: "SFD", desc: "Swarajya First Democracy - A flagship political and social initiative", color: "bg-blue-500" },
                  { icon: Star, title: "Scitron", desc: "The largest and most celebrated festival of Panjab University", color: "bg-green-500" },
                  { icon: TrendingUp, title: "Devfest", desc: "Key collaborator in bringing the globally recognized tech conference to our community", color: "bg-purple-500" },
                  { icon: Lightbulb, title: "Technovate", desc: "The driving force behind the biggest and most competitive hackathon in Chandigarh", color: "bg-orange-500" },
                  { icon: Network, title: "Community Meetups", desc: "A long history of organizing smaller, focused events that foster community and connection", color: "bg-cyan-500" }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                    <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center space-y-12">
          <div className="space-y-8">
            <h2 className="text-5xl font-bold text-gray-900">
              Ready to Connect?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Have questions about our team or want to collaborate? We'd love to hear from you. 
              Reach out to discuss partnerships, media inquiries, or any other opportunities.
            </p>
          </div>
          
          <div className="relative max-w-lg mx-auto">
            <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100">
              <div className="space-y-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <MapPin className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Get In Touch</h3>
                <div className="space-y-4 text-gray-700 text-lg">
                  <p>📧 contact@businessorbit.org</p>
                  <p>📞 +91 76968 34279</p>
                </div>
                <div className="flex space-x-4 justify-center">
                  {[
                    { icon: Network, color: "bg-blue-500" },
                    { icon: Star, color: "bg-pink-500" },
                    { icon: Users, color: "bg-green-500" }
                  ].map((item, index) => (
                    <button key={index} className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300`}>
                      <item.icon className="w-7 h-7 text-white" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-700">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="relative max-w-5xl mx-auto text-center px-6 lg:px-8 py-24">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">
            Experience Excellence in
            <span className="block bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-indigo-700">
              Event Management
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join us at Startup Mela 2025 and witness the perfect collaboration of marketing expertise, 
            event management excellence, and innovative design.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-4 bg-white text-gray-900 font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg"
            onClick={() => {navigate('/contact')}}>
              Register for Event
            </button>
            <button className="px-10 py-4 border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-gray-900 transition-all duration-300 text-lg"
            onClick={() => {navigate('/contact')}}>
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
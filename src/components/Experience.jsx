import React from 'react';
import { Users, Mic, Lightbulb, MapPin, Calendar, Star, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const ExperiencePage = () => {
  const navigate = useNavigate();
  const zones = [
    {
      id: 1,
      title: "The Marketplace",
      subtitle: "Exhibition Stalls",
      icon: <MapPin className="w-8 h-8 text-blue-600" />,
      description: "The bustling heart of Startup Mela. A vibrant marketplace where hundreds of startups will showcase their products and services. From tech gadgets and sustainable goods to fashion and food innovations, the Marketplace is where you can see, touch, and experience the future. It's the ultimate platform for brands to engage directly with their target audience.",
      features: [
        "Interactive product demonstrations",
        "Direct networking with startup founders",
        "Business partnership opportunities",
        "Investor meetups and pitching sessions"
      ],
      color: "bg-gradient-to-br from-blue-50 to-indigo-100",
      accent: "border-blue-200"
    },
    {
      id: 2,
      title: "The Hub",
      subtitle: "Networking & Pitching Lounge",
      icon: <Users className="w-8 h-8 text-green-600" />,
      description: "An exclusive, access-controlled zone designed for high-stakes networking and securing startup funding. The Hub is where founders connect with the capital and mentorship they need to scale their business ventures.",
      features: [
        "Investor Pitching Sessions: Curated, rapid-fire pitching competitions where startups can present their vision to a panel of investors",
        "Roundtable Discussions: Intimate conversations on industry challenges and opportunities, led by seasoned experts",
        "One-on-One Meetings: Pre-scheduled and impromptu meetings between founders, industrialists, and venture capitalists"
      ],
      color: "bg-gradient-to-br from-green-50 to-emerald-100",
      accent: "border-green-200"
    },
    {
      id: 3,
      title: "The Spotlight",
      subtitle: "Center Stage",
      icon: <Mic className="w-8 h-8 text-purple-600" />,
      description: "The energy and entertainment hub of the Mela. The Spotlight stage will feature a dynamic lineup of events designed to draw crowds and create unforgettable moments for this premier startup event.",
      features: [
        "D2C Fashion Runway: A high-energy fashion show where direct-to-consumer apparel and accessory brands can showcase their latest collections",
        "Tech Launchpad: The official launch platform for new apps, software, and tech products, complete with live demos and media coverage",
        "Influencer Conclave: A massive meetup where top influencers and content creators connect with brands and share their secrets to digital growth with the audience",
        "Keynote Speeches & Panel Discussions: Inspiring talks from industry titans and thought-provoking discussions on the future of business"
      ],
      color: "bg-gradient-to-br from-purple-50 to-violet-100",
      accent: "border-purple-200"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              The Experience
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-100 mb-8">
              Three Zones of Opportunity
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-blue-50 mb-8 leading-relaxed">
                A Three-Day Journey Through Innovation: The Ultimate Business Networking Event
              </p>
              <p className="text-lg text-blue-100 leading-relaxed">
                Startup Mela is structured into three distinct, high-energy zones, each offering a unique 
                experience for entrepreneurs, investors, and business leaders to network, pitch, and grow.
              </p>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white opacity-5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-300 opacity-20 rounded-full"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Startup Participants</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">100+</div>
            <div className="text-gray-600">Investors & VCs</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
            <div className="text-gray-600">Pitching Sessions</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">3</div>
            <div className="text-gray-600">Days of Networking</div>
          </div>
        </div>

        {/* Zones Section */}
        <div className="space-y-12">
          {zones.map((zone, index) => (
            <div key={zone.id} className={`rounded-3xl p-8 shadow-lg border-2 ${zone.color} ${zone.accent} transition-all duration-300 hover:shadow-xl hover:scale-[1.02]`}>
              <div className="flex flex-col lg:flex-row gap-8">
                
                {/* Zone Header */}
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-4 mb-6">
                    {zone.icon}
                    <div>
                      <h3 className="text-3xl font-bold text-gray-800">Zone {zone.id}: {zone.title}</h3>
                      <p className="text-lg text-gray-600 font-medium">({zone.subtitle})</p>
                    </div>
                  </div>
                  
                  {/* Zone number badge */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md mb-6">
                    <span className="text-2xl font-bold text-gray-700">{zone.id}</span>
                  </div>
                </div>

                {/* Zone Content */}
                <div className="lg:w-2/3">
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    {zone.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-4">
                    {zone.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-white bg-opacity-70 p-4 rounded-xl">
                        <ChevronRight className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                        <div>
                          {feature.includes(':') ? (
                            <div>
                              <span className="font-semibold text-gray-800">
                                {feature.split(':')[0]}:
                              </span>
                              <span className="text-gray-700 ml-1">
                                {feature.split(':')[1]}
                              </span>
                            </div>
                          ) : (
                            <span className="text-gray-700">{feature}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-20 bg-gradient-to-r from-green-600 to-emerald-700 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Business Network?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of entrepreneurs, investors, and industry leaders at this premier startup event. 
            Experience unparalleled networking opportunities, pitch to top investors, and accelerate your business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-lg"
            onClick={() => {navigate('./contact')}}>
              Register for Startup Mela
            </button>
            <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-indigo-600 transition-colors duration-200"
            onClick={() => {navigate('./contact')}}>
              Investor Registration
            </button>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Startup Mela is the Premier Business Networking Event
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Lightbulb className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Innovation Showcase</h4>
              <p className="text-gray-600">Connect with cutting-edge startups and experience the future of business firsthand</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Elite Networking</h4>
              <p className="text-gray-600">Build valuable connections with investors, mentors, and fellow entrepreneurs</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Star className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Pitching Excellence</h4>
              <p className="text-gray-600">Perfect your pitch and secure funding from top-tier investors and VCs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
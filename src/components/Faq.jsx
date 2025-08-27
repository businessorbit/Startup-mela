import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Users, Briefcase, MapPin, Calendar, Phone, Mail, Car } from 'lucide-react'; 

const FAQPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      id: 1,
      question: "Who should attend Startup Mela?",
      answer: "Startup founders, entrepreneurs, investors, venture capitalists, students, aspiring entrepreneurs, industry professionals, and anyone with a passion for innovation and business networking events.",
      icon: <Users className="w-6 h-6 text-blue-600" />,
      category: "General"
    },
    {
      id: 2,
      question: "What is the difference between the Stall+Lounge Pass and the Lounge+Pitching Pass?",
      answer: "The Stall+Lounge Pass is for startups who want a physical booth to showcase their product and want access to the networking lounge. The Lounge+Pitching Pass is for founders who prioritize fundraising and networking and includes a guaranteed pitching slot, but does not include a stall.",
      icon: <Briefcase className="w-6 h-6 text-green-600" />,
      category: "Passes"
    },
    {
      id: 3,
      question: "How can I register my startup for an exhibition stall?",
      answer: "You can purchase the appropriate pass by clicking the 'Register Now' button on our website. After purchase, you will receive a form to submit your company details for the stall allocation. Spots are limited, so we encourage you to book early!",
      icon: <Calendar className="w-6 h-6 text-purple-600" />,
      category: "Registration"
    },
    {
      id: 4,
      question: "Are there any specific industry tracks or focuses?",
      answer: "While we are open to startups from all sectors, we will have special pavilions and sessions focusing on FinTech, SaaS, HealthTech, D2C Brands, and Sustainable Technology.",
      icon: <HelpCircle className="w-6 h-6 text-indigo-600" />,
      category: "Event Details"
    },
    {
      id: 5,
      question: "Are there any speaking opportunities?",
      answer: "We have a curated lineup of speakers, but we are always open to hearing from unique voices with valuable insights. You can reach out to us at contact@businessorbit.org with your profile and proposed topic.",
      icon: <Phone className="w-6 h-6 text-orange-600" />,
      category: "Speaking"
    },
    {
      id: 6,
      question: "I am an investor. Is there a special pass for me?",
      answer: "Yes, we have a separate, application-based registration for accredited investors which provides complimentary access to the lounge, a list of pitching startups, and other exclusive benefits. Please visit our 'Investor Registration' page.",
      icon: <Briefcase className="w-6 h-6 text-red-600" />,
      category: "Investors"
    },
    {
      id: 7,
      question: "What should I bring to the event?",
      answer: "We recommend bringing business cards, a fully charged power/power bank, a notebook, and an open mind! If you are a startup exhibitor, bring all necessary materials for your booth, including marketing collateral and product demos.",
      icon: <HelpCircle className="w-6 h-6 text-teal-600" />,
      category: "Preparation"
    },
    {
      id: 8,
      question: "Is there parking available at the venue?",
      answer: "Yes, there will be designated paid parking areas near the Sector 34 Ground. We will share a detailed map and parking instructions with registered attendees closer to the event date. We also encourage using public transport or ride-sharing services.",
      icon: <Car className="w-6 h-6 text-yellow-600" />,
      category: "Logistics"
    },
    {
      id: 9,
      question: "Can I volunteer for the event?",
      answer: "Absolutely! We have a number of volunteer opportunities available. It's a great way to experience the event from the inside and network. Please visit the 'Volunteer' section of our website to apply.",
      icon: <Users className="w-6 h-6 text-pink-600" />,
      category: "Volunteer"
    }
  ];

  const categories = [...new Set(faqs.map(faq => faq.category))];

  return (
    <div className="min-h-screen bg-[#E7E7E7]">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-[#E7E7E7] pt-20">
        <div className="absolute inset-0 bg-[#E7E7E7]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <HelpCircle className="w-16 h-16 text-blue-600" />
            </div>
            <h1 className="text-left flex justify-center text-5xl md:text-6xl font-bold text-black mb-6 tracking-tight"
            style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
              Frequently Asked Questions
            </h1>
            {/* <p className="text-left text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl "
            style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
              Everything you need to know about Startup Mela - the premier business networking event 
              connecting entrepreneurs, investors, and industry leaders
            </p> */}
            <div className="flex justify-center flex-wrap gap-2 text-sm">
              <span className="bg-white text-black px-4 py-2 rounded-full">Networking</span>
              <span className="bg-white text-black px-4 py-2 rounded-full">Pitching</span>
              <span className="bg-white text-black px-4 py-2 rounded-full">Startup Event</span>
              <span className="bg-white text-black px-4 py-2 rounded-full">Business</span>
              <span className="bg-white text-black px-4 py-2 rounded-full">Investors</span>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-24 h-24 bg-white opacity-10 rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-white opacity-5 rounded-full"></div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center  rounded-xl p-6 ">
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600 text-sm">Startups Networking</div>
          </div>
          <div className="text-center rounded-xl p-6 ">
            <div className="text-3xl font-bold text-green-600 mb-2">100+</div>
            <div className="text-gray-600 text-sm">Investors Attending</div>
          </div>
          <div className="text-center rounded-xl p-6 ">
            <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
            <div className="text-gray-600 text-sm">Pitching Sessions</div>
          </div>
          <div className="text-center rounded-xl p-6 ">
            <div className="text-3xl font-bold text-indigo-600 mb-2">3</div>
            <div className="text-gray-600 text-sm">Days of Business</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Browse by Category</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <span key={index} className="bg-white text-black px-4 py-2 rounded-full text-sm border">
                {category}
              </span>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={faq.id} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center gap-4 flex-1">
                    {faq.icon}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">
                        Q: {faq.question}
                      </h3>
                      <span className="text-xs bg-gradient-to-r from-gray-100 to-gray-200 text-gray-600 px-3 py-1 rounded-full">
                        {faq.category}
                      </span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className={`transform transition-transform duration-300 ease-in-out ${openFaq === index ? 'rotate-180' : 'rotate-0'}`}>
                      <ChevronDown className="w-6 h-6 text-gray-500" />
                    </div>
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-700 ease-in-out ${
                    openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className={`px-6 pb-6 transform transition-all duration-700 ease-in-out ${
                    openFaq === index ? 'translate-y-0' : '-translate-y-4'
                  }`}>
                    <div className="pl-10 border-l-4 border-blue-200">
                      <p className="text-gray-700 leading-relaxed">
                        <span className="font-semibold text-gray-800">A: </span>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-20 mb-20 bg-white rounded-3xl p-10 text-center text-black">
          <h3 className="text-3xl font-bold mb-6">Still Have Questions About Our Startup Event?</h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Our business networking event team is here to help! Whether you're a startup founder, investor, 
            or industry professional, we're ready to assist with your networking and pitching needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
            <div className="border border-black flex items-center justify-center gap-3 bg-white bg-opacity-20 rounded-xl p-4">
              <Mail className="w-6 h-6" />
              <div>
                <div className="font-semibold">Email Support</div>
                <div className="text-blue-800">contact@businessorbit.org</div>
              </div>
            </div>
            <div className="border border-black flex items-center justify-center gap-3 bg-white bg-opacity-20 rounded-xl p-4">
              <MapPin className="w-6 h-6" />
              <div>
                <div className="font-semibold">Event Location</div>
                <div className="text-blue-800">Sector 34 Ground</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#828385] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#40403E] transition-colors duration-200 shadow-lg">
              Contact Event Team
            </button>
            <button className="bg-[#828385] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#40403E] transition-colors duration-200 shadow-lg">
              Register for Networking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
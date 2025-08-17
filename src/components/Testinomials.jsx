import React from 'react';
import { Star, Users, TrendingUp, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const TestimonialsPage = () => {
  const navigate = useNavigate();
  const testimonials = [
    {
      id: 1,
      title: "A Game-Changer for Our Startup",
      content: "Startup Mela was a pivotal moment for us. The direct access to customers and investors is something you just can't get anywhere else. We secured more genuine leads in three days than we did in the past six months. An absolute must-attend.",
      author: "Priya Sharma",
      position: "Founder at Techify Solutions",
      rating: 5,
      category: "networking"
    },
    {
      id: 2,
      title: "Exceptional Quality of Innovation",
      content: "I've attended numerous startup events across the country, but the caliber of talent and innovation at Startup Mela was truly top-tier. I identified three promising ventures for our portfolio. This event has firmly put Chandigarh on the national startup map.",
      author: "Rajan Verma",
      position: "Partner at GrowthX Capital",
      rating: 5,
      category: "investors"
    },
    {
      id: 3,
      title: "Incredibly Inspiring and Accessible",
      content: "As a student aspiring to be an entrepreneur, Startup Mela was an eye-opener. I had the chance to speak directly with successful founders, see groundbreaking products up close, and feel the energy of the ecosystem. It has motivated me to finally start working on my own idea.",
      author: "Amit Singh",
      position: "Engineering Student",
      rating: 5,
      category: "pitching"
    },
    {
      id: 4,
      title: "Perfect Platform for Business Growth",
      content: "The networking opportunities at this startup event were unparalleled. Our business connected with potential investors and mentors who understood our vision. The pitching sessions were professionally organized, giving every startup a fair chance to shine.",
      author: "Meera Patel",
      position: "Co-founder at InnovateHub",
      rating: 5,
      category: "business"
    },
    {
      id: 5,
      title: "Strategic Networking at Its Best",
      content: "This startup event created the perfect environment for meaningful business connections. The investor network was impressive, and the pitching format allowed for genuine interactions. Our startup gained three potential funding partners in one day.",
      author: "Vikash Kumar",
      position: "CEO at TechVenture",
      rating: 5,
      category: "networking"
    },
    {
      id: 6,
      title: "Where Investors Meet Innovation",
      content: "The quality of startups pitching at this event exceeded my expectations. As an investor, I value events that bring together serious entrepreneurs with viable business models. The networking sessions were structured perfectly for meaningful conversations.",
      author: "Dr. Sarah Chen",
      position: "Managing Director at Future Capital",
      rating: 5,
      category: "investors"
    }
  ];

  const stats = [
    { icon: Users, number: "500+", label: "Networking Connections Made" },
    { icon: TrendingUp, number: "150+", label: "Startup Pitches Delivered" },
    { icon: MessageCircle, number: "50+", label: "Investor Meetings Facilitated" },
    { icon: Star, number: "98%", label: "Business Satisfaction Rate" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Testimonials: Hear From Our Community
          </h1>
          <p className="text-2xl font-semibold text-gray-700 mb-4">
            Don't Just Take Our Word For It.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how our startup event has transformed networking opportunities, 
            connected entrepreneurs with investors, and elevated business pitching 
            experiences across the entrepreneurial community.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <stat.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100">
              {/* Rating Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Testimonial Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                "{testimonial.title}"
              </h3>
              
              {/* Testimonial Content */}
              <p className="text-gray-700 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              
              {/* Author Info */}
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.position}</p>
              </div>
              
              {/* Category Tag */}
              <div className="mt-3">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full capitalize">
                  {testimonial.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Startup Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join our next startup event and experience world-class networking, 
            investor connections, and business pitching opportunities that drive real results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            onClick={() => {navigate('/contact')}}>
              Register for Next Event
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            onClick={() => {navigate('/contact')}}>
              View Event Schedule
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        {/* <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Why Choose Our Startup Events?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-3">Premium Networking</h4>
                <p className="text-gray-600">
                  Connect with industry leaders, successful entrepreneurs, and potential business partners in structured networking sessions.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-3">Investor Access</h4>
                <p className="text-gray-600">
                  Direct access to verified investors actively seeking innovative startups and business opportunities for funding.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <MessageCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-3">Expert Pitching</h4>
                <p className="text-gray-600">
                  Professional pitching sessions with feedback from industry experts to refine your business presentation skills.
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default TestimonialsPage;
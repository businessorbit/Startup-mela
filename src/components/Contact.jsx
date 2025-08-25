import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Clock, 
  Instagram, 
  Linkedin, 
  Twitter, 
  Send, 
  MessageCircle,
  Building,
  Users,
  Star,
  ArrowRight,
  User,
  Briefcase
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-[#FDF9F3]">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-[#FDF9F3]">
        <div className="absolute inset-0 bg-[#FDF9F3] opacity-20"></div>
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center px-6 py-3 bg-[#FDF9F3] backdrop-blur-sm text-blue-800 rounded-full text-sm font-semibold border border-blue-400/30">
              <MessageCircle className="w-4 h-4 mr-2" />
              Get In Touch
            </div>
            
            <div className="space-y-6">
              <h1 className="text-2xl md:text-3xl font-medium text-black leading-tight"
              style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
                Startup Mela 2025
              </h1>
              <h1 className="text-3xl md:text-5xl font-semibold text-black leading-tight"
              style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
                Chandigarh's Premier Startup Event & Entrepreneurship Summit
              </h1>
              <p className="text-xl md:text-2xl text-gray-800 max-w-4xl mx-auto leading-relaxed"
              style={{ fontFamily: "Century Gothic, AppleGothic, sans-serif" }}>
                Join North India's Largest Gathering of Innovators, Investors, and Industry Leaders. Your Journey to Success Starts Here.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-800 leading-relaxed">
                This is more than just a conference; it's a three-day festival of innovation, a launchpad for groundbreaking businesses, 
                and the ultimate networking event in the Tricity. Join us from{' '}
                <span className="font-bold text-black">January 16-18, 2025</span>, at the iconic{' '}
                <span className="font-bold text-black">Sector 34 Ground, Chandigarh</span>, for an unparalleled experience 
                designed to connect, inspire, and accelerate growth for startups and entrepreneurs. Secure your spot at the most 
                anticipated business event of the year.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-[#E8E8E8] text-black font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>See Ticket Options</span>
              </button>
              <button className="px-8 py-4 bg-[#E8E8E8] text-black font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                <Building className="w-5 h-5" />
                <span>Explore Sponsorship</span>
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Contact Information - Column 1 */}
          <div className="lg:col-span-1 space-y-8">
            {/* Event Details Card */}
            <div className="bg-[#E8E8E8] rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                  <Calendar className="w-6 h-6 text-black" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Event Details</h2>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Calendar className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">January 16-18, 2025</p>
                    <p className="text-gray-600">Thursday to Saturday</p>
                    <p className="text-sm text-blue-600 mt-1">3-Day Innovation Festival</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">10:00 AM - 8:00 PM</p>
                    <p className="text-gray-600">Daily Schedule</p>
                    <p className="text-sm text-blue-600 mt-1">Full Day Experience</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">Sector 34 Exhibition Ground</p>
                    <p className="text-gray-600">Chandigarh, India</p>
                    <p className="text-sm text-blue-600 mt-1">Iconic Venue in the Heart of Tricity</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information Card */}
            <div className="bg-[#E8E8E8] rounded-2xl shadow-lg p-8 border border-indigo-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                  <MessageCircle className="w-6 h-6 text-black" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email:</p>
                    <a href="mailto:contact@businessorbit.org" className="text-indigo-600 hover:text-indigo-800 transition-colors break-all">
                      contact@businessorbit.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone:</p>
                    <a href="tel:+917696834279" className="text-blue-600 hover:text-green-800 transition-colors">
                      +91 76968 34279
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Card */}
            <div className="bg-[#E8E8E8] rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12  rounded-xl flex items-center justify-center mr-4">
                  <Star className="w-6 h-6 text-black" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Follow Us</h2>
              </div>
              
              <div className="space-y-4">
                <a href="#" className="flex items-center space-x-4 p-4 bg-[#E8E8E8] rounded-xl hover:from-pink-100 hover:to-purple-100 transition-all duration-300 group">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Instagram className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Instagram</p>
                    <p className="text-gray-600 text-sm">Follow us for updates</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-colors" />
                </a>

                <a href="#" className="flex items-center space-x-4 p-4 bg-[#E8E8E8] rounded-xl hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 group">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                    <Linkedin className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">LinkedIn</p>
                    <p className="text-gray-600 text-sm">Professional networking</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-indigo-600 transition-colors" />
                </a>

                <a href="#" className="flex items-center space-x-4 p-4 bg-[#E8E8E8] rounded-xl hover:from-blue-100 hover:to-sky-100 transition-all duration-300 group">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-sky-500 rounded-lg flex items-center justify-center">
                    <Twitter className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Twitter/X</p>
                    <p className="text-gray-600 text-sm">Latest news & updates</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-600 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form - Column 2 & 3 */}
          <div className="lg:col-span-2">
            <div className="bg-[#E8E8E8] rounded-2xl shadow-xl p-8 lg:p-12 border border-gray-100 h-fit">
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Get In Touch</h2>
                </div>
                <p className="text-gray-600 text-lg">
                  Have questions about Startup Mela 2025? Need help with registration or sponsorship opportunities? 
                  We're here to help make your experience unforgettable.
                </p>
              </div>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-3">
                      Full Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-800" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-[#E8E8E8] pl-10 pr-4 py-4 border border-gray-800 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-900"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-3">
                      Email Address *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-800" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-10 bg-[#E8E8E8] pr-4 py-4 border border-gray-800 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-900"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-3">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-gray-800" />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-[#E8E8E8] pl-10 pr-4 py-4 border border-gray-800 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-900"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-3">
                      Subject *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Briefcase className="h-5 w-5 text-gray-800" />
                      </div>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full bg-[#E8E8E8] pl-10 pr-4 py-4 border border-gray-800 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-900 appearance-none "
                      >
                        <option value="">Select a subject</option>
                        <option value="registration">Registration Query</option>
                        <option value="sponsorship">Sponsorship Opportunity</option>
                        <option value="speaking">Speaking Opportunity</option>
                        <option value="media">Media & Press</option>
                        <option value="partnership">Partnership</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 bg-[#E8E8E8] py-4 border border-gray-800 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical text-gray-900"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-gray-300 text-black font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </div>
            </div>

            {/* Stats Card */}
            <div className="mt-8 bg-[#E8E8E8] rounded-2xl shadow-lg p-8 text-gray-700">
              <h3 className="text-2xl font-bold mb-8 text-center">Why Startup Mela 2025?</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-7 h-7" />
                  </div>
                  <p className="text-3xl font-bold">500+</p>
                  <p className="text-sm opacity-90">Attendees</p>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Building className="w-7 h-7" />
                  </div>
                  <p className="text-3xl font-bold">100+</p>
                  <p className="text-sm opacity-90">Startups</p>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Star className="w-7 h-7" />
                  </div>
                  <p className="text-3xl font-bold">50+</p>
                  <p className="text-sm opacity-90">Investors</p>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Calendar className="w-7 h-7" />
                  </div>
                  <p className="text-3xl font-bold">3</p>
                  <p className="text-sm opacity-90">Days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ContactPage;
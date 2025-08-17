// // import React, { useState } from 'react';
// // import { ChevronDown } from 'lucide-react';

// // const ContactPage = () => {
// //   const [formData, setFormData] = useState({
// //     firstName: '',
// //     lastName: '',
// //     email: '',
// //     phoneNumber: '',
// //     message: '',
// //     countryCode: 'US'
// //   });

// //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

// //   const countryCodes = [
// //     { code: 'US', flag: '🇺🇸', dialCode: '+1' },
// //     { code: 'CA', flag: '🇨🇦', dialCode: '+1' },
// //     { code: 'GB', flag: '🇬🇧', dialCode: '+44' },
// //     { code: 'AU', flag: '🇦🇺', dialCode: '+61' },
// //     { code: 'IN', flag: '🇮🇳', dialCode: '+91' },
// //   ];

// //   const selectedCountry = countryCodes.find(country => country.code === formData.countryCode);

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData(prev => ({
// //       ...prev,
// //       [name]: value
// //     }));
// //   };

// //   const handleCountrySelect = (countryCode) => {
// //     setFormData(prev => ({
// //       ...prev,
// //       countryCode
// //     }));
// //     setIsDropdownOpen(false);
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log('Form submitted:', formData);
// //     // Handle form submission here
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16 px-6">
// //       <div className="max-w-2xl mx-auto">
// //         {/* Header Section */}
// //         <div className="text-center mb-12">
// //           <p className="text-blue-600 text-sm font-medium mb-4 uppercase tracking-wide">
// //             Contact us
// //           </p>
// //           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
// //             Get in touch
// //           </h1>
// //           <p className="text-gray-600 text-lg">
// //             We'd love to hear from you. Please fill out this form.
// //           </p>
// //         </div>

// //         {/* Contact Form */}
// //         <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
// //           <form onSubmit={handleSubmit} className="space-y-6">
// //             {/* First Name and Last Name Row */}
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //               <div>
// //                 <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
// //                   First name
// //                 </label>
// //                 <input
// //                   type="text"
// //                   id="firstName"
// //                   name="firstName"
// //                   value={formData.firstName}
// //                   onChange={handleInputChange}
// //                   placeholder="First name"
// //                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
// //                 />
// //               </div>
// //               <div>
// //                 <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
// //                   Last name
// //                 </label>
// //                 <input
// //                   type="text"
// //                   id="lastName"
// //                   name="lastName"
// //                   value={formData.lastName}
// //                   onChange={handleInputChange}
// //                   placeholder="Last name"
// //                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
// //                 />
// //               </div>
// //             </div>

// //             {/* Email */}
// //             <div>
// //               <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
// //                 Email
// //               </label>
// //               <input
// //                 type="email"
// //                 id="email"
// //                 name="email"
// //                 value={formData.email}
// //                 onChange={handleInputChange}
// //                 placeholder="you@company.com"
// //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
// //               />
// //             </div>

// //             {/* Phone Number */}
// //             <div>
// //               <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
// //                 Phone number
// //               </label>
// //               <div className="flex">
// //                 {/* Country Code Dropdown */}
// //                 <div className="relative">
// //                   <button
// //                     type="button"
// //                     onClick={() => setIsDropdownOpen(!isDropdownOpen)}
// //                     className="flex items-center gap-2 px-3 py-3 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50 hover:bg-gray-100 transition-colors"
// //                   >
// //                     <span className="text-lg">{selectedCountry?.flag}</span>
// //                     <span className="text-sm font-medium text-gray-700">{selectedCountry?.code}</span>
// //                     <ChevronDown className="w-4 h-4 text-gray-500" />
// //                   </button>
                  
// //                   {isDropdownOpen && (
// //                     <div className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 min-w-32">
// //                       {countryCodes.map((country) => (
// //                         <button
// //                           key={country.code}
// //                           type="button"
// //                           onClick={() => handleCountrySelect(country.code)}
// //                           className="flex items-center gap-2 w-full px-3 py-2 hover:bg-gray-50 transition-colors"
// //                         >
// //                           <span className="text-lg">{country.flag}</span>
// //                           <span className="text-sm font-medium text-gray-700">{country.code}</span>
// //                           <span className="text-sm text-gray-500">{country.dialCode}</span>
// //                         </button>
// //                       ))}
// //                     </div>
// //                   )}
// //                 </div>

// //                 {/* Phone Input */}
// //                 <input
// //                   type="tel"
// //                   id="phoneNumber"
// //                   name="phoneNumber"
// //                   value={formData.phoneNumber}
// //                   onChange={handleInputChange}
// //                   placeholder="+1 (555) 000-0000"
// //                   className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
// //                 />
// //               </div>
// //             </div>

// //             {/* Message */}
// //             <div>
// //               <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
// //                 Message
// //               </label>
// //               <textarea
// //                 id="message"
// //                 name="message"
// //                 value={formData.message}
// //                 onChange={handleInputChange}
// //                 rows="4"
// //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors resize-none"
// //                 placeholder="Leave us a message..."
// //               />
// //             </div>

// //             {/* Privacy Policy Agreement */}
// //             <div className="flex items-start gap-3">
// //               <input
// //                 type="checkbox"
// //                 id="privacy"
// //                 className="mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
// //                 required
// //               />
// //               <label htmlFor="privacy" className="text-sm text-gray-600">
// //                 You agree to our friendly{' '}
// //                 <a href="#" className="text-blue-600 hover:text-blue-700 underline">
// //                   privacy policy
// //                 </a>
// //                 .
// //               </label>
// //             </div>

// //             {/* Submit Button */}
// //             <button
// //               type="submit"
// //               className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
// //             >
// //               Send message
// //             </button>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ContactPage;

// import React, { useState } from 'react';
// import { 
//   Mail, 
//   Phone, 
//   MapPin, 
//   Calendar, 
//   Clock, 
//   Instagram, 
//   Linkedin, 
//   Twitter, 
//   Send, 
//   MessageCircle,
//   Building,
//   Users,
//   Star,
//   ArrowRight
// } from 'lucide-react';

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     subject: '',
//     message: ''
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log('Form submitted:', formData);
//     alert('Thank you for your message! We will get back to you soon.');
//     // Reset form
//     setFormData({
//       name: '',
//       email: '',
//       phone: '',
//       subject: '',
//       message: ''
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
//       {/* Hero Section */}
//       <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900">
//         <div className="absolute inset-0 bg-black opacity-20"></div>
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//           <div className="text-center space-y-8">
//             <div className="inline-flex items-center px-4 py-2 bg-blue-100/10 backdrop-blur-sm text-blue-200 rounded-full text-sm font-semibold border border-blue-400/30">
//               <MessageCircle className="w-4 h-4 mr-2" />
//               Get In Touch
//             </div>
            
//             <div className="space-y-6">
//               <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
//                 Startup Mela 2025: Chandigarh's Premier Startup Event & Entrepreneurship Summit
//               </h1>
//               <p className="text-xl md:text-2xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
//                 Join North India's Largest Gathering of Innovators, Investors, and Industry Leaders. Your Journey to Success Starts Here.
//               </p>
//             </div>

//             <div className="max-w-4xl mx-auto">
//               <p className="text-lg text-blue-100 leading-relaxed">
//                 This is more than just a conference; it's a three-day festival of innovation, a launchpad for groundbreaking businesses, 
//                 and the ultimate networking event in the Tricity. Join us from{' '}
//                 <span className="font-bold text-white">January 16-18, 2025</span>, at the iconic{' '}
//                 <span className="font-bold text-white">Sector 34 Ground, Chandigarh</span>, for an unparalleled experience 
//                 designed to connect, inspire, and accelerate growth for startups and entrepreneurs. Secure your spot at the most 
//                 anticipated business event of the year.
//               </p>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
//                 <Calendar className="w-5 h-5" />
//                 <span>See Ticket Options</span>
//               </button>
//               <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-purple-900 transition-all duration-300 flex items-center justify-center space-x-2">
//                 <Building className="w-5 h-5" />
//                 <span>Explore Sponsorship</span>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Decorative Elements */}
//         <div className="absolute top-20 right-20 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"></div>
//         <div className="absolute bottom-20 left-20 w-24 h-24 bg-purple-400/30 rounded-full blur-lg"></div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="grid lg:grid-cols-2 gap-16">
          
//           {/* Contact Information */}
//           <div className="space-y-12">
//             {/* Event Details */}
//             <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
//               <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
//                 <Calendar className="w-8 h-8 text-blue-600 mr-3" />
//                 Event Details
//               </h2>
              
//               <div className="space-y-6">
//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
//                     <Calendar className="w-6 h-6 text-blue-600" />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-gray-900 text-lg">January 16-18, 2025</p>
//                     <p className="text-gray-600">Thursday to Saturday</p>
//                     <p className="text-sm text-blue-600 mt-1">3-Day Innovation Festival</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
//                     <Clock className="w-6 h-6 text-green-600" />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-gray-900 text-lg">10:00 AM - 8:00 PM</p>
//                     <p className="text-gray-600">Daily Schedule</p>
//                     <p className="text-sm text-green-600 mt-1">Full Day Experience</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
//                     <MapPin className="w-6 h-6 text-purple-600" />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-gray-900 text-lg">Sector 34 Exhibition Ground</p>
//                     <p className="text-gray-600">Chandigarh, India</p>
//                     <p className="text-sm text-purple-600 mt-1">Iconic Venue in the Heart of Tricity</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Contact Information */}
//             <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl shadow-lg p-8 border border-indigo-100">
//               <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h2>
              
//               <div className="space-y-6">
//                 <div className="flex items-center space-x-4">
//                   <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
//                     <Mail className="w-6 h-6 text-indigo-600" />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-gray-900">Email:</p>
//                     <a href="mailto:contact@businessorbit.org" className="text-indigo-600 hover:text-indigo-800 transition-colors">
//                       contact@businessorbit.org
//                     </a>
//                   </div>
//                 </div>

//                 <div className="flex items-center space-x-4">
//                   <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
//                     <Phone className="w-6 h-6 text-green-600" />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-gray-900">Phone:</p>
//                     <a href="tel:+917696834279" className="text-green-600 hover:text-green-800 transition-colors">
//                       +91 76968 34279
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Social Media */}
//             <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
//               <h2 className="text-2xl font-bold text-gray-900 mb-6">Follow Us</h2>
              
//               <div className="space-y-4">
//                 <a href="#" className="flex items-center space-x-4 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl hover:from-pink-100 hover:to-purple-100 transition-all duration-300 group">
//                   <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
//                     <Instagram className="w-6 h-6 text-white" />
//                   </div>
//                   <div className="flex-1">
//                     <p className="font-semibold text-gray-900">Instagram</p>
//                     <p className="text-gray-600 text-sm">Follow us for updates</p>
//                   </div>
//                   <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
//                 </a>

//                 <a href="#" className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 group">
//                   <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
//                     <Linkedin className="w-6 h-6 text-white" />
//                   </div>
//                   <div className="flex-1">
//                     <p className="font-semibold text-gray-900">LinkedIn</p>
//                     <p className="text-gray-600 text-sm">Professional networking</p>
//                   </div>
//                   <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors" />
//                 </a>

//                 <a href="#" className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-sky-50 rounded-xl hover:from-blue-100 hover:to-sky-100 transition-all duration-300 group">
//                   <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-sky-500 rounded-xl flex items-center justify-center">
//                     <Twitter className="w-6 h-6 text-white" />
//                   </div>
//                   <div className="flex-1">
//                     <p className="font-semibold text-gray-900">Twitter/X</p>
//                     <p className="text-gray-600 text-sm">Latest news & updates</p>
//                   </div>
//                   <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-sky-600 transition-colors" />
//                 </a>
//               </div>
//             </div>

//             {/* Quick Stats */}
//             <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl shadow-lg p-8 text-white">
//               <h3 className="text-2xl font-bold mb-6">Why Startup Mela 2025?</h3>
//               <div className="grid grid-cols-2 gap-6">
//                 <div className="text-center">
//                   <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
//                     <Users className="w-6 h-6" />
//                   </div>
//                   <p className="text-2xl font-bold">500+</p>
//                   <p className="text-sm opacity-90">Attendees</p>
//                 </div>
//                 <div className="text-center">
//                   <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
//                     <Building className="w-6 h-6" />
//                   </div>
//                   <p className="text-2xl font-bold">100+</p>
//                   <p className="text-sm opacity-90">Startups</p>
//                 </div>
//                 <div className="text-center">
//                   <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
//                     <Star className="w-6 h-6" />
//                   </div>
//                   <p className="text-2xl font-bold">50+</p>
//                   <p className="text-sm opacity-90">Investors</p>
//                 </div>
//                 <div className="text-center">
//                   <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
//                     <Calendar className="w-6 h-6" />
//                   </div>
//                   <p className="text-2xl font-bold">3</p>
//                   <p className="text-sm opacity-90">Days</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="bg-gradient-to-r from-indigo-600 to-purple-700 py-16">
//         <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
//             Ready to Join the Innovation Revolution?
//           </h2>
//           <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
//             Don't miss North India's most anticipated startup event. Secure your spot today and be part of the future.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
//               <Calendar className="w-5 h-5" />
//               <span>Register Now</span>
//             </button>
//             <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-indigo-600 transition-all duration-300 flex items-center justify-center space-x-2">
//               <Building className="w-5 h-5" />
//               <span>Become a Sponsor</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;


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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center px-6 py-3 bg-blue-100/10 backdrop-blur-sm text-blue-200 rounded-full text-sm font-semibold border border-blue-400/30">
              <MessageCircle className="w-4 h-4 mr-2" />
              Get In Touch
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Startup Mela 2025: Chandigarh's Premier Startup Event & Entrepreneurship Summit
              </h1>
              <p className="text-xl md:text-2xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
                Join North India's Largest Gathering of Innovators, Investors, and Industry Leaders. Your Journey to Success Starts Here.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-blue-100 leading-relaxed">
                This is more than just a conference; it's a three-day festival of innovation, a launchpad for groundbreaking businesses, 
                and the ultimate networking event in the Tricity. Join us from{' '}
                <span className="font-bold text-white">January 16-18, 2025</span>, at the iconic{' '}
                <span className="font-bold text-white">Sector 34 Ground, Chandigarh</span>, for an unparalleled experience 
                designed to connect, inspire, and accelerate growth for startups and entrepreneurs. Secure your spot at the most 
                anticipated business event of the year.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>See Ticket Options</span>
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-purple-900 transition-all duration-300 flex items-center justify-center space-x-2">
                <Building className="w-5 h-5" />
                <span>Explore Sponsorship</span>
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-purple-400/30 rounded-full blur-lg"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Contact Information - Column 1 */}
          <div className="lg:col-span-1 space-y-8">
            {/* Event Details Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Event Details</h2>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Calendar className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">January 16-18, 2025</p>
                    <p className="text-gray-600">Thursday to Saturday</p>
                    <p className="text-sm text-blue-600 mt-1">3-Day Innovation Festival</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">10:00 AM - 8:00 PM</p>
                    <p className="text-gray-600">Daily Schedule</p>
                    <p className="text-sm text-green-600 mt-1">Full Day Experience</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">Sector 34 Exhibition Ground</p>
                    <p className="text-gray-600">Chandigarh, India</p>
                    <p className="text-sm text-purple-600 mt-1">Iconic Venue in the Heart of Tricity</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information Card */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl shadow-lg p-8 border border-indigo-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mr-4">
                  <MessageCircle className="w-6 h-6 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email:</p>
                    <a href="mailto:contact@businessorbit.org" className="text-indigo-600 hover:text-indigo-800 transition-colors break-all">
                      contact@businessorbit.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone:</p>
                    <a href="tel:+917696834279" className="text-green-600 hover:text-green-800 transition-colors">
                      +91 76968 34279
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                  <Star className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Follow Us</h2>
              </div>
              
              <div className="space-y-4">
                <a href="#" className="flex items-center space-x-4 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl hover:from-pink-100 hover:to-purple-100 transition-all duration-300 group">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Instagram className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Instagram</p>
                    <p className="text-gray-600 text-sm">Follow us for updates</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-colors" />
                </a>

                <a href="#" className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 group">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                    <Linkedin className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">LinkedIn</p>
                    <p className="text-gray-600 text-sm">Professional networking</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-indigo-600 transition-colors" />
                </a>

                <a href="#" className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-sky-50 rounded-xl hover:from-blue-100 hover:to-sky-100 transition-all duration-300 group">
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
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-gray-100 h-fit">
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
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-900"
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
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-900"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-3">
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-900"
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
                        <Briefcase className="h-5 w-5 text-gray-400" />
                      </div>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-900 appearance-none bg-white"
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
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical text-gray-900"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </div>
            </div>

            {/* Stats Card */}
            <div className="mt-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl shadow-lg p-8 text-white">
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

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-700 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join the Innovation Revolution?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Don't miss North India's most anticipated startup event. Secure your spot today and be part of the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Register Now</span>
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-indigo-600 transition-all duration-300 flex items-center justify-center space-x-2">
              <Building className="w-5 h-5" />
              <span>Become a Sponsor</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
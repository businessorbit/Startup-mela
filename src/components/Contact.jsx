import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
    countryCode: 'US'
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const countryCodes = [
    { code: 'US', flag: '🇺🇸', dialCode: '+1' },
    { code: 'CA', flag: '🇨🇦', dialCode: '+1' },
    { code: 'GB', flag: '🇬🇧', dialCode: '+44' },
    { code: 'AU', flag: '🇦🇺', dialCode: '+61' },
    { code: 'IN', flag: '🇮🇳', dialCode: '+91' },
  ];

  const selectedCountry = countryCodes.find(country => country.code === formData.countryCode);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCountrySelect = (countryCode) => {
    setFormData(prev => ({
      ...prev,
      countryCode
    }));
    setIsDropdownOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-blue-600 text-sm font-medium mb-4 uppercase tracking-wide">
            Contact us
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in touch
          </h1>
          <p className="text-gray-600 text-lg">
            We'd love to hear from you. Please fill out this form.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First Name and Last Name Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="you@company.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                Phone number
              </label>
              <div className="flex">
                {/* Country Code Dropdown */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-2 px-3 py-3 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-lg">{selectedCountry?.flag}</span>
                    <span className="text-sm font-medium text-gray-700">{selectedCountry?.code}</span>
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  </button>
                  
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 min-w-32">
                      {countryCodes.map((country) => (
                        <button
                          key={country.code}
                          type="button"
                          onClick={() => handleCountrySelect(country.code)}
                          className="flex items-center gap-2 w-full px-3 py-2 hover:bg-gray-50 transition-colors"
                        >
                          <span className="text-lg">{country.flag}</span>
                          <span className="text-sm font-medium text-gray-700">{country.code}</span>
                          <span className="text-sm text-gray-500">{country.dialCode}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Phone Input */}
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="+1 (555) 000-0000"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors resize-none"
                placeholder="Leave us a message..."
              />
            </div>

            {/* Privacy Policy Agreement */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="privacy"
                className="mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                required
              />
              <label htmlFor="privacy" className="text-sm text-gray-600">
                You agree to our friendly{' '}
                <a href="#" className="text-blue-600 hover:text-blue-700 underline">
                  privacy policy
                </a>
                .
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
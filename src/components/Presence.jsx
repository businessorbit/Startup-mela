import React from 'react';

const GlobalPresence = () => {
  const officeLocations = [
    { id: 1, x: '15%', y: '35%' }, // North America West
    { id: 2, x: '22%', y: '45%' }, // North America Central
    { id: 3, x: '45%', y: '25%' }, // Europe
    { id: 4, x: '52%', y: '30%' }, // Europe East
    { id: 5, x: '58%', y: '45%' }, // Middle East
    { id: 6, x: '75%', y: '35%' }, // Asia
    { id: 7, x: '85%', y: '65%' }, // Australia
    { id: 8, x: '80%', y: '50%' }, // Asia South
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-blue-600 text-sm font-medium mb-4 uppercase tracking-wide">
            About us
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 flex items-center justify-center gap-4">
            <span className="text-yellow-500 text-3xl">⭐</span>
            Our Global Presence
            <span className="text-yellow-500 text-3xl">⭐</span>
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg">
            We have offices and dedicated teams across the globe, enabling us to deliver 
            exceptional event management services wherever you are. Our worldwide 
            network of professionals combines local expertise with international standards to 
            create unforgettable events tailored to your needs.
          </p>
        </div>

        {/* World Map Section */}
        <div className="relative mb-20">
          <div className="relative max-w-6xl mx-auto">
            {/* World Map SVG */}
            <div className="relative">
              <svg
                viewBox="0 0 1000 500"
                className="w-full h-auto"
                style={{ maxHeight: '400px' }}
              >
                {/* World Map Dotted Pattern */}
                <defs>
                  <pattern id="dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                    <circle cx="5" cy="5" r="1" fill="#6b7280" opacity="0.8"/>
                  </pattern>
                </defs>
                
                {/* Continents as dotted areas */}
                {/* North America */}
                <path d="M50 100 Q150 80 250 120 Q280 150 250 200 Q200 250 150 240 Q100 220 80 180 Q40 140 50 100Z" fill="url(#dots)"/>
                
                {/* South America */}
                <path d="M180 260 Q220 250 240 290 Q250 350 230 420 Q200 450 180 420 Q160 380 170 340 Q160 300 180 260Z" fill="url(#dots)"/>
                
                {/* Europe */}
                <path d="M400 80 Q480 70 520 100 Q540 130 520 160 Q480 180 440 170 Q400 150 380 120 Q380 100 400 80Z" fill="url(#dots)"/>
                
                {/* Africa */}
                <path d="M420 180 Q480 170 520 200 Q540 280 520 360 Q480 400 440 390 Q400 370 380 320 Q370 250 420 180Z" fill="url(#dots)"/>
                
                {/* Asia */}
                <path d="M540 80 Q680 60 780 100 Q820 140 800 200 Q760 240 700 230 Q640 210 580 180 Q540 140 540 80Z" fill="url(#dots)"/>
                
                {/* Australia */}
                <path d="M720 320 Q780 310 820 340 Q840 370 820 390 Q780 400 740 390 Q720 370 720 340 Q710 330 720 320Z" fill="url(#dots)"/>
              </svg>

              {/* Office Location Markers */}
              {officeLocations.map((location) => (
                <div
                  key={location.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2"
                  style={{ left: location.x, top: location.y }}
                >
                  <div className="relative">
                    {/* Pulsing animation */}
                    <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-75"></div>
                    <div className="relative w-3 h-3 bg-blue-600 rounded-full border-2 border-white shadow-lg"></div>
                  </div>
                </div>
              ))}

              {/* Melbourne Office Detail */}
              <div
                className="absolute transform -translate-x-1/2"
                style={{ left: '85%', top: '75%' }}
              >
                <div className="bg-white rounded-lg shadow-lg p-4 border border-gray-200 min-w-48">
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mt-1 flex-shrink-0"></div>
                    <div className="text-sm">
                      <p className="font-semibold text-gray-900">Melbourne, AUS</p>
                      <p className="text-gray-600">100 Smith Street</p>
                      <p className="text-gray-600">Collingwood VIC 3066 AU</p>
                      <p className="text-blue-600 mt-2">hello@reallygreatsite.com</p>
                    </div>
                  </div>
                  {/* Arrow pointing to location */}
                  <div className="absolute -top-2 left-4 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-b-4 border-b-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {/* Support */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Support</h3>
            <p className="text-gray-600 mb-4">Our friendly team is here to help.</p>
            <a 
              href="mailto:support@thehappypeople.com" 
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              support@thehappypeople.com
            </a>
          </div>

          {/* Sales */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Sales</h3>
            <p className="text-gray-600 mb-4">Questions or queries? Get in touch!</p>
            <a 
              href="mailto:sales@thehappypeople.com" 
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              sales@thehappypeople.com
            </a>
          </div>

          {/* Phone */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Phone</h3>
            <p className="text-gray-600 mb-4">Mon-Fri from 8am to 5pm.</p>
            <a 
              href="tel:+10550000000" 
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              +1 (055) 000-0000
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalPresence;

import React from 'react';

const LegacyPage = () => {
  return (
    <div className="bg-[#FDF9F3] min-h-screen">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        
        {/* Header Section */}
        <div className="text-center mb-16 bg-white rounded-3xl shadow-xl p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-green-500  to-red-500"></div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">
            Our Legacy
          </h1>
          <p className="text-xl text-gray-600 font-medium tracking-wide">
            A History of Excellence in Event Management
          </p>
        </div>

        {/* Main Content Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 pb-4 border-b-2 border-blue-500">
            Built on a Foundation of Successful Events in Chandigarh
          </h2>
          
          {/* Introduction Paragraph */}
          <div className="mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We are not new to creating impactful <span className="font-semibold text-blue-600">business events</span> and 
              <span className="font-semibold text-green-600"> networking opportunities</span>. Our team brings a wealth of experience from 
              orchestrating some of the most significant <span className="font-semibold text-purple-600">startup events</span> in the region. 
              Our past collaborations are a testament to our ability to execute flawlessly and draw massive crowds through strategic 
              <span className="font-semibold text-orange-600"> networking</span> and professional event management.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We have proudly partnered with leading organizations to deliver exceptional 
              <span className="font-semibold text-red-600"> investor pitching</span> platforms and 
              <span className="font-semibold text-indigo-600"> business networking</span> experiences:
            </p>
          </div>

          {/* Partners Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* SFD Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                <h3 className="text-xl font-bold text-blue-800">SFD</h3>
              </div>
              <p className="text-blue-700 font-medium mb-2">(Swarajya First Democracy)</p>
              <p className="text-gray-700 text-sm">
                Premier <span className="font-semibold">networking events</span> fostering democratic business practices and 
                <span className="font-semibold"> startup community</span> engagement.
              </p>
            </div>

            {/* Scitron Card */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <h3 className="text-xl font-bold text-green-800">Scitron</h3>
              </div>
              <p className="text-green-700 font-medium mb-2">The largest and most celebrated festival of Panjab University</p>
              <p className="text-gray-700 text-sm">
                Massive <span className="font-semibold">business networking</span> festival bringing together students, 
                <span className="font-semibold"> investors</span>, and industry leaders for unprecedented collaboration.
              </p>
            </div>

            {/* Devfest Card */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                <h3 className="text-xl font-bold text-purple-800">Devfest</h3>
              </div>
              <p className="text-purple-700 font-medium mb-2">Globally recognized tech conference</p>
              <p className="text-gray-700 text-sm">
                A key collaborator in bringing the globally recognized tech conference to our community, 
                featuring <span className="font-semibold">startup pitching</span> sessions and 
                <span className="font-semibold"> investor networking</span>.
              </p>
            </div>

            {/* Technovate Card */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                <h3 className="text-xl font-bold text-orange-800">Technovate</h3>
              </div>
              <p className="text-orange-700 font-medium mb-2">The biggest and most competitive hackathon in Chandigarh</p>
              <p className="text-gray-700 text-sm">
                The driving force behind the biggest and most competitive hackathon, creating platforms for 
                <span className="font-semibold"> startup pitching</span> and <span className="font-semibold">investor connections</span>.
              </p>
            </div>

            {/* Community Meetups Card */}
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6 border border-indigo-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-indigo-500 rounded-full mr-3"></div>
                <h3 className="text-xl font-bold text-indigo-800">Community Meetups</h3>
              </div>
              <p className="text-indigo-700 font-medium mb-2">Focused networking and business events</p>
              <p className="text-gray-700 text-sm">
                A long history of organizing smaller, focused <span className="font-semibold">business events</span> that foster 
                <span className="font-semibold"> networking</span>, community connection, and 
                <span className="font-semibold"> startup collaboration</span>.
              </p>
            </div>
          </div>
          
        </div>

        {/* Footer */}
        <div className="text-center text-gray-600 mt-8">
          <p className="text-sm">
            Excellence in Event Management • Networking • Business Events • Startup Ecosystem • Investor Relations
          </p>
        </div>
      </div>
    </div>
  );
};

export default LegacyPage;
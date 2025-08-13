import React from 'react';

const CommunityBlogs = () => {
  const blogData = [
    {
      id: 1,
      title: "Bill Walsh Leadership Lessons",
      author: "Alex Whitten",
      date: "17 Jan 2022",
      excerpt: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      tags: ["Leadership", "Management"],
      gradient: "from-pink-300 via-purple-300 to-indigo-400"
    },
    {
      id: 2,
      title: "PM Mental Models",
      author: "Demi Wilkinson",
      date: "19 Jan 2022",
      excerpt: "Mental models are simple expressions of complex processes or relationships.",
      tags: ["Product", "Research", "Frameworks"],
      gradient: "from-cyan-200 via-cyan-400 to-cyan-600"
    },
    {
      id: 3,
      title: "What is Wireframing?",
      author: "Candice Wu",
      date: "19 Jan 2022",
      excerpt: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      tags: ["Design", "Research"],
      gradient: "from-slate-400 via-slate-600 to-slate-800"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-300 via-purple-400 to-purple-500 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-6 flex items-center justify-center gap-4">
            2025 Community Blogs
            <span className="text-yellow-400 text-3xl md:text-4xl">⭐</span>
          </h1>
          <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed text-lg md:text-xl font-medium">
            Posts Like Step-By-Step Guides To Successful Event Planning, Creating Detailed Event Timelines, And Choosing The Right 
            Themes And Concepts Cover Transportation, Security, On-Site Management, And Other Operational Aspects Of Events.
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((blog) => (
            <div 
              key={blog.id}
              className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-white/20 cursor-pointer group"
            >
              {/* Blog Image/Gradient */}
              <div className={`h-48 bg-gradient-to-br ${blog.gradient} relative`}>
                {/* You can add actual images here if needed */}
              </div>
              
              {/* Blog Content */}
              <div className="p-6">
                {/* Author and Date */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-indigo-600 font-medium text-sm">
                    {blog.author}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {blog.date}
                  </span>
                </div>
                
                {/* Title with Arrow */}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-800 leading-tight flex-1 pr-2">
                    {blog.title}
                  </h3>
                  <span className="text-indigo-600 text-xl transform group-hover:translate-x-1 transition-transform duration-200">
                    ↗
                  </span>
                </div>
                
                {/* Excerpt */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {blog.excerpt}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        index === 0 
                          ? 'bg-indigo-100 text-indigo-700' 
                          : index === 1 
                          ? 'bg-gray-100 text-gray-700'
                          : 'bg-orange-100 text-orange-700'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-gray-800 font-semibold py-3 px-8 rounded-full border border-white/30 transition-all duration-300 hover:transform hover:scale-105">
            Load More Posts
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityBlogs;
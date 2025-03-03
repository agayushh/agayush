import React from 'react';

export default function Blogs() {
  // This is a placeholder for your actual blog data
  // You can replace this with your own content
  const blogPosts = [
    {
      id: 1,
      title: "How I Built My Portfolio Website with React and Tailwind",
      excerpt: "In this post, I share my experience building a modern portfolio site using React and Tailwind CSS, including challenges I faced and how I solved them.",
      date: "April 15, 2023",
      readTime: "8 min read",
      tags: ["React", "TailwindCSS", "Web Development"],
      image: null, // You can add your own blog cover image here
      slug: "how-i-built-portfolio-website-react-tailwind",
      color: "blue"
    },
    // {
    //   id: 2,
    //   title: "Understanding the JavaScript Event Loop",
    //   excerpt: "A deep dive into how the JavaScript event loop works, with practical examples and visualizations to help developers understand this complex concept.",
    //   date: "March 2, 2023",
    //   readTime: "12 min read",
    //   tags: ["JavaScript", "Web Development", "Programming"],
    //   image: null, // You can add your own blog cover image here
    //   slug: "understanding-javascript-event-loop",
    //   color: "purple"
    // },
    // {
    //   id: 3,
    //   title: "My Journey into Open Source: First Contributions",
    //   excerpt: "I detail my experience making my first open source contributions, including tips for newcomers and lessons I learned along the way.",
    //   date: "January 18, 2023",
    //   readTime: "6 min read",
    //   tags: ["Open Source", "GitHub", "Community"],
    //   image: null, // You can add your own blog cover image here
    //   slug: "journey-into-open-source-first-contributions",
    //   color: "green"
    // }
  ];

  return (
    <div className=" text-gray-200 py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-[-80px]">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="flex items-center space-x-3 mb-12">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Blog
          </h1>
          <div className="h-px flex-grow bg-gradient-to-r from-blue-500/50 to-purple-500/50"></div>
        </div>
        
        {/* Blog Grid */}
        <div className="grid grid-cols-1 gap-10">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 shadow-lg 
                         transition-all duration-300 hover:shadow-blue-500/10 hover:border-blue-500/20 overflow-hidden relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br 
                               ${post.color === 'purple' ? 'from-purple-600/5 to-pink-600/5' : 
                                 post.color === 'green' ? 'from-emerald-600/5 to-teal-600/5' :
                                 'from-blue-600/5 to-cyan-600/5'} 
                               opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              {/* Blog Header Image (Optional) - Uncomment and use if you have blog cover images */}
              {/*
              <div className="h-48 md:h-64 w-full overflow-hidden">
                {post.image ? (
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                ) : (
                  <div className={`w-full h-full flex items-center justify-center
                                   ${post.color === 'purple' ? 'bg-purple-900/20' : 
                                     post.color === 'green' ? 'bg-emerald-900/20' :
                                     'bg-blue-900/20'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
              </div>
              */}
              
              <div className="p-6 relative z-10">
                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm 
                                  bg-gray-900/80 text-gray-400 border border-gray-700/50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {post.date}
                  </div>
                  
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm 
                                  bg-gray-900/80 text-gray-400 border border-gray-700/50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {post.readTime}
                  </div>
                </div>
                
                {/* Title and Excerpt */}
                <h2 className={`text-2xl font-bold mb-3 transition-colors duration-200
                               ${post.color === 'purple' ? 'text-purple-400 group-hover:text-purple-300' : 
                                 post.color === 'green' ? 'text-emerald-400 group-hover:text-emerald-300' :
                                 'text-blue-400 group-hover:text-blue-300'}`}>
                  {post.title}
                </h2>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`text-xs px-3 py-1 rounded-md 
                                  ${post.color === 'purple' ? 'bg-purple-900/20 text-purple-300 border border-purple-800/30' : 
                                    post.color === 'green' ? 'bg-emerald-900/20 text-emerald-300 border border-emerald-800/30' :
                                    'bg-blue-900/20 text-blue-300 border border-blue-800/30'}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Read More Link */}
                <a
                  href={`https://agayush.hashnode.dev/handling-async-functions-in-reacts-useeffect-hook`}
                  target='_blank'
                  className={`inline-flex items-center transition-all duration-200
                              ${post.color === 'purple' ? 'text-purple-400 hover:text-purple-300' : 
                                post.color === 'green' ? 'text-emerald-400 hover:text-emerald-300' :
                                'text-blue-400 hover:text-blue-300'}`}
                >
                  Read more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Posts Link */}
        <div className="mt-12 text-center">
          <a
            href="https://hashnode.com/@ayushgoyal28"
            target='_blank'
            className="inline-flex items-center px-6 py-3 rounded-lg text-base font-medium
                      bg-gradient-to-r from-blue-600/20 to-purple-600/20 hover:from-blue-600/30 hover:to-purple-600/30
                      text-blue-300 border border-blue-700/30 hover:border-blue-700/50 transition-all duration-300"
          >
            View All Blog Posts
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
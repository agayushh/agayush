import React from 'react';

export default function Events() {
  // This is a placeholder for your actual events data
  // You can replace this with your own content
  const events = [
    {
      id: 1,
      title: "Tech Conference Speaker",
      eventName: "ReactConf 2023",
      description: "Presented a talk on 'Building Responsive Interfaces with React and Tailwind CSS', discussing best practices and demonstrating practical techniques.",
      date: "November 15, 2023",
      location: "San Francisco, CA",
      link: "https://reactconf.example.com/2023/speakers",
      type: "Speaking",
      image: null, // You can add your own event photo here
      color: "blue"
    },
    {
      id: 2,
      title: "Workshop Facilitator",
      eventName: "JavaScript Bootcamp",
      description: "Led a hands-on workshop teaching advanced JavaScript concepts and practical application development to a group of 30 participants.",
      date: "September 5, 2023",
      location: "Online / Virtual",
      link: "https://jsbootcamp.example.com",
      type: "Workshop",
      image: null, // You can add your own event photo here
      color: "purple"
    },
    {
      id: 3,
      title: "Hackathon Participant",
      eventName: "Global Code Jam",
      description: "Competed in a 48-hour hackathon, building a web application to address accessibility challenges in education. Our team placed 2nd out of 50 teams.",
      date: "June 22-24, 2023",
      location: "New York, NY",
      link: "https://codejam.example.com/2023/projects",
      type: "Competition",
      image: null, // You can add your own event photo here
      color: "green"
    }
  ];

  // Helper function to get badge color based on event type
  const getBadgeColor = (type, color) => {
    if (color === 'purple') {
      return 'bg-purple-900/30 text-purple-300 border-purple-800/30';
    } else if (color === 'green') {
      return 'bg-emerald-900/30 text-emerald-300 border-emerald-800/30';
    } else {
      return 'bg-blue-900/30 text-blue-300 border-blue-800/30';
    }
  };

  return (
    <div className="text-gray-200 py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="flex items-center space-x-3 mb-12">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Events
          </h1>
          <div className="h-px flex-grow bg-gradient-to-r from-blue-500/50 to-purple-500/50"></div>
        </div>
        
        {/* Events Timeline */}
        <div className="relative border-l-2 border-dashed border-gray-700 ml-4 md:ml-0 md:pl-4">
          {events.map((event, index) => (
            <div 
              key={event.id} 
              className={`mb-12 ml-6 md:ml-12 relative ${index === events.length - 1 ? '' : 'pb-8'}`}
            >
              {/* Timeline dot */}
              <div 
                className={`absolute -left-9 md:-left-8 w-4 h-4 rounded-full mt-2
                          bg-gradient-to-r ${event.color === 'purple' ? 'from-purple-500 to-pink-500' : 
                                             event.color === 'green' ? 'from-emerald-500 to-teal-500' :
                                             'from-blue-500 to-cyan-500'}`}
              ></div>
              
              {/* Content Card */}
              <div className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 shadow-lg 
                             transition-all duration-300 hover:shadow-blue-500/10 hover:border-blue-500/20 overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br 
                                 ${event.color === 'purple' ? 'from-purple-600/5 to-pink-600/5' : 
                                   event.color === 'green' ? 'from-emerald-600/5 to-teal-600/5' :
                                   'from-blue-600/5 to-cyan-600/5'} 
                                 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  {/* Event Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                    <div>
                      <h2 className={`text-xl font-bold 
                                     ${event.color === 'purple' ? 'text-purple-400' : 
                                       event.color === 'green' ? 'text-emerald-400' :
                                       'text-blue-400'}`}>
                        {event.title} at {event.eventName}
                      </h2>
                      
                      {/* Event Metadata */}
                      <div className="flex flex-wrap items-center gap-2 mt-2">
                        {/* Date Badge */}
                        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm 
                                        bg-gray-900/80 text-gray-400 border border-gray-700/50">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {event.date}
                        </div>
                        
                        {/* Location Badge */}
                        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm 
                                        bg-gray-900/80 text-gray-400 border border-gray-700/50">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {event.location}
                        </div>
                        
                        {/* Event Type Badge */}
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm 
                                          border ${getBadgeColor(event.type, event.color)}`}>
                          {event.type}
                        </div>
                      </div>
                    </div>
                    
                    {/* Event Link */}
                    {event.link && (
                      <a
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`mt-3 md:mt-0 self-start inline-flex items-center px-3 py-1 rounded-lg text-sm transition-all duration-200
                                    ${event.color === 'purple' ? 'bg-purple-900/20 text-purple-300 hover:bg-purple-900/40' : 
                                      event.color === 'green' ? 'bg-emerald-900/20 text-emerald-300 hover:bg-emerald-900/40' :
                                      'bg-blue-900/20 text-blue-300 hover:bg-blue-900/40'}`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Event Details
                      </a>
                    )}
                  </div>
                  
                  {/* Event Image (Optional) - Uncomment and use if you have event photos */}
                  {/*
                  <div className="mt-4 rounded-lg overflow-hidden border border-gray-700/50">
                    {event.image ? (
                      <img src={event.image} alt={event.title} className="w-full h-auto" />
                    ) : (
                      <div className={`w-full h-40 flex items-center justify-center
                                       ${event.color === 'purple' ? 'bg-purple-900/20' : 
                                         event.color === 'green' ? 'bg-emerald-900/20' :
                                         'bg-blue-900/20'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  */}
                  
                  {/* Description */}
                  <div className="mt-4">
                    <p className="text-gray-300 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Timeline Start Indicator */}
          <div className="absolute -bottom-2 -left-[5px] w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 shadow-lg shadow-blue-500/20"></div>
        </div>
        
        {/* Upcoming Events - Optional Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-200">Upcoming Events</h2>
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
            <p className="text-gray-300">
              Stay tuned for upcoming speaking engagements, workshops, and events.
              If you're interested in having me speak at your event, please get in touch via the contact form below.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
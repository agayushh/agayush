import React from 'react';

export default function Experience() {
  // This is a placeholder for your actual experience data
  // You can replace this with your own content
  const experiences = [
    {
      id: 1,
      company: "DataWaves lab",
      role: "Full Stack Developer",
      period: "Jun 2024 - Aug 2024",
      description: "My work at Datawave Labs involved developing and integrating various systems and tools to enhance the platform's functionality and user experience. I focused on authentication, cloud integration, infrastructure automation, real-time notifications, client and server development, and DevOps practices.",
      technologies: ["React", "GraphQL", "Python", "GenAI"],
      logo: null, // You can add your own logo here
      color: "blue"
    },
    {
      id: 2,
      company: "De",
      role: "Previous Role",
      period: "Mar 2020 - Dec 2021",
      description: "Replace with your role description and achievements.",
      technologies: ["TypeScript", "Express", "MongoDB"],
      logo: null, // You can add your own logo here
      color: "purple"
    }
  ];

  return (
    <div className=" text-gray-200 py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="flex items-center space-x-3 mb-12">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Experience
          </h1>
          <div className="h-px flex-grow bg-gradient-to-r from-blue-500/50 to-purple-500/50"></div>
        </div>
        
        {/* Timeline */}
        <div className="relative border-l-2 border-dashed border-gray-700 ml-4 md:ml-0 md:pl-4">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`mb-12 ml-6 md:ml-12 relative ${index === experiences.length - 1 ? '' : 'pb-8'}`}
            >
              {/* Timeline dot */}
              <div 
                className={`absolute -left-9 md:-left-8 w-4 h-4 rounded-full mt-2
                          bg-gradient-to-r ${exp.color === 'purple' ? 'from-purple-500 to-pink-500' : 'from-blue-500 to-cyan-500'}`}
              ></div>
              
              {/* Content Card */}
              <div className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 shadow-lg 
                             transition-all duration-300 hover:shadow-blue-500/10 hover:border-blue-500/20 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* Header with Logo */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center space-x-4">
                      {/* Logo Placeholder - replace with your company logos */}
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center 
                                       ${exp.color === 'purple' ? 'bg-purple-500/10 text-purple-400' : 'bg-blue-500/10 text-blue-400'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      
                      <div>
                        <h2 className={`text-xl font-bold ${exp.color === 'purple' ? 'text-purple-400' : 'text-blue-400'}`}>
                          {exp.company}
                        </h2>
                        <h3 className="text-gray-300 font-medium mt-1">{exp.role}</h3>
                      </div>
                    </div>
                    
                    <div className="mt-2 md:mt-0 md:ml-4">
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-sm 
                                      bg-gray-900/80 text-gray-400 border border-gray-700/50">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {exp.period}
                      </div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <div className="mt-4">
                    <p className="text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                  
                  {/* Technologies Used */}
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className={`text-xs px-3 py-1 rounded-md 
                                      ${exp.color === 'purple' 
                                        ? 'bg-purple-900/20 text-purple-300 border border-purple-800/30' 
                                        : 'bg-blue-900/20 text-blue-300 border border-blue-800/30'}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Achievements - You can uncomment and use this section if needed */}
                  {/*
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Achievements</h4>
                    <ul className="space-y-2 pl-5 list-disc text-gray-300">
                      <li>Achievement one</li>
                      <li>Achievement two</li>
                      <li>Achievement three</li>
                    </ul>
                  </div>
                  */}
                </div>
              </div>
            </div>
          ))}
          
          {/* Timeline Start Indicator */}
          <div className="absolute -bottom-2 -left-[5px] w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 shadow-lg shadow-blue-500/20"></div>
        </div>
      </div>
    </div>
  );
}
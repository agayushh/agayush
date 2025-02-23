import React from 'react';

export default function Projects() {
  // This is a placeholder for your actual projects data
  // You can replace this with your own content
  const projects = [
    {
      id: 1,
      title: "Text to sql query",
      description: "Replace with your project description. This should highlight the purpose, features, and technologies used.",
      period: "Jan 2023 - Mar 2023",
      link: "https://github.com/yourusername/project",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      image: null, // You can add your own screenshot here
      color: "blue"
    },
    {
      id: 2,
      title: "Another Project",
      description: "Replace with your project description. This should highlight the purpose, features, and technologies used.",
      period: "Jun 2022 - Dec 2022",
      link: "https://github.com/yourusername/another-project",
      technologies: ["TypeScript", "Express", "PostgreSQL"],
      image: null, // You can add your own screenshot here
      color: "purple"
    },
    {
      id: 3,
      title: "Side Project",
      description: "Replace with your project description. This should highlight the purpose, features, and technologies used.",
      period: "Mar 2022 - May 2022",
      link: "https://github.com/yourusername/side-project",
      technologies: ["Vue.js", "Firebase", "TailwindCSS"],
      image: null, // You can add your own screenshot here
      color: "green"
    }
  ];

  return (
    <div className="text-gray-200 py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="flex items-center space-x-3 mb-12">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Projects
          </h1>
          <div className="h-px flex-grow bg-gradient-to-r from-blue-500/50 to-purple-500/50"></div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 shadow-lg 
                         transition-all duration-300 hover:shadow-blue-500/10 hover:border-blue-500/20 overflow-hidden relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br 
                               ${project.color === 'purple' ? 'from-purple-600/5 to-pink-600/5' : 
                                 project.color === 'green' ? 'from-emerald-600/5 to-teal-600/5' :
                                 'from-blue-600/5 to-cyan-600/5'} 
                               opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
              </div>
              
              <div className="relative z-10">
                {/* Project Header */}
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className={`text-xl font-bold 
                                   ${project.color === 'purple' ? 'text-purple-400' : 
                                     project.color === 'green' ? 'text-emerald-400' :
                                     'text-blue-400'}`}>
                      {project.title}
                    </h2>
                    <div className="mt-1 inline-flex items-center px-3 py-1 rounded-full text-sm 
                                    bg-gray-900/80 text-gray-400 border border-gray-700/50">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {project.period}
                    </div>
                  </div>
                  
                  {/* Project Link */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center px-3 py-1 rounded-lg text-sm transition-all duration-200
                                ${project.color === 'purple' ? 'bg-purple-900/20 text-purple-300 hover:bg-purple-900/40' : 
                                  project.color === 'green' ? 'bg-emerald-900/20 text-emerald-300 hover:bg-emerald-900/40' :
                                  'bg-blue-900/20 text-blue-300 hover:bg-blue-900/40'}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    View Project
                  </a>
                </div>
                
                {/* Project Image (Optional) - Uncomment and use if you have screenshots */}
                {/*
                <div className="mt-4 rounded-lg overflow-hidden border border-gray-700/50">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="w-full h-auto" />
                  ) : (
                    <div className={`w-full h-48 flex items-center justify-center
                                     ${project.color === 'purple' ? 'bg-purple-900/20' : 
                                       project.color === 'green' ? 'bg-emerald-900/20' :
                                       'bg-blue-900/20'}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                </div>
                */}
                
                {/* Project Description */}
                <div className="mt-4">
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                {/* Technologies Used */}
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className={`text-xs px-3 py-1 rounded-md 
                                    ${project.color === 'purple' ? 'bg-purple-900/20 text-purple-300 border border-purple-800/30' : 
                                      project.color === 'green' ? 'bg-emerald-900/20 text-emerald-300 border border-emerald-800/30' :
                                      'bg-blue-900/20 text-blue-300 border border-blue-800/30'}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
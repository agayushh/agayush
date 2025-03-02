import React from "react";

export default function OpenSourceContributions() {
  // This is a placeholder for your actual contribution data
  // You can replace this with your own content
  const contributions = [
    {
      id: 1,
      project: "The Cyber Hub",
      description: "Fixed a few Bugs",
      date: "Oct 2024",
      link: "https://github.com/th3cyb3rhub/TheCyberHUB/pull/920",
      type: "Bug Fix",
      color: "blue",
    },
    {
      id: 2,
      project: "Job Sewa",
      description: "Fixed a few UI changes",
      date: "Oct 2024",
      link: "https://github.com/Devmangrani/JobSewa/pull/105",
      type: "Bug Fix",
      color: "purple",
    },
    {
      id: 3,
      project: "OMI",
      description: "Fixed a UI bug",
      date: "Feb 2025",
      link: "https://github.com/BasedHardware/omi/pull/1927",
      type: "Bug Fix",
      color: "green",
    },
  ];

  // Helper function to get badge color based on contribution type
  const getBadgeColor = (type, color) => {
    if (color === "purple") {
      return "bg-purple-900/30 text-purple-300 border-purple-800/30";
    } else if (color === "green") {
      return "bg-emerald-900/30 text-emerald-300 border-emerald-800/30";
    } else {
      return "bg-blue-900/30 text-blue-300 border-blue-800/30";
    }
  };

  return (
    <div className="text-gray-200 py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="flex items-center space-x-3 mb-12">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Open Source
          </h1>
          <div className="h-px flex-grow bg-gradient-to-r from-blue-500/50 to-purple-500/50"></div>
        </div>

        {/* Contributions Timeline */}
        <div className="relative border-l-2 border-dashed border-gray-700 ml-4 md:ml-0 md:pl-4">
          {contributions.map((contribution, index) => (
            <div
              key={contribution.id}
              className={`mb-12 ml-6 md:ml-12 relative ${
                index === contributions.length - 1 ? "" : "pb-8"
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute -left-9 md:-left-8 w-4 h-4 rounded-full mt-2
                          bg-gradient-to-r ${
                            contribution.color === "purple"
                              ? "from-purple-500 to-pink-500"
                              : contribution.color === "green"
                              ? "from-emerald-500 to-teal-500"
                              : "from-blue-500 to-cyan-500"
                          }`}
              ></div>

              {/* Content Card */}
              <div
                className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 shadow-lg 
                             transition-all duration-300 hover:shadow-blue-500/10 hover:border-blue-500/20 overflow-hidden relative"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br 
                                 ${
                                   contribution.color === "purple"
                                     ? "from-purple-600/5 to-pink-600/5"
                                     : contribution.color === "green"
                                     ? "from-emerald-600/5 to-teal-600/5"
                                     : "from-blue-600/5 to-cyan-600/5"
                                 } 
                                 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                    <div>
                      <h2
                        className={`text-xl font-bold 
                                     ${
                                       contribution.color === "purple"
                                         ? "text-purple-400"
                                         : contribution.color === "green"
                                         ? "text-emerald-400"
                                         : "text-blue-400"
                                     }`}
                      >
                        {contribution.project}
                      </h2>

                      <div className="flex flex-wrap items-center gap-2 mt-2">
                        {/* Date Badge */}
                        <div
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm 
                                        bg-gray-900/80 text-gray-400 border border-gray-700/50"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          {contribution.date}
                        </div>

                        {/* Contribution Type Badge */}
                        <div
                          className={`inline-flex items-center px-3 py-1 rounded-full text-sm 
                                          border ${getBadgeColor(
                                            contribution.type,
                                            contribution.color
                                          )}`}
                        >
                          {contribution.type}
                        </div>
                      </div>
                    </div>

                    {/* Contribution Link */}
                    <a
                      href={contribution.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-3 md:mt-0 self-start inline-flex items-center px-3 py-1 rounded-lg text-sm transition-all duration-200
                                  ${
                                    contribution.color === "purple"
                                      ? "bg-purple-900/20 text-purple-300 hover:bg-purple-900/40"
                                      : contribution.color === "green"
                                      ? "bg-emerald-900/20 text-emerald-300 hover:bg-emerald-900/40"
                                      : "bg-blue-900/20 text-blue-300 hover:bg-blue-900/40"
                                  }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      View PR
                    </a>
                  </div>

                  {/* Description */}
                  <div className="mt-4">
                    <p className="text-gray-300 leading-relaxed">
                      {contribution.description}
                    </p>
                  </div>
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

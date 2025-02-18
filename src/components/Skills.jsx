import React from "react";

export default function Skills() {
  return (
    <div className="bg-gradient-to-br from-black to-black text-gray-200 py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center space-x-3 mb-10">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Skills
          </h1>
          <div className="h-px flex-grow bg-gradient-to-r from-blue-500/50 to-purple-500/50"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Languages */}
          <div className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 shadow-lg transition-all duration-300 hover:shadow-blue-500/20 hover:border-blue-500/50 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center space-x-2 mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
                <h2 className="text-xl text-blue-400 font-bold">Languages</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {["JavaScript", "TypeScript", "Python", "Java", "SQL"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="group/skill bg-gray-900/80 text-gray-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-500 hover:text-white hover:shadow-md hover:scale-105"
                    >
                      {skill}
                      <span className="block h-px w-0 bg-white/50 mt-1 transition-all duration-300 group-hover/skill:w-full"></span>
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Libraries & Frameworks */}
          <div className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 shadow-lg transition-all duration-300 hover:shadow-purple-500/20 hover:border-purple-500/50 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center space-x-2 mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
                <h2 className="text-xl text-purple-400 font-bold">
                  Libraries & Frameworks
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  "React",
                  "Express",
                  "Node.js",
                  "Tailwind",
                  "MUI",
                  "Redux",
                  "Recoil",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="group/skill bg-gray-900/80 text-gray-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-500 hover:text-white hover:shadow-md hover:scale-105"
                  >
                    {skill}
                    <span className="block h-px w-0 bg-white/50 mt-1 transition-all duration-300 group-hover/skill:w-full"></span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Databases & ORMs */}
          <div className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 shadow-lg transition-all duration-300 hover:shadow-green-500/20 hover:border-green-500/50 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center space-x-2 mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                  />
                </svg>
                <h2 className="text-xl text-green-400 font-bold">
                  Databases & ORMs
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {["MongoDB", "Postgres", "SQLAlchemy", "MySQL", "Prisma"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="group/skill bg-gray-900/80 text-gray-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-gradient-to-r hover:from-green-600 hover:to-green-500 hover:text-white hover:shadow-md hover:scale-105"
                    >
                      {skill}
                      <span className="block h-px w-0 bg-white/50 mt-1 transition-all duration-300 group-hover/skill:w-full"></span>
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Tools & Platforms */}
          <div className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 shadow-lg transition-all duration-300 hover:shadow-orange-500/20 hover:border-orange-500/50 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center space-x-2 mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-orange-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <h2 className="text-xl text-orange-400 font-bold">
                  Tools & Platforms
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  "GitHub",
                  "ESLint",
                  "AWS EC2",
                  "DigitalOcean Droplets",
                  "Docker",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="group/skill bg-gray-900/80 text-gray-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-gradient-to-r hover:from-orange-600 hover:to-orange-500 hover:text-white hover:shadow-md hover:scale-105"
                  >
                    {skill}
                    <span className="block h-px w-0 bg-white/50 mt-1 transition-all duration-300 group-hover/skill:w-full"></span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

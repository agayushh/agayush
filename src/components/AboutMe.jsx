import React from "react";

export default function AboutMe() {
  return (
    <div className="text-gray-200 py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="flex items-center space-x-3 mb-10">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            About Me
          </h1>
          <div className="h-px flex-grow bg-gradient-to-r from-blue-500/50 to-purple-500/50"></div>
        </div>

        {/* About Me Content */}
        <div className="gap-10">
          {/* Profile Image Column */}

          {/* Text Content Column */}
          <div className="md:col-span-3 space-y-6">
            <p className="text-lg leading-relaxed text-gray-300 relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-blue-500/50 before:to-purple-500/50 before:rounded-full">
              You found me. Now buckle up because this ain't your usual “Hello,
              I’m a developer” intro. I write code that works, scales, and
              doesn’t break under pressure. Frontend, backend, databases—I make
              them talk seamlessly. No fluff, no unnecessary abstractions, just
              clean execution.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-blue-400">
                What I Bring to the Table
              </h3>

              <div className="space-y-3">
                {/* Strength Item 1 */}
                <div className="group bg-gray-800/30 backdrop-blur-sm p-4 rounded-lg border border-gray-700/50 transition-all duration-300 hover:border-blue-500/30 hover:bg-gray-800/50">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-500/10 p-2 rounded-lg text-blue-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white group-hover:text-blue-300 transition-colors duration-200">
                        Technical Expertise & Precision
                      </h4>
                      <p className="text-gray-400 mt-1">
                        I know how to write efficient, scalable, and
                        maintainable code across the full stack. From React &
                        TypeScript on the frontend to Node.js, PostgreSQL, and
                        Prisma on the backend, you ensure everything runs
                        smoothly.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Strength Item 2 */}
                <div className="group bg-gray-800/30 backdrop-blur-sm p-4 rounded-lg border border-gray-700/50 transition-all duration-300 hover:border-purple-500/30 hover:bg-gray-800/50">
                  <div className="flex items-start space-x-3">
                    <div className="bg-purple-500/10 p-2 rounded-lg text-purple-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white group-hover:text-purple-300 transition-colors duration-200">
                        Collaborative Mindset
                      </h4>
                      <p className="text-gray-400 mt-1">
                        Thrives in team environments, with excellent
                        communication skills and a passion for knowledge
                        sharing.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Strength Item 3 */}
                <div className="group bg-gray-800/30 backdrop-blur-sm p-4 rounded-lg border border-gray-700/50 transition-all duration-300 hover:border-green-500/30 hover:bg-gray-800/50">
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-500/10 p-2 rounded-lg text-green-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white group-hover:text-green-300 transition-colors duration-200">
                        Problem Solver
                      </h4>
                      <p className="text-gray-400 mt-1">
                        Adept at analyzing complex challenges and developing
                        innovative solutions that exceed expectations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Interests */}
            <div>
              <h3 className="text-xl font-bold text-purple-400 mb-3">
                When I'm Not Coding
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Reading",
                  "Traveling",
                  "Photography",
                  "Open Source",
                  "Teaching",
                ].map((interest) => (
                  <span
                    key={interest}
                    className="bg-gray-900/80 text-gray-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-600/30 hover:to-purple-600/30 hover:text-white"
                  >
                    {interest}
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

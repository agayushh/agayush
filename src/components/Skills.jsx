import React from "react";

export default function Skills() {
  return (
    <div className="bg-black text-white p-6 max-w-full mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>

      <div className="space-y-4">
        <div>
          <h3 className="text-gray-400 font-semibold mb-3 text-lg">
            Languages
          </h3>
          <p className="text-gray-300 border-b border-gray-600">
            <div className="mb-2">
              JavaScript, TypeScript, Python, Java, SQL
            </div>
          </p>
        </div>

        <div>
          <h3 className="text-gray-400 font-semibold mb-3 text-lg">
            Libraries & Frameworks
          </h3>
          <p className="text-gray-300 border-b border-gray-600 ">
            <div className="mb-2">
              React, Express, NodeJs, Tailwind CSS, Bootstrap, Material UI,
              React Query, GraphQL, Redux, Recoil
            </div>
          </p>
        </div>

        <div>
          <h3 className="text-gray-400 font-semibold mb-3 text-lg">
            Databases & ORMs
          </h3>

          <p className="text-gray-300 border-b border-gray-600">
            MongoDB, Postgres, SQLAlchemy, MySQL, Prisma
          </p>
        </div>

        <div>
          <h3 className="text-gray-400 font-semibold mb-3 text-lg">
            Tools & Platforms
          </h3>
          <p className="text-gray-300 border-b border-gray-600">
            GitHub, ESLint, AWS EC2, DigitalOcean Droplets , Docker
          </p>
        </div>
      </div>
    </div>
  );
}

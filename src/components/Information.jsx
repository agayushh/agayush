import React from "react";
import Socials from "./Socials";

export default function Information() {
  return (
    <div className="flex justify-center items-center">
      <div className="inline-flex flex-col items-center mx-auto md:items-center sm:items-center lg:items-center text-slate-300 p-4">
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 text-center">
              Ayush Goyal
            </h1>
            <div className="space-y-1 sm:space-y-2">
              <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-blue-400 text-center">
                Full Stack Developer
              </h2>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-blue-400 text-center">
                Open Source Enthusiast
              </h3>
            </div>
            <div className="mt-4 sm:mt-6">
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

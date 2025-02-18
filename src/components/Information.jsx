import React from "react";
import Socials from "./Socials";

export default function Information() {
  return (
    <div className="flex text-white">
      <div className="z-10 mt-[450px] ml-80">
        <div className="text-4xl ml-4">ayush goyal </div>
        <div className="text-lg ml-4 mt-3">full stack developer </div>
        <div className="text-lg ml-4">open source enthusiast </div>
        <Socials />
      </div>
    </div>
  );
}

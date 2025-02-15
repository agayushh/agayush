import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaHashnode } from "react-icons/fa6";

export default function Socials() {
  return (
    <div className="mt-4 ml-2 text-xl flex justify-evenly">
      <a href="https://x.com/agayushh" target="_blank">
        <BsTwitterX className="cursor-pointer" />
      </a>
      <a href="https://x.com/agayushh" target="_blank">
        <FaDiscord className="cursor-pointer hover:scale-90 duration-200 transition" />
      </a>
      <a href="https://www.linkedin.com/in/-ayushgoyal/" target="_blank">
        <FaLinkedinIn className="cursor-pointer hover:scale-90 duration-200 transition" />
      </a>
      <a href="https://github.com/agayushh" target="_blank">
        <FaGithub className="cursor-pointer hover:scale-90 duration-200 transition" />
      </a>
      <a href="https://hashnode.com/@ayushgoyal28" target="_blank">
        <FaHashnode className="cursor-pointer hover:scale-90 duration-200 transition" />
      </a>
    </div>
  );
}

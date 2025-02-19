import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaHashnode } from "react-icons/fa6";

export default function Socials() {
  const socialLinks = [
    {
      icon: BsTwitterX,
      url: "https://x.com/agayushh",
      label: "Twitter Profile",
    },
    {
      icon: FaDiscord,
      url: "",
      label: "Discord Profile",
    },
    {
      icon: FaLinkedinIn,
      url: "https://www.linkedin.com/in/-ayushgoyal/",
      label: "LinkedIn Profile",
    },
    {
      icon: FaGithub,
      url: "https://github.com/agayushh",
      label: "GitHub Profile",
    },
    {
      icon: FaHashnode,
      url: "https://hashnode.com/@ayushgoyal28",
      label: "Hashnode Blog",
    },
  ];

  return (
    <div className="flex items-center justify-center md:justify-start space-x-6 mt-4">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="text-slate-300 hover:text-blue-400 transform hover:scale-110 transition-all duration-300 text-xl"
        >
          <social.icon className="text-xl md:text-2xl" />
        </a>
      ))}
    </div>
  );
}

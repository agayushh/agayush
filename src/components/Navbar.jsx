import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  const navBarItems = [
    { name: "Home", path: "/" },
    { name: "Experience", path: "/" },
    { name: "Events", path: "/" },
    { name: "Contacts", path: "/" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm bg-black/70">
      {/* Desktop Navigation */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="hidden md:flex justify-center h-16 items-center">
          <div className="flex gap-x-12 lg:gap-x-20">
            {navBarItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveItem(item.name)}
                className={`group relative px-2 py-1 transition-all duration-300 ease-in-out
                          hover:scale-105 active:scale-95`}
              >
                {/* Gradient Text */}
                <span
                  className={`relative z-10 text-lg
                              ${
                                activeItem === item.name
                                  ? "text-blue-400"
                                  : "text-blue-400"
                              }`}
                >
                  {item.name}
                </span>

                {/* Animated underline */}
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-400
                               transition-all duration-300 group-hover:w-full"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-between items-center h-16">
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-400 
                         text-xl font-semibold"
          >
            Menu
          </span>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            name="ham"
            className="text-gray-200 hover:text-white transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-black/90 backdrop-blur-sm">
          <div className="flex flex-col items-center py-4 space-y-4">
            {navBarItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  setActiveItem(item.name);
                  setIsMenuOpen(false);
                }}
                className={`w-full text-center py-2 px-4 transition-all duration-300
                          ${
                            activeItem === item.name
                              ? "text-white bg-gradient-to-r from-blue-500/20 to-purple-400/20"
                              : "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-400"
                          }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

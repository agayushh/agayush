import React, { useState } from 'react';

const About = ({ profileImage }) => {
  const [imageError, setImageError] = useState(false);
  
  // Fallback to placeholder if image fails to load or no image provided
  const handleImageError = () => {
    setImageError(true);
  };

  const imageSrc = imageError ? "/api/placeholder/400/400" : profileImage;

  return (
    <div className="relative w-full">
      {/* Banner Image Container */}
      <div className="relative w-full h-48 sm:h-72 md:h-80 lg:h-96 ">
        <img
          src={imageSrc}
          alt="Profile Banner"
          className="w-full h-full object-cover rounded-lg bg-gray-100 "
          onError={handleImageError}
        />
      </div>

      {/* Profile Picture Container */}
      <div className="absolute left-4 sm:left-8 transform -translate-y-1/2">
        <img
          src={imageSrc}
          alt="Profile Picture"
          className="h-24 w-24 sm:h-36 sm:w-36 md:h-40 md:w-40 lg:h-48 lg:w-48 
                   border-4 border-white rounded-full object-cover
                   shadow-lg bg-gray-100"
          onError={handleImageError}
        />
      </div>

      {/* Spacer div to ensure content below has room for the profile picture */}
      <div className="h-12 sm:h-16 md:h-20 lg:h-24" />
    </div>
  );
};

export default About;
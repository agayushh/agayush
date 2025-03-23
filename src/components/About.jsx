import React, { useState } from "react";
import ayushimg from "../assets/WhatsApp Image 2025-03-23 at 20.25.15.jpeg";
import bannerimg from "../assets/WhatsApp Image 2025-03-23 at 20.50.22.jpeg";

const About = ({ profileImage }) => {
  const [imageError, setImageError] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  // Fallback to placeholder if image fails to load or no image provided
  const handleImageError = () => {
    setImageError(true);
  };

  const imageSrc = imageError ? "/api/placeholder/400/400" : profileImage;

  // Function to open modal with the clicked image
  const openImageModal = (imgSrc) => {
    setActiveImage(imgSrc);
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
    setActiveImage(null);
  };

  return (
    <div className="relative w-full">
      {/* Banner Image Container */}
      <div className="relative w-full h-48 sm:h-72 md:h-80 lg:h-96">
        <img
          src={bannerimg}
          alt="Profile Banner"
          className="w-full h-full object-cover bg-gray-100 cursor-pointer"
          onError={handleImageError}
          onClick={() => openImageModal(imageSrc)}
        />
      </div>

      {/* Profile Picture Container */}
      <div className="absolute left-4 sm:left-8 transform -translate-y-1/2">
        <img
          src={ayushimg}
          alt="Profile Picture"
          className="h-24 w-24 sm:h-36 sm:w-36 md:h-40 md:w-40 lg:h-48 lg:w-48 
                   border-4 border-white rounded-full object-cover
                   shadow-lg bg-gray-100 cursor-pointer"
          onError={handleImageError}
          onClick={() => openImageModal(ayushimg)}
        />
      </div>

      {/* Spacer div to ensure content below has room for the profile picture */}
      <div className="h-12 sm:h-16 md:h-20 lg:h-24" />

      {/* Image Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl max-h-screen p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-10 p-2 bg-black bg-opacity-50 rounded-full text-white"
              onClick={closeModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img
              src={activeImage}
              alt="Enlarged"
              className="max-h-screen max-w-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default About;

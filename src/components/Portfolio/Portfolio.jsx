import React, { useState } from 'react';
import PhotoModal from '../PhotoModal';

const photos = [
  { src: "src/assets/poert1.png", alt: 'house' },
  { src: "src/assets/port2.png", alt: 'cake' },
  { src: "src/assets/port3.png", alt: 'play-house' },
  { src: "src/assets/poert1.png", alt: 'house' },
  { src: "src/assets/port2.png", alt: 'cake' },
  { src: "src/assets/port3.png", alt: 'play-house' },
];

export default function Portfolio() {
  const [showPhoto, setShowPhoto] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(null);

  const handlePhotoClick = (photoSrc) => {
    setCurrentPhoto(photoSrc);
    setShowPhoto(true);
  };

  const handleClosePhoto = () => {
    setShowPhoto(false);
    setCurrentPhoto(null);
  };

  return (
    <div>
      <div className="min-h-lvh container mx-auto pt-24">
        <header>
          <h2 className='font-bold text-4xl text-center pt-6 uppercase'>Portfolio component</h2>
          <div className="flex justify-center items-center py-3">
            <div className="bg-black h-1 w-20"></div>
            <span className="mx-2 font-bold text-lg "><i className='fas fa-star'></i></span>
            <div className="bg-black h-1 w-20"></div>
          </div>
        </header>
        <main>
          <div className="py-8">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-5">
                {photos.map((photo, index) => (
                  <div key={index} className="relative group cursor-pointer">
                    <div className="relative rounded-lg overflow-hidden">
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="rounded-lg w-full h-auto object-cover"
                        onClick={() => handlePhotoClick(photo.src)}
                      />
                      <div
                        className="absolute inset-0 bg-green-700 bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex justify-center items-center"
                        onClick={() => handlePhotoClick(photo.src)}
                      >
                        <span className="text-white font-bold text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <i className="fa-solid fa-plus text-9xl text-white"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

        {/* Modal for enlarged photo */}
        <PhotoModal src={showPhoto ? currentPhoto : null} onClose={handleClosePhoto} />
      </div>
    </div>
  );
}

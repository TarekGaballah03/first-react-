import React from 'react';

const PhotoModal = ({ src, onClose }) => {
  if (!src) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
    >
      <div className="relative">
        <button
          onClick={onClose}
          className="absolute -top-3  right-0 text-white p-8 text-4xl font-bold focus:outline-none"
        >
          &times;
        </button>
        <img
          src={src}
          alt="Enlarged"
          className="max-w-screen-sm max-h-screen p-4 cursor-auto"
        />
      </div>
    </div>
  );
};

export default PhotoModal;

// components/Modal.js
import React from 'react';
import Image from 'next/image';

const Modal = ({ isOpen, onClose, images }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative bg-white p-6 rounded-lg max-w-3xl w-full">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black font-bold text-lg"
        >
          &times;
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <div key={index} className="bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src={img}
                alt={`Gallery image ${index + 1}`}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;

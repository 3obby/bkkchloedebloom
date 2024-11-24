'use client';

import React from 'react';

export default function StartOrderModal({ isOpen, onClose, filter }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-white bg-opacity-30 backdrop-blur-md flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white bg-opacity-80 backdrop-blur-md p-6 rounded-lg mx-4 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✖
        </button>

        {/* Filter Display */}
        {filter && (
          <div className="text-sm text-gray-600 mb-4 text-center">
            Filter: {filter}
          </div>
        )}

        {/* Modal Options */}
        <div className="flex flex-col space-y-4 text-black">
          <button className="px-4 py-3 bg-white bg-opacity-60 backdrop-blur-md rounded-lg text-center hover:bg-opacity-80 transition-all">
            Flowers 🌹
          </button>
          <button className="px-4 py-3 bg-white bg-opacity-60 backdrop-blur-md rounded-lg text-center hover:bg-opacity-80 transition-all">
            Bouquet 💐
          </button>
          <button className="px-4 py-3 bg-white bg-opacity-60 backdrop-blur-md rounded-lg text-center hover:bg-opacity-80 transition-all">
            Custom 🫶
          </button>
        </div>
      </div>
    </div>
  );
}
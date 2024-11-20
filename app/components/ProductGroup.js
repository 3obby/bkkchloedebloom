'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function ProductGroup({ title, image, isActive, distance }) {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  // Define translations for each product group
  const translations = {
    'Birthday': [
      { lang: 'English', text: 'Birthday' },
      { lang: 'Thai', text: 'วันเกิด' },
      { lang: 'Chinese', text: '生日' },
      { lang: 'Japanese', text: '誕生日' },
      { lang: 'Korean', text: '생일' },
    ],
    'Romance': [
      { lang: 'English', text: 'Romance' },
      { lang: 'Thai', text: 'โรแมนติก' },
      { lang: 'Chinese', text: '浪漫' },
      { lang: 'Japanese', text: 'ロマンス' },
      { lang: 'Korean', text: '로맨스' },
    ],
    'Wedding': [
      { lang: 'English', text: 'Wedding' },
      { lang: 'Thai', text: 'งานแต่งงาน' },
      { lang: 'Chinese', text: '婚礼' },
      { lang: 'Japanese', text: '結婚式' },
      { lang: 'Korean', text: '결혼식' },
    ],
    'Corporate': [
      { lang: 'English', text: 'Corporate' },
      { lang: 'Thai', text: 'องค์กร' },
      { lang: 'Chinese', text: '企业' },
      { lang: 'Japanese', text: '企業' },
      { lang: 'Korean', text: '기업' },
    ],
    'Colors': [
      { lang: 'English', text: 'Colors' },
      { lang: 'Thai', text: 'สี' },
      { lang: 'Chinese', text: '颜色' },
      { lang: 'Japanese', text: '色' },
      { lang: 'Korean', text: '색깔' },
    ],
  };

  // Define images for each product group
  const groupImages = {
    'Birthday': ['/images/birthday1.jpg', '/images/birthday2.jpg'],
    'Romance': ['/images/romance1.jpg', '/images/romance2.jpg'],
    'Wedding': ['/images/wedding1.jpg', '/images/wedding2.jpg'],
    'Corporate': ['/images/corporate1.jpg', '/images/corporate2.jpg'],
    'Colors': ['/images/colors1.jpg', '/images/colors2.jpg'],
  };

  return (
    <div 
      className={`cursor-pointer p-2 pb-0 transition-all duration-500
        ${isActive ? 'bg-white bg-opacity-20 backdrop-blur-md rounded-t-lg' : 'bg-transparent'}`}
      onClick={handleClick}
    >
      {/* Title above image */}
      <h2 className={`text-lg sm:text-xl md:text-2xl font-bold text-white text-center mb-4 transition-opacity duration-500
        ${isActive ? 'opacity-100' : 'opacity-40'}`}>
        {title}
      </h2>

      {/* Image */}
      <div
        className="relative transition-opacity duration-500"
        style={{
          opacity: Math.max(0.2, 1 - distance * 0.8),
        }}
      >
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className="object-cover w-full h-auto"
          priority
        />
      </div>

      {/* Modal with glass-like background */}
      {showModal && (
        <div
          className="modal-overlay fixed inset-0 bg-white bg-opacity-30 backdrop-blur-md flex items-center justify-center z-50"
          onClick={handleClose}
        >
          <div
            className="modal-content bg-white bg-opacity-80 backdrop-blur-md p-6 rounded-lg relative max-w-3xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-button absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={handleClose}
            >
              ✖
            </button>
            <h2 className="text-xl font-bold my-4">{title}</h2>
            {/* Display parent photos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {groupImages[title]?.map((imgSrc, index) => (
                <div key={index} className="relative w-full h-48">
                  <Image
                    src={imgSrc}
                    alt={`${title} image ${index + 1}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
            {/* Translations */}
            <ul className="mt-4">
              {translations[title]?.map(({ lang, text }) => (
                <li key={lang}>
                  <strong>{lang}:</strong> {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
} 
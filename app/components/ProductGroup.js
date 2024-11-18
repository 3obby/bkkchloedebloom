'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function ProductGroup({ title, image }) {
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

  return (
    <>
      <div
        className="product-group max-w-[270px] min-w-[200px] w-full mx-auto relative cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
        onClick={handleClick}
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 flex items-center justify-center px-5">
            {translations[title] ? (
              <div className="text-center">
                {translations[title].map((item, index) => (
                  <h2 key={index} className="text-3xl font-bold text-white stroke-text mb-1">
                    {item.text}
                  </h2>
                ))}
              </div>
            ) : (
              <h2 className="text-3xl font-bold text-white stroke-text text-center px-5">
                {title}
              </h2>
            )}
          </div>
          <Image
            src={image}
            alt={title}
            layout="responsive"
            width={300}
            height={300}
            className="object-cover"
          />
        </div>
      </div>

      {showModal && (
        <div
          className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleClose}
        >
          <div
            className="modal-content relative bg-white bg-opacity-20 backdrop-blur-lg p-6 max-w-3xl max-h-[80vh] overflow-auto rounded-2xl m-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white hover:text-gray-200 text-2xl"
              onClick={handleClose}
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold mb-4">{title} Gallery</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <Image
                src={image}
                alt={title}
                width={300}
                height={300}
                className="rounded-lg"
              />
              <Image
                src={image}
                alt={title}
                width={300}
                height={300}
                className="rounded-lg"
              />
              <Image
                src={image}
                alt={title}
                width={300}
                height={300}
                className="rounded-lg"
              />
              <Image
                src={image}
                alt={title}
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
} 
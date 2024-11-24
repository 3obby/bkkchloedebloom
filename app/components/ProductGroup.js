'use client';

import React from 'react';
import Image from 'next/image';

export default function ProductGroup({ title, image, isActive, distance, onImageClick }) {
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
    <div className="w-full flex flex-col">
      {/* Title with Translations */}
      <div className={`text-center transition-all duration-500 py-6 ${
        isActive ? 'opacity-100' : 'opacity-0'
      }`}>
        {translations[title]?.map((translation, index) => (
          <p key={index} className="text-sm leading-relaxed text-black">
            {translation.text}
          </p>
        ))}
      </div>

      {/* Image Container */}
      <div className="w-full relative rounded-b-lg overflow-hidden">
        <div 
          className={`relative w-full aspect-[3/2] cursor-pointer transition-all duration-500 ${
            isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-50'
          }`}
          onClick={onImageClick}
        >
          <Image
            src={image}
            alt={title}
            fill
            priority
            sizes="100vw"
            style={{ 
              objectFit: 'contain',
              objectPosition: 'center'
            }}
            className="rounded-b-lg"
          />
        </div>
      </div>
    </div>
  );
}
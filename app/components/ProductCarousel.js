'use client';

import React, { useState } from 'react';
import ProductGroup from './ProductGroup';
import StartOrderModal from './StartOrderModal';

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(null);

  const products = [
    { title: "Corporate", image: "/pgcorporatebw2.png" },
    { title: "Birthday", image: "/pgbirthdaybw2.png" },
    { title: "Colors", image: "/colorsbw2.png" },
    { title: "Romance", image: "/pgromancebw2.png" },
    { title: "Wedding", image: "/weddingbw2.png" }
  ];

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % products.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleImageClick = (filter) => {
    setSelectedFilter(filter);
    setIsModalOpen(true);
  };

  return (
    <div className="relative w-full bg-white bg-opacity-20 rounded-lg shadow-lg">
      {/* Flex Container for Carousel and Controls */}
      <div className="flex flex-col">
        {/* Navigation Controls */}
        <div className="bg-white bg-opacity-20 backdrop-blur-md py-2 px-4 rounded-t-lg">
          <div className="flex items-center justify-center space-x-6">
            {/* Previous Button */}
            <button 
              onClick={handlePrev}
              className="w-7 h-7 flex items-center justify-center bg-white bg-opacity-20 backdrop-blur-md rounded-full
                       hover:bg-opacity-30 transition-all duration-300"
            >
              <span className="text-lg leading-none text-black">←</span>
            </button>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-1.5">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isTransitioning) {
                      setIsTransitioning(true);
                      setCurrentIndex(index);
                      setTimeout(() => setIsTransitioning(false), 500);
                    }
                  }}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 
                    ${currentIndex === index 
                      ? 'bg-black scale-110' 
                      : 'bg-black bg-opacity-50 hover:bg-opacity-75'}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="w-7 h-7 flex items-center justify-center bg-white bg-opacity-20 backdrop-blur-md rounded-full
                       hover:bg-opacity-30 transition-all duration-300"
            >
              <span className="text-lg leading-none text-black">→</span>
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden rounded-b-lg">
          {/* Products Container */}
          <div
            className="flex transition-transform duration-500 ease-in-out w-full"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {products.map((product, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0"
              >
                <ProductGroup
                  title={product.title}
                  image={product.image}
                  isActive={index === currentIndex}
                  distance={Math.abs(currentIndex - index)}
                  onImageClick={() => handleImageClick(product.title)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Start Order Modal */}
      <StartOrderModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedFilter(null);
        }}
        filter={selectedFilter}
      />
    </div>
  );
}
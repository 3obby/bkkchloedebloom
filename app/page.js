'use client';

import { useState } from 'react';
import Image from "next/image";
import ProductCarousel from './components/ProductCarousel';
import StartOrderModal from './components/StartOrderModal';
import BackgroundVideo from './components/BackgroundVideo';
import RotatingText from './components/RotatingText';

export default function Home() {
  // Define icon sizes outside of the return statement
  const iconSize = 50; // Icon size in pixels
  const cartIconSize = 40; // Cart icon size in pixels

  // Add state to manage the modal's visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col mx-8">

      {/* Navigation Bar */}
      <nav className="relative px-4 sm:px-8 py-4 flex items-center border-custom">
        {/* Left and Right Borders */}
        <div className="border-left"></div>
        <div className="border-right"></div>

        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/chloelogo.jpg"
            alt="Chloe de Bloom"
            width={80}
            height={80}
            className="rounded-full"
          />
        </div>

        {/* Spacer */}
        <div className="flex-grow"></div>

        {/* Social Media Icons and Cart Icon */}
        <div className="flex items-center space-x-2 xs:space-x-1">
          {/* Line Link */}
          <a
            href="https://lin.ee/do1AZPx"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0"
          >
            <Image
              src="/linelogobig.png"
              alt="Line"
              width={iconSize}
              height={iconSize}
              className="px-2 xs:px-1"
            />
          </a>

          {/* Instagram Link */}
          <a
            href="https://www.instagram.com/chloe_de_bloom/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0"
          >
            <Image
              src="/iglogobig.png"
              alt="Instagram"
              width={iconSize}
              height={iconSize}
              className="px-2 xs:px-1"
            />
          </a>

          {/* WhatsApp Link */}
          <a
            href="https://wa.me/66991786326"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0"
          >
            <Image
              src="/walogobig.png"
              alt="WhatsApp"
              width={iconSize}
              height={iconSize}
              className="px-2 xs:px-1"
            />
          </a>

    
        </div>
      </nav>

      {/* Body */}
      <main className="min-h-screen w-full relative overflow-hidden">
        <BackgroundVideo />
      

        {/* Main Content */}
        <div className="relative min-h-screen flex flex-col items-center pt-16 z-10">
          {/* Content Container with Max Width */}
          <div className="w-full max-w-[600px] mx-auto px-4">
            {/* Info */}
            <div className="w-full flex flex-col items-center bg-white bg-opacity-20 backdrop-blur-md p-8 rounded-lg shadow-lg space-y-4">
              <RotatingText 
                translations={[
                  "Delivery + Pickup in Bangkok",
                  "จัดส่ง / รับสินค้าในกรุงเทพฯ",
                  "曼谷送货和自取",
                  "バンコクでの配達と受け取り",
                  "방콕 배달 및 픽업"
                ]}
                className="text-lg text-center font-light text-black w-full"
              />
              <p>🌺🌷🪻🌸🌼🌹💐</p>

              {/* Start Order Button */}
              <button
                className="px-8 py-4 my-8 bg-green-500 text-white rounded-lg outline-white outline-4 outline-offset-2 shadow-[6px_6px_0_0_#A7D5EE] flex items-center space-x-2"
                onClick={() => setIsModalOpen(true)}
              >
                <span>Start Order</span>
                <div className="flex items-center justify-center bg-white bg-opacity-20 rounded-full backdrop-blur-md">
                  <Image
                    src="/cartflower.png"
                    alt="Cart"
                    width={cartIconSize}
                    height={cartIconSize}
                  />
                </div>
              </button>
            </div>

            {/* Product Groups */}
            <div className="py-8 w-full">
              <ProductCarousel />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative h-16 border-custom flex items-center justify-center">
        {/* Left and Right Borders */}
        <div className="border-left"></div>
        <div className="border-right"></div>
        {/* Footer content */}
        <p>
          Made with ❤️ in Bangkok
        </p>
      </footer>

      {/* Start Order Modal */}
      <StartOrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        className="relative w-full max-w-xs mx-auto bg-white bg-opacity-20 p-4 rounded-lg shadow-lg"
      />
    </div>
  );
}

'use client';

import { useState } from 'react';
import Image from "next/image";
import ProductCarousel from './components/ProductCarousel';
import StartOrderModal from './components/StartOrderModal';

export default function Home() {
  // Define icon sizes outside of the return statement
  const iconSize = 50; // Icon size in pixels
  const cartIconSize = 40; // Cart icon size in pixels

  // Add state to manage the modal's visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col mx-10">

      {/* Navigation Bar */}
      <nav className="relative px-5 sm:px-10 py-5 flex items-center border-custom">
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
        <div className="flex items-center space-x-1 xs:space-x-0">
          {/* Line Link */}
          <a
            href="https://line.me/ti/p/your-line-id"
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
            href="https://instagram.com/your-instagram-username"
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
            href="https://wa.me/your-whatsapp-number"
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
      <main className="relative flex-1 px-10 border-custom">
        {/* Left and Right Borders */}
        <div className="border-left"></div>
        <div className="border-right"></div>

        {/* Centering Wrapper */}
        <div className="flex flex-col items-center justify-center h-full">
           {/* Start Order Button */}
           <button
                className="px-5 py-5 my-10 bg-green-500 text-white rounded-lg outline-white outline-4 outline-offset-2 shadow-[6px_6px_0_0_#A7D5EE] flex items-center space-x-2"
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

          {/* Info */}
          <div className="flex flex-col items-center justify-center">
            <p className="text-lg">Delivery + Pickup in Bangkok :)</p>
            <p className="text-lg">จัดส่ง / รับสินค้าในกรุงเทพฯ</p>
          </div>

             

          {/* Product Groups */}
          <div className="py-5 overflow-hidden">
            <ProductCarousel />
          </div>

      
        </div>
      </main>

      {/* Footer */}
      <footer className="relative h-20 border-custom flex items-center justify-center">
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
      />
    </div>
  );
}

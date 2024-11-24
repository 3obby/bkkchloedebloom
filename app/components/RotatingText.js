'use client';

import React, { useEffect, useRef } from 'react';

export default function RotatingText({ translations, className }) {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  // Create the text content alternating between styled text and normal flowers
  const content = translations.map((text, i) => (
    <React.Fragment key={i}>
      {i > 0 && <span className="px-4 text-black">🌸</span>}
      <span className={className}>{text}</span>
    </React.Fragment>
  ));

  useEffect(() => {
    if (contentRef.current && containerRef.current) {
      const contentWidth = contentRef.current.offsetWidth;
      const containerWidth = containerRef.current.offsetWidth;
      
      // Set animation duration based on content length (faster for longer content)
      const duration = contentWidth * 0.005; // 5ms per pixel instead of 20ms
      containerRef.current.style.setProperty('--scroll-duration', `${duration}s`);
    }
  }, [translations]);

  return (
    <div className="relative w-full overflow-hidden" ref={containerRef}>
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .scrolling-content {
          animation: scroll var(--scroll-duration, 1s) linear infinite;
        }
        .scrolling-content:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div
        className="whitespace-nowrap"
        style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
      >
        <div className="inline-block scrolling-content" ref={contentRef}>
          {content}
          <span className="px-4 text-black">🌸</span>
          {content}
        </div>
      </div>
    </div>
  );
}

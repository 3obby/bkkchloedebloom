'use client';

import { useRef, useEffect } from 'react';

export default function BackgroundVideo() {
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) {
      // Adjust the playback rate here
      videoRef.current.playbackRate = 0.5; // Slow down to half speed
    }
  }, []);

  return (
    <div className="video-background">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="video"
      >
        <source src="/bgscene.mp4" type="video/mp4" />
      </video>
    </div>
  );
} 
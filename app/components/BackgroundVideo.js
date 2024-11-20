'use client';

export default function BackgroundVideo() {
  return (
    <div className="video-background">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="video"
      >
        <source src="/bgscene.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
} 
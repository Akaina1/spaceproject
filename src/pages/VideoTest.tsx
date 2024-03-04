// pages/VideoTest.tsx
import React from 'react';
import Link from 'next/link';
import '../app/globals.css'

const VideoTest: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden">
        {/* Video element with absolute positioning */}
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          loop
        >
          <source src="/IMG/vid00002.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Text content */}
      <div className="absolute z-10 text-black inset-0 flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold mb-4">Your Video Test Page</h1>
        <p className="text-lg">This is your content over the video background.</p>
        <Link href="/" passHref>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VideoTest;
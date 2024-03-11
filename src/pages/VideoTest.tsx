// pages/VideoTest.tsx
import React from 'react';
import Link from 'next/link';
import '../app/globals.css';

const VideoTest: React.FC = () => {
  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY || '';
  const videoId = process.env.NEXT_PUBLIC_YOUTUBE_VIDEO_ID || '';

  return (
    <div className="h-screen overflow-hidden">
      <div className="flex items-center justify-center">
        {/* YouTube player container */}
        <div className="w-full h-full aspect-w-16 aspect-h-9">
          {/* YouTube player */}
          <iframe
            className="absolute w-full h-full object-cover"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&showinfo=0&rel=0&fs=0&disablekb=1&modestbranding=1&origin=http://localhost:3000&enablejsapi=1&widgetid=1&key=${apiKey}&vq=hd1440`}
            allowFullScreen
          ></iframe>
        </div>

        {/* Text content */}
        <div className="absolute bottom-8">
          <Link href="/UniverseMap" passHref>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              View Universe Map
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VideoTest;
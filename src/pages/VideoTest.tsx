// pages/VideoTest.tsx
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import '../app/globals.css';

const VideoTest: React.FC = () => {
    return (
        <div className="h-screen flex items-center justify-center relative">
            {/* Video element with absolute positioning */}
            <video
              className="w-full h-screen object-fill"
              autoPlay
              playsInline
            >
              <source src="/IMG/1440p_Space_Intro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
    
          {/* Text content */}
          <div className="absolute bottom-8">
            <Link href="/UniverseMap" passHref>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                View Universe Map
              </button>
            </Link>
          </div>
        </div>
      );
    };

export default VideoTest;
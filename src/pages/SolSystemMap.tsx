// pages/UniverseMap.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../app/globals.css';

const SolSystemMap: React.FC = () => {
    return (
        <div className="h-screen flex items-center justify-center relative">
            {/* Video element with absolute positioning */}
            <video
              className="w-full h-screen object-fill"
              autoPlay
              playsInline
              loop
            >
              <source src="/IMG/Sol-System.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Background music */}
            <audio autoPlay loop>
                <source src='/Sound/UniverseMapBG.mp3' type='audio/mp3' />
                Your browser does not support the audio tag.
            </audio>
    
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

export default SolSystemMap;
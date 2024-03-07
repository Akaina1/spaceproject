// pages/UniverseMap.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../app/globals.css';
import { GalaxySelector } from '@/components/GalaxySelector';

const UniverseMap: React.FC = () => {
  return (
    <div className="h-screen w-screen overflow-hidden flex items-center justify-center relative">
      {/* picture element covering screen */}
      <div className="absolute inset-0 overflow-hidden">
        <Image src='/IMG/scr00010.png' alt='Universe Map' layout="fill" objectFit="cover" />
      </div>

      {/* Background music */}
      <audio autoPlay loop>
        <source src='/Sound/UniverseMapBG.mp3' type='audio/mp3' />
        Your browser does not support the audio tag.
      </audio>

      {/* Galaxy Selector Buttons */}
      <div className="absolute top-8 left-8 flex flex-col gap-4">
        {/* Example with targetPage set to "/galaxy1" and custom displayText */}
        <GalaxySelector targetPage="/SolSystemMap" displayText="Sol System" />

        {/* Example with targetPage set to "/galaxy2" and custom displayText */}
        <GalaxySelector targetPage="/galaxy2" displayText="Galaxy 2" />

        {/* Add more GalaxySelector instances as needed */}
      </div>

      {/* Text content */}
      <div className="absolute bottom-8">
        <Link href="/" passHref>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UniverseMap;
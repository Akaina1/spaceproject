// Import necessary dependencies
import React from 'react';
import Link from 'next/link';
import { SparklesPreview } from '../components/SparklesPreview';

// Your page component
const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-end min-h-screen">
      <SparklesPreview />

      {/* Background music */}
      <audio autoPlay loop>
        <source src='/Sound/LandingBG.mp3' type='audio/mp3' />
        Your browser does not support the audio tag.
      </audio>

      <div className="absolute bottom-8">
        <Link href="/VideoTest" passHref>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Play Intro
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

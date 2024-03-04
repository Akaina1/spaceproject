// Import necessary dependencies
import React from 'react';
import Link from 'next/link';
import { SparklesPreview } from '../components/SparklesPreview';

// Your page component
const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-end min-h-screen">
      <SparklesPreview />

      <div className="absolute bottom-8">
        <Link href="/TestPage" passHref>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Go to Test Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

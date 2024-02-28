// Import necessary dependencies
import React from 'react';
import Link from 'next/link';
import {SparklesPreview} from '../components/SparklesPreview';

// Your page component
const Home: React.FC = () => {
  return (
    <div>
      <Link href="/TestPage">
        Go to Test Page
      </Link>
      <SparklesPreview />
    </div>
  );
};

export default Home;
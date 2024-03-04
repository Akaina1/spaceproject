// pages/TestPage.tsx
import React from 'react';
import Link from 'next/link';
import { SparklesTitle } from '@/components/SparklesTitle';

const TestPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen">
      <SparklesTitle />

      <div className="absolute bottom-8">
        <Link href="/VideoTest" passHref>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Go to Video Test
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TestPage;
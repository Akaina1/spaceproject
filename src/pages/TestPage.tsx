// pages/TestPage.tsx
import React from 'react';
import Link from 'next/link';
import { SparklesTitle } from '@/components/SparklesTitle';

const TestPage: React.FC = () => {
  return (
    <div>
        <Link href="/VideoTest">
            Go to Video Test Page
        </Link>
        <SparklesTitle />
    </div>
  );
};

export default TestPage;
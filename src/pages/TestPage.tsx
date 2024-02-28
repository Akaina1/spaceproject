// pages/TestPage.tsx
import React from 'react';
import Link from 'next/link';
import {SparklesTitle} from '../components/SparklesTitle';

const TestPage: React.FC = () => {
  return (
    <div>
        <Link href="/">
            Go Home
        </Link>
        <SparklesTitle />
    </div>
  );
};

export default TestPage;
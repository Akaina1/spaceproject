// components/GalaxySelector.tsx
import React from "react";
import { Button } from "./moving-border";
import Link from "next/link";

interface GalaxySelectorProps {
  targetPage: string;
  displayText: string;
}

export function GalaxySelector({ targetPage, displayText }: GalaxySelectorProps) {
  return (
    <div>
      <Link href={targetPage} passHref>
        <Button
          borderRadius="2rem"
          className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          {displayText}
        </Button>
      </Link>
    </div>
  );
}
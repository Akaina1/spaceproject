"use client";
import React, { useState, useEffect, useMemo } from "react";
import { TypewriterEffectSmooth } from "./typerwriter-effect";

export function TypewriterEffectSmoothDemo() {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  const lines = useMemo(() => {
    return [
      [
        {
          text: "Welcome to the",
        },
        {
          text: "Universe.",
          className: "text-blue-500 dark:text-blue-500",
        },
      ],
      [
        {
          text: "The Greatest",
        },
        {
          text: "Mystery.",
          className: "text-blue-500 dark:text-blue-500",
        },
      ],
      [
        {
          text: "Let us begin our",
        },
        {
          text: "Journey.",
          className: "text-blue-500 dark:text-blue-500",
        },
      ],
    ];
  }, []); // Empty dependency array ensures that the array is only created once on component mount

  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (isTyping) {
      const delay = setTimeout(() => {
        setCurrentLineIndex((prevIndex) => prevIndex + 1);
        setIsTyping(false);
      }, 3000); // Adjust the delay time as needed (in milliseconds)

      return () => {
        clearTimeout(delay);
      };
    }
  }, [currentLineIndex, isTyping]);

  useEffect(() => {
    if (currentLineIndex < lines.length) {
      setIsTyping(true);
    }
  }, [currentLineIndex, lines]);

  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      {lines.slice(0, currentLineIndex + 1).map((line, index) => (
        <TypewriterEffectSmooth key={index} words={line} />
      ))}
    </div>
  );
}
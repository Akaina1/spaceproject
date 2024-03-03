"use client";
import React from "react";
import { SparklesCore } from "./sparkles";
import {TypewriterEffectSmoothDemo} from "./Typewriter";
import "../app/globals.css";

export function SparklesPreview() {
  return (
    <div className="h-screen relative w-screen bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={50}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <TypewriterEffectSmoothDemo />
    </div>
  );
}
"use client";
import React from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col min-h-screen w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] h-full w-full left-0 z-[1] object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />

      {/* Push button to bottom of the full-height hero */}
      <div className="mt-auto pb-2 flex justify-center z-[20]">
        <a
          href="#about"
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] no-underline"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Get to know me</h1>
        </a>
      </div>
    </div>
  );
};

export default Hero;

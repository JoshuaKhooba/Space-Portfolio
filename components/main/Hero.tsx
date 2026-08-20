"use client";
import React from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";
import HeroContent from "../sub/HeroContent";
import LouieRocket from "../sub/LouieRocket";

const Hero = () => {
  return (
    <div className="relative flex flex-col min-h-screen w-full" id="about-me">
      <video
            style={{ pointerEvents: "none" }}
            tabIndex={-1}
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] h-full w-full left-0 z-[1] object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />

      {/* Louie in rocketship — below the blackhole, nose pointing up being sucked in */}
      <div
        className="absolute left-1/2 z-[10] hidden sm:block"
        style={{
          top: "42%",
          width: "clamp(110px, 11vw, 150px)",
          transform: "translateX(-50%)",
          filter:
            "drop-shadow(0 0 28px rgba(239,68,68,0.55)) drop-shadow(0 0 12px rgba(251,191,36,0.45)) drop-shadow(0 0 6px rgba(168,85,247,0.35))",
          animation: "suckIn 3.5s ease-in-out infinite",
        }}
      >
        <style>{`
          @keyframes suckIn {
            0%,100% { transform: translateX(-50%) translateY(0px) scale(1) rotate(18deg); }
            50%      { transform: translateX(-50%) translateY(-12px) scale(0.97) rotate(18deg); }
          }
        `}</style>
        <LouieRocket />
      </div>

      {/* Push button to bottom of the full-height hero */}
      <div className="mt-8 sm:mt-auto pb-2 flex justify-center z-[20]">
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

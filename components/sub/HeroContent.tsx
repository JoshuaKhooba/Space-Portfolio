"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const ROLES = [
  "Full-Stack Developer",
  "iOS Developer",
  "Data Analyst",
  "IT Engineer",
];

const STATS = [
  { value: "4+",  label: "Roles" },
  { value: "6+",  label: "Projects" },
  { value: "2",   label: "Certs" },
  { value: "UCF", label: "Grad" },
];

const HeroContent = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-between px-12 md:px-20 mt-40 w-full z-[20] gap-8"
    >
      {/* ── Left: Text — flex-1 + min-w-0 keeps it from overflowing ── */}
      <div className="flex-1 min-w-0 flex flex-col gap-5 justify-center">

        {/* Top pill */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] w-fit"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5 flex-shrink-0" />
          <h1 className="Welcome-text text-[13px]">
            Orlando, FL · Open to opportunities
          </h1>
        </motion.div>

        {/* Name block */}
        <motion.div
          variants={slideInFromLeft(0.4)}
          className="flex flex-col gap-0 mt-2"
        >
          <span className="text-gray-400 text-lg font-medium tracking-wide">
            Hi, I&apos;m
          </span>
          <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500 tracking-wide">
            Joshua Khooba
          </h1>
        </motion.div>

        {/* Animated role badge */}
        <motion.div variants={slideInFromLeft(0.6)} className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
          <div className="relative h-7 overflow-hidden flex items-center min-w-[220px]">
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="text-base font-semibold text-gray-200 whitespace-nowrap absolute"
              >
                {ROLES[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.75)}
          className="text-sm text-gray-400 leading-relaxed border-l-2 border-purple-500/50 pl-4 max-w-[480px]"
        >
          I build full-stack web apps, iOS apps, and data-driven tools.
          UCF B.S. Information Technology graduate — passionate about clean
          code and creative solutions. 🏴‍☠️
        </motion.p>

        {/* Mini stats row */}
        <motion.div
          variants={slideInFromLeft(0.9)}
          className="flex items-center gap-3 flex-wrap"
        >
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center px-4 py-2 rounded-xl bg-[#0300145e] border border-[#7042f840] hover:border-purple-500/60 transition-colors"
            >
              <span className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 leading-none">
                {stat.value}
              </span>
              <span className="text-[9px] text-gray-500 uppercase tracking-widest mt-0.5">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div variants={slideInFromLeft(1.05)} className="flex gap-4 mt-1 flex-wrap">
          {/* Contact Me */}
          <a
            href="#contact"
            className="group flex items-center gap-2 py-3 px-6 rounded-xl font-semibold text-white text-sm bg-gradient-to-r from-purple-600 to-cyan-500 hover:opacity-90 hover:scale-[1.03] transition-all duration-200 shadow-[0_0_18px_rgba(112,66,248,0.4)]"
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
            Contact Me
          </a>

          {/* Resume */}
          <a
            href="/Joshua_Khooba_Resume.pdf"
            download="Joshua_Khooba_Resume.pdf"
            className="group flex items-center gap-2 py-3 px-6 rounded-xl font-semibold text-gray-200 text-sm border border-[#7042f88b] bg-[#0300145e] hover:border-purple-500 hover:text-white hover:bg-purple-500/10 transition-all duration-200"
          >
            <svg className="w-4 h-4 flex-shrink-0 group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Resume
          </a>
        </motion.div>
      </div>

      {/* ── Right: Graphic — fixed width so text column gets the rest ── */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="hidden md:flex justify-center items-center flex-shrink-0"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="tech icons"
          height={550}
          width={550}
          priority
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;

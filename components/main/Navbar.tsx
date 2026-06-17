import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-6 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between gap-4">

        {/* ── Left: Logo + Name ── */}
        <a href="#about-me" className="flex flex-row items-center gap-3 flex-shrink-0 group">
          {/* Monogram badge */}
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center shadow-[0_0_14px_rgba(112,66,248,0.5)] group-hover:shadow-[0_0_22px_rgba(112,66,248,0.75)] transition-shadow duration-300">
            <span className="text-white font-bold text-base tracking-tight select-none">JK</span>
            {/* Subtle inner ring */}
            <div className="absolute inset-[2px] rounded-[9px] border border-white/20 pointer-events-none" />
          </div>
          {/* Name */}
          <div className="hidden md:flex flex-col leading-none">
            <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 tracking-wide">
              Joshua Khooba
            </span>
            <span className="text-[10px] text-gray-500 tracking-widest uppercase">
              Full-Stack Dev
            </span>
          </div>
        </a>

        {/* ── Center: Nav links ── */}
        <nav className="flex-1 flex items-center justify-center min-w-0">
          <div className="flex items-center gap-0.5 border border-[#7042f861] bg-[#0300145e] px-4 py-2 rounded-full text-sm text-gray-300 overflow-x-auto max-w-full">
            <a href="#about"          className="px-3 py-1 rounded-full hover:bg-purple-500/20 hover:text-white hover:shadow-[0_0_12px_rgba(112,66,248,0.4)] transition-all whitespace-nowrap">About</a>
            <a href="#skills"         className="px-3 py-1 rounded-full hover:bg-purple-500/20 hover:text-white hover:shadow-[0_0_12px_rgba(112,66,248,0.4)] transition-all whitespace-nowrap">Skills</a>
            <a href="#education"      className="px-3 py-1 rounded-full hover:bg-purple-500/20 hover:text-white hover:shadow-[0_0_12px_rgba(112,66,248,0.4)] transition-all whitespace-nowrap">Education</a>
            <a href="#experience"     className="px-3 py-1 rounded-full hover:bg-purple-500/20 hover:text-white hover:shadow-[0_0_12px_rgba(112,66,248,0.4)] transition-all whitespace-nowrap">Experience</a>
            <a href="#certifications" className="px-3 py-1 rounded-full hover:bg-purple-500/20 hover:text-white hover:shadow-[0_0_12px_rgba(112,66,248,0.4)] transition-all whitespace-nowrap">Certs</a>
            <a href="#projects"       className="px-3 py-1 rounded-full hover:bg-purple-500/20 hover:text-white hover:shadow-[0_0_12px_rgba(112,66,248,0.4)] transition-all whitespace-nowrap">Projects</a>
            <a href="#contact"        className="px-3 py-1 rounded-full hover:bg-purple-500/20 hover:text-white hover:shadow-[0_0_12px_rgba(112,66,248,0.4)] transition-all whitespace-nowrap">Contact</a>
          </div>
        </nav>

        {/* ── Right: Social icons ── */}
        <div className="flex flex-row items-center gap-3 flex-shrink-0">
          {Socials.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#0300145e] border border-[#7042f840] hover:border-purple-500 hover:bg-purple-500/20 hover:shadow-[0_0_12px_rgba(112,66,248,0.5)] transition-all duration-200 group"
            >
              <Image
                src={social.src}
                alt={social.name}
                width={16}
                height={16}
                className="opacity-60 group-hover:opacity-100 transition-opacity invert"
              />
            </a>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Navbar;

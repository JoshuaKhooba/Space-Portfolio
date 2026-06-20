"use client";
import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";

const NAV_LINKS = [
  { href: "#about",          label: "About" },
  { href: "#skills",         label: "Skills" },
  { href: "#education",      label: "Education" },
  { href: "#experience",     label: "Experience" },
  { href: "#certifications", label: "Certs" },
  { href: "#projects",       label: "Projects" },
  { href: "#contact",        label: "Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10">
        <div className="w-full h-full flex flex-row items-center justify-between gap-2">

          {/* ── Left: Logo + Name ── */}
          <a href="#about-me" className="flex flex-row items-center gap-2 flex-shrink-0 group">
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center shadow-[0_0_14px_rgba(112,66,248,0.5)] group-hover:shadow-[0_0_22px_rgba(112,66,248,0.75)] transition-shadow duration-300">
              <span className="text-white font-bold text-sm tracking-tight select-none">JK</span>
              <div className="absolute inset-[2px] rounded-[9px] border border-white/20 pointer-events-none" />
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 tracking-wide">
                Joshua Khooba
              </span>
              <span className="text-[10px] text-gray-500 tracking-widest uppercase">
                Full-Stack Dev
              </span>
            </div>
          </a>

          {/* ── Center: Nav links (hidden on mobile) ── */}
          <nav className="hidden md:flex flex-1 items-center justify-center min-w-0">
            <div className="flex items-center gap-0.5 border border-[#7042f861] bg-[#0300145e] px-3 py-2 rounded-full text-sm text-gray-300">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-2.5 py-1 rounded-full hover:bg-purple-500/20 hover:text-white hover:shadow-[0_0_12px_rgba(112,66,248,0.4)] transition-all whitespace-nowrap text-xs lg:text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          {/* ── Right: Social icons (desktop) + Hamburger (mobile) ── */}
          <div className="flex flex-row items-center gap-2 flex-shrink-0">
            {/* Socials — hidden on mobile */}
            <div className="hidden md:flex flex-row items-center gap-2">
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
                    width={15}
                    height={15}
                    className="opacity-60 group-hover:opacity-100 transition-opacity invert"
                  />
                </a>
              ))}
            </div>

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg border border-[#7042f840] bg-[#0300145e] hover:border-purple-500 transition-all"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-0.5 bg-gray-300 transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-5 h-0.5 bg-gray-300 transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-gray-300 transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>

        </div>
      </div>

      {/* ── Mobile dropdown menu ── */}
      {menuOpen && (
        <div className="md:hidden fixed top-[65px] left-0 right-0 z-40 bg-[#030014]/95 backdrop-blur-md border-b border-[#7042f840] px-4 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-white hover:bg-purple-500/20 px-4 py-3 rounded-xl text-sm font-medium transition-all"
            >
              {link.label}
            </a>
          ))}
          {/* Socials row in mobile menu */}
          <div className="flex flex-row gap-3 pt-3 border-t border-[#7042f820] mt-1">
            {Socials.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#0300145e] border border-[#7042f840] hover:border-purple-500 hover:bg-purple-500/20 transition-all"
              >
                <Image
                  src={social.src}
                  alt={social.name}
                  width={16}
                  height={16}
                  className="opacity-60 hover:opacity-100 transition-opacity invert"
                />
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

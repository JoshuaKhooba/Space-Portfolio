"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { LouieAcademy } from "../sub/LouieStory";

const education = [
  {
    degree: "Bachelor of Science — Information Technology",
    minor: "Minor: Computer Science",
    school: "University of Central Florida",
    location: "Orlando, FL",
    graduated: "May 2026",
    logo: "UCF",
    color: "from-yellow-500 to-orange-500",
    borderColor: "border-yellow-500/40",
    highlights: [
      "Member of UCF Tennis Team",
      "Relevant coursework: Data Structures, OS, Networking, Database Systems, Cybersecurity",
      "Dean's List candidate — Information Technology program",
    ],
    badge: "B.S.",
  },
  {
    degree: "Associate in Science — Computer Science",
    minor: null,
    school: "College of Central Florida",
    location: "Ocala, FL",
    graduated: "May 2022",
    logo: "CF",
    color: "from-blue-500 to-cyan-500",
    borderColor: "border-blue-500/40",
    highlights: [
      "Foundation in programming, algorithms, and discrete mathematics",
      "Transferred to UCF with full credit recognition",
    ],
    badge: "A.S.",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="flex flex-col items-center justify-center py-20 scroll-mt-20 px-4 md:px-10 relative"
    >
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center mb-14"
      >
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-4"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Academic Background</h1>
        </motion.div>
        <motion.h2
          variants={slideInFromLeft(0.3)}
          className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center"
        >
          Education
        </motion.h2>
        <motion.p
          variants={slideInFromRight(0.4)}
          className="text-gray-400 text-center mt-2"
        >
          Building a strong academic foundation in technology and computer science
        </motion.p>
      </motion.div>

      {/* Story Ch.4 — Louie at Space Academy (left float) */}
      <div className="hidden lg:block absolute left-4 xl:left-10 top-1/2 -translate-y-1/2 pointer-events-none" style={{zIndex:2}}>
        <LouieAcademy
          size="210px"
          style={{ filter: "drop-shadow(0 0 24px rgba(124,58,237,0.5)) drop-shadow(0 0 10px rgba(167,139,250,0.35))", animation: "acadFloat 5s ease-in-out infinite" }}
        />
        <style>{`@keyframes acadFloat{0%,100%{transform:translateY(0) rotate(-1.5deg)}50%{transform:translateY(-12px) rotate(1.5deg)}}`}</style>
      </div>

      {/* Mobile/tablet — inline centered */}
      <div className="block lg:hidden flex justify-center mb-6">
        <LouieAcademy size="clamp(110px,28vw,155px)" style={{ filter: "drop-shadow(0 0 20px rgba(124,58,237,0.5)) drop-shadow(0 0 8px rgba(167,139,250,0.35))", animation: "acadFloatSm 4.5s ease-in-out infinite" }}/>
        <style>{`@keyframes acadFloatSm{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}`}</style>
      </div>

      {/* Cards */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {education.map((edu, index) => (
          <motion.div
            key={edu.school}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className={`relative rounded-2xl border ${edu.borderColor} bg-[#0300145e] overflow-hidden hover:shadow-[0_0_25px_rgba(112,66,248,0.3)] hover:border-purple-500/60 transition-all duration-300`}
          >
            {/* Gradient top bar */}
            <div className={`h-1 w-full bg-gradient-to-r ${edu.color}`} />

            <div className="p-7">
              {/* Logo + badge */}
              <div className="flex items-start justify-between mb-5">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${edu.color} flex items-center justify-center shadow-lg`}>
                  <span className="text-white font-black text-lg tracking-tight">{edu.logo}</span>
                </div>
                <span className={`text-xs font-bold px-3 py-1.5 rounded-full bg-gradient-to-r ${edu.color} text-white`}>
                  {edu.badge}
                </span>
              </div>

              {/* Degree */}
              <h3 className="text-white font-bold text-lg leading-snug mb-1">
                {edu.degree}
              </h3>
              {edu.minor && (
                <p className="text-purple-400 text-sm font-medium mb-3">{edu.minor}</p>
              )}

              {/* School + meta */}
              <p className={`text-transparent bg-clip-text bg-gradient-to-r ${edu.color} font-semibold text-base mb-1`}>
                {edu.school}
              </p>
              <div className="flex items-center gap-3 text-gray-400 text-sm mb-5">
                <span>📍 {edu.location}</span>
                <span>·</span>
                <span>🎓 {edu.graduated}</span>
              </div>

              {/* Highlights */}
              <ul className="space-y-2 border-t border-[#2A0E61] pt-4">
                {edu.highlights.map((h, i) => (
                  <li key={i} className="flex gap-2 text-gray-300 text-sm leading-relaxed">
                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${edu.color} font-bold flex-shrink-0`}>▸</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;

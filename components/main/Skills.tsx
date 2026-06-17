"use client";
import {
  Backend_skill,
  Database_skill,
  Frontend_skill,
  Language_skills,
  Tool_skill,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const SECTIONS = [
  { label: "💬 Languages",  data: Language_skills },
  { label: "🖥️ Front-End", data: Frontend_skill },
  { label: "⚙️ Back-End",  data: Backend_skill },
  { label: "🗄️ Databases", data: Database_skill },
  { label: "🛠️ Tools",     data: Tool_skill },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-20 py-20"
      style={{ transform: "scale(0.9)" }}
    >
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center mb-6"
      >
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-4"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Full-Stack &amp; Mobile Development</h1>
        </motion.div>
        <h2 className="text-[30px] text-white font-medium text-center mb-2">
          Building with modern technologies
        </h2>
        <p className="cursive text-[20px] text-gray-200 text-center">
          From web to mobile — crafting performant, scalable applications
        </p>
      </motion.div>

      {/* Skill sections */}
      {SECTIONS.map(({ label, data }, sectionIdx) => (
        <div key={label} className="w-full max-w-5xl px-4">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: sectionIdx * 0.05 }}
            className="text-[18px] font-semibold text-gray-300 mb-3 mt-6 border-b border-[#2A0E61] pb-2"
          >
            {label}
          </motion.h3>
          <div className="flex flex-row justify-start flex-wrap gap-5 items-center">
            {data.map((skill, index) => (
              <div key={skill.skill_name} className="flex flex-col items-center gap-1">
                <SkillDataProvider
                  src={skill.Image}
                  width={skill.width}
                  height={skill.height}
                  index={index}
                />
                <span className="text-[10px] text-gray-400 text-center max-w-[60px] leading-tight">
                  {skill.skill_name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Background video */}
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;

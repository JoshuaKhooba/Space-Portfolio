"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { Fun_facts, Hobbies } from "@/constants";

const GlowCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        boxShadow: hovered ? "0 0 40px rgba(112,66,248,0.5)" : "none",
        borderColor: hovered ? "rgb(168,85,247)" : "rgb(42,14,97)",
        transition: "box-shadow 0.3s ease, border-color 0.3s ease",
      }}
      className={`rounded-2xl border bg-[#0300145e] p-8 ${className}`}
    >
      {children}
    </div>
  );
};

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center pt-0 pb-20 px-4 md:px-10 scroll-mt-20"
    >
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center mb-14"
      >
        <motion.h2
          variants={slideInFromLeft(0.3)}
          className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center"
        >
          About Me
        </motion.h2>
      </motion.div>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Hobbies */}
        <GlowCard>
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">🎯 Hobbies &amp; Interests</h3>
            <div className="grid grid-cols-2 gap-3">
              {Hobbies.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 bg-[#030014] border border-[#7042f820] rounded-xl px-4 py-3"
                >
                  <span className="text-2xl">{h.emoji}</span>
                  <span className="text-gray-300 text-sm font-medium">{h.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </GlowCard>

        {/* Fun Facts */}
        <GlowCard>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">⚡ Fun Facts</h3>
            <ul className="space-y-4">
              {Fun_facts.map((fact, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed border-b border-[#2A0E61] pb-3 last:border-0 last:pb-0"
                >
                  <span className="flex-shrink-0 mt-0.5 text-purple-400">▸</span>
                  <span>{fact}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </GlowCard>
      </div>
    </section>
  );
};

export default About;

"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const GlowCard = ({ children, borderColor }: { children: React.ReactNode; borderColor: string }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        boxShadow: hovered ? "0 0 40px rgba(112,66,248,0.5)" : "none",
        borderColor: hovered ? "rgb(168,85,247)" : undefined,
        transition: "box-shadow 0.3s ease, border-color 0.3s ease",
      }}
      className={`rounded-2xl border bg-[#0300145e] overflow-hidden ${borderColor}`}
    >
      {children}
    </div>
  );
};


const experiences = [
  {
    id: 1,
    title: "IT Technician",
    company: "Asurion uBreakiFix",
    date: "Mar 2026 – Jun 2026",
    location: "Orlando, FL",
    type: "Full-Time",
    icon: "🔧",
    color: "from-blue-500 to-cyan-500",
    borderColor: "border-blue-500/40",
    glowColor: "shadow-blue-500/20",
    caption:
      "Hands-on hardware and software repair role for consumer devices across iOS, Android, and Windows platforms in a fast-paced retail tech environment.",
    bullets: [
      "Diagnosed and repaired 50+ devices/week via hardware replacements and software troubleshooting across iOS, Android, and Windows, achieving a 95%+ first-time fix rate.",
      "Delivered technical support to 30+ customers daily by explaining repair processes and preventative tips, driving ~20% increase in repeat business.",
      "Managed inventory of 200+ parts and devices through tracking and quality control procedures, reducing repair delays by 25% and minimizing shortages.",
    ],
    skills: ["iOS", "Android", "Windows", "Hardware Repair", "Customer Support", "Inventory Management"],
  },
  {
    id: 2,
    title: "VIP Operations Intern",
    company: "The Walt Disney Company",
    date: "Jan 2025 – Jan 2026",
    location: "Orlando, FL",
    type: "Internship",
    icon: "🏰",
    color: "from-purple-500 to-pink-500",
    borderColor: "border-purple-500/40",
    glowColor: "shadow-purple-500/20",
    caption:
      "Backend operations internship supporting elite VIP guest experiences across Walt Disney World Resort, requiring precision scheduling, data management, and cross-team coordination.",
    bullets: [
      "Oversaw backend scheduling for 100+ VIP client itineraries per week, coordinating with guides and transportation teams to ensure 98% on-time execution and enhance customer satisfaction.",
      "Processed and maintained records for 1,000+ client bookings monthly, achieving zero data-entry errors by implementing consistent quality checks and improving data accessibility for cross-departmental teams.",
      "Coordinated directly with VIP tour guides, transportation teams, and resort departments to resolve real-time scheduling conflicts and deliver seamless guest experiences.",
    ],
    skills: ["Operations", "Data Management", "Scheduling", "Client Relations", "Cross-Team Coordination"],
  },
  {
    id: 3,
    title: "Corporate Manager",
    company: "Lotus Consulting Firm",
    date: "May 2024 – Dec 2024",
    location: "Orlando, FL",
    type: "Full-Time",
    icon: "📊",
    color: "from-orange-500 to-yellow-500",
    borderColor: "border-orange-500/40",
    glowColor: "shadow-orange-500/20",
    caption:
      "Managed B2B sales and operational strategy for a consulting firm specializing in T-Mobile business internet and telecommunications solutions. Led both people and process improvements across departments.",
    bullets: [
      "Led comprehensive training sessions for 20+ new hires, improving onboarding efficiency and enhancing team productivity by 25% by ensuring consistent adoption of company processes across departments.",
      "Facilitated strategic client meetings and presentations for T-Mobile business internet and telecommunication solutions, securing $2 million in projected annual revenue by aligning solutions with client needs.",
      "Implemented operational process improvements across departments, streamlining workflows and reducing bottlenecks by 30% while accelerating project delivery timelines for multiple high-priority initiatives.",
    ],
    skills: ["B2B Sales", "Team Leadership", "Process Improvement", "Client Presentations", "T-Mobile Solutions"],
  },
  {
    id: 4,
    title: "Data Analysis Intern",
    company: "Orange County Government",
    date: "Aug 2022 – Jan 2023",
    location: "Orlando, FL",
    type: "Internship",
    icon: "🗺️",
    color: "from-green-500 to-teal-500",
    borderColor: "border-green-500/40",
    glowColor: "shadow-green-500/20",
    caption:
      "Government data analysis internship leveraging GIS, spatial databases, and Python scripting to support infrastructure and public-sector decision-making under Public Security Clearance.",
    bullets: [
      "Utilized GIS and Maximo software to collect, organize, and visualize spatial and operational data, producing actionable insights that supported project planning across multiple departments.",
      "Performed API integrations and Python query calls to extract, clean, and analyze 10,000+ records, reducing data retrieval time by 30% and enabling faster reporting for management.",
      "Accessed and analyzed sensitive data under Public Security Clearance, ensuring strict compliance with federal data protection standards while providing accurate, high-quality analysis to support critical decisions.",
    ],
    skills: ["Python", "GIS", "Maximo", "API Integrations", "Data Analysis", "SQL", "Security Clearance"],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center py-20 scroll-mt-20 px-4 md:px-10"
    >
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center mb-16"
      >
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-4"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Professional Journey</h1>
        </motion.div>
        <motion.h2
          variants={slideInFromLeft(0.3)}
          className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center"
        >
          Work Experience
        </motion.h2>
        <motion.p
          variants={slideInFromRight(0.4)}
          className="text-gray-400 text-center mt-2 max-w-[600px]"
        >
          From government data analysis to Disney VIP operations and IT repair
        </motion.p>
      </motion.div>

      {/* Cards */}
      <div className="w-full max-w-4xl flex flex-col gap-8">
        {experiences.map((job, index) => (
          <GlowCard key={job.id} borderColor={job.borderColor}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Gradient top bar */}
            <div className={`h-1 w-full bg-gradient-to-r ${job.color}`} />

            <div className="p-7">
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${job.color} flex items-center justify-center text-2xl flex-shrink-0`}>
                    {job.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl leading-tight">{job.title}</h3>
                    <p className={`text-transparent bg-clip-text bg-gradient-to-r ${job.color} font-semibold text-base`}>
                      {job.company}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-1 flex-shrink-0">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${job.color} text-white`}>
                    {job.type}
                  </span>
                  <span className="text-gray-400 text-sm">{job.date}</span>
                  <span className="text-gray-500 text-sm">📍 {job.location}</span>
                </div>
              </div>

              {/* Caption */}
              <p className="text-gray-300 text-sm leading-relaxed mb-5 italic border-l-2 border-purple-500/50 pl-4">
                {job.caption}
              </p>

              {/* Bullet points */}
              <ul className="space-y-3 mb-5">
                {job.bullets.map((point, i) => (
                  <li key={i} className="flex gap-3 text-gray-300 text-sm leading-relaxed">
                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${job.color} flex-shrink-0 font-bold mt-0.5`}>▸</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Skills used */}
              <div className="pt-4 border-t border-[#2A0E61] flex flex-wrap gap-2">
                {job.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] px-2.5 py-1 rounded-full border border-[#7042f861] text-purple-300 bg-[#7042f810]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
          </GlowCard>
        ))}
      </div>
    </section>
  );
};

export default Experience;

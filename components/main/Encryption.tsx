"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop, slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const certifications = [
  {
    id: 1,
    name: "AWS Academy Graduate",
    subtitle: "Cloud Security Foundations",
    issuer: "Amazon Web Services",
    date: "May 2026",
    hours: "20 Hours",
    credlyUrl: "https://www.credly.com/go/pOJRHvzj",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    color: "from-orange-400 to-yellow-500",
    badge: "AWS",
    description:
      "Completed 20-hour AWS Academy curriculum covering cloud security fundamentals, IAM, data protection, infrastructure security, and compliance. Verified on Credly.",
    tags: ["IAM", "Data Protection", "Infrastructure Security", "Compliance"],
  },
  {
    id: 2,
    name: "IT Fundamentals Pro",
    subtitle: "100% Performance-Based Certification",
    issuer: "TestOut Corporation",
    date: "Dec 2024",
    credentialId: "6-3C6-2FT66",
    credlyUrl: null,
    icon: null,
    color: "from-purple-500 to-cyan-500",
    badge: "IT",
    description:
      "Performance-based certification covering hardware, software, networking, and security fundamentals across real-world IT scenarios.",
    tags: ["Hardware", "Software", "Networking", "Security"],
  },
];

const Encryption = () => {
  return (
    <div
      id="certifications"
      className="flex flex-col items-center justify-center min-h-screen w-full h-full relative py-20 scroll-mt-20 px-4 md:px-10"
    >
      {/* Background video */}
      <div className="absolute inset-0 z-0 opacity-30">
        <video
          className="w-full h-full object-cover"
          preload="false"
          playsInline
          loop
          muted
          autoPlay
          src="/encryption.webm"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 z-[1] bg-[#030014]/60" />

      {/* Content */}
      <div className="relative z-[10] flex flex-col items-center w-full max-w-5xl">
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
            <h1 className="Welcome-text text-[13px]">Verified Credentials</h1>
          </motion.div>
          <motion.h2
            variants={slideInFromLeft(0.3)}
            className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center"
          >
            Certifications
          </motion.h2>
          <motion.p
            variants={slideInFromRight(0.4)}
            className="text-gray-300 text-center mt-2"
          >
            Performance &amp; Security — certified and verified
          </motion.p>
        </motion.div>

        {/* Cert cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative rounded-2xl border border-[#2A0E61] bg-[#03001480] backdrop-blur-sm p-7 flex flex-col gap-4 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(112,66,248,0.25)] transition-all duration-300"
            >
              {/* Top row: icon + badge + date */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  {cert.icon ? (
                    <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center p-2">
                      <Image
                        src={cert.icon}
                        alt={cert.issuer}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-white font-bold text-xl`}>
                      {cert.badge}
                    </div>
                  )}
                  <div>
                    <h3 className="text-white font-bold text-lg leading-tight">{cert.name}</h3>
                    <p className="text-gray-400 text-sm">{cert.issuer}</p>
                  </div>
                </div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${cert.color} text-white whitespace-nowrap`}>
                  {cert.date}
                </span>
              </div>

              {/* Subtitle */}
              <p className={`text-transparent bg-clip-text bg-gradient-to-r ${cert.color} font-semibold text-sm`}>
                {cert.subtitle}
              </p>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">{cert.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {cert.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2 py-0.5 rounded-full border border-[#7042f861] text-purple-300 bg-[#7042f810]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer: credential ID or Credly link */}
              <div className="pt-3 border-t border-[#2A0E61] flex items-center justify-between">
                {cert.credentialId && (
                  <span className="text-xs text-gray-500">
                    ID: <span className="text-gray-400 font-mono">{cert.credentialId}</span>
                  </span>
                )}
                {cert.hours && (
                  <span className="text-xs text-gray-500">⏱ {cert.hours}</span>
                )}
                {cert.credlyUrl && (
                  <a
                    href={cert.credlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors ml-auto"
                  >
                    Verify on Credly →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Encryption;

"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { Projects } from "@/constants";
import Image from "next/image";

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20 scroll-mt-20 px-4 md:px-10"
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
          <h1 className="Welcome-text text-[13px]">Featured on GitHub</h1>
        </motion.div>
        <motion.h2
          variants={slideInFromLeft(0.3)}
          className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center"
        >
          My Projects
        </motion.h2>
        <motion.p
          variants={slideInFromRight(0.4)}
          className="text-gray-400 text-center mt-2"
        >
          A collection of projects across web, mobile, and systems development
        </motion.p>
      </motion.div>

      {/* Project grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Projects.map((project, index) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="relative overflow-hidden rounded-xl border border-[#2A0E61] bg-[#0300145e] hover:border-purple-500 hover:shadow-[0_0_20px_rgba(112,66,248,0.2)] transition-all duration-300 flex flex-col h-full"
            >
              {/* Preview image */}
              <div className="relative w-full h-[180px] overflow-hidden bg-[#030014]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-60 pointer-events-none" />
                <span className="absolute top-3 right-3 text-2xl pointer-events-none">{project.icon}</span>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <h3 className="text-white font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1">{project.description}</p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2 py-0.5 rounded-full border border-[#7042f861] text-purple-300 bg-[#7042f810]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* View on GitHub */}
                <div className="mt-4 flex items-center gap-1 text-cyan-400 text-sm group-hover:text-cyan-300 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  <span>View on GitHub →</span>
                </div>
              </div>
            </motion.div>
          </a>
        ))}
      </div>

      {/* View all */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-12"
      >
        <a
          href="https://github.com/JoshuaKhooba"
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 px-8 button-primary text-white rounded-lg hover:scale-105 transition-transform duration-200 inline-block"
        >
          View All on GitHub
        </a>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;

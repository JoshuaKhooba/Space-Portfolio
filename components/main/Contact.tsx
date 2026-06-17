"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const GlowCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
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
      className={className}
    >
      {children}
    </div>
  );
};

const contactLinks = [
  {
    label: "Email",
    value: "joshuak419@gmail.com",
    href: "mailto:joshuak419@gmail.com",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    color: "from-purple-500 to-cyan-500",
  },
  {
    label: "GitHub",
    value: "github.com/JoshuaKhooba",
    href: "https://github.com/JoshuaKhooba",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
    color: "from-gray-400 to-gray-200",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/joshua-khooba",
    href: "https://linkedin.com/in/joshua-khooba",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: "from-blue-500 to-blue-400",
  },
  {
    label: "Location",
    value: "Orlando, FL",
    href: null,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    color: "from-green-500 to-teal-400",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:joshuak419@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => setStatus("sent"), 1000);
  };

  return (
    <section
      id="contact"
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
          <h1 className="Welcome-text text-[13px]">Get In Touch</h1>
        </motion.div>
        <motion.h2
          variants={slideInFromLeft(0.3)}
          className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center"
        >
          Contact Me
        </motion.h2>
        <motion.p
          variants={slideInFromRight(0.4)}
          className="text-gray-400 text-center mt-2 max-w-[520px]"
        >
          Open to new opportunities, collaborations, or just a chat. I&apos;ll get back to you as soon as possible.
        </motion.p>
      </motion.div>

      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Left: contact info + resume */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6"
        >
          {/* Contact Info card */}
          <GlowCard className="rounded-2xl border border-[#2A0E61] bg-[#0300145e] p-7">
            <h3 className="text-white font-semibold text-xl mb-6">Contact Info</h3>
            <div className="flex flex-col gap-5">
              {contactLinks.map((link) => {
                const inner = (
                  <div className="flex items-center gap-4 group">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${link.color} bg-opacity-20 flex items-center justify-center flex-shrink-0 text-white`}>
                      {link.icon}
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs uppercase tracking-wider">{link.label}</p>
                      <p className={`text-sm font-medium ${link.href ? "text-gray-200 group-hover:text-purple-400 transition-colors" : "text-gray-400"}`}>
                        {link.value}
                      </p>
                    </div>
                    {link.href && (
                      <svg className="w-4 h-4 text-gray-600 group-hover:text-purple-400 transition-colors ml-auto" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    )}
                  </div>
                );
                return link.href ? (
                  <a key={link.label} href={link.href} target={link.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer">
                    {inner}
                  </a>
                ) : (
                  <div key={link.label}>{inner}</div>
                );
              })}
            </div>
          </GlowCard>

          {/* Resume card */}
          <GlowCard className="rounded-2xl border border-purple-500/40 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 p-7 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-semibold">My Resume</h4>
                <p className="text-gray-400 text-sm">Updated June 2026</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Download my full resume covering my experience, skills, education, and projects.
            </p>
            <a
              href="/Joshua_Khooba_Resume.pdf"
              download="Joshua_Khooba_Resume.pdf"
              className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-xl text-center hover:opacity-90 hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Download Resume (PDF)
            </a>
          </GlowCard>
        </motion.div>

        {/* Right: contact form */}
        <GlowCard className="rounded-2xl border border-[#2A0E61] bg-[#0300145e] p-7">
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-white font-semibold text-xl mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="text-gray-400 text-sm mb-1.5 block">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full bg-[#030014] border border-[#2A0E61] rounded-xl px-4 py-3 text-gray-200 text-sm placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
              <div>
                <label className="text-gray-400 text-sm mb-1.5 block">Your Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full bg-[#030014] border border-[#2A0E61] rounded-xl px-4 py-3 text-gray-200 text-sm placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
              <div>
                <label className="text-gray-400 text-sm mb-1.5 block">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Joshua, I'd love to connect about..."
                  className="w-full bg-[#030014] border border-[#2A0E61] rounded-xl px-4 py-3 text-gray-200 text-sm placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-xl hover:opacity-90 hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === "sent" ? (
                  <>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Email Client Opened!
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </GlowCard>

      </div>
    </section>
  );
};

export default Contact;

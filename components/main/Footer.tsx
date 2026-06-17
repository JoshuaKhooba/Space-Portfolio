import React from "react";

const Footer = () => {
  return (
    <footer className="w-full relative z-[10] mt-10">
      {/* Top border gradient line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />

      <div className="w-full bg-[#030014]/80 backdrop-blur-sm px-8 md:px-20 py-12">
        <div className="max-w-6xl mx-auto">

          {/* Main grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

            {/* Brand column */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center shadow-[0_0_14px_rgba(112,66,248,0.5)]">
                  <span className="text-white font-bold text-sm">JK</span>
                </div>
                <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 tracking-wide">
                  Joshua Khooba
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Full-Stack Developer · UCF Graduate · Orlando, FL
              </p>
              {/* Social icons */}
              <div className="flex items-center gap-3 mt-1">
                {[
                  { href: "https://github.com/JoshuaKhooba", label: "GitHub", path: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z", fillRule: "evenodd" as const },
                  { href: "https://linkedin.com/in/joshua-khooba", label: "LinkedIn", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                  { href: "https://instagram.com/luckystraight_777", label: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#0300145e] border border-[#7042f840] hover:border-purple-500 hover:bg-purple-500/20 hover:shadow-[0_0_12px_rgba(112,66,248,0.5)] transition-all duration-200"
                  >
                    <svg className="w-4 h-4 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule={s.fillRule} d={s.path} clipRule={s.fillRule ? "evenodd" : undefined} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Navigate column */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-semibold text-sm uppercase tracking-widest">Navigate</h4>
              <div className="flex flex-col gap-2">
                {[
                  { href: "#about",          label: "About Me" },
                  { href: "#skills",         label: "Skills" },
                  { href: "#education",      label: "Education" },
                  { href: "#experience",     label: "Experience" },
                  { href: "#certifications", label: "Certifications" },
                  { href: "#projects",       label: "Projects" },
                  { href: "#contact",        label: "Contact" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-gray-500 text-sm hover:text-purple-400 transition-colors w-fit"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact column */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-semibold text-sm uppercase tracking-widest">Contact</h4>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:joshuak419@gmail.com"
                  className="flex items-center gap-2 text-gray-500 text-sm hover:text-purple-400 transition-colors"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  joshuak419@gmail.com
                </a>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  Orlando, FL
                </div>
                <a
                  href="/Joshua_Khooba_Resume.pdf"
                  download="Joshua_Khooba_Resume.pdf"
                  className="flex items-center gap-2 text-gray-500 text-sm hover:text-purple-400 transition-colors"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>

          </div>

          {/* Bottom divider + copyright */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#7042f840] to-transparent mb-6" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-2">
            <p className="text-gray-600 text-xs">
              © 2026 Joshua Khooba. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs">
              Built with <span className="text-purple-500">Next.js</span> · <span className="text-cyan-500">TypeScript</span> · <span className="text-purple-500">Tailwind CSS</span>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";
import React from "react";

export default function LouieTethered({
  className = "",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={className} style={{ pointerEvents: "none", ...style }}>
      <svg
        viewBox="0 0 420 260"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", overflow: "visible" }}
        aria-label="Louie the corgi astronaut on a spacewalk tether from the wormhole"
      >
        <defs>
          <radialGradient id="tGlass" cx="35%" cy="30%">
            <stop offset="0%" stopColor="#a8d8ff" stopOpacity="0.25"/>
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.1"/>
          </radialGradient>
          <linearGradient id="tSuit" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e3a8a"/>
            <stop offset="100%" stopColor="#312e81"/>
          </linearGradient>
          <linearGradient id="tRim" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#94a3b8"/>
            <stop offset="100%" stopColor="#334155"/>
          </linearGradient>
          {/* Wormhole entry glow */}
          <radialGradient id="wormGlow" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.9"/>
            <stop offset="40%" stopColor="#7c3aed" stopOpacity="0.6"/>
            <stop offset="100%" stopColor="#4c1d95" stopOpacity="0"/>
          </radialGradient>
          <filter id="tGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="3" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="wormFilter" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="7" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          {/* Tether fades from wormhole (left, transparent) to solid (right) */}
          <linearGradient id="tetherFade" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(147,197,253,0)" />
            <stop offset="20%" stopColor="rgba(147,197,253,0.4)" />
            <stop offset="100%" stopColor="rgba(147,197,253,0.7)" />
          </linearGradient>
          <linearGradient id="tetherFade2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(99,102,241,0)" />
            <stop offset="25%" stopColor="rgba(99,102,241,0.3)" />
            <stop offset="100%" stopColor="rgba(99,102,241,0.5)" />
          </linearGradient>
        </defs>

        <style>{`
          .t-louie {
            animation: tFloat 5s ease-in-out infinite;
            transform-box: fill-box;
            transform-origin: 50% 50%;
          }
          @keyframes tFloat {
            0%,100% { transform: translateY(0)    rotate(-3deg); }
            25%     { transform: translateY(-10px) rotate(2deg);  }
            50%     { transform: translateY(-16px) rotate(-2deg); }
            75%     { transform: translateY(-7px)  rotate(3deg);  }
          }
          .t-tether {
            animation: tRopeWave 5s ease-in-out infinite;
            transform-box: fill-box;
            transform-origin: 0% 50%;
          }
          @keyframes tRopeWave {
            0%,100% { transform: skewY(0deg);   }
            25%     { transform: skewY(-1.5deg); }
            50%     { transform: skewY(-2.5deg); }
            75%     { transform: skewY(-1deg);   }
          }
          .t-ant {
            animation: tAnt 1.8s ease-in-out infinite;
            transform-box: fill-box;
            transform-origin: 50% 50%;
          }
          @keyframes tAnt { 0%,100%{opacity:.9;transform:scale(1)} 50%{opacity:.1;transform:scale(.5)} }
          .t-port-glow { animation: tPortGlow 3s ease-in-out infinite; }
          @keyframes tPortGlow { 0%,100%{opacity:.5} 50%{opacity:1} }
          /* Wormhole swirl pulse */
          .t-worm1 { animation: tWorm 3s ease-in-out infinite; transform-box:fill-box; transform-origin:50% 50%; }
          .t-worm2 { animation: tWorm 3s ease-in-out infinite .4s; transform-box:fill-box; transform-origin:50% 50%; }
          .t-worm3 { animation: tWorm 3s ease-in-out infinite .8s; transform-box:fill-box; transform-origin:50% 50%; }
          @keyframes tWorm {
            0%,100% { transform: scale(1)    rotate(0deg);   opacity:.6; }
            50%     { transform: scale(1.25) rotate(15deg);  opacity:1;  }
          }
          /* Thruster particles */
          .t-p1 { animation: tParticle 2s linear infinite; }
          .t-p2 { animation: tParticle 2s linear infinite .55s; }
          .t-p3 { animation: tParticle 2s linear infinite 1.1s; }
          @keyframes tParticle {
            0%   { opacity:0;  transform: translate(0,0) scale(1); }
            30%  { opacity:.8; }
            100% { opacity:0;  transform: translate(-20px,10px) scale(.3); }
          }
          /* Floating stars */
          .t-s1 { animation: tStar 3s ease-in-out infinite; }
          .t-s2 { animation: tStar 3s ease-in-out infinite .9s; }
          .t-s3 { animation: tStar 3s ease-in-out infinite 1.8s; }
          @keyframes tStar { 0%,100%{opacity:.25} 50%{opacity:.9} }
        `}</style>

        {/* ── Wormhole entry (left edge — inside the purple portal) ── */}
        <g filter="url(#wormFilter)">
          <circle cx="10" cy="240" r="30" fill="url(#wormGlow)" className="t-worm1"/>
          <circle cx="10" cy="240" r="18" fill="url(#wormGlow)" className="t-worm2"/>
          <circle cx="10" cy="240" r="8"  fill="url(#wormGlow)" className="t-worm3"/>
        </g>
        {/* Tether hook emerging from wormhole */}
        <circle cx="10" cy="240" r="5" fill="none" stroke="#a78bfa" strokeWidth="2" opacity="0.8"/>
        <circle cx="10" cy="240" r="2" fill="#c4b5fd" opacity="0.9"/>

        {/* ── Tether rope — fades in from wormhole, curves out to Louie ── */}
        <g className="t-tether">
          {/* Main rope */}
          <path
            d="M 10 240 C 50 215, 85 262, 130 240 C 175 218, 210 252, 255 232 C 278 222, 295 215, 308 210"
            stroke="url(#tetherFade)"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="7 5"
          />
          {/* Secondary rope strand */}
          <path
            d="M 10 243 C 50 219, 85 266, 130 244 C 175 222, 210 256, 255 236 C 278 226, 295 219, 308 214"
            stroke="url(#tetherFade2)"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          {/* Connector clip at Louie's suit */}
          <rect x="302" y="196" width="12" height="12" rx="3" fill="#475569" stroke="#64748b" strokeWidth="1"/>
        </g>

        {/* ── Louie — positioned far right, outside the skill icons ── */}
        <g className="t-louie" filter="url(#tGlow)">

          {/* Suit body */}
          <ellipse cx="362" cy="205" rx="34" ry="26" fill="url(#tSuit)" stroke="#4338ca" strokeWidth="1.2"/>
          {/* Collar / neck ring */}
          <rect x="335" y="183" width="54" height="14" rx="7" fill="url(#tRim)" stroke="rgba(203,213,225,.4)" strokeWidth="1.2"/>
          {/* Tether attach point */}
          <circle cx="338" cy="200" r="4.5" fill="#334155" stroke="#64748b" strokeWidth="1"/>
          {/* Arms */}
          <ellipse cx="326" cy="202" rx="11" ry="17" fill="url(#tSuit)" stroke="#4338ca" strokeWidth="1" transform="rotate(-18 326 202)"/>
          <ellipse cx="319" cy="216" rx="7.5" ry="7.5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
          <ellipse cx="398" cy="202" rx="11" ry="17" fill="url(#tSuit)" stroke="#4338ca" strokeWidth="1" transform="rotate(18 398 202)"/>
          <ellipse cx="405" cy="216" rx="7.5" ry="7.5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
          {/* LOUIE-1 chest decal */}
          <rect x="342" y="197" width="40" height="11" rx="3.5" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="0.8" opacity=".9"/>
          <text x="362" y="206" fontFamily="monospace" fontSize="5.5" fontWeight="700" fill="#93c5fd" textAnchor="middle">LOUIE-1</text>
          {/* Thruster particles */}
          <circle cx="315" cy="218" r="2.5" fill="#60a5fa" className="t-p1"/>
          <circle cx="312" cy="222" r="2"   fill="#a78bfa" className="t-p2"/>
          <circle cx="309" cy="218" r="1.5" fill="#67e8f9" className="t-p3"/>

          {/* ── Helmet dome ── */}
          <circle cx="362" cy="148" r="42" fill="none" stroke="rgba(167,139,250,.4)" strokeWidth="2.2" className="t-port-glow"/>
          <circle cx="362" cy="148" r="39" fill="#0f172a" stroke="#1e293b" strokeWidth="2"/>
          <circle cx="362" cy="148" r="36" fill="url(#tGlass)" stroke="rgba(147,197,253,.45)" strokeWidth="2"/>

          {/* ── Louie's face ── */}
          <circle cx="362" cy="148" r="32" fill="#E9A23B"/>
          {/* Ears */}
          <path fill="#E9A23B" d="M338 130c-8-20-5-42 4-47 9-6 20 11 22 34z"/>
          <path fill="#F6C878" d="M341 128c-5-14-4-32 2-36 5-4 13 8 15 25z"/>
          <path fill="#E9A23B" d="M386 130c8-20 5-42-4-47-9-6-20 11-22 34z"/>
          <path fill="#F6C878" d="M383 128c5-14 4-32-2-36-5-4-13 8-15 25z"/>
          {/* Cheeks */}
          <ellipse cx="334" cy="154" rx="9" ry="5.5" fill="#F08A5D" opacity="0.25"/>
          <ellipse cx="390" cy="154" rx="9" ry="5.5" fill="#F08A5D" opacity="0.25"/>
          {/* Cream muzzle */}
          <ellipse cx="362" cy="160" rx="20" ry="15" fill="#FCFBF7"/>
          {/* Happy eyes */}
          <path d="M343 140 Q351 131 359 140" stroke="#17223B" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
          <path d="M365 140 Q373 131 381 140" stroke="#17223B" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
          {/* Nose */}
          <ellipse cx="362" cy="151" rx="6.5" ry="5" fill="#17223B"/>
          <ellipse cx="360" cy="150" rx="2" ry="1.4" fill="white" opacity="0.5"/>
          {/* Happy mouth + tongue */}
          <path d="M352 163 Q362 172 372 163" stroke="#17223B" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
          <ellipse cx="362" cy="169" rx="6" ry="4.5" fill="#F0899B"/>
          {/* Visor highlight */}
          <path d="M334 122 Q354 110 378 118" stroke="rgba(255,255,255,.48)" strokeWidth="4" fill="none" strokeLinecap="round"/>
          {/* Stars inside helmet */}
          <circle cx="338" cy="132" r="1.8" fill="white" opacity="0.6"/>
          <circle cx="385" cy="126" r="1.3" fill="white" opacity="0.5"/>
          <circle cx="348" cy="120" r="1.5" fill="white" opacity="0.55"/>
          <circle cx="376" cy="136" r="1" fill="white" opacity="0.45"/>
          {/* NASA + K-9 badges */}
          <rect x="323" y="136" width="20" height="12" rx="4" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="0.8" opacity=".9"/>
          <text x="333" y="145" fontFamily="monospace" fontSize="5" fontWeight="700" fill="#93c5fd" textAnchor="middle">NASA</text>
          <rect x="381" y="136" width="20" height="12" rx="4" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="0.8" opacity=".9"/>
          <text x="391" y="145" fontFamily="monospace" fontSize="5" fontWeight="700" fill="#93c5fd" textAnchor="middle">K-9</text>
          {/* Antenna */}
          <line x1="362" y1="108" x2="362" y2="100" stroke="#94a3b8" strokeWidth="2.2" strokeLinecap="round"/>
          <circle cx="362" cy="98"  r="6"   fill="#1d4ed8" stroke="#93c5fd" strokeWidth="1.2"/>
          <circle cx="362" cy="98"  r="3.8" fill="#60a5fa" className="t-ant"/>
        </g>

        {/* Floating stars near Louie */}
        <circle cx="408" cy="102" r="1.8" fill="white" className="t-s1"/>
        <circle cx="320" cy="90"  r="1.2" fill="white" className="t-s2"/>
        <circle cx="415" cy="185" r="1.4" fill="white" className="t-s3"/>
        <circle cx="410" cy="148" r="1"   fill="white" className="t-s1"/>
      </svg>
    </div>
  );
}

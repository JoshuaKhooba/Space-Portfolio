"use client";
import React from "react";

export default function LouieRocket({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div className={className} style={style}>
      <svg
        viewBox="0 0 160 320"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", overflow: "visible" }}
        aria-label="Louie the corgi being sucked into a blackhole"
      >
        <defs>
          <linearGradient id="rBody" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0f172a"/>
            <stop offset="45%" stopColor="#1e1b4b"/>
            <stop offset="100%" stopColor="#0f172a"/>
          </linearGradient>
          <linearGradient id="rNose" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed"/>
            <stop offset="100%" stopColor="#06b6d4"/>
          </linearGradient>
          <linearGradient id="rTrim" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7c3aed"/>
            <stop offset="100%" stopColor="#06b6d4"/>
          </linearGradient>
          <radialGradient id="rGlass" cx="35%" cy="30%">
            <stop offset="0%" stopColor="#a8d8ff" stopOpacity="0.25"/>
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.1"/>
          </radialGradient>
          {/* Mega flame — engines at FULL POWER trying to escape */}
          <radialGradient id="rFlame1" cx="50%" cy="0%">
            <stop offset="0%" stopColor="#fbbf24"/>
            <stop offset="50%" stopColor="#f97316"/>
            <stop offset="100%" stopColor="#dc2626" stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="rFlame2" cx="50%" cy="0%">
            <stop offset="0%" stopColor="#ffffff"/>
            <stop offset="40%" stopColor="#fef3c7"/>
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="rFlame3" cx="50%" cy="0%">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0.6"/>
            <stop offset="100%" stopColor="#dc2626" stopOpacity="0"/>
          </radialGradient>
          <filter id="flameGlow" x="-80%" y="-20%" width="260%" height="220%">
            <feGaussianBlur stdDeviation="6" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="rGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="3" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="alertGlow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="4" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        <style>{`
          /* Rocket shakes and trembles — being pulled in */
          .r-rocket {
            animation: rStruggle 0.45s ease-in-out infinite;
            transform-box: fill-box;
            transform-origin: 50% 50%;
          }
          @keyframes rStruggle {
            0%   { transform: translateX(0)    rotate(-1deg); }
            20%  { transform: translateX(-3px) rotate(2.5deg); }
            40%  { transform: translateX(3px)  rotate(-2deg); }
            60%  { transform: translateX(-2px) rotate(3deg); }
            80%  { transform: translateX(2px)  rotate(-1.5deg); }
            100% { transform: translateX(0)    rotate(-1deg); }
          }
          /* Big flickering flame — max thrust */
          .r-flame-a { animation: rFA .18s ease-in-out infinite alternate; transform-box: fill-box; transform-origin: 50% 0%; }
          @keyframes rFA { from { transform: scaleX(1) scaleY(1); opacity: 1; } to { transform: scaleX(.78) scaleY(1.25); opacity: .85; } }
          .r-flame-b { animation: rFB .14s ease-in-out infinite alternate; transform-box: fill-box; transform-origin: 50% 0%; }
          @keyframes rFB { from { transform: scaleX(.9) scaleY(1); opacity: 1; } to { transform: scaleX(.6) scaleY(1.15); opacity: .9; } }
          .r-flame-c { animation: rFC .22s ease-in-out infinite alternate .06s; transform-box: fill-box; transform-origin: 50% 0%; }
          @keyframes rFC { from { transform: scaleX(1.1) scaleY(.85); opacity: .7; } to { transform: scaleX(.65) scaleY(1.3); opacity: .5; } }
          /* Blinking alert */
          .r-alert { animation: rAlert .6s ease-in-out infinite; }
          @keyframes rAlert { 0%,100%{opacity:1} 50%{opacity:.1} }
          /* Worried eyes */
          .r-brow { animation: rBrow 1.2s ease-in-out infinite; transform-box: fill-box; transform-origin: 50% 50%; }
          @keyframes rBrow { 0%,100%{transform:translateY(0)} 50%{transform:translateY(1.2px)} }
          /* Antenna panic blink */
          .r-ant { animation: rAnt .5s ease-in-out infinite; transform-box: fill-box; transform-origin: 50% 50%; }
          @keyframes rAnt { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.05;transform:scale(.4)} }
          /* Porthole alarm glow */
          .r-port-alarm { animation: rPortAlarm .6s ease-in-out infinite; }
          @keyframes rPortAlarm { 0%,100%{opacity:.5} 50%{opacity:1} }
          /* Gravitational pull streaks */
          .r-streak1 { animation: rStreak1 1.1s linear infinite; }
          .r-streak2 { animation: rStreak2 1.4s linear infinite .3s; }
          .r-streak3 { animation: rStreak3 1.8s linear infinite .7s; }
          @keyframes rStreak1 { 0%{opacity:0;transform:translateX(0) scaleX(1)} 50%{opacity:.7} 100%{opacity:0;transform:translateX(-22px) scaleX(2.5)} }
          @keyframes rStreak2 { 0%{opacity:0;transform:translateX(0)} 50%{opacity:.5} 100%{opacity:0;transform:translateX(20px)} }
          @keyframes rStreak3 { 0%{opacity:0;transform:translateY(0)} 50%{opacity:.4} 100%{opacity:0;transform:translateY(-14px)} }
          /* Sweat drop drip */
          .r-sweat { animation: rSweat 1.8s ease-in infinite; }
          @keyframes rSweat { 0%{opacity:0;transform:translateY(-4px)} 20%{opacity:.9} 80%{opacity:.9;transform:translateY(8px)} 100%{opacity:0;transform:translateY(10px)} }
        `}</style>

        {/* Gravitational pull streaks around the rocket */}
        <line className="r-streak1" x1="30" y1="120" x2="55" y2="122" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" opacity="0"/>
        <line className="r-streak2" x1="130" y1="110" x2="105" y2="115" stroke="#67e8f9" strokeWidth="1.5" strokeLinecap="round" opacity="0"/>
        <line className="r-streak3" x1="80" y1="60" x2="80" y2="80" stroke="#c4b5fd" strokeWidth="1.5" strokeLinecap="round" opacity="0"/>
        <line className="r-streak1" x1="25" y1="145" x2="50" y2="142" stroke="#818cf8" strokeWidth="1" strokeLinecap="round" opacity="0"/>
        <line className="r-streak2" x1="135" y1="140" x2="110" y2="137" stroke="#22d3ee" strokeWidth="1" strokeLinecap="round" opacity="0"/>

        <g className="r-rocket">
          {/* ══ MEGA FLAME — full power escape thrust ══ */}
          <g filter="url(#flameGlow)">
            <ellipse className="r-flame-c" cx="80" cy="272" rx="28" ry="50" fill="url(#rFlame3)"/>
            <ellipse className="r-flame-a" cx="80" cy="272" rx="22" ry="44" fill="url(#rFlame1)"/>
            <ellipse className="r-flame-b" cx="80" cy="272" rx="13" ry="30" fill="url(#rFlame2)"/>
          </g>

          {/* Engine nozzle */}
          <path d="M60 262 L100 262 L93 276 L67 276 Z" fill="#1e293b" stroke="#334155" strokeWidth="1.5"/>
          <rect x="62" y="256" width="36" height="8" rx="4" fill="#334155"/>

          {/* Fins */}
          <path d="M60 218 L34 264 L60 258 Z" fill="#312e81" stroke="#4338ca" strokeWidth="1"/>
          <path d="M100 218 L126 264 L100 258 Z" fill="#312e81" stroke="#4338ca" strokeWidth="1"/>
          <line x1="53" y1="228" x2="40" y2="260" stroke="#6366f1" strokeWidth="0.8" opacity="0.6"/>
          <line x1="107" y1="228" x2="120" y2="260" stroke="#6366f1" strokeWidth="0.8" opacity="0.6"/>

          {/* Rocket body */}
          <rect x="56" y="78" width="48" height="185" rx="12" fill="url(#rBody)" stroke="#2d3a5e" strokeWidth="1.5"/>
          <line x1="56" y1="186" x2="104" y2="186" stroke="#2d3a5e" strokeWidth="1"/>
          <line x1="56" y1="220" x2="104" y2="220" stroke="#2d3a5e" strokeWidth="1"/>
          <rect x="56" y="180" width="48" height="9" rx="0" fill="url(#rTrim)" opacity="0.7"/>
          <rect x="56" y="216" width="48" height="7" rx="0" fill="url(#rTrim)" opacity="0.5"/>

          {/* Nose cone */}
          <path d="M80 10 L104 80 L56 80 Z" fill="url(#rNose)"/>
          <path d="M80 10 L94 80 L66 80 Z" fill="url(#rNose)" opacity="0.55"/>
          <path d="M80 16 L90 64" stroke="rgba(255,255,255,.28)" strokeWidth="2.5" strokeLinecap="round"/>

          {/* Antenna */}
          <line x1="80" y1="10" x2="80" y2="3" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="80" cy="2" r="5" fill="#dc2626" stroke="#fca5a5" strokeWidth="1"/>
          <circle cx="80" cy="2" r="3" fill="#ef4444" className="r-ant"/>

          {/* ── "!!" distress signal above rocket ── */}
          <g filter="url(#alertGlow)">
            <text x="52" y="4" fontFamily="monospace" fontSize="13" fontWeight="900" fill="#fbbf24" className="r-alert">⚠</text>
          </g>

          {/* ══ Porthole — WORRIED Louie ══ */}
          {/* Alarm glow ring */}
          <circle cx="80" cy="145" r="28" fill="none" stroke="#ef4444" strokeWidth="2" className="r-port-alarm" filter="url(#rGlow)"/>
          {/* Porthole frame */}
          <circle cx="80" cy="145" r="24" fill="#0f172a" stroke="#334155" strokeWidth="2"/>
          {/* Glass */}
          <circle cx="80" cy="145" r="22" fill="url(#rGlass)"/>

          {/* ── Louie's WORRIED face ── */}
          {/* Fur head */}
          <circle cx="80" cy="145" r="20" fill="#E9A23B"/>
          {/* Ears */}
          <path fill="#E9A23B" d="M62 134c-5-12-3-24 2-27 5-3 12 6 14 20z"/>
          <path fill="#F6C878" d="M65 132c-3-9-2-18 1-20 3-2 8 4 9 15z"/>
          <path fill="#E9A23B" d="M98 134c5-12 3-24-2-27-5-3-12 6-14 20z"/>
          <path fill="#F6C878" d="M95 132c3-9 2-18-1-20-3-2-8 4-9 15z"/>
          {/* Cheek blush (paler — pale with fear) */}
          <ellipse cx="63" cy="148" rx="5.5" ry="3.5" fill="#F08A5D" opacity="0.18"/>
          <ellipse cx="97" cy="148" rx="5.5" ry="3.5" fill="#F08A5D" opacity="0.18"/>
          {/* Cream muzzle */}
          <ellipse cx="80" cy="152" rx="13" ry="10" fill="#FCFBF7"/>
          {/* WORRIED eyes — angled inward (sad/scared) */}
          <g className="r-brow">
            {/* Left brow — angled down toward center */}
            <line x1="66" y1="132" x2="72" y2="135" stroke="#17223B" strokeWidth="2" strokeLinecap="round"/>
            {/* Right brow — angled down toward center */}
            <line x1="94" y1="132" x2="88" y2="135" stroke="#17223B" strokeWidth="2" strokeLinecap="round"/>
          </g>
          {/* Worried wide eyes (big pupils, scared) */}
          <ellipse cx="70" cy="140" rx="6.5" ry="7.5" fill="#17223B"/>
          <circle cx="67.5" cy="137" r="2.5" fill="white"/>
          <circle cx="66.5" cy="136" r="1" fill="white" opacity="0.6"/>
          <ellipse cx="90" cy="140" rx="6.5" ry="7.5" fill="#17223B"/>
          <circle cx="87.5" cy="137" r="2.5" fill="white"/>
          <circle cx="86.5" cy="136" r="1" fill="white" opacity="0.6"/>
          {/* Nose */}
          <ellipse cx="80" cy="147" rx="4.5" ry="3.5" fill="#17223B"/>
          <ellipse cx="78.5" cy="146" rx="1.3" ry="1" fill="white" opacity="0.5"/>
          {/* Worried open mouth — small O shape */}
          <ellipse cx="80" cy="156" rx="4.5" ry="5.5" fill="#17223B"/>
          <ellipse cx="80" cy="157" rx="3" ry="4" fill="#F0899B"/>
          {/* Sweat drop (fear) */}
          <path d="M63 131 Q61 135 63.5 137 Q66 135 63 131Z" fill="#93c5fd" opacity="0.85" className="r-sweat"/>
          <path d="M97 131 Q99 135 96.5 137 Q94 135 97 131Z" fill="#93c5fd" opacity="0.8" className="r-sweat" style={{animationDelay:"0.4s"}}/>

          {/* Porthole glass highlight */}
          <path d="M64 132 Q72 125 88 129" stroke="rgba(255,255,255,.4)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

          {/* Side bolts */}
          <circle cx="58" cy="126" r="2.5" fill="#1e293b" stroke="#4338ca" strokeWidth="1"/>
          <circle cx="102" cy="126" r="2.5" fill="#1e293b" stroke="#4338ca" strokeWidth="1"/>
          <circle cx="58" cy="166" r="2.5" fill="#1e293b" stroke="#4338ca" strokeWidth="1"/>
          <circle cx="102" cy="166" r="2.5" fill="#1e293b" stroke="#4338ca" strokeWidth="1"/>

          {/* LOUIE-1 decal */}
          <rect x="56" y="192" width="48" height="13" rx="4" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="0.8" opacity="0.9"/>
          <text x="80" y="202.5" fontFamily="monospace" fontSize="6.5" fontWeight="700" fill="#93c5fd" textAnchor="middle">LOUIE-1</text>

          {/* Body stars */}
          <circle cx="60" cy="102" r="1" fill="white" opacity="0.45"/>
          <circle cx="100" cy="108" r="0.8" fill="white" opacity="0.4"/>
          <circle cx="62" cy="234" r="1" fill="white" opacity="0.35"/>
        </g>
      </svg>
    </div>
  );
}

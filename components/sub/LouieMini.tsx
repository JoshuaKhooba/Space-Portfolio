import React from "react";

/**
 * LouieMini — a small space-suited corgi head, used as a decorative accent
 * throughout the page.
 *
 * Props:
 *   size      — CSS width applied to the wrapper div (default "64px")
 *   mood      — "happy" | "idle" (default "idle")
 *   className — extra Tailwind classes on the wrapper
 *   style     — extra inline styles on the wrapper
 */
type LouieMiniProps = {
  size?: string;
  mood?: "happy" | "idle";
  className?: string;
  style?: React.CSSProperties;
};

export default function LouieMini({
  size = "64px",
  mood = "idle",
  className = "",
  style,
}: LouieMiniProps) {
  const eyeOpen =
    mood === "happy"
      ? // happy crescent (upside-down arc)
        <>
          <path d="M28 40 Q35 32 42 40" stroke="#17223B" strokeWidth="3" strokeLinecap="round" fill="none"/>
          <path d="M58 40 Q65 32 72 40" stroke="#17223B" strokeWidth="3" strokeLinecap="round" fill="none"/>
        </>
      : // normal eyes
        <>
          <ellipse cx="35" cy="44" rx="7" ry="7.5" fill="#17223B"/>
          <circle cx="32" cy="41" r="2.5" fill="white"/>
          <ellipse cx="65" cy="44" rx="7" ry="7.5" fill="#17223B"/>
          <circle cx="62" cy="41" r="2.5" fill="white"/>
        </>;

  return (
    <div className={className} style={{ width: size, flexShrink: 0, ...style }}>
      <svg
        viewBox="0 0 100 114"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", overflow: "visible" }}
        aria-label="Louie the corgi astronaut"
      >
        <defs>
          <radialGradient id="mGlass" cx="35%" cy="30%">
            <stop offset="0%" stopColor="#a8d8ff" stopOpacity="0.22"/>
            <stop offset="70%" stopColor="#60a5fa" stopOpacity="0.07"/>
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.15"/>
          </radialGradient>
          <linearGradient id="mRim" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#94a3b8"/>
            <stop offset="100%" stopColor="#334155"/>
          </linearGradient>
        </defs>
        <style>{`
          .mini-scene { animation: miniBob 4s ease-in-out infinite; transform-box: fill-box; transform-origin: 50% 100%; }
          @keyframes miniBob { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-3px)} }
          .mini-tail { animation: miniWag .8s ease-in-out infinite; transform-box: fill-box; transform-origin: 10% 70%; }
          @keyframes miniWag { 0%,100%{transform:rotate(-10deg)} 50%{transform:rotate(9deg)} }
          .mini-ant { animation: miniAnt 1.8s ease-in-out infinite; transform-box: fill-box; transform-origin: 50% 50%; }
          @keyframes miniAnt { 0%,100%{opacity:.9;transform:scale(1)} 50%{opacity:.1;transform:scale(.6)} }
        `}</style>

        <g className="mini-scene">
          {/* Ears */}
          <path fill="#E9A23B" d="M22 44c-7-18-5-36 3-41 8-5 18 9 22 30z"/>
          <path fill="#F6C878" d="M27 41c-5-14-3-28 2-32 6-4 12 7 15 24z"/>
          <path fill="#E9A23B" d="M78 44c7-18 5-36-3-41-8-5-18 9-22 30z"/>
          <path fill="#F6C878" d="M73 41c5-14 3-28-2-32-6-4-12 7-15 24z"/>
          {/* Head */}
          <ellipse cx="50" cy="62" rx="40" ry="38" fill="#E9A23B"/>
          {/* Cheek blush */}
          <ellipse cx="18" cy="66" rx="9" ry="6" fill="#F08A5D" opacity="0.28"/>
          <ellipse cx="82" cy="66" rx="9" ry="6" fill="#F08A5D" opacity="0.28"/>
          {/* Face cream */}
          <ellipse cx="50" cy="72" rx="26" ry="22" fill="#FCFBF7"/>
          {/* Eyes */}
          {eyeOpen}
          {/* Nose */}
          <ellipse cx="50" cy="61" rx="7" ry="5.5" fill="#17223B"/>
          <ellipse cx="47" cy="59.5" rx="2" ry="1.5" fill="white" opacity="0.5"/>
          {/* Mouth */}
          <path d="M50 70c5 0 8 2.5 8 5.5s-3 5.5-8 5.5-8-2.5-8-5.5 3-5.5 8-5.5z" fill="#17223B"/>
          <ellipse cx="50" cy="79" rx="5" ry="3" fill="#F0899B"/>
          {/* Tail (tiny) */}
          <g className="mini-tail">
            <path fill="#E9A23B" d="M82 70c2-9 8-15 13-14 5 1 7 9 4 16-3 8-14 11-17 8z"/>
          </g>
          {/* Paws */}
          <ellipse cx="30" cy="96" rx="12" ry="9" fill="#FCFBF7"/>
          <ellipse cx="70" cy="96" rx="12" ry="9" fill="#FCFBF7"/>
          <ellipse cx="26" cy="94" rx="3" ry="4" fill="#DCD3C0"/>
          <ellipse cx="30" cy="92" rx="3" ry="4.5" fill="#DCD3C0"/>
          <ellipse cx="34" cy="94" rx="3" ry="4" fill="#DCD3C0"/>
          <ellipse cx="66" cy="94" rx="3" ry="4" fill="#DCD3C0"/>
          <ellipse cx="70" cy="92" rx="3" ry="4.5" fill="#DCD3C0"/>
          <ellipse cx="74" cy="94" rx="3" ry="4" fill="#DCD3C0"/>

          {/* ── Space Helmet Overlay ── */}
          {/* Dome */}
          <ellipse cx="50" cy="56" rx="46" ry="52" fill="url(#mGlass)" stroke="rgba(147,197,253,.55)" strokeWidth="2"/>
          {/* Visor highlight */}
          <path d="M20 26 Q38 14 62 20" stroke="rgba(255,255,255,.55)" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
          {/* Helmet rim */}
          <rect x="8" y="96" width="84" height="12" rx="6" fill="url(#mRim)" stroke="rgba(203,213,225,.3)" strokeWidth="1"/>
          {/* Shoulder badges */}
          <rect x="6" y="62" width="14" height="9" rx="3" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="0.8" opacity=".9"/>
          <text x="13" y="70" fontFamily="monospace" fontSize="4.5" fontWeight="700" fill="#93c5fd" textAnchor="middle">NASA</text>
          <rect x="80" y="62" width="14" height="9" rx="3" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="0.8" opacity=".9"/>
          <text x="87" y="70" fontFamily="monospace" fontSize="4.5" fontWeight="700" fill="#93c5fd" textAnchor="middle">K-9</text>
          {/* Stars inside helmet */}
          <circle cx="28" cy="40" r="1" fill="white" opacity=".6"/>
          <circle cx="70" cy="34" r="0.8" fill="white" opacity=".5"/>
          <circle cx="40" cy="28" r="0.9" fill="white" opacity=".55"/>
          <circle cx="62" cy="42" r="0.7" fill="white" opacity=".45"/>
          {/* Antenna */}
          <line x1="50" y1="4" x2="50" y2="14" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="50" cy="4" r="5" fill="#1d4ed8" stroke="#93c5fd" strokeWidth="1"/>
          <circle cx="50" cy="4" r="3" fill="#60a5fa" className="mini-ant"/>
        </g>
      </svg>
    </div>
  );
}

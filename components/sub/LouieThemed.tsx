"use client";
import React from "react";

type BaseProps = { size?: string; className?: string; style?: React.CSSProperties };

const BASE_STYLE = `
  .lth-bob { animation: lthBob 4s ease-in-out infinite; transform-box:fill-box; transform-origin:50% 100%; }
  @keyframes lthBob { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }
  .lth-wag { animation: lthWag .8s ease-in-out infinite; transform-box:fill-box; transform-origin:10% 70%; }
  @keyframes lthWag { 0%,100%{transform:rotate(-10deg)} 50%{transform:rotate(10deg)} }
  .lth-blink { animation: lthBlink 5s ease-in-out infinite; transform-box:fill-box; transform-origin:50% 50%; }
  @keyframes lthBlink { 0%,88%,100%{transform:scaleY(1)} 91%{transform:scaleY(.08)} 94%{transform:scaleY(1)} }
`;

/* ── Shared corgi head ───────────────────────────────────────── */
function CorgiHead({ cx=50, cy=55, r=32, mood="happy" }: { cx?:number; cy?:number; r?:number; mood?:string }) {
  const happy = mood === "happy";
  const focused = mood === "focused";
  return (
    <>
      {/* Ears */}
      <path fill="#E9A23B" d={`M${cx-24} ${cy-12}c-6-16-4-34 3-38 7-5 16 8 18 27z`}/>
      <path fill="#F6C878" d={`M${cx-21} ${cy-13}c-4-12-3-26 2-29 4-3 11 6 12 20z`}/>
      <path fill="#E9A23B" d={`M${cx+24} ${cy-12}c6-16 4-34-3-38-7-5-16 8-18 27z`}/>
      <path fill="#F6C878" d={`M${cx+21} ${cy-13}c4-12 3-26-2-29-4-3-11 6-12 20z`}/>
      {/* Head */}
      <ellipse cx={cx} cy={cy} rx={r} ry={r-1} fill="#E9A23B"/>
      {/* Blush */}
      <ellipse cx={cx-r+4} cy={cy+8} rx="7" ry="4.5" fill="#F08A5D" opacity="0.28"/>
      <ellipse cx={cx+r-4} cy={cy+8} rx="7" ry="4.5" fill="#F08A5D" opacity="0.28"/>
      {/* Muzzle */}
      <ellipse cx={cx} cy={cy+12} rx="16" ry="13" fill="#FCFBF7"/>
      {/* Eyes */}
      {happy ? (
        <>
          <path d={`M${cx-14} ${cy-2}Q${cx-9} ${cy-10} ${cx-4} ${cy-2}`} stroke="#17223B" strokeWidth="3" strokeLinecap="round" fill="none"/>
          <path d={`M${cx+4} ${cy-2}Q${cx+9} ${cy-10} ${cx+14} ${cy-2}`} stroke="#17223B" strokeWidth="3" strokeLinecap="round" fill="none"/>
        </>
      ) : focused ? (
        <>
          <ellipse cx={cx-10} cy={cy-2} rx="6" ry="7" fill="#17223B"/>
          <circle cx={cx-12} cy={cy-4} r="2.2" fill="white"/>
          <ellipse cx={cx+10} cy={cy-2} rx="6" ry="7" fill="#17223B"/>
          <circle cx={cx+8} cy={cy-4} r="2.2" fill="white"/>
          {/* focused brow */}
          <line x1={cx-15} y1={cy-10} x2={cx-6} y2={cy-8} stroke="#17223B" strokeWidth="2.2" strokeLinecap="round"/>
          <line x1={cx+15} y1={cy-10} x2={cx+6} y2={cy-8} stroke="#17223B" strokeWidth="2.2" strokeLinecap="round"/>
        </>
      ) : (
        <>
          <ellipse cx={cx-10} cy={cy-2} rx="6" ry="7" fill="#17223B"/>
          <circle cx={cx-12} cy={cy-4} r="2.2" fill="white"/>
          <ellipse cx={cx+10} cy={cy-2} rx="6" ry="7" fill="#17223B"/>
          <circle cx={cx+8} cy={cy-4} r="2.2" fill="white"/>
        </>
      )}
      {/* Nose */}
      <ellipse cx={cx} cy={cy+6} rx="5" ry="4" fill="#17223B"/>
      <ellipse cx={cx-1.5} cy={cy+5} rx="1.5" ry="1.1" fill="white" opacity="0.5"/>
      {/* Mouth */}
      {happy ? (
        <>
          <path d={`M${cx-8} ${cy+17}Q${cx} ${cy+23} ${cx+8} ${cy+17}`} stroke="#17223B" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <ellipse cx={cx} cy={cy+22} rx="5" ry="3.5" fill="#F0899B"/>
        </>
      ) : (
        <path d={`M${cx-6} ${cy+17}Q${cx} ${cy+22} ${cx+6} ${cy+17}`} stroke="#17223B" strokeWidth="2" fill="none" strokeLinecap="round"/>
      )}
    </>
  );
}

/* ══════════════════════════════════════════════════════════════
   1. GRAD LOUIE — Education section
   UCF graduation cap + diploma
   ══════════════════════════════════════════════════════════════ */
export function LouieGrad({ size = "90px", className = "", style }: BaseProps) {
  return (
    <div className={className} style={{ width: size, flexShrink: 0, ...style }}>
      <svg viewBox="0 0 120 150" xmlns="http://www.w3.org/2000/svg" style={{ width:"100%", height:"auto", overflow:"visible" }}>
        <style>{BASE_STYLE + `
          .lg-diploma { animation: lgDiploma 3s ease-in-out infinite; transform-box:fill-box; transform-origin:50% 90%; }
          @keyframes lgDiploma { 0%,100%{transform:rotate(-4deg)} 50%{transform:rotate(4deg)} }
          .lg-tassel { animation: lgTassel .9s ease-in-out infinite; transform-box:fill-box; transform-origin:0% 0%; }
          @keyframes lgTassel { 0%,100%{transform:rotate(-8deg)} 50%{transform:rotate(12deg)} }
        `}</style>
        <g className="lth-bob">
          {/* Body / gown */}
          <path fill="#1a1a2e" d="M20 118c0-18 13-30 40-30s40 12 40 30v20H20z"/>
          <path fill="#2d2d5e" d="M44 88h32l6 30H38z"/>
          {/* Gown collar */}
          <path fill="#fbbf24" d="M44 88 Q60 98 76 88 L74 100 Q60 108 46 100z" opacity="0.9"/>
          {/* Tail */}
          <g className="lth-wag">
            <path fill="#E9A23B" d="M90 105c3-10 10-16 16-14 6 2 7 10 3 17-4 8-16 10-19 7z"/>
          </g>
          {/* Paws holding diploma */}
          <ellipse cx="30" cy="118" rx="12" ry="9" fill="#FCFBF7"/>
          <ellipse cx="90" cy="118" rx="12" ry="9" fill="#FCFBF7"/>
          {/* Diploma scroll */}
          <g className="lg-diploma">
            <rect x="34" y="108" width="52" height="28" rx="5" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5"/>
            <rect x="34" y="112" width="52" height="4" rx="0" fill="#fbbf24" opacity="0.6"/>
            <rect x="34" y="128" width="52" height="4" rx="0" fill="#fbbf24" opacity="0.6"/>
            <text x="60" y="124" fontFamily="serif" fontSize="6.5" fontWeight="700" fill="#92400e" textAnchor="middle">DIPLOMA</text>
            <circle cx="60" cy="136" r="5" fill="#fbbf24" stroke="#d97706" strokeWidth="1"/>
            <text x="60" y="139" fontFamily="serif" fontSize="5" fontWeight="900" fill="#92400e" textAnchor="middle">UCF</text>
          </g>
          {/* Head */}
          <CorgiHead cx={60} cy={52} r={32} mood="happy"/>
          {/* Graduation cap */}
          <ellipse cx="60" cy="20" rx="36" ry="8" fill="#1a1a2e"/>
          <rect x="42" y="10" width="36" height="12" rx="2" fill="#1a1a2e"/>
          {/* Cap top board */}
          <rect x="30" y="6" width="60" height="7" rx="1.5" fill="#111827"/>
          {/* Gold trim */}
          <rect x="30" y="6" width="60" height="2" rx="1" fill="#fbbf24"/>
          {/* Tassel */}
          <g className="lg-tassel">
            <line x1="82" y1="9" x2="90" y2="28" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="90" cy="28" r="4" fill="#fbbf24"/>
            <line x1="90" y1="32" x2="88" y2="42" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="90" y1="32" x2="92" y2="42" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="90" y1="32" x2="90" y2="44" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round"/>
          </g>
        </g>
      </svg>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   2. DEV LOUIE — Experience section
   Hoodie + laptop with green code on screen + coffee
   ══════════════════════════════════════════════════════════════ */
export function LouieDev({ size = "90px", className = "", style }: BaseProps) {
  return (
    <div className={className} style={{ width: size, flexShrink: 0, ...style }}>
      <svg viewBox="0 0 130 150" xmlns="http://www.w3.org/2000/svg" style={{ width:"100%", height:"auto", overflow:"visible" }}>
        <style>{BASE_STYLE + `
          .ld-cursor { animation: ldCursor .8s step-end infinite; }
          @keyframes ldCursor { 0%,100%{opacity:1} 50%{opacity:0} }
          .ld-steam1 { animation: ldSteam 2s ease-in-out infinite; }
          .ld-steam2 { animation: ldSteam 2s ease-in-out infinite .5s; }
          .ld-steam3 { animation: ldSteam 2s ease-in-out infinite 1s; }
          @keyframes ldSteam { 0%{opacity:0;transform:translateY(0) scaleX(1)} 50%{opacity:.7} 100%{opacity:0;transform:translateY(-12px) scaleX(.6)} }
        `}</style>
        <g className="lth-bob">
          {/* Hoodie body */}
          <path fill="#312e81" d="M15 125c0-20 15-32 50-32s50 12 50 32v18H15z"/>
          <path fill="#1e1b4b" d="M42 93h46l8 32H34z"/>
          {/* Hoodie pocket */}
          <rect x="48" y="112" width="34" height="18" rx="6" fill="#1e1b4b" stroke="#4338ca" strokeWidth="1"/>
          {/* Hood strings */}
          <line x1="52" y1="95" x2="48" y2="115" stroke="#4338ca" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="78" y1="95" x2="82" y2="115" stroke="#4338ca" strokeWidth="1.5" strokeLinecap="round"/>
          {/* Tail */}
          <g className="lth-wag">
            <path fill="#E9A23B" d="M100 110c3-10 10-16 16-14 6 2 7 10 3 17-4 8-16 10-19 7z"/>
          </g>
          {/* Laptop */}
          <rect x="18" y="112" width="74" height="44" rx="5" fill="#0f172a" stroke="#334155" strokeWidth="1.5"/>
          <rect x="21" y="115" width="68" height="36" rx="3" fill="#020617"/>
          {/* Code lines on screen */}
          <text x="25" y="126" fontFamily="monospace" fontSize="5.5" fill="#22c55e">const louie = () =&gt; &#123;</text>
          <text x="25" y="133" fontFamily="monospace" fontSize="5.5" fill="#818cf8">  return "good boy"</text>
          <text x="25" y="140" fontFamily="monospace" fontSize="5.5" fill="#22c55e">&#125;</text>
          <text x="25" y="147" fontFamily="monospace" fontSize="5.5" fill="#94a3b8">// 🐾 woof</text>
          <rect className="ld-cursor" x="52" y="143" width="3" height="6" fill="#22c55e"/>
          {/* Laptop hinge */}
          <rect x="18" y="155" width="74" height="4" rx="2" fill="#1e293b"/>
          {/* Coffee cup */}
          <rect x="98" y="128" width="18" height="22" rx="4" fill="#7c3aed" stroke="#a78bfa" strokeWidth="1"/>
          <path d="M116 136 Q124 136 124 142 Q124 148 116 148" fill="none" stroke="#a78bfa" strokeWidth="1.5"/>
          <rect x="100" y="128" width="14" height="5" rx="2" fill="#a78bfa" opacity="0.6"/>
          {/* Steam */}
          <path className="ld-steam1" d="M104 126 Q106 122 104 118" stroke="#c4b5fd" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <path className="ld-steam2" d="M108 126 Q110 121 108 117" stroke="#c4b5fd" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <path className="ld-steam3" d="M112 126 Q114 122 112 118" stroke="#c4b5fd" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          {/* Paws on keyboard */}
          <ellipse cx="42" cy="113" rx="11" ry="8" fill="#FCFBF7"/>
          <ellipse cx="70" cy="113" rx="11" ry="8" fill="#FCFBF7"/>
          {/* Head */}
          <CorgiHead cx={65} cy={52} r={32} mood="focused"/>
          {/* Headphones */}
          <path d="M32 50 Q32 20 65 20 Q98 20 98 50" fill="none" stroke="#4338ca" strokeWidth="5" strokeLinecap="round"/>
          <rect x="28" y="46" width="10" height="16" rx="5" fill="#312e81" stroke="#6366f1" strokeWidth="1"/>
          <rect x="92" y="46" width="10" height="16" rx="5" fill="#312e81" stroke="#6366f1" strokeWidth="1"/>
        </g>
      </svg>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   3. SHIELD LOUIE — Certifications section
   Security shield + AWS cloud badge + cape
   ══════════════════════════════════════════════════════════════ */
export function LouieShield({ size = "90px", className = "", style }: BaseProps) {
  return (
    <div className={className} style={{ width: size, flexShrink: 0, ...style }}>
      <svg viewBox="0 0 120 155" xmlns="http://www.w3.org/2000/svg" style={{ width:"100%", height:"auto", overflow:"visible" }}>
        <style>{BASE_STYLE + `
          .ls-shield { animation: lsShield 2.5s ease-in-out infinite; transform-box:fill-box; transform-origin:50% 90%; }
          @keyframes lsShield { 0%,100%{transform:rotate(-5deg)} 50%{transform:rotate(5deg)} }
          .ls-glow { animation: lsGlow 2s ease-in-out infinite; }
          @keyframes lsGlow { 0%,100%{opacity:.5} 50%{opacity:1} }
          .ls-cape { animation: lsCape .9s ease-in-out infinite; transform-box:fill-box; transform-origin:50% 0%; }
          @keyframes lsCape { 0%,100%{transform:skewX(-2deg)} 50%{transform:skewX(3deg)} }
        `}</style>
        <g className="lth-bob">
          {/* Cape */}
          <g className="ls-cape">
            <path fill="#7c3aed" d="M28 80 Q20 120 30 145 Q60 135 90 145 Q100 120 92 80 Q60 92 28 80z"/>
            <path fill="#6d28d9" d="M60 85 Q60 120 60 145 Q75 135 90 145 Q100 120 92 80 Q76 88 60 85z"/>
            {/* Cape star */}
            <path fill="#fbbf24" d="M60 108l3 8h8l-6.5 5 2.5 8L60 124l-7 5 2.5-8L49 116h8z" opacity="0.9"/>
          </g>
          {/* Body */}
          <path fill="#1e3a8a" d="M28 80c0-10 14-18 32-18s32 8 32 18v28H28z"/>
          {/* Chest armor plate */}
          <path fill="#1e40af" d="M38 80h44v20H38z" rx="4"/>
          <path fill="#3b82f6" d="M38 80h44v4H38z" opacity="0.6"/>
          {/* Shield (held in paw) */}
          <g className="ls-shield">
            <path fill="#1d4ed8" d="M8 102 Q8 80 20 72 Q32 80 32 102 Q26 118 20 122 Q14 118 8 102z" stroke="#60a5fa" strokeWidth="1.5"/>
            <path fill="#2563eb" d="M14 100 Q14 84 20 78 Q26 84 26 100 Q23 112 20 116 Q17 112 14 100z"/>
            {/* Shield emblem */}
            <path fill="#fbbf24" d="M20 88l2 6h6l-5 3.5 2 6-5-3.5-5 3.5 2-6-5-3.5h6z"/>
          </g>
          {/* AWS badge */}
          <g className="ls-glow">
            <rect x="78" y="88" width="34" height="22" rx="5" fill="#0f172a" stroke="#f97316" strokeWidth="1.5"/>
            <text x="95" y="98" fontFamily="monospace" fontSize="5" fontWeight="700" fill="#f97316" textAnchor="middle">AWS</text>
            <text x="95" y="106" fontFamily="monospace" fontSize="4" fill="#94a3b8" textAnchor="middle">CERTIFIED</text>
          </g>
          {/* Paws */}
          <ellipse cx="36" cy="108" rx="11" ry="8" fill="#FCFBF7"/>
          <ellipse cx="84" cy="108" rx="11" ry="8" fill="#FCFBF7"/>
          {/* Head */}
          <CorgiHead cx={60} cy={50} r={30} mood="idle"/>
          {/* Helmet visor band */}
          <rect x="30" y="44" width="60" height="8" rx="4" fill="#1e3a8a" opacity="0.5"/>
        </g>
      </svg>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   4. TENNIS LOUIE — About section
   Sunglasses + tennis racket + sporty vibes
   ══════════════════════════════════════════════════════════════ */
export function LouieTennis({ size = "90px", className = "", style }: BaseProps) {
  return (
    <div className={className} style={{ width: size, flexShrink: 0, ...style }}>
      <svg viewBox="0 0 130 150" xmlns="http://www.w3.org/2000/svg" style={{ width:"100%", height:"auto", overflow:"visible" }}>
        <style>{BASE_STYLE + `
          .lt-racket { animation: ltRacket 1.8s ease-in-out infinite; transform-box:fill-box; transform-origin:50% 90%; }
          @keyframes ltRacket { 0%,100%{transform:rotate(-10deg)} 50%{transform:rotate(10deg)} }
          .lt-ball { animation: ltBall 1.8s ease-in-out infinite; transform-box:fill-box; transform-origin:50% 50%; }
          @keyframes ltBall { 0%,100%{transform:translate(0,0)} 25%{transform:translate(8px,-14px)} 50%{transform:translate(16px,0)} 75%{transform:translate(8px,10px)} }
        `}</style>
        <g className="lth-bob">
          {/* Sporty jersey */}
          <path fill="#7c3aed" d="M20 115c0-18 14-28 45-28s45 10 45 28v25H20z"/>
          <path fill="#6d28d9" d="M45 87h40l8 28H37z"/>
          {/* Jersey stripes */}
          <path fill="#a78bfa" d="M65 87v43" stroke="#a78bfa" strokeWidth="3"/>
          <path fill="none" d="M37 100h56" stroke="#a78bfa" strokeWidth="2"/>
          {/* #1 on jersey */}
          <text x="65" y="112" fontFamily="monospace" fontSize="12" fontWeight="900" fill="#c4b5fd" textAnchor="middle" opacity="0.7">#1</text>
          {/* Tail */}
          <g className="lth-wag">
            <path fill="#E9A23B" d="M98 108c3-10 10-16 16-14 6 2 7 10 3 17-4 8-16 10-19 7z"/>
          </g>
          {/* Tennis racket */}
          <g className="lt-racket">
            {/* Handle */}
            <rect x="8" y="118" width="8" height="28" rx="4" fill="#92400e"/>
            {/* Grip tape */}
            <rect x="8" y="128" width="8" height="3" rx="1" fill="#fbbf24" opacity="0.7"/>
            <rect x="8" y="134" width="8" height="3" rx="1" fill="#fbbf24" opacity="0.7"/>
            {/* Racket head */}
            <ellipse cx="12" cy="105" rx="16" ry="20" fill="none" stroke="#7c3aed" strokeWidth="3"/>
            {/* Strings */}
            <line x1="12" y1="85" x2="12" y2="125" stroke="#a78bfa" strokeWidth="0.8"/>
            <line x1="4" y1="88" x2="4" y2="122" stroke="#a78bfa" strokeWidth="0.8"/>
            <line x1="20" y1="88" x2="20" y2="122" stroke="#a78bfa" strokeWidth="0.8"/>
            <line x1="-2" y1="95" x2="26" y2="95" stroke="#a78bfa" strokeWidth="0.8"/>
            <line x1="-4" y1="102" x2="28" y2="102" stroke="#a78bfa" strokeWidth="0.8"/>
            <line x1="-4" y1="109" x2="28" y2="109" stroke="#a78bfa" strokeWidth="0.8"/>
            <line x1="-2" y1="116" x2="26" y2="116" stroke="#a78bfa" strokeWidth="0.8"/>
          </g>
          {/* Tennis ball */}
          <g className="lt-ball">
            <circle cx="100" cy="96" r="9" fill="#84cc16" stroke="#65a30d" strokeWidth="1"/>
            <path d="M93 90 Q100 96 93 102" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            <path d="M107 90 Q100 96 107 102" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          </g>
          {/* Paws */}
          <ellipse cx="32" cy="116" rx="11" ry="8" fill="#FCFBF7"/>
          <ellipse cx="88" cy="116" rx="11" ry="8" fill="#FCFBF7"/>
          {/* Head */}
          <CorgiHead cx={60} cy={50} r={31} mood="happy"/>
          {/* Sunglasses */}
          <rect x="34" y="42" width="20" height="13" rx="6" fill="#0f172a" stroke="#7c3aed" strokeWidth="1.5"/>
          <rect x="57" y="42" width="20" height="13" rx="6" fill="#0f172a" stroke="#7c3aed" strokeWidth="1.5"/>
          <line x1="54" y1="48" x2="57" y2="48" stroke="#7c3aed" strokeWidth="1.5"/>
          <line x1="28" y1="48" x2="34" y2="48" stroke="#4b5563" strokeWidth="1.5"/>
          <line x1="77" y1="48" x2="83" y2="48" stroke="#4b5563" strokeWidth="1.5"/>
          {/* Sunglass lens shine */}
          <path d="M37 44 Q40 43 44 45" stroke="rgba(255,255,255,.4)" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
          <path d="M60 44 Q63 43 67 45" stroke="rgba(255,255,255,.4)" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
          {/* Sweatband */}
          <rect x="30" y="22" width="60" height="8" rx="4" fill="#7c3aed"/>
          <rect x="30" y="23" width="60" height="3" rx="2" fill="#a78bfa" opacity="0.5"/>
        </g>
      </svg>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   5. SPACE BIZ LOUIE — Projects section
   Suit & tie + astronaut helmet floating in space
   ══════════════════════════════════════════════════════════════ */
export function LouieBiz({ size = "90px", className = "", style }: BaseProps) {
  return (
    <div className={className} style={{ width: size, flexShrink: 0, ...style }}>
      <svg viewBox="0 0 130 170" xmlns="http://www.w3.org/2000/svg" style={{ width:"100%", height:"auto", overflow:"visible" }}>
        <style>{BASE_STYLE + `
          .lb-tie  { animation: lbTie 2.2s ease-in-out infinite; transform-box:fill-box; transform-origin:50% 0%; }
          @keyframes lbTie  { 0%,100%{transform:rotate(-4deg)} 50%{transform:rotate(4deg)} }
          .lb-ant  { animation: lbAnt 1.8s ease-in-out infinite; transform-box:fill-box; transform-origin:50% 50%; }
          @keyframes lbAnt  { 0%,100%{opacity:.9;transform:scale(1)} 50%{opacity:.1;transform:scale(.5)} }
          .lb-glow { animation: lbGlow 3s ease-in-out infinite; }
          @keyframes lbGlow { 0%,100%{opacity:.5} 50%{opacity:1} }
          .lb-star1 { animation: lbStar 2.8s ease-in-out infinite; }
          .lb-star2 { animation: lbStar 2.8s ease-in-out infinite .9s; }
          .lb-star3 { animation: lbStar 2.8s ease-in-out infinite 1.8s; }
          @keyframes lbStar { 0%,100%{opacity:.2} 50%{opacity:.9} }
        `}</style>
        <g className="lth-bob">

          {/* ── Suit body ── */}
          {/* Jacket */}
          <path fill="#0f172a" d="M18 128c0-20 16-32 47-32s47 12 47 32v30H18z"/>
          {/* Jacket lapels */}
          <path fill="#1e293b" d="M65 96 L52 128 L65 122z"/>
          <path fill="#1e293b" d="M65 96 L78 128 L65 122z"/>
          {/* White dress shirt */}
          <path fill="#f8fafc" d="M55 96 L65 96 L75 96 L72 128 L58 128z"/>
          {/* Shirt buttons */}
          <circle cx="65" cy="104" r="1.8" fill="#94a3b8"/>
          <circle cx="65" cy="111" r="1.8" fill="#94a3b8"/>
          <circle cx="65" cy="118" r="1.8" fill="#94a3b8"/>
          {/* Tie */}
          <g className="lb-tie">
            <path fill="#7c3aed" d="M62 96 L68 96 L70 120 L65 126 L60 120z"/>
            <path fill="#6d28d9" d="M65 96 L68 96 L70 120 L65 126z"/>
            {/* Tie knot */}
            <path fill="#5b21b6" d="M61 96 L69 96 L67 102 L63 102z"/>
            {/* Tie pattern dots */}
            <circle cx="65" cy="106" r="1.2" fill="#a78bfa" opacity="0.7"/>
            <circle cx="65" cy="113" r="1.2" fill="#a78bfa" opacity="0.7"/>
          </g>
          {/* Pocket square */}
          <path fill="#06b6d4" d="M78 103 L86 103 L84 111 L76 111z" opacity="0.85"/>
          <path fill="#67e8f9" d="M79 103 L82 100 L85 103z"/>
          {/* Suit lapel badges */}
          <rect x="20" y="110" width="20" height="12" rx="3" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="0.8" opacity=".9"/>
          <text x="30" y="119" fontFamily="monospace" fontSize="4.5" fontWeight="700" fill="#93c5fd" textAnchor="middle">NASA</text>
          <rect x="90" y="110" width="20" height="12" rx="3" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="0.8" opacity=".9"/>
          <text x="100" y="119" fontFamily="monospace" fontSize="4.5" fontWeight="700" fill="#93c5fd" textAnchor="middle">K-9</text>
          {/* Tail */}
          <g className="lth-wag">
            <path fill="#E9A23B" d="M100 118c3-10 10-16 16-14 6 2 7 10 3 17-4 8-16 10-19 7z"/>
          </g>
          {/* Paws / sleeves */}
          <ellipse cx="28" cy="130" rx="13" ry="9" fill="#0f172a" stroke="#1e293b" strokeWidth="1"/>
          <ellipse cx="102" cy="130" rx="13" ry="9" fill="#0f172a" stroke="#1e293b" strokeWidth="1"/>
          {/* White shirt cuffs */}
          <ellipse cx="22" cy="133" rx="9" ry="6" fill="#f8fafc"/>
          <ellipse cx="108" cy="133" rx="9" ry="6" fill="#f8fafc"/>
          {/* Cufflinks */}
          <circle cx="22" cy="133" r="2.5" fill="#7c3aed" stroke="#a78bfa" strokeWidth="0.8"/>
          <circle cx="108" cy="133" r="2.5" fill="#7c3aed" stroke="#a78bfa" strokeWidth="0.8"/>

          {/* ── Space Helmet over head ── */}
          {/* Helmet outer glow */}
          <circle cx="65" cy="58" r="46" fill="none" stroke="rgba(147,197,253,.3)" strokeWidth="2" className="lb-glow"/>
          {/* Helmet frame */}
          <circle cx="65" cy="58" r="43" fill="#0f172a" stroke="#1e293b" strokeWidth="2"/>
          {/* Glass dome */}
          <circle cx="65" cy="58" r="40" fill="rgba(96,165,250,0.07)" stroke="rgba(147,197,253,.5)" strokeWidth="2"/>

          {/* ── Louie's face inside helmet ── */}
          {/* Fur head */}
          <circle cx="65" cy="58" r="34" fill="#E9A23B"/>
          {/* Ears */}
          <path fill="#E9A23B" d="M40 40c-7-20-5-40 4-45 9-5 20 10 22 33z"/>
          <path fill="#F6C878" d="M43 38c-5-14-3-30 2-34 4-3 13 7 14 25z"/>
          <path fill="#E9A23B" d="M90 40c7-20 5-40-4-45-9-5-20 10-22 33z"/>
          <path fill="#F6C878" d="M87 38c5-14 3-30-2-34-4-3-13 7-14 25z"/>
          {/* Cheeks */}
          <ellipse cx="38" cy="62" rx="8" ry="5.5" fill="#F08A5D" opacity="0.25"/>
          <ellipse cx="92" cy="62" rx="8" ry="5.5" fill="#F08A5D" opacity="0.25"/>
          {/* Muzzle */}
          <ellipse cx="65" cy="68" rx="19" ry="15" fill="#FCFBF7"/>
          {/* Confident eyes — slightly squinted/cool */}
          <ellipse cx="52" cy="54" rx="7" ry="6.5" fill="#17223B"/>
          <circle cx="50" cy="52" r="2.2" fill="white"/>
          <ellipse cx="78" cy="54" rx="7" ry="6.5" fill="#17223B"/>
          <circle cx="76" cy="52" r="2.2" fill="white"/>
          {/* Slight confident brow */}
          <line x1="44" y1="45" x2="55" y2="48" stroke="#17223B" strokeWidth="2.2" strokeLinecap="round"/>
          <line x1="75" y1="48" x2="86" y2="45" stroke="#17223B" strokeWidth="2.2" strokeLinecap="round"/>
          {/* Nose */}
          <ellipse cx="65" cy="63" rx="6" ry="4.5" fill="#17223B"/>
          <ellipse cx="63" cy="62" rx="1.8" ry="1.2" fill="white" opacity="0.5"/>
          {/* Confident smirk */}
          <path d="M55 74 Q65 82 75 74" stroke="#17223B" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
          <ellipse cx="65" cy="79" rx="6" ry="4" fill="#F0899B"/>
          {/* Visor highlight */}
          <path d="M33 34 Q52 20 80 28" stroke="rgba(255,255,255,.45)" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
          {/* Stars inside helmet */}
          <circle cx="40" cy="44" r="1.5" fill="white" opacity="0.6"/>
          <circle cx="88" cy="36" r="1.1" fill="white" opacity="0.5"/>
          <circle cx="46" cy="28" r="1.3" fill="white" opacity="0.55"/>
          <circle cx="82" cy="50" r="0.9" fill="white" opacity="0.45"/>
          {/* Helmet neck ring */}
          <rect x="30" y="93" width="70" height="14" rx="7" fill="#334155" stroke="rgba(203,213,225,.3)" strokeWidth="1.2"/>

          {/* Antenna */}
          <line x1="65" y1="16" x2="65" y2="8"  stroke="#94a3b8" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="65" cy="7"  r="5.5" fill="#1d4ed8" stroke="#93c5fd" strokeWidth="1.2"/>
          <circle cx="65" cy="7"  r="3.5" fill="#60a5fa" className="lb-ant"/>
        </g>

        {/* Floating stars around Louie */}
        <circle cx="12" cy="55" r="1.8" fill="white" className="lb-star1"/>
        <circle cx="118" cy="42" r="1.3" fill="white" className="lb-star2"/>
        <circle cx="120" cy="110" r="1.5" fill="white" className="lb-star3"/>
        <circle cx="10" cy="115" r="1" fill="white" className="lb-star2"/>
      </svg>
    </div>
  );
}

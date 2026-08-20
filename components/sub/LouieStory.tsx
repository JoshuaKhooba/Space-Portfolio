"use client";
import React from "react";

type P = { size?: string; className?: string; style?: React.CSSProperties };

const SHARED = `
  .ls-bob{animation:lsBob 4s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 100%}
  @keyframes lsBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
  .ls-wag{animation:lsWag .85s ease-in-out infinite;transform-box:fill-box;transform-origin:12% 70%}
  @keyframes lsWag{0%,100%{transform:rotate(-10deg)}50%{transform:rotate(10deg)}}
  .ls-ant{animation:lsAnt 1.8s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 50%}
  @keyframes lsAnt{0%,100%{opacity:.9;transform:scale(1)}50%{opacity:.1;transform:scale(.5)}}
  .ls-glow{animation:lsGlow 2.5s ease-in-out infinite}
  @keyframes lsGlow{0%,100%{opacity:.45}50%{opacity:1}}
  .ls-spin{animation:lsSpin 8s linear infinite;transform-box:fill-box;transform-origin:50% 50%}
  @keyframes lsSpin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
  .ls-orbit{animation:lsOrbit 6s linear infinite;transform-box:fill-box;transform-origin:50% 50%}
  @keyframes lsOrbit{from{transform:rotate(0deg) translateX(38px) rotate(0deg)}to{transform:rotate(360deg) translateX(38px) rotate(-360deg)}}
  .ls-float1{animation:lsFloat 3s ease-in-out infinite}
  .ls-float2{animation:lsFloat 3s ease-in-out infinite .6s}
  .ls-float3{animation:lsFloat 3s ease-in-out infinite 1.2s}
  .ls-float4{animation:lsFloat 3s ease-in-out infinite 1.8s}
  @keyframes lsFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
  .ls-pulse{animation:lsPulse 1.5s ease-in-out infinite}
  @keyframes lsPulse{0%,100%{transform:scale(1);opacity:.6}50%{transform:scale(1.3);opacity:1}}
  .ls-signal{animation:lsSignal 2s ease-out infinite}
  @keyframes lsSignal{0%{transform:scale(0);opacity:.9}100%{transform:scale(2.8);opacity:0}}
  .ls-star1{animation:lsStar 2.4s ease-in-out infinite}
  .ls-star2{animation:lsStar 2.4s ease-in-out infinite .8s}
  .ls-star3{animation:lsStar 2.4s ease-in-out infinite 1.6s}
  @keyframes lsStar{0%,100%{opacity:.2}50%{opacity:1}}
  .ls-confetti1{animation:lsConf 2.2s ease-in-out infinite}
  .ls-confetti2{animation:lsConf 2.2s ease-in-out infinite .4s}
  .ls-confetti3{animation:lsConf 2.2s ease-in-out infinite .8s}
  @keyframes lsConf{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-10px) rotate(20deg)}}
  .ls-bulb{animation:lsBulb 1.4s ease-in-out infinite}
  @keyframes lsBulb{0%,100%{opacity:.6;transform:scale(1)}50%{opacity:1;transform:scale(1.15)}}
  .ls-cursor{animation:lsCursor .8s step-end infinite}
  @keyframes lsCursor{0%,100%{opacity:1}50%{opacity:0}}
`;

/* Tiny reusable corgi face */
function Face({ x=0,y=0,r=26,mood="happy" }:{x?:number;y?:number;r?:number;mood?:string}) {
  const happy = mood==="happy", focused = mood==="focused", proud = mood==="proud";
  return (
    <g>
      {/* Ears */}
      <path fill="#E9A23B" d={`M${x-r+4} ${y-r+4}c-5-14-3-28 3-32 6-4 14 7 15 23z`}/>
      <path fill="#F6C878" d={`M${x-r+7} ${y-r+3}c-3-10-2-20 2-23 4-3 9 5 10 17z`}/>
      <path fill="#E9A23B" d={`M${x+r-4} ${y-r+4}c5-14 3-28-3-32-6-4-14 7-15 23z`}/>
      <path fill="#F6C878" d={`M${x+r-7} ${y-r+3}c3-10 2-20-2-23-4-3-9 5-10 17z`}/>
      {/* Head */}
      <circle cx={x} cy={y} r={r} fill="#E9A23B"/>
      {/* Blush */}
      <ellipse cx={x-r+5} cy={y+8} rx="6" ry="4" fill="#F08A5D" opacity=".28"/>
      <ellipse cx={x+r-5} cy={y+8} rx="6" ry="4" fill="#F08A5D" opacity=".28"/>
      {/* Muzzle */}
      <ellipse cx={x} cy={y+10} rx="15" ry="12" fill="#FCFBF7"/>
      {/* Eyes */}
      {happy&&<>
        <path d={`M${x-12} ${y-2}Q${x-7} ${y-10} ${x-2} ${y-2}`} stroke="#17223B" strokeWidth="2.8" strokeLinecap="round" fill="none"/>
        <path d={`M${x+2} ${y-2}Q${x+7} ${y-10} ${x+12} ${y-2}`} stroke="#17223B" strokeWidth="2.8" strokeLinecap="round" fill="none"/>
      </>}
      {focused&&<>
        <ellipse cx={x-9} cy={y-2} rx="5.5" ry="6.5" fill="#17223B"/>
        <circle cx={x-11} cy={y-4} r="2" fill="white"/>
        <ellipse cx={x+9} cy={y-2} rx="5.5" ry="6.5" fill="#17223B"/>
        <circle cx={x+7} cy={y-4} r="2" fill="white"/>
        <line x1={x-14} y1={y-10} x2={x-5} y2={y-8} stroke="#17223B" strokeWidth="2" strokeLinecap="round"/>
        <line x1={x+14} y1={y-10} x2={x+5} y2={y-8} stroke="#17223B" strokeWidth="2" strokeLinecap="round"/>
      </>}
      {proud&&<>
        <ellipse cx={x-9} cy={y-2} rx="5.5" ry="6.5" fill="#17223B"/>
        <circle cx={x-11} cy={y-4} r="2" fill="white"/>
        <ellipse cx={x+9} cy={y-2} rx="5.5" ry="6.5" fill="#17223B"/>
        <circle cx={x+7} cy={y-4} r="2" fill="white"/>
      </>}
      {/* Nose */}
      <ellipse cx={x} cy={y+5} rx="5" ry="3.8" fill="#17223B"/>
      <ellipse cx={x-1.5} cy={y+4} rx="1.5" ry="1" fill="white" opacity=".5"/>
      {/* Mouth */}
      {happy&&<><path d={`M${x-7} ${y+15}Q${x} ${y+21} ${x+7} ${y+15}`} stroke="#17223B" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <ellipse cx={x} cy={y+19} rx="4.5" ry="3.2" fill="#F0899B"/></>}
      {(focused||proud)&&<path d={`M${x-5} ${y+15}Q${x} ${y+20} ${x+5} ${y+15}`} stroke="#17223B" strokeWidth="2" fill="none" strokeLinecap="round"/>}
    </g>
  );
}

/* ═══════════════════════════════════════════════════
   CH.3 — PLANET EXPLORER (About)
   Louie lands on a new planet, plants a flag
   ═══════════════════════════════════════════════════ */
export function LouiePlanet({size="110px",className="",style}:P) {
  return (
    <div className={className} style={{width:size,flexShrink:0,...style}}>
      <svg viewBox="0 0 180 190" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"auto",overflow:"visible"}}>
        <defs>
          <radialGradient id="pGlobe" cx="40%" cy="35%">
            <stop offset="0%" stopColor="#34d399"/>
            <stop offset="50%" stopColor="#059669"/>
            <stop offset="100%" stopColor="#064e3b"/>
          </radialGradient>
          <radialGradient id="pAtmo" cx="50%" cy="50%">
            <stop offset="60%" stopColor="transparent"/>
            <stop offset="100%" stopColor="#60a5fa" stopOpacity=".35"/>
          </radialGradient>
          <radialGradient id="pHelm" cx="35%" cy="30%">
            <stop offset="0%" stopColor="#a8d8ff" stopOpacity=".22"/>
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity=".1"/>
          </radialGradient>
        </defs>
        <style>{SHARED}</style>

        {/* Stars */}
        <circle cx="20" cy="30" r="1.5" fill="white" className="ls-star1"/>
        <circle cx="155" cy="20" r="1.2" fill="white" className="ls-star2"/>
        <circle cx="165" cy="80" r="1.8" fill="white" className="ls-star3"/>
        <circle cx="14" cy="110" r="1" fill="white" className="ls-star1"/>

        {/* Planet */}
        <ellipse cx="90" cy="170" rx="70" ry="18" fill="#164e63" opacity=".5"/>
        <circle cx="90" cy="148" r="38" fill="url(#pGlobe)"/>
        <circle cx="90" cy="148" r="38" fill="url(#pAtmo)"/>
        {/* Continents */}
        <ellipse cx="78" cy="140" rx="14" ry="10" fill="#065f46" opacity=".7" transform="rotate(-20 78 140)"/>
        <ellipse cx="102" cy="155" rx="10" ry="7" fill="#065f46" opacity=".6" transform="rotate(15 102 155)"/>
        <ellipse cx="85" cy="158" rx="6" ry="4" fill="#065f46" opacity=".5"/>
        {/* Clouds */}
        <ellipse cx="96" cy="136" rx="9" ry="4" fill="white" opacity=".4"/>
        <ellipse cx="75" cy="160" rx="7" ry="3" fill="white" opacity=".3"/>
        {/* Planet ring */}
        <ellipse cx="90" cy="148" rx="55" ry="10" fill="none" stroke="#67e8f9" strokeWidth="3" opacity=".45"/>

        <g className="ls-bob">
          {/* Louie standing on planet */}
          {/* Suit body */}
          <ellipse cx="90" cy="118" rx="22" ry="15" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="1"/>
          {/* Tail */}
          <g className="ls-wag">
            <path fill="#E9A23B" d="M108 118c2-8 8-13 13-11 5 1 5 8 2 14-3 7-13 9-15 6z"/>
          </g>
          {/* Paws */}
          <ellipse cx="72" cy="126" rx="10" ry="7" fill="#FCFBF7"/>
          <ellipse cx="108" cy="126" rx="10" ry="7" fill="#FCFBF7"/>
          {/* Helmet */}
          <circle cx="90" cy="90" r="28" fill="url(#pHelm)" stroke="rgba(147,197,253,.5)" strokeWidth="2"/>
          <circle cx="90" cy="90" r="25" fill="#0f172a" stroke="#1e293b" strokeWidth="1.5" opacity=".3"/>
          {/* Face (visor open) */}
          <Face x={90} y={90} r={22} mood="happy"/>
          {/* Visor highlight */}
          <path d="M68 72 Q84 62 106 68" stroke="rgba(255,255,255,.45)" strokeWidth="3" fill="none" strokeLinecap="round"/>
          {/* Antenna */}
          <line x1="90" y1="62" x2="90" y2="55" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="90" cy="53" r="4.5" fill="#1d4ed8" stroke="#93c5fd" strokeWidth="1"/>
          <circle cx="90" cy="53" r="2.8" fill="#60a5fa" className="ls-ant"/>

          {/* Flag planted on planet */}
          <line x1="122" y1="138" x2="122" y2="100" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round"/>
          <path fill="#7c3aed" d="M122 100 L148 106 L122 112z"/>
          <text x="130" y="110" fontFamily="monospace" fontSize="7" fontWeight="700" fill="white">🐾</text>
          {/* Flag wave */}
          <path fill="#6d28d9" opacity=".5" d="M122 100 L148 106 L122 112z"/>
        </g>

        {/* Speech bubble */}
        <g>
          <rect x="2" y="30" width="90" height="32" rx="10" fill="#161B22" stroke="#30363D" strokeWidth="1.5"/>
          <path d="M50 62 L40 75 L55 62Z" fill="#161B22"/>
          <text x="47" y="48" fontFamily="ui-monospace,monospace" fontSize="8" fontWeight="700" fill="#E6EDF3" textAnchor="middle">New planet…</text>
          <text x="47" y="58" fontFamily="ui-monospace,monospace" fontSize="8" fontWeight="700" fill="#a78bfa" textAnchor="middle">Louie was here 🐾</text>
        </g>
      </svg>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   CH.4 — SPACE ACADEMY (Education)
   Louie floats with books & star charts orbiting
   ═══════════════════════════════════════════════════ */
export function LouieAcademy({size="110px",className="",style}:P) {
  return (
    <div className={className} style={{width:size,flexShrink:0,...style}}>
      <svg viewBox="0 0 190 180" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"auto",overflow:"visible"}}>
        <defs>
          <radialGradient id="aHelm" cx="35%" cy="30%">
            <stop offset="0%" stopColor="#a8d8ff" stopOpacity=".22"/>
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity=".1"/>
          </radialGradient>
        </defs>
        <style>{SHARED}</style>

        {/* Stars */}
        <circle cx="18" cy="25" r="1.5" fill="white" className="ls-star1"/>
        <circle cx="172" cy="15" r="1.2" fill="white" className="ls-star2"/>
        <circle cx="180" cy="140" r="1.4" fill="white" className="ls-star3"/>

        {/* Orbiting books & charts */}
        {/* Book 1 */}
        <g className="ls-float1" style={{transformOrigin:"50% 90px"}}>
          <rect x="18" y="55" width="30" height="38" rx="3" fill="#7c3aed" stroke="#a78bfa" strokeWidth="1"/>
          <rect x="18" y="55" width="6" height="38" rx="2" fill="#6d28d9"/>
          <line x1="28" y1="62" x2="44" y2="62" stroke="#c4b5fd" strokeWidth="1.2" opacity=".6"/>
          <line x1="28" y1="68" x2="44" y2="68" stroke="#c4b5fd" strokeWidth="1.2" opacity=".6"/>
          <line x1="28" y1="74" x2="40" y2="74" stroke="#c4b5fd" strokeWidth="1.2" opacity=".6"/>
          <text x="31" y="86" fontFamily="serif" fontSize="8" fill="#e9d5ff">∑π</text>
        </g>
        {/* Star chart scroll */}
        <g className="ls-float2">
          <rect x="136" y="40" width="38" height="50" rx="4" fill="#0f172a" stroke="#3b82f6" strokeWidth="1.2"/>
          <circle cx="148" cy="56" r="4" fill="none" stroke="#60a5fa" strokeWidth="1"/>
          <circle cx="162" cy="52" r="3" fill="none" stroke="#a78bfa" strokeWidth="1"/>
          <circle cx="156" cy="68" r="3.5" fill="none" stroke="#34d399" strokeWidth="1"/>
          <line x1="148" y1="56" x2="162" y2="52" stroke="#60a5fa" strokeWidth=".8" opacity=".6"/>
          <line x1="162" y1="52" x2="156" y2="68" stroke="#a78bfa" strokeWidth=".8" opacity=".6"/>
          <text x="155" y="82" fontFamily="monospace" fontSize="6" fill="#93c5fd" textAnchor="middle">STAR MAP</text>
        </g>
        {/* Formula float */}
        <g className="ls-float3">
          <text x="22" y="145" fontFamily="monospace" fontSize="11" fontWeight="700" fill="#fbbf24" opacity=".8">E=mc²</text>
        </g>
        {/* Small planet diagram */}
        <g className="ls-float4">
          <circle cx="158" cy="140" r="12" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="1"/>
          <ellipse cx="158" cy="140" rx="20" ry="5" fill="none" stroke="#67e8f9" strokeWidth="1.2" opacity=".6"/>
          <circle cx="178" cy="140" r="3" fill="#fbbf24"/>
        </g>

        <g className="ls-bob">
          {/* Suit */}
          <ellipse cx="95" cy="138" rx="22" ry="14" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="1"/>
          {/* Academy patch */}
          <rect x="83" y="130" width="24" height="14" rx="3" fill="#312e81" stroke="#818cf8" strokeWidth=".8"/>
          <text x="95" y="141" fontFamily="monospace" fontSize="5" fontWeight="700" fill="#c7d2fe" textAnchor="middle">ACADEMY</text>
          {/* Tail */}
          <g className="ls-wag">
            <path fill="#E9A23B" d="M113 136c2-8 8-12 13-10 5 2 5 8 2 14-3 6-13 8-15 5z"/>
          </g>
          {/* Paws */}
          <ellipse cx="76" cy="144" rx="10" ry="7" fill="#FCFBF7"/>
          <ellipse cx="114" cy="144" rx="10" ry="7" fill="#FCFBF7"/>
          {/* Helmet */}
          <circle cx="95" cy="108" r="28" fill="url(#aHelm)" stroke="rgba(147,197,253,.5)" strokeWidth="2"/>
          <Face x={95} y={108} r={22} mood="happy"/>
          <path d="M73 90 Q88 80 112 86" stroke="rgba(255,255,255,.45)" strokeWidth="3" fill="none" strokeLinecap="round"/>
          {/* Antenna */}
          <line x1="95" y1="80" x2="95" y2="73" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="95" cy="71" r="4.5" fill="#1d4ed8" stroke="#93c5fd" strokeWidth="1"/>
          <circle cx="95" cy="71" r="2.8" fill="#60a5fa" className="ls-ant"/>
        </g>

        {/* Caption */}
        <g>
          <rect x="42" y="2" width="106" height="28" rx="9" fill="#161B22" stroke="#30363D" strokeWidth="1.5"/>
          <text x="95" y="20" fontFamily="ui-monospace,monospace" fontSize="8.5" fontWeight="700" fill="#E6EDF3" textAnchor="middle">Space Academy 🚀</text>
        </g>
      </svg>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   CH.5 — MISSION CONTROL (Experience)
   Louie commands from captain's chair
   ═══════════════════════════════════════════════════ */
export function LouieMissionControl({size="120px",className="",style}:P) {
  return (
    <div className={className} style={{width:size,flexShrink:0,...style}}>
      <svg viewBox="0 0 210 185" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"auto",overflow:"visible"}}>
        <defs>
          <radialGradient id="mcHelm" cx="35%" cy="30%">
            <stop offset="0%" stopColor="#a8d8ff" stopOpacity=".22"/>
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity=".1"/>
          </radialGradient>
        </defs>
        <style>{SHARED+`
          .mc-screen{animation:mcScreen 3s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 50%}
          @keyframes mcScreen{0%,100%{opacity:.7}50%{opacity:1}}
        `}</style>

        {/* Stars */}
        <circle cx="12" cy="20" r="1.3" fill="white" className="ls-star1"/>
        <circle cx="195" cy="30" r="1.5" fill="white" className="ls-star2"/>
        <circle cx="200" cy="150" r="1.2" fill="white" className="ls-star3"/>

        {/* Floating holographic screens */}
        {/* Screen left */}
        <g className="ls-float1">
          <rect x="8" y="50" width="52" height="40" rx="5" fill="#0f172a" stroke="#3b82f6" strokeWidth="1.2"/>
          <rect x="10" y="52" width="48" height="36" rx="3" fill="#020617"/>
          <text x="34" y="64" fontFamily="monospace" fontSize="5" fill="#22c55e" textAnchor="middle">▓▓▓▒░ 92%</text>
          <text x="34" y="72" fontFamily="monospace" fontSize="5" fill="#60a5fa" textAnchor="middle">SYSTEMS OK</text>
          <rect x="12" y="76" width="12" height="4" rx="2" fill="#22c55e"/>
          <rect x="26" y="76" width="8" height="4" rx="2" fill="#fbbf24"/>
          <rect x="36" y="76" width="16" height="4" rx="2" fill="#22c55e"/>
          <text x="34" y="86" fontFamily="monospace" fontSize="4.5" fill="#94a3b8" textAnchor="middle">STATUS: NOMINAL</text>
        </g>
        {/* Screen right */}
        <g className="ls-float2">
          <rect x="150" y="45" width="55" height="45" rx="5" fill="#0f172a" stroke="#a78bfa" strokeWidth="1.2"/>
          <rect x="152" y="47" width="51" height="41" rx="3" fill="#020617"/>
          <text x="177" y="59" fontFamily="monospace" fontSize="5" fill="#a78bfa" textAnchor="middle">MISSION LOG</text>
          <text x="177" y="67" fontFamily="monospace" fontSize="4.5" fill="#22c55e" textAnchor="middle">✓ Wormhole exit</text>
          <text x="177" y="74" fontFamily="monospace" fontSize="4.5" fill="#22c55e" textAnchor="middle">✓ Planet landed</text>
          <text x="177" y="81" fontFamily="monospace" fontSize="4.5" fill="#fbbf24" textAnchor="middle">⟳ Crew assembled</text>
          <text x="177" y="82" fontFamily="monospace" fontSize="4.5" fill="#60a5fa" textAnchor="middle" dy="6">◉ Transmitting</text>
        </g>
        {/* Screen top center */}
        <g className="mc-screen">
          <rect x="72" y="20" width="65" height="36" rx="5" fill="#0f172a" stroke="#67e8f9" strokeWidth="1.2"/>
          <text x="104" y="36" fontFamily="monospace" fontSize="6" fontWeight="700" fill="#67e8f9" textAnchor="middle">LOUIE-1</text>
          <text x="104" y="46" fontFamily="monospace" fontSize="5" fill="#34d399" textAnchor="middle">◉ LIVE</text>
          <rect x="104" y="50" width="0" height="0"/>
        </g>

        {/* Captain's chair */}
        <rect x="78" y="150" width="54" height="30" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="1.5"/>
        <rect x="72" y="145" width="66" height="14" rx="7" fill="#0f172a" stroke="#334155" strokeWidth="1.5"/>
        {/* Chair back */}
        <rect x="82" y="120" width="46" height="38" rx="6" fill="#1e293b" stroke="#4338ca" strokeWidth="1.5"/>
        <rect x="86" y="124" width="38" height="30" rx="4" fill="#0f172a" opacity=".6"/>
        {/* Armrests */}
        <rect x="66" y="142" width="18" height="8" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
        <rect x="126" y="142" width="18" height="8" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
        {/* Control panel on armrest */}
        <circle cx="70" cy="145" r="2.5" fill="#ef4444"/>
        <circle cx="76" cy="145" r="2.5" fill="#fbbf24"/>
        <circle cx="82" cy="145" r="2.5" fill="#22c55e"/>

        <g className="ls-bob">
          {/* Suit sitting */}
          <ellipse cx="105" cy="140" rx="22" ry="14" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="1"/>
          <ellipse cx="105" cy="152" rx="18" ry="10" fill="#0f172a" stroke="#334155" strokeWidth="1"/>
          {/* Tail */}
          <g className="ls-wag">
            <path fill="#E9A23B" d="M123 138c2-7 8-12 13-10 4 2 4 8 2 13-3 6-13 8-15 5z"/>
          </g>
          {/* Paws on armrests */}
          <ellipse cx="74" cy="146" rx="9" ry="6" fill="#FCFBF7"/>
          <ellipse cx="136" cy="146" rx="9" ry="6" fill="#FCFBF7"/>
          {/* Helmet */}
          <circle cx="105" cy="108" r="28" fill="url(#mcHelm)" stroke="rgba(147,197,253,.5)" strokeWidth="2"/>
          <Face x={105} y={108} r={22} mood="focused"/>
          <path d="M83 90 Q98 80 122 86" stroke="rgba(255,255,255,.45)" strokeWidth="3" fill="none" strokeLinecap="round"/>
          {/* Antenna */}
          <line x1="105" y1="80" x2="105" y2="73" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="105" cy="71" r="4.5" fill="#1d4ed8" stroke="#93c5fd" strokeWidth="1"/>
          <circle cx="105" cy="71" r="2.8" fill="#60a5fa" className="ls-ant"/>
        </g>

        {/* Caption */}
        <text x="105" y="180" fontFamily="ui-monospace,monospace" fontSize="8" fontWeight="700" fill="#67e8f9" textAnchor="middle">Mission Control 🖥️</text>
      </svg>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   CH.6 — GALACTIC MEDALS (Certifications)
   Louie receives medals at award ceremony
   ═══════════════════════════════════════════════════ */
export function LouieMedals({size="110px",className="",style}:P) {
  return (
    <div className={className} style={{width:size,flexShrink:0,...style}}>
      <svg viewBox="0 0 180 195" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"auto",overflow:"visible"}}>
        <defs>
          <radialGradient id="mHelm" cx="35%" cy="30%">
            <stop offset="0%" stopColor="#a8d8ff" stopOpacity=".22"/>
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity=".1"/>
          </radialGradient>
          <radialGradient id="spotlight" cx="50%" cy="0%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity=".18"/>
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0"/>
          </radialGradient>
        </defs>
        <style>{SHARED}</style>

        {/* Spotlight */}
        <ellipse cx="90" cy="100" rx="80" ry="140" fill="url(#spotlight)"/>

        {/* Confetti */}
        <rect className="ls-confetti1" x="30" y="40" width="8" height="8" rx="2" fill="#fbbf24" opacity=".7" transform="rotate(20 30 40)"/>
        <rect className="ls-confetti2" x="135" y="30" width="7" height="7" rx="2" fill="#a78bfa" opacity=".7" transform="rotate(-15 135 30)"/>
        <rect className="ls-confetti3" x="155" y="90" width="6" height="6" rx="2" fill="#34d399" opacity=".7" transform="rotate(30 155 90)"/>
        <circle className="ls-confetti1" cx="20" cy="120" r="4" fill="#f43f5e" opacity=".6"/>
        <circle className="ls-confetti2" cx="160" cy="60" r="3.5" fill="#60a5fa" opacity=".6"/>
        <circle className="ls-confetti3" cx="14" cy="70" r="3" fill="#fbbf24" opacity=".6"/>

        {/* Stars */}
        <circle cx="168" cy="140" r="1.4" fill="white" className="ls-star1"/>
        <circle cx="12" cy="40" r="1.2" fill="white" className="ls-star2"/>

        {/* Victory starburst */}
        {[0,30,60,90,120,150,180,210,240,270,300,330].map((a,i)=>(
          <line key={i} x1={90} y1={90}
            x2={90+Math.cos(a*Math.PI/180)*75}
            y2={90+Math.sin(a*Math.PI/180)*75}
            stroke="#fbbf24" strokeWidth=".8" opacity=".15"/>
        ))}

        <g className="ls-bob">
          {/* Suit body with medals */}
          <ellipse cx="90" cy="148" rx="28" ry="18" fill="#0f172a" stroke="#1e3a8a" strokeWidth="1.5"/>
          {/* Medal ribbons + coins */}
          {/* Gold */}
          <rect x="68" y="136" width="8" height="12" rx="1" fill="#dc2626"/>
          <circle cx="72" cy="152" r="8" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5"/>
          <text x="72" y="156" fontFamily="serif" fontSize="7" fontWeight="900" fill="#92400e" textAnchor="middle">★</text>
          {/* Silver */}
          <rect x="85" y="133" width="8" height="12" rx="1" fill="#7c3aed"/>
          <circle cx="89" cy="149" r="8" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5"/>
          <text x="89" y="153" fontFamily="serif" fontSize="7" fontWeight="900" fill="#475569" textAnchor="middle">★</text>
          {/* Orange/AWS */}
          <rect x="102" y="136" width="8" height="12" rx="1" fill="#f97316"/>
          <circle cx="106" cy="152" r="8" fill="#fed7aa" stroke="#f97316" strokeWidth="1.5"/>
          <text x="106" y="153" fontFamily="monospace" fontSize="4.5" fontWeight="900" fill="#9a3412" textAnchor="middle">AWS</text>

          {/* Tail */}
          <g className="ls-wag">
            <path fill="#E9A23B" d="M114 146c2-7 8-12 13-10 4 2 4 8 2 13-3 6-13 8-15 5z"/>
          </g>
          {/* Paws — one raised in victory */}
          <ellipse cx="66" cy="156" rx="10" ry="7" fill="#FCFBF7"/>
          {/* Victory raised paw */}
          <g style={{transformOrigin:"110px 148px",animation:"lsVictory 1.5s ease-in-out infinite"}}>
            <style>{`@keyframes lsVictory{0%,100%{transform:rotate(0deg)}50%{transform:rotate(-20deg) translateY(-6px)}}`}</style>
            <ellipse cx="116" cy="138" rx="10" ry="7" fill="#FCFBF7" transform="rotate(-30 116 138)"/>
          </g>
          {/* Helmet */}
          <circle cx="90" cy="108" r="28" fill="url(#mHelm)" stroke="rgba(147,197,253,.5)" strokeWidth="2"/>
          <Face x={90} y={108} r={22} mood="proud"/>
          <path d="M68 90 Q83 80 107 86" stroke="rgba(255,255,255,.45)" strokeWidth="3" fill="none" strokeLinecap="round"/>
          {/* Antenna */}
          <line x1="90" y1="80" x2="90" y2="73" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="90" cy="71" r="4.5" fill="#fbbf24" stroke="#fef3c7" strokeWidth="1"/>
          <circle cx="90" cy="71" r="2.8" fill="#fef3c7" className="ls-ant"/>
        </g>

        {/* Caption */}
        <g>
          <rect x="22" y="175" width="136" height="18" rx="8" fill="#161B22" stroke="#30363D" strokeWidth="1.2"/>
          <text x="90" y="187" fontFamily="ui-monospace,monospace" fontSize="8" fontWeight="700" fill="#fbbf24" textAnchor="middle">Galactic Medals 🏅</text>
        </g>
      </svg>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   CH.7 — SPACE INVENTOR (Projects)
   Louie with blueprints & floating gadgets
   ═══════════════════════════════════════════════════ */
export function LouieInventor({size="110px",className="",style}:P) {
  return (
    <div className={className} style={{width:size,flexShrink:0,...style}}>
      <svg viewBox="0 0 200 185" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"auto",overflow:"visible"}}>
        <defs>
          <radialGradient id="iHelm" cx="35%" cy="30%">
            <stop offset="0%" stopColor="#a8d8ff" stopOpacity=".22"/>
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity=".1"/>
          </radialGradient>
        </defs>
        <style>{SHARED}</style>

        {/* Stars */}
        <circle cx="15" cy="22" r="1.5" fill="white" className="ls-star1"/>
        <circle cx="182" cy="18" r="1.2" fill="white" className="ls-star2"/>
        <circle cx="188" cy="150" r="1.4" fill="white" className="ls-star3"/>

        {/* Blueprint paper */}
        <g className="ls-float1">
          <rect x="8" y="55" width="60" height="48" rx="4" fill="#0c4a6e" stroke="#0ea5e9" strokeWidth="1.2"/>
          {/* Blueprint grid */}
          {[0,8,16,24,32,40].map(i=>(
            <line key={i} x1={8} y1={55+i} x2={68} y2={55+i} stroke="#0ea5e9" strokeWidth=".4" opacity=".4"/>
          ))}
          {[0,10,20,30,40,50,60].map(i=>(
            <line key={i} x1={8+i} y1={55} x2={8+i} y2={103} stroke="#0ea5e9" strokeWidth=".4" opacity=".4"/>
          ))}
          {/* Blueprint rocket sketch */}
          <path d="M38 62 L30 90 L46 90z" fill="none" stroke="#38bdf8" strokeWidth="1.5"/>
          <ellipse cx="38" cy="72" rx="6" ry="4" fill="none" stroke="#38bdf8" strokeWidth="1"/>
          <text x="38" y="100" fontFamily="monospace" fontSize="5" fill="#38bdf8" textAnchor="middle">PROJECT-1</text>
        </g>

        {/* Floating wrench */}
        <g className="ls-float2">
          <rect x="138" y="50" width="35" height="10" rx="5" fill="#475569" stroke="#64748b" strokeWidth="1"/>
          <circle cx="138" cy="55" r="8" fill="none" stroke="#475569" strokeWidth="3"/>
          <circle cx="173" cy="55" r="7" fill="none" stroke="#475569" strokeWidth="3"/>
        </g>
        {/* Floating circuit board */}
        <g className="ls-float3">
          <rect x="148" y="120" width="40" height="28" rx="3" fill="#14532d" stroke="#22c55e" strokeWidth="1"/>
          <rect x="152" y="124" width="12" height="8" rx="2" fill="#166534"/>
          <rect x="166" y="124" width="8" height="8" rx="2" fill="#166534"/>
          <line x1="152" y1="136" x2="184" y2="136" stroke="#22c55e" strokeWidth=".8" opacity=".6"/>
          <line x1="160" y1="124" x2="160" y2="124" strokeWidth="0"/>
          <circle cx="156" cy="140" r="2" fill="#22c55e"/>
          <circle cx="164" cy="140" r="2" fill="#22c55e"/>
          <circle cx="172" cy="140" r="2" fill="#22c55e"/>
          <circle cx="180" cy="140" r="2" fill="#22c55e"/>
        </g>

        {/* Lightbulb idea! */}
        <g className="ls-bulb">
          <circle cx="100" cy="30" r="14" fill="#fef3c7" stroke="#fbbf24" strokeWidth="2"/>
          <rect x="95" y="42" width="10" height="6" rx="1" fill="#d97706"/>
          <line x1="100" y1="16" x2="100" y2="10" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round"/>
          <line x1="86" y1="20" x2="82" y2="16" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round"/>
          <line x1="114" y1="20" x2="118" y2="16" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round"/>
          <text x="100" y="35" fontFamily="serif" fontSize="12" fill="#d97706" textAnchor="middle">!</text>
        </g>

        <g className="ls-bob">
          {/* Suit */}
          <ellipse cx="100" cy="148" rx="24" ry="15" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="1"/>
          {/* Tool belt */}
          <rect x="80" y="146" width="40" height="8" rx="4" fill="#0f172a" stroke="#334155" strokeWidth="1"/>
          <circle cx="88" cy="150" r="3" fill="#fbbf24"/>
          <circle cx="100" cy="150" r="3" fill="#94a3b8"/>
          <circle cx="112" cy="150" r="3" fill="#f97316"/>
          {/* Tail */}
          <g className="ls-wag">
            <path fill="#E9A23B" d="M120 146c2-8 8-12 13-10 5 2 5 8 2 14-3 6-13 8-15 5z"/>
          </g>
          {/* Paws */}
          <ellipse cx="78" cy="154" rx="10" ry="7" fill="#FCFBF7"/>
          <ellipse cx="122" cy="154" rx="10" ry="7" fill="#FCFBF7"/>
          {/* Helmet */}
          <circle cx="100" cy="108" r="28" fill="url(#iHelm)" stroke="rgba(147,197,253,.5)" strokeWidth="2"/>
          <Face x={100} y={108} r={22} mood="happy"/>
          <path d="M78 90 Q93 80 117 86" stroke="rgba(255,255,255,.45)" strokeWidth="3" fill="none" strokeLinecap="round"/>
          {/* Antenna */}
          <line x1="100" y1="80" x2="100" y2="73" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="100" cy="71" r="4.5" fill="#1d4ed8" stroke="#93c5fd" strokeWidth="1"/>
          <circle cx="100" cy="71" r="2.8" fill="#60a5fa" className="ls-ant"/>
        </g>

        {/* Caption */}
        <text x="100" y="178" fontFamily="ui-monospace,monospace" fontSize="8" fontWeight="700" fill="#38bdf8" textAnchor="middle">Space Inventor 🔭</text>
      </svg>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   CH.8 — SATELLITE DISH (Contact)
   Louie transmits a signal back to Earth
   ═══════════════════════════════════════════════════ */
export function LouieSatellite({size="130px",className="",style}:P) {
  return (
    <div className={className} style={{width:size,flexShrink:0,...style}}>
      <svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"auto",overflow:"visible"}}>
        <defs>
          <radialGradient id="sHelm" cx="35%" cy="30%">
            <stop offset="0%" stopColor="#a8d8ff" stopOpacity=".22"/>
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity=".1"/>
          </radialGradient>
          <radialGradient id="earth" cx="40%" cy="35%">
            <stop offset="0%" stopColor="#60a5fa"/>
            <stop offset="60%" stopColor="#2563eb"/>
            <stop offset="100%" stopColor="#1e3a8a"/>
          </radialGradient>
        </defs>
        <style>{SHARED+`
          .sat-signal{animation:lsSignal 2.2s ease-out infinite;transform-box:fill-box;transform-origin:50% 50%}
          .sat-signal2{animation:lsSignal 2.2s ease-out infinite .6s;transform-box:fill-box;transform-origin:50% 50%}
          .sat-signal3{animation:lsSignal 2.2s ease-out infinite 1.2s;transform-box:fill-box;transform-origin:50% 50%}
        `}</style>

        {/* Stars */}
        <circle cx="200" cy="18" r="1.5" fill="white" className="ls-star1"/>
        <circle cx="212" cy="80" r="1.2" fill="white" className="ls-star2"/>
        <circle cx="206" cy="150" r="1.4" fill="white" className="ls-star3"/>

        {/* Earth in background */}
        <circle cx="190" cy="50" r="22" fill="url(#earth)"/>
        <ellipse cx="183" cy="44" rx="8" ry="5" fill="#34d399" opacity=".6" transform="rotate(-20 183 44)"/>
        <ellipse cx="196" cy="58" rx="6" ry="4" fill="#34d399" opacity=".5" transform="rotate(10 196 58)"/>
        <ellipse cx="190" cy="50" rx="28" ry="6" fill="none" stroke="#60a5fa" strokeWidth=".8" opacity=".3"/>
        <text x="190" y="82" fontFamily="ui-monospace,monospace" fontSize="7" fill="#93c5fd" textAnchor="middle">Earth 🌍</text>

        {/* Signal rings from dish */}
        <circle cx="48" cy="88" r="18" fill="none" stroke="#a78bfa" strokeWidth="2" className="sat-signal"/>
        <circle cx="48" cy="88" r="18" fill="none" stroke="#7c3aed" strokeWidth="2" className="sat-signal2"/>
        <circle cx="48" cy="88" r="18" fill="none" stroke="#6d28d9" strokeWidth="2" className="sat-signal3"/>

        {/* Satellite dish */}
        {/* Dish body */}
        <path d="M8 120 Q48 60 88 120" fill="#1e293b" stroke="#334155" strokeWidth="2"/>
        <path d="M8 120 Q48 80 88 120" fill="#0f172a" stroke="#475569" strokeWidth="1"/>
        {/* Dish arm */}
        <line x1="48" y1="88" x2="48" y2="130" stroke="#475569" strokeWidth="3" strokeLinecap="round"/>
        <line x1="30" y1="130" x2="66" y2="130" stroke="#334155" strokeWidth="4" strokeLinecap="round"/>
        {/* Dish receiver */}
        <circle cx="48" cy="88" r="6" fill="#6366f1" stroke="#818cf8" strokeWidth="1.5"/>
        <circle cx="48" cy="88" r="3" fill="#a78bfa"/>
        {/* Dish mount base */}
        <rect x="36" y="128" width="24" height="10" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
        {/* Ground */}
        <rect x="0" y="168" width="220" height="4" rx="2" fill="#1e293b" opacity=".4"/>

        {/* Signal beam line to Earth */}
        <line x1="52" y1="84" x2="174" y2="54" stroke="#a78bfa" strokeWidth="1" strokeDasharray="5 4" opacity=".5"/>

        <g className="ls-bob">
          {/* Louie standing, waving */}
          {/* Suit */}
          <ellipse cx="130" cy="152" rx="24" ry="15" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="1"/>
          {/* Tail */}
          <g className="ls-wag">
            <path fill="#E9A23B" d="M150 150c2-7 8-12 13-10 4 2 4 8 2 13-3 6-13 8-15 5z"/>
          </g>
          {/* Paws — one waving */}
          <ellipse cx="110" cy="158" rx="10" ry="7" fill="#FCFBF7"/>
          {/* Waving paw */}
          <g style={{transformOrigin:"150px 148px",animation:"satWave 1.2s ease-in-out infinite"}}>
            <style>{`@keyframes satWave{0%,100%{transform:rotate(0deg)}25%{transform:rotate(-25deg)}75%{transform:rotate(10deg)}}`}</style>
            <ellipse cx="150" cy="136" rx="10" ry="7" fill="#FCFBF7" transform="rotate(-35 150 136)"/>
          </g>
          {/* Helmet */}
          <circle cx="130" cy="118" r="28" fill="url(#sHelm)" stroke="rgba(147,197,253,.5)" strokeWidth="2"/>
          <Face x={130} y={118} r={22} mood="happy"/>
          <path d="M108 100 Q123 90 147 96" stroke="rgba(255,255,255,.45)" strokeWidth="3" fill="none" strokeLinecap="round"/>
          {/* Antenna */}
          <line x1="130" y1="90" x2="130" y2="83" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="130" cy="81" r="4.5" fill="#1d4ed8" stroke="#93c5fd" strokeWidth="1"/>
          <circle cx="130" cy="81" r="2.8" fill="#60a5fa" className="ls-ant"/>
        </g>

        {/* Speech bubble */}
        <g>
          <rect x="74" y="62" width="122" height="32" rx="10" fill="#161B22" stroke="#30363D" strokeWidth="1.5"/>
          <path d="M88 94 L78 106 L96 94Z" fill="#161B22"/>
          <text x="135" y="80" fontFamily="ui-monospace,monospace" fontSize="8" fontWeight="700" fill="#E6EDF3" textAnchor="middle">Signal sent! 📡</text>
          <text x="135" y="90" fontFamily="ui-monospace,monospace" fontSize="7.5" fill="#a78bfa" textAnchor="middle">Hello from space! 🐾</text>
        </g>
      </svg>
    </div>
  );
}

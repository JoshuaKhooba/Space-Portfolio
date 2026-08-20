// @ts-nocheck
"use client";
import React, { useEffect, useRef, useState } from "react";

// ─── Knowledge base ────────────────────────────────────────────────────────────
const KB: { patterns: RegExp[]; answer: string }[] = [
  { patterns: [/who are you|what are you|your name|louie/i],
    answer: "Woof! I'm Louie 🐾 — Joshua's real corgi and virtual assistant! Ask me anything about Josh." },
  { patterns: [/hello|hi |hey|howdy|sup|greet/i],
    answer: "Woof woof! 👋 Hey there! I'm Louie. Ask me about Joshua's skills, projects, or experience!" },
  { patterns: [/name|who is josh|about josh/i],
    answer: "Joshua Khooba is a Full-Stack Developer, iOS Developer & Data Analyst from Orlando, FL! 🏴‍☠️" },
  { patterns: [/location|where|city|orlando/i],
    answer: "We're based in Orlando, FL! Joshua is open to remote & local opportunities. 📍" },
  { patterns: [/contact|email|reach|hire/i],
    answer: "Email Joshua at joshuak419@gmail.com or use the Contact section on this page! 📬" },
  { patterns: [/github/i],
    answer: "Check github.com/JoshuaKhooba — 7+ projects including EcoVest, FlowSync & more! 🐙" },
  { patterns: [/linkedin/i],
    answer: "Connect at linkedin.com/in/joshua-khooba! 💼" },
  { patterns: [/resume|cv/i],
    answer: "Grab his resume from the Hero section or Contact section — it's always up to date! 📄" },
  { patterns: [/school|education|degree|ucf|university|college/i],
    answer: "B.S. Information Technology from UCF (2026) + A.S. Computer Science from College of Central Florida (2022)! 🏰" },
  { patterns: [/skill|tech|stack|language|code|program/i],
    answer: "Joshua codes in Python, TypeScript, JavaScript, Swift, Java, Go, React, Next.js, Tailwind, Supabase, AWS, Docker & more! 🛠️" },
  { patterns: [/project|built|portfolio/i],
    answer: "Top projects: EcoVest 🌱, Disney VIP App 🏰, FlowSync 🔄, Turtle Coin 🪙 — check the Projects section!" },
  { patterns: [/ecovest|green|trading|gemini/i],
    answer: "EcoVest is an AI trading sim that reallocates portfolios toward clean energy using Google Gemini, Supabase & Next.js. Live at eco-vest-nine.vercel.app! 🌱" },
  { patterns: [/disney|vip|swift|ios/i],
    answer: "The Disney VIP App is a SwiftUI + Supabase iOS app for managing VIP guest itineraries — inspired by Joshua's Disney internship! 🏰" },
  { patterns: [/flowsync|project manag/i],
    answer: "FlowSync is a full-stack PM platform with React, Prisma & PostgreSQL for real-time task collaboration! 🔄" },
  { patterns: [/experience|job|work|career/i],
    answer: "Joshua has worked at LinkedIn (AI Trainer), Asurion, Walt Disney World, Lotus Consulting, and Orange County Government! 💼" },
  { patterns: [/ai trainer|linkedin/i],
    answer: "At LinkedIn (Jul 2026–Present) Joshua evaluates AI model outputs, improving quality, accuracy & safety for production AI systems. 🤖" },
  { patterns: [/disney intern|vip operat/i],
    answer: "At Disney (2025–2026) Joshua scheduled 100+ VIP itineraries/week and processed 1,000+ bookings/month with zero errors! 🏰" },
  { patterns: [/certif|aws|cloud/i],
    answer: "Joshua holds AWS Cloud Security Foundations and IT Fundamentals Pro (100% performance-based) certifications! ☁️" },
  { patterns: [/hobby|interest|fun|tennis|anime/i],
    answer: "Joshua plays tennis (UCF team!), collects TCG cards, watches anime, loves theme parks & traveled across the Americas! 🎾" },
  { patterns: [/available|open|opportunit/i],
    answer: "Yes! Joshua is open to new opportunities — email joshuak419@gmail.com or use the Contact form! 🎯" },
  { patterns: [/thanks|thank you|thx|ty/i],
    answer: "Woof woof! 🐾 Anytime! Anything else you'd like to know about Joshua?" },
  { patterns: [/treat/i],
    answer: "*wags tail furiously* TREAT?! 🦴 You're the best human ever!!" },
  { patterns: [/good boy|good dog|cute|adorable/i],
    answer: "*spins in circles* 🐾 I'm the goodest boy!! Joshua says so every day!" },
];

function getAnswer(q: string): string {
  for (const { patterns, answer } of KB) {
    if (patterns.some(p => p.test(q))) return answer;
  }
  return "Woof! 🐾 Not sure about that — try asking about Joshua's skills, projects, experience, or how to contact him!";
}

// Truncate for speech bubble (max ~13 chars display)
function bubbleSnippet(text: string): string {
  const clean = text.replace(/[🐾🏴‍☠️📍📬🐙💼📄🏰🛠️🌱🔄🪙💼🤖☁️🎾🎯🦴]/gu, "").trim();
  return clean.length > 13 ? clean.slice(0, 12) + "…" : clean;
}

// ─── SVG HTML string (original design) ───────────────────────────────────────
const LOUIE_SVG = `
<svg id="louie" xmlns="http://www.w3.org/2000/svg" viewBox="36 28 468 300" aria-label="Louie the corgi" style="width:100%;height:auto;overflow:visible;cursor:pointer;display:block;-webkit-tap-highlight-color:transparent;touch-action:manipulation;user-select:none;">
<title>Louie</title>
<style>
  .fur{fill:#E9A23B}.furDark{fill:#CE861F}.furLight{fill:#F6C878}
  .cream{fill:#FCFBF7}.creamSh{fill:#EDE8DC}.toe{fill:#DCD3C0}
  .ink{fill:#17223B}.blue{fill:#2563EB}.blueDark{fill:#1740B8}.blueDeep{fill:#14337F}
  .pink{fill:#F0899B}.blush{fill:#F08A5D;opacity:.30}.spark{fill:#F6C878}
  .bubbleBg{fill:#161B22;stroke:#30363D;stroke-width:2}
  .bubbleTx{fill:#E6EDF3;font-family:ui-monospace,"SF Mono",Menlo,Consolas,monospace;font-size:18px;font-weight:700}
  .off{display:none}

  #scene{animation:bob 4.4s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 100%}
  @keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}
  #eyes{animation:blink 4.6s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 50%}
  @keyframes blink{0%,90%,100%{transform:scaleY(1)}93%{transform:scaleY(.08)}96%{transform:scaleY(1)}}
  #tail{animation:wag .78s ease-in-out infinite;transform-box:fill-box;transform-origin:6% 72%}
  @keyframes wag{0%,100%{transform:rotate(-11deg)}50%{transform:rotate(10deg)}}
  #earL{animation:twitchL 5.2s ease-in-out infinite;transform-box:fill-box;transform-origin:70% 96%}
  @keyframes twitchL{0%,72%,100%{transform:rotate(0)}78%{transform:rotate(-7deg)}84%{transform:rotate(2deg)}}
  #earR{animation:twitchR 5.2s ease-in-out infinite .35s;transform-box:fill-box;transform-origin:30% 96%}
  @keyframes twitchR{0%,72%,100%{transform:rotate(0)}78%{transform:rotate(7deg)}84%{transform:rotate(-2deg)}}
  #pawL{animation:tapA .46s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 100%}
  #pawR{animation:tapB .46s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 100%}
  @keyframes tapA{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
  @keyframes tapB{0%,100%{transform:translateY(-4px)}50%{transform:translateY(0)}}
  #glow{animation:glowAnim 2.6s ease-in-out infinite}
  @keyframes glowAnim{0%,100%{opacity:.20}50%{opacity:.45}}
  .s1{animation:twinkle 3.1s ease-in-out infinite}
  .s2{animation:twinkle 3.1s ease-in-out infinite .9s}
  .s3{animation:twinkle 3.1s ease-in-out infinite 1.8s}
  @keyframes twinkle{0%,100%{opacity:.25;transform:scale(.8)}50%{opacity:1;transform:scale(1.15)}}
  #bubble{animation:bubbleIn 9s ease-in-out infinite}
  @keyframes bubbleIn{0%{opacity:0}6%,94%{opacity:1}100%{opacity:0}}
  .m1{animation:msg 9s linear infinite}
  .m2{animation:msg 9s linear infinite -6s}
  .m3{animation:msg 9s linear infinite -3s}
  @keyframes msg{0%,33.32%{opacity:1}33.33%,100%{opacity:0}}
  .happy #eyesOpen,.sleep #eyesOpen{display:none}
  .happy #eyesHappy{display:block}.sleep #eyesSleep{display:block}
  .happy #eyes,.sleep #eyes{animation:none}
  .sleep #tail{animation-duration:2.6s}
  .sleep #pawL,.sleep #pawR{animation:none}
  .sleep #scene{animation-duration:6.5s}
  .sleep #bubble{display:none}.sleep #zzz{display:block}
  .happy #tail{animation-duration:.3s}
  .bark #bark{display:block;animation:barkPop .55s ease-out}
  @keyframes barkPop{0%{opacity:0;transform:translateX(-6px) scale(.85)}35%{opacity:1;transform:translateX(0) scale(1)}100%{opacity:0;transform:translateX(8px) scale(1.05)}}
  #bark{transform-box:fill-box;transform-origin:0% 50%}
  .z1{animation:zfloat 2.4s ease-in-out infinite}
  .z2{animation:zfloat 2.4s ease-in-out infinite .5s}
  .z3{animation:zfloat 2.4s ease-in-out infinite 1s}
  @keyframes zfloat{0%{opacity:0;transform:translate(0,6px)}30%{opacity:.95}100%{opacity:0;transform:translate(10px,-16px)}}
  .heart{transform-box:fill-box;transform-origin:50% 50%;animation:petHeart 1.1s ease-out forwards}
  @keyframes petHeart{0%{opacity:0;transform:translateY(6px) scale(.4)}20%{opacity:1}100%{opacity:0;transform:translateY(-46px) scale(1.15)}}
  .bounce{animation:bounce .5s cubic-bezier(.28,.84,.42,1)}
  @keyframes bounce{0%{transform:translateY(0) scale(1)}30%{transform:translateY(-16px) scale(1.04,.97)}60%{transform:translateY(0) scale(.97,1.03)}100%{transform:translateY(0) scale(1)}}
  #antennaDot{animation:antBlink 1.8s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 50%}
  @keyframes antBlink{0%,100%{opacity:.9;transform:scale(1)}50%{opacity:.1;transform:scale(.6)}}
</style>

<g class="spark">
  <path class="s1" d="M436 214l4.2 10.6L451 229l-10.8 4.4L436 244l-4.2-10.6L421 229l10.8-4.4z" style="transform-box:fill-box;transform-origin:50% 50%"/>
  <path class="s2" d="M62 128l3.4 8.6L74 140l-8.6 3.4L62 152l-3.4-8.6L50 140l8.6-3.4z" style="transform-box:fill-box;transform-origin:50% 50%"/>
  <circle class="s3" cx="470" cy="168" r="4.5" style="transform-box:fill-box;transform-origin:50% 50%"/>
  <circle class="s2" cx="48" cy="218" r="3.5" style="transform-box:fill-box;transform-origin:50% 50%"/>
</g>

<g id="bubble">
  <rect class="bubbleBg" x="310" y="60" width="194" height="58" rx="12"/>
  <path class="bubbleBg" d="M322 106 L304 122 L323 118 Z" stroke="none"/>
  <g class="bubbleTx" text-anchor="middle">
    <text class="m1" x="407" y="88">Hi! I'm Louie</text>
    <text class="m2" opacity="0" x="407" y="88">Ask me stuff!</text>
    <text class="m3" opacity="0" x="407" y="88">*wags tail*</text>
  </g>
</g>

<g id="scene">
  <g id="tail">
    <path class="fur" d="M236 252C238 222 258 200 282 198 308 196 320 216 314 236 306 258 262 272 236 252Z"/>
    <path class="furLight" d="M282 198C302 197 316 210 314 226 310 211 298 200 282 198Z"/>
  </g>
  <g id="earL">
    <path class="fur" d="M141 118c-11-32-8-64 7-73 15-9 33 16 39 55z"/>
    <path class="furLight" d="M151 108c-8-24-6-47 4-53 10-6 21 12 26 41z"/>
  </g>
  <g id="earR">
    <path class="fur" d="M259 118c11-32 8-64-7-73-15-9-33 16-39 55z"/>
    <path class="furLight" d="M249 108c8-24 6-47-4-53-10-6-21 12-26 41z"/>
  </g>
  <g>
    <path class="cream" d="M152 268c-4-32 18-56 48-56s52 24 48 56z"/>
    <path class="creamSh" d="M152 268c1-9 3-17 7-24 6 16 18 26 41 26s35-10 41-26c4 7 6 15 7 24z" opacity=".55"/>
  </g>
  <ellipse class="fur" cx="200" cy="156" rx="86" ry="74"/>
  <path class="fur" d="M118 150C106 160 102 178 108 192 116 184 120 166 118 150Z"/>
  <path class="fur" d="M282 150C294 160 298 178 292 192 284 184 280 166 282 150Z"/>
  <path class="cream" d="M196 92C190 104 185 126 183 156H217C215 126 210 104 204 92 202 88.5 198 88.5 196 92Z"/>
  <ellipse class="cream" cx="200" cy="186" rx="55" ry="40"/>
  <ellipse class="blush" cx="132" cy="186" rx="17" ry="10"/>
  <ellipse class="blush" cx="268" cy="186" rx="17" ry="10"/>
  <g id="eyes">
    <g id="eyesOpen">
      <g id="eyeL"><ellipse class="ink" cx="163" cy="150" rx="12" ry="13"/><circle fill="#FFFFFF" cx="158.5" cy="145" r="4.2"/></g>
      <g id="eyeR"><ellipse class="ink" cx="237" cy="150" rx="12" ry="13"/><circle fill="#FFFFFF" cx="232.5" cy="145" r="4.2"/></g>
    </g>
    <g id="eyesHappy" class="off">
      <path d="M150 152C156 142 170 142 176 152" stroke="#17223B" stroke-width="5.5" stroke-linecap="round" fill="none"/>
      <path d="M224 152C230 142 244 142 250 152" stroke="#17223B" stroke-width="5.5" stroke-linecap="round" fill="none"/>
    </g>
    <g id="eyesSleep" class="off">
      <path d="M150 148C156 158 170 158 176 148" stroke="#17223B" stroke-width="5.5" stroke-linecap="round" fill="none"/>
      <path d="M224 148C230 158 244 158 250 148" stroke="#17223B" stroke-width="5.5" stroke-linecap="round" fill="none"/>
    </g>
  </g>
  <path class="ink" d="M200 165c8.5 0 15 4.5 15 10s-6.5 10-15 10-15-4.5-15-10 6.5-10 15-10z"/>
  <ellipse fill="#FFFFFF" cx="193.5" cy="169" rx="2.8" ry="1.9" opacity=".48"/>
  <path class="ink" d="M200 195c-11 0-19 5-17 12 2 8 9 12 17 12s15-4 17-12c2-7-6-12-17-12z"/>
  <path class="pink" d="M200 209c6 0 10 2.5 10 6s-4 6-10 6-10-2.5-10-6 4-6 10-6z"/>
  <rect class="blue" x="118" y="256" width="164" height="56" rx="9"/>
  <rect id="glow" fill="#8FB4FF" x="126" y="264" width="148" height="40" rx="6" opacity=".25"/>
  <g fill="#FFFFFF" opacity=".92">
    <ellipse cx="200" cy="290" rx="8" ry="6.5"/>
    <ellipse cx="189" cy="279" rx="3.6" ry="4.6"/>
    <ellipse cx="196" cy="275" rx="3.6" ry="4.8"/>
    <ellipse cx="204" cy="275" rx="3.6" ry="4.8"/>
    <ellipse cx="211" cy="279" rx="3.6" ry="4.6"/>
  </g>
  <rect class="blueDeep" x="102" y="310" width="196" height="15" rx="7.5"/>
  <g id="pawL">
    <rect class="cream" x="140" y="242" width="30" height="26" rx="13"/>
    <g class="toe">
      <ellipse cx="147" cy="250" rx="2.6" ry="3.4"/>
      <ellipse cx="155" cy="248" rx="2.6" ry="3.6"/>
      <ellipse cx="163" cy="250" rx="2.6" ry="3.4"/>
    </g>
  </g>
  <g id="pawR">
    <rect class="cream" x="230" y="242" width="30" height="26" rx="13"/>
    <g class="toe">
      <ellipse cx="237" cy="250" rx="2.6" ry="3.4"/>
      <ellipse cx="245" cy="248" rx="2.6" ry="3.6"/>
      <ellipse cx="253" cy="250" rx="2.6" ry="3.4"/>
    </g>
  </g>
</g>

<g id="hearts" fill="#F0899B"></g>
<g id="zzz" class="off" fill="#8A94A6" font-family="ui-monospace,Menlo,monospace" font-weight="700">
  <text class="z1" x="296" y="104" font-size="17">z</text>
  <text class="z2" x="316" y="86" font-size="21">z</text>
  <text class="z3" x="340" y="66" font-size="25">z</text>
</g>
<g id="bark" class="off">
  <g stroke="#F6A93B" stroke-width="4" stroke-linecap="round">
    <path d="M300 168l18-8"/><path d="M302 186l20 2"/><path d="M296 150l14-14"/>
  </g>
  <text x="330" y="182" fill="#F6A93B" font-family="ui-monospace,Menlo,monospace" font-weight="700" font-size="22">woof!</text>
</g>

<!-- ═══ Space Outfit ═══ -->
<defs>
  <radialGradient id="hGlass" cx="35%" cy="30%">
    <stop offset="0%" stop-color="#a8d8ff" stop-opacity=".20"/>
    <stop offset="70%" stop-color="#60a5fa" stop-opacity=".06"/>
    <stop offset="100%" stop-color="#1d4ed8" stop-opacity=".14"/>
  </radialGradient>
  <linearGradient id="hRim" x1="0%" y1="0%" x2="0%" y2="100%">
    <stop offset="0%" stop-color="#94a3b8"/>
    <stop offset="100%" stop-color="#334155"/>
  </linearGradient>
</defs>
<!-- Helmet dome -->
<ellipse cx="200" cy="144" rx="108" ry="116" fill="url(#hGlass)" stroke="rgba(147,197,253,.5)" stroke-width="2.5"/>
<!-- Helmet rim ring at neck -->
<rect x="106" y="234" width="188" height="24" rx="12" fill="url(#hRim)" stroke="rgba(203,213,225,.35)" stroke-width="1.5"/>
<!-- Visor highlight arc -->
<path d="M140 86 Q175 68 220 80" stroke="rgba(255,255,255,.5)" stroke-width="5" fill="none" stroke-linecap="round"/>
<!-- Antenna -->
<line x1="200" y1="28" x2="200" y2="50" stroke="#94a3b8" stroke-width="3" stroke-linecap="round"/>
<circle cx="200" cy="22" r="8" fill="#1d4ed8" stroke="#93c5fd" stroke-width="1.5"/>
<circle id="antennaDot" cx="200" cy="22" r="5" fill="#60a5fa"/>
<!-- Shoulder badges -->
<rect x="96" y="152" width="26" height="16" rx="5" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.2" opacity=".9"/>
<text x="109" y="164" font-family="monospace" font-size="7" font-weight="700" fill="#93c5fd" text-anchor="middle">NASA</text>
<rect x="278" y="152" width="26" height="16" rx="5" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.2" opacity=".9"/>
<text x="291" y="164" font-family="monospace" font-size="7" font-weight="700" fill="#93c5fd" text-anchor="middle">K-9</text>
<!-- Stars inside helmet -->
<circle cx="164" cy="114" r="1.8" fill="white" opacity=".65"/>
<circle cx="236" cy="108" r="1.2" fill="white" opacity=".55"/>
<circle cx="182" cy="98" r="1.4" fill="white" opacity=".5"/>
<circle cx="220" cy="120" r="1" fill="white" opacity=".45"/>
<circle cx="155" cy="136" r="1" fill="white" opacity=".4"/>
</svg>`;

type Msg = { from: "user" | "louie"; text: string };

const SUGGESTIONS = ["What are his skills?", "Tell me about EcoVest", "How do I contact Joshua?", "Where did he go to school?"];

export default function CorgiWidget() {
  const svgRef = useRef<HTMLDivElement>(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [louieOpen, setLouieOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    { from: "louie", text: "Woof! 🐾 Hi! I'm Louie, Joshua's real corgi. Ask me anything about Josh — his skills, projects, or experience!" },
  ]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // ── Attach original interactions ──────────────────────────────────────────
  useEffect(() => {
    const container = svgRef.current;
    if (!container) return;

    const svg    = container.querySelector<SVGSVGElement>("#louie");
    const scene  = container.querySelector<SVGGElement>("#scene");
    const eyeL   = container.querySelector<SVGGElement>("#eyeL");
    const eyeR   = container.querySelector<SVGGElement>("#eyeR");
    const hearts = container.querySelector<SVGGElement>("#hearts");
    const bubble = container.querySelector<SVGGElement>("#bubble");
    const msgs2  = Array.from(container.querySelectorAll<SVGTextElement>(".m1,.m2,.m3"));
    const main   = msgs2[0];
    if (!svg || !scene || !eyeL || !eyeR || !hearts || !bubble || !main) return;

    const HEART_D = "M10 18S0 11 0 6C0 2.5 2.5 0 6 0 8 0 9.5 1.2 10 2.5 10.5 1.2 12 0 14 0 17.5 0 20 2.5 20 6 20 11 10 18 10 18Z";
    let idleTimer: ReturnType<typeof setTimeout>;
    let happyTimer: ReturnType<typeof setTimeout>;
    let barkTimer: ReturnType<typeof setTimeout>;
    let petting = false, lastHeart = 0;

    function setState(name: string) {
      svg?.classList.remove("happy", "sleep", "bark");
      if (name) svg?.classList.add(name);
    }
    function wake() {
      setState("");
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => { if (!svg.classList.contains("happy")) setState("sleep"); }, 10000);
    }
    function track(cx: number, cy: number) {
      const r = svg.getBoundingClientRect();
      const nx = Math.max(-1, Math.min(1, ((cx - r.left) / r.width - .5) * 2));
      const ny = Math.max(-1, Math.min(1, ((cy - r.top) / r.height - .5) * 2));
      const ex = (nx * 4.5).toFixed(2), ey = (ny * 3.5).toFixed(2);
      eyeL.setAttribute("transform", `translate(${ex},${ey})`);
      eyeR.setAttribute("transform", `translate(${ex},${ey})`);
      scene.style.transform = `translate(${(nx*5).toFixed(2)}px,${(ny*3).toFixed(2)}px) rotate(${(nx*1.6).toFixed(2)}deg)`;
    }
    function resetGaze() {
      eyeL.removeAttribute("transform"); eyeR.removeAttribute("transform"); scene.style.transform = "";
    }
    function svgPt(cx: number, cy: number) {
      const r = svg.getBoundingClientRect();
      return { x: 36 + ((cx-r.left)/r.width)*468, y: 28 + ((cy-r.top)/r.height)*300 };
    }
    function spawnHeart(cx: number, cy: number) {
      const now = Date.now(); if (now-lastHeart < 110) return; lastHeart = now;
      const p = svgPt(cx, cy), sc = (.5+Math.random()*.5).toFixed(2);
      const g = document.createElementNS("http://www.w3.org/2000/svg","g");
      g.setAttribute("transform",`translate(${(p.x-10+(Math.random()*24-12)).toFixed(1)},${(p.y-10).toFixed(1)}) scale(${sc})`);
      const path = document.createElementNS("http://www.w3.org/2000/svg","path");
      path.setAttribute("d", HEART_D); path.setAttribute("class","heart");
      g.appendChild(path); hearts.appendChild(g);
      path.addEventListener("animationend", () => g.remove());
    }
    function bark() {
      wake();
      svg.classList.remove("bark"); void svg.offsetWidth; svg.classList.add("bark");
      clearTimeout(barkTimer);
      barkTimer = setTimeout(() => svg.classList.remove("bark"), 560);
      svg.classList.remove("bounce"); void svg.offsetWidth; svg.classList.add("bounce");
    }

    const onMove = (e: MouseEvent) => { wake(); track(e.clientX, e.clientY); };
    const onLeave = () => resetGaze();
    const onPetMove = (e: MouseEvent) => { if (petting) spawnHeart(e.clientX, e.clientY); };
    const onPetUp = () => {
      if (!petting) return; petting = false;
      clearTimeout(happyTimer);
      happyTimer = setTimeout(() => { if (!svg.classList.contains("sleep")) setState(""); }, 900);
    };
    const onSvgDown = (e: MouseEvent) => {
      e.preventDefault(); petting = true; wake(); setState("happy"); spawnHeart(e.clientX, e.clientY);
    };
    const onSvgClick = () => bark();

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    window.addEventListener("mousemove", onPetMove, { passive: true });
    window.addEventListener("mouseup", onPetUp);
    svg.addEventListener("mousedown", onSvgDown);
    svg.addEventListener("click", onSvgClick);

    wake();
    return () => {
      clearTimeout(idleTimer); clearTimeout(happyTimer); clearTimeout(barkTimer);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mousemove", onPetMove);
      window.removeEventListener("mouseup", onPetUp);
      svg.removeEventListener("mousedown", onSvgDown);
      svg.removeEventListener("click", onSvgClick);
    };
  }, []);

  // ── Say something in the speech bubble ────────────────────────────────────
  const sayInBubble = (text: string) => {
    const container = svgRef.current; if (!container) return;
    const bubble = container.querySelector<SVGGElement>("#bubble");
    const main = container.querySelector<SVGTextElement>(".m1");
    if (!bubble || !main) return;
    bubble.style.opacity = "1"; bubble.style.animation = "none";
    main.textContent = bubbleSnippet(text);
    setTimeout(() => { bubble.style.animation = ""; bubble.style.opacity = ""; main.textContent = "Hi! I'm Louie"; }, 4000);
  };

  // ── Scroll chat to bottom ──────────────────────────────────────────────────
  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs, thinking]);
  useEffect(() => { if (chatOpen) setTimeout(() => inputRef.current?.focus(), 100); }, [chatOpen]);

  const send = () => {
    const q = input.trim(); if (!q) return;
    setInput("");
    setMsgs(m => [...m, { from: "user", text: q }]);
    setThinking(true);
    setTimeout(() => {
      const ans = getAnswer(q);
      setThinking(false);
      setMsgs(m => [...m, { from: "louie", text: ans }]);
      sayInBubble(ans);
    }, 700);
  };

  return (
    <div className="fixed bottom-2 right-2 sm:bottom-4 sm:right-4 z-[60] flex flex-col items-end gap-2">

      {/* ── Mobile/tablet toggle button (hidden on lg+) ── */}
      <button
        onClick={() => { setLouieOpen(o => { if(o) setChatOpen(false); return !o; }); }}
        className="lg:hidden flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 shadow-[0_0_18px_rgba(112,66,248,0.55)] hover:opacity-90 transition-all active:scale-95"
        aria-label="Toggle Louie"
      >
        {louieOpen
          ? <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
          : <span className="text-xl leading-none">🐾</span>
        }
      </button>

      {/* ── Chat panel ── */}
      {chatOpen && (
        <div className="w-[calc(100vw-1rem)] sm:w-[300px] lg:w-[340px] rounded-2xl border border-[#7042f861] bg-[#030014]/95 backdrop-blur-md shadow-[0_0_40px_rgba(112,66,248,0.3)] flex flex-col overflow-hidden" style={{ maxHeight:"min(480px,55vh)" }}>
          {/* Header */}
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#7042f840] bg-[#0300145e] flex-shrink-0">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center text-sm">🐾</div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-semibold leading-none">Louie</p>
              <p className="text-gray-500 text-[10px] mt-0.5">Joshua&apos;s corgi assistant</p>
            </div>
            <button onClick={() => setChatOpen(false)} className="text-gray-500 hover:text-white transition-colors p-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-3 py-3 flex flex-col gap-2 min-h-0">
            {msgs.map((m, i) => (
              <div key={i} className={`flex gap-1.5 ${m.from==="user"?"flex-row-reverse":"flex-row"}`}>
                {m.from==="louie" && <span className="text-base flex-shrink-0 mt-0.5">🐾</span>}
                <div className={`max-w-[82%] px-3 py-2 rounded-2xl text-xs leading-relaxed ${m.from==="user"?"bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-tr-sm":"bg-[#0300145e] border border-[#7042f840] text-gray-200 rounded-tl-sm"}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {thinking && (
              <div className="flex gap-1.5 items-center">
                <span className="text-base">🐾</span>
                <div className="bg-[#0300145e] border border-[#7042f840] px-3 py-2 rounded-2xl rounded-tl-sm flex gap-1">
                  {[0,150,300].map(d => <span key={d} className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce" style={{animationDelay:`${d}ms`}}/>)}
                </div>
              </div>
            )}
            {msgs.length <= 2 && (
              <div className="flex flex-wrap gap-1.5 mt-1">
                {SUGGESTIONS.map(s => (
                  <button key={s} onClick={() => { setInput(s); setTimeout(send,50); }}
                    className="text-[10px] px-2 py-1 rounded-full border border-[#7042f861] text-purple-300 bg-[#7042f810] hover:border-purple-500 hover:text-white transition-all">
                    {s}
                  </button>
                ))}
              </div>
            )}
            <div ref={bottomRef}/>
          </div>

          {/* Input */}
          <div className="px-3 pb-3 pt-2 flex gap-2 border-t border-[#7042f820] flex-shrink-0">
            <input ref={inputRef} value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>{if(e.key==="Enter")send();}}
              placeholder="Ask Louie about Joshua..."
              className="flex-1 min-w-0 bg-[#030014] border border-[#2A0E61] rounded-xl px-3 py-2 text-gray-200 text-xs placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-colors"/>
            <button onClick={send} className="flex-shrink-0 w-8 h-8 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 flex items-center justify-center hover:opacity-90 transition-opacity">
              <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"/></svg>
            </button>
          </div>
        </div>
      )}

      {/* ── Louie + buttons ── */}
      <div className={`flex flex-col items-center gap-2 lg:flex ${louieOpen ? "flex" : "hidden"}`}>
        {/* SVG container */}
        <div ref={svgRef} className="w-[72px] sm:w-[150px] lg:w-[240px] select-none" dangerouslySetInnerHTML={{ __html: LOUIE_SVG }}/>

        {/* Action buttons */}
        <div className="flex gap-1.5">
          <button onClick={() => setChatOpen(o=>!o)}
            className="flex items-center gap-1 text-[11px] font-semibold px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white hover:opacity-90 transition-all shadow-[0_0_12px_rgba(112,66,248,0.4)]">
            <span className="hidden sm:inline">💬 {chatOpen ? "Close" : "Chat"}</span><span className="sm:hidden">💬</span>
          </button>
          <button onClick={() => {
            const svg = svgRef.current?.querySelector<SVGSVGElement>("#louie"); if(!svg) return;
            svg.classList.add("happy");
            const bubble = svgRef.current?.querySelector<SVGGElement>("#bubble");
            const main = svgRef.current?.querySelector<SVGTextElement>(".m1");
            if(bubble && main){ bubble.style.opacity="1"; bubble.style.animation="none"; main.textContent="treat!!"; }
            setTimeout(()=>{ svg.classList.remove("happy"); if(bubble&&main){bubble.style.animation="";bubble.style.opacity="";main.textContent="Hi! I'm Louie";} }, 2500);
          }} className="text-[11px] font-semibold px-3 py-1.5 rounded-full border border-[#7042f861] bg-[#0300145e] text-gray-300 hover:border-purple-500 hover:text-white transition-all">
            🦴
          </button>
          <button onClick={() => {
            const svg = svgRef.current?.querySelector<SVGSVGElement>("#louie"); if(!svg) return;
            svg.classList.remove("bark"); void svg.offsetWidth; svg.classList.add("bark");
            setTimeout(()=>svg.classList.remove("bark"), 560);
          }} className="text-[11px] font-semibold px-3 py-1.5 rounded-full border border-[#7042f861] bg-[#0300145e] text-gray-300 hover:border-purple-500 hover:text-white transition-all">
            🔊
          </button>
        </div>
        <p className="hidden sm:block text-[9px] text-gray-600 text-center leading-tight">pet him · he follows your cursor</p>
      </div>
    </div>
  );
}

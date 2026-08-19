"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * Interactive corgi mascot — the one promised on the GitHub profile README
 * ("Meet him properly on my site — he follows your cursor over there").
 *
 * Behavior:
 *  - Eyes track the cursor anywhere on the page.
 *  - Click him (or the "Say woof" button) to bark.
 *  - Click-and-drag across him to pet — spawns floating hearts.
 *  - Type anywhere and it shows up in his speech bubble; Enter/Escape releases it.
 *  - Leave him alone for a while and he naps.
 *  - Collapses to a small paw button so he never blocks content.
 */

const CHATTER = [
  "npm run dev",
  "git push",
  "it compiles",
  "LGTM",
  "ship it",
  "tests pass",
  "woof()",
];

const HEART_D =
  "M10 18S0 11 0 6C0 2.5 2.5 0 6 0 8 0 9.5 1.2 10 2.5 10.5 1.2 12 0 14 0 17.5 0 20 2.5 20 6 20 11 10 18 10 18Z";

const IDLE_MS = 9000;

type HeartInstance = { id: number; transform: string; scale: string };

const CorgiWidget = () => {
  const [open, setOpen] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [stateName, setStateName] = useState<"idle" | "happy" | "sleep">("idle");
  const [barking, setBarking] = useState(false);
  const [bouncing, setBouncing] = useState(false);
  const [bubbleText, setBubbleText] = useState<string | null>(null);
  const [chatterIndex, setChatterIndex] = useState(0);
  const [hearts, setHearts] = useState<HeartInstance[]>([]);
  const [gaze, setGaze] = useState({ ex: 0, ey: 0 });
  const [sceneTransform, setSceneTransform] = useState("");

  const svgRef = useRef<SVGSVGElement>(null);
  const idleTimer = useRef<ReturnType<typeof setTimeout>>();
  const happyTimer = useRef<ReturnType<typeof setTimeout>>();
  const barkTimer = useRef<ReturnType<typeof setTimeout>>();
  const bounceTimer = useRef<ReturnType<typeof setTimeout>>();
  const pettingRef = useRef(false);
  const lastHeartRef = useRef(0);
  const typedRef = useRef("");
  const heartId = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
  }, []);

  const wake = () => {
    if (stateName === "sleep") setStateName("idle");
    clearTimeout(idleTimer.current);
    idleTimer.current = setTimeout(() => {
      setStateName((s) => (s === "happy" ? s : "sleep"));
    }, IDLE_MS);
  };

  const say = (text: string) => {
    typedRef.current = text;
    setBubbleText(text);
  };

  const releaseBubble = () => {
    typedRef.current = "";
    setBubbleText(null);
  };

  const track = (cx: number, cy: number) => {
    if (reduceMotion || stateName === "sleep" || !svgRef.current || !open) return;
    const r = svgRef.current.getBoundingClientRect();
    const nx = Math.max(-1, Math.min(1, ((cx - r.left) / r.width - 0.5) * 2));
    const ny = Math.max(-1, Math.min(1, ((cy - r.top) / r.height - 0.5) * 2));
    setGaze({ ex: nx * 4.5, ey: ny * 3.5 });
    setSceneTransform(
      `translate(${(nx * 5).toFixed(2)}px, ${(ny * 3).toFixed(2)}px) rotate(${(nx * 1.6).toFixed(2)}deg)`
    );
  };

  const spawnHeart = (cx: number, cy: number) => {
    if (reduceMotion || !svgRef.current) return;
    const now = Date.now();
    if (now - lastHeartRef.current < 110) return;
    lastHeartRef.current = now;
    const r = svgRef.current.getBoundingClientRect();
    const x = 36 + ((cx - r.left) / r.width) * 468;
    const y = 28 + ((cy - r.top) / r.height) * 300;
    const sc = (0.5 + Math.random() * 0.5).toFixed(2);
    const id = heartId.current++;
    setHearts((prev) => [
      ...prev,
      {
        id,
        transform: `translate(${(x - 10 + (Math.random() * 24 - 12)).toFixed(1)},${(y - 10).toFixed(1)})`,
        scale: sc,
      },
    ]);
    setTimeout(() => setHearts((prev) => prev.filter((h) => h.id !== id)), 1100);
  };

  const bark = () => {
    wake();
    if (!reduceMotion) {
      setBarking(false);
      requestAnimationFrame(() => setBarking(true));
      clearTimeout(barkTimer.current);
      barkTimer.current = setTimeout(() => setBarking(false), 560);
      setBouncing(false);
      requestAnimationFrame(() => setBouncing(true));
      clearTimeout(bounceTimer.current);
      bounceTimer.current = setTimeout(() => setBouncing(false), 500);
    }
    if (!typedRef.current) {
      const next = (chatterIndex + 1) % CHATTER.length;
      setChatterIndex(next);
      say(CHATTER[next]);
    }
  };

  const giveTreat = () => {
    wake();
    setStateName("happy");
    say("treat!!");
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        if (!svgRef.current) return;
        const r = svgRef.current.getBoundingClientRect();
        lastHeartRef.current = 0;
        spawnHeart(
          r.left + r.width * (0.28 + Math.random() * 0.44),
          r.top + r.height * (0.42 + Math.random() * 0.2)
        );
      }, i * 130);
    }
    clearTimeout(happyTimer.current);
    happyTimer.current = setTimeout(() => {
      setStateName("idle");
      releaseBubble();
    }, 2600);
  };

  const startPet = (cx: number, cy: number) => {
    pettingRef.current = true;
    wake();
    setStateName("happy");
    spawnHeart(cx, cy);
  };
  const movePet = (cx: number, cy: number) => {
    if (pettingRef.current) spawnHeart(cx, cy);
  };
  const endPet = () => {
    if (!pettingRef.current) return;
    pettingRef.current = false;
    clearTimeout(happyTimer.current);
    happyTimer.current = setTimeout(() => {
      setStateName((s) => (s === "sleep" ? s : "idle"));
    }, 900);
  };

  useEffect(() => {
    if (!open) return undefined;

    const onMouseMove = (e: MouseEvent) => {
      wake();
      track(e.clientX, e.clientY);
      movePet(e.clientX, e.clientY);
    };
    const onMouseUp = () => endPet();
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const target = e.target as HTMLElement | null;
      if (target && /^(INPUT|TEXTAREA)$/.test(target.tagName)) return;
      wake();
      if (e.key === "Enter" || e.key === "Escape") {
        releaseBubble();
        return;
      }
      if (e.key === "Backspace") {
        const next = typedRef.current.slice(0, -1);
        next ? say(next) : releaseBubble();
        e.preventDefault();
        return;
      }
      if (e.key.length !== 1) return;
      if (typedRef.current.length >= 13) return;
      say(typedRef.current + e.key);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("keydown", onKeyDown);
    wake();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("keydown", onKeyDown);
      clearTimeout(idleTimer.current);
      clearTimeout(happyTimer.current);
      clearTimeout(barkTimer.current);
      clearTimeout(bounceTimer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, reduceMotion, stateName, chatterIndex]);

  const shownText = bubbleText ?? "npm run dev";
  const showBubble = stateName !== "sleep";

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Show the corgi mascot"
        className="fixed bottom-5 right-5 z-[40] w-11 h-11 rounded-full bg-[#0300145e] border border-[#7042f840] backdrop-blur-sm flex items-center justify-center text-lg hover:border-purple-500 hover:shadow-[0_0_12px_rgba(112,66,248,0.5)] transition-all"
        title="Bring back the corgi"
      >
        🐾
      </button>
    );
  }

  return (
    <div className="fixed bottom-5 right-5 z-[40] w-[240px] select-none">
      <div className="relative rounded-2xl bg-[#0300145e] border border-[#7042f840] backdrop-blur-sm px-3 pt-3 pb-2 shadow-[0_0_20px_rgba(112,66,248,0.25)]">
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Hide the corgi mascot"
          className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#0d0530] border border-[#7042f840] text-gray-400 hover:text-white hover:border-purple-500 text-xs flex items-center justify-center transition-colors"
        >
          ✕
        </button>

        <style>{`
          .corgi-fur      { fill: #E9A23B; }
          .corgi-furDark  { fill: #CE861F; }
          .corgi-furLight { fill: #F6C878; }
          .corgi-cream    { fill: #FCFBF7; }
          .corgi-creamSh  { fill: #EDE8DC; }
          .corgi-toe      { fill: #DCD3C0; }
          .corgi-ink      { fill: #17223B; }
          .corgi-blue     { fill: #2563EB; }
          .corgi-blueDeep { fill: #14337F; }
          .corgi-pink     { fill: #F0899B; }
          .corgi-blush    { fill: #F08A5D; opacity: .30; }
          .corgi-spark    { fill: #F6C878; }
          .corgi-bubbleBg { fill: #161B22; stroke: #30363D; stroke-width: 2; }
          .corgi-bubbleTx { fill: #E6EDF3; font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace; font-size: 15px; font-weight: 600; }

          #corgi-scene { transition: transform .18s cubic-bezier(.2,.8,.3,1); animation: corgiBob 4.4s ease-in-out infinite; transform-box: fill-box; transform-origin: 50% 100%; }
          @keyframes corgiBob { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
          .corgi-happy #corgi-scene { animation-duration: 1.1s; }
          .corgi-sleep #corgi-scene { animation-duration: 6.5s; }

          #corgi-eyes { animation: corgiBlink 4.6s ease-in-out infinite; transform-box: fill-box; transform-origin: 50% 50%; }
          @keyframes corgiBlink { 0%, 90%, 100% { transform: scaleY(1); } 93% { transform: scaleY(.08); } 96% { transform: scaleY(1); } }
          .corgi-happy #corgi-eyes, .corgi-sleep #corgi-eyes { animation: none; }

          #corgi-tail { animation: corgiWag .78s ease-in-out infinite; transform-box: fill-box; transform-origin: 6% 72%; }
          @keyframes corgiWag { 0%,100% { transform: rotate(-11deg); } 50% { transform: rotate(10deg); } }
          .corgi-happy #corgi-tail { animation-duration: .3s; }
          .corgi-sleep #corgi-tail { animation-duration: 2.6s; }

          #corgi-earL { animation: corgiTwitchL 5.2s ease-in-out infinite; transform-box: fill-box; transform-origin: 70% 96%; }
          @keyframes corgiTwitchL { 0%,72%,100% { transform: rotate(0); } 78% { transform: rotate(-7deg); } 84% { transform: rotate(2deg); } }
          #corgi-earR { animation: corgiTwitchR 5.2s ease-in-out infinite .35s; transform-box: fill-box; transform-origin: 30% 96%; }
          @keyframes corgiTwitchR { 0%,72%,100% { transform: rotate(0); } 78% { transform: rotate(7deg); } 84% { transform: rotate(-2deg); } }

          #corgi-pawL { animation: corgiTapA .46s ease-in-out infinite; transform-box: fill-box; transform-origin: 50% 100%; }
          #corgi-pawR { animation: corgiTapB .46s ease-in-out infinite; transform-box: fill-box; transform-origin: 50% 100%; }
          @keyframes corgiTapA { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
          @keyframes corgiTapB { 0%,100% { transform: translateY(-4px); } 50% { transform: translateY(0); } }
          .corgi-sleep #corgi-pawL, .corgi-sleep #corgi-pawR { animation: none; }

          #corgi-glow { animation: corgiGlow 2.6s ease-in-out infinite; }
          @keyframes corgiGlow { 0%,100% { opacity: .20; } 50% { opacity: .45; } }

          .corgi-s1 { animation: corgiTwinkle 3.1s ease-in-out infinite; }
          .corgi-s2 { animation: corgiTwinkle 3.1s ease-in-out infinite .9s; }
          .corgi-s3 { animation: corgiTwinkle 3.1s ease-in-out infinite 1.8s; }
          @keyframes corgiTwinkle { 0%,100% { opacity: .25; transform: scale(.8); } 50% { opacity: 1; transform: scale(1.15); } }

          .corgi-bounce { animation: corgiBounce .5s cubic-bezier(.28,.84,.42,1); }
          @keyframes corgiBounce {
            0%{transform:translateY(0) scale(1)} 30%{transform:translateY(-16px) scale(1.04,.97)}
            60%{transform:translateY(0) scale(.97,1.03)} 100%{transform:translateY(0) scale(1)}
          }

          .corgi-barkPop { animation: corgiBarkPop .55s ease-out; }
          @keyframes corgiBarkPop {
            0% { opacity: 0; transform: translateX(-6px) scale(.85); }
            35% { opacity: 1; transform: translateX(0) scale(1); }
            100% { opacity: 0; transform: translateX(8px) scale(1.05); }
          }

          .corgi-z1 { animation: corgiZfloat 2.4s ease-in-out infinite; }
          .corgi-z2 { animation: corgiZfloat 2.4s ease-in-out infinite .5s; }
          .corgi-z3 { animation: corgiZfloat 2.4s ease-in-out infinite 1s; }
          @keyframes corgiZfloat {
            0% { opacity: 0; transform: translate(0,6px); }
            30% { opacity: .95; }
            100% { opacity: 0; transform: translate(10px,-16px); }
          }

          .corgi-heart { transform-box: fill-box; transform-origin: 50% 50%; animation: corgiPetHeart 1.1s ease-out forwards; }
          @keyframes corgiPetHeart {
            0% { opacity: 0; transform: translateY(6px) scale(.4); }
            20% { opacity: 1; }
            100% { opacity: 0; transform: translateY(-46px) scale(1.15); }
          }

          @media (prefers-reduced-motion: reduce) {
            #corgi-scene, #corgi-eyes, #corgi-tail, #corgi-earL, #corgi-earR, #corgi-pawL, #corgi-pawR, #corgi-glow,
            .corgi-s1, .corgi-s2, .corgi-s3, .corgi-z1, .corgi-z2, .corgi-z3, .corgi-heart { animation: none !important; }
          }
        `}</style>

        <svg
          ref={svgRef}
          id="corgi-svg"
          viewBox="36 28 468 300"
          aria-label="Interactive corgi mascot"
          className={[
            "w-full h-auto overflow-visible cursor-pointer block",
            stateName === "happy" ? "corgi-happy" : "",
            stateName === "sleep" ? "corgi-sleep" : "",
            bouncing ? "corgi-bounce" : "",
          ].join(" ")}
          onClick={bark}
          onMouseDown={(e) => startPet(e.clientX, e.clientY)}
          onTouchStart={(e) => {
            const t = e.touches[0];
            if (t) startPet(t.clientX, t.clientY);
          }}
          onTouchMove={(e) => {
            const t = e.touches[0];
            if (t) {
              track(t.clientX, t.clientY);
              movePet(t.clientX, t.clientY);
            }
          }}
          onTouchEnd={endPet}
        >
          <title>Corgi mascot</title>

          <g className="corgi-spark">
            <path className="corgi-s1" d="M436 214l4.2 10.6L451 229l-10.8 4.4L436 244l-4.2-10.6L421 229l10.8-4.4z" style={{ transformBox: "fill-box", transformOrigin: "50% 50%" }} />
            <path className="corgi-s2" d="M62 128l3.4 8.6L74 140l-8.6 3.4L62 152l-3.4-8.6L50 140l8.6-3.4z" style={{ transformBox: "fill-box", transformOrigin: "50% 50%" }} />
            <circle className="corgi-s3" cx="470" cy="168" r="4.5" style={{ transformBox: "fill-box", transformOrigin: "50% 50%" }} />
            <circle className="corgi-s2" cx="48" cy="218" r="3.5" style={{ transformBox: "fill-box", transformOrigin: "50% 50%" }} />
          </g>

          {showBubble && (
            <g>
              <rect className="corgi-bubbleBg" x="336" y="74" width="162" height="50" rx="12" />
              <path className="corgi-bubbleBg" d="M348 112 L330 126 L349 122 Z" stroke="none" />
              <text className="corgi-bubbleTx" textAnchor="middle" x="417" y="105">
                {shownText}
              </text>
            </g>
          )}

          <g id="corgi-scene" style={{ transform: sceneTransform || undefined }}>
            <g id="corgi-tail">
              <path className="corgi-fur" d="M236 252C238 222 258 200 282 198 308 196 320 216 314 236 306 258 262 272 236 252Z" />
              <path className="corgi-furLight" d="M282 198C302 197 316 210 314 226 310 211 298 200 282 198Z" />
            </g>

            <g id="corgi-earL">
              <path className="corgi-fur" d="M141 118c-11-32-8-64 7-73 15-9 33 16 39 55z" />
              <path className="corgi-furLight" d="M151 108c-8-24-6-47 4-53 10-6 21 12 26 41z" />
            </g>
            <g id="corgi-earR">
              <path className="corgi-fur" d="M259 118c11-32 8-64-7-73-15-9-33 16-39 55z" />
              <path className="corgi-furLight" d="M249 108c8-24 6-47-4-53-10-6-21 12-26 41z" />
            </g>

            <g>
              <path className="corgi-cream" d="M152 268c-4-32 18-56 48-56s52 24 48 56z" />
              <path className="corgi-creamSh" d="M152 268c1-9 3-17 7-24 6 16 18 26 41 26s35-10 41-26c4 7 6 15 7 24z" opacity=".55" />
            </g>

            <ellipse className="corgi-fur" cx="200" cy="156" rx="86" ry="74" />
            <path className="corgi-fur" d="M118 150C106 160 102 178 108 192 116 184 120 166 118 150Z" />
            <path className="corgi-fur" d="M282 150C294 160 298 178 292 192 284 184 280 166 282 150Z" />

            <path className="corgi-cream" d="M196 92C190 104 185 126 183 156H217C215 126 210 104 204 92 202 88.5 198 88.5 196 92Z" />
            <ellipse className="corgi-cream" cx="200" cy="186" rx="55" ry="40" />

            <ellipse className="corgi-blush" cx="132" cy="186" rx="17" ry="10" />
            <ellipse className="corgi-blush" cx="268" cy="186" rx="17" ry="10" />

            <g id="corgi-eyes">
              {stateName === "happy" ? (
                <>
                  <path d="M150 152C156 142 170 142 176 152" stroke="#17223B" strokeWidth={5.5} strokeLinecap="round" fill="none" />
                  <path d="M224 152C230 142 244 142 250 152" stroke="#17223B" strokeWidth={5.5} strokeLinecap="round" fill="none" />
                </>
              ) : stateName === "sleep" ? (
                <>
                  <path d="M150 148C156 158 170 158 176 148" stroke="#17223B" strokeWidth={5.5} strokeLinecap="round" fill="none" />
                  <path d="M224 148C230 158 244 158 250 148" stroke="#17223B" strokeWidth={5.5} strokeLinecap="round" fill="none" />
                </>
              ) : (
                <>
                  <g transform={`translate(${gaze.ex.toFixed(2)},${gaze.ey.toFixed(2)})`}>
                    <ellipse className="corgi-ink" cx="163" cy="150" rx="12" ry="13" />
                    <circle fill="#FFFFFF" cx="158.5" cy="145" r="4.2" />
                  </g>
                  <g transform={`translate(${gaze.ex.toFixed(2)},${gaze.ey.toFixed(2)})`}>
                    <ellipse className="corgi-ink" cx="237" cy="150" rx="12" ry="13" />
                    <circle fill="#FFFFFF" cx="232.5" cy="145" r="4.2" />
                  </g>
                </>
              )}
            </g>

            <path className="corgi-ink" d="M200 165c8.5 0 15 4.5 15 10s-6.5 10-15 10-15-4.5-15-10 6.5-10 15-10z" />
            <ellipse fill="#FFFFFF" cx="193.5" cy="169" rx="2.8" ry="1.9" opacity=".48" />

            <path className="corgi-ink" d="M200 195c-11 0-19 5-17 12 2 8 9 12 17 12s15-4 17-12c2-7-6-12-17-12z" />
            <path className="corgi-pink" d="M200 209c6 0 10 2.5 10 6s-4 6-10 6-10-2.5-10-6 4-6 10-6z" />

            <rect className="corgi-blue" x="118" y="256" width="164" height="56" rx="9" />
            <rect id="corgi-glow" fill="#8FB4FF" x="126" y="264" width="148" height="40" rx="6" opacity=".25" />
            <g fill="#FFFFFF" opacity=".92">
              <ellipse cx="200" cy="290" rx="8" ry="6.5" />
              <ellipse cx="189" cy="279" rx="3.6" ry="4.6" />
              <ellipse cx="196" cy="275" rx="3.6" ry="4.8" />
              <ellipse cx="204" cy="275" rx="3.6" ry="4.8" />
              <ellipse cx="211" cy="279" rx="3.6" ry="4.6" />
            </g>
            <rect className="corgi-blueDeep" x="102" y="310" width="196" height="15" rx="7.5" />

            <g id="corgi-pawL">
              <rect className="corgi-cream" x="140" y="242" width="30" height="26" rx="13" />
              <g className="corgi-toe">
                <ellipse cx="147" cy="250" rx="2.6" ry="3.4" />
                <ellipse cx="155" cy="248" rx="2.6" ry="3.6" />
                <ellipse cx="163" cy="250" rx="2.6" ry="3.4" />
              </g>
            </g>
            <g id="corgi-pawR">
              <rect className="corgi-cream" x="230" y="242" width="30" height="26" rx="13" />
              <g className="corgi-toe">
                <ellipse cx="237" cy="250" rx="2.6" ry="3.4" />
                <ellipse cx="245" cy="248" rx="2.6" ry="3.6" />
                <ellipse cx="253" cy="250" rx="2.6" ry="3.4" />
              </g>
            </g>
          </g>

          <g fill="#F0899B">
            {hearts.map((h) => (
              <g key={h.id} transform={`${h.transform} scale(${h.scale})`}>
                <path d={HEART_D} className="corgi-heart" />
              </g>
            ))}
          </g>

          {stateName === "sleep" && (
            <g fill="#8A94A6" fontFamily="ui-monospace, Menlo, monospace" fontWeight={700}>
              <text className="corgi-z1" x="296" y="104" fontSize="17">z</text>
              <text className="corgi-z2" x="316" y="86" fontSize="21">z</text>
              <text className="corgi-z3" x="340" y="66" fontSize="25">z</text>
            </g>
          )}

          {barking && (
            <g>
              <g stroke="#F6A93B" strokeWidth={4} strokeLinecap="round">
                <path className="corgi-barkPop" d="M300 168l18-8" />
                <path className="corgi-barkPop" d="M302 186l20 2" />
                <path className="corgi-barkPop" d="M296 150l14-14" />
              </g>
              <text className="corgi-barkPop" x="330" y="182" fill="#F6A93B" fontFamily="ui-monospace, Menlo, monospace" fontWeight={700} fontSize="22">
                woof!
              </text>
            </g>
          )}
        </svg>

        <div className="flex items-center justify-center gap-2 mt-1">
          <button
            type="button"
            onClick={giveTreat}
            className="text-[11px] font-semibold text-gray-300 bg-[#0300145e] border border-[#7042f840] rounded-full px-2.5 py-1 hover:border-purple-500 hover:text-white transition-colors"
          >
            Give a treat
          </button>
          <button
            type="button"
            onClick={bark}
            className="text-[11px] font-semibold text-gray-300 bg-[#0300145e] border border-[#7042f840] rounded-full px-2.5 py-1 hover:border-purple-500 hover:text-white transition-colors"
          >
            Say woof
          </button>
        </div>
        <p className="text-[10px] text-gray-500 text-center mt-1.5 leading-relaxed">
          Move your cursor · click to bark · drag to pet · type anywhere
        </p>
      </div>
    </div>
  );
};

export default CorgiWidget;

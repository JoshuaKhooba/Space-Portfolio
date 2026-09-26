const DV = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

// ─── LANGUAGES ────────────────────────────────────────────────────────────────
export const Language_skills = [
  { skill_name: "Python",     Image: `${DV}/python/python-original.svg`,         width: 50, height: 50 },
  { skill_name: "JavaScript", Image: "/js.png",                                  width: 50, height: 50 },
  { skill_name: "TypeScript", Image: "/ts.png",                                  width: 50, height: 50 },
  { skill_name: "Java",       Image: `${DV}/java/java-original.svg`,             width: 50, height: 50 },
  { skill_name: "C",          Image: `${DV}/c/c-original.svg`,                   width: 50, height: 50 },
  { skill_name: "Swift",      Image: `${DV}/swift/swift-original.svg`,           width: 50, height: 50 },
  { skill_name: "Go",         Image: "/go.png",                                  width: 50, height: 50 },
  { skill_name: "HTML5",      Image: "/html.png",                                width: 50, height: 50 },
  { skill_name: "CSS3",       Image: "/css.png",                                 width: 50, height: 50 },
  { skill_name: "SQL",        Image: `${DV}/mysql/mysql-original.svg`,           width: 50, height: 50 },
];

// ─── FRONT-END ────────────────────────────────────────────────────────────────
export const Frontend_skill = [
  { skill_name: "React",         Image: "/react.png",                                       width: 55, height: 55 },
  { skill_name: "Next.js",       Image: "/next.png",                                        width: 55, height: 55 },
  { skill_name: "React Native",  Image: "/ReactNative .png",                                width: 55, height: 55 },
  { skill_name: "Tailwind CSS",  Image: "/tailwind.png",                                    width: 55, height: 55 },
  { skill_name: "Bootstrap",     Image: `${DV}/bootstrap/bootstrap-original.svg`,           width: 55, height: 55 },
  { skill_name: "Flutter",       Image: `${DV}/flutter/flutter-original.svg`,               width: 55, height: 55 },
  { skill_name: "Redux",         Image: "/redux.png",                                       width: 55, height: 55 },
  { skill_name: "Framer Motion", Image: "/framer.png",                                      width: 55, height: 55 },
  { skill_name: "Material UI",   Image: "/mui.png",                                         width: 55, height: 55 },
];

// ─── BACK-END ─────────────────────────────────────────────────────────────────
export const Backend_skill = [
  { skill_name: "Node.js",   Image: "/node-js.png",                               width: 55, height: 55 },
  { skill_name: "Express.js",Image: "/express.png",                               width: 55, height: 55 },
  { skill_name: "Django",    Image: `${DV}/django/django-plain.svg`,              width: 55, height: 55 },
  { skill_name: "Prisma",    Image: "/prisma.webp",                               width: 55, height: 55 },
  { skill_name: "GraphQL",   Image: "/graphql.png",                               width: 55, height: 55 },
  { skill_name: "Pandas",    Image: `${DV}/pandas/pandas-original.svg`,           width: 55, height: 55 },
];

// ─── DATABASES ────────────────────────────────────────────────────────────────
export const Database_skill = [
  { skill_name: "MySQL",      Image: "/mysql.png",                                    width: 55, height: 55 },
  { skill_name: "PostgreSQL", Image: "/postger.png",                                  width: 55, height: 55 },
  { skill_name: "MongoDB",    Image: "/mongodb.png",                                  width: 55, height: 55 },
  { skill_name: "Firebase",   Image: "/Firebase.png",                                 width: 55, height: 55 },
  { skill_name: "Oracle",     Image: `${DV}/oracle/oracle-original.svg`,              width: 55, height: 55 },
];

// ─── TOOLS ────────────────────────────────────────────────────────────────────
export const Tool_skill = [
  { skill_name: "AWS",        Image: `${DV}/amazonwebservices/amazonwebservices-original-wordmark.svg`, width: 60, height: 60 },
  { skill_name: "Docker",     Image: "/docker.webp",                                                    width: 55, height: 55 },
  { skill_name: "Kubernetes", Image: `${DV}/kubernetes/kubernetes-original.svg`,                        width: 55, height: 55 },
  { skill_name: "Git",        Image: `${DV}/git/git-original.svg`,                                      width: 55, height: 55 },
  { skill_name: "Figma",      Image: "/figma.png",                                                      width: 50, height: 50 },
  { skill_name: "Bash",       Image: `${DV}/bash/bash-original.svg`,                                    width: 55, height: 55 },
  { skill_name: "PowerShell", Image: `${DV}/powershell/powershell-original.svg`,                        width: 55, height: 55 },
  { skill_name: "Linux",      Image: `${DV}/linux/linux-original.svg`,                                  width: 55, height: 55 },
];

// ─── SOCIALS ─────────────────────────────────────────────────────────────────
export const Socials = [
  {
    name: "GitHub",
    src: "/github-si.svg",
    link: "https://github.com/JoshuaKhooba",
  },
  {
    name: "LinkedIn",
    src: "/linkedin.svg",
    link: "https://linkedin.com/in/joshua-khooba",
  },
  {
    name: "Instagram",
    src: "/instagram-si.svg",
    link: "https://instagram.com/luckystraight_777",
  },
  {
    name: "Discord",
    src: "/discord-si.svg",
    link: "https://discord.gg/LuckyStraight77",
  },
  {
    name: "Facebook",
    src: "/facebook-si.svg",
    link: "https://fb.com/joshuakhooba",
  },
];

// ─── WORK EXPERIENCE ─────────────────────────────────────────────────────────
export const Work_experience = [
  {
    id: 0,
    title: "AI Trainer",
    company: "LinkedIn",
    date: "Jul 2026 – Present",
    location: "Ocala, FL",
    description: [
      "Trained AI models by evaluating and annotating complex datasets, improving response quality, factual accuracy, and reasoning across large-scale AI infrastructure projects.",
      "Validated thousands of AI-generated responses using established quality guidelines, ensuring high standards of accuracy, consistency, and safety for production AI systems.",
      "Collaborated with cross-functional teams to refine annotation standards and improve model performance through actionable quality feedback.",
    ],
    icon: "🤖",
    color: "from-purple-500 to-cyan-500",
  },
  {
    id: 1,
    title: "IT Technician",
    company: "Asurion uBreakiFix",
    date: "Mar 2026 – Jun 2026",
    location: "Orlando, FL",
    description: [
      "Diagnosed and repaired 50+ devices/week via hardware replacements and software troubleshooting across iOS, Android, and Windows, achieving a 95%+ first-time fix rate.",
      "Delivered technical support to 30+ customers daily, driving ~20% increase in repeat business.",
      "Managed inventory of 200+ parts and devices, reducing repair delays by 25% and minimizing shortages.",
    ],
    icon: "🔧",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "VIP Operations Intern",
    company: "The Walt Disney Company",
    date: "Jan 2025 – Jan 2026",
    location: "Orlando, FL",
    description: [
      "Oversaw backend scheduling for 100+ VIP client itineraries per week, ensuring 98% on-time execution.",
      "Processed and maintained records for 1,000+ client bookings monthly with zero data-entry errors.",
      "Improved data accessibility for cross-departmental teams through consistent quality checks.",
    ],
    icon: "🏰",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Geek Squad Consultant",
    company: "Best Buy — Geek Squad",
    date: "Sep 2026 – Present",
    location: "Ocala, FL",
    description: [
      "Troubleshoot, configure, and set up computers, phones, and smart devices across Windows, macOS, iOS, and Android, expanding the store's technical support capacity and reducing customer wait times.",
      "Rehired after a prior 3.5-year tenure (Jun 2021 – Nov 2024), earning MVP recognition (Jul 2022) for consistently exceeding monthly targets.",
      "Provide in-depth diagnostics and repair coordination, ensuring high customer satisfaction across hardware and software issues.",
    ],
    icon: "🖥️",
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: 4,
    title: "Data Analysis Intern",
    company: "Orange County Government",
    date: "Aug 2022 – Jan 2023",
    location: "Orlando, FL",
    description: [
      "Utilized GIS and Maximo software to collect, organize, and visualize spatial and operational data.",
      "Performed API integrations and Python query calls to analyze 10,000+ records, reducing retrieval time by 30%.",
      "Accessed sensitive data under Public Security Clearance, ensuring strict federal data protection compliance.",
    ],
    icon: "🗺️",
    color: "from-green-500 to-teal-500",
  },
];

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
const GH_OG = "https://opengraph.githubassets.com/1/JoshuaKhooba";

export const Projects = [
  {
    title: "EcoVest",
    description:
      "AI-powered simulated trading platform that analyzes your stock portfolio and proposes clean-energy reallocations. Built with Gemini AI, Supabase, and Next.js for a hackathon spanning Bloomberg FinTech, Clean Energy, and Google Gemini API tracks.",
    image: `${GH_OG}/EcoVest`,
    link: "https://eco-vest-nine.vercel.app",
    tech: ["Next.js", "TypeScript", "Supabase", "Gemini AI", "Tailwind CSS"],
    icon: "🌱",
  },
  {
    title: "Jarvis AI",
    description:
      "Real-time voice AI assistant with a live 3D geospatial command center. Powered by the Gemini Live API for native audio streaming, featuring a holographic PyQt6 HUD, persistent memory, 30+ integrated tools, and a voice-controlled 3D globe (God's Eye View) for live aircraft and satellite tracking.",
    image: `${GH_OG}/JarvisAI`,
    link: "https://github.com/JoshuaKhooba/JarvisAI",
    tech: ["Python", "Gemini AI", "PyQt6", "Node.js", "Cesium"],
    icon: "🤖",
  },
  {
    title: "Three-Tier Web App",
    description:
      "Enterprise-grade 3-tier architecture separating presentation, logic, and data layers — demonstrating scalable full-stack design patterns.",
    image: `${GH_OG}/three-tier-web-app`,
    link: "https://github.com/JoshuaKhooba/three-tier-web-app",
    tech: ["Java", "MySQL", "HTML/CSS"],
    icon: "🌐",
  },
  {
    title: "Train Yard Simulator",
    description:
      "Multithreaded Java simulation of a train yard using concurrency, thread synchronization, and real-time scheduling to prevent deadlocks.",
    image: `${GH_OG}/train-yard-multithreaded-simulator`,
    link: "https://github.com/JoshuaKhooba/train-yard-multithreaded-simulator",
    tech: ["Java", "Concurrency"],
    icon: "🚂",
  },
  {
    title: "Disney VIP App",
    description:
      "SwiftUI-based iOS app using MVVM architecture to manage user authentication, reservations, events, and check-ins across 15+ views and models.",
    image: `${GH_OG}/Disney-VIP-App`,
    link: "https://github.com/JoshuaKhooba/Disney-VIP-App",
    tech: ["Swift", "SwiftUI", "Supabase"],
    icon: "🏰",
  },
  {
    title: "Turtle Coin",
    description:
      "Simulated cryptocurrency blockchain demonstrating block creation, hashing, proof-of-work, and transaction validation — a hands-on blockchain security showcase.",
    image: `${GH_OG}/Turtle-Coin`,
    link: "https://github.com/JoshuaKhooba/Turtle-Coin",
    tech: ["Python", "JavaScript", "TypeScript"],
    icon: "🪙",
  },
];

// ─── ABOUT ────────────────────────────────────────────────────────────────────
export const Hobbies = [
  { emoji: "🌱", label: "Gardening" },
  { emoji: "🎾", label: "Tennis" },
  { emoji: "🏋️", label: "Gym" },
  { emoji: "🚗", label: "Sports Cars" },
  { emoji: "🍥", label: "Anime" },
  { emoji: "🐄", label: "Cow Farmer" },
  { emoji: "🃏", label: "TCG" },
  { emoji: "🎲", label: "Board Games" },
  { emoji: "🏰", label: "Theme Parks" },
];

export const Fun_facts = [
  "🎤 Would have been a stand-up comedian if I didn't go to college",
  "🌶️ Spicy food is always my favourite",
  "🏴‍☠️ Played in a Regional One Piece TCG Tournament — Top 16",
  "⚡ Played in a Regional Pokémon Tournament — Top 32",
  "🎾 Member of the Tennis Team at UCF",
  "🌎 Traveled to most countries in North & South America",
];

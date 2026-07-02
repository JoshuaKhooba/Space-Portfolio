# 🚀 Space Portfolio — Joshua Khooba

A space-themed personal portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Features an animated starfield background, scroll-driven animations, and a fully responsive layout.

**Live site:** _add your deployed URL here_

---

## ✨ Features

- Animated 3D starfield background (Three.js / React Three Fiber)
- Smooth scroll-triggered entrance animations (Framer Motion)
- Animated role badge that cycles through your job titles
- Glow hover effects on all cards and buttons
- Responsive layout — mobile, tablet, and desktop
- Sections: Hero · About · Skills · Education · Experience · Encryption showcase · Projects · Contact
- Resume download button
- Footer with social links and quick navigation

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| 3D / Stars | Three.js + React Three Fiber |
| Icons | React Icons, Heroicons |
| Deployment | Vercel (recommended) |

---

## 📁 Project Structure

```
Space-Portfolio/
├── app/
│   ├── page.tsx          # Main page — controls section order
│   └── layout.tsx        # Root layout (fonts, metadata)
├── components/
│   ├── main/             # Full-page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Encryption.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── StarBackground.tsx
│   └── sub/              # Sub-components used inside sections
│       └── HeroContent.tsx
├── constants/
│   └── index.ts          # ← ALL site content lives here
├── public/               # Images, SVGs, video assets, resume PDF
└── README.md
```

---

## 🚀 Local Development

**Prerequisites:** Node.js 18+ and npm (or yarn/pnpm)

```bash
# 1. Clone the repo
git clone https://github.com/JoshuaKhooba/Space-Portfolio.git
cd Space-Portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ✏️ Updating Your Content

Almost all site content is managed in one file: **`constants/index.ts`**

### Skills
Find the arrays `Language_skills`, `Frontend_skill`, `Backend_skill`, `Database_skill`, `Tool_skill`. Add or remove objects:
```ts
{ skill_name: "Rust", Image: "/rust.png", width: 55, height: 55 }
```
Drop the icon image into `/public/`.

### Social Links
Find the `Socials` array in `constants/index.ts`. Update the `link` values to your profiles.

### Projects
Find the projects array in `constants/index.ts` (or in `components/main/Projects.tsx`). Each project has a `title`, `description`, `image`, `link`, and `tags`.

### Experience / Work History
Edit `components/main/Experience.tsx` directly — each job entry is an object with company, role, date range, and bullet points.

### Education
Edit `components/main/Education.tsx` directly.

### About Me
Edit the bio text in `components/main/About.tsx`.

### Hero Section
Edit `components/sub/HeroContent.tsx`:
- **Name / title** — update the JSX at the top
- **Animated roles** — update the `ROLES` array
- **Stats chips** — update the `STATS` array
- **Description** — update the paragraph text

### Resume
Replace `/public/Joshua_Khooba_Resume.pdf` with your updated PDF, keeping the same filename. Or update the `href` in `HeroContent.tsx` and `Contact.tsx` to match your new filename.

### Contact Info
Edit `components/main/Contact.tsx` — update the email address, location, and any other contact details in the "Contact Info" card.

---

## 🌐 Deploying to Vercel

Vercel is the easiest way to host a Next.js site for free.

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click **"Add New Project"** → select your `Space-Portfolio` repo
4. Leave all settings as default — Vercel auto-detects Next.js
5. Click **Deploy**

Your site will be live at `https://your-project.vercel.app` in ~2 minutes.

### Updating after deploy
```bash
# Make your changes locally, then:
git add .
git commit -m "update content"
git push
```
Vercel automatically redeploys on every push to `main`.

### Custom domain
In your Vercel project → **Settings → Domains**, add your domain and follow the DNS instructions.

---

## 🔧 Customizing the Theme

The purple/cyan color scheme is defined with Tailwind utility classes. Key values:
- **Primary purple:** `#7042f8` / `purple-600`
- **Accent cyan:** `cyan-500`
- **Card background:** `#0300145e`
- **Page background:** `#030014`

To change the gradient used on the name, buttons, and logo — search for `from-purple-600 to-cyan-500` across the codebase and update both values.

---

## 📄 License

This project has an MIT License.

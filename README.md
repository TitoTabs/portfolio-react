# 🌐 Jefferson Tabucol — Portfolio

This is a **Next.js** portfolio showcasing my work as a **Frontend Developer**.  
It includes animated sections, dark/light mode, project filtering, dynamic project pages, and a clean responsive UI.

Built with:

- **Next.js 14 (App Router)**
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion**
- **Zustand**
- **next/image**
- **Vercel Deployment**

---

## 🚀 Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Then open:

👉 http://localhost:3000

You can start editing the project by modifying:

```bash
app/page.tsx
app/projects/[slug]/page.tsx
components/
lib/projects.ts
```
The app automatically reloads as you save your changes.

## ✨ Features
  🌗 Dark & Light mode (Tailwind v4 custom variant)

  🎞️ Smooth animations with Framer Motion
  
  📁 Project filtering via Zustand store
  
  🧭 Dynamic project pages powered by /projects/[slug]
  
  📱 Fully responsive layout
  
  🎨 Clean and minimal UI
  
  🧩 Easy-to-edit project data (lib/projects.ts)
  
  ⚡ Fast and SEO-friendly

## 📁 Project Structure
```bash
src/
├─ app/
│  ├─ layout.tsx
│  ├─ page.tsx
│  └─ projects/[slug]/page.tsx
│
├─ components/
│
├─ lib/
│  └─ projects.ts
│
├─ store/
│  └─ uiStore.ts
│
└─ assets/
   └─ jefferson.png
```

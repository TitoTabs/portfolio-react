"use client";

import Link from "next/link";
import Button from "../ui/Button";

export default function HeroSection() {
  return (
    <section className="container flex flex-col gap-8 md:flex-row md:items-center">
      <div className="flex-1 space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
          Frontend Developer
        </p>
        <h1 className="text-3xl font-semibold text-slate-900 dark:text-slate-50 sm:text-4xl md:text-5xl">
          I build clean, responsive interfaces with{" "}
          <span className="text-sky-600 dark:text-sky-400">React</span>,{" "}
          <span className="text-sky-600 dark:text-sky-400">Next.js</span>, and
          TypeScript.
        </h1>

        <p className="max-w-xl text-sm text-slate-400">
          Focused on dashboards, internal tools, and component-driven UI with a
          strong attention to UX, state management, and maintainable code.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link href="/projects">
            <Button>View projects</Button>
          </Link>
        </div>
      </div>

      <div className="flex-1">
        <div className="mx-auto max-w-xs rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-5 shadow-xl">
          <p className="mb-3 text-xs text-slate-400">Currently working with</p>
          <div className="flex flex-wrap gap-2 text-[11px]">
            {["Next.js", "React", "TypeScript", "Tailwind", "Zustand"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-700 bg-slate-900 px-2.5 py-1 text-slate-200"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

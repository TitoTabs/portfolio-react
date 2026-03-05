"use client";

import Link from "next/link";
import { projects } from "@/lib/projects";
import { useUIStore } from "@/store/uiStore";

const techFilters = ["all", "Vue 3", "Next.js", "React", "TypeScript"];

export default function ProjectsSection() {
  const { activeProjectFilter, setProjectFilter } = useUIStore();

  const filtered = projects.filter((project) =>
    activeProjectFilter === "all"
      ? true
      : project.tech.includes(activeProjectFilter),
  );

  return (
    <section className="container mt-16 space-y-6" id="projects">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
            Selected projects
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            A mix of dashboards, internal tools, and automation work.
          </p>
        </div>

        <div className="flex rounded-full border border-slate-300 bg-white p-1 text-xs shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:shadow-none">
          {techFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setProjectFilter(filter)}
              className={`rounded-full px-3 py-1 capitalize transition-colors ${
                activeProjectFilter === filter
                  ? "bg-sky-600 text-white dark:bg-sky-500"
                  : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {filtered.map((project) => (
          <article
            key={project.slug}
            className="group flex flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-colors hover:border-sky-500 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950/70 dark:hover:bg-slate-900/80"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                {project.title}
              </h3>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">
                {project.year}
              </span>
            </div>

            <p className="mt-2 line-clamp-3 text-xs text-slate-600 dark:text-slate-400">
              {project.description}
            </p>

            {project.highlight && (
              <p className="mt-2 text-[11px] text-sky-600 dark:text-sky-400/90">
                {project.highlight}
              </p>
            )}

            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] text-slate-700 dark:bg-slate-900 dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-4 flex gap-3 text-xs">
              <Link
                href={`/projects/${project.slug}`}
                className="text-sky-700 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300"
              >
                View details
              </Link>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-sky-400"
                >
                  GitHub
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

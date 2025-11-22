import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailsPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return notFound();
  }

  return (
    <div className="container max-w-3xl space-y-4">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-sky-700 dark:text-sky-400">
          Project
        </p>
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-50">
          {project.title}
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          {project.year}
        </p>
      </div>

      <p className="text-sm text-slate-700 dark:text-slate-300">
        {project.description}
      </p>

      {project.highlight && (
        <p className="text-sm text-sky-700 dark:text-sky-400/90">
          {project.highlight}
        </p>
      )}

      <div>
        <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
          Tech stack
        </h2>
        <div className="mt-2 flex flex-wrap gap-1.5 text-[11px]">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-slate-100 px-2 py-0.5 text-slate-700 dark:bg-slate-900 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {(project.github || project.link) && (
        <div className="flex gap-4 text-sm">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              className="text-sky-700 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300"
            >
              Live demo
            </a>
          )}
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
      )}
    </div>
  );
}

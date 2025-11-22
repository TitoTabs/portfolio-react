export default function SkillsSection() {
  const groups = [
    {
      title: "Frontend",
      skills: [
        "React",
        "Next.js (App Router)",
        "TypeScript",
        "Tailwind CSS",
        "Vue 3",
      ],
    },
    {
      title: "State & Data",
      skills: ["Zustand", "Pinia", "REST APIs", "Form handling", "Chart.js"],
    },
    {
      title: "Tooling & Others",
      skills: ["Git", "Chrome Extensions", "Laravel (backend APIs)", "Vite"],
    },
  ];

  return (
    <section className="container mt-16 space-y-6" id="skills">
      <div>
        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
          Skills
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Strong focus on real-world frontend problems: state, performance, and
          UX.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {groups.map((group) => (
          <div
            key={group.title}
            className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950/70"
          >
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              {group.title}
            </h3>
            <ul className="mt-3 space-y-1 text-xs text-slate-700 dark:text-slate-300">
              {group.skills.map((skill) => (
                <li key={skill}>• {skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

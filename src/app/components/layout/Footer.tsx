export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/90">
      <div className="container flex flex-col gap-2 py-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} Jefferson Tabucol. All rights reserved.
        </p>
        <p className="text-[11px]">
          Built with Next.js, TypeScript, Tailwind CSS, and Zustand.
        </p>
      </div>
    </footer>
  );
}

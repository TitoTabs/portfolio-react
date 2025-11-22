"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUIStore } from "@/store/uiStore";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const {
    isMobileMenuOpen,
    toggleMobileMenu,
    toggleTheme,
    theme,
    closeMobileMenu,
  } = useUIStore();

  return (
    <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <nav className="container flex items-center justify-between py-3">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={closeMobileMenu}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500/10 text-sm font-semibold text-sky-400">
            JT
          </span>
          <span className="text-sm font-medium text-slate-100">
            Jefferson Tabucol
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition hover:text-sky-400 ${
                pathname === link.href ? "text-sky-400" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}

          <button
            onClick={toggleTheme}
            className="ml-2 rounded-full border border-slate-300 bg-white px-3 py-1 text-xs text-slate-800 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 hover:border-sky-500 hover:text-sky-500 dark:hover:text-sky-400"
          >
            {theme === "dark" ? "Light mode" : "Dark mode"}
          </button>
        </div>

        {/* Mobile buttons */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
          <button
            onClick={toggleMobileMenu}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700"
          >
            <span className="sr-only">Toggle menu</span>
            <div className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-slate-200" />
              <span className="block h-0.5 w-5 bg-slate-200" />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile nav */}
      {isMobileMenuOpen && (
        <div className="border-t border-slate-800 bg-slate-950 md:hidden">
          <div className="container flex flex-col py-3 text-sm text-slate-200">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className={`py-1.5 ${
                  pathname === link.href ? "text-sky-400" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

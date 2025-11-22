import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ThemeProvider from "./ThemeProvider";

export const metadata: Metadata = {
  title: "Jefferson Tabucol | Frontend Developer",
  description:
    "Portfolio of Jefferson Tabucol, a frontend developer focused on React, Vue 3, Next.js, Tailwind and TypeScript.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50">
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 pb-16 pt-10">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

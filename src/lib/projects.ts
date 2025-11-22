// src/lib/projects.ts
export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  role: string;
  year: string;
  highlight?: string;
  link?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    slug: "tools-library-system",
    title: "Tools Library System",
    description:
      "A full-stack internal system for tool borrowing, delivery scheduling, approvals, and returns. Includes dynamic tables, file uploads, email notifications, and real-time status tracking.",
    tech: [
      "Vue 3",
      "Pinia",
      "Vite",
      "Laravel",
      "MySQL",
      "Tailwind",
      "Typescript",
    ],
    role: "Fullstack Developer",
    year: "2025",
    highlight:
      "Built both frontend (Vue 3) and backend (Laravel) modules, created scheduling flows, and automated delivery/return tracking.",
  },

  {
    slug: "widget-automation-extension",
    title: "Widget App – Automation Chrome Extension",
    description:
      "A browser automation extension that integrates with legacy Angular systems. Injects scripts to automate data entry, sync with backend, and reduce manual workload.",
    tech: ["Vue 3", "Vuetify", "JavaScript", "Chrome Extension", "Laravel"],
    role: "Developer",
    year: "2025",
    highlight:
      "Created content scripts, background messaging, and live form injection logic for workflow automation.",
  },

  {
    slug: "booking-event-app",
    title: "Booking Event App",
    description:
      "A complete event booking and ticketing system with membership pricing, ticket allocation, and email confirmations.",
    tech: [
      "Vue 3",
      "Pinia",
      "Vite",
      "Laravel",
      "Tailwind",
      "Typescript",
      "Axios",
      "REST API",
    ],
    role: "Fullstack Developer",
    year: "2025",
    highlight:
      "Implemented booking flows, ticket management, and automated email notifications with clean UI patterns.",
  },
  {
    slug: "prosper-together-dashboard",
    title: "Prosper Together – Admin Dashboard Modules",
    description:
      "Developed new modules and redesigned admin systems, converting Figma designs into responsive, component-based UI with state management.",
    tech: ["React.js", "Next.js", "TypeScript", "Zustand", "Tailwind", "Axios"],
    role: "Frontend Developer",
    year: "2024–2025",
    highlight:
      "Implemented responsive modules, API integrations, and modernized UI/UX for a large-scale dashboard.",
  },
  {
    slug: "myshed3d-admin-dashboard",
    title: "MyShed3d Admin Dashboard Modules",
    description:
      "Enhanced and expanded admin dashboard modules used for ordering processes. Built reusable components, API flows, and user experience enhancements.",
    tech: [
      "React.js",
      "Next.js",
      "Zustand",
      "TypeScript",
      "Tailwind",
      "Swagger",
    ],
    role: "Frontend Developer",
    year: "2021–2024",
    highlight:
      "Handled both development and version control, ensuring smooth module functionality and clear API documentation.",
  },
  {
    slug: "crescode-scheduler-system",
    title: "Scheduler System (Laravel + Vue.js)",
    description:
      "Developed key modules for a scheduler system, including dashboards, analytics, and backend integrations.",
    tech: ["Laravel", "Vue.js", "Vuex", "Git", "Swagger", "Tailwind"],
    role: "Frontend Developer",
    year: "2020",
    highlight:
      "Built scheduler features, collaborated on architecture, and ensured clear API documentation.",
  },
  {
    slug: "segworks-hospital-system",
    title: "Hospital Information System",
    description:
      "Maintained and improved a hospital information system, focusing on reporting, PDF generation, and module enhancement.",
    tech: ["PHP", "Symfony", "MySQL", "Bootstrap", "Jira"],
    role: "Fullstack Developer",
    year: "2019–2020",
    highlight:
      "Fixed critical bugs, optimized modules, implemented client features, and delivered stable reporting tools.",
  },
];

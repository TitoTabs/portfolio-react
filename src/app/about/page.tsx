"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import profilePhoto from "@/assets/jefferson.png";

const container: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.12,
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function AboutPage() {
  return (
    <motion.div
      className="container py-10 space-y-12"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Top section */}
      <motion.div
        className="flex flex-col md:flex-row gap-10 items-center"
        variants={item}
      >
        <motion.div
          className="w-40 h-40 relative rounded-2xl overflow-hidden shadow-xl ring-2 ring-slate-300 dark:ring-slate-800 bg-slate-100 dark:bg-slate-900"
          variants={card}
          whileHover={{ scale: 1.03, rotate: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 16 }}
        >
          <Image
            src={profilePhoto}
            alt="Jefferson Tabucol"
            fill
            className="object-cover"
          />
        </motion.div>

        <div className="flex-1 space-y-4">
          <motion.h1
            className="text-3xl font-bold text-slate-900 dark:text-slate-50"
            variants={item}
          >
            Hi, I’m Jefferson Tabucol 👋
          </motion.h1>

          <motion.p
            className="text-sm leading-relaxed text-slate-700 dark:text-slate-300"
            variants={item}
          >
            I’m a{" "}
            <span className="text-sky-700 dark:text-sky-400 font-medium">
              Frontend Developer
            </span>{" "}
            with strong experience in building full-stack applications, admin
            dashboards, internal tools, automation scripts, and browser
            extensions. I specialize in modern frameworks like React, Next.js,
            and Vue 3 with backends built on Laravel and RESTful APIs.
          </motion.p>

          <motion.p
            className="text-sm leading-relaxed text-slate-700 dark:text-slate-300"
            variants={item}
          >
            I enjoy transforming complex workflows into clean and intuitive UI
            experiences, focusing on code quality, scalability, and seamless
            user interaction. Whether working with a team or independently, I
            ship production-ready features that are maintainable and easy to
            extend.
          </motion.p>

          <motion.p
            className="text-xs md:text-sm leading-relaxed text-slate-600 dark:text-slate-400"
            variants={item}
          >
            I’m based in Davao del Norte, Philippines and graduated with a
            Bachelor of Science in Information Technology. Over the past few
            years I’ve worked with multi-module dashboards, schedulers, and
            hospital systems used in real production environments.
          </motion.p>
        </div>
      </motion.div>

      {/* Skills */}
      <motion.section variants={item}>
        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-4">
          Skills &amp; Tools
        </h2>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-slate-700 dark:text-slate-300"
          variants={container}
        >
          <motion.ul className="space-y-1" variants={item}>
            <li>• React.js</li>
            <li>• Next.js (App Router)</li>
            <li>• Vue 3</li>
            <li>• Zustand</li>
            <li>• Pinia</li>
          </motion.ul>
          <motion.ul className="space-y-1" variants={item}>
            <li>• Laravel / PHP</li>
            <li>• Node.js</li>
            <li>• RESTful APIs</li>
            <li>• MySQL</li>
            <li>• Symfony</li>
          </motion.ul>
          <motion.ul className="space-y-1" variants={item}>
            <li>• Tailwind CSS</li>
            <li>• SASS / SCSS</li>
            <li>• Git / Version Control</li>
            <li>• Swagger / Postman</li>
            <li>• Dashboard &amp; admin UI</li>
          </motion.ul>
        </motion.div>
      </motion.section>

      {/* Experience summary */}
      <motion.section variants={item}>
        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-4">
          Experience Overview
        </h2>

        <div className="space-y-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <motion.p variants={item}>
            I’ve worked as a Frontend and Fullstack developer, building
            large-scale dashboards, scheduling systems, and internal tools used
            in production environments. My focus is on creating reliable UI
            flows, reusable components, and smooth integrations with backend
            services.
          </motion.p>

          <motion.p variants={item}>
            Across different roles, I’ve led UI implementations, managed
            migrations to modern stacks, collaborated with designers and backend
            engineers, and maintained clean Git workflows. I value readable
            code, helpful documentation, and shipping features that actually
            solve problems for users.
          </motion.p>

          <motion.p variants={item}>
            Recently, I’ve been working with React, Next.js, TypeScript, and
            Zustand at Prosper Together, translating Figma designs into modular
            admin dashboards and integrating with REST APIs. Before that, I
            focused on React/Next.js dashboards at MyShed3d, scheduler and
            analytics modules using Laravel and Vue at CresCode, and hospital
            information systems as a fullstack developer at Segworks.
          </motion.p>
        </div>

        {/* Mini timeline */}
        <motion.div
          className="mt-6 grid gap-4 md:grid-cols-2 text-xs md:text-sm"
          variants={container}
        >
          <motion.div
            className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/40 dark:shadow-none"
            variants={card}
          >
            <p className="text-sky-700 dark:text-sky-400 font-semibold">
              Prosper Together · Frontend Developer
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-xs">
              2024 – 2025
            </p>
            <p className="text-slate-700 dark:text-slate-300 mt-1">
              Built new modules for React/Next.js dashboards using TypeScript,
              Tailwind, Axios, and Zustand.
            </p>
          </motion.div>

          <motion.div
            className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/40 dark:shadow-none"
            variants={card}
          >
            <p className="text-sky-700 dark:text-sky-400 font-semibold">
              MyShed3d · Frontend Developer
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-xs">
              2021 – 2024
            </p>
            <p className="text-slate-700 dark:text-slate-300 mt-1">
              Enhanced admin modules, implemented new features, and handled
              version control and API documentation.
            </p>
          </motion.div>

          <motion.div
            className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/40 dark:shadow-none"
            variants={card}
          >
            <p className="text-sky-700 dark:text-sky-400 font-semibold">
              CresCode · Frontend Developer
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-xs">2020</p>
            <p className="text-slate-700 dark:text-slate-300 mt-1">
              Created scheduler modules with Laravel and Vue, plus dashboards
              and analytics views.
            </p>
          </motion.div>

          <motion.div
            className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/40 dark:shadow-none"
            variants={card}
          >
            <p className="text-sky-700 dark:text-sky-400 font-semibold">
              Segworks · Fullstack Developer
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-xs">
              2019 – 2020
            </p>
            <p className="text-slate-700 dark:text-slate-300 mt-1">
              Maintained and improved a hospital information system using PHP,
              Symfony, MySQL, and Bootstrap.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Projects highlight */}
      <motion.section variants={item}>
        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-4">
          Highlighted Projects
        </h2>

        <div className="space-y-6">
          <motion.div
            className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/40 dark:shadow-none"
            variants={card}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-sky-700 dark:text-sky-400">
              Tools Library System (Vue 3 + Laravel)
            </h3>
            <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">
              A full-stack internal system for managing tool borrowing, delivery
              scheduling, approvals, and returns. I built both front-end (Vue 3,
              Pinia, Vite) and backend (Laravel), including dynamic tables,
              validations, file uploads, status tracking, and email
              notifications.
            </p>
          </motion.div>

          <motion.div
            className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/40 dark:shadow-none"
            variants={card}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-sky-700 dark:text-sky-400">
              Widget App – Chrome Extension (Vue 3 + Laravel)
            </h3>
            <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">
              A browser automation extension that integrates with legacy
              Angular-based systems. I implemented content scripts, background
              messaging, and data injection logic while syncing data to a
              Laravel backend, dramatically reducing manual input and user
              errors.
            </p>
          </motion.div>

          <motion.div
            className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/40 dark:shadow-none"
            variants={card}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-sky-700 dark:text-sky-400">
              Booking Event App (Vue 3 + Laravel)
            </h3>
            <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">
              An event booking and ticket management platform with event
              listings, membership pricing, booking flows, and email
              confirmations. I focused on building a clean UI while coordinating
              closely with the Laravel backend.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Final note */}
      <motion.section className="pt-4" variants={item}>
        <p className="text-sm text-slate-500 dark:text-slate-400 italic text-center">
          “I build practical, real-world interfaces that solve real problems.”
        </p>
      </motion.section>
    </motion.div>
  );
}

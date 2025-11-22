"use client";

import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

export default function Button({
  variant = "primary",
  className,
  ...rest
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-lg text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";
  const variants = {
    primary:
      "bg-sky-500 text-white hover:bg-sky-400 px-4 py-2 shadow-sm shadow-sky-500/30",
    ghost:
      "border border-slate-700 text-slate-100 hover:border-sky-500 hover:text-sky-400 px-4 py-2",
  };

  return (
    <button className={clsx(base, variants[variant], className)} {...rest} />
  );
}

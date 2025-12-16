"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light" | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check saved preference or system preference
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = (saved as "dark" | "light") || (prefersDark ? "dark" : "light");

    setTheme(initial);
    setMounted(true);

    // Apply theme immediately
    const root = document.documentElement;
    const body = document.body;
    if (initial === "dark") {
      root.classList.add("dark");
      body.classList.add("dark");
    } else {
      root.classList.remove("dark");
      body.classList.remove("dark");
    }
    root.dataset.theme = initial;
    body.dataset.theme = initial;
  }, []);

  const toggle = () => {
    if (!theme) return;
    
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);

    const root = document.documentElement;
    const body = document.body;
    if (next === "dark") {
      root.classList.add("dark");
      body.classList.add("dark");
    } else {
      root.classList.remove("dark");
      body.classList.remove("dark");
    }
    root.dataset.theme = next;
    body.dataset.theme = next;
  };

  if (!mounted || !theme) return null;

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="flex items-center gap-2 px-3 py-2 rounded-full border transition-colors dark:border-slate-700 border-slate-300 dark:text-slate-300 text-slate-700 dark:hover:text-white hover:text-slate-900 dark:hover:border-slate-600 hover:border-slate-400"
    >
      {theme === "dark" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
      <span className="text-sm hidden sm:inline">{theme === "dark" ? "Dark" : "Light"}</span>
    </button>
  );
}

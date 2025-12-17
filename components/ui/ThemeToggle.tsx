"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light" | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 1. Vérifier s'il y a une préférence sauvegardée
    const saved = localStorage.getItem("theme");
    
    // 2. LOGIQUE CLÉ : Si rien n'est sauvegardé, on force "dark" par défaut
    // (On ignore la préférence système pour imposer ton style sombre)
    const initial = (saved as "dark" | "light") || "dark";

    setTheme(initial);
    setMounted(true);

    // Appliquer le thème immédiatement au HTML
    const root = document.documentElement;
    if (initial === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, []);

  const toggle = () => {
    if (!theme) return;
    
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);

    const root = document.documentElement;
    if (next === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  };

  if (!mounted || !theme) return null;

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="p-2 rounded-full transition-all duration-300 
      bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700
      dark:bg-slate-800 dark:hover:bg-slate-700 dark:border-slate-700 dark:text-slate-300"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-indigo-600" />
      )}
    </button>
  );
}
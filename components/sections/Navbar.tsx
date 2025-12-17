"use client";

import ThemeToggle from "../ui/ThemeToggle";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2, Palette, TrendingUp } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Why Choose Me", href: "#why" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
  { name: "Follow Me", href: "#social" },
  { name: "Footer", href: "#footer" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("#home");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((i) => i.href);
      let current = "#home";
      for (const href of sections) {
        const el = document.querySelector(href) as HTMLElement | null;
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const threshold = Math.min(200, el.offsetHeight / 3);
        if (rect.top <= threshold && rect.bottom >= threshold) {
          current = href;
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll as EventListener);
  }, []);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    setActive(href);

    if (pathname !== "/") {
      router.push(`/${href}`);
      return;
    }

    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 border-slate-200 dark:bg-slate-950/95 dark:border-slate-800 backdrop-blur-md shadow-lg border-b"
          : "bg-transparent"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex mr-3 items-center gap-3 left-0 cursor-pointer"
            onClick={() => scrollToSection("#home")}
          >
            <span className="text-lg md:text-xl font-bold font-montserrat bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Software
            </span>
            <div className="flex items-center gap-1">
              <Code2 className="w-6 h-6 text-indigo-500" />
              <Palette className="w-5 h-5 text-purple-500" />
              <TrendingUp className="w-5 h-5 text-pink-500" />
            </div>
            <span className="text-lg md:text-xl font-bold font-montserrat bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Engineer
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 items-center ml-auto mr-2 md:mr-4 w-full justify-end">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => scrollToSection(item.href)}
                className={`transition-colors relative group font-medium ${
                  active === item.href
                    ? "text-indigo-600 dark:text-white"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-linear-to-r from-indigo-500 to-pink-500 transition-all duration-300 ${
                    active === item.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </motion.button>
            ))}

            {/* Toggle Button ADDED HERE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <ThemeToggle />
            </motion.div>

            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => scrollToSection("#contact")}
              className="px-6 py-2 bg-linear-to-r from-indigo-500 to-pink-500 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300"
            >
              Let&apos;s Talk
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden ml-auto">
             {/* Toggle Button for Mobile */}
            <ThemeToggle />
            
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 dark:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/98 dark:bg-slate-950/98 backdrop-blur-md border-t border-slate-200 dark:border-slate-800"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left py-2 transition-colors ${
                    active === item.href
                      ? "text-indigo-600 dark:text-white font-bold"
                      : "text-slate-700 dark:text-slate-300"
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}
              
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => scrollToSection("#contact")}
                className="w-full px-6 py-3 bg-linear-to-r from-indigo-500 to-pink-500 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300"
              >
                Let&apos;s Talk
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
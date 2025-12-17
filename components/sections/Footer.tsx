"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Code2, Palette, TrendingUp, Heart, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Frontend Development",
    "Backend Development",
    "Mobile Apps",
    "UI/UX Design",
    "Brand Identity",
    "Digital Marketing",
    "Analytics",
  ];

  return (
    <footer 
      id="footer" 
      className="relative bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 text-center md:text-left">
          {/* Brand */}
          <div className="lg:col-span-2 md:text-left text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <div className="flex items-center gap-2 mb-4 md:justify-start justify-center">
                <span className="text-xl font-bold font-montserrat bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Ziyad OUAMNA
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 max-w-md mb-4 text-justify md:text-left text-sm leading-relaxed">
                I'm a young Moroccan professional passionate about web development, 
                graphic design, and digital marketing. 
                Holding a two-year technical degree (BTS) in multimedia and web design, 
                I'm currently pursuing a bachelor's degree in software engineering. 
                I combine creativity and technical skills to create modern websites, 
                comprehensive visual identities, and customized digital solutions.
                <br /><br />
                Also active in trading and digital entrepreneurship, I work on various personal projects, including web platforms, advertising campaigns, and freelance services. Known for my motivation and versatility, I always strive to ensure quality and innovation in every project.    
              </p>
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-500 md:justify-start justify-center">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-pink-500 fill-current" />
                <span>by Ziyad OUAMNA</span>
              </div>
            </motion.div>
          </div>

          {/* Quick Links & Services - Combined on Mobile */}
          <div className="md:col-span-2 lg:col-span-2 flex flex-row gap-8 md:gap-4 justify-center md:justify-start">
            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex-1 text-center md:text-left"
            >
              <h3 className="text-lg font-bold mb-4 text-slate-900 dark:text-white">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => {
                        if (pathname !== "/") {
                          router.push(`/${link.href}`);
                          return;
                        }
                        const element = document.querySelector(link.href);
                        element?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex-1 text-center md:text-left"
            >
              <h3 className="text-lg font-bold mb-4 text-slate-900 dark:text-white">Services</h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service} className="text-slate-600 dark:text-slate-400 text-sm">
                    {service}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left"
        >
          <p className="text-slate-500 dark:text-slate-500 text-sm">
            © {currentYear} Ziyad OUAMNA. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500 dark:text-slate-500 md:flex-row flex-col gap-3 md:gap-6">
            <a href="#" className="hover:text-indigo-600 dark:hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-indigo-600 dark:hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            className="fixed bottom-8 right-8 w-12 h-12 bg-linear-to-r from-indigo-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 z-40"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6 text-white" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
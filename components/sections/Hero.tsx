"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { getAssetPath } from "@/lib/pathHelper";

const roles = [
  "Full Stack Developer",
  "Graphic Designer",
  "Digital Marketer",
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-12 bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 -left-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-pink-500/10 dark:bg-pink-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid md:grid-cols-[400px_1fr] gap-10 items-center">
          
          {/* Left: Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block relative h-full min-h-130 group"
          >
            <div
              className="absolute -inset-6 bg-linear-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-3xl opacity-80 -z-10 group-hover:opacity-100 transition-opacity duration-500"
              aria-hidden
            />
            <div className="absolute -left-12 w-full rounded-xl shadow-2xl shadow-indigo-500/10 dark:shadow-indigo-900/25 overflow-hidden border border-slate-200 dark:border-slate-800/80 bg-white/30 dark:bg-transparent backdrop-blur-[2px] bottom-8">
              {/* Utilisation de getAssetPath pour l'image aussi si besoin, sinon chemin direct */}
              <Image
                src={getAssetPath("/profile.png")} 
                alt="Ziyad Ouamna"
                width={400}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <div className="text-center md:text-left pb-8 relative">
            <div className="relative z-10">
              
              {/* Greeting */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-indigo-600 dark:text-indigo-400 text-lg md:text-xl mb-4 font-semibold"
              >
                👋 Hello, I&apos;m
              </motion.p>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-5 text-slate-900 dark:text-white"
              >
                Ziyad Ouamna
              </motion.h1>

              {/* Typing Animation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="h-14 md:h-16 flex items-center justify-center md:justify-start mb-7"
              >
                <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-slate-800 dark:text-slate-200">
                  <span className="bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500 bg-clip-text text-transparent">
                    {displayText}
                  </span>
                  <span className="animate-pulse text-slate-400">|</span>
                </h2>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-3xl mb-10 leading-relaxed"
              >
                I craft <span className="text-indigo-600 dark:text-indigo-400 font-semibold">performant applications</span>,
                design <span className="text-purple-600 dark:text-purple-400 font-semibold">stunning interfaces</span>,
                and deliver <span className="text-pink-600 dark:text-pink-400 font-semibold">conversion-optimized experiences</span>. I also trade in the
                <span className="text-indigo-700 dark:text-indigo-300 font-semibold"> financial markets</span>, bringing a data-driven mindset to product decisions.
              </motion.p>

              {/* Availability Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="bg-indigo-50 dark:bg-slate-800/50 border border-indigo-200 dark:border-indigo-500/25 rounded-xl p-3.5 mb-8 inline-flex items-center gap-2.5 shadow-sm"
              >
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50" />
                <div className="text-left">
                  <p className="text-xs md:text-sm font-bold text-indigo-900 dark:text-indigo-100">Available for Projects</p>
                  <p className="text-slate-600 dark:text-slate-300 text-xs md:text-sm">
                    Open for freelance work and new opportunities.
                  </p>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-3.5 mb-12"
              >
                <button
                  onClick={() => scrollToSection("#portfolio")}
                  className="px-7 py-3.5 border-2 border-slate-300 dark:border-slate-600 rounded-full font-semibold text-base md:text-lg 
                  text-slate-700 dark:text-indigo-200 
                  hover:border-indigo-500 dark:hover:border-indigo-400 
                  hover:bg-indigo-50 dark:hover:bg-indigo-500/10 
                  hover:text-indigo-600 dark:hover:text-indigo-100
                  transform hover:scale-[1.03] transition-all duration-300"
                >
                  View My Work
                </button>
                
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="px-7 py-3.5 border-2 border-slate-300 dark:border-slate-600 rounded-full font-semibold text-base md:text-lg 
                  text-slate-700 dark:text-slate-200 
                  hover:border-pink-500 dark:hover:border-pink-400 
                  hover:bg-pink-50 dark:hover:bg-pink-500/10 
                  hover:text-pink-600 dark:hover:text-white
                  transform hover:scale-[1.03] transition-all duration-300"
                >
                  Get In Touch
                </button>

                <a
                  href={getAssetPath("/CV Ziyad OUAMNA.pdf")}
                  download="CV Ziyad OUAMNA.pdf"
                  className="px-7 py-3.5 border-2 border-slate-300 dark:border-slate-600 rounded-full font-semibold text-base md:text-lg 
                  text-slate-700 dark:text-indigo-200 
                  hover:border-indigo-500 dark:hover:border-indigo-400 
                  hover:bg-indigo-50 dark:hover:bg-indigo-500/10 
                  hover:text-indigo-600 dark:hover:text-indigo-100
                  transform hover:scale-[1.03] transition-all duration-300 text-center"
                >
                  Download CV
                </a>
              </motion.div>

            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-slate-400 hover:text-indigo-600 dark:text-slate-500 dark:hover:text-white transition-colors"
        >
          <ArrowDown size={32} />
        </motion.div>
      </motion.button>
    </section>
  );
}
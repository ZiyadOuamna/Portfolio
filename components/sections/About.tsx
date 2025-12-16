"use client";

import { motion } from "framer-motion";
import { Code2, Palette, TrendingUp, Sparkles } from "lucide-react";

const skills = [
  { icon: Code2, label: "Development", color: "indigo" },
  { icon: Palette, label: "Design", color: "purple" },
  { icon: TrendingUp, label: "Marketing", color: "pink" },
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="min-h-screen md:min-h-screen relative overflow-visible bg-slate-100 dark:bg-slate-900 flex items-start pt-20 pb-4 md:py-0 md:items-center">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-slate-900/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-4 md:mb-15 mt-2 md:mt-12"
        >

          
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-4xl lg:text-4xl font-bold mb-1.5 md:mb-4"
          >
            The <span className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Hybrid</span> Approach
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-slate-400 text-[11px] md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            I don&apos;t just build products — I craft experiences that blend clean architecture,
            stunning visuals, and strategic marketing to drive real results.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center md:gap-y-32">
          {/* Left: Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-56 md:max-w-sm mx-auto">
              {/* User profile image */}
                <div className="absolute inset-0 bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl" />
                <div className="absolute inset-px bg-slate-900 rounded-2xl items-center justify-center overflow-hidden flex">
                  <img
                    src="/ziyad.png"
                    alt="Ziyad"
                    className="object-contain w-full h-full rounded-2xl"
                  />
                </div>
              
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-indigo-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-full font-semibold shadow-lg text-[11px] md:text-base"
              >
                5+ Years
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 bg-pink-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-full font-semibold shadow-lg text-[11px] md:text-base"
              >
                50+ Projects
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-1.5 md:space-y-5"
          >
            <div className="space-y-2 md:space-y-4">
              <h3 className="text-base md:text-2xl font-bold text-center md:text-left">
                Building Digital Excellence
              </h3>
              <p className="text-slate-400 leading-relaxed text-[11px] md:text-base text-justify">
                As a full-stack developer, I combine my technical skills with a creative approach to deliver complete digital solutions. Whether it&apos;s web development, mobile applications, UI/UX design, or even brand identity creation, I handle every step of the development process to turn your ideas into tangible projects.
              </p>
              <p className="text-slate-400 leading-relaxed text-[11px] md:text-base text-justify">
                I also place a strong emphasis on ensuring an optimal user experience, by combining modern technologies with effective design practices. My user-centered approach and digital marketing expertise enable me to create interactive and engaging experiences while ensuring strong online visibility for my clients.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-3 gap-2 md:gap-3 pt-2 md:pt-5">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                const colors = {
                  indigo: "from-indigo-500 to-indigo-600",
                  purple: "from-purple-500 to-purple-600",
                  pink: "from-pink-500 to-pink-600",
                };
                
                return (
                  <motion.div
                    key={skill.label}
                    initial={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-2 md:p-3.5 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-slate-600 transition-all duration-300"
                  >
                    <div className={`w-8 h-8 md:w-10 md:h-10 mx-auto mb-1 md:mb-2.5 bg-linear-to-br ${colors[skill.color as keyof typeof colors]} rounded-lg flex items-center justify-center`}>
                      <Icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <p className="text-[11px] md:text-sm font-semibold text-slate-300">{skill.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

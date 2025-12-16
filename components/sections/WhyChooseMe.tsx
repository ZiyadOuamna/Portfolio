"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle2, Shield, Zap, Users, Clock } from "lucide-react";

export default function WhyChooseMe() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const points = [
    { icon: Award, title: "Professional Quality", desc: "Clean code, polished UI, performance and accessibility at pro standards." },
    { icon: CheckCircle2, title: "Tangible Results", desc: "Clear goals, tracked KPIs, deliverables that drive real value." },
    { icon: Zap, title: "Fast Delivery", desc: "Accurate planning, efficient sprints, deadlines respected." },
    { icon: Shield, title: "Reliable & Transparent", desc: "Clear process, proactive communication, no ambiguity." },
    { icon: Users, title: "Client-Centered", desc: "Listening, guidance, and support from start to finish." },
    { icon: Clock, title: "Ongoing Support", desc: "Maintenance, improvements, and support after delivery." },
  ];

  return (
    <section id="why" className="min-h-screen md:min-h-screen relative bg-slate-100 dark:bg-slate-900 flex items-start pt-24 pb-6 md:py-0 md:items-center md:justify-center overflow-visible">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-slate-900/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-center mb-5 md:mb-12"
        >
          <motion.h2 variants={item} className="text-xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-3">
            Why Choose Me
          </motion.h2>
          <motion.p variants={item} className="text-slate-500 dark:text-slate-400 text-xs md:text-base max-w-3xl mx-auto leading-relaxed">
            A hybrid, results-driven approach: tech, design, and marketing working together to grow your business.
          </motion.p>
        </motion.div>

        {/* Points grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {points.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                variants={item}
                className="rounded-lg md:rounded-2xl border dark:border-slate-700 border-slate-200 bg-white dark:bg-slate-800/50 p-4 md:p-5 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-9 md:w-12 h-9 md:h-12 rounded-lg bg-linear-to-br from-indigo-500 to-pink-500 flex items-center justify-center shrink-0">
                    <Icon className="w-5 md:w-6 h-5 md:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm md:text-lg font-semibold text-slate-900 dark:text-white">{p.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm mt-1">{p.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

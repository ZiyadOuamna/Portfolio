'use client';

import { motion } from 'framer-motion';
import { Code2, Palette, Cloud } from 'lucide-react';

const Technologies = () => {
  const technologies = [
    {
      category: 'Frontend',
      icon: Code2,
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      category: 'Design',
      icon: Palette,
      items: ['Visual Stimulation and Personal Creativity without any tool of design.'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      category: 'Tools & Deployment',
      icon: Cloud,
      items: ['Git', 'GitHub', 'Vercel', 'GitHub Pages', 'Next.js Export'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section
      id="technologies"
      className="min-h-screen md:min-h-screen relative bg-slate-50 dark:bg-slate-900 flex items-center justify-center overflow-visible transition-colors duration-300"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-blob"></div>
        <div className="absolute top-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-20 md:py-0">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4">
            Technologies
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent ml-3">
              Utilisées
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mx-auto"></div>
          <p className="text-slate-600 dark:text-slate-400 text-lg mt-6 max-w-2xl mx-auto">
            Les outils et technologies utilisés pour développer ce portfolio
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <div className="h-full bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300 hover:shadow-lg dark:hover:shadow-indigo-500/10">
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${tech.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 text-center">
                    {tech.category}
                  </h3>
                  <div className="space-y-3">
                    {tech.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-3 justify-center">
                        <div className="w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0"></div>
                        <span className="text-slate-700 dark:text-slate-300 text-sm">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;

'use client';

import { motion } from 'framer-motion';
import { Code, Layers, Palette, Settings, Lightbulb, Database } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Langages de Programmation',
      icon: Code,
      skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'C', 'Java', 'PHP', 'XML/DTD/XSD'],
      level: 90,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Frameworks & Librairies',
      icon: Layers,
      skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Laravel', 'CodeIgniter', 'WordPress'],
      level: 85,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Design & Multimedia',
      icon: Palette,
      skills: ['Photoshop', 'Illustrator', 'Premier Pro', 'Audition', 'Figma', 'Canva', 'VN', 'UI/UX Design'],
      level: 88,
      color: 'from-orange-500 to-yellow-500'
    },
    {
      title: 'Systèmes & Outils & Analyse',
      icon: Database,
      skills: ['Linux', 'Git/GitHub', 'UML', 'Merise', 'VS Code/Eclipse/Miscrosoft SQL Server', 'Word/Power Point'],
      level: 82,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Architecture & Bases',
      icon: Settings,
      skills: ['Conception BD', 'API REST', 'Architecture Web', 'Responsive Design', 'Performance Optimization'],
      level: 85,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Compétences Soft',
      icon: Lightbulb,
      skills: ['Résolution de Problèmes', 'Travail d\'Équipe', 'Communication', 'Leadership', 'Créativité'],
      level: 92,
      color: 'from-cyan-500 to-blue-500'
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section
      id="skills"
      className="min-h-screen relative bg-white dark:bg-slate-950 flex items-center justify-center overflow-y-auto py-20 transition-colors duration-300"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-blob"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pt-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-3">
            Compétences
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent ml-3">
              Techniques
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mx-auto"></div>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-3 max-w-2xl mx-auto">
            Les technologies et compétences que je maîtrise
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <div className="h-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-4 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-sm md:text-base font-bold text-slate-900 dark:text-white mb-2">
                        {category.title}
                      </h3>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        {category.level}%
                      </span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-3 h-1 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${category.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      viewport={{ once: true }}
                      className={`h-full bg-gradient-to-r ${category.color}`}
                    ></motion.div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-1">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center gap-1.5 group/skill">
                        <div className="w-0.5 h-0.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 group-hover/skill:scale-150 transition-transform duration-300 flex-shrink-0"></div>
                        <span className="text-slate-700 dark:text-slate-300 text-xs group-hover/skill:text-indigo-600 dark:group-hover/skill:text-indigo-400 transition-colors duration-300">
                          {skill}
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

export default Skills;

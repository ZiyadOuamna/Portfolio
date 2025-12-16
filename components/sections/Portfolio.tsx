"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Analytics Dashboard",
    category: "Full Stack Development",
    description: "Real-time analytics dashboard with AI-powered insights and predictive analytics.",
    image: "/project4.jpg",
    tags: ["React", "Python", "TensorFlow", "D3.js"],
    gradient: "from-blue-500 to-cyan-600",
    github: "https://github.com/ZiyadOuamna",
    live: "https://example.com",
  },
  {
    title: "E-Commerce Platform",
    category: "Full Stack Development",
    description: "A modern e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
    image: "/project1.jpg",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    gradient: "from-indigo-500 to-blue-600",
    github: "https://github.com/ZiyadOuamna",
    live: "https://example.com",
  },
  {
    title: "Growth Marketing Strategy",
    category: "Digital Marketing",
    description: "Data-driven growth strategy that scaled a startup from 0 to 10k users in 6 months.",
    image: "/project6.jpg",
    tags: ["Growth Hacking", "Social Media", "Email"],
    gradient: "from-orange-500 to-red-600",
    github: null,
    live: "https://example.com",
  },
  {
    title: "Brand Identity System",
    category: "Graphic Design",
    description: "Complete brand identity including logo, color palette, typography, and brand guidelines.",
    image: "/project2.jpg",
    tags: ["Figma", "Illustrator", "Brand Design"],
    gradient: "from-purple-500 to-pink-600",
    github: null,
    live: "https://example.com",
  },
  {
    title: "Mobile App Design",
    category: "Graphic Design",
    description: "Intuitive mobile app design with seamless user experience and stunning animations.",
    image: "/project5.jpg",
    tags: ["Figma", "Mobile Design", "Prototyping"],
    gradient: "from-violet-500 to-purple-600",
    github: null,
    live: "https://example.com",
  },
  {
    title: "Marketing Campaign Analytics",
    category: "Digital Marketing",
    description: "Multi-channel marketing campaign that increased conversions by 300% in 3 months.",
    image: "/project3.jpg",
    tags: ["Google Analytics", "SEO", "Content Strategy"],
    gradient: "from-pink-500 to-rose-600",
    github: null,
    live: "https://example.com",
  },
];

export default function Portfolio() {
  // Show a curated set of featured projects; filters removed by request
  return (
    <section id="portfolio" className="min-h-screen relative bg-white dark:bg-slate-950 flex items-center justify-center py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col items-center h-full justify-start pt-18">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-3">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-xs md:text-sm max-w-3xl mx-auto">
            Explore my latest work across development, design, and marketing. Each project showcases my approach to solving real-world challenges with innovative solutions.
          </p>
          {/* Filters removed; keep only bottom CTA */}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden border dark:border-slate-700 border-slate-200 bg-white dark:bg-slate-800/50 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-24 bg-slate-900">
                <div className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-50`} />
                <div className="absolute inset-0 flex items-center justify-center text-slate-300 font-bold text-sm">
                  {project.category}
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-slate-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-3">
                <span className={`text-xs font-semibold px-2 py-0.5 bg-linear-to-r ${project.gradient} bg-opacity-10 rounded-full inline-block mb-2`}>
                  {project.category}
                </span>

                <h3 className="text-sm font-bold mb-1.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors text-slate-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-xs mb-2 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2 py-0.5 dark:bg-slate-700/50 bg-slate-200 dark:text-slate-300 text-slate-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <a href="/projects" className="px-6 py-2 text-sm border-2 border-indigo-500 text-indigo-500 dark:text-indigo-400 dark:border-indigo-400 rounded-full font-semibold hover:bg-indigo-500/10 transition-all duration-300">
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}

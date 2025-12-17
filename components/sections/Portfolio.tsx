"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { getAssetPath } from "@/lib/pathHelper";
import { useState } from "react";

const projects = [
  { 
    title: "Cleaning Services Management Platform", 
    category: "Development",
    description: "Real-time analytics dashboard with AI-powered insights and predictive analytics.", 
    tags: ["React", "Laravel", "Tailwind CSS"],
    images: [
      "/projects/Development/C/heroC.jpeg",
      "/projects/Development/C/login.jpeg",
      "/projects/Development/C/signup.jpeg",
      "/projects/Development/C/how.jpeg",
      "/projects/Development/C/services.jpeg",
      "/projects/Development/C/bordfreelancer.jpeg",
      "/projects/Development/C/bordClient.jpeg",
      "/projects/Development/C/profile.jpeg",
      "/projects/Development/C/chatbot.jpeg",
      "/projects/Development/C/payment.jpeg",
      "/projects/Development/C/ticket.jpeg",
      "/projects/Development/C/remboursement.jpeg",
      "/projects/Development/C/avis.jpeg",
      "/projects/Development/C/contact.jpeg",
      "/projects/Development/C/footer.jpeg",
      "/projects/Development/C/details.jpeg",
    ],
    gradient: "from-blue-500 to-cyan-600",
  },
  
  { title: "Digital Agency Landing Page For Mailing", 
    category: "development", 
    description: "A modern agency showcase with a dark theme featuring services, value propositions, and a conversion-focused interface.", 
    tags: ["Html", "Css"], 
    gradient: "from-indigo-500 to-blue-600",
    images: [
      "/projects/Development/W/1.png",
      "/projects/Development/W/2.png",
    ]
  },
  
  { title: "School Enrollment Management Platform", 
    category: "development", 
    description: "A centralized platform designed to simplify and automate student enrollment in schools, allowing users to manage applications, track admissions, and streamline the registration process efficiently.", 
    tags: ["html", "css", "javascript", "php", "mysql"],
    gradient: "from-purple-500 to-pink-600",

    images: [
      "/projects/Development/inscriptionenclic/form-inscription.jpeg",
      "/projects/Development/inscriptionenclic/home.jpeg",
      "/projects/Development/inscriptionenclic/connexion-alert.jpeg",
      "/projects/Development/inscriptionenclic/form-login.jpeg",
      "/projects/Development/inscriptionenclic/infos-auth-incorrect.jpeg",
      "/projects/Development/inscriptionenclic/infos-deja-existe.jpeg",
    ]
  },
];

export default function Portfolio() {
  // Show a curated set of featured projects; filters removed by request
  return (
    <section id="portfolio" className="relative bg-white dark:bg-slate-950 flex items-center justify-center py-8 md:py-12 md:min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col items-center w-full md:h-full md:justify-start md:pt-18 pb-12 md:pb-0">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4 md:mb-8"
        >
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-2 md:mb-3">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-xs md:text-sm max-w-3xl mx-auto hidden md:block">
            Explore my latest work across development, design, and marketing. Each project showcases my approach to solving real-world challenges with innovative solutions.
          </p>
          {/* Filters removed; keep only bottom CTA */}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 mb-4 md:mb-8 w-full">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-2 md:mt-4"
        >
          <Link href="/projects/" className="px-4 md:px-6 py-1.5 md:py-2 text-xs md:text-sm border-2 border-indigo-500 text-indigo-500 dark:text-indigo-400 dark:border-indigo-400 rounded-full font-semibold hover:bg-indigo-500/10 transition-all duration-300">
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const hasImages = project.images && project.images.length > 0;
  const totalImages = hasImages ? project.images!.length : 0;

  const nextImage = () => {
    if (hasImages) {
      setCurrentImageIndex((prev) => (prev + 1) % totalImages);
    }
  };

  const prevImage = () => {
    if (hasImages) {
      setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
    }
  };

  const nextImageModal = () => {
    if (hasImages) {
      setCurrentImageIndex((prev) => (prev + 1) % totalImages);
    }
  };

  const prevImageModal = () => {
    if (hasImages) {
      setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-2xl overflow-hidden border dark:border-slate-700 border-slate-200 bg-white dark:bg-slate-800/50 hover:shadow-xl transition-shadow duration-300"
    >
      {/* Image */}
      <div 
        className="relative h-32 md:h-48 bg-slate-900 overflow-hidden cursor-pointer"
        onClick={() => hasImages && setIsModalOpen(true)}
      >
        {hasImages ? (
          <>
            <motion.img
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              src={getAssetPath(project.images![currentImageIndex])}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              className="w-full h-full object-cover transition duration-300 group-hover:blur-sm"
            />
            <div className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-30`} />

            {/* Hover hint */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
              <div className="px-3 py-1.5 text-xs md:text-sm bg-black/70 text-white rounded-full border border-white/20 shadow-lg">
                Click to see the project
              </div>
            </div>

            {/* Navigation buttons */}
            {totalImages > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300 z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-4 h-4 text-white" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300 z-10"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-4 h-4 text-white" />
                </button>

                {/* Image counter */}
                <div className="absolute top-2 right-2 bg-black/60 px-2 py-1 rounded-full text-xs text-white backdrop-blur-sm">
                  {currentImageIndex + 1} / {totalImages}
                </div>
              </>
            )}
          </>
        ) : (
          <>
            <div className={`w-full h-full bg-linear-to-br ${project.gradient}`} />
            <div className="absolute inset-0 flex items-center justify-center text-slate-300 font-bold text-sm">
              {project.category}
            </div>
          </>
        )}

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
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-3 md:p-3">
        <span className={`text-xs font-semibold px-2 py-0.5 bg-linear-to-r ${project.gradient} bg-opacity-10 rounded-full inline-block mb-2`}>
          {project.category}
        </span>

        <h3 className="text-xs md:text-sm font-bold mb-1 md:mb-1.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors text-slate-900 dark:text-white">
          {project.title}
        </h3>

        <p className="text-slate-600 dark:text-slate-400 text-xs mb-1 md:mb-2 line-clamp-2">
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

      {/* Modal pour voir l'image en grand */}
      {isModalOpen && hasImages && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-w-6xl w-full h-full flex items-center justify-center">
            {/* Image */}
            <motion.img
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={getAssetPath(project.images![currentImageIndex])}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Navigation buttons */}
            {totalImages > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImageModal();
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300 z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImageModal();
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300 z-10"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </>
            )}

            {/* Image counter */}
            <div className="absolute top-4 right-4 bg-black/60 px-3 py-2 rounded-full text-sm text-white backdrop-blur-sm">
              {currentImageIndex + 1} / {totalImages}
            </div>

            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 left-4 w-10 h-10 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300"
              aria-label="Close"
            >
              <span className="text-white text-xl">×</span>
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
}

"use client";

import { useMemo, useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Image from "next/image";

type Project = {
  title: string;
  domain: "development" | "design" | "marketing" | "trading";
  description: string;
  tags: string[];
  link?: string;
  images?: string[];
};

const allProjects: Project[] = [
  { 
    title: "Cleaning Services Management Platform", 
    domain: "development", 
    description: "It allows users to book, track, and manage their services with ease.", 
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
    ]
  },
  { title: "Digital Agency Landing Page For Mailing", 
    domain: "development", 
    description: "A modern agency showcase with a dark theme featuring services, value propositions, and a conversion-focused interface.", 
    tags: ["Html", "Css"], 
    images: [
      "/projects/Development/W/1.png",
      "/projects/Development/W/2.png",
    ]
  },

  { title: "SaaS SEO Campaign", 
    domain: "marketing", 
    description: "3x conversions via multi-channel strategy.", 
    tags: ["SEO", "Ads", "Analytics"],
  },

  { title: "Algo Trading Dashboard", 
    domain: "trading", 
    description: "Trading metrics, risk and performance dashboard.", 
    tags: ["Python", "Pandas", "Plotly"] 
  },

  { title: "School Enrollment Management Platform", 
    domain: "development", 
    description: "A centralized platform designed to simplify and automate student enrollment in schools, allowing users to manage applications, track admissions, and streamline the registration process efficiently.", 
    tags: ["html", "css", "javascript", "php", "mysql"], 
    images: [
      "/projects/Development/inscriptionenclic/form-inscription.jpeg",
      "/projects/Development/inscriptionenclic/home.jpeg",
      "/projects/Development/inscriptionenclic/connexion-alert.jpeg",
      "/projects/Development/inscriptionenclic/form-login.jpeg",
      "/projects/Development/inscriptionenclic/infos-auth-incorrect.jpeg",
      "/projects/Development/inscriptionenclic/infos-deja-existe.jpeg",
    ]
  },

  { title: "Sports Event Visual Identity", 
    domain: "design", 
    description: "Complete branding package for a football tournament including dynamic promotional posters, formal invitations, and appreciation certificates.", 
    tags: ["Illustrator"], 
    images: [
      "/projects/Design/BTS/tournament-vert.jpg",
      "/projects/Design/BTS/tournament-vert.png",
      "/projects/Design/BTS/tournament.png",
      "/projects/Design/BTS/invitation.png",
      "/projects/Design/BTS/appreciation-1.png",
      "/projects/Design/BTS/appreciation-2.png",
    ]
  },

];

const filters = [
  { key: "all", label: "All" },
  { key: "development", label: "Development" },
  { key: "design", label: "Design" },
  { key: "marketing", label: "Marketing" },
  { key: "trading", label: "Trading" },
] as const;

function ProjectsContent() {
  const searchParams = useSearchParams();
  const [active, setActive] = useState<(typeof filters)[number]["key"]>("all");

  useEffect(() => {
    const f = searchParams?.get("filter");
    if (f && filters.some((x) => x.key === f)) {
      setActive(f as (typeof filters)[number]["key"]);
    }
  }, [searchParams]);

  const visible = useMemo(() => {
    if (active === "all") return allProjects;
    return allProjects.filter(p => p.domain === active);
  }, [active]);

  const gradientFor = (domain: Project["domain"]) => {
    switch (domain) {
      case "development":
        return "from-indigo-500 to-blue-600";
      case "design":
        return "from-purple-500 to-pink-600";
      case "marketing":
        return "from-orange-500 to-red-600";
      case "trading":
        return "from-emerald-500 to-teal-600";
      default:
        return "from-indigo-500 to-pink-500";
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">All Projects</h1>
          <p className="text-slate-400">Browse projects filtered by domain.</p>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`px-4 py-2 rounded-full border transition-all ${
                active === f.key
                  ? "border-indigo-500 bg-indigo-500/10 text-white"
                  : "border-slate-700 text-slate-300 hover:border-slate-600"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid - styled like Portfolio */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} gradientFor={gradientFor} />
          ))}
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
}

export default function ProjectsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-slate-400">Loading projects...</div>
      </div>
    }>
      <ProjectsContent />
    </Suspense>
  );
}
const BASE_PATH = '/Portfolio';

function ProjectCard({ project, index, gradientFor }: { project: Project; index: number; gradientFor: (domain: Project["domain"]) => string }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const hasImages = project.images && project.images.length > 0;
  const totalImages = hasImages ? project.images!.length : 0;
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-2xl overflow-hidden border dark:border-slate-700 border-slate-200 bg-white dark:bg-slate-800/50 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
    >
      {/* Image Section with Slides */}
      {hasImages ? (
        <div
          className="relative h-56 bg-slate-900 overflow-hidden cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full"
          >
            <Image
              src={`${BASE_PATH}${project.images![currentImageIndex]}`}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              fill
              className="object-cover transition duration-300 group-hover:blur-sm"
              priority={index === 0}
            />
          </motion.div>

          {/* Hover hint */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <div className="px-3 py-1.5 text-xs md:text-sm bg-black/70 text-white rounded-full border border-white/20 shadow-lg">
              Click to see the project
            </div>
          </div>

          {/* Navigation buttons - PARTIE THUMBNAIL */}
          {totalImages > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // <--- Empêche le modal de s'ouvrir
                  prevImage();
                }}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300 z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-4 h-4 text-white" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // <--- Empêche le modal de s'ouvrir
                  nextImage();
                }}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300 z-10"
                aria-label="Next image"
              >
                <ChevronRight className="w-4 h-4 text-white" />
              </button>

              {/* Pagination dots... (reste inchangé) */}
            </>
          )}

          {/* Image counter */}
          {totalImages > 1 && (
            <div className="absolute top-2 right-2 bg-black/60 px-2 py-1 rounded-full text-xs text-white backdrop-blur-sm">
              {currentImageIndex + 1} / {totalImages}
            </div>
          )}
        </div>
      ) : (
        <div className="relative h-24 bg-slate-900">
          <div className={`absolute inset-0 bg-linear-to-br ${gradientFor(project.domain)} opacity-50`} />
          <div className="absolute inset-0 flex items-center justify-center text-slate-300 font-bold text-sm capitalize">
            {project.domain}
          </div>
          {/* Hover overlay with external link if available */}
          {project.link && (
            <div className="absolute inset-0 bg-slate-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="p-3 flex-1 flex flex-col">
        <span className={`text-xs font-semibold px-2 py-0.5 bg-linear-to-r ${gradientFor(project.domain)} bg-opacity-10 rounded-full inline-block mb-2 capitalize w-fit`}>
          {project.domain}
        </span>
        <h3 className="text-sm font-bold mb-1.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors text-slate-900 dark:text-white">
          {project.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-xs mb-2 line-clamp-2 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1">
          {project.tags.slice(0, 3).map((t) => (
            <span key={t} className="text-[11px] px-2 py-0.5 dark:bg-slate-700/50 bg-slate-200 dark:text-slate-300 text-slate-700 rounded-full">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Lightbox modal */}
      {hasImages && isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setIsModalOpen(false)}>
          <div className="relative w-full max-w-5xl h-[70vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={`${BASE_PATH}${project.images![currentImageIndex]}`}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              fill
              className="object-contain"
              priority={index === 0}
            />

            {totalImages > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 border border-white/30 rounded-full flex items-center justify-center hover:bg-white/35 transition"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 border border-white/30 rounded-full flex items-center justify-center hover:bg-white/35 transition"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </>
            )}

            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 px-3 py-1.5 bg-white/15 border border-white/30 rounded-full text-white text-sm hover:bg-white/25 transition"
              aria-label="Close"
            >
              Close
            </button>

            {totalImages > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {project.images!.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`h-2 rounded-full transition-all ${idx === currentImageIndex ? "bg-white w-6" : "bg-white/50 w-2"}`}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
}

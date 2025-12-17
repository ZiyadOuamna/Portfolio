"use client";

import { useMemo, useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Image from "next/image";
import { getAssetPath } from "@/lib/pathHelper";

type Project = {
  title: string;
  domain: "development" | "design" | "marketing" | "trading";
  description: string;
  tags: string[];
  link?: string;
  images?: string[];
};

const allProjects: Project[] = [
  /*development*/
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

  /*design*/
  {
    title: "Logo and Banner for Designer Store",
    domain: "design",
    description: "Logo and banner design for an online store specializing in designer products, aiming to create a luxurious and appealing brand image.",
    tags: ["illustrator","Canva"],
    images: [
      "/projects/Design/store design for designer/banniere.png",
      "/projects/Design/store design for designer/Logo.png",
    ]
  },
  
  {
    title: "Restaurant Menu Design",
    domain: "design",
    description: "Attractive and user-friendly menu design for a restaurant, highlighting various dishes with appealing visuals and organized layout.",
    tags: ["illustrator"],
    images: [
      "/projects/Design/menu/travail final.png",
      "/projects/Design/menu/le menu.png",
      "/projects/Design/menu/ouverture de menu.png",
    ]
  },
  { title: "Agency Home Page", 
    domain: "design", 
    description: "Modern and vibrant home page design for a digital marketing agency, showcasing services and client success stories.", 
    tags: ["Illustrator"], 
    images: [
      "/projects/Design/homePage/imarketing.png",
    ]
  },
  { title: "Sports Event Visual Identity", 
    domain: "design", 
    description: "Complete branding package for a football tournament including dynamic promotional posters, formal invitations, and appreciation certificates.", 
    tags: ["Illustrator"], 
    images: [
      "/projects/Design/BTS/appreciation-1.png",
      "/projects/Design/BTS/tournament-vert.jpg",
      "/projects/Design/BTS/tournament-vert.png",
      "/projects/Design/BTS/tournament.png",
      "/projects/Design/BTS/invitation.png",
      "/projects/Design/BTS/appreciation-2.png",
    ]
  },
  { 
    title: "Book Cover Design", 
    domain: "design", 
    description: "Creative Book design for children to make reading more engaging and fun.", 
    tags: ["Illustrator"], 
    images: [
      "/projects/Design/book page/bitrik.png",
    ]
  },
  { title: "Brand Identity for Organic Honey", 
    domain: "design", 
    description: "Comprehensive brand identity design for an organic honey business, including logo creation and packaging design to reflect the natural and pure qualities of the product.", 
    tags: ["Illustrator"], 
    images: [
      "/projects/Design/brandMiel/LOGO POUR OUVERTURE.png",
      "/projects/Design/brandMiel/LOGO.png",
      "/projects/Design/brandMiel/emballage caroubie petite.png",
      "/projects/Design/brandMiel/emballage caroubie.png",
      "/projects/Design/brandMiel/Emballage citrone petite.png",
      "/projects/Design/brandMiel/Emballage citrone.png",
      "/projects/Design/brandMiel/emballage orange petite.png",
    ]
  },
  {
    title: "Logo",
    domain: "design",
    description: "Logo design for a tech startup, focusing on simplicity and modern aesthetics to represent innovation and reliability.",
    tags: ["illustrator"],
    images: [
      "/projects/Design/Rotab+delice/c.png",
    ]
  },
  /*marketing*/
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
      <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 text-slate-900 dark:text-white">All Projects</h1>
            <p className="text-slate-600 dark:text-slate-400">Browse projects filtered by domain.</p>
          </div>

          {/* Controls */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={`px-4 py-2 rounded-full border transition-all text-sm font-medium ${
                  active === f.key
                    ? "border-indigo-500 bg-indigo-500 text-white shadow-md dark:shadow-indigo-500/20"
                    : "border-slate-200 bg-white text-slate-600 hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-white"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid */}
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
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
        <div className="text-slate-600 dark:text-slate-400">Loading projects...</div>
      </div>
    }>
      <ProjectsContent />
    </Suspense>
  );
}

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
      className="group relative rounded-2xl overflow-hidden 
        bg-white dark:bg-slate-800/50 
        border border-slate-200 dark:border-slate-700 
        shadow-sm dark:shadow-none
        hover:shadow-xl dark:hover:shadow-indigo-500/10 hover:border-indigo-200 dark:hover:border-slate-600
        transition-all duration-300 flex flex-col h-full"
    >
      {/* Image Section */}
      {hasImages ? (
        <div
          className="relative h-56 bg-slate-200 dark:bg-slate-900 overflow-hidden cursor-pointer"
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
              src={getAssetPath(project.images![currentImageIndex])}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              fill
              className="object-cover transition duration-300 group-hover:blur-sm"
              priority={index === 0}
            />
          </motion.div>

          {/* Hover hint */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
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
                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300 z-20"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-4 h-4 text-white" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300 z-20"
                aria-label="Next image"
              >
                <ChevronRight className="w-4 h-4 text-white" />
              </button>
            </>
          )}

          {/* Image counter */}
          {totalImages > 1 && (
            <div className="absolute top-2 right-2 bg-black/60 px-2 py-1 rounded-full text-xs text-white backdrop-blur-sm z-20">
              {currentImageIndex + 1} / {totalImages}
            </div>
          )}
        </div>
      ) : (
        <div className="relative h-24 bg-slate-100 dark:bg-slate-900">
          <div className={`absolute inset-0 bg-linear-to-br ${gradientFor(project.domain)} opacity-20 dark:opacity-50`} />
          <div className="absolute inset-0 flex items-center justify-center text-slate-700 dark:text-slate-300 font-bold text-sm capitalize">
            {project.domain}
          </div>
          {/* Hover overlay with external link */}
          {project.link && (
            <div className="absolute inset-0 bg-slate-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-5 h-5 text-white" />
              </a>
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="p-3 flex-1 flex flex-col">
        <span className={`text-xs font-semibold px-2 py-0.5 bg-linear-to-r ${gradientFor(project.domain)} bg-opacity-10 rounded-full inline-block mb-2 capitalize w-fit text-slate-700 dark:text-slate-200`}>
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
            <span key={t} className="text-[11px] px-2 py-0.5 bg-slate-100 dark:bg-slate-700/50 border border-slate-200 dark:border-transparent text-slate-600 dark:text-slate-300 rounded-full">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Lightbox modal */}
      {hasImages && isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4" 
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative w-full max-w-5xl h-[70vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <Image
              src={getAssetPath(project.images![currentImageIndex])}
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
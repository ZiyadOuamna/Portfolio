"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Smartphone,
  Rocket,
  Palette,
  Layers,
  Figma,
  Sparkles,
  TrendingUp,
  Search,
  BarChart3,
  Target,
} from "lucide-react";

const services = [
  {
    title: "Full Stack Development",
    icon: Code2,
    gradient: "from-indigo-500 to-blue-600",
    description: "Building scalable, performant applications with modern technologies and clean architecture.",
    features: [
      { icon: Smartphone, text: "Responsive Web Apps" },
      { icon: Database, text: "Backend & APIs" },
      { icon: Rocket, text: "Performance Optimization" },
    ],
  },
  {
    title: "Graphic Design",
    icon: Palette,
    gradient: "from-purple-500 to-pink-600",
    description: "Creating stunning visual identities and user interfaces that captivate and convert.",
    features: [
      { icon: Figma, text: "UI/UX Design" },
      { icon: Layers, text: "Brand Identity" },
      { icon: Sparkles, text: "Social Media Visuals" },
    ],
  },
  {
    title: "Digital Marketing",
    icon: TrendingUp,
    gradient: "from-pink-500 to-rose-600",
    description: "Driving growth through data-driven strategies and conversion-optimized campaigns.",
    features: [
      { icon: Search, text: "Ads, Emailing , Data Scraping" },
      { icon: BarChart3, text: "Analytics & Insights" },
      { icon: Target, text: "Social Media Management" },
    ],
  },
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="services"
      className="min-h-screen md:min-h-screen relative bg-white dark:bg-slate-950 flex items-start pt-24 pb-6 md:py-0 md:items-center overflow-visible transition-colors duration-300"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-500/5 dark:bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4 md:mb-8"
        >
          <h2 className="text-lg md:text-2xl lg:text-3xl font-bold mb-1.5 md:mb-2 text-slate-900 dark:text-white">
            Comprehensive{" "}
            <span className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-[10px] md:text-sm max-w-xl mx-auto leading-relaxed">
            From concept to launch, I provide end-to-end solutions that combine technical excellence,
            creative design, and strategic marketing.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-3 md:gap-5"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full 
                  bg-white dark:bg-slate-800/50 
                  border border-slate-200 dark:border-slate-700 
                  shadow-sm dark:shadow-none
                  backdrop-blur-sm 
                  rounded-xl md:rounded-2xl p-3 md:p-5 
                  hover:border-indigo-300 dark:hover:border-slate-600 
                  transition-all duration-300"
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                  
                  {/* Icon */}
                  <div className={`w-8 md:w-10 h-8 md:h-10 mb-2 md:mb-3 bg-linear-to-br ${service.gradient} rounded-lg md:rounded-xl flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    <Icon className="w-4 md:w-5 h-4 md:h-5 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-sm md:text-base font-bold mb-1.5 md:mb-2 relative z-10 text-slate-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-2 md:mb-3 leading-relaxed relative z-10 text-[10px] md:text-xs">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-1 md:space-y-1.5 relative z-10">
                    {service.features.map((feature) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <div
                          key={feature.text}
                          className="flex items-center gap-2 md:gap-3 text-slate-700 dark:text-slate-300"
                        >
                          <div className={`w-4 md:w-5 h-4 md:h-5 bg-linear-to-br ${service.gradient} bg-opacity-10 rounded-lg flex items-center justify-center shrink-0`}>
                            <FeatureIcon className="w-2 md:w-2.5 h-2 md:h-2.5 text-white" />
                          </div>
                          <span className="text-[9px] md:text-xs font-medium">{feature.text}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Number indicator - MODIFIÉ ICI 👇 */}
                  <div className={`
                    absolute top-6 right-6 text-6xl font-bold 
                    bg-linear-to-br ${service.gradient} bg-clip-text text-transparent 
                    opacity-15 dark:opacity-10 
                    group-hover:opacity-20 dark:group-hover:opacity-20 
                    transition-opacity duration-300 pointer-events-none select-none
                  `}>
                    0{index + 1}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-4 md:mt-8"
        >
          <p className="text-slate-600 dark:text-slate-400 mb-2 md:mb-2.5 text-[9px] md:text-xs">
            Ready to bring your vision to life?
          </p>
          <button
            onClick={() => {
              const element = document.querySelector("#contact");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-4 md:px-5 py-1.5 md:py-2 text-xs md:text-sm bg-linear-to-r from-indigo-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-indigo-500/50 transform hover:scale-105 transition-all duration-300"
          >
            Start a Project
          </button>
        </motion.div>
      </div>
    </section>
  );
}
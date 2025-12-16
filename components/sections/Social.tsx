"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, Twitter, Instagram, Mail } from "lucide-react";

export default function Social() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/ZiyadOuamna", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ziyad-ouamna/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/ZiyadOuamna", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com/Ziyad_Ouamna_officiel", label: "Instagram" },
    { icon: Mail, href: "mailto:ziyanouamna.servcie@gmail.com", label: "Email" },
  ];

  return (
    <section id="social" className="min-h-screen relative bg-white dark:bg-slate-950 flex items-center justify-center py-20">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col items-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Follow{" "}
            <span className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            Connect with me on social media and stay updated with my latest projects and insights.
          </p>
        </motion.div>

        {/* Social Links */}
        <div className="flex flex-wrap gap-6 justify-center">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group w-20 h-20 bg-linear-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 border border-slate-700 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/30"
                aria-label={social.label}
              >
                <Icon className="w-8 h-8 text-slate-300 group-hover:text-white transition-colors" />
              </motion.a>
            );
          })}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="w-32 h-1 bg-linear-to-r from-transparent via-indigo-500 to-transparent mt-16"
        />

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-slate-400 text-sm md:text-base max-w-xl text-center"
        >
          Let&apos;s collaborate and create something amazing together. Feel free to reach out!
        </motion.p>
      </div>
    </section>
  );
}

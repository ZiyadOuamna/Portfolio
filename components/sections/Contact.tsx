"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Mail, MapPin, Phone, Linkedin, Github, Twitter } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({} as any));
        // If email service is not configured, gracefully fallback to mailto
        if (data?.error === "EMAIL_NOT_CONFIGURED") {
          const to = "ziyadouamna.service@gmail.com";
          const subject = encodeURIComponent(`[Contact] ${formData.subject || "New message"}`);
          const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
          );
          // Open email client
          window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
          // Show success and clear form
          setSubmitStatus("success");
          setFormData({ name: "", email: "", subject: "", message: "" });
          setTimeout(() => setSubmitStatus("idle"), 5000);
          setIsSubmitting(false);
          return;
        }
        throw new Error(data?.message || "Failed to send message");
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "ziyadouamna.service@gmail.com", href: "mailto:ziyadouamna.service@gmail.com" },
    { icon: Phone, label: "Phone", value: "+212 7-51 81 86 24", href: "tel:+212751818624" },
    { icon: MapPin, label: "Location", value: "Agadir, Souss-Massa, Morocco", href: null },
  ];


  return (
    <section
      id="contact"
      className="min-h-screen flex items-center p-0 m-0 relative overflow-hidden bg-slate-100 dark:bg-slate-900 w-full max-w-none px-4 md:px-8 lg:px-12"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-7xl mx-auto relative z-10 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
            Let&apos;s Build{" "}
            <span className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Something Amazing
            </span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-3xl mx-auto">
            Have a project in mind? Let&apos;s discuss how we can bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-5 items-stretch">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 text-slate-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3.5 py-2.5 dark:bg-slate-800/50 bg-white border dark:border-slate-700 border-slate-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors text-slate-900 dark:text-white"
                    placeholder="your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-slate-300">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3.5 py-2.5 dark:bg-slate-800/50 bg-white border dark:border-slate-700 border-slate-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors text-slate-900 dark:text-white"
                    placeholder="email@gmail.com"
                  />
                </div>
              </div>

              <div className="mt-8">
                <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-slate-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3.5 py-2.5 dark:bg-slate-800/50 bg-white border dark:border-slate-700 border-slate-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors text-slate-900 dark:text-white"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-3.5 py-2.5 dark:bg-slate-800/50 bg-white border dark:border-slate-700 border-slate-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors text-slate-900 dark:text-white resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-linear-to-r from-indigo-500 to-pink-500 rounded-lg font-semibold hover:shadow-xl hover:shadow-indigo-500/40 transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-center"
                >
                  Message sent successfully! I&apos;ll get back to you soon.
                </motion.div>
              )}
              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-center"
                >
                  Something went wrong. Please try again or email me directly at
                  <span className="font-semibold text-white"> ziyadouamna.service@gmail.com</span>.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Right: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-full flex flex-col"
          >
            {/* Contact Details */}
            <div className="dark:bg-slate-800/50 bg-slate-100 backdrop-blur-sm border dark:border-slate-700 border-slate-300 rounded-2xl pt-6 pl-6 h-full flex flex-col mt-7">
              <h3 className="text-3xl font-bold mb-7">Contact Information</h3>
              <div className="space-y-3.5">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-center gap-4 min-h-18">
                      <div className="w-12 h-12 bg-linear-to-br from-indigo-500 to-pink-500 rounded-lg flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="leading-tight">
                        <p className="text-sm text-slate-400 mb-1">{item.label}</p>
                        <p className="text-white font-semibold">{item.value}</p>
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block hover:bg-slate-700/30 p-3 rounded-lg transition-colors"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={item.label} className="p-3">
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

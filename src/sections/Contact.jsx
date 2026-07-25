import React, { useState, useRef } from "react";
import { Mail, Linkedin, Github, MapPin, Send, AlertCircle, CheckCircle } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import confetti from "canvas-confetti";

export default function Contact() {
  const { email, github, linkedin, location } = portfolioData.personalDetails;
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email.";
    if (!form.message.trim()) e.message = "Message cannot be empty.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onChange = (e) => {
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(p => ({ ...p, [e.target.name]: "" }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      confetti({ particleCount: 80, spread: 60, origin: { y: 0.8 }, colors: ["#7c3aed", "#a78bfa", "#f59e0b"] });
      setTimeout(() => setStatus(null), 5000);
    }, 1400);
  };

  const contacts = [
    { icon: Mail,    label: "Email",   sub: email,              href: `mailto:${email}`,  color: "#7c3aed" },
    { icon: Linkedin,label: "LinkedIn",sub: "deepika-a-209704331", href: linkedin,         color: "#0ea5e9" },
    { icon: Github,  label: "GitHub",  sub: "DEEPIKA-A-27",     href: github,             color: "#ec4899" },
    { icon: MapPin,  label: "Location",sub: location,           href: null,               color: "#f59e0b" },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full bg-[#0e0e16] light:bg-[#f5f5f0] border-t border-[#2a2a3d] light:border-[#e5e3dc] px-6 md:px-12 lg:px-16 py-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="section-bar" />
          <span className="eyebrow">Contact</span>
          <div className="flex-1 h-[1px] bg-[#2a2a3d] light:bg-[#e5e3dc]" />
          <span className="font-mono text-[10px] text-[#2a2a3d] light:text-[#d0cec7]">06</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col"
          >
            <h2 className="font-sans font-extrabold text-2xl md:text-3xl text-[#f5f0e8] dark:text-[#f5f0e8] light:text-[#1a1a27] mb-4">
              Let's discuss your<br />
              <span className="text-violet-400">next project</span>
            </h2>
            <p className="font-sans text-sm text-[#6b7280] leading-6 mb-8">
              Whether you need a Spring Boot backend, an AI integration, or a full-stack solution —
              feel free to reach out anytime.
            </p>

            <div className="space-y-3">
              {contacts.map(({ icon: Icon, label, sub, href, color }) => {
                const Wrapper = href ? "a" : "div";
                const props = href
                  ? { href, target: href.startsWith("http") ? "_blank" : undefined, rel: href.startsWith("http") ? "noopener noreferrer" : undefined }
                  : {};
                return (
                  <Wrapper
                    key={label}
                    {...props}
                    className="group flex items-center gap-3 rounded-xl bg-[#1a1a27] border border-[#2a2a3d] light:bg-white light:border-[#e5e3dc] px-4 py-3.5 hover:border-violet-500/30 transition-all"
                  >
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                      style={{ backgroundColor: `${color}12`, color }}
                    >
                      <Icon size={16} />
                    </div>
                    <div className="min-w-0">
                      <span className="block font-mono text-[9px] font-bold uppercase tracking-widest text-[#6b7280]">
                        {label}
                      </span>
                      <span className="block font-sans text-sm font-semibold text-[#f5f0e8] dark:text-[#f5f0e8] light:text-[#1a1a27] truncate group-hover:text-violet-300 transition-colors">
                        {sub}
                      </span>
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7 rounded-2xl bg-[#1a1a27] border border-[#2a2a3d] light:bg-white light:border-[#e5e3dc] p-6 md:p-8"
          >
            <form onSubmit={onSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block font-mono text-[10px] font-bold uppercase tracking-widest text-[#6b7280] mb-1.5">
                  Full Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Jane Doe"
                  className={`w-full rounded-lg bg-[#0a0a0f] border px-4 py-2.5 font-sans text-sm text-[#f5f0e8] placeholder-[#6b7280] outline-none transition-all light:bg-[#fafaf9] light:text-[#1a1a27] ${
                    errors.name ? "border-pink-500" : "border-[#2a2a3d] focus:border-violet-500/60 light:border-[#e5e3dc] light:focus:border-violet-400"
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 flex items-center gap-1 font-sans text-xs text-pink-400">
                    <AlertCircle size={11} /> {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block font-mono text-[10px] font-bold uppercase tracking-widest text-[#6b7280] mb-1.5">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="jane@example.com"
                  className={`w-full rounded-lg bg-[#0a0a0f] border px-4 py-2.5 font-sans text-sm text-[#f5f0e8] placeholder-[#6b7280] outline-none transition-all light:bg-[#fafaf9] light:text-[#1a1a27] ${
                    errors.email ? "border-pink-500" : "border-[#2a2a3d] focus:border-violet-500/60 light:border-[#e5e3dc] light:focus:border-violet-400"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 flex items-center gap-1 font-sans text-xs text-pink-400">
                    <AlertCircle size={11} /> {errors.email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block font-mono text-[10px] font-bold uppercase tracking-widest text-[#6b7280] mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={onChange}
                  placeholder="Hey Deepika, I'd love to collaborate on..."
                  className={`w-full rounded-lg bg-[#0a0a0f] border px-4 py-2.5 font-sans text-sm text-[#f5f0e8] placeholder-[#6b7280] outline-none transition-all resize-none light:bg-[#fafaf9] light:text-[#1a1a27] ${
                    errors.message ? "border-pink-500" : "border-[#2a2a3d] focus:border-violet-500/60 light:border-[#e5e3dc] light:focus:border-violet-400"
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 flex items-center gap-1 font-sans text-xs text-pink-400">
                    <AlertCircle size={11} /> {errors.message}
                  </p>
                )}
              </div>

              {/* Status */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 rounded-lg bg-emerald-500/10 border border-emerald-500/25 px-4 py-3 font-sans text-xs text-emerald-400"
                  >
                    <CheckCircle size={14} className="shrink-0" />
                    Message sent! Deepika will get back to you shortly.
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-violet-600 hover:bg-violet-500 disabled:opacity-50 px-6 py-3 font-sans text-sm font-bold text-white transition-colors cursor-pointer"
              >
                {submitting ? (
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                ) : (
                  <><Send size={13} /> Send Message</>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

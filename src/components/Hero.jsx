"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "../lib/contact";
import ConstellationBackground from "./ConstellationBackground";

const roles = ["Full Stack Developer", "MERN Stack Engineer", "Next.js Developer"];

const useTypewriter = (words, typingSpeed = 90, deletingSpeed = 45, pause = 1400) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    } else {
      timeout = setTimeout(
        () => setText(current.slice(0, deleting ? text.length - 1 : text.length + 1)),
        deleting ? deletingSpeed : typingSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return text;
};

const socialLinks = [
  { icon: Github, url: "https://github.com/M-Mujtaba-abid", label: "GitHub" },
  { icon: Linkedin, url: "https://www.linkedin.com/in/muhammad-mujtaba-abid-5b0094369", label: "LinkedIn" },
  { icon: MessageCircle, url: getWhatsAppLink(), label: "WhatsApp" },
];

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const Hero = () => {
  const typedRole = useTypewriter(roles);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 px-6 overflow-hidden">
      <ConstellationBackground />

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-stretch w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-xs font-medium bg-slate-900/60 backdrop-blur-md border border-slate-800 text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            Available for new projects
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white max-w-xl">
            Crafting <span className="gradient-text bg-[length:200%_auto] animate-gradient-x">digital</span> products
            &amp; experiences that{" "}
            <span className="gradient-text bg-[length:200%_auto] animate-gradient-x">inspire.</span>
          </h1>

          <p className="text-slate-400 text-lg mb-8 h-8">
            I&apos;m Mujtaba —{" "}
            <span className="text-cyan-400 font-semibold">
              {typedRole}
              <span className="inline-block w-0.5 h-5 -mb-1 ml-0.5 bg-cyan-400 animate-blink" />
            </span>
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <motion.button
              onClick={() => scrollTo("projects")}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-sm font-medium shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:shadow-[0_0_45px_rgba(6,182,212,0.5)] transition-shadow"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.a
              href="/cv.pdf"
              download
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/50 backdrop-blur-md border border-slate-800 text-white text-sm font-medium hover:border-cyan-500/50 hover:text-cyan-300 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </motion.a>

            <motion.button
              onClick={() => scrollTo("contact")}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-slate-300 text-sm font-medium border border-slate-800/60 hover:border-slate-700 hover:text-white transition-colors"
            >
              Get In Touch
            </motion.button>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2.5 rounded-full bg-slate-900/50 backdrop-blur-md border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/50 transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            <div className="h-8 w-px bg-slate-800" />

            <div className="flex items-center gap-6 text-sm">
              <p>
                <span className="text-white font-bold">1+</span>{" "}
                <span className="text-slate-500">Yrs Exp.</span>
              </p>
              <p>
                <span className="text-white font-bold">5+</span>{" "}
                <span className="text-slate-500">Production Apps</span>
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative h-[340px] sm:h-[440px] lg:h-full lg:min-h-[520px]">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-indigo-500/30 to-cyan-500/30 blur-3xl animate-float-slow" />
            <div className="absolute inset-0 rounded-[2rem] ring-1 ring-white/10 overflow-hidden shadow-2xl">
              <img src="/my.jpeg" alt="Muhammad Mujtaba Abid" className="w-full h-full object-cover" />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at top left, rgba(99,102,241,0.55), transparent 45%), radial-gradient(circle at top right, rgba(6,182,212,0.5), transparent 45%), radial-gradient(circle at bottom left, rgba(6,182,212,0.5), transparent 45%), radial-gradient(circle at bottom right, rgba(99,102,241,0.55), transparent 45%)",
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

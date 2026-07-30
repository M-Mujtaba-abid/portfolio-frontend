"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, MessageCircle, Copy, Check, MapPin } from "lucide-react";
import { getWhatsAppLink } from "../lib/contact";

const EMAIL = "mujtabaabid06@gmail.com";

const socialLinks = [
  { icon: Github, name: "GitHub", url: "https://github.com/M-Mujtaba-abid" },
  { icon: Linkedin, name: "LinkedIn", url: "https://www.linkedin.com/in/muhammad-mujtaba-abid-5b0094369" },
];

const FloatingField = ({ label, name, type = "text", value, onChange, textarea = false }) => {
  const Component = textarea ? "textarea" : "input";
  return (
    <div className="relative">
      <Component
        id={name}
        name={name}
        type={textarea ? undefined : type}
        rows={textarea ? 5 : undefined}
        value={value}
        onChange={onChange}
        placeholder=" "
        className="peer w-full bg-slate-950/40 border border-slate-800 rounded-xl px-4 pt-5 pb-2 text-white placeholder-transparent focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/40 transition-colors resize-none"
      />
      <label
        htmlFor={name}
        className="absolute left-4 top-3.5 text-slate-500 text-sm transition-all duration-200
          peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-500
          peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-cyan-400
          [&:not(:placeholder-shown)]:top-1.5 [&:not(:placeholder-shown)]:text-xs"
      >
        {label}
      </label>
    </div>
  );
};

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", subject: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    const { name, subject, message } = formData;
    const text = `Hi Mujtaba, I'm ${name || "a visitor"}.\nSubject: ${subject || "General inquiry"}\n\n${message || "I'd like to get in touch."}`;
    window.open(getWhatsAppLink(text), "_blank");
  };

  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          {/* <p className="text-cyan-400 font-mono text-sm mb-2">// contact</p> */}
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Let's build something <span className="gradient-text">great</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Send a message below — it goes straight to my WhatsApp, no forms lost in a backend queue.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <motion.form
            onSubmit={handleWhatsAppSend}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 rounded-2xl bg-slate-900/50 backdrop-blur-md border border-slate-800 p-6 sm:p-8 space-y-5"
          >
            <FloatingField label="Your Name" name="name" value={formData.name} onChange={handleChange} />
            <FloatingField label="Subject" name="subject" value={formData.subject} onChange={handleChange} />
            <FloatingField
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              textarea
            />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-medium shadow-[0_0_25px_rgba(99,102,241,0.35)] hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] transition-shadow"
            >
              <MessageCircle className="w-4 h-4" />
              Send via WhatsApp
            </motion.button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="rounded-2xl bg-gradient-to-br from-indigo-500/15 to-cyan-500/10 border border-indigo-500/30 p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="p-2 rounded-lg bg-indigo-500/20">
                  <MessageCircle className="w-5 h-5 text-cyan-300" />
                </span>
                <h3 className="text-white font-semibold">Chat on WhatsApp</h3>
              </div>
              <p className="text-slate-400 text-sm mb-4">Fastest way to reach me — usually reply within the hour.</p>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 hover:text-cyan-200 transition-colors"
              >
                Start a chat <MessageCircle className="w-4 h-4" />
              </a>
            </div>

            <div className="rounded-2xl bg-slate-900/50 backdrop-blur-md border border-slate-800 p-6">
              <p className="text-slate-500 text-xs mb-1">Email</p>
              <div className="flex items-center justify-between gap-2">
                <span className="text-white text-sm truncate">{EMAIL}</span>
                <button
                  onClick={handleCopyEmail}
                  className="shrink-0 p-2 rounded-lg bg-slate-800/60 text-slate-300 hover:text-cyan-300 hover:bg-slate-800 transition-colors"
                  aria-label="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="flex items-center gap-2 mt-4 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-indigo-400" />
                Lahore, Pakistan
              </div>
            </div>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900/50 backdrop-blur-md border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/50 transition-colors text-sm"
                >
                  <social.icon className="w-4 h-4" />
                  {social.name}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

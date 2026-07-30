"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const timeline = [
  {
    icon: Briefcase,
    title: "Full Stack Developer",
    org: "HSC Tech",
    period: "Present",
    description:
      "Building production-ready applications with Node.js, Express, and Supabase — covering database design, authentication, and API architecture end to end.",
  },
  {
    icon: Briefcase,
    title: "Backend Developer",
    org: "Datics AI",
    period: "June 2026",
    description:
      "Developing backend services with NestJS and building the accompanying Next.js frontend, focused on clean API design and fast, reliable data flow between the two.",
  },
  // {
  //   icon: Briefcase,
  //   title: "Frontend Development Intern",
  //   org: "Codace Solutions",
  //   period: "2025 — Present",
  //   description:
  //     "Building React.js applications, reusable components, and CRUD features, with a focus on frontend performance and UI consistency.",
  // },
  {
    icon: Briefcase,
    title: "Full Stack Developer",
    org: "Recurso Labs",
    period: "2024",
    description:
      "Built full-stack features end to end using Express.js on the backend and React on the frontend.",
  },
  // {
  //   icon: Briefcase,
  //   title: "Frontend Development Intern",
  //   org: "Codace Solutions",
  //   period: "2024",
  //   description:
  //     "Building React.js applications, reusable components, and CRUD features, with a focus on frontend performance and UI consistency.",
  // },
  {
    icon: GraduationCap,
    title: "Bachelor of Information Technology",
    org: "Punjab University",
    period: "2021 — 2025",
    description:
      "Specialized in web technologies, systems design, and full-stack application development.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          {/* <p className="text-cyan-400 font-mono text-sm mb-2">// experience</p> */}
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Milestones & <span className="gradient-text">growth</span>
          </h2>
        </motion.div>

        <div className="relative pl-8 border-l border-slate-800">
          {timeline.map((item, index) => (
            <motion.div
              key={`${item.org}-${item.title}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative mb-10 last:mb-0"
            >
              <span className="absolute -left-[2.55rem] top-1 w-6 h-6 rounded-full bg-slate-900 border border-indigo-500/50 flex items-center justify-center">
                <item.icon className="w-3.5 h-3.5 text-cyan-400" />
              </span>

              <div className="rounded-2xl bg-slate-900/50 backdrop-blur-md border border-slate-800 p-5 hover:border-indigo-500/40 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <span className="text-xs font-mono text-cyan-400">
                    {item.period}
                  </span>
                </div>
                <p className="text-indigo-300 text-sm font-medium mb-2">
                  {item.org}
                </p>
                <p className="text-slate-400 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

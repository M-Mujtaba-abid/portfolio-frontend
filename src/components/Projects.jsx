"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import SpotlightTiltCard from "./SpotlightTiltCard";

const projects = [
  {
    title: "HRMS — Metro Cash & Carry (FYP)",
    description:
      "Final Year Project: an HRMS system for Metro Cash & Carry built on the MERN stack, with employee management, attendance tracking, and HR analytics dashboards.",
    tags: ["React.js", "Node.js", "Express.js", "Tailwind"],
    liveUrl: "https://metrohrms.netlify.app/",
    githubUrl: "https://github.com/M-Mujtaba-abid",
    featured: true,
    span: "lg:col-span-2",
  },
  {
    title: "FancyStore",
    description:
      "Flagship e-commerce storefront built end-to-end with a Next.js frontend and an Express API backed by a Neon Postgres database via Sequelize.",
    tags: ["Next.js", "Express", "Neon", "Sequelize"],
    liveUrl: "https://fancystore.store",
    githubUrl: "https://github.com/M-Mujtaba-abid/Fancy-Store",
    featured: true,
  },
  {
    title: "Anamta",
    description:
      "Production web app powered by a NestJS + GraphQL backend with a Next.js frontend for type-safe, efficient data fetching.",
    tags: ["Next.js", "NestJS", "GraphQL"],
    liveUrl: "https://anamta.live",
    githubUrl: "https://github.com/M-Mujtaba-abid/Quranic-studies-Anamta-",
  },
  {
    title: "Luxury Fragrance MZ",
    description:
      "E-commerce storefront for a fragrance brand, with a React frontend and a Node/Express API using Prisma ORM over a Neon Postgres database.",
    tags: ["React", "Node.js", "Express", "Prisma", "Neon"],
    liveUrl: "https://luxuryfragrancemz.shop",
    githubUrl: "https://github.com/M-Mujtaba-abid/m.z_luxury_fragrance",
  },
  {
    title: "AI Resume Analyzer",
    description:
      "AI-powered resume analyzer that scores resumes and gives improvement feedback using the llama-3.3-70b-versatile model, with a Next.js.",
    tags: ["Next.js", "Express", "Neon", "Stripe"],
    liveUrl: "https://ai-resume-analyzer-frontend-0078.vercel.app/",
    githubUrl: "https://github.com/M-Mujtaba-abid/Ai-Resume-Analyzer",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          {/* <p className="text-cyan-400 font-mono text-sm mb-2">// projects</p> */}
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Things I&apos;ve <span className="gradient-text">built</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className={project.span}
            >
              <SpotlightTiltCard className="p-6 h-full flex flex-col">
                {project.featured && (
                  <span className="self-start mb-3 px-2.5 py-1 rounded-full text-[10px] font-medium tracking-wide uppercase bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                    Featured
                  </span>
                )}
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-slate-800/60 text-slate-300 border border-slate-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-sm font-medium hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-shadow"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-3 py-2 rounded-lg border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/50 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </SpotlightTiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

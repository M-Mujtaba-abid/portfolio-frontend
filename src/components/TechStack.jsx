"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Boxes,
  Server,
  Database,
  GitBranch,
  Cloud,
  Layers,
  Workflow,
  Figma,
  Braces,
  Network,
  Terminal,
  LayoutGrid,
  Component,
  Hexagon,
  Share2,
  RefreshCw,
  Table2,
  Triangle,
  Link2,
  MousePointer2,
  Bot,
  Rocket,
} from "lucide-react";
import SpotlightTiltCard from "./SpotlightTiltCard";

const categories = [
  {
    title: "Frontend",
    span: "lg:col-span-2",
    stack: [
      { name: "React", icon: Code2 },
      { name: "Next.js", icon: Layers },
      { name: "JavaScript", icon: Braces },
      { name: "Tailwind CSS", icon: Boxes },
      { name: "Bootstrap", icon: LayoutGrid },
      { name: "Material UI", icon: Component },
    ],
  },
  {
    title: "Backend",
    span: "",
    stack: [
      { name: "Node.js", icon: Server },
      { name: "Express.js", icon: Network },
      { name: "REST APIs", icon: Workflow },
      { name: "NestJS", icon: Hexagon },
      { name: "GraphQL", icon: Share2 },
      { name: "Tanstack Query", icon: RefreshCw },
    ],
  },
  {
    title: "Databases",
    span: "",
    stack: [
      { name: "MongoDB", icon: Database },
      { name: "Neon (Postgres)", icon: Database },
      { name: "SQL", icon: Table2 },
      { name: "Prisma", icon: Triangle },
      { name: "Sequelize", icon: Link2 },
    ],
  },
  {
    title: "Architecture & Tools",
    span: "lg:col-span-2",
    stack: [
      { name: "Git / GitHub", icon: GitBranch },
      { name: "Vercel / Netlify", icon: Cloud },
      { name: "Figma", icon: Figma },
      { name: "VS Code", icon: Terminal },
      { name: "Cursor", icon: MousePointer2 },
      { name: "Claude Code", icon: Bot },
      { name: "Antigravity", icon: Rocket },
    ],
  },
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          {/* <p className="text-cyan-400 font-mono text-sm mb-2">// tech_stack</p> */}
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Built with a modern <span className="gradient-text">toolkit</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={category.span}
            >
              <SpotlightTiltCard tilt={false} className="p-6 h-full">
                <h3 className="text-lg font-semibold text-white mb-5">{category.title}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {category.stack.map((tech) => (
                    <div
                      key={tech.name}
                      className="group flex flex-col items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-950/40 py-4 px-2 text-center transition-all duration-300 hover:border-indigo-500/50 hover:bg-indigo-500/5"
                    >
                      <tech.icon className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.7)] transition-all duration-300" />
                      <span className="text-xs text-slate-400 group-hover:text-white transition-colors">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </SpotlightTiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;

"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ExternalLink, Github, Eye } from "lucide-react"

const Portfolio = () => {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "FYP Project",
      description: "Final Year Project is an HRMS system for Metro Cash & Carry, built using the MERN stack (MongoDB, Express, React, Node.js). It includes modules like Employee Management, Attendance Tracking, and HR Analytics.Analytics dashboard for social media management with real-time data visualization and reporting.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      technologies: ["React.js", "node.js", "tailwind", "Express.js"],
      category: "fullstack",
      liveUrl: "https://metrohrms.netlify.app/",
      githubUrl: "https://github.com/example",
      featured: true,
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description:
      "Full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      technologies: ["React", "Node.js" , "javaScript"    ,"tailwind",],
      category: "frontend",
      liveUrl: "https://freshmartbymujtaba.netlify.app/",
      githubUrl: "https://github.com/example",
      featured: true,
    },
    {
      id: 3,
      title: "Task Management App",
      description:
        "I developed a Paste App using React.js that allows users to create, view, and manage text snippets.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      technologies: ["React", "Node.js" , "javaScript"    ,"tailwind",],
      category: "frontend",
      liveUrl: "https://note-pad-app-by-mujtaba-abid.vercel.app/",
      githubUrl: "https://github.com/example",
      featured: true,
    },
    {
      id: 4,
      title: "To do List",
      description: "Full functional To-Do List app using vanilla JavaScript, HTML, and CSS. It allows users to add, edit, delete, and copy tasks, with real-time updates in the UI. The app demonstrates core DOM manipulation and event handling concepts.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
      technologies: ["JavaScript", "CSS", "Html"],
      category: "frontend",
      liveUrl: "https://tasksaversite.netlify.app/",
      githubUrl: "https://github.com/example",
      featured: false,
    },
    {
      id: 5,
      title: "REST API Service",
      description: " CRUD web application using the JSONPlaceholder REST API. The app allows users to create, read, update, and delete posts in real-time using React and Axios.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
      technologies: ["React.js", "Tailwind", "Rest Api", "Context Api"],
      category: "frontend",
      liveUrl: "https://crudbymujtaba.netlify.app/",
      githubUrl: "https://github.com/example",
      featured: false,
    },
    {
      id: 6,
      title: "RazorPay Landing page ",
      description: " a responsive landing page for Razorpay using HTML, CSS, and JavaScript, closely replicating the original design. The page includes interactive sections like navbar, hero, features, and footer.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop",
      technologies: [ "Html", "css", "Tailwind"],
      category: "frontend",
      liveUrl: "https://razorpay-clonebymujtaba.netlify.app/",
      githubUrl: "https://github.com/example",
      featured: false,
    },
  ]

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "fullstack", label: "Full Stack" },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <div className="p-8 h-full overflow-y-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl font-bold text-white mb-2">Portfolio</h1>
        <p className="text-gray-300 mb-8">Showcase of my recent projects and work</p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                filter === category.id ? "bg-purple-600 text-white" : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="glass-effect overflow-hidden hover:bg-white/20 transition-all duration-300 group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => window.open(project.liveUrl, "_blank")}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {project.featured && (
                  <span className="absolute top-3 left-3 bg-purple-600 text-white px-2 py-1 rounded text-xs">
                    Featured
                  </span>
                )}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <button
                    className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg"
                    onClick={(e) => {
                      e.stopPropagation()
                      window.open(project.liveUrl, "_blank")
                    }}
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button
                    className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg"
                    onClick={(e) => {
                      e.stopPropagation()
                      window.open(project.githubUrl, "_blank")
                    }}
                  >
                    <Github className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-white/10 text-white px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-2">
                  <button
                    className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 px-3 rounded-lg flex items-center justify-center space-x-2 text-sm"
                    onClick={(e) => {
                      e.stopPropagation()
                      window.open(project.liveUrl, "_blank")
                    }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View Project</span>
                  </button>
                  <button
                    className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg"
                    onClick={(e) => {
                      e.stopPropagation()
                      window.open(project.githubUrl, "_blank")
                    }}
                  >
                    <Github className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No projects found for the selected category.</p>
          </div>
        )}
      </motion.div>
    </div>
  )
}

export default Portfolio

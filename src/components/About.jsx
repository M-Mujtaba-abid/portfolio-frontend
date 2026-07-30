"use client"

import { motion } from "framer-motion"
import { Download, MapPin,Eye, Calendar, Mail } from "lucide-react"

const About = () => {
  const experiences = [
  {
    title: "Frontend Development Intern",
    company: "Codace Solutions",
    period: "2025 - Present",
    description: "Working on  React.js projects, building reusable components, and improving frontend performance and UI consistency and crud.",
  },
  {
    title: "Frontend Development Intern (Remote)",
    company: "Ausbite",
    period: "2024",
    description: " Built small-scale projects to learn React, Context API, Redux Toolkit, and responsive design using Tailwind CSS. ",
  },
  {
    title: "Web Development Learner",
    company: "PNY Institute",
    period: "2024",
    description:  "focusing on modern frontend technologies like HTML, CSS, JavaScript, and React basics.",
  }
]


  return (
    <div className="p-8 h-full overflow-y-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl font-bold text-white mb-2">About Me</h1>
        <p className="text-gray-300 mb-8">Get to know more about my background and experience</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Personal Summary */}
          <div className="lg:col-span-2">
            <motion.div
              className="glass-effect p-6 mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">My Self </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
               Hi, I'm Muhammad Mujtaba Abid, a Web Developer skilled in React, Next.js, and Tailwind CSS. I build responsive, user-friendly apps and manage state effectively using Redux Toolkit and 
               
               Context API. I focus on clean code, performance, and scalable frontend architecture.



                </p>
                <p>Currently, I’m focused on expanding my full-stack skills and building impactful projects that solve real-world problems.</p>
               
                
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              className="glass-effect p-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Work Experience</h2>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    className="border-l-2 border-purple-500 pl-6 relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-2 top-2"></div>
                    <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
                    <p className="text-purple-300 font-medium">{exp.company}</p>
                    <p className="text-gray-400 text-sm mb-2">{exp.period}</p>
                    <p className="text-gray-300 text-sm">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            {/* Quick Info */}
            <motion.div
              className="glass-effect p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-xl font-bold text-white mb-4">Quick Info</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">Lahore, Pakistan</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-purple-400" />
                  <div>
                    <p className="text-gray-400 text-sm">Age</p>
                    <p className="text-white">24 Years</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white text-sm">mujtabaabid06@.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              className="glass-effect p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-xl font-bold text-white mb-4">Education</h2>
              <div className="space-y-2">
                <h3 className="text-white font-semibold">Bachelor of Information Technology</h3>
                <p className="text-purple-300">Punjab  University </p>
                <p className="text-gray-400 text-sm">2021 - 2025</p>
                <p className="text-gray-300 text-sm">Specialized in  Web Technologies</p>
              </div>
            </motion.div>

            {/* Download CV */}
         <div className="space-y-3">
  {/* Download Button */}
  <motion.a
    href="/cv.pdf"
    download
    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors"
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.6 }}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <Download className="w-4 h-4" />
    <span>Download CV</span>
  </motion.a>

  {/* View Button (opens in new tab) */}
  <motion.a
    href="/cv.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors"
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.7 }}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <Eye className="w-4 h-4" />
    <span>View CV</span>
  </motion.a>
</div>

            
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default About

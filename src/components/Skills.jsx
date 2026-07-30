"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const Skills = () => {
  const [animateSkills, setAnimateSkills] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimateSkills(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 90, color: "bg-blue-500" },
        { name: "Next.js", level: 60, color: "bg-gray-700" },
        { name: "JavaScript", level: 95, color: "bg-yellow-500" },
        { name: "TypeScript", level: 50, color: "bg-blue-600" },
        { name: "HTML5", level: 98, color: "bg-orange-500" },
        { name: "CSS3", level: 92, color: "bg-blue-400" },
        { name: "Tailwind CSS", level: 90, color: "bg-teal-500" },
        // { name: "SASS/SCSS", level: 85, color: "bg-pink-500" },
      ],
    },
    // {
    //   title: "Backend Development",
    //   skills: [
    //     { name: "Node.js", level: 90, color: "bg-green-600" },
    //     { name: "Express.js", level: 88, color: "bg-gray-600" },
    //     { name: "Python", level: 82, color: "bg-yellow-600" },
    //     { name: "MongoDB", level: 85, color: "bg-green-500" },
    //     { name: "PostgreSQL", level: 80, color: "bg-blue-700" },
    //     { name: "REST APIs", level: 92, color: "bg-purple-500" },
    //     { name: "GraphQL", level: 75, color: "bg-pink-600" },
    //     { name: "Firebase", level: 88, color: "bg-orange-600" },
    //   ],
    // },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 95, color: "bg-gray-800" },
        // { name: "Docker", level: 78, color: "bg-blue-600" },
        { name: "Netlify", level: 75, color: "bg-orange-500" },
        { name: "Vercel", level: 90, color: "bg-black" },
        { name: "Figma", level: 85, color: "bg-purple-600" },
        { name: "VS Code", level: 98, color: "bg-blue-500" },
        { name: "curser", level: 80, color: "bg-blue-400" },
        // { name: "Jest", level: 82, color: "bg-red-600" },
      ],
    },
  ]

  return (
    <div className="p-8 h-full overflow-y-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl font-bold text-white mb-2">Skills & Expertise</h1>
        <p className="text-gray-300 mb-8">My technical skills and proficiency levels</p>

        <div className="grid grid-cols-1 sm:grid-cols-1  md:grid-cols-2 xl:grid-cols-1 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="glass-effect p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2 }}
            >
              <h2 className="text-xl font-bold text-white mb-6">{category.title}</h2>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-white text-sm font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-xs">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className={`skill-progress ${skill.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: animateSkills ? `${skill.level}%` : 0 }}
                        transition={{
                          duration: 1.5,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          className="mt-8 glass-effect p-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6">Certifications & Achievements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "PNY-Institute certified Developer",
              "Intern Ship at Ausbite",
              "Intern Ship at Codace Solutoin on Going",
              // "Node.js Certified Developer",
            ].map((cert, index) => (
              <motion.div
                key={cert}
                className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-white font-semibold">{cert}</h3>
                <p className="text-gray-200 text-sm">Verified Credential</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Skills

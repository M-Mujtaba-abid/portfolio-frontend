"use client"

import { motion } from "framer-motion"
import { Code, Palette, Server, Smartphone, Star, TrendingUp, Users, Award } from "lucide-react"

const Dashboard = () => {
  const stats = [
    { title: "Projects Completed", value: "5+", icon: Award, color: "text-green-400" },
    // { title: "Happy Clients", value: "30+", icon: Users, color: "text-blue-400" },
    { title: "hands on Experience", value: "6 month", icon: TrendingUp, color: "text-purple-400" },
    // { title: "Technologies", value: "15+", icon: Code, color: "text-orange-400" },
  ]

  const services = [
    {
      title: "Frontend Development",
      description: "Modern React.js applications with responsive design",
      icon: Palette,
      technologies: ["React", "Next.js", "javaScript", "Tailwind CSS"],
    },
    {
      title: "Rest Api",
      description: "Scalable server-side solutions and APIs intigration like crud",
      icon: Server,
      technologies: ["Node.js", "Express", "MongoDB", "React.js"],
    },
    {
      title: "Frontend Development",
      description: " user-friendly React.js interfaces  with ehance code quality ,neat and clean folder structure",
      icon: Smartphone,  
      technologies: ["React.js", "tailwind",  "seo_Friendly"],
    },
    {
    title: "Frontend Development",
    description: "Building responsive, user-friendly React.js interfaces",
    icon: Palette,
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content: "Exceptional work! The website exceeded our expectations and was delivered on time.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
    },
    {
      name: "Mike Chen",
      role: "Product Manager, InnovateCorp",
      content: "Professional, skilled, and great communication throughout the project.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
    },
  ]

  return (
    <div className="p-8 h-full overflow-y-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl font-bold text-white mb-2">Welcome to My Portfolio</h1>
        <p className="text-gray-300 mb-8">Full Stack Web Developer & UI/UX Enthusiast</p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              className="glass-effect p-6 text-center hover:bg-white/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
              <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-gray-400 text-sm">{stat.title}</p>
            </motion.div>
          ))}
        </div>

        {/* What I'm Doing Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6">What I'm Doing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="glass-effect p-6 hover:bg-white/20 transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 p-3 rounded-lg">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span key={tech} className="bg-white/10 text-white px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <h2 className="text-2xl font-bold text-white mb-6">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="glass-effect p-6 hover:bg-white/20 transition-all duration-300"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Dashboard

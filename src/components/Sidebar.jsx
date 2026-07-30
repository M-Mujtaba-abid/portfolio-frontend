

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Menu, X, User, Code, Briefcase, Mail, Calendar, Phone, MapPin,
} from "lucide-react"

const Sidebar = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    //  { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Code },
    { id: "portfolio", label: "Portfolio", icon: Briefcase },
    { id: "contact", label: "Contact", icon: Mail },
  ]

  const personalInfo = [
    { icon: Mail, label: "Email", value: "mujtabaabid06@gmail.com" },
    { icon: Calendar, label: "DOB", value: "March 28, 2000" },
    { icon: Phone, label: "Phone", value: "0333-4140461" },
    { icon: MapPin, label: "Address", value: "Ravi Road, Lahore" },
  ]

  return (
    <>
      {/* Toggle Button for Mobile */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white bg-purple-600 p-2 rounded-full shadow-lg"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar */}
      <motion.div
        className={`
          fixed top-0 left-0 h-full z-40 bg-black/30 
          md:static md:bg-transparent 
          ${isOpen ? "block" : "hidden"} md:block
          md:ml-4 md:mt-5
        `}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="glass-effect w-72 h-full p-6 overflow-y-auto">
          {/* Profile Section */}
          <div className="text-center mb-8">
            <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
              <img
                src="/my-photo.jpeg"
                alt="Profile"
                className="w-[180px] h-[200px] rounded-full mx-auto mb-4 ring-4 ring-white/20 object-cover"
              />
            </motion.div>
            <h2 className="text-xl font-bold text-white mb-2">Muhammad Mujtaba Abid</h2>
            <p className="text-purple-300 font-medium">Web Developer</p>
          </div>

          {/* Personal Info */}
          <div className="mb-8">
            <h3 className="text-white font-semibold mb-4">Personal Info</h3>
            <div className="space-y-3">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  className="flex items-center space-x-3 text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <info.icon className="w-4 h-4 text-purple-300" />
                  <div>
                    <p className="text-gray-300">{info.label}</p>
                    <p className="text-white text-xs">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id)
                  setIsOpen(false) // Close sidebar on mobile
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  activeSection === item.id
                    ? "bg-purple-600 text-white shadow-lg"
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </motion.button>
            ))}
          </nav>
        </div>
      </motion.div>
    </>
  )
}

export default Sidebar

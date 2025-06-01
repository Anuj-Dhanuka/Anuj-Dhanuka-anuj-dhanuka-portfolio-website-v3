"use client"

import { motion } from "framer-motion"
import { Code, Smartphone, ShoppingBag, Globe, GitBranch, Zap, ChevronRight } from "lucide-react"
import { useState } from "react"

export function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skillCategories = [
    {
      name: "Frontend Development",
      icon: <Code className="h-6 w-6 text-purple-600" />,
      color: "purple",
      skills: [
        { name: "React.js", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "Tailwind CSS", level: 80 },
        { name: "TypeScript", level: 70 },
        { name: "Next.js", level: 75 },
      ],
    },
    {
      name: "Mobile Development",
      icon: <Smartphone className="h-6 w-6 text-blue-600" />,
      color: "blue",
      skills: [
        { name: "React Native", level: 80 },
        { name: "Mobile UI Design", level: 75 },
        { name: "App Performance", level: 70 },
      ],
    },
    {
      name: "E-commerce",
      icon: <ShoppingBag className="h-6 w-6 text-green-600" />,
      color: "green",
      skills: [
        { name: "Shopify", level: 85 },
        { name: "Shopify Liquid", level: 75 },
        { name: "E-commerce UX", level: 80 },
      ],
    },
    {
      name: "CMS",
      icon: <Globe className="h-6 w-6 text-orange-600" />,
      color: "orange",
      skills: [
        { name: "WordPress", level: 90 },
        { name: "Theme Development", level: 80 },
        { name: "Content Management", level: 75 },
      ],
    },
    {
      name: "Tools & Others",
      icon: <GitBranch className="h-6 w-6 text-gray-600" />,
      color: "gray",
      skills: [
        { name: "Git", level: 85 },
        { name: "Responsive Design", level: 90 },
        { name: "UI/UX Principles", level: 80 },
        { name: "Performance Optimization", level: 75 },
      ],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="py-12 md:py-16 relative overflow-hidden">
      {/* Simplified background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50/50 to-accent1-50/30 dark:from-brand-900/10 dark:to-accent1-900/10 z-0"></div>

      {/* Subtle professional pattern overlay - optimized */}
      <div
        className="absolute inset-0 z-0 opacity-10 dark:opacity-5"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(139, 92, 246, 0.03) 1px, transparent 1px),
                      linear-gradient(180deg, rgba(139, 92, 246, 0.03) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-brand-100 dark:bg-brand-900/30 text-brand-800 dark:text-brand-300 mb-3">
            <Zap className="h-4 w-4 mr-2" />
            Professional Skill Set
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Technical Skills</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
            Below is a comprehensive overview of my technical expertise and proficiency levels in various technologies
          </p>
        </motion.div>

        {/* Legend for skill levels - simplified */}
        <div className="flex justify-center items-center gap-4 md:gap-8 mb-8 text-sm flex-wrap">
          <div className="flex items-center">
            <div className="w-10 h-2 bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-600 rounded-full mr-2"></div>
            <span className="text-gray-600 dark:text-gray-400">Beginner</span>
          </div>
          <div className="flex items-center">
            <div className="w-10 h-2 bg-gradient-to-r from-blue-400 to-blue-500 dark:from-blue-600 dark:to-blue-500 rounded-full mr-2"></div>
            <span className="text-gray-600 dark:text-gray-400">Intermediate</span>
          </div>
          <div className="flex items-center">
            <div className="w-10 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-2"></div>
            <span className="text-gray-600 dark:text-gray-400">Advanced</span>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
              },
            },
          }}
        >
          {skillCategories.slice(0, 3).map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 py-2 sm:py-3 px-3 sm:px-4">
                <div className="flex items-center">
                  <div className="p-1.5 sm:p-2 bg-white/20 rounded-lg mr-2 sm:mr-3">{category.icon}</div>
                  <h3 className="text-base sm:text-lg font-bold text-white">{category.name}</h3>
                </div>
              </div>
              <div className="p-3 sm:p-5">
                <div className="space-y-2 sm:space-y-3">
                  {category.skills.slice(0, 4).map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      onMouseEnter={() => setHoveredSkill(`${category.name}-${skill.name}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className="group"
                    >
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors text-sm flex items-center">
                          <ChevronRight className="h-3 w-3 mr-1 text-purple-500" />
                          {skill.name}
                        </span>
                        <span
                          className={`text-xs ${
                            hoveredSkill === `${category.name}-${skill.name}`
                              ? `text-${category.color}-600 dark:text-${category.color}-400 font-medium`
                              : "text-gray-500 dark:text-gray-400"
                          } transition-colors`}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-2 rounded-full transition-all duration-1000 ${
                            skill.level > 75
                              ? "bg-gradient-to-r from-purple-500 to-pink-500"
                              : skill.level > 50
                                ? "bg-gradient-to-r from-blue-400 to-blue-500 dark:from-blue-600 dark:to-blue-500"
                                : "bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-600"
                          }`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

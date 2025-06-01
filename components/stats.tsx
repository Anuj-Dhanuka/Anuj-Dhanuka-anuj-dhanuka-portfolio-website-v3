"use client"

import { motion } from "framer-motion"
import { Award, Code, Users, Briefcase } from "lucide-react"

export function Stats() {
  const stats = [
    {
      value: "5+",
      label: "Projects Delivered",
      icon: <Code className="h-6 w-6 text-purple-600" />,
      description: "High-quality web applications",
    },
    {
      value: "1+",
      label: "Year Experience",
      icon: <Users className="h-6 w-6 text-purple-600" />,
      description: "Building digital solutions",
    },
    {
      value: "2",
      label: "Companies",
      icon: <Briefcase className="h-6 w-6 text-purple-600" />,
      description: "Professional work experience",
    },
    {
      value: "95%",
      label: "Client Satisfaction",
      icon: <Award className="h-6 w-6 text-purple-600" />,
      description: "Consistently exceeding expectations",
    },
  ]

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">{stat.icon}</div>
                <div>
                  <h3 className="text-3xl font-bold">{stat.value}</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

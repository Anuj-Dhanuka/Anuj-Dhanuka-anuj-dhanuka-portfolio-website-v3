"use client"

import { motion } from "framer-motion"
import { Clock, Code, HeartHandshake, Zap, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhyChooseMe() {
  const reasons = [
    {
      icon: <Code className="h-10 w-10 text-purple-600" />,
      title: "Technical Excellence",
      description:
        "Expertise in modern web technologies including React, Next.js, and TypeScript ensures your project is built with best practices and future-proof architecture.",
    },
    {
      icon: <HeartHandshake className="h-10 w-10 text-purple-600" />,
      title: "Client-Focused Approach",
      description:
        "Your business goals drive every decision. I collaborate closely with you to understand your needs and deliver solutions that align with your vision.",
    },
    {
      icon: <Clock className="h-10 w-10 text-purple-600" />,
      title: "Rapid Delivery",
      description:
        "Efficient workflows and focused development practices mean your project gets completed on time without sacrificing quality or attention to detail.",
    },
    {
      icon: <Zap className="h-10 w-10 text-purple-600" />,
      title: "Performance Optimization",
      description:
        "Every project is built with speed and efficiency in mind, ensuring fast load times, smooth interactions, and excellent user experience.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-pink-200/30 dark:bg-pink-900/20 rounded-full blur-3xl"></div>
        </div>

        {/* Section header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300">
            Here's what sets my services apart and why clients consistently choose to work with me
          </p>
        </motion.div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative z-10">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100 dark:border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg w-fit mb-5">{reason.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">{reason.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          className="mt-16 text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 h-12 text-base font-medium"
            onClick={(e) => {
              e.preventDefault()
              const servicesSection = document.getElementById("services")
              if (servicesSection) {
                // Get the navbar height for offset calculation
                const navbar = document.querySelector("header") as HTMLElement
                const navbarHeight = navbar ? navbar.offsetHeight : 80

                // Add offset for better visibility
                const scrollOffset = servicesSection.offsetTop - navbarHeight - 40

                window.scrollTo({
                  top: scrollOffset,
                  behavior: "smooth",
                })

                // Update URL without reloading the page
                window.history.pushState({}, "", "#services")
              }
            }}
          >
            Explore My Services
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

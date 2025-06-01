"use client"

import { motion } from "framer-motion"
import { Lightbulb, Clock, Zap, BarChart, TrendingUp, Sparkles, Target, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export function AIInnovation() {
  const [activeStory, setActiveStory] = useState(0)

  const aiCapabilities = [
    {
      title: "Enhanced Productivity",
      description: "Automate repetitive tasks and streamline workflows to focus on high-value creative work",
      icon: <Zap className="h-6 w-6 text-brand-600" />,
    },
    {
      title: "Time Management",
      description: "Reduce development time with AI-assisted coding, testing, and debugging processes",
      icon: <Clock className="h-6 w-6 text-brand-600" />,
    },
    {
      title: "Creative Solutions",
      description: "Generate innovative ideas and approaches to solve complex business challenges",
      icon: <Lightbulb className="h-6 w-6 text-brand-600" />,
    },
    {
      title: "Data-Driven Insights",
      description: "Leverage AI to analyze data and extract actionable business intelligence",
      icon: <BarChart className="h-6 w-6 text-brand-600" />,
    },
  ]

  const transformationStories = [
    {
      title: "From Idea to Innovation",
      description:
        "AI helped transform a simple concept into a groundbreaking solution, reducing development time by 40% and enabling features that weren't previously possible.",
      icon: <Rocket className="h-6 w-6 text-white" />,
      color: "from-brand-600 to-accent1-600",
    },
    {
      title: "Scaling New Heights",
      description:
        "With AI-powered automation, a startup was able to scale their operations 3x while maintaining the same team size, dramatically improving their market position.",
      icon: <TrendingUp className="h-6 w-6 text-white" />,
      color: "from-accent1-600 to-accent2-600",
    },
    {
      title: "Precision & Perfection",
      description:
        "AI-driven analytics helped identify and resolve user experience issues that traditional methods missed, resulting in a 65% increase in user satisfaction.",
      icon: <Target className="h-6 w-6 text-white" />,
      color: "from-accent2-600 to-brand-600",
    },
  ]

  return (
    <section id="ai-innovation" className="py-16 md:py-20 overflow-hidden relative">
      {/* Simplified gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50/50 to-accent1-50/50 dark:from-brand-900/10 dark:to-accent1-900/10 z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-brand-100 dark:bg-brand-900/30 text-brand-800 dark:text-brand-300 mb-3">
            <Sparkles className="h-4 w-4 mr-2" />
            AI-Powered Development
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Elevating Projects with <span className="gradient-text">AI</span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 text-sm md:text-base">
            Intelligent solutions that adapt and evolve with your business needs
          </p>
        </motion.div>

        {/* AI Benefits Cards - Horizontal layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {aiCapabilities.map((capability, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-neutral-900 rounded-lg shadow-sm p-4 border border-neutral-100 dark:border-neutral-800 hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="flex flex-col h-full">
                <div className="p-2 bg-brand-100 dark:bg-brand-900/30 rounded-lg w-fit mb-3">{capability.icon}</div>
                <h3 className="font-semibold mb-1">{capability.title}</h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 flex-grow">{capability.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Feature Box */}
        <motion.div
          className="bg-white dark:bg-neutral-900 rounded-xl shadow-md overflow-hidden mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="md:flex">
            <div className="md:w-1/2 relative">
              <div className="h-48 md:h-full relative">
                <Image src="/neural-nexus.png" alt="AI Transformation" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
                  <div className="p-6">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">AI Transformation</h3>
                    <p className="text-white/90 text-sm md:text-base max-w-xs">
                      From concept to reality: How AI accelerates your business growth
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-6">
              <h3 className="text-lg font-bold mb-4 gradient-text">The AI Advantage</h3>
              <div className="space-y-3">
                {transformationStories.map((story, index) => (
                  <div key={index} className="flex items-start">
                    <div
                      className={`h-8 w-8 rounded-full bg-gradient-to-r ${story.color} flex items-center justify-center mr-3 flex-shrink-0`}
                    >
                      {story.icon}
                    </div>
                    <div>
                      <p className="font-medium text-sm">{story.title}</p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        {story.description.split(",")[0]}
                      </p>
                    </div>
                  </div>
                ))}
                <div className="pt-2">
                  <Link href="#contact">
                    <Button className="w-full gradient-bg text-white hover:opacity-90 transition-opacity text-sm">
                      Start Your AI Journey
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          className="grid grid-cols-3 gap-4 mb-8"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white dark:bg-neutral-900 rounded-lg p-4 text-center shadow-sm border border-neutral-100 dark:border-neutral-800">
            <p className="text-2xl md:text-3xl font-bold gradient-text">40%</p>
            <p className="text-xs text-neutral-500">Development Time Saved</p>
          </div>
          <div className="bg-white dark:bg-neutral-900 rounded-lg p-4 text-center shadow-sm border border-neutral-100 dark:border-neutral-800">
            <p className="text-2xl md:text-3xl font-bold gradient-text">3x</p>
            <p className="text-xs text-neutral-500">Operational Scaling</p>
          </div>
          <div className="bg-white dark:bg-neutral-900 rounded-lg p-4 text-center shadow-sm border border-neutral-100 dark:border-neutral-800">
            <p className="text-2xl md:text-3xl font-bold gradient-text">65%</p>
            <p className="text-xs text-neutral-500">Increased Satisfaction</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

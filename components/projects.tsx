"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink, Smartphone, Monitor } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, memo } from "react"

// Memoized Image component to prevent unnecessary re-renders
const ProjectImage = memo(({ src, alt }: { src: string; alt: string }) => (
  <Image
    src={src}
    alt={alt}
    fill
    className="object-cover"
    loading="lazy"
  />
))
ProjectImage.displayName = 'ProjectImage'

export function Projects() {
  const [activeProject, setActiveProject] = useState(0)

  const projects = [
    {
      title: "Mopedo",
      description:
        "Mopedo is a responsive single-page React application that showcases a modern urban mobility platform offering Bike Taxi, Food Delivery, and Goods Delivery services. Designed with a clean UI and mobile-first approach, it highlights key features like GPS-tracked rides, fast meal deliveries, and secure parcel transport with real-time tracking and AI-optimized routes.",
      image: "/mopedo-screenshot.png",
      type: "web",
      tags: ["React", "Single-Page App", "Mobile-First Design", "UI/UX"],
      liveLink: "https://mopedo.netlify.app/",
      githubLink: "https://github.com/anujd64",
      results:
        "Built using modular React components with emphasis on performance, usability, and conversion-focused design",
      color: "from-blue-500 to-teal-500",
      icon: <Monitor className="h-5 w-5" />,
    },
    {
      title: "Jobby App",
      description:
        "Jobby App is a responsive job search web application built using React JS, featuring dynamic routing, protected routes, and real-time job listings. Users can log in using the credentials (username: rahul, password: rahul@2021) to access the platform. The app includes job filtering by employment type and salary range, along with detailed job descriptions and company information.",
      image: "/jobby-app-screenshot.png",
      type: "web",
      tags: ["React JS", "API Integration", "Protected Routes", "State Management"],
      liveLink: "https://anujjobbyapp.ccbp.tech",
      results: "Demonstrates skills in API integration, state management with React hooks, and conditional rendering",
      color: "from-indigo-500 to-purple-500",
      icon: <Monitor className="h-5 w-5" />,
      credentials: {
        username: "rahul",
        password: "rahul@2021",
      },
    },
    {
      title: "Levels App",
      description:
        "Developed a quiz application with React Native featuring different categories like Sports, General Knowledge, Current Affairs, and more. Users can test their knowledge, earn points, and compete with others on the leaderboard.",
      images: ["/levels-app-quiz.webp", "/levels-app-categories.webp", "/levels-app-login.webp"],
      type: "mobile",
      tags: ["React Native", "JavaScript", "Mobile Development", "UI/UX Design"],
      githubLink: "https://github.com/Anuj-Dhanuka/levels-app",
      results: "Completed project ahead of schedule with additional features",
      color: "from-purple-500 to-pink-500",
      icon: <Smartphone className="h-5 w-5" />,
    },
    {
      title: "Food Munch",
      description:
        "Food Munch is a fully responsive restaurant landing page built with HTML, CSS, and Bootstrap, designed to showcase a modern dining experience. The site features smooth navigation, visually appealing layouts, and clearly structured sections including menu highlights, customer testimonials, and a reservation call-to-action.",
      image: "/food-munch-screenshot.png",
      type: "web",
      tags: ["HTML", "CSS", "Bootstrap", "Responsive Design"],
      liveLink: "https://anujfoodmunch.ccbp.tech",
      results:
        "Demonstrates strong front-end fundamentals and attention to user experience for the food and hospitality sector",
      color: "from-yellow-500 to-orange-500",
      icon: <Monitor className="h-5 w-5" />,
    },
  ]

  return (
    <section id="projects" className="py-16 md:py-24 overflow-hidden">
      {/* Creative background elements */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900/80 to-gray-950/80 dark:from-black/90 dark:to-gray-950/90"></div>
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-700/40 dark:bg-purple-900/40 mix-blend-overlay filter blur-3xl animate-blob"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-pink-700/40 dark:bg-pink-900/40 mix-blend-overlay filter blur-3xl animate-blob"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/3 w-72 h-72 rounded-full bg-indigo-700/40 dark:bg-indigo-900/40 mix-blend-overlay filter blur-3xl animate-blob"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300">
            Case studies of projects where I've demonstrated leadership and technical expertise
          </p>
        </motion.div>

        {/* Interactive 3D Project Showcase */}
        <div className="relative">
          {/* Project selection tabs */}
          <div className="flex justify-center mb-6 sm:mb-8 overflow-x-auto scrollbar-none">
            <div className="flex gap-2 px-4 py-2 min-w-full sm:min-w-0 sm:px-0">
              {projects.map((project, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`flex-shrink-0 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                    activeProject === index
                      ? `bg-gradient-to-r ${project.color} text-white shadow-md`
                      : "bg-white/90 dark:bg-gray-800/90 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 backdrop-blur-sm"
                  }`}
                  aria-label={`View ${project.title} project`}
                >
                  <span className="flex items-center whitespace-nowrap">
                    {project.icon}
                    <span className="ml-1.5">{project.title}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* 3D Project Display */}
          <div className="relative h-[400px] sm:h-[500px] md:h-[600px] w-full perspective-1000">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className={`absolute inset-0 backface-hidden rounded-2xl overflow-hidden transition-all duration-700 ${
                  activeProject === index ? "z-10 opacity-100" : "opacity-0 pointer-events-none"
                }`}
                initial={false}
                animate={{
                  rotateY: activeProject === index ? 0 : activeProject > index ? -90 : 90,
                  scale: activeProject === index ? 1 : 0.8,
                }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-900/90 z-0"></div>

                {/* Project content with 3D effect */}
                <div className="relative z-10 h-full flex flex-col md:flex-row">
                  {/* Left side - Project showcase */}
                  <div className="h-1/2 md:h-full md:w-3/5 relative overflow-hidden">
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/10 z-10"
                      style={{
                        backgroundImage: `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 60%)`,
                      }}
                    ></div>

                    {project.type === "mobile" ? (
                      // Mobile project - show devices in a creative layout
                      <div className="relative h-full w-full flex items-center justify-center p-8">
                        <div className="relative w-full h-full max-w-3xl mx-auto">
                          {/* Floating devices with perspective */}
                          <motion.div
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30%] h-[70%] z-30"
                            whileInView={{
                              y: [0, -10, 0],
                              rotateY: [0, 5, 0],
                              rotateX: [0, 2, 0],
                            }}
                            transition={{
                              repeat: Number.POSITIVE_INFINITY,
                              duration: 6,
                              ease: "easeInOut",
                            }}
                          >
                            <div className="relative w-full h-full rounded-3xl overflow-hidden border-8 border-gray-800 shadow-2xl">
                              <ProjectImage
                                src={project.images?.[0] || project.image || "/placeholder.svg"}
                                alt={project.title}
                              />
                            </div>
                          </motion.div>

                          <motion.div
                            className="absolute top-1/2 left-[20%] transform -translate-x-1/2 -translate-y-1/2 w-[25%] h-[60%] z-20"
                            whileInView={{
                              y: [0, 10, 0],
                              rotateY: [0, -8, 0],
                              rotateX: [0, -3, 0],
                            }}
                            transition={{
                              repeat: Number.POSITIVE_INFINITY,
                              duration: 7,
                              ease: "easeInOut",
                              delay: 0.5,
                            }}
                          >
                            <div className="relative w-full h-full rounded-3xl overflow-hidden border-8 border-gray-800 shadow-2xl">
                              <ProjectImage
                                src={project.images?.[1] || project.image || "/placeholder.svg"}
                                alt={project.title}
                              />
                            </div>
                          </motion.div>

                          <motion.div
                            className="absolute top-1/2 left-[80%] transform -translate-x-1/2 -translate-y-1/2 w-[25%] h-[60%] z-20"
                            whileInView={{
                              y: [0, 15, 0],
                              rotateY: [0, 8, 0],
                              rotateX: [0, 5, 0],
                            }}
                            transition={{
                              repeat: Number.POSITIVE_INFINITY,
                              duration: 8,
                              ease: "easeInOut",
                              delay: 1,
                            }}
                          >
                            <div className="relative w-full h-full rounded-3xl overflow-hidden border-8 border-gray-800 shadow-2xl">
                              <ProjectImage
                                src={project.images?.[2] || project.image || "/placeholder.svg"}
                                alt={project.title}
                              />
                            </div>
                          </motion.div>

                          {/* Decorative elements */}
                          <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl"></div>
                            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-xl"></div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      // Web project - show in a creative browser mockup
                      <div className="relative h-full w-full flex items-center justify-center p-8">
                        <motion.div
                          className="relative w-full max-w-3xl mx-auto aspect-video rounded-lg overflow-hidden shadow-2xl"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ProjectImage
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                          />
                        </motion.div>
                      </div>
                    )}
                  </div>

                  {/* Right side - Project info */}
                  <div className="h-1/2 md:h-full md:w-2/5 p-4 sm:p-6 md:p-8 flex flex-col justify-center overflow-y-auto">
                    <div className="space-y-6">
                      <div>
                        <h3
                          className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${project.color}`}
                        >
                          {project.title}
                        </h3>
                        <div className={`h-1 w-16 bg-gradient-to-r ${project.color} rounded-full mt-2 mb-4`}></div>
                      </div>

                      <div>
                        <p className="text-gray-300 leading-relaxed">{project.description}</p>
                        {project.credentials && (
                          <div className="mt-3 p-3 bg-gray-800/80 border border-gray-700/50 rounded-md">
                            <p className="text-sm font-medium text-gray-300 mb-1">Login Credentials:</p>
                            <div className="flex flex-col space-y-1">
                              <div className="flex items-center">
                                <span className="text-xs text-gray-400 w-20">Username:</span>
                                <span className="text-xs font-mono bg-gray-700/50 px-2 py-0.5 rounded text-green-400">
                                  {project.credentials.username}
                                </span>
                              </div>
                              <div className="flex items-center">
                                <span className="text-xs text-gray-400 w-20">Password:</span>
                                <span className="text-xs font-mono bg-gray-700/50 px-2 py-0.5 rounded text-green-400">
                                  {project.credentials.password}
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className={`px-3 py-1 bg-gray-800/80 text-gray-300 rounded-full text-sm border border-gray-700/50 backdrop-blur-sm`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="pt-4 flex space-x-4">
                        {project.liveLink && (
                          <Link
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} live site`}
                          >
                            <Button
                              className={`group bg-gradient-to-r ${project.color} hover:opacity-90 text-white relative overflow-hidden`}
                            >
                              <span className="relative z-10 flex items-center">
                                View Live Site
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                              </span>
                              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            </Button>
                          </Link>
                        )}

                        {/* GitHub button removed as requested */}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Project navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeProject === index
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 scale-125"
                    : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

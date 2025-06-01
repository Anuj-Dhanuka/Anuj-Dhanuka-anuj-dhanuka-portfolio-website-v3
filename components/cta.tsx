"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Mail } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 to-pink-900/90 z-0"></div>

      {/* Animated background shapes */}
      <div className="absolute inset-0 z-0 opacity-20">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-purple-500"
          animate={{
            x: [0, 30, 0],
            y: [0, 40, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 20,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-pink-500"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 25,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full bg-purple-600"
          animate={{
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 18,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Looking for a Dedicated Developer to Join Your Team?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed">
            I'm currently open to new opportunities where I can contribute my technical skills and problem-solving
            abilities. With experience in React, Next.js, and modern web technologies, I'm ready to make an impact on
            your team.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-purple-900 hover:bg-gray-100 text-base px-5 py-2 h-10 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <Mail className="mr-2 h-5 w-5" /> Contact Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white bg-purple-600/30 hover:bg-white/10 text-base px-5 py-2 h-10 rounded-lg"
            >
              <Download className="mr-2 h-5 w-5" /> Download Resume
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

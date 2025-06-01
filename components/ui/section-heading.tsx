"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  title: string
  subtitle: string
  center?: boolean
  className?: string
}

export function SectionHeading({ title, subtitle, center = true, className = "" }: SectionHeadingProps) {
  return (
    <motion.div
      className={`${center ? "text-center" : ""} max-w-3xl ${center ? "mx-auto" : ""} mb-16 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      <div className="h-1 w-20 gradient-bg rounded-full mb-6 mx-auto"></div>
      <p className="text-neutral-600 dark:text-neutral-300">{subtitle}</p>
    </motion.div>
  )
}

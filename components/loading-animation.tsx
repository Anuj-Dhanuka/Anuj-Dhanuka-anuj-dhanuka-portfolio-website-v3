"use client"

import { motion } from "framer-motion"

export function LoadingAnimation() {
  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-950 z-50 flex items-center justify-center">
      <div className="relative">
        <motion.div
          className="w-16 h-16 border-4 border-gray-200 dark:border-gray-800 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute top-0 left-0 w-16 h-16 border-t-4 border-purple-600 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute top-0 left-0 w-16 h-16 border-t-4 border-pink-600 rounded-full opacity-70"
          animate={{ rotate: -180 }}
          transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>
    </div>
  )
}

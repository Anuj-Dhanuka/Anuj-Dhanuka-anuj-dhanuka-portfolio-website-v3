"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { useState } from "react"

// Add this server action to handle email sending
async function sendContactEmail(formData: {
  name: string
  phone: string
  email: string
  message: string
}) {
  try {
    // Send the form data to your email using a fetch request
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    if (!response.ok) {
      throw new Error("Failed to send email")
    }

    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false }
  }
}

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Send the form data to your email
      const result = await sendContactEmail(formState)

      setIsSubmitting(false)
      setSubmitSuccess(result.success)

      if (result.success) {
        // Reset form on success
        setFormState({
          name: "",
          phone: "",
          email: "",
          message: "",
        })

        // Reset success message after 3 seconds
        setTimeout(() => {
          setSubmitSuccess(false)
        }, 3000)
      }
    } catch (error) {
      console.error("Error in form submission:", error)
      setIsSubmitting(false)
      setSubmitSuccess(false)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Information</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300">
            I'm currently open to new opportunities. Feel free to reach out to discuss how I can contribute to your
            team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Recruitment Information</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm actively seeking roles in web development and software engineering. Available for interviews and
                technical assessments at your convenience.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4 group">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg group-hover:scale-110 transition-transform">
                  <Mail className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a
                    href="mailto:anujd973@gmail.com"
                    className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    aria-label="Send email to anujd973@gmail.com"
                  >
                    anujd973@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg group-hover:scale-110 transition-transform">
                  <Phone className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <a
                    href="tel:+918978264705"
                    className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    aria-label="Call +91 8978264705"
                  >
                    +91 8978264705
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg group-hover:scale-110 transition-transform">
                  <MapPin className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">Vizianagaram, Andhra Pradesh</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="font-semibold mb-3">Work Preferences</h4>
              <div className="flex flex-wrap gap-2">
                <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-lg inline-block hover:scale-105 transition-transform">
                  Available for immediate start
                </div>
                <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-4 py-2 rounded-lg inline-block hover:scale-105 transition-transform">
                  Open to remote work
                </div>
                <div className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 px-4 py-2 rounded-lg inline-block hover:scale-105 transition-transform">
                  Willing to relocate
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="pointer-events-auto"
          >
            <form
              className="space-y-4 sm:space-y-6 bg-white dark:bg-gray-900 p-4 sm:p-6 rounded-xl shadow-sm relative z-10 interactive-high"
              onSubmit={handleSubmit}
            >
              <div className="space-y-1 sm:space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="border-gray-300 dark:border-gray-700 focus:border-purple-500 focus:ring-purple-500 transition-colors pointer-events-auto interactive"
                  required
                />
              </div>

              <div className="space-y-1 sm:space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="+1 (123) 456-7890"
                  className="border-gray-300 dark:border-gray-700 focus:border-purple-500 focus:ring-purple-500 transition-colors pointer-events-auto interactive"
                  required
                />
              </div>

              <div className="space-y-1 sm:space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="you@example.com"
                  className="border-gray-300 dark:border-gray-700 focus:border-purple-500 focus:ring-purple-500 transition-colors pointer-events-auto interactive"
                  required
                />
              </div>

              <div className="space-y-1 sm:space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  className="min-h-[100px] sm:min-h-[120px] border-gray-300 dark:border-gray-700 focus:border-purple-500 focus:ring-purple-500 transition-colors pointer-events-auto interactive"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-1.5 h-9 sm:h-10 relative overflow-hidden group"
                disabled={isSubmitting}
              >
                <span className="relative z-10 flex items-center">
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send
                    className={`ml-2 h-4 w-4 ${isSubmitting ? "animate-pulse" : "group-hover:translate-x-1 transition-transform"}`}
                  />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></span>
              </Button>

              {submitSuccess && (
                <motion.div
                  className="text-center text-sm text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 p-2 rounded-md"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              <p className="text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-2">
                I typically respond to all inquiries within 24 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

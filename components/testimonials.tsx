"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"
import { useState } from "react"

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Working with this tech leader transformed our startup. Their ability to translate our vision into a scalable product while leading the development team was exceptional.",
      author: "Priya Sharma",
      position: "CEO, FinTech Startup",
      avatar: "/confident-leader.png",
    },
    {
      quote:
        "An outstanding team leader who delivered our e-commerce platform ahead of schedule. Their technical expertise and leadership skills made a complex project seem effortless.",
      author: "Rahul Mehta",
      position: "CTO, Retail Solutions",
      avatar: "/confident-tech-leader.png",
    },
    {
      quote:
        "Exceptional problem-solver and leader. They took our healthcare app from concept to market in record time, navigating complex requirements while mentoring junior developers.",
      author: "Dr. Anjali Patel",
      position: "Founder, MedConnect",
      avatar: "/confident-female-physician.png",
    },
    {
      quote:
        "Their leadership on our SaaS platform development was invaluable. They built and managed a high-performing team that delivered a product that exceeded our expectations.",
      author: "Vikram Singh",
      position: "Product Director, CloudSolutions",
      avatar: "/confident-tech-leader.png",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300">
            What clients and colleagues say about my leadership and technical expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute -top-6 -left-6 text-purple-200 dark:text-purple-800">
              <Quote size={64} />
            </div>
            <Card className="bg-white dark:bg-gray-900 border-none shadow-lg p-2">
              <CardContent className="pt-6">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <p className="text-lg text-gray-700 dark:text-gray-300 italic">"{testimonials[activeIndex].quote}"</p>
                  <div className="flex items-center space-x-4 pt-4">
                    <Avatar className="h-12 w-12 border-2 border-purple-200">
                      <AvatarImage
                        src={testimonials[activeIndex].avatar || "/placeholder.svg"}
                        alt={testimonials[activeIndex].author}
                      />
                      <AvatarFallback>
                        {testimonials[activeIndex].author &&
                          testimonials[activeIndex].author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">{testimonials[activeIndex].author}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{testimonials[activeIndex].position}</p>
                    </div>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`cursor-pointer transition-all duration-300 ${
                  activeIndex === index ? "opacity-100 scale-105" : "opacity-60 hover:opacity-80"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <Card
                  className={`h-full border-none ${
                    activeIndex === index
                      ? "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 shadow-md"
                      : "bg-white dark:bg-gray-900"
                  }`}
                >
                  <CardContent className="p-4 h-full flex flex-col justify-between">
                    <div className="flex items-center space-x-3 mb-2">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                        <AvatarFallback>
                          {testimonial.author &&
                            testimonial.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium text-sm">{testimonial.author}</h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.position}</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-3">
                      {testimonial.quote.substring(0, 100)}...
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FAQ() {
  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "I offer a comprehensive range of digital services including website development, mobile app development, Shopify store creation, and WordPress solutions. Each service is tailored to meet your specific business needs and goals.",
    },
    {
      question: "How long have you been in the industry?",
      answer:
        "I have over 1 year of experience in the tech industry, working with startups and established businesses. During this time, I've successfully delivered numerous projects and built high-quality digital solutions.",
    },
    {
      question: "What is your development process like?",
      answer:
        "My development process typically includes discovery and planning, design, development, testing, deployment, and post-launch support. I emphasize collaboration throughout, ensuring you're involved and informed at every stage.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while a complex application could take 2-3 months. During our initial consultation, I'll provide a more accurate timeline based on your specific requirements.",
    },
    {
      question: "What technologies do you specialize in?",
      answer:
        "I specialize in modern web and mobile technologies including React, Next.js, Node.js, React Native, and TypeScript. For e-commerce, I'm proficient with Shopify and WordPress/WooCommerce. I stay updated with the latest technologies to ensure your product is built using the most appropriate and future-proof solutions.",
    },
    {
      question: "Do you provide support after the project is completed?",
      answer:
        "Yes, I offer post-launch support to ensure your digital product continues to perform optimally. This includes bug fixes, minor updates, and regular maintenance to keep everything running smoothly.",
    },
    {
      question: "How do you structure your pricing?",
      answer:
        "I offer both project-based and hourly pricing models. For well-defined projects, I typically provide a fixed price quote. For ongoing work or projects with evolving requirements, an hourly rate might be more appropriate. I'm transparent about costs and will recommend the most suitable approach for your needs.",
    },
    {
      question: "Can you work with my existing website or application?",
      answer:
        "Yes, I can work with existing websites and applications. I'll conduct a thorough review to understand the current structure and recommend the best approach for enhancements or modifications.",
    },
  ]

  return (
    <section id="faq" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300">
            Find answers to common questions about my services, process, and expertise
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white dark:bg-gray-900 rounded-xl shadow-md relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Accordion type="single" collapsible className="w-full pointer-events-auto">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="pointer-events-auto">
                  <AccordionTrigger className="text-left px-6 hover:no-underline hover:text-purple-600 dark:hover:text-purple-400 font-medium pointer-events-auto">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-gray-300 pointer-events-auto">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <div className="mt-10 text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Don't see your question here? Feel free to reach out directly.
            </p>
            <Link href="#contact">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                Ask Your Question
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

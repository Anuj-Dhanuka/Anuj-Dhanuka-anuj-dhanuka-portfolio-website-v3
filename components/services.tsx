"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Smartphone, ShoppingBag, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { smoothScroll } from "@/utils/smooth-scroll"

export function Services() {
  const services = [
    {
      title: "Modern Web Applications",
      description:
        "Custom, responsive web applications built with React, Next.js, and modern frameworks that deliver exceptional user experiences and performance.",
      icon: <Globe className="h-10 w-10 text-brand-600" />,
      features: ["React & Next.js", "Responsive Design", "Performance Optimization", "API Integration"],
      marketDemand: "high",
      growthRate: "+34% YoY",
    },
    {
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android with focus on performance, offline capabilities, and seamless user experience.",
      icon: <Smartphone className="h-10 w-10 text-brand-600" />,
      features: ["React Native", "Native Performance", "Offline Capabilities", "Push Notifications"],
      marketDemand: "high",
      growthRate: "+28% YoY",
    },
    {
      title: "E-commerce Solutions",
      description:
        "Custom Shopify stores and integrations that convert visitors into customers with optimized checkout flows and personalized shopping experiences.",
      icon: <ShoppingBag className="h-10 w-10 text-brand-600" />,
      features: ["Shopify Development", "Custom Themes", "Payment Integration", "Conversion Optimization"],
      marketDemand: "growing",
      growthRate: "+41% YoY",
    },
    {
      title: "AI-Enhanced Applications",
      description:
        "Integrating artificial intelligence and machine learning capabilities into web and mobile applications to create smarter, more personalized experiences.",
      icon: <Cpu className="h-10 w-10 text-brand-600" />,
      features: ["AI Integration", "Personalization", "Predictive Features", "Data Analysis"],
      marketDemand: "high",
      growthRate: "+63% YoY",
    },
  ]

  return (
    <section id="services" className="py-16 md:py-24 relative overflow-hidden">
      {/* Enhanced glass effect background with improved gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-purple-50/80 to-pink-50/70 dark:from-gray-900/90 dark:via-purple-950/80 dark:to-pink-950/70 backdrop-blur-lg z-0"></div>

      {/* Modern geometric pattern overlay */}
      <motion.div
        className="absolute inset-0 opacity-5 dark:opacity-15 z-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
      linear-gradient(90deg, rgba(139, 92, 246, 0.03) 1px, transparent 1px),
      linear-gradient(180deg, rgba(139, 92, 246, 0.03) 1px, transparent 1px)
    `,
            backgroundSize: "40px 40px",
            backgroundPosition: "0 0",
            boxShadow: "inset 0 0 100px rgba(139, 92, 246, 0.05)",
            borderTop: "1px solid rgba(139, 92, 246, 0.05)",
            borderBottom: "1px solid rgba(139, 92, 246, 0.05)",
          }}
        ></div>
      </motion.div>

      {/* Animated floating gradient orbs with improved positioning and effects */}
      <motion.div
        className="absolute top-1/4 left-1/5 w-72 h-72 rounded-full bg-purple-400/20 dark:bg-purple-600/15 blur-3xl z-0"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 15,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-pink-400/15 dark:bg-pink-600/10 blur-3xl z-0"
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 18,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute top-2/3 right-1/3 w-64 h-64 rounded-full bg-indigo-400/10 dark:bg-indigo-600/15 blur-3xl z-0"
        animate={{
          x: [0, 20, 0],
          y: [0, -30, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 20,
          ease: "easeInOut",
          delay: 5,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Development Services</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-600 to-accent1-600 mx-auto mb-6"></div>
          <p className="text-neutral-600 dark:text-neutral-300">
            Reliable, cost-effective solutions that deliver measurable business results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full border border-white/20 dark:border-white/5 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
              <CardHeader className="pb-3 border-b border-gray-100 dark:border-gray-800">
                <div className="p-2 sm:p-3 bg-brand-100 dark:bg-brand-900/30 rounded-lg w-fit mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="h-8 w-8 sm:h-10 sm:w-10 text-brand-600 group-hover:text-brand-500 transition-colors" />
                </div>
                <CardTitle className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  Website Development
                </CardTitle>
                <CardDescription className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                  Professional, responsive websites that represent your brand and convert visitors into customers.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4 sm:pt-5">
                <h4 className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2 sm:mb-3 uppercase tracking-wide">
                  Key Features
                </h4>
                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  <li className="flex items-start text-sm">
                    <div className="h-5 w-5 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3 group-hover:scale-110 transition-transform">
                      <div className="h-1.5 w-1.5 rounded-full bg-brand-600 group-hover:bg-brand-500 transition-colors"></div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-800 dark:text-gray-200">Fast delivery</span>
                      <span className="text-gray-600 dark:text-gray-400"> - 2-4 week turnaround</span>
                    </div>
                  </li>
                  <li className="flex items-start text-sm">
                    <div className="h-5 w-5 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3 group-hover:scale-110 transition-transform">
                      <div className="h-1.5 w-1.5 rounded-full bg-brand-600 group-hover:bg-brand-500 transition-colors"></div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-800 dark:text-gray-200">Mobile-friendly</span>
                      <span className="text-gray-600 dark:text-gray-400"> - Works on all devices</span>
                    </div>
                  </li>
                  <li className="flex items-start text-sm">
                    <div className="h-5 w-5 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3 group-hover:scale-110 transition-transform">
                      <div className="h-1.5 w-1.5 rounded-full bg-brand-600 group-hover:bg-brand-500 transition-colors"></div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-800 dark:text-gray-200">SEO optimized</span>
                      <span className="text-gray-600 dark:text-gray-400"> - Improves visibility</span>
                    </div>
                  </li>
                  <li className="flex items-start text-sm">
                    <div className="h-5 w-5 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3 group-hover:scale-110 transition-transform">
                      <div className="h-1.5 w-1.5 rounded-full bg-brand-600 group-hover:bg-brand-500 transition-colors"></div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-800 dark:text-gray-200">Easy to update</span>
                      <span className="text-gray-600 dark:text-gray-400"> - No technical skills needed</span>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full border border-white/20 dark:border-white/5 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
              <div className="absolute -top-1 right-3 sm:right-4 z-10">
                <div className="relative">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-b-md shadow-md font-medium text-xs flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 sm:h-3.5 sm:w-3.5 mr-1 sm:mr-1.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zm7-10a1 1 0 01.707.293l.707.707L15.414 4a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2A1 1 0 0112 4l1-1-.707-.707A1 1 0 0112 2zm.707 10.293a1 1 0 00-1.414 0l-2 2a1 1 0 001.414 1.414l1-1 1 1a1 1 0 001.414-1.414l-2-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Most Popular
                  </div>
                  <div className="absolute -right-1 -top-1 w-2 h-2 bg-purple-600 transform rotate-45"></div>
                  <div className="absolute -left-1 -top-1 w-2 h-2 bg-pink-600 transform rotate-45"></div>
                </div>
              </div>
              <CardHeader className="pb-3 border-b border-gray-100 dark:border-gray-800">
                <div className="p-2 sm:p-3 bg-brand-100 dark:bg-brand-900/30 rounded-lg w-fit mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="h-8 w-8 sm:h-10 sm:w-10 text-brand-600 group-hover:text-brand-500 transition-colors" />
                </div>
                <CardTitle className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  Mobile App Development
                </CardTitle>
                <CardDescription className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                  Custom mobile applications that enhance customer engagement and streamline business operations.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4 sm:pt-5">
                <h4 className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2 sm:mb-3 uppercase tracking-wide">
                  Key Features
                </h4>
                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  <li className="flex items-start text-sm">
                    <div className="h-5 w-5 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3 group-hover:scale-110 transition-transform">
                      <div className="h-1.5 w-1.5 rounded-full bg-brand-600 group-hover:bg-brand-500 transition-colors"></div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-800 dark:text-gray-200">Cross-platform</span>
                      <span className="text-gray-600 dark:text-gray-400"> - iOS and Android</span>
                    </div>
                  </li>
                  <li className="flex items-start text-sm">
                    <div className="h-5 w-5 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3 group-hover:scale-110 transition-transform">
                      <div className="h-1.5 w-1.5 rounded-full bg-brand-600 group-hover:bg-brand-500 transition-colors"></div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-800 dark:text-gray-200">User-friendly</span>
                      <span className="text-gray-600 dark:text-gray-400"> - Intuitive interfaces</span>
                    </div>
                  </li>
                  <li className="flex items-start text-sm">
                    <div className="h-5 w-5 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3 group-hover:scale-110 transition-transform">
                      <div className="h-1.5 w-1.5 rounded-full bg-brand-600 group-hover:bg-brand-500 transition-colors"></div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-800 dark:text-gray-200">Offline capability</span>
                      <span className="text-gray-600 dark:text-gray-400"> - Works without internet</span>
                    </div>
                  </li>
                  <li className="flex items-start text-sm">
                    <div className="h-5 w-5 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3 group-hover:scale-110 transition-transform">
                      <div className="h-1.5 w-1.5 rounded-full bg-brand-600 group-hover:bg-brand-500 transition-colors"></div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-800 dark:text-gray-200">Ongoing support</span>
                      <span className="text-gray-600 dark:text-gray-400"> - Regular updates</span>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full border border-white/20 dark:border-white/5 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
              <CardHeader className="pb-3 border-b border-gray-100 dark:border-gray-800">
                <div className="p-2 sm:p-3 bg-brand-100 dark:bg-brand-900/30 rounded-lg w-fit mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <ShoppingBag className="h-8 w-8 sm:h-10 sm:w-10 text-brand-600 group-hover:text-brand-500 transition-colors" />
                </div>
                <CardTitle className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  E-commerce Solutions
                </CardTitle>
                <CardDescription className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                  Online stores that drive sales with seamless shopping experiences and secure payment processing.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4 sm:pt-5">
                <h4 className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2 sm:mb-3 uppercase tracking-wide">
                  Key Features
                </h4>
                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  <li className="flex items-start text-sm">
                    <div className="h-5 w-5 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3 group-hover:scale-110 transition-transform">
                      <div className="h-1.5 w-1.5 rounded-full bg-brand-600 group-hover:bg-brand-500 transition-colors"></div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-800 dark:text-gray-200">Shopify expertise</span>
                      <span className="text-gray-600 dark:text-gray-400"> - Custom stores</span>
                    </div>
                  </li>
                  <li className="flex items-start text-sm">
                    <div className="h-5 w-5 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3 group-hover:scale-110 transition-transform">
                      <div className="h-1.5 w-1.5 rounded-full bg-brand-600 group-hover:bg-brand-500 transition-colors"></div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-800 dark:text-gray-200">Payment integration</span>
                      <span className="text-gray-600 dark:text-gray-400"> - Multiple options</span>
                    </div>
                  </li>
                  <li className="flex items-start text-sm">
                    <div className="h-5 w-5 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3 group-hover:scale-110 transition-transform">
                      <div className="h-1.5 w-1.5 rounded-full bg-brand-600 group-hover:bg-brand-500 transition-colors"></div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-800 dark:text-gray-200">Inventory management</span>
                      <span className="text-gray-600 dark:text-gray-400"> - Automated systems</span>
                    </div>
                  </li>
                  <li className="flex items-start text-sm">
                    <div className="h-5 w-5 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3 group-hover:scale-110 transition-transform">
                      <div className="h-1.5 w-1.5 rounded-full bg-brand-600 group-hover:bg-brand-500 transition-colors"></div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-800 dark:text-gray-200">Marketing tools</span>
                      <span className="text-gray-600 dark:text-gray-400"> - Increase conversions</span>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Call to action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link href="#contact" onClick={(e) => smoothScroll(e, "#contact")} aria-label="Navigate to contact section">
            <Button className="bg-gradient-to-r from-purple-600/90 to-pink-600/90 backdrop-blur-sm text-white px-8 py-6 h-12 text-base font-medium hover:from-purple-600 hover:to-pink-600 transition-all relative overflow-hidden group">
              <span className="relative z-10">Looking for Dev Help? I’m Here</span>
              <span className="absolute inset-0 bg-gradient-to-r from-pink-600/90 to-purple-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { AIInnovation } from "@/components/ai-innovation"
import { Education } from "@/components/education"
import { Mentor } from "@/components/mentor"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import { ScrollProgress } from "@/components/scroll-progress"
import { LoadingWrapper } from "@/components/loading-wrapper"
import { SectionWrapper } from "@/components/section-wrapper"
import { WhyChooseMe } from "@/components/why-choose-me"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 overflow-hidden">
      <ScrollProgress />
      <Navbar />
      <LoadingWrapper>
        <main className="overflow-hidden">
          <SectionWrapper id="home">
            <Hero />
          </SectionWrapper>
          <SectionWrapper id="about">
            <About />
          </SectionWrapper>
          <SectionWrapper id="why-choose-me">
            <WhyChooseMe />
          </SectionWrapper>
          <SectionWrapper id="services">
            <Services />
          </SectionWrapper>
          <SectionWrapper id="skills">
            <Skills />
          </SectionWrapper>
          <SectionWrapper id="experience">
            <Experience />
          </SectionWrapper>
          <SectionWrapper id="projects">
            <Projects />
          </SectionWrapper>
          <SectionWrapper id="ai-innovation">
            <AIInnovation />
          </SectionWrapper>
          <SectionWrapper id="education">
            <Education />
          </SectionWrapper>
          <SectionWrapper id="mentor">
            <Mentor />
          </SectionWrapper>
          <SectionWrapper id="testimonials">
            <Testimonials />
          </SectionWrapper>
          <SectionWrapper>
            <CTA />
          </SectionWrapper>
          <SectionWrapper id="faq">
            <FAQ />
          </SectionWrapper>
          <SectionWrapper id="contact">
            <Contact />
          </SectionWrapper>
        </main>
        <Footer />
        <BackToTop />
      </LoadingWrapper>
    </div>
  )
}

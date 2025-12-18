"use client"

import Link from "next/link"
import { ArrowRight, Users, Book, Laptop } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedSection } from "@/components/animated-section"

export default function Hero() {
  return (
    <section className="relative bg-background py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
          >
            Bridging Educational Gaps and Building <span className="text-primary">Brighter Futures</span> for Every
            Child and Youth
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto"
          >
            QEFAI is committed to ensuring that every child and youth, regardless of background, has access to quality
            education and the tools needed to succeed. Our programs provide educational support, technological skills,
            enlightenment, and mentorship.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link
              href="/programs"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition font-semibold"
            >
              Learn More
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition font-semibold"
            >
              Get Involved
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: Book,
                title: "Educational & Academic Support",
                description:
                  "Free tutoring, access to learning materials, scholarship guidance for students in need and guiding them toward healthy, informed lifestyle choices that affect their education.",
              },
              {
                icon: Laptop,
                title: "Digital Empowerment & Professional Skills",
                description:
                  "Preparing young people for the future of work, Covering everything related to digital literacy, technology skills, cyber awareness, personal development, employability training, and career readiness.",
              },
              {
                icon: Users,
                title: "Community Engagement & Volunteer Development",
                description:
                  "Strengthening communities through outreach, awareness campaigns while also training and supporting volunteers who drive QEFAI's mission.",
              },
            ].map((item, index) => (
              <AnimatedSection key={index} delay={0.6 + index * 0.15}>
                <div className="bg-muted p-8 rounded-lg hover:shadow-lg transition-shadow">
                  <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

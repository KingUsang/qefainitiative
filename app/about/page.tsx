"use client"

import type React from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { AboutStory } from "@/components/about-story"
import { AboutValues } from "@/components/about-values"
import AboutTeam from "@/components/about-team"
import { motion } from "framer-motion"

const About: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4 text-balance"
            >
              About QEFAI
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl text-pretty"
            >
              Learn about our mission, vision, and the dedicated team working to make quality education accessible for
              every student.
            </motion.p>
          </div>
        </section>

        <AboutStory />

        {/* Mission, Vision, Objectives */}
        <section className="py-16 px-4 bg-muted">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card p-8 rounded-lg shadow"
              >
                <h3 className="text-2xl font-bold mb-4 text-primary">Mission</h3>
                <p className="text-card-foreground">Bridging educational gaps and building brighter futures</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-card p-8 rounded-lg shadow"
              >
                <h3 className="text-2xl font-bold mb-4 text-primary">Vision</h3>
                <p className="text-card-foreground">
                  A world where every child and youth has access to quality education and opportunity
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <AboutValues />
        <AboutTeam />
      </main>
      <Footer />
    </>
  )
}

export default About

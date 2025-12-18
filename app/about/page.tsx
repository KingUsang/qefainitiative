"use client"

import type React from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { AboutStory } from "@/components/about-story"
import { AboutValues } from "@/components/about-values"
import AboutTeam from "@/components/about-team"

const About: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-primary text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">About QEFAI</h1>
            <p className="text-lg md:text-xl text-primary-100 max-w-2xl text-pretty">
              Learn about our mission, vision, and the dedicated team working to make quality education accessible for
              every student.
            </p>
          </div>
        </section>

        <AboutStory />

        {/* Mission, Vision, Objectives */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow">
                <h3 className="text-2xl font-bold mb-4 text-primary">Mission</h3>
                <p className="text-gray-700">Bridging educational gaps and building brighter futures</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow">
                <h3 className="text-2xl font-bold mb-4 text-primary">Vision</h3>
                <p className="text-gray-700">
                  A world where every child and youth has access to quality education and opportunity
                </p>
              </div>
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

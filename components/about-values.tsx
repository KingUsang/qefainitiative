"use client"

import { Target, Heart, Users, Award } from "lucide-react"

export function AboutValues() {
  const values = [
    {
      icon: Target,
      title: "Equity & Inclusion",
      description: "Education should be available to everyone, regardless of circumstances.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We maintain honesty and transparency in all our actions.",
    },
    {
      icon: Users,
      title: "Teamwork",
      description: "Building strong networks of support among students and mentors.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Maintaining high standards in all our programs and services.",
    },
    {
      icon: Target,
      title: "Impact",
      description: "Focusing on measurable positive change in students' lives.",
    },
  ]

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Our Core Values</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          These principles guide everything we do and shape how we serve our students and community.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <IconComponent className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

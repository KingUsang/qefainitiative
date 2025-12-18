"use client"
import { Users, BookOpen, TrendingUp, Globe } from "lucide-react"
import Link from "next/link"

export default function ImpactSection() {
  const stats = [
    {
      icon: Users,
      number: "150+",
      label: "Students Supported",
    },
    {
      icon: BookOpen,
      number: "500+",
      label: "Tutoring Sessions",
    },
    {
      icon: TrendingUp,
      number: "92%",
      label: "Success Rate",
    },
    {
      icon: Globe,
      number: "1000+",
      label: "Lives Impacted",
    },
  ]

  return (
    <section className="py-16 md:py-20 px-4 bg-primary text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission to Transform Education</h2>

        <p className="text-lg text-primary-100 mb-12 max-w-2xl mx-auto">
          Together, we can make quality education accessible to every student who needs it.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-primary px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold"
          >
            Become a Volunteer
          </Link>

          <Link
            href="/donate"
            className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-primary transition font-semibold"
          >
            Make a Donation
          </Link>
        </div>

        {/*<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div key={index} className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition text-center">
                <IconComponent className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            )
          })}
        </div>*/}
      </div>
    </section>
  )
}

"use client"

import Link from "next/link"
import { ArrowRight, Users, Heart, Briefcase } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative bg-white py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Bridging Educational Gaps and Building <span className="text-primary">Brighter Futures</span> for Every
            Child and Youth
          </h1>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            QEFAI is committed to ensuring that every child and youth, regardless of background, has access to quality
            education and the tools needed to succeed. Our programs provide educational support, technological skills,
            enlightenment, and mentorship.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/programs"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition font-semibold"
            >
              Learn More
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition font-semibold"
            >
              Get Involved
            </Link>
          </div>

          {/* Focus Areas */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-gray-50 p-8 rounded-lg">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Educational Support</h3>
              <p className="text-gray-600">
                Free tutoring, access to learning materials, and scholarship guidance for students in need.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Enlightenment Programs</h3>
              <p className="text-gray-600">
                Awareness on mental health, personal hygiene, anti-cultism, sex education, and life-impacting topics.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <Briefcase className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mentorship & Career</h3>
              <p className="text-gray-600">
                Connecting young individuals with opportunities for support, inspiration, and growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

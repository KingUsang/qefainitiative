"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Users, ArrowRight, CheckCircle, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function VolunteerPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-primary text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Volunteer Team</h1>
            <p className="text-lg md:text-xl text-primary-100 max-w-2xl">
              Make a difference in the lives of students and youth. Apply to volunteer with QEFAI and help us bridge
              educational gaps.
            </p>
          </div>
        </section>

        {/* Why Volunteer Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Volunteer With Us?</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow border-l-4 border-primary">
                <Users className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-xl font-semibold mb-2">Make Real Impact</h3>
                <p className="text-gray-700">
                  Directly support students and youth through education, mentorship, and skill development programs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow border-l-4 border-primary">
                <CheckCircle className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-xl font-semibold mb-2">Personal Growth</h3>
                <p className="text-gray-700">
                  Develop leadership skills, gain meaningful experience, and build lasting relationships with
                  like-minded individuals.
                </p>
              </div>
            </div>

            {/* Application Section */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h2>
              <p className="text-gray-700 mb-6">
                Fill out our volunteer application form. We're looking for passionate individuals who want to contribute
                to our mission of providing quality education and support to every child and youth.
              </p>

              <div className="mb-6 text-center">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeO1h1xHtj4EkPUtba_lqsnVq_2J7wEPunJ0CQdFjnVlX-sDQ/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition font-semibold text-lg"
                >
                  Open Volunteer Application Form
                  <ExternalLink className="w-5 h-5" />
                </a>
                <p className="text-sm text-gray-600 mt-4">The form will open in a new tab</p>
              </div>

              <p className="text-sm text-gray-600 text-center">
                Your application will be reviewed by our team and we'll contact you within 2-3 business days.
              </p>
            </div>

            {/* Contact Alternative */}
            <div className="mt-12 p-6 bg-blue-50 rounded-lg">
              <h3 className="font-semibold mb-2">Have Questions?</h3>
              <p className="text-gray-700 mb-4">Feel free to reach out to us directly through our contact form.</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-700 transition"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

"use client"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { CheckCircle, Heart } from "lucide-react"

export default function DonationSuccess() {
  return (
    <>
      <Header />
      <main>
        <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="text-center max-w-md">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4 text-gray-900">Thank You for Your Generosity!</h1>
            <p className="text-gray-700 mb-2 text-lg">Your donation has been successfully processed.</p>
            <p className="text-gray-600 mb-8">
              We've sent a confirmation email to{" "}
              <span className="font-semibold">
                {typeof window !== "undefined"
                  ? new URLSearchParams(window.location.search).get("email") || "your email"
                  : "your email"}
              </span>
              . Your generous contribution will directly support students and help us continue our mission to provide
              quality education for all.
            </p>

            <div className="bg-white p-6 rounded-lg shadow mb-8 border-l-4 border-green-500">
              <p className="text-sm text-gray-600">
                A receipt and donation certificate have been sent to your email address. You can track your donation's
                impact through our programs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition font-semibold"
              >
                Back to Home
              </Link>
              <Link
                href="/programs"
                className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary-50 transition font-semibold"
              >
                Learn About Programs
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t">
              <p className="text-gray-600 mb-4">Want to make another donation?</p>
              <Link
                href="/donate"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-700 transition"
              >
                <Heart className="w-5 h-5" />
                Donate Again
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

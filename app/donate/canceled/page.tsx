"use client"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { XCircle } from "lucide-react"

export default function DonationCanceled() {
  return (
    <>
      <Header />
      <main>
        <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-orange-50 to-red-50">
          <div className="text-center max-w-md">
            <XCircle className="w-20 h-20 text-orange-500 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4 text-gray-900">Payment Canceled</h1>
            <p className="text-gray-700 mb-8">
              Your donation was not completed. No charges were made to your account. Feel free to try again whenever
              you're ready.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/donate"
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition font-semibold"
              >
                Try Again
              </Link>
              <Link
                href="/"
                className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary-50 transition font-semibold"
              >
                Back to Home
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t">
              <p className="text-gray-600 mb-4">Have questions about our programs?</p>
              <Link href="/contact" className="text-primary font-semibold hover:text-primary-700 transition">
                Contact Us
              </Link>
              <p className="text-gray-600 text-sm mt-4">Secure payment powered by Paystack</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

"use client"

import type React from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { DonateHero } from "@/components/donate-hero"
import DonationForm from "@/components/donation-form"
import { DonationImpact } from "@/components/donation-impact"
import { DonationStats } from "@/components/donation-stats"

const Donate: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <DonateHero />

        {/* Donation Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12">
              <DonationForm />
              <DonationImpact />
            </div>

            <DonationStats />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Donate

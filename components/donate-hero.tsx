"use client"

import { Heart } from "lucide-react"

export function DonateHero() {
  return (
    <section className="relative bg-primary text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance flex items-center gap-3">
          <Heart className="w-10 h-10" />
          Support Our Mission
        </h1>
        <p className="text-lg md:text-xl text-primary-100 max-w-2xl text-pretty">
          Your donation directly supports quality education and opportunities for students in need. Every contribution
          makes a real difference.
        </p>
      </div>
    </section>
  )
}

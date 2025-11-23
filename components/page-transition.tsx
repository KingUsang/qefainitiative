"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    console.log("[v0] Page transition triggered for:", pathname)

    // Fade out current content
    setIsVisible(false)

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" })

    // After fade out, update content and fade in
    const timer = setTimeout(() => {
      setIsVisible(true)
      console.log("[v0] Page transition complete")
    }, 300)

    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <div className={`transition-opacity duration-300 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`}>
      {children}
    </div>
  )
}

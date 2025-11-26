"use client"
import Link from "next/link"
import { Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <img src="/logo.png" alt="logo" className="h-12"/>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Bridging educational gaps and building brighter futures by providing resources, mentorship, and
              opportunities to youths across communities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-primary-foreground/80 hover:text-primary-foreground transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-primary-foreground/80 hover:text-primary-foreground transition">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/qefainitiative?igsh=bXdvOGd4YWYwdDdj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/quality-education-for-all-initiative/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/QEFAInitiative"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/70 text-sm">
          <p>© 2025 Quality Education For All Initiative. All rights reserved.</p>
          <p>Built with ❤️ by kingusang</p>
        </div>
      </div>
    </footer>
  )
}

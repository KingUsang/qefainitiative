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
              <a
                href="https://www.tiktok.com/@qefainitiative8?_r=1&_t=ZS-91m9ts5fvdt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition"
              >
                <svg fill="currentColor" width="24px" height="24px" viewBox="0 0 24 24" id="tiktok" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color"><path id="primary" d="M21,7V9a1,1,0,0,1-1,1,8,8,0,0,1-4-1.08V15.5A6.5,6.5,0,1,1,6.53,9.72a1,1,0,0,1,1.47.9v2.52a.92.92,0,0,1-.28.62,2.49,2.49,0,0,0,2,4.23A2.61,2.61,0,0,0,12,15.35V3a1,1,0,0,1,1-1h2.11a1,1,0,0,1,1,.83A4,4,0,0,0,20,6,1,1,0,0,1,21,7Z"></path></svg>
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

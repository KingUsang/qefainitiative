import type { Metadata, Viewport } from "next"
import type React from "react"
import { Geist, Geist_Mono } from "next/font/google"
import { PageTransition } from "@/components/page-transition"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

/*export const metadata: Metadata = {
  title: "QEFAI - Quality Education For All Initiative",
  description:
    "Bridging educational gaps and building brighter futures through mentorship, resources, and opportunities for every student.",
  icons: {
    icon: [
      {
        url: "/logo_square.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logo_square.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/logo_square.png",
  },
}*/


export const metadata: Metadata = {
  title: "QEFAI - Quality Education For All Initiative",
  description:
    "QEFAI is a non-profit organization dedicated to bridging educational gaps through mentorship, resources, digital skills, and empowerment programs.",
  keywords: [
    "QEFAI",
    "Quality Education For All",
    "education NGO",
    "mentorship",
    "digital skills training",
    "scholarship support",
    "youth empowerment",
    "free tutoring Nigeria",
    "tech education for youth"
  ],
  authors: [{ name: "QEFAI Team" }],
  creator: "QEFAI",
  publisher: "QEFAI",
  robots: "index, follow",
  metadataBase: new URL("https://qefainitiative.vercel.app"), 
  alternates: {
    canonical: "https://qefainitiative.vercel.app",
  },
  icons: {
    icon: "/logo_square.png",
    apple: "/logo_square.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        
      </head>
      <body className={`${geist.className} font-sans antialiased`}>
        <PageTransition>{children}</PageTransition>
        <Toaster />
      </body>
    </html>
  )
}

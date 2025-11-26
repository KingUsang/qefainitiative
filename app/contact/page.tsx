"use client"

import type React from "react"
import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Mail, Phone, MapPin, Send, Users, Heart, Handshake, Instagram, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormData = z.infer<typeof contactSchema>

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitMessage(null)
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to send email")
      }

      setSubmitMessage({ type: "success", text: "Thank you for your message! We'll get back to you soon." })
      reset()
    } catch (error) {
      setSubmitMessage({ type: "error", text: "Something went wrong. Please try again." })
      console.error("Error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "qefainitiative@gmail.com",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+234 813 1912 751",
      description: "Mon-Fri 8AM-6PM GMT+01:00",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "University of Lagos, Lagos, Nigeria",
      description: "Our main office location",
    },
  ]

  const involvementOptions = [
    {
      icon: Users,
      title: "Become a Volunteer",
      description: "Join our team of dedicated volunteers and make a direct impact on students' lives.",
      benefits: ["Community impact", "Training provided", "Professional development"],
      cta: "Apply to Volunteer",
    },
    {
      icon: Handshake,
      title: "Partner with Us",
      description: "Collaborate with QEFAI to expand our reach and enhance our programs.",
      benefits: ["Brand visibility", "CSR opportunities", "Community engagement"],
      cta: "Explore Partnership",
    },
    {
      icon: Heart,
      title: "Sponsor a Student",
      description: "Directly support a student's educational journey through our sponsorship program.",
      benefits: ["Direct impact", "Progress updates", "Recognition opportunities"],
      cta: "Sponsor Now",
    },
  ]

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/qefainitiative?igsh=bXdvOGd4YWYwdDdj", label: "Instagram" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/quality-education-for-all-initiative/",
      label: "LinkedIn",
    },
    { icon: Twitter, href: "https://x.com/QEFAInitiative", label: "Twitter" },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-primary text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Get Involved</h1>
            <p className="text-lg md:text-xl text-primary-100 max-w-2xl text-pretty">
              Ready to make a difference? Contact us to learn more about our programs or explore ways to support our
              mission.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Contact Form */}
              <div className="md:col-span-2 bg-white p-8 rounded-lg shadow">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

                {submitMessage && (
                  <div
                    className={`mb-6 p-4 rounded-lg ${
                      submitMessage.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}
                  >
                    {submitMessage.text}
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      {...register("name")}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      {...register("email")}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Subject *</label>
                    <input
                      type="text"
                      {...register("subject")}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Message subject"
                    />
                    {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <textarea
                      {...register("message")}
                      rows={5}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your message"
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-700 transition disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <p className="text-gray-700 mb-8">
                  We'd love to hear from you! Whether you're a student looking for support, a volunteer wanting to help,
                  or an organization interested in partnership, we're here to connect.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon
                    return (
                      <div key={index} className="flex gap-4">
                        <IconComponent className="w-6 h-6 text-primary flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold">{info.title}</h3>
                          <p className="text-gray-700 font-medium">{info.content}</p>
                          <p className="text-gray-600 text-sm">{info.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Social Media */}
                <div className="mt-8 pt-8 border-t">
                  <h3 className="font-semibold mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon
                      return (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-primary transition"
                          aria-label={social.label}
                        >
                          <IconComponent className="w-6 h-6" />
                        </a>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Get Involved Options */}
            <div className="border-t pt-16">
              <h2 className="text-3xl font-bold mb-4 text-center">Ways to Get Involved</h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                There are many ways to support our mission and make a meaningful impact in students' lives.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                {involvementOptions.map((option, index) => {
                  const IconComponent = option.icon
                  return (
                    <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                      <IconComponent className="w-12 h-12 text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                      <p className="text-gray-700 mb-4">{option.description}</p>
                      <div className="mb-4">
                        <p className="text-sm font-semibold mb-2">Benefits:</p>
                        <ul className="space-y-1">
                          {option.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="text-sm text-gray-600">
                              • {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Link
                        href={
                          option.cta === "Explore Partnership"
                            ? "/partnership"
                            : option.cta === "Apply to Volunteer"
                              ? "/volunteer"
                              : "/donate"
                        }
                        className="block w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition text-sm font-medium text-center"
                      >
                        {option.cta}
                      </Link>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Contact

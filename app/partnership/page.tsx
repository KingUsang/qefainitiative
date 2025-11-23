"use client"

import type React from "react"
import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Handshake, Building2, Users, TrendingUp, Award, Globe, Target, Send, CheckCircle2 } from "lucide-react"

const partnershipSchema = z.object({
  organizationName: z.string().min(2, "Organization name must be at least 2 characters"),
  contactName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  partnershipType: z.string().min(1, "Please select a partnership type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type PartnershipFormData = z.infer<typeof partnershipSchema>

const Partnership: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PartnershipFormData>({
    resolver: zodResolver(partnershipSchema),
  })

  const onSubmit = async (data: PartnershipFormData) => {
    setIsSubmitting(true)
    setSubmitMessage(null)
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.contactName,
          email: data.email,
          subject: `Partnership Inquiry from ${data.organizationName} - ${data.partnershipType}`,
          message: `Organization: ${data.organizationName}\nContact: ${data.contactName}\nPhone: ${data.phone}\nPartnership Type: ${data.partnershipType}\n\nMessage:\n${data.message}`,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to send email")
      }

      setSubmitMessage({
        type: "success",
        text: "Thank you for your interest! We'll review your partnership inquiry and get back to you soon.",
      })
      reset()
    } catch (error) {
      setSubmitMessage({ type: "error", text: "Something went wrong. Please try again." })
      console.error("Error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const partnershipTypes = [
    {
      icon: Building2,
      title: "Corporate Partnership",
      description:
        "Partner with us to fulfill your CSR objectives while making a lasting impact on students' education.",
      benefits: ["Brand visibility", "Employee engagement", "Tax benefits", "Impact reporting"],
    },
    {
      icon: Globe,
      title: "Community Partnership",
      description: "Local organizations and community groups working together to expand educational access.",
      benefits: ["Community recognition", "Collaborative programs", "Resource sharing", "Local impact"],
    },
    {
      icon: Users,
      title: "Educational Institution",
      description: "Schools, universities, and training centers collaborating to enhance student outcomes.",
      benefits: ["Knowledge exchange", "Program development", "Student access", "Research opportunities"],
    },
    {
      icon: TrendingUp,
      title: "Funding & Grants",
      description: "Foundations and donors providing financial support for our programs and initiatives.",
      benefits: ["Direct impact", "Progress tracking", "Recognition", "Strategic alignment"],
    },
  ]

  const benefits = [
    {
      icon: Target,
      title: "Aligned Mission",
      description: "Work with an organization committed to quality education and student success.",
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Public acknowledgment of your contribution through our channels and events.",
    },
    {
      icon: CheckCircle2,
      title: "Measurable Impact",
      description: "Regular updates and reports on the tangible impact of your partnership.",
    },
    {
      icon: Users,
      title: "Community Engagement",
      description: "Opportunities for your team to volunteer and engage with students directly.",
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-primary text-white py-20">
          <div className="container mx-auto px-4">
            <Handshake className="w-16 h-16 mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Partner With QEFAI</h1>
            <p className="text-lg md:text-xl text-primary-100 max-w-2xl text-pretty">
              Join us in our mission to provide quality education for all. Together, we can expand our reach and create
              lasting impact for underserved students.
            </p>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Partnership Opportunities</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              We work with diverse partners to amplify our impact. Explore the partnership model that best fits your
              organization.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {partnershipTypes.map((type, index) => {
                const IconComponent = type.icon
                return (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                    <IconComponent className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                    <p className="text-gray-700 mb-4">{type.description}</p>
                    <div>
                      <p className="text-sm font-semibold mb-2">Benefits:</p>
                      <ul className="space-y-1">
                        {type.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="text-sm text-gray-600 flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Partner Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Why Partner with QEFAI?</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              When you partner with us, you gain more than just a CSR initiative—you become part of a movement
              transforming lives through education.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <div key={index} className="text-center">
                    <IconComponent className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Partnership Inquiry Form */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-3xl">
            <div className="bg-white p-8 rounded-lg shadow">
              <h2 className="text-2xl font-bold mb-2">Let's Work Together</h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below and we'll get back to you within 2-3 business days to discuss how we can
                collaborate.
              </p>

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
                  <label className="block text-sm font-medium mb-2">Organization Name *</label>
                  <input
                    type="text"
                    {...register("organizationName")}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your organization"
                  />
                  {errors.organizationName && (
                    <p className="text-red-500 text-sm mt-1">{errors.organizationName.message}</p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Contact Name *</label>
                    <input
                      type="text"
                      {...register("contactName")}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your name"
                    />
                    {errors.contactName && <p className="text-red-500 text-sm mt-1">{errors.contactName.message}</p>}
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
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      {...register("phone")}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+234 XXX XXX XXXX"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Partnership Type *</label>
                    <select
                      {...register("partnershipType")}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select type</option>
                      <option value="Corporate Partnership">Corporate Partnership</option>
                      <option value="Community Partnership">Community Partnership</option>
                      <option value="Educational Institution">Educational Institution</option>
                      <option value="Funding & Grants">Funding & Grants</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.partnershipType && (
                      <p className="text-red-500 text-sm mt-1">{errors.partnershipType.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Tell Us More *</label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tell us about your organization and how you'd like to partner with us"
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
                      Submit Partnership Inquiry
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Partnership

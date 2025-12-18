"use client"

import type React from "react"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Users, Heart, Briefcase, ArrowRight, CheckCircle, Cpu, Megaphone } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedSection } from "@/components/animated-section"

const Programs: React.FC = () => {
  const programs = [
    {
      id: "education",
      title: "Educational Support Programs",
      icon: Users,
      color: "primary",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Free tutoring, access to learning materials, and scholarship guidance for students in need.",
      features: [
        "Personalized learning paths",
        "Flexible scheduling options",
        "Online and hybrid learning formats",
        "Academic tutoring and support",
        "Resource accessibility assistance",
      ],
      impact: {
        students: "150+",
        sessions: "500+",
        successRate: "92%",
      },
    },
    {
      id: "technological",
      title: "Technological Skills Development",
      icon: Cpu,
      color: "primary",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description:
        "Equipping youths with essential digital skills and emerging tech knowledge to thrive in a fast-evolving world.",
      features: [
        "Digital literacy training",
        "Coding and programming courses",
        "Emerging technology workshops",
        "Exciting Hackathons",
        "Tech career preparation",
      ],
      impact: {
        students: "120+",
        sessions: "400+",
        successRate: "90%",
      },
    },
    {
      id: "enlightenment",
      title: "Enlightenment Programs",
      icon: Heart,
      color: "primary",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description:
        "Creating awareness around mental health, personal hygiene, anti-cultism, sex education, and other life-impacting topics.",
      features: [
        "Mental health awareness sessions",
        "Personal hygiene education",
        "Anti-cultism campaigns",
        "Sex education workshops",
        "Life skills development",
      ],
      impact: {
        students: "80+",
        sessions: "200+",
        successRate: "88%",
      },
    },
    {
      id: "mentorship",
      title: "Mentorship & Career Guidance",
      icon: Briefcase,
      color: "primary",
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description:
        "Connecting young individuals with opportunities for support, inspiration, and growth on their academic and career journeys.",
      features: [
        "One-on-one mentoring",
        "Career assessment and planning",
        "Resume and interview preparation",
        "Industry networking opportunities",
        "Professional development workshops",
      ],
      impact: {
        students: "100+",
        sessions: "300+",
        successRate: "95%",
      },
    },
    {
      id: "outreach",
      title: "Outreach Programs",
      icon: Megaphone,
      color: "primary",
      image: "/community.jpeg",
      description:
        "Expanding our impact through physical engagements in schools, communities, and local events—bringing education, empowerment, and enlightenment directly to the people.",
      features: [
        "School and community sensitization visits",
        "Digital literacy and basic tech skills training",
        "Health and personal hygiene awareness",
        "Academic support initiatives",
        "Educational resource distribution",
      ],
      impact: {
        communities: "20+",
        beneficiaries: "1,000+",
        volunteers: "50+",
      },
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-primary text-white py-20">
          <div className="container mx-auto px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4 text-balance"
            >
              Our Programs
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl text-pretty"
            >
              Comprehensive programs designed to support students through every aspect of their educational journey and
              beyond.
            </motion.p>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            {programs.map((program, index) => {
              const IconComponent = program.icon
              const isEven = index % 2 === 0

              return (
                <AnimatedSection key={program.id} delay={index * 0.1} direction={isEven ? "left" : "right"}>
                  <div
                    className={`mb-16 grid md:grid-cols-2 gap-8 items-center ${!isEven && "md:grid-cols-2 md:[&>*:first-child]:order-2"}`}
                  >
                    <div>
                      <img
                        src={program.image || "/placeholder.svg"}
                        alt={program.title}
                        className="rounded-lg shadow-lg w-full"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <IconComponent className="w-8 h-8 text-primary" />
                        <h2 className="text-3xl font-bold text-foreground">{program.title}</h2>
                      </div>
                      <p className="text-muted-foreground mb-6">{program.description}</p>

                      {/* Features */}
                      <div className="mb-8">
                        <p className="font-semibold mb-3 text-foreground">Program Features:</p>
                        <ul className="space-y-2">
                          {program.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2">
                              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                              <span className="text-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Impact Stats */}
                      {/*<div className="grid grid-cols-3 gap-4 mb-8 bg-gray-50 p-4 rounded-lg">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">{program.impact.students}</div>
                          <div className="text-sm text-gray-600">Students Served</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">{program.impact.sessions}</div>
                          <div className="text-sm text-gray-600">Sessions Held</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">{program.impact.successRate}</div>
                          <div className="text-sm text-gray-600">Success Rate</div>
                        </div>
                      </div>*/}

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                          href="/volunteer"
                          className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition font-semibold"
                        >
                          Become a Volunteer
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                          href="/donate"
                          className="flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition font-semibold"
                        >
                          Support Program
                        </Link>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </section>

        {/* CTA Section */}
        <AnimatedSection>
          <section className="py-16 px-4">
            <div className="container mx-auto text-center max-w-2xl">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Ready to Transform Your Educational Journey?</h2>
              <p className="text-muted-foreground mb-8">
                Join thousands of students who have already benefited from our comprehensive programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/apply"
                  className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition font-semibold"
                >
                  Apply Now
                </Link>
                <Link
                  href="/learn-more"
                  className="border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition font-semibold"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>
      <Footer />
    </>
  )
}

export default Programs

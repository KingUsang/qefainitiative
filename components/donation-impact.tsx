"use client"

import { Check } from "lucide-react"

export function DonationImpact() {
  const impacts = [
    {
      amount: 1000,
      impact: "Provides learning materials for 1 student",
    },
    {
      amount: 2500,
      impact: "Funds 5 hours of tutoring sessions",
    },
    {
      amount: 5000,
      impact: "Supports 1 student for a month",
    },
    {
      amount: 10000,
      impact: "Sponsors a student's mentorship program",
    },
    {
      amount: 25000,
      impact: "Funds a tech skills workshop for 20 students",
    },
    {
      amount: 50000,
      impact: "Provides full support for 1 student for a semester",
    },
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Your Impact</h2>
      <div className="space-y-4">
        {impacts.map((item, index) => (
          <div key={index} className="flex gap-4 bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition">
            <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-primary">₦{item.amount.toLocaleString()}</p>
              <p className="text-gray-700 text-sm">{item.impact}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

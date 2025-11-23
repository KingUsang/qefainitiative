"use client"

import type React from "react"
import { useState } from "react"
import { Heart } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface DonorInfo {
  fullName: string
  email: string
  phone: string
  message: string
}

const DonationForm: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [donorInfo, setDonorInfo] = useState<DonorInfo>({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  })
  const { toast } = useToast()

  const predefinedAmounts = [1000, 2500, 5000, 10000, 25000, 50000]

  const isFormValid =
    donorInfo.fullName.trim() !== "" &&
    donorInfo.email.trim() !== "" &&
    donorInfo.phone.trim() !== "" &&
    (selectedAmount !== null || customAmount.trim() !== "")

  const handleDonate = async (amount: number) => {
    if (!isFormValid) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch("/api/create-checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount,
          donor: donorInfo,
        }),
      })

      const data = await response.json()

      if (data.url) {
        toast({
          title: "Processing Donation",
          description: `Thank you, ${donorInfo.fullName}! Redirecting to payment...`,
        })
        window.location.href = data.url
      } else if (data.error) {
        toast({
          title: "Error",
          description: data.error,
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error:", error)
      toast({
        title: "Error",
        description: "Failed to initiate donation. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleCustomDonate = () => {
    const amount = Number.parseFloat(customAmount)
    if (amount > 0) {
      handleDonate(amount)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setDonorInfo((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Choose Your Donation Amount</h2>

      <div className="mb-8 space-y-4">
        <h3 className="text-lg font-semibold">Donor Information</h3>

        <div>
          <label htmlFor="fullName" className="block text-sm font-medium mb-1">
            Full Name *
          </label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            value={donorInfo.fullName}
            onChange={handleInputChange}
            placeholder="Enter your full name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email *
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={donorInfo.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1">
              Phone Number *
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={donorInfo.phone}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            value={donorInfo.message}
            onChange={handleInputChange}
            placeholder="Share why you're supporting QEFAI"
            rows={3}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {/* Predefined Amounts */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {predefinedAmounts.map((amount) => (
          <button
            key={amount}
            onClick={() => {
              setSelectedAmount(amount)
              setCustomAmount("")
            }}
            className={`py-4 px-4 rounded-lg font-semibold transition ${
              selectedAmount === amount ? "bg-primary text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            ₦{amount.toLocaleString()}
          </button>
        ))}
      </div>

      {/* Custom Amount */}
      <div className="mb-6">
        <label htmlFor="customAmount" className="block text-sm font-medium mb-2">
          Custom Amount
        </label>
        <div className="flex gap-2">
          <div className="flex items-center border rounded-lg px-3">
            <span className="text-gray-600">₦</span>
            <input
              id="customAmount"
              type="number"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value)
                setSelectedAmount(null)
              }}
              placeholder="Enter amount"
              min="1"
              step="100"
              className="flex-1 px-2 py-2 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Donate Button */}
      <button
        onClick={() => {
          const amount = customAmount ? Number.parseFloat(customAmount) : selectedAmount ? selectedAmount : 0
          if (amount > 0) {
            handleDonate(amount)
          }
        }}
        disabled={isLoading || !isFormValid}
        className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-700 transition disabled:opacity-50 font-semibold flex items-center justify-center gap-2"
      >
        <Heart className="w-5 h-5" />
        {isLoading ? "Processing..." : "Donate Now"}
      </button>

      <p className="text-center text-gray-600 text-sm mt-4">Secure payment powered by Paystack</p>
    </div>
  )
}

export default DonationForm

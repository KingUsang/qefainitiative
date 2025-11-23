import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { amount, donor } = await request.json()

    if (!amount || amount < 1) {
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 })
    }

    const paystackSecretKey = process.env.PAYSTACK_SECRET_KEY

    if (!paystackSecretKey) {
      console.error("PAYSTACK_SECRET_KEY is not set in environment variables")
      return NextResponse.json(
        {
          error: "Payment system not configured. Please add PAYSTACK_SECRET_KEY to your environment variables.",
        },
        { status: 500 },
      )
    }

    const baseUrl = request.headers.get("origin") || `https://${request.headers.get("host")}`

    const paystackResponse = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${paystackSecretKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: donor?.email || "donor@example.com",
        amount: amount * 100, // Paystack expects amount in kobo (cents)
        metadata: {
          donor_name: donor?.fullName || "Anonymous",
          donor_phone: donor?.phone || "",
          donor_message: donor?.message || "",
        },
        callback_url: `${baseUrl}/api/paystack-callback`,
      }),
    })

    const data = await paystackResponse.json()

    if (!paystackResponse.ok) {
      console.error("Paystack error:", data)
      return NextResponse.json(
        {
          error: data.message || "Failed to initialize payment. Please check your Paystack configuration.",
        },
        { status: 500 },
      )
    }

    return NextResponse.json({ url: data.data.authorization_url }, { status: 200 })
  } catch (error) {
    console.error("Checkout error:", error)
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 })
  }
}

"use client"

export function DonationStats() {
  return (
    <div className="mt-16 bg-gray-50 p-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Why Support QEFAI?</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <div className="text-4xl font-bold text-primary mb-2">150+</div>
          <p className="text-gray-700">Students Directly Supported</p>
        </div>
        <div>
          <div className="text-4xl font-bold text-primary mb-2">92%</div>
          <p className="text-gray-700">Academic Success Rate</p>
        </div>
        <div>
          <div className="text-4xl font-bold text-primary mb-2">100%</div>
          <p className="text-gray-700">Transparent Use of Funds</p>
        </div>
      </div>
    </div>
  )
}

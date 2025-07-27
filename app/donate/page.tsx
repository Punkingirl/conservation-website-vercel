"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

// Step indicators component
const StepIndicator = ({ currentStep }: { currentStep: number }) => {
  const steps = [
    { number: 1, label: "CHOOSE" },
    { number: 2, label: "DETAILS" },
    { number: 3, label: "PAYMENT" },
    { number: 4, label: "FINAL" },
  ]

  return (
    <div className="flex justify-between mb-12 border-b">
      {steps.map((step) => (
        <div
          key={step.number}
          className={`relative pb-4 px-4 text-center flex-1 ${
            currentStep === step.number ? "text-dark-green font-medium" : "text-stone-grey"
          }`}
        >
          <div className="text-sm md:text-base font-montserrat">{`${step.number}.${step.label}`}</div>
          {currentStep === step.number && <div className="absolute bottom-0 left-0 w-full h-1 bg-sea-green"></div>}
        </div>
      ))}
    </div>
  )
}

export default function DonatePage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [donationType, setDonationType] = useState<"single" | "monthly">("single")
  const [donationAmount, setDonationAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState("")
  const [formData, setFormData] = useState({
    isBusinessDonation: false,
    name: "",
    email: "",
    message: "",
    anonymousDonation: false,
    title: "",
    phone: "",
    address: "",
  })
  const [paymentMethod, setPaymentMethod] = useState<"credit" | "direct">("credit")
  const [cardData, setCardData] = useState({
    cardholderName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement

    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement
      setFormData({
        ...formData,
        [name]: checked,
      })
    } else {
      setFormData({
        ...formData,
        [name]: value,
      })
    }
  }

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCardData({
      ...cardData,
      [name]: value,
    })
  }

  const handleAmountSelect = (amount: number) => {
    setDonationAmount(amount)
    setCustomAmount("")
  }

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value)
    setDonationAmount(null)
  }

  const getActualAmount = () => {
    if (donationAmount) return donationAmount
    if (customAmount) return Number.parseFloat(customAmount)
    return 0
  }

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
      window.scrollTo(0, 0)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      window.scrollTo(0, 0)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    nextStep() // Move to final confirmation step
  }

  // Render different form steps based on currentStep
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold mb-6 font-montserrat text-dark-green">Choose donation type and amount</h2>

            {/* Donation Type Toggle */}
            <div className="flex mb-6 border rounded-md overflow-hidden">
              <button
                className={`flex-1 py-3 px-4 text-center font-montserrat ${
                  donationType === "single" ? "bg-dark-green text-white" : "bg-gray-100 text-charcoal"
                }`}
                onClick={() => setDonationType("single")}
              >
                Single Donation
              </button>
              <button
                className={`flex-1 py-3 px-4 text-center font-montserrat ${
                  donationType === "monthly" ? "bg-dark-green text-white" : "bg-gray-100 text-charcoal"
                }`}
                onClick={() => setDonationType("monthly")}
              >
                Monthly Donation
              </button>
            </div>

            <div>
              <h3 className="font-medium mb-3 font-montserrat text-charcoal">Select amount</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                {[25, 50, 100, 200].map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    className={`py-3 px-4 border rounded-md font-montserrat ${
                      donationAmount === amount
                        ? "bg-dark-green text-white border-dark-green"
                        : "bg-white hover:bg-gray-50 text-charcoal"
                    }`}
                    onClick={() => handleAmountSelect(amount)}
                  >
                    ${amount}
                  </button>
                ))}
              </div>

              <div className="mt-4">
                <label htmlFor="customAmount" className="block text-sm font-medium text-charcoal mb-1 font-montserrat">
                  Or enter custom amount
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-stone-grey sm:text-sm">$</span>
                  </div>
                  <input
                    type="number"
                    name="customAmount"
                    id="customAmount"
                    className="pl-7 block w-full border-gray-300 rounded-md border p-2 focus:ring-sea-green focus:border-sea-green"
                    placeholder="Other amount"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-8">
              <button
                type="button"
                onClick={nextStep}
                disabled={!donationAmount && !customAmount}
                className="bg-sea-green text-white px-6 py-3 rounded-md hover:bg-spring-green disabled:opacity-50 disabled:cursor-not-allowed font-montserrat"
              >
                Continue <ChevronRight className="inline ml-1 w-4 h-4" />
              </button>
            </div>
          </div>
        )

      case 2:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6 font-montserrat text-dark-green">Enter your details</h2>

            <div className="space-y-4">
              {/* Title (optional, now first) */}
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-charcoal mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="block w-full border-gray-300 rounded-md border p-2 focus:ring-sea-green focus:border-sea-green"
                  />
                </div>

              {/* Name (required) */}
                <div>
                <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1">
                  Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name || ''}
                    onChange={handleInputChange}
                    className="block w-full border-gray-300 rounded-md border p-2 focus:ring-sea-green focus:border-sea-green"
                    required
                  />
              </div>

              {/* Email (required) */}
                <div>
                <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1">
                  Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email || ''}
                    onChange={handleInputChange}
                    className="block w-full border-gray-300 rounded-md border p-2 focus:ring-sea-green focus:border-sea-green"
                    required
                  />
                </div>

              {/* Message (optional) */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="block w-full border-gray-300 rounded-md border p-2 focus:ring-sea-green focus:border-sea-green"
                />
              </div>

              {/* Optional fields (phone, address) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="block w-full border-gray-300 rounded-md border p-2 focus:ring-sea-green focus:border-sea-green"
                  />
                </div>
              <div>
                  <label htmlFor="address" className="block text-sm font-medium text-charcoal mb-1">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Search for your address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="block w-full border-gray-300 rounded-md border p-2 focus:ring-sea-green focus:border-sea-green"
                />
                </div>
              </div>

              {/* Anonymous donation checkbox */}
              <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  id="anonymousDonation"
                  name="anonymousDonation"
                  checked={formData.anonymousDonation || false}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-sea-green border-gray-300 rounded focus:ring-sea-green"
                />
                <label htmlFor="anonymousDonation" className="ml-2 block text-sm text-charcoal">
                  I'd like to donate anonymously
                </label>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-6 font-montserrat text-dark-green">Choose payment type</h2>

            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="creditCard"
                  name="paymentMethod"
                  checked={paymentMethod === "credit"}
                  onChange={() => setPaymentMethod("credit")}
                  className="h-4 w-4 text-sea-green border-gray-300 focus:ring-sea-green"
                />
                <label htmlFor="creditCard" className="ml-2 block text-sm text-charcoal">
                  Credit Card
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="radio"
                  id="directCredit"
                  name="paymentMethod"
                  checked={paymentMethod === "direct"}
                  onChange={() => setPaymentMethod("direct")}
                  className="h-4 w-4 text-sea-green border-gray-300 focus:ring-sea-green"
                />
                <label htmlFor="directCredit" className="ml-2 block text-sm text-charcoal">
                  Direct Credit / Bank Transfer
                </label>
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={prevStep}
                className="border border-gray-300 text-charcoal px-6 py-3 rounded-md hover:bg-gray-50 font-montserrat"
              >
                <ChevronLeft className="inline mr-1 w-4 h-4" /> Previous
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="bg-sea-green text-white px-6 py-3 rounded-md hover:bg-spring-green font-montserrat"
                disabled={
                  !formData.anonymousDonation &&
                  (!formData.name.trim() || !formData.email.trim())
                }
              >
                {paymentMethod === "direct" ? "Complete Donation" : "Go to Payment"}
              </button>
            </div>
          </div>
        )

      case 3:
        return paymentMethod === "direct" ? (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6 font-montserrat text-dark-green">Direct Credit Information</h2>

            <div className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="font-bold mb-4 font-montserrat text-dark-green">Bank Account Details</h3>
              <p className="mb-2">
                <strong>Account Name:</strong> Lord Family Trust
              </p>
              <p className="mb-2">
                <strong>Account Number:</strong> XX-XXXX-XXXXXXX-XX
              </p>
              <p className="mb-2">
                <strong>Bank:</strong> BNZ
              </p>
              <p className="mb-4">
                <strong>Reference:</strong> Please use your name as reference
              </p>

              <p className="text-sm text-stone-grey">
                Thank you for your donation of ${getActualAmount()} to support our conservation efforts. Please use the
                bank details above to complete your donation.
              </p>
            </div>

            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={prevStep}
                className="border border-gray-300 text-charcoal px-6 py-3 rounded-md hover:bg-gray-50 font-montserrat"
              >
                <ChevronLeft className="inline mr-1 w-4 h-4" /> Previous
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="bg-sea-green text-white px-6 py-3 rounded-md hover:bg-spring-green font-montserrat"
              >
                Complete
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold mb-6 font-montserrat text-dark-green">Payment Summary</h2>

            <div className="text-3xl font-bold text-sea-green mb-6 font-montserrat">${getActualAmount()}</div>

            <div className="space-y-4">
              <div>
                <label htmlFor="cardholderName" className="sr-only">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  id="cardholderName"
                  name="cardholderName"
                  placeholder="Cardholder Name"
                  value={cardData.cardholderName}
                  onChange={handleCardInputChange}
                  className="block w-full border-gray-300 rounded-md border p-2 focus:ring-sea-green focus:border-sea-green"
                  required
                />
              </div>

              <div>
                <label htmlFor="cardNumber" className="sr-only">
                  Card Number
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={cardData.cardNumber}
                  onChange={handleCardInputChange}
                  className="block w-full border-gray-300 rounded-md border p-2 focus:ring-sea-green focus:border-sea-green"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="expiry" className="sr-only">
                    MM/YY
                  </label>
                  <input
                    type="text"
                    id="expiry"
                    name="expiry"
                    placeholder="MM/YY"
                    value={cardData.expiry}
                    onChange={handleCardInputChange}
                    className="block w-full border-gray-300 rounded-md border p-2 focus:ring-sea-green focus:border-sea-green"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="cvv" className="sr-only">
                    CVV/CVC
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    placeholder="CVV/CVC"
                    value={cardData.cvv}
                    onChange={handleCardInputChange}
                    className="block w-full border-gray-300 rounded-md border p-2 focus:ring-sea-green focus:border-sea-green"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={prevStep}
                className="border border-gray-300 text-charcoal px-6 py-3 rounded-md hover:bg-gray-50 font-montserrat"
              >
                <ChevronLeft className="inline mr-1 w-4 h-4" /> Previous
              </button>
              <button
                type="submit"
                className="bg-sea-green text-white px-6 py-3 rounded-md hover:bg-spring-green w-full md:w-auto font-montserrat"
              >
                Pay Now
              </button>
            </div>
          </form>
        )

      case 4:
        return (
          <div className="text-center space-y-6">
            <div className="text-spring-green text-5xl mb-4">✓</div>
            <h2 className="text-2xl font-bold font-montserrat text-dark-green">Thank You!</h2>
            <p className="text-lg">
              Your {donationType === "monthly" ? "monthly" : "one-time"} donation of ${getActualAmount()} has been
              received.
            </p>
            <p className="mb-8">A receipt has been sent to your email address.</p>

            <div className="mt-8">
              <Link
                href="/"
                className="bg-sea-green text-white px-6 py-3 rounded-md hover:bg-spring-green inline-block font-montserrat"
              >
                Return to Home
              </Link>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <main>
      {/* Navigation */}
      <SiteHeader currentPath="/donate" />

      {/* Hero Section */}
      <div className="relative py-24">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/aerial-drone-view.jpeg"
            alt="Aerial view of Millars Beach Peninsula"
            fill
            className="object-cover"
            priority
          />
 
          <div className="absolute inset-0 bg-dark-green bg-opacity-50"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg font-montserrat">
            We can make a difference
          </h1>
          <p className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg font-montserrat">
            Please donate today.
          </p>
        </div>
      </div>

      {/* Donation Form */}
      <div className="w-full px-4 pb-16 bg-gradient-to-b from-[#f0f7f3] to-[#e6f0ec]">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mt-8 max-w-5xl mx-auto">
          <StepIndicator currentStep={currentStep} />
          {renderStep()}
        </div>
      </div>

      {/* Footer */}
      <SiteFooter />
    </main>
  )
}

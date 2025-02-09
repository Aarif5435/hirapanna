'use client'

import { useState } from 'react'

export default function CheckoutForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    country: '',
    streetAddress: '',
    apartment: '',
    town: '',
    state: '',
    pinCode: '',
    phone: '',
    email: '',
  })

  const [paymentMethod, setPaymentMethod] = useState('bank')
  const [giftCode, setGiftCode] = useState('')
  const [termsAccepted, setTermsAccepted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="flex gap-8 p-8 max-w-7xl mx-auto">
      {/* Billing Details Form */}
      <div className="flex-grow">
        <h1 className="text-2xl font-serif mb-8">Billing details</h1>
        
        <form className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block mb-2">
                First name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-200"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block mb-2">
                Last name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-200"
                required
              />
            </div>
          </div>

          <div>
            <label className="block mb-2">Company name (optional)</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-200"
            />
          </div>

          <div>
            <label className="block mb-2">
              Country / Region <span className="text-red-500">*</span>
            </label>
            <select
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-200"
              required
            >
              <option value="">Select a country</option>
              <option value="India">India</option>
              {/* Add more countries as needed */}
            </select>
          </div>

          <div>
            <label className="block mb-2">
              Street address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-200 mb-2"
              required
            />
            <input
              type="text"
              name="apartment"
              value={formData.apartment}
              onChange={handleInputChange}
              placeholder="Apartment, suite, unit, etc. (optional)"
              className="w-full p-2 border border-gray-200"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">
                Town / City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="town"
                value={formData.town}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-200"
                required
              />
            </div>
            <div>
              <label className="block mb-2">
                State <span className="text-red-500">*</span>
              </label>
              <select
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-200"
                required
              >
                <option value="">Select a state</option>
                <option value="Bihar">Bihar</option>
                {/* Add more states as needed */}
              </select>
            </div>
          </div>

          <div>
            <label className="block mb-2">
              PIN Code <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="pinCode"
              value={formData.pinCode}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-200"
              required
            />
          </div>

          <div>
            <label className="block mb-2">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-200"
              required
            />
          </div>

          <div>
            <label className="block mb-2">
              Email address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-200"
              required
            />
          </div>
        </form>
      </div>

      {/* Order Summary Sidebar */}
      <div className="w-96">
        <div className="bg-white p-6">
          <h2 className="text-2xl font-serif mb-6">Your order</h2>
          
          <div className="border-b pb-4 mb-4">
            <div className="flex justify-between mb-4">
              <span>Exuberant golden Necklace × 1</span>
              <span>$529.00</span>
            </div>
            
            <div className="flex justify-between mb-4">
              <span>Subtotal</span>
              <span>$529.00</span>
            </div>
            
            <div className="flex justify-between text-lg font-medium">
              <span>Total</span>
              <span className="text-orange-500">$529.00</span>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-2">
              <input
                type="radio"
                id="bank"
                checked={paymentMethod === 'bank'}
                onChange={() => setPaymentMethod('bank')}
                className="mt-1"
              />
              <label htmlFor="bank" className="flex-grow">
                <span className="font-medium">Direct bank transfer</span>
                <p className="text-sm text-gray-600 mt-1">
                  Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                </p>
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="cash"
                checked={paymentMethod === 'cash'}
                onChange={() => setPaymentMethod('cash')}
              />
              <label htmlFor="cash">Cash on delivery</label>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-start gap-2 mb-4">
              <input
                type="checkbox"
                id="terms"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="mt-1"
              />
              <label htmlFor="terms" className="text-sm">
                I have read and agree to the website Terms and conditions <span className="text-red-500">*</span>
              </label>
            </div>

            <p className="text-sm text-gray-600 mb-4">
              Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our Privacy policy.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-serif mb-4">Have a Gift Card?</h3>
              <input
                type="text"
                value={giftCode}
                onChange={(e) => setGiftCode(e.target.value)}
                placeholder="Enter your code..."
                className="w-full p-3 border border-gray-200 mb-4"
              />
              <button className="w-full bg-black text-white p-3">
                Apply
              </button>
            </div>

            <button 
              className="w-full bg-black text-white p-3"
              disabled={!termsAccepted}
            >
              Place order
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
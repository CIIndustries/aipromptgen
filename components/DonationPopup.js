'use client'
import { useState, useEffect } from 'react'

export default function DonationPopup() {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const hasSeenDonation = localStorage.getItem('hasSeenDonationPopup')
    if (!hasSeenDonation) {
      setTimeout(() => {
        setShowPopup(true)
      }, 3000)
    }
  }, [])

  const handleClose = () => {
    setShowPopup(false)
    localStorage.setItem('hasSeenDonationPopup', 'true')
  }

  const handleDonate = () => {
    window.open('https://buy.stripe.com/4gMaEY5ud1g0eQh8Iyds40b', '_blank')
    handleClose()
  }

  if (!showPopup) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4 border border-gray-700 relative animate-fadeIn">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
            <span className="text-2xl">❤️</span>
          </div>
          
          <h3 className="text-lg font-semibold text-white mb-2">
            Support AIPromptGen.tech
          </h3>
          
          <p className="text-gray-300 mb-4">
            Help us keep this site free for everyone and completely ad-free!
          </p>
          
          <div className="space-y-2 mb-6">
            <div className="flex items-center justify-center space-x-2">
              <span className="text-green-400">✓</span>
              <span className="text-sm text-gray-300">100% Free</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-green-400">✓</span>
              <span className="text-sm text-gray-300">Ad-Free</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-green-400">✓</span>
              <span className="text-sm text-gray-300">Always Improving</span>
            </div>
          </div>
          
          <div className="flex space-x-3">
            <button
              onClick={handleDonate}
              className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              💝 Donate Now!
            </button>
            <button
              onClick={handleClose}
              className="flex-1 bg-gray-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-700 transition-colors"
            >
              Maybe Later
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

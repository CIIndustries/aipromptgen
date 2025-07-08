'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { showToast } from '../../components/Toast'

export default function TermsPage() {
  const router = useRouter()

  const handleStartUsing = () => {
    router.push('/')
    showToast('Welcome to AIPromptGen Pro!')
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional guidelines and policies for using AIPromptGen Pro
            </p>
            <p className="text-gray-400 mt-2">Last updated: January 15, 2025</p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">📋 Service Agreement</h3>
              <p className="text-gray-300 mb-4">
                By accessing AIPromptGen Pro, you agree to these terms. Our platform provides AI prompt engineering services including generation, optimization, and management tools.
              </p>
              <div className="space-y-2 text-gray-300">
                <p><strong className="text-white">Coverage:</strong> All features and functionality</p>
                <p><strong className="text-white">Acceptance:</strong> Required for service use</p>
                <p><strong className="text-white">Updates:</strong> Terms may be modified with notice</p>
              </div>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">👤 User Responsibilities</h3>
              <p className="text-gray-300 mb-4">
                Users must comply with applicable laws and use our service ethically and responsibly.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Use service for legitimate purposes only
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Respect intellectual property rights
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Maintain account security
                </li>
                <li className="flex items-center">
                  <span className="text-red-400 mr-2">✗</span>
                  Create harmful or illegal content
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">🔒 Intellectual Property</h3>
              <p className="text-gray-300 mb-4">
                AIPromptGen Pro respects intellectual property rights and expects users to do the same.
              </p>
              <div className="space-y-3 text-gray-300">
                <p><strong className="text-white">Content Ownership:</strong> Users retain rights to their input content.</p>
                <p><strong className="text-white">Generated Content:</strong> Enhanced prompts are provided as-is for user benefit.</p>
                <p><strong className="text-white">Platform Rights:</strong> We reserve rights to our technology and platform.</p>
              </div>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">⚖️ Limitation of Liability</h3>
              <p className="text-gray-300 mb-4">
                Our service is provided "as-is" and we limit liability as follows:
              </p>
              <div className="space-y-2 text-gray-300">
                <p><strong className="text-white">Service Availability:</strong> We strive for 99%+ uptime but cannot guarantee uninterrupted service.</p>
                <p><strong className="text-white">Content Accuracy:</strong> AI-generated content should be reviewed before use.</p>
                <p><strong className="text-white">User Decisions:</strong> Users are responsible for how they use generated content.</p>
              </div>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">🔄 Service Modifications</h3>
              <p className="text-gray-300 mb-4">
                We reserve the right to modify or discontinue services with reasonable notice.
              </p>
              <div className="space-y-3 text-gray-300">
                <p><strong className="text-white">Updates:</strong> Regular improvements and new features added.</p>
                <p><strong className="text-white">Notice:</strong> Significant changes communicated in advance.</p>
                <p><strong className="text-white">Continuity:</strong> Core functionality maintained during updates.</p>
              </div>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">📞 Contact & Support</h3>
              <p className="text-gray-300 mb-4">
                Questions about our Terms of Service? We're here to help clarify any concerns.
              </p>
              <div className="space-y-3 text-gray-300">
                <p><strong className="text-white">Support:</strong> Available through our contact page for terms-related questions.</p>
                <p><strong className="text-white">Updates:</strong> Users notified of significant changes to terms.</p>
                <p><strong className="text-white">Compliance:</strong> We're committed to fair and transparent policies.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">🤝 Agreement Confirmation</h3>
            <p className="text-gray-300 mb-4">
              By using AIPromptGen Pro, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
            <button
              onClick={handleStartUsing}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
            >
              🚀 Start Using AIPromptGen Pro
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

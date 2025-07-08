'use client'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              How we protect and handle your personal information
            </p>
            <p className="text-gray-400 mt-2">Last updated: January 15, 2025</p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">📊 Data We Collect</h3>
              <p className="text-gray-300 mb-4">
                We collect minimal data necessary to provide our AI prompt engineering services effectively.
              </p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-white mb-2">Information You Provide:</h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Prompt inputs and generated content</li>
                    <li>• Contact form submissions</li>
                    <li>• Newsletter subscriptions (optional)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Automatic Collection:</h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• IP address for session management</li>
                    <li>• Browser and device information</li>
                    <li>• Usage patterns and preferences</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">🔒 How We Use Your Data</h3>
              <p className="text-gray-300 mb-4">
                Your data is used exclusively to provide and improve our AI prompt engineering services.
              </p>
              <div className="space-y-2 text-gray-300">
                <p><strong className="text-white">Service Delivery:</strong> Process and enhance your prompts</p>
                <p><strong className="text-white">Personalization:</strong> Remember your preferences and history</p>
                <p><strong className="text-white">Improvements:</strong> Analyze usage to enhance features</p>
                <p><strong className="text-white">Communication:</strong> Send updates and support responses</p>
              </div>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">🛡️ Data Protection</h3>
              <p className="text-gray-300 mb-4">
                We implement industry-standard security measures to protect your information.
              </p>
              <div className="space-y-3 text-gray-300">
                <p><strong className="text-white">Encryption:</strong> All data transmitted using HTTPS/TLS encryption.</p>
                <p><strong className="text-white">Storage:</strong> Secure cloud infrastructure with access controls.</p>
                <p><strong className="text-white">Access:</strong> Limited employee access on need-to-know basis.</p>
                <p><strong className="text-white">Monitoring:</strong> Regular security audits and updates.</p>
              </div>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">🤝 Data Sharing</h3>
              <p className="text-gray-300 mb-4">
                We do not sell, rent, or share your personal data with third parties except as outlined below.
              </p>
              <div className="space-y-2 text-gray-300">
                <p><strong className="text-white">Service Providers:</strong> Trusted partners who help deliver our services</p>
                <p><strong className="text-white">Legal Requirements:</strong> When required by law or to protect rights</p>
                <p><strong className="text-white">Business Transfers:</strong> In case of merger or acquisition (with notice)</p>
                <p><strong className="text-red-400">Never for Marketing:</strong> We don't sell data to advertisers</p>
              </div>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">⚙️ Your Privacy Rights</h3>
              <p className="text-gray-300 mb-4">
                You have control over your personal information and how it's used.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Access and review your stored data
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Request correction of inaccurate information
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Delete your account and associated data
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Opt-out of non-essential communications
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">📞 Contact & Questions</h3>
              <p className="text-gray-300 mb-4">
                Questions about our privacy practices? We're committed to transparency and helping you understand our policies.
              </p>
              <div className="space-y-3 text-gray-300">
                <p><strong className="text-white">Privacy Officer:</strong> Available for privacy-related questions and requests.</p>
                <p><strong className="text-white">Response Time:</strong> We respond to privacy inquiries within 72 hours.</p>
                <p><strong className="text-white">Updates:</strong> Material changes to this policy will be communicated via email.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-500/30 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">🔐 Privacy Commitment</h3>
            <p className="text-gray-300 mb-4">
              Your privacy is fundamental to our service. We're committed to protecting your data and being transparent about our practices.
            </p>
            <p className="text-green-400 font-medium">
              Questions about this policy? Contact us anytime through our support channels.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

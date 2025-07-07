import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Terms of Service - AIPromptGen Pro',
  description: 'Terms of Service for AIPromptGen Pro. Read our terms and conditions for using our AI prompt generator platform.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Last updated: January 15, 2025
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-blue-400">1. Acceptance of Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing and using AIPromptGen Pro ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-blue-400">2. Use License</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of AIPromptGen Pro per device for personal, non-commercial transitory viewing only. 
                This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="space-y-2 text-gray-300 ml-6">
                <li>• modify or copy the materials</li>
                <li>• use the materials for any commercial purpose or for any public display</li>
                <li>• attempt to decompile or reverse engineer any software contained on the website</li>
                <li>• remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-blue-400">3. User Content</h2>
              <p className="text-gray-300 leading-relaxed">
                You retain ownership of any intellectual property rights that you hold in content that you submit to our service. 
                When you upload or post content to AIPromptGen Pro, you give us a worldwide license to use, host, store, reproduce, 
                modify, create derivative works, communicate, publish, publicly perform, publicly display and distribute such content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-blue-400">4. Privacy Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our service. 
                By using our service, you agree to the collection and use of information in accordance with our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-blue-400">5. Prohibited Uses</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You may not use our service:
              </p>
              <ul className="space-y-2 text-gray-300 ml-6">
                <li>• For any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li>• To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                <li>• To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                <li>• To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>• To submit false or misleading information</li>
                <li>• To upload or transmit viruses or any other type of malicious code</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-blue-400">6. Service Availability</h2>
              <p className="text-gray-300 leading-relaxed">
                We strive to keep AIPromptGen Pro available 24/7, but we cannot guarantee uninterrupted service. 
                We reserve the right to modify, suspend, or discontinue any part of the service at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-blue-400">7. Contact Information</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-gray-700 rounded-lg">
                <p className="text-blue-400 font-medium">Email: cyberintelindustries@gmail.com</p>
                <p className="text-gray-300">Website: https://aipromptgen.tech</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

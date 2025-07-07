import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Privacy Policy - AIPromptGen Pro',
  description: 'Privacy Policy for AIPromptGen Pro. Learn how we protect your data and privacy when using our AI prompt generator.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Last updated: January 15, 2025
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-blue-400">1. Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-green-400">Information You Provide</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We collect information you provide directly to us, such as when you create prompts, 
                    subscribe to our newsletter, or contact us for support. This may include:
                  </p>
                  <ul className="space-y-2 text-gray-300 ml-6 mt-2">
                    <li>• Your name and email address</li>
                    <li>• Prompt content you create or submit</li>
                    <li>• Messages you send to us</li>
                    <li>• Feedback and survey responses</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-green-400">Automatically Collected Information</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We automatically collect certain information about your device and usage of our service:
                  </p>
                  <ul className="space-y-2 text-gray-300 ml-6 mt-2">
                    <li>• IP address and location information</li>
                    <li>• Browser type and version</li>
                    <li>• Device information and operating system</li>
                    <li>• Usage patterns and preferences</li>
                    <li>• Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-blue-400">2. How We Use Your Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="space-y-2 text-gray-300 ml-6">
                <li>• Provide, maintain, and improve our services</li>
                <li>• Process your requests and transactions</li>
                <li>• Send you technical notices and support messages</li>
                <li>• Respond to your comments and questions</li>
                <li>• Analyze usage patterns to improve user experience</li>
                <li>• Prevent fraud and enhance security</li>
                <li>• Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-blue-400">3. Information Sharing and Disclosure</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
              </p>
              <ul className="space-y-2 text-gray-300 ml-6">
                <li>• With your explicit consent</li>
                <li>• To comply with legal requirements or court orders</li>
                <li>• To protect our rights, property, or safety</li>
                <li>• In connection with a business transfer or merger</li>
                <li>• With service providers who assist in our operations (under strict confidentiality agreements)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-blue-400">4. Data Security</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We implement appropriate security measures to protect your personal information:
              </p>
              <ul className="space-y-2 text-gray-300 ml-6">
                <li>• Encryption of data in transit and at rest</li>
                <li>• Regular security assessments and updates</li>
                <li>• Access controls and authentication measures</li>
                <li>• Secure hosting with reputable cloud providers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-blue-400">5. Your Rights</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="space-y-2 text-gray-300 ml-6">
                <li>• Access: Request access to your personal data</li>
                <li>• Correction: Request correction of inaccurate information</li>
                <li>• Deletion: Request deletion of your personal data</li>
                <li>• Portability: Request transfer of your data</li>
                <li>• Opt-out: Unsubscribe from marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-blue-400">6. Contact Us</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="mt-4 p-4 bg-gray-700 rounded-lg">
                <p className="text-blue-400 font-medium">Email: support@aipromptgen.tech</p>
                <p className="text-gray-300">Website: https://aipromptgen.tech</p>
                <p className="text-gray-300">Subject Line: Privacy Policy Inquiry</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

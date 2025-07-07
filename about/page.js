import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'About - AIPromptGen Pro',
  description: 'Learn about AIPromptGen Pro, the leading AI prompt engineering platform for professionals and creators.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-6">
              About AIPromptGen Pro
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Empowering creators and professionals with intelligent AI prompt engineering
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              AIPromptGen Pro is designed to bridge the gap between human creativity and AI capabilities. 
              We believe that the quality of AI output is directly proportional to the quality of the input prompt. 
              Our platform helps users craft precise, effective prompts that unlock the full potential of AI models 
              like ChatGPT, Claude, Gemini, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-blue-400">🎯 What We Do</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Transform simple ideas into structured, effective AI prompts</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Provide model-specific optimization for different AI platforms</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Enable seamless integration with popular AI tools</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Maintain prompt history and favorites for easy access</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-blue-400">🚀 Why Choose Us</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-2">
                  <span className="text-purple-400 mt-1">⭐</span>
                  <span>100% free with no hidden costs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-400 mt-1">⭐</span>
                  <span>No registration required for basic features</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-400 mt-1">⭐</span>
                  <span>Continuously updated with latest AI models</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-400 mt-1">⭐</span>
                  <span>Built by AI enthusiasts for AI enthusiasts</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Our Vision</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              We envision a future where AI and human creativity work in perfect harmony. AIPromptGen Pro is 
              our contribution to making AI more accessible, effective, and useful for everyone - from content 
              creators and marketers to developers and researchers.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              By democratizing prompt engineering, we're helping users achieve better results from AI tools, 
              save time, and focus on what matters most - their creative and professional goals.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">Join Our Community</h2>
            <p className="text-gray-100 text-lg mb-6">
              Be part of the growing community of AI enthusiasts who are pushing the boundaries of what's possible.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="/"
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
              >
                Try Generator
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

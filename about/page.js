import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'About - AIPromptGen Pro',
  description: 'Learn about AIPromptGen Pro, the leading AI prompt engineering platform.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-8">
          About AIPromptGen Pro
        </h1>
        
        <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 space-y-6">
          <p className="text-gray-300 text-lg">
            AIPromptGen Pro is designed to bridge the gap between human creativity and AI capabilities. 
            We help users craft precise, effective prompts that unlock the full potential of AI models 
            like ChatGPT, Claude, Gemini, and more.
          </p>
          
          <h2 className="text-2xl font-bold text-blue-400">Our Mission</h2>
          <p className="text-gray-300">
            To democratize prompt engineering and make AI more accessible, effective, and useful for everyone - 
            from content creators and marketers to developers and researchers.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

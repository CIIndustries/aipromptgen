import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Free AI Resources Download - AIPromptGen Pro',
  description: 'Download your free AI prompt resources including 50 prompts, cheat sheet, and marketing templates.',
}

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-6">
              🎉 Welcome to Your Free AI Resources!
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Thank you for subscribing to AIPromptGen Pro. Your free resources are ready for download!
            </p>
          </div>

          {/* Main Download Button */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">📦 Download All Files (Google Drive)</h2>
            <a
              href="https://drive.google.com/drive/folders/1example"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors transform hover:scale-105"
            >
              Download Now
            </a>
          </div>

          {/* Instructions */}
          <div className="bg-blue-600 bg-opacity-20 border border-blue-500 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-3 text-blue-400">📥 How to Download:</h3>
            <ol className="space-y-2 text-gray-300">
              <li>1. Click the "Download Now" button above</li>
              <li>2. You'll be redirected to our Google Drive folder</li>
              <li>3. Select all files or individual files you want</li>
              <li>4. Click "Download" to save them to your device</li>
            </ol>
          </div>

          {/* Individual Resources */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 h-80 flex flex-col">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3 text-blue-400">📋 50 Free AI Prompts</h3>
                <p className="text-gray-300 mb-4">
                  A curated collection of high-quality prompts for ChatGPT, Claude, and other AI models across various categories.
                </p>
                <div className="text-sm text-gray-400 mb-4">
                  <span className="block">File Type: Microsoft Word</span>
                  <span className="block">Size: 37 KB</span>
                </div>
              </div>
              <a
                href="https://drive.google.com/drive/folders/1example"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-600 transition-colors text-center"
              >
                Download
              </a>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 h-80 flex flex-col">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3 text-blue-400">📊 Prompt Engineering Cheat Sheet</h3>
                <p className="text-gray-300 mb-4">
                  Essential techniques, best practices, and tips for crafting effective AI prompts that get better results.
                </p>
                <div className="text-sm text-gray-400 mb-4">
                  <span className="block">File Type: Microsoft Word</span>
                  <span className="block">Size: 37 KB</span>
                </div>
              </div>
              <a
                href="https://drive.google.com/drive/folders/1example"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-600 transition-colors text-center"
              >
                Download
              </a>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 h-80 flex flex-col">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3 text-blue-400">🎯 AI Prompt Templates for Marketers</h3>
                <p className="text-gray-300 mb-4">
                  Ready-to-use prompt templates specifically designed for marketing professionals and content creators.
                </p>
                <div className="text-sm text-gray-400 mb-4">
                  <span className="block">File Type: Microsoft Excel</span>
                  <span className="block">Size: 6 KB</span>
                </div>
              </div>
              <a
                href="https://drive.google.com/drive/folders/1example"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-600 transition-colors text-center"
              >
                Download
              </a>
            </div>
          </div>

          {/* How to Use */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">📚 How to Use These Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold mb-3 text-green-400">🚀 Getting Started</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Start with the Prompt Engineering Cheat Sheet</li>
                  <li>• Browse the 50 prompts for inspiration</li>
                  <li>• Use the marketing templates for your campaigns</li>
                  <li>• Experiment and modify prompts for your needs</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3 text-purple-400">💡 Pro Tips</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Always customize prompts for your specific use case</li>
                  <li>• Test different variations to find what works best</li>
                  <li>• Save your successful prompts for future use</li>
                  <li>• Share your best results with the community</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">Ready to Create Amazing Prompts?</h2>
            <p className="text-gray-100 mb-6">
              Now that you have the resources, let's put them to use with our AI Prompt Generator!
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors transform hover:scale-105"
            >
              Start Generating Prompts
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

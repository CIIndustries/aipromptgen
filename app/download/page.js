'use client'
import { useState } from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { showToast } from '../../components/Toast'

export default function DownloadPage() {
  const [downloadCount, setDownloadCount] = useState(0)

  const handleDownload = (resourceName) => {
    window.open('https://drive.google.com/drive/folders/1i88UTPVyvHg9HPHvRTb6ufqvZgPEYRtS?usp=drive_link', '_blank')
    showToast(`Opening Google Drive - Download: ${resourceName}`)
    setDownloadCount(prev => prev + 1)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-6">
              🎉 Welcome to Your Free AI Resources!
            </h1>
            <p className="text-gray-400 mb-2">Thank you for subscribing to AIPromptGen Pro</p>
            <p className="text-blue-400 font-medium">Download your premium AI prompt resources below</p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-lg p-8 mb-8">
            <h3 className="text-xl font-bold text-white mb-4 text-center">Your Free Resources</h3>
            
            {/* Download All Button */}
            <div className="text-center mb-6">
              <button
                onClick={() => handleDownload('All Files')}
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 text-lg"
              >
                📦 Download All Files (Google Drive)
              </button>
              <p className="text-sm text-gray-400 mt-2">Click above to access the Google Drive folder with all resources</p>
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 mt-4 max-w-2xl mx-auto">
                <h5 className="font-medium text-blue-400 mb-2">📥 How to Download:</h5>
                <ol className="text-sm text-gray-300 text-left space-y-1">
                  <li>1. Click any download button to open Google Drive</li>
                  <li>2. You'll see 3 files in the folder</li>
                  <li>3. Click the download icon (⬇) next to each file</li>
                  <li>4. Or click "Download all" at the top of the Drive page</li>
                </ol>
              </div>
            </div>
            
            {/* Individual Download Cards */}
            <div className="border-t border-gray-600 pt-6">
              <h4 className="text-center text-gray-300 mb-4">Or download individual files:</h4>
            </div>
            
            <div className="grid gap-6 md:grid-cols-3">
              {/* 50 Free AI Prompts */}
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-colors flex flex-col h-96">
                <div className="text-center">
                  <span className="text-4xl mb-3 block">📋</span>
                  <h4 className="text-lg font-semibold text-white mb-2">50 Free AI Prompts</h4>
                  <p className="text-sm text-gray-300 mb-8 h-12 leading-relaxed">Expertly crafted prompts categorized for different use cases</p>
                  <div className="text-xs text-gray-400 mb-4 bg-gray-700/50 py-2 px-3 rounded">
                    <div className="font-medium">Microsoft Word</div>
                    <div className="text-gray-500">37 KB</div>
                  </div>
                </div>
                <div className="mt-auto">
                  <button
                    onClick={() => handleDownload('50_Free_AI_Prompts.docx')}
                    className="w-full inline-flex items-center justify-center px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
                  >
                    📥 Download Prompts
                  </button>
                </div>
              </div>

              {/* Prompt Engineering Cheat Sheet */}
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-purple-500 transition-colors flex flex-col h-96">
                <div className="text-center">
                  <span className="text-4xl mb-3 block">📊</span>
                  <h4 className="text-lg font-semibold text-white mb-2">Prompt Engineering Cheat Sheet</h4>
                  <p className="text-sm text-gray-300 mb-6 h-12 leading-relaxed">Best practices, structures, and professional tips</p>
                  <div className="text-xs text-gray-400 mb-4 bg-gray-700/50 py-2 px-3 rounded">
                    <div className="font-medium">Microsoft Word</div>
                    <div className="text-gray-500">37 KB</div>
                  </div>
                </div>
                <div className="mt-auto">
                  <button
                    onClick={() => handleDownload('Prompt_Engineering_Cheat_Sheet.docx')}
                    className="w-full inline-flex items-center justify-center px-4 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors cursor-pointer"
                  >
                    📥 Download Cheat Sheet
                  </button>
                </div>
              </div>

              {/* AI Prompt Templates for Marketers */}
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-green-500 transition-colors flex flex-col h-96">
                <div className="text-center">
                  <span className="text-4xl mb-3 block">📈</span>
                  <h4 className="text-lg font-semibold text-white mb-2">AI Marketing Templates</h4>
                  <p className="text-sm text-gray-300 mb-6 h-12 leading-relaxed">Ready-to-use prompts for marketing campaigns and content</p>
                  <div className="text-xs text-gray-400 mb-4 bg-gray-700/50 py-2 px-3 rounded">
                    <div className="font-medium">Microsoft Word</div>
                    <div className="text-gray-500">42 KB</div>
                  </div>
                </div>
                <div className="mt-auto">
                  <button
                    onClick={() => handleDownload('AI_Marketing_Templates.docx')}
                    className="w-full inline-flex items-center justify-center px-4 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors cursor-pointer"
                  >
                    📥 Download Templates
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Success Message */}
          {downloadCount > 0 && (
            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6 text-center">
              <h3 className="text-lg font-bold text-green-400 mb-2">🎊 Downloads Initiated: {downloadCount}</h3>
              <p className="text-gray-300">
                Your downloads should start automatically. If you need help, check our support section.
              </p>
            </div>
          )}

          {/* Additional Information */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4">📚 What's Included</h3>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="text-center">
                <span className="text-2xl mb-2 block">📝</span>
                <h4 className="font-semibold text-white mb-1">50 Premium Prompts</h4>
                <p className="text-sm text-gray-300">Categorized by use case and industry</p>
              </div>
              <div className="text-center">
                <span className="text-2xl mb-2 block">🎯</span>
                <h4 className="font-semibold text-white mb-1">Expert Guidelines</h4>
                <p className="text-sm text-gray-300">Professional prompt engineering best practices</p>
              </div>
              <div className="text-center">
                <span className="text-2xl mb-2 block">🚀</span>
                <h4 className="font-semibold text-white mb-1">Marketing Ready</h4>
                <p className="text-sm text-gray-300">Templates for campaigns and content creation</p>
              </div>
            </div>
          </div>

          {/* Support Section */}
          <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold text-white mb-2">🤝 Need Help?</h3>
            <p className="text-gray-300 mb-4">
              Having trouble downloading your resources? We're here to help!
            </p>
            <p className="text-purple-400 font-medium">
              Contact us through our support page and we'll resolve any issues quickly.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

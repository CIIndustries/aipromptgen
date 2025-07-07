'use client'
import { useState } from 'react'

export default function Home() {
  const [inputPrompt, setInputPrompt] = useState('')

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          AIPromptGen Pro
        </h1>
        
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <label className="block text-sm font-medium text-gray-300 mb-3">
            Your Prompt Idea
          </label>
          <textarea
            value={inputPrompt}
            onChange={(e) => setInputPrompt(e.target.value)}
            placeholder="Enter your prompt idea..."
            className="w-full h-32 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          <button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
            Generate Enhanced Prompt
          </button>
        </div>
      </div>
    </div>
  )
}

'use client'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import DonationPopup from '../components/DonationPopup'
import VoiceInput from '../components/VoiceInput'
import { showToast } from '../components/Toast'

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL
const API = `${BACKEND_URL}/api`

export default function Home() {
  const [inputPrompt, setInputPrompt] = useState('')
  const [generatedPrompt, setGeneratedPrompt] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [selectedModel, setSelectedModel] = useState('general')
  const [selectedCategory, setSelectedCategory] = useState('writing')
  const [subscribeForm, setSubscribeForm] = useState({ email: '', name: '' })

  const modelOptions = [
    { value: 'general', label: 'General Purpose', description: 'Works well with any AI model' },
    { value: 'gpt', label: 'ChatGPT/GPT-4', description: 'Optimized for OpenAI models' },
    { value: 'claude', label: 'Claude', description: 'Tailored for Anthropic Claude' },
    { value: 'gemini', label: 'Gemini', description: 'Designed for Google Gemini' },
    { value: 'midjourney', label: 'Midjourney', description: 'Perfect for image generation' },
    { value: 'dalle', label: 'DALL-E', description: 'Optimized for OpenAI image generation' },
    { value: 'coding', label: 'Coding Assistant', description: 'For programming and development' },
    { value: 'writing', label: 'Creative Writing', description: 'For stories, articles, and content' }
  ]

  const exampleCategories = {
    writing: [
      "Write a sci-fi story about time travel",
      "Create a social media post about productivity tips",
      "Draft a professional email to a client",
      "Write a product description for a smart watch"
    ],
    marketing: [
      "Create a social media campaign for a fitness app",
      "Design a marketing strategy for a local restaurant",
      "Write compelling ad copy for a software product",
      "Develop a content calendar for a fashion brand"
    ],
    design: [
      "Design a logo for a tech startup",
      "Create a modern website layout for a portfolio",
      "Design a mobile app interface for food delivery",
      "Create a poster for a music festival"
    ],
    coding: [
      "Build a React component for a user profile",
      "Create a Python script for data analysis",
      "Design a database schema for an e-commerce site",
      "Write a function to validate email addresses"
    ],
    business: [
      "Create a business plan for a coffee shop",
      "Develop a pricing strategy for a SaaS product",
      "Write a proposal for a consulting project",
      "Design a workflow for customer onboarding"
    ],
    education: [
      "Create a lesson plan for teaching fractions",
      "Design an interactive quiz about world history",
      "Develop a training program for new employees",
      "Write study materials for a biology exam"
    ]
  }

  const handleGeneratePrompt = async () => {
    if (!inputPrompt.trim()) {
      setError('Please enter a prompt idea')
      return
    }

    setIsLoading(true)
    setError('')

    try {
      const response = await axios.post(`${API}/generate-prompt`, {
        user_input: inputPrompt,
        target_model: selectedModel
      })
      setGeneratedPrompt(response.data.enhanced_prompt)
    } catch (err) {
      setError(err.response?.data?.detail || 'Failed to generate prompt. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(generatedPrompt)
    showToast('Prompt copied to clipboard!')
  }

  const handleChatGPT = () => {
    const encodedPrompt = encodeURIComponent(generatedPrompt)
    window.open(`https://chat.openai.com/?prompt=${encodedPrompt}`, '_blank')
    showToast('Opening ChatGPT with your prompt!')
  }

  const handleClaude = () => {
    const encodedPrompt = encodeURIComponent(generatedPrompt)
    window.open(`https://claude.ai/chat?prompt=${encodedPrompt}`, '_blank')
    showToast('Opening Claude with your prompt!')
  }

  const handleGemini = () => {
    const encodedPrompt = encodeURIComponent(generatedPrompt)
    window.open(`https://aistudio.google.com/app/prompts/new_chat?prompt=${encodedPrompt}`, '_blank')
    showToast('Opening Gemini with your prompt!')
  }

  const handleCopilot = () => {
    const encodedPrompt = encodeURIComponent(generatedPrompt)
    window.open(`https://m365.cloud.microsoft/chat/?prompt=${encodedPrompt}`, '_blank')
    showToast('Opening Copilot with your prompt!')
  }

  const handleFavorite = async () => {
    try {
      await axios.post(`${API}/favorites`, {
        original_input: inputPrompt,
        enhanced_prompt: generatedPrompt,
        target_model: selectedModel
      })
      showToast('Added to favorites!')
    } catch (err) {
      showToast('Failed to add to favorites', 'error')
    }
  }

  const handleSubscribeSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('https://formspree.io/f/xgvypoan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: subscribeForm.email,
          name: subscribeForm.name,
          subject: 'New AI Prompt Subscription',
          message: `New subscriber: ${subscribeForm.name} (${subscribeForm.email}) has subscribed to receive AI prompt resources.`
        }),
      })
      
      if (response.ok) {
        showToast('🎉 Successfully subscribed! Redirecting to download page...')
        setSubscribeForm({ email: '', name: '' })
        setTimeout(() => {
          window.location.href = '/download'
        }, 2000)
      } else {
        showToast('Failed to subscribe. Please try again.', 'error')
      }
    } catch (error) {
      showToast('Failed to subscribe. Please try again.', 'error')
    }
  }

  const handleVoiceTranscript = (transcript) => {
    setInputPrompt(prev => prev + ' ' + transcript)
  }

  const handleExampleClick = (example) => {
    setInputPrompt(example)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <DonationPopup />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              AI Prompt Generator
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your simple ideas into powerful, structured prompts for ChatGPT, Claude, Gemini, and more
            </p>
          </div>

          {/* Main Generator */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="space-y-6">
              {/* Model Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Select AI Model
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {modelOptions.map((model) => (
                    <button
                      key={model.value}
                      onClick={() => setSelectedModel(model.value)}
                      className={`p-3 rounded-lg border text-left transition-all hover:scale-105 ${
                        selectedModel === model.value
                          ? 'bg-blue-500 border-blue-500 text-white'
                          : 'bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      <div className="font-medium text-sm">{model.label}</div>
                      <div className="text-xs opacity-75 mt-1">{model.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Section */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Your Prompt Idea
                </label>
                <div className="relative">
                  <textarea
                    value={inputPrompt}
                    onChange={(e) => setInputPrompt(e.target.value)}
                    placeholder="e.g., Write a story about a dragon and a knight... (or click 🎤 to speak)"
                    className="w-full h-32 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    disabled={isLoading}
                  />
                  <div className="absolute top-3 right-3">
                    <VoiceInput onTranscript={handleVoiceTranscript} disabled={isLoading} />
                  </div>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-500 bg-opacity-10 border border-red-500 text-red-400 px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}

              {/* Generate Button */}
              <button
                onClick={handleGeneratePrompt}
                disabled={isLoading || !inputPrompt.trim()}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="loading-spinner"></div>
                    <span>Generating...</span>
                  </div>
                ) : (
                  'Generate Enhanced Prompt'
                )}
              </button>

              {/* Generated Prompt */}
              {generatedPrompt && (
                <div className="bg-gray-700 rounded-lg p-4 border border-gray-600 animate-fadeIn">
                  <h3 className="text-lg font-semibold mb-3 text-blue-400">Enhanced Prompt:</h3>
                  <p className="text-gray-200 whitespace-pre-wrap mb-4">{generatedPrompt}</p>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={handleCopyPrompt}
                      className="bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      📋 Copy
                    </button>
                    <button
                      onClick={handleChatGPT}
                      className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      🤖 ChatGPT
                    </button>
                    <button
                      onClick={handleClaude}
                      className="bg-orange-600 hover:bg-orange-500 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      🎭 Claude
                    </button>
                    <button
                      onClick={handleGemini}
                      className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      💎 Gemini
                    </button>
                    <button
                      onClick={handleCopilot}
                      className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      🚁 Copilot
                    </button>
                    <button
                      onClick={handleFavorite}
                      className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      ⭐ Favorite
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Examples Section */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">✨ Prompt Examples</h2>
            
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {Object.keys(exampleCategories).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {exampleCategories[selectedCategory].map((example, index) => (
                <div
                  key={index}
                  onClick={() => handleExampleClick(example)}
                  className="bg-gray-700 p-4 rounded-lg cursor-pointer hover:bg-gray-600 transition-colors border border-gray-600 hover:border-blue-500"
                >
                  <p className="text-gray-200">{example}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Subscription Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-white">
                  🎁 Get Free AI Prompt Resources
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">📋</span>
                    <span className="text-white">50 Free AI Prompts</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">📊</span>
                    <span className="text-white">Prompt Engineering Cheat Sheet</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🎯</span>
                    <span className="text-white">AI Prompt Templates for Marketers</span>
                  </div>
                </div>
              </div>
              
              <div>
                <form onSubmit={handleSubscribeSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={subscribeForm.name}
                      onChange={(e) => setSubscribeForm({...subscribeForm, name: e.target.value})}
                      className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={subscribeForm.email}
                      onChange={(e) => setSubscribeForm({...subscribeForm, email: e.target.value})}
                      className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-white text-blue-600 py-3 px-6 rounded-lg font-bold hover:bg-gray-100 transition-colors transform hover:scale-105"
                  >
                    🚀 Get Free Resources Now
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </main>
      
      <Footer />
    </div>
  )
}

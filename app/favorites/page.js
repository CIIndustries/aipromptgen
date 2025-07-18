'use client'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { showToast } from '../../components/Toast'

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL
const API = `${BACKEND_URL}/api`

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([])
  const [expandedItems, setExpandedItems] = useState(new Set())
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    loadFavorites()
  }, [])

  const loadFavorites = async () => {
    try {
      const response = await axios.get(`${API}/favorites`)
      setFavorites(response.data || [])
    } catch (error) {
      console.error('Failed to load favorites:', error)
      showToast('Failed to load favorites', 'error')
    } finally {
      setIsLoading(false)
    }
  }

  const toggleExpand = (itemId) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId)
    } else {
      newExpanded.add(itemId)
    }
    setExpandedItems(newExpanded)
  }

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
    showToast('Copied to clipboard!')
  }

  const handleChatGPT = (prompt) => {
    const encodedPrompt = encodeURIComponent(prompt)
    window.open(`https://chat.openai.com/?prompt=${encodedPrompt}`, '_blank')
    showToast('Opening ChatGPT with your prompt!')
  }

  const handleClaude = (prompt) => {
    const encodedPrompt = encodeURIComponent(prompt)
    window.open(`https://claude.ai/chat?prompt=${encodedPrompt}`, '_blank')
    showToast('Opening Claude with your prompt!')
  }

  const handleGemini = (prompt) => {
    const encodedPrompt = encodeURIComponent(prompt)
    window.open(`https://aistudio.google.com/app/prompts/new_chat?prompt=${encodedPrompt}`, '_blank')
    showToast('Opening Gemini with your prompt!')
  }

  const handleCopilot = (prompt) => {
    const encodedPrompt = encodeURIComponent(prompt)
    window.open(`https://m365.cloud.microsoft/chat/?prompt=${encodedPrompt}`, '_blank')
    showToast('Opening Copilot with your prompt!')
  }

  const handleRemoveFromFavorites = async (favoriteId) => {
    try {
      await axios.delete(`${API}/favorites/${favoriteId}`)
      setFavorites(favorites.filter(item => item.id !== favoriteId))
      showToast('Removed from favorites')
    } catch (error) {
      showToast('Failed to remove from favorites', 'error')
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-6">
              Favorite Prompts
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your saved and favorited prompts for quick access
            </p>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <div className="loading-spinner"></div>
              <span className="ml-2 text-gray-300">Loading favorites...</span>
            </div>
          ) : favorites.length === 0 ? (
            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 text-center">
              <h3 className="text-xl font-semibold mb-4 text-gray-300">No Favorites Yet</h3>
              <p className="text-gray-400 mb-6">
                Start favoriting prompts to see them here. Generate some prompts and add your best ones to favorites!
              </p>
              <a
                href="/"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
              >
                Generate Prompts
              </a>
            </div>
          ) : (
            <div className="space-y-4">
              {favorites.map((item) => (
                <div key={item.id} className="bg-gray-800 rounded-lg border border-gray-700 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-yellow-400">⭐</span>
                        <h3 className="font-semibold text-blue-400">Original Input:</h3>
                      </div>
                      <p className="text-gray-200 mb-3">{item.original_input}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span>📅 {formatDate(item.timestamp)}</span>
                        <span>🤖 {item.target_model || 'General'}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleExpand(item.id)}
                      className="ml-4 text-gray-400 hover:text-white transition-colors"
                    >
                      <svg 
                        className={`h-5 w-5 transform transition-transform ${
                          expandedItems.has(item.id) ? 'rotate-180' : ''
                        }`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>

                  {expandedItems.has(item.id) && (
                    <div className="animate-fadeIn">
                      <div className="bg-gray-700 rounded-lg p-4 mb-4">
                        <h4 className="font-semibold text-green-400 mb-2">Enhanced Prompt:</h4>
                        <p className="text-gray-200 whitespace-pre-wrap">{item.enhanced_prompt}</p>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        <button
                          onClick={() => handleCopy(item.enhanced_prompt)}
                          className="bg-gray-600 hover:bg-gray-500 text-white px-3 py-2 rounded-lg text-sm transition-colors"
                        >
                          📋 Copy
                        </button>
                        <button
                          onClick={() => handleChatGPT(item.enhanced_prompt)}
                          className="bg-green-600 hover:bg-green-500 text-white px-3 py-2 rounded-lg text-sm transition-colors"
                        >
                          🤖 ChatGPT
                        </button>
                        <button
                          onClick={() => handleClaude(item.enhanced_prompt)}
                          className="bg-orange-600 hover:bg-orange-500 text-white px-3 py-2 rounded-lg text-sm transition-colors"
                        >
                          🎭 Claude
                        </button>
                        <button
                          onClick={() => handleGemini(item.enhanced_prompt)}
                          className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-2 rounded-lg text-sm transition-colors"
                        >
                          💎 Gemini
                        </button>
                        <button
                          onClick={() => handleCopilot(item.enhanced_prompt)}
                          className="bg-cyan-600 hover:bg-cyan-500 text-white px-3 py-2 rounded-lg text-sm transition-colors"
                        >
                          🚁 Copilot
                        </button>
                        <button
                          onClick={() => handleRemoveFromFavorites(item.id)}
                          className="bg-red-600 hover:bg-red-500 text-white px-3 py-2 rounded-lg text-sm transition-colors"
                        >
                          🗑️ Remove
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

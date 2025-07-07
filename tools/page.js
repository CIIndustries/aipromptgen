'use client'
import { useState, useEffect } from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { showToast } from '../../components/Toast'

export default function ToolsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [submitForm, setSubmitForm] = useState({
    toolName: '',
    website: '',
    category: '',
    description: '',
    contactEmail: '',
    pricing: ''
  })

  const categories = [
    'All Tools',
    'Writing',
    'Image',
    'Video',
    'Audio',
    'Coding',
    'Productivity',
    'Research',
    'Design'
  ]

  const aiTools = [
    {
      id: 1,
      name: 'ChatGPT',
      category: 'Writing',
      description: 'Advanced AI chatbot for conversations, writing, and problem-solving',
      rating: 4.8,
      features: ['Conversation', 'Writing', 'Code', 'Analysis'],
      pricing: 'Free + Premium',
      website: 'https://chat.openai.com',
      isFeatured: true
    },
    {
      id: 2,
      name: 'Claude',
      category: 'Writing',
      description: 'AI assistant by Anthropic for helpful, harmless, and honest conversations',
      rating: 4.7,
      features: ['Writing', 'Analysis', 'Code', 'Research'],
      pricing: 'Free + Premium',
      website: 'https://claude.ai',
      isFeatured: true
    },
    {
      id: 3,
      name: 'Midjourney',
      category: 'Image',
      description: 'AI-powered image generation with artistic and creative capabilities',
      rating: 4.9,
      features: ['Image Generation', 'Art', 'Creative', 'High Quality'],
      pricing: 'Premium',
      website: 'https://midjourney.com',
      isFeatured: true
    },
    {
      id: 4,
      name: 'DALL-E 3',
      category: 'Image',
      description: 'OpenAI\'s latest image generation model with improved quality',
      rating: 4.6,
      features: ['Image Generation', 'Text to Image', 'Creative', 'Detailed'],
      pricing: 'Pay per use',
      website: 'https://openai.com/dall-e-3',
      isFeatured: false
    },
    {
      id: 5,
      name: 'Stable Diffusion',
      category: 'Image',
      description: 'Open-source text-to-image diffusion model',
      rating: 4.5,
      features: ['Image Generation', 'Open Source', 'Customizable', 'Free'],
      pricing: 'Free',
      website: 'https://stability.ai',
      isFeatured: false
    },
    {
      id: 6,
      name: 'Runway ML',
      category: 'Video',
      description: 'AI-powered video editing and generation platform',
      rating: 4.4,
      features: ['Video Generation', 'Editing', 'AI Effects', 'Creative'],
      pricing: 'Free + Premium',
      website: 'https://runwayml.com',
      isFeatured: false
    },
    {
      id: 7,
      name: 'ElevenLabs',
      category: 'Audio',
      description: 'AI voice generation and cloning technology',
      rating: 4.7,
      features: ['Voice Synthesis', 'Voice Cloning', 'Text to Speech', 'Realistic'],
      pricing: 'Free + Premium',
      website: 'https://elevenlabs.io',
      isFeatured: false
    },
    {
      id: 8,
      name: 'GitHub Copilot',
      category: 'Coding',
      description: 'AI pair programmer that helps you write code faster',
      rating: 4.5,
      features: ['Code Completion', 'AI Suggestions', 'Multiple Languages', 'IDE Integration'],
      pricing: 'Premium',
      website: 'https://github.com/features/copilot',
      isFeatured: true
    },
    {
      id: 9,
      name: 'Cursor',
      category: 'Coding',
      description: 'AI-powered code editor built for productivity',
      rating: 4.6,
      features: ['AI Code Editor', 'Smart Suggestions', 'Refactoring', 'Modern UI'],
      pricing: 'Free + Premium',
      website: 'https://cursor.sh',
      isFeatured: false
    },
    {
      id: 10,
      name: 'Notion AI',
      category: 'Productivity',
      description: 'AI-powered writing and productivity assistant built into Notion',
      rating: 4.3,
      features: ['Writing Assistant', 'Summarization', 'Task Management', 'Integration'],
      pricing: 'Premium',
      website: 'https://notion.so',
      isFeatured: false
    },
    {
      id: 11,
      name: 'Jasper',
      category: 'Writing',
      description: 'AI content generation platform for marketing and business',
      rating: 4.4,
      features: ['Content Generation', 'Marketing Copy', 'SEO Optimization', 'Templates'],
      pricing: 'Premium',
      website: 'https://jasper.ai',
      isFeatured: false
    },
    {
      id: 12,
      name: 'Copy.ai',
      category: 'Writing',
      description: 'AI copywriting tool for marketing and content creation',
      rating: 4.2,
      features: ['Copywriting', 'Marketing Content', 'Templates', 'Collaboration'],
      pricing: 'Free + Premium',
      website: 'https://copy.ai',
      isFeatured: false
    },
    {
      id: 13,
      name: 'Perplexity',
      category: 'Research',
      description: 'AI-powered research and answer engine',
      rating: 4.5,
      features: ['Research', 'Real-time Info', 'Citations', 'Conversational'],
      pricing: 'Free + Premium',
      website: 'https://perplexity.ai',
      isFeatured: false
    },
    {
      id: 14,
      name: 'Canva AI',
      category: 'Design',
      description: 'AI-powered design tools integrated into Canva platform',
      rating: 4.3,
      features: ['Design Generation', 'Templates', 'Image Editing', 'Brand Kit'],
      pricing: 'Free + Premium',
      website: 'https://canva.com',
      isFeatured: false
    },
    {
      id: 15,
      name: 'Figma AI',
      category: 'Design',
      description: 'AI design assistant built into Figma',
      rating: 4.4,
      features: ['Design Assistant', 'Auto Layout', 'Component Generation', 'Collaboration'],
      pricing: 'Free + Premium',
      website: 'https://figma.com',
      isFeatured: false
    },
    {
      id: 16,
      name: 'Suno AI',
      category: 'Audio',
      description: 'AI music generation platform for creating songs from text',
      rating: 4.6,
      features: ['Music Generation', 'Lyrics to Music', 'Various Genres', 'High Quality'],
      pricing: 'Free + Premium',
      website: 'https://suno.ai',
      isFeatured: false
    },
    {
      id: 17,
      name: 'V0 by Vercel',
      category: 'Coding',
      description: 'AI-powered UI component generator',
      rating: 4.5,
      features: ['UI Generation', 'React Components', 'Tailwind CSS', 'Code Export'],
      pricing: 'Free + Premium',
      website: 'https://v0.dev',
      isFeatured: false
    },
    {
      id: 18,
      name: 'Google Gemini',
      category: 'Writing',
      description: 'Google\'s multimodal AI model for text, images, and code',
      rating: 4.4,
      features: ['Multimodal', 'Code Generation', 'Image Analysis', 'Integration'],
      pricing: 'Free + Premium',
      website: 'https://gemini.google.com',
      isFeatured: false
    },
    {
      id: 19,
      name: 'Microsoft Copilot',
      category: 'Productivity',
      description: 'AI assistant integrated across Microsoft 365 apps',
      rating: 4.3,
      features: ['Office Integration', 'Productivity', 'Email Assistant', 'Document Help'],
      pricing: 'Premium',
      website: 'https://copilot.microsoft.com',
      isFeatured: false
    },
    {
      id: 20,
      name: 'Replit AI',
      category: 'Coding',
      description: 'AI coding assistant for collaborative programming',
      rating: 4.4,
      features: ['Code Completion', 'Pair Programming', 'Multiple Languages', 'Cloud IDE'],
      pricing: 'Free + Premium',
      website: 'https://replit.com',
      isFeatured: false
    },
    {
      id: 21,
      name: 'Writesonic',
      category: 'Writing',
      description: 'AI writing platform for content creation and copywriting',
      rating: 4.2,
      features: ['Article Writing', 'Ad Copy', 'SEO Content', 'Multiple Languages'],
      pricing: 'Free + Premium',
      website: 'https://writesonic.com',
      isFeatured: false
    },
    {
      id: 22,
      name: 'Synthesia',
      category: 'Video',
      description: 'AI video generation platform with virtual presenters',
      rating: 4.5,
      features: ['AI Avatars', 'Video Creation', 'Multiple Languages', 'Professional Quality'],
      pricing: 'Premium',
      website: 'https://synthesia.io',
      isFeatured: false
    },
    {
      id: 23,
      name: 'Luma AI',
      category: 'Video',
      description: 'AI platform for 3D content creation and video generation',
      rating: 4.3,
      features: ['3D Generation', 'Video Creation', 'NeRF Technology', 'Mobile App'],
      pricing: 'Free + Premium',
      website: 'https://lumalabs.ai',
      isFeatured: false
    },
    {
      id: 24,
      name: 'Grammarly',
      category: 'Writing',
      description: 'AI-powered writing assistant for grammar and style',
      rating: 4.6,
      features: ['Grammar Check', 'Style Suggestions', 'Plagiarism Detection', 'Browser Extension'],
      pricing: 'Free + Premium',
      website: 'https://grammarly.com',
      isFeatured: false
    },
    {
      id: 25,
      name: 'Murf AI',
      category: 'Audio',
      description: 'AI voice generator for creating realistic voiceovers',
      rating: 4.4,
      features: ['Voice Generation', 'Multiple Voices', 'Text to Speech', 'Professional Quality'],
      pricing: 'Free + Premium',
      website: 'https://murf.ai',
      isFeatured: false
    },
    {
      id: 26,
      name: 'Tome',
      category: 'Productivity',
      description: 'AI-powered presentation and storytelling platform',
      rating: 4.2,
      features: ['Presentation Generation', 'Storytelling', 'AI Design', 'Collaboration'],
      pricing: 'Free + Premium',
      website: 'https://tome.app',
      isFeatured: false
    },
    {
      id: 27,
      name: 'Hugging Face',
      category: 'Research',
      description: 'Open-source platform for machine learning and AI models',
      rating: 4.7,
      features: ['Model Hub', 'Open Source', 'API Access', 'Community'],
      pricing: 'Free + Premium',
      website: 'https://huggingface.co',
      isFeatured: false
    },
    {
      id: 28,
      name: 'Poe by Quora',
      category: 'Writing',
      description: 'Platform to access multiple AI chatbots in one place',
      rating: 4.3,
      features: ['Multiple AI Models', 'Chatbot Access', 'Conversation History', 'Mobile App'],
      pricing: 'Free + Premium',
      website: 'https://poe.com',
      isFeatured: false
    },
    {
      id: 29,
      name: 'Character.AI',
      category: 'Writing',
      description: 'Platform for creating and chatting with AI characters',
      rating: 4.4,
      features: ['Character Creation', 'Role Playing', 'Conversations', 'Community'],
      pricing: 'Free + Premium',
      website: 'https://character.ai',
      isFeatured: false
    },
    {
      id: 30,
      name: 'Wordtune',
      category: 'Writing',
      description: 'AI writing companion for rewriting and improving text',
      rating: 4.3,
      features: ['Text Rewriting', 'Tone Adjustment', 'Grammar Check', 'Browser Extension'],
      pricing: 'Free + Premium',
      website: 'https://wordtune.com',
      isFeatured: false
    },
    {
      id: 31,
      name: 'Otter.ai',
      category: 'Audio',
      description: 'AI-powered transcription and meeting notes',
      rating: 4.5,
      features: ['Transcription', 'Meeting Notes', 'Live Captions', 'Collaboration'],
      pricing: 'Free + Premium',
      website: 'https://otter.ai',
      isFeatured: false
    },
    {
      id: 32,
      name: 'Descript',
      category: 'Audio',
      description: 'AI-powered audio and video editing with text-based editing',
      rating: 4.4,
      features: ['Audio Editing', 'Video Editing', 'Transcription', 'Voice Cloning'],
      pricing: 'Free + Premium',
      website: 'https://descript.com',
      isFeatured: false
    },
    {
      id: 33,
      name: 'Framer AI',
      category: 'Design',
      description: 'AI-powered website builder with advanced design capabilities',
      rating: 4.5,
      features: ['Website Builder', 'AI Design', 'Responsive', 'Advanced Animations'],
      pricing: 'Free + Premium',
      website: 'https://framer.com',
      isFeatured: false
    },
    {
      id: 34,
      name: 'Replika',
      category: 'Writing',
      description: 'AI companion for conversations and emotional support',
      rating: 4.1,
      features: ['AI Companion', 'Emotional Support', 'Personalization', 'Mobile App'],
      pricing: 'Free + Premium',
      website: 'https://replika.ai',
      isFeatured: false
    },
    {
      id: 35,
      name: 'Anthropic Claude',
      category: 'Research',
      description: 'Constitutional AI for safe, helpful, and honest conversations',
      rating: 4.7,
      features: ['Safety First', 'Long Context', 'Code & Analysis', 'Reasoning'],
      pricing: 'Free + Premium',
      website: 'https://claude.ai',
      isFeatured: false
    }
  ]

  const filteredTools = aiTools.filter(tool => {
    const matchesCategory = selectedCategory === 'all' || tool.category.toLowerCase() === selectedCategory.toLowerCase().replace(' tools', '')
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         tool.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredTools = aiTools.filter(tool => tool.isFeatured)

  const handleSubmitTool = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('https://formspree.io/f/mwpbrary', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'cyberintelindustries@gmail.com',
          subject: 'New AI Tool Submission',
          message: `New AI Tool Submission:
          
Tool Name: ${submitForm.toolName}
Website: ${submitForm.website}
Category: ${submitForm.category}
Pricing: ${submitForm.pricing}
Description: ${submitForm.description}
Contact Email: ${submitForm.contactEmail}

Submitted from AIPromptGen.tech AI Tools Directory`,
          _replyto: submitForm.contactEmail
        }),
      })
      
      if (response.ok) {
        showToast('🎉 Tool submission sent successfully! We\'ll review it and get back to you.')
        setSubmitForm({ 
          toolName: '', 
          website: '', 
          category: '', 
          description: '', 
          contactEmail: '',
          pricing: ''
        })
      } else {
        showToast('Failed to submit tool. Please try again.', 'error')
      }
    } catch (error) {
      showToast('Failed to submit tool. Please try again.', 'error')
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              AI Tools Directory
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the best AI tools for writing, coding, design, and productivity
            </p>
          </div>

          {/* Search and Filter */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search tools..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category.toLowerCase().replace(' ', ''))}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedCategory === category.toLowerCase().replace(' ', '')
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Tools */}
          {selectedCategory === 'all' && (
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h2 className="text-2xl font-bold mb-6 text-blue-400">⭐ Featured Tools</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredTools.map((tool) => (
                  <div key={tool.id} className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-6 text-white">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold">{tool.name}</h3>
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-300">⭐</span>
                        <span className="text-sm">{tool.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-100 mb-4">{tool.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tool.features.map((feature, index) => (
                        <span key={index} className="px-2 py-1 bg-white bg-opacity-20 rounded text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{tool.pricing}</span>
                      <div className="flex space-x-2">
                        <a
                          href={tool.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                        >
                          Visit
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* All Tools */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">
              🛠️ All Tools ({filteredTools.length})
            </h2>
            {filteredTools.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No tools found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTools.map((tool) => (
                  <div key={tool.id} className="bg-gray-700 rounded-lg p-6 border border-gray-600 hover:border-blue-500 transition-colors card-hover">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-white">{tool.name}</h3>
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-400">⭐</span>
                        <span className="text-sm text-gray-300">{tool.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{tool.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tool.features.map((feature, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-600 rounded text-xs text-gray-200">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-blue-400">{tool.pricing}</span>
                      <div className="flex space-x-2">
                        <a
                          href={tool.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
                        >
                          Visit
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Submit Tool Form */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">📝 Submit a Tool</h2>
            <form onSubmit={handleSubmitTool} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Tool Name *
                  </label>
                  <input
                    type="text"
                    value={submitForm.toolName}
                    onChange={(e) => setSubmitForm({...submitForm, toolName: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Website URL *
                  </label>
                  <input
                    type="url"
                    value={submitForm.website}
                    onChange={(e) => setSubmitForm({...submitForm, website: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Category *
                  </label>
                  <select
                    value={submitForm.category}
                    onChange={(e) => setSubmitForm({...submitForm, category: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select a category</option>
                    <option value="Writing">Writing</option>
                    <option value="Image">Image</option>
                    <option value="Video">Video</option>
                    <option value="Audio">Audio</option>
                    <option value="Coding">Coding</option>
                    <option value="Productivity">Productivity</option>
                    <option value="Research">Research</option>
                    <option value="Design">Design</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Pricing *
                  </label>
                  <select
                    value={submitForm.pricing}
                    onChange={(e) => setSubmitForm({...submitForm, pricing: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select pricing</option>
                    <option value="Free">Free</option>
                    <option value="Free + Premium">Free + Premium</option>
                    <option value="Premium">Premium</option>
                    <option value="Pay per use">Pay per use</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Description *
                </label>
                <textarea
                  value={submitForm.description}
                  onChange={(e) => setSubmitForm({...submitForm, description: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Contact Email *
                </label>
                <input
                  type="email"
                  value={submitForm.contactEmail}
                  onChange={(e) => setSubmitForm({...submitForm, contactEmail: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Submit Tool for Review
              </button>
            </form>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

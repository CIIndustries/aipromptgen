'use client'
import { useState, useEffect } from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { showToast } from '../../components/Toast'

export default function ToolsPage() {
  const [selectedToolCategory, setSelectedToolCategory] = useState('all')
  const [toolSearchQuery, setToolSearchQuery] = useState('')
  const [aiTools, setAiTools] = useState([])
  const [submitToolForm, setSubmitToolForm] = useState({
    toolName: '',
    website: '',
    category: '',
    description: '',
    contactEmail: '',
    pricing: ''
  })

  useEffect(() => {
    // Initialize AI Tools Directory - copied exactly from original React app
    setAiTools([
      {
        id: 1,
        name: "ChatGPT",
        website: "https://chatgpt.com",
        category: "writing",
        description: "Advanced AI assistant for conversations, writing, coding, and analysis. GPT-4 powered with web browsing and file analysis.",
        pricing: "Free / $20/month",
        rating: 4.8,
        features: ["Web Browsing", "File Analysis", "Code Generation", "Creative Writing"],
        icon: "🤖",
        featured: true
      },
      {
        id: 2,
        name: "Claude",
        website: "https://claude.ai",
        category: "writing",
        description: "Anthropic's constitutional AI for safe, helpful, and honest conversations with superior reasoning capabilities.",
        pricing: "Free / $20/month",
        rating: 4.7,
        features: ["Safety First", "Long Context", "Code & Analysis", "Reasoning"],
        icon: "🎭",
        featured: true
      },
      {
        id: 3,
        name: "Midjourney",
        website: "https://midjourney.com",
        category: "image",
        description: "Leading AI art generator creating stunning, artistic images from text prompts. Perfect for creative professionals.",
        pricing: "$10-60/month",
        rating: 4.8,
        features: ["Artistic Style", "High Quality", "Community", "Commercial Use"],
        icon: "🎨",
        featured: true
      },
      {
        id: 4,
        name: "DALL-E 3",
        website: "https://openai.com/dall-e-3",
        category: "image",
        description: "OpenAI's latest image generation model with improved prompt adherence and photorealistic outputs.",
        pricing: "$15-30/month",
        rating: 4.6,
        features: ["Photorealistic", "Prompt Adherence", "Safety Features", "High Resolution"],
        icon: "🖼️",
        featured: false
      },
      {
        id: 5,
        name: "GitHub Copilot",
        website: "https://github.com/features/copilot",
        category: "coding",
        description: "AI pair programmer that suggests code and entire functions in real-time inside your editor.",
        pricing: "$10/month",
        rating: 4.5,
        features: ["Code Completion", "Multiple Languages", "IDE Integration", "Context Aware"],
        icon: "💻",
        featured: true
      },
      {
        id: 6,
        name: "Runway ML",
        website: "https://runwayml.com",
        category: "video",
        description: "AI-powered creative suite for video editing, generation, and enhancement with cutting-edge tools.",
        pricing: "$12-76/month",
        rating: 4.4,
        features: ["Video Generation", "AI Editing", "Real-time Tools", "Creative Suite"],
        icon: "🎬",
        featured: false
      },
      {
        id: 7,
        name: "ElevenLabs",
        website: "https://elevenlabs.io",
        category: "audio",
        description: "Revolutionary AI voice synthesis for realistic speech generation, voice cloning, and dubbing.",
        pricing: "Free / $5-330/month",
        rating: 4.7,
        features: ["Voice Cloning", "Multilingual", "Real-time", "High Quality"],
        icon: "🎤",
        featured: false
      },
      {
        id: 8,
        name: "Notion AI",
        website: "https://notion.so/product/ai",
        category: "productivity",
        description: "Integrated AI assistant within Notion for writing, brainstorming, and organizing your workspace.",
        pricing: "$8-15/month",
        rating: 4.3,
        features: ["Writing Assistant", "Brainstorming", "Workspace Integration", "Content Generation"],
        icon: "📝",
        featured: false
      },
      {
        id: 9,
        name: "Stable Diffusion",
        website: "https://stablediffusionweb.com",
        category: "image",
        description: "Open-source AI image generator with community models and customization options.",
        pricing: "Free / Various hosting",
        rating: 4.5,
        features: ["Open Source", "Customizable", "Community Models", "Local Running"],
        icon: "🌟",
        featured: false
      },
      {
        id: 10,
        name: "Jasper AI",
        website: "https://jasper.ai",
        category: "writing",
        description: "AI content platform for marketing teams to create original, high-converting content at scale.",
        pricing: "$39-125/month",
        rating: 4.4,
        features: ["Marketing Focus", "Brand Voice", "Templates", "Team Collaboration"],
        icon: "📈",
        featured: false
      },
      {
        id: 11,
        name: "Copy.ai",
        website: "https://copy.ai",
        category: "writing",
        description: "AI copywriter for creating marketing copy, blog posts, and sales content that converts.",
        pricing: "Free / $36-186/month",
        rating: 4.2,
        features: ["Copywriting", "Templates", "Workflows", "Brand Kit"],
        icon: "✍️",
        featured: false
      },
      {
        id: 12,
        name: "Perplexity AI",
        website: "https://perplexity.ai",
        category: "research",
        description: "AI-powered search engine that provides accurate answers with cited sources for research.",
        pricing: "Free / $20/month",
        rating: 4.6,
        features: ["Source Citations", "Real-time Search", "Research Focus", "Academic Mode"],
        icon: "🔍",
        featured: true
      },
      {
        id: 13,
        name: "Canva AI",
        website: "https://canva.com/ai-image-generator",
        category: "design",
        description: "AI-powered design tools integrated into Canva for generating images, presentations, and graphics.",
        pricing: "Free / $15/month",
        rating: 4.3,
        features: ["Design Integration", "Templates", "Magic Resize", "Background Removal"],
        icon: "🎨",
        featured: false
      },
      {
        id: 14,
        name: "Loom AI",
        website: "https://loom.com",
        category: "video",
        description: "AI-enhanced video messaging with automatic summaries, chapters, and transcriptions.",
        pricing: "Free / $8-16/month",
        rating: 4.5,
        features: ["Auto Summaries", "Transcription", "Video Messaging", "AI Insights"],
        icon: "📹",
        featured: false
      },
      {
        id: 15,
        name: "Cursor",
        website: "https://cursor.sh",
        category: "coding",
        description: "AI-first code editor with advanced autocomplete, chat, and code generation capabilities.",
        pricing: "Free / $20/month",
        rating: 4.7,
        features: ["AI Code Editor", "Chat Interface", "Codebase Understanding", "Pair Programming"],
        icon: "⌨️",
        featured: false
      },
      {
        id: 16,
        name: "Suno AI",
        website: "https://suno.ai",
        category: "audio",
        description: "AI music generation platform for creating songs from text prompts with vocals and instruments.",
        pricing: "Free / $8-24/month",
        rating: 4.6,
        features: ["Music Generation", "Lyrics to Music", "Various Genres", "High Quality"],
        icon: "🎵",
        featured: false
      },
      {
        id: 17,
        name: "V0 by Vercel",
        website: "https://v0.dev",
        category: "coding",
        description: "AI-powered UI component generator that creates React components from text descriptions.",
        pricing: "Free / $20/month",
        rating: 4.5,
        features: ["UI Generation", "React Components", "Tailwind CSS", "Code Export"],
        icon: "🔧",
        featured: false
      },
      {
        id: 18,
        name: "Grammarly",
        website: "https://grammarly.com",
        category: "writing",
        description: "AI-powered writing assistant for grammar checking, style improvement, and tone adjustment.",
        pricing: "Free / $12-15/month",
        rating: 4.4,
        features: ["Grammar Check", "Style Suggestions", "Plagiarism Detection", "Tone Adjustment"],
        icon: "📝",
        featured: false
      },
      {
        id: 19,
        name: "Zapier AI",
        website: "https://zapier.com/ai",
        category: "productivity",
        description: "AI automation platform connecting apps and services with intelligent workflow suggestions.",
        pricing: "Free / $20-50/month",
        rating: 4.3,
        features: ["Workflow Automation", "App Integration", "AI Suggestions", "No-Code"],
        icon: "⚡",
        featured: false
      },
      {
        id: 20,
        name: "Figma AI",
        website: "https://figma.com",
        category: "design",
        description: "AI-powered design features in Figma for generating designs, removing backgrounds, and writing copy.",
        pricing: "Free / $12-45/month",
        rating: 4.4,
        features: ["Design Generation", "Smart Selection", "Copy Writing", "Background Removal"],
        icon: "🎯",
        featured: false
      },
      {
        id: 21,
        name: "Replit AI",
        website: "https://replit.com",
        category: "coding",
        description: "AI coding assistant integrated into collaborative online development environment.",
        pricing: "Free / $7-20/month",
        rating: 4.4,
        features: ["Code Completion", "Pair Programming", "Multiple Languages", "Cloud IDE"],
        icon: "🔗",
        featured: false
      },
      {
        id: 22,
        name: "Speechify",
        website: "https://speechify.com",
        category: "audio",
        description: "AI text-to-speech tool for converting written content into natural-sounding audio.",
        pricing: "Free / $9-29/month",
        rating: 4.5,
        features: ["Text to Speech", "Natural Voices", "Speed Control", "Multiple Formats"],
        icon: "🔊",
        featured: false
      },
      {
        id: 23,
        name: "Framer AI",
        website: "https://framer.com",
        category: "design",
        description: "AI-powered website builder with advanced design capabilities and responsive generation.",
        pricing: "Free / $5-30/month",
        rating: 4.5,
        features: ["Website Builder", "AI Design", "Responsive", "Advanced Animations"],
        icon: "🌐",
        featured: false
      },
      {
        id: 24,
        name: "Tome",
        website: "https://tome.app",
        category: "productivity",
        description: "AI-powered presentation and storytelling platform for creating engaging content.",
        pricing: "Free / $8-16/month",
        rating: 4.2,
        features: ["Presentation Generation", "Storytelling", "AI Design", "Collaboration"],
        icon: "📊",
        featured: false
      },
      {
        id: 25,
        name: "Character.AI",
        website: "https://character.ai",
        category: "writing",
        description: "Platform for creating and chatting with AI characters for entertainment and creativity.",
        pricing: "Free / $10/month",
        rating: 4.4,
        features: ["Character Creation", "Role Playing", "Conversations", "Community"],
        icon: "🎭",
        featured: false
      }
    ])
  }, [])

  const filteredTools = aiTools
    .filter(tool => selectedToolCategory === 'all' || tool.category === selectedToolCategory)
    .filter(tool => tool.name.toLowerCase().includes(toolSearchQuery.toLowerCase()) || 
                   tool.description.toLowerCase().includes(toolSearchQuery.toLowerCase()))

  const featuredTools = aiTools.filter(tool => tool.featured)

  const handleSubmitToolForm = async (e) => {
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
          
Tool Name: ${submitToolForm.toolName}
Website: ${submitToolForm.website}
Category: ${submitToolForm.category}
Pricing: ${submitToolForm.pricing}
Description: ${submitToolForm.description}
Contact Email: ${submitToolForm.contactEmail}

Submitted from AIPromptGen.tech AI Tools Directory`,
          _replyto: submitToolForm.contactEmail
        }),
      })
      
      if (response.ok) {
        showToast('🎉 Tool submission sent successfully! We\'ll review it and get back to you.')
        setSubmitToolForm({ 
          toolName: '', 
          website: '', 
          category: '', 
          description: '', 
          contactEmail: '',
          pricing: ''
        })
      } else {
        showToast('Failed to submit tool. Please try again.')
      }
    } catch (error) {
      showToast('Failed to submit tool. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Hero Section */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-6">
              🔧 AI Tools Directory
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
              Discover the best AI tools for productivity, creativity, and innovation
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto">
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Search AI tools..."
                  className="w-full px-6 py-4 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                  value={toolSearchQuery}
                  onChange={(e) => setToolSearchQuery(e.target.value)}
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <span className="text-gray-400 text-xl">🔍</span>
                </div>
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { key: 'all', label: 'All Tools', emoji: '🔧' },
                  { key: 'writing', label: 'Writing', emoji: '✍️' },
                  { key: 'image', label: 'Image', emoji: '🎨' },
                  { key: 'video', label: 'Video', emoji: '🎬' },
                  { key: 'audio', label: 'Audio', emoji: '🎤' },
                  { key: 'coding', label: 'Coding', emoji: '💻' },
                  { key: 'productivity', label: 'Productivity', emoji: '📈' },
                  { key: 'research', label: 'Research', emoji: '🔍' },
                  { key: 'design', label: 'Design', emoji: '🎯' }
                ].map((category) => (
                  <button
                    key={category.key}
                    onClick={() => setSelectedToolCategory(category.key)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedToolCategory === category.key
                        ? 'bg-blue-600 text-white transform scale-105'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                    }`}
                  >
                    {category.emoji} {category.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Tools */}
          {selectedToolCategory === 'all' && featuredTools.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">⭐ Featured Tools</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {featuredTools.map((tool) => (
                  <div key={tool.id} className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{tool.icon}</span>
                        <div>
                          <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{tool.name}</h3>
                          <div className="flex items-center gap-1">
                            <span className="text-yellow-400">⭐</span>
                            <span className="text-gray-300 text-sm">{tool.rating}</span>
                          </div>
                        </div>
                      </div>
                      <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">FEATURED</span>
                    </div>
                    
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{tool.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tool.features.slice(0, 2).map((feature, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-900/30 text-blue-400 text-xs rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-green-400 font-medium text-sm">{tool.pricing}</span>
                      <a
                        href={tool.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                      >
                        Try Now →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* All Tools Grid */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">
              {selectedToolCategory === 'all' ? 'All AI Tools' : `${selectedToolCategory.charAt(0).toUpperCase() + selectedToolCategory.slice(1)} Tools`} ({filteredTools.length})
            </h2>
            
            {filteredTools.length === 0 ? (
              <div className="text-center py-12">
                <span className="text-6xl mb-4 block">🔧</span>
                <h3 className="text-xl font-bold text-white mb-2">No tools found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredTools.map((tool) => (
                  <div key={tool.id} className="bg-gray-700 rounded-lg p-6 border border-gray-600 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{tool.icon}</span>
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{tool.name}</h3>
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-400">⭐</span>
                          <span className="text-gray-300 text-sm">{tool.rating}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">{tool.description}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {tool.features.slice(0, 3).map((feature, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-600 text-gray-300 text-xs rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-green-400 font-medium text-sm">{tool.pricing}</span>
                      <div className="flex gap-2">
                        <a
                          href={tool.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors"
                        >
                          Try Now
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Submit Tool Section */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">📧 Submit Your AI Tool</h2>
            <p className="text-gray-300 mb-6">
              Know an amazing AI tool that should be featured? Submit it for review and help the community discover new innovations!
            </p>
            
            <form onSubmit={handleSubmitToolForm} className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Tool Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={submitToolForm.toolName}
                  onChange={(e) => setSubmitToolForm({...submitToolForm, toolName: e.target.value})}
                  placeholder="e.g., ChatGPT"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Website URL *
                </label>
                <input
                  type="url"
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={submitToolForm.website}
                  onChange={(e) => setSubmitToolForm({...submitToolForm, website: e.target.value})}
                  placeholder="https://example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Category *
                </label>
                <select
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={submitToolForm.category}
                  onChange={(e) => setSubmitToolForm({...submitToolForm, category: e.target.value})}
                >
                  <option value="">Select a category</option>
                  <option value="writing">Writing</option>
                  <option value="image">Image</option>
                  <option value="video">Video</option>
                  <option value="audio">Audio</option>
                  <option value="coding">Coding</option>
                  <option value="productivity">Productivity</option>
                  <option value="research">Research</option>
                  <option value="design">Design</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Pricing *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={submitToolForm.pricing}
                  onChange={(e) => setSubmitToolForm({...submitToolForm, pricing: e.target.value})}
                  placeholder="e.g., Free / $20/month"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={submitToolForm.contactEmail}
                  onChange={(e) => setSubmitToolForm({...submitToolForm, contactEmail: e.target.value})}
                  placeholder="your@email.com"
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Description *
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={submitToolForm.description}
                  onChange={(e) => setSubmitToolForm({...submitToolForm, description: e.target.value})}
                  placeholder="Describe what this AI tool does and its key features..."
                />
              </div>
              
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200"
                >
                  🚀 Submit Tool for Review
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

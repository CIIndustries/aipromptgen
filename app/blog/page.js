'use client'
import { useState, useEffect } from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { showToast } from '../../components/Toast'

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState([])
  const [selectedBlogCategory, setSelectedBlogCategory] = useState('all')
  const [blogSearchQuery, setBlogSearchQuery] = useState('')
  const [selectedBlogPost, setSelectedBlogPost] = useState(null)
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false)

  useEffect(() => {
    // Initialize Blog Posts - copied exactly from original React app
    setBlogPosts([
      {
        id: 1,
        title: "The Complete Guide to AI Prompt Engineering in 2025",
        excerpt: "Master the art and science of prompt engineering with advanced techniques that professional AI engineers use daily.",
        category: "prompt-engineering",
        author: "AIPromptGen Research Team",
        authorRole: "Senior Prompt Engineers",
        date: "2025-01-15",
        readTime: "12 min read",
        rating: 4.9,
        views: "15.2K",
        tags: ["Prompt Engineering", "Advanced Techniques", "Best Practices", "Tutorial"],
        featured: true,
        content: `# The Complete Guide to AI Prompt Engineering in 2025

## Introduction

Prompt engineering has evolved from a simple art to a sophisticated science that can dramatically improve AI model performance. In 2025, the field has matured with established best practices, proven techniques, and measurable methodologies.

## Core Principles of Effective Prompt Engineering

### 1. Context Setting
The foundation of any great prompt lies in establishing clear context. Your AI model needs to understand the specific domain, target audience, desired output format, and any constraints.

### 2. Instruction Clarity
Ambiguous instructions lead to unpredictable results. Use specific action verbs, clear parameters, examples when possible, and step-by-step breakdowns for complex tasks.

### 3. Output Formatting
Define exactly how you want the response structured using templates, length requirements, tone preferences, and formatting instructions.

## Advanced Techniques

### Chain-of-Thought Prompting
Guide the AI through logical reasoning steps by asking it to think through problems step by step.

### Few-Shot Learning
Provide examples to establish patterns that the AI can follow for new inputs.

### Role-Based Prompting
Assign specific roles to leverage domain expertise and get more targeted responses.

## Conclusion

Mastering prompt engineering is essential for maximizing AI potential in 2025. Practice, measure, and refine your approach continuously.`
      },
      {
        id: 2,
        title: "ChatGPT vs Claude vs Gemini: The Ultimate AI Model Comparison",
        excerpt: "A comprehensive analysis of the top AI models in 2025, helping you choose the right tool for your specific needs.",
        category: "ai-models",
        author: "AI Comparison Labs",
        authorRole: "Model Testing Specialists",
        date: "2025-01-12",
        readTime: "15 min read",
        rating: 4.8,
        views: "22.7K",
        tags: ["AI Models", "Comparison", "ChatGPT", "Claude", "Gemini"],
        featured: true,
        content: `# ChatGPT vs Claude vs Gemini: The Ultimate AI Model Comparison

## Executive Summary

In 2025, the AI landscape is dominated by three major players: OpenAI's ChatGPT, Anthropic's Claude, and Google's Gemini. Each model has unique strengths and optimal use cases.

## ChatGPT (GPT-4 and GPT-4 Turbo)

### Strengths
- **Versatility**: Excels across diverse tasks
- **Code Generation**: Superior programming capabilities
- **Integration**: Extensive API ecosystem
- **Plugins**: Rich marketplace of extensions

### Best For
- Software development and debugging
- Creative writing and content generation
- Business applications and automation
- Educational tutoring and explanations

## Claude (Claude-3 Opus, Sonnet, Haiku)

### Strengths
- **Safety**: Constitutional AI approach
- **Analysis**: Deep analytical reasoning
- **Context**: Longer context windows
- **Nuance**: Better understanding of subtle instructions

### Best For
- Research and analysis
- Legal and compliance tasks
- Long-form content creation
- Sensitive or high-stakes applications

## Google Gemini

### Strengths
- **Multimodal**: Native image and text processing
- **Integration**: Deep Google ecosystem integration
- **Real-time**: Access to current information
- **Efficiency**: Optimized for specific Google services

### Best For
- Multimodal applications
- Google Workspace integration
- Real-time information tasks
- Image analysis and generation

## Choosing the Right Model

Consider your specific needs:
- **Development**: ChatGPT
- **Analysis**: Claude
- **Multimodal**: Gemini
- **General Use**: Any, based on availability and cost

## Future Trends

The AI model landscape continues evolving rapidly, with new capabilities and improvements released frequently.`
      },
      {
        id: 3,
        title: "10 AI Prompts That Will Transform Your Productivity",
        excerpt: "Battle-tested prompt templates that have helped thousands of professionals streamline their workflows and boost efficiency.",
        category: "productivity",
        author: "Productivity AI Institute",
        authorRole: "Workflow Optimization Experts",
        date: "2025-01-10",
        readTime: "10 min read",
        rating: 4.9,
        views: "31.5K",
        tags: ["Productivity", "Templates", "Workflows", "Efficiency"],
        featured: true,
        content: `# 10 AI Prompts That Will Transform Your Productivity

## Introduction

These 10 AI prompts have been tested and refined by thousands of professionals across industries. Each prompt is designed to solve common productivity challenges.

## 1. The Perfect Meeting Summarizer
Transform lengthy meeting recordings into actionable summaries with clear decisions, action items, and follow-up requirements.

## 2. Email Response Generator
Craft professional responses quickly while maintaining your voice. Perfect for customer service and business communications.

## 3. Strategic Planning Assistant
Break down complex projects into manageable phases with risk analysis and resource requirements.

## 4. Content Research Accelerator
Rapidly research and organize information with expert opinions and actionable insights.

## 5. Problem-Solving Framework
Systematically approach complex challenges with root cause analysis and solution brainstorming.

## 6. Learning Accelerator
Master new skills efficiently with personalized learning plans and practice projects.

## 7. Communication Optimizer
Improve clarity and impact of your communications with better structure and tone.

## 8. Decision-Making Assistant
Make better decisions faster with structured analysis and scenario planning.

## 9. Workflow Automation Planner
Identify and plan process improvements with automation opportunities.

## 10. Creative Brainstorming Engine
Generate innovative ideas using traditional solutions and unconventional methods.

## Implementation Tips
Start with one prompt and master it before moving to others. The key to productivity is working smarter, not just faster.`
      },
      {
        id: 4,
        title: "Advanced Prompt Engineering for Software Developers",
        excerpt: "Leverage AI to accelerate coding, debugging, and documentation with sophisticated prompt engineering techniques.",
        category: "prompt-engineering",
        author: "DevAI Collective",
        authorRole: "AI-Powered Development Experts",
        date: "2025-01-08",
        readTime: "14 min read",
        rating: 4.7,
        views: "18.3K",
        tags: ["Coding", "Development", "Debugging", "Technical Writing"],
        featured: false,
        content: `# Advanced Prompt Engineering for Software Developers

## Introduction

Modern software development increasingly relies on AI assistance. This guide covers advanced prompt engineering techniques specifically for developers.

## Code Generation Prompts

### The Architecture Planner
Structure complex applications with clear separation of concerns and scalable patterns.

### The Bug Hunter
Systematically identify and fix issues with guided debugging approaches.

### The Documentation Generator
Create comprehensive, maintainable documentation automatically.

## Best Practices

1. **Context Setting**: Always provide file structure and dependencies
2. **Specification Clarity**: Define exact requirements and constraints
3. **Error Handling**: Include edge cases and error scenarios
4. **Testing Integration**: Generate tests alongside implementation code

## Advanced Techniques

### Multi-Step Workflows
Break complex development tasks into manageable, sequential prompts.

### Code Review Assistant
Systematically review code for security, performance, and maintainability.

### Refactoring Guide
Improve existing code structure while maintaining functionality.

## Conclusion

AI-assisted development is not about replacing developers but amplifying their capabilities and efficiency.`
      },
      {
        id: 5,
        title: "The Future of AI: Predictions for 2025-2030",
        excerpt: "Expert insights into upcoming AI developments, from autonomous agents to breakthrough applications across industries.",
        category: "ai-trends",
        author: "FutureTech Research Institute",
        authorRole: "AI Trend Analysts",
        date: "2025-01-05",
        readTime: "16 min read",
        rating: 4.6,
        views: "19.8K",
        tags: ["Future Tech", "AI Trends", "Predictions", "Innovation"],
        featured: false,
        content: `# The Future of AI: Predictions for 2025-2030

## Executive Summary

The next five years will witness unprecedented AI advancement across multiple domains, fundamentally reshaping how we work, create, and solve complex problems.

## Key Predictions

### 1. Autonomous AI Agents (2025-2027)
AI systems will plan and execute complex multi-step tasks, interact with multiple systems, and operate with minimal human supervision.

### 2. Multimodal AI Integration (2025-2026)
Seamless integration of text, image, audio, and video processing in unified AI systems.

### 3. Edge AI and Distributed Intelligence (2025-2026)
AI processing moves to local devices and edge infrastructure, providing reduced latency, enhanced privacy, and offline capabilities.

### 4. AI-Generated Synthetic Media (2025-2028)
Photorealistic content generation advances to real-time video synthesis and personalized content at scale.

## Industry Applications

Healthcare, education, and transportation will see transformative changes through AI implementation.

## Preparing for the AI Future

Individuals should develop AI literacy and focus on uniquely human skills. Organizations need comprehensive AI strategies and workforce development.

The next five years will be pivotal for AI development.`
      }
    ])
  }, [])

  const filteredBlogPosts = blogPosts
    .filter(post => selectedBlogCategory === 'all' || post.category === selectedBlogCategory)
    .filter(post => post.title.toLowerCase().includes(blogSearchQuery.toLowerCase()) || 
                   post.excerpt.toLowerCase().includes(blogSearchQuery.toLowerCase()))

  const featuredPosts = blogPosts.filter(post => post.featured)

  const openBlogModal = (post) => {
    setSelectedBlogPost(post)
    setIsBlogModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeBlogModal = () => {
    setSelectedBlogPost(null)
    setIsBlogModalOpen(false)
    document.body.style.overflow = 'unset'
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Hero Section */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-6">
              📝 AI Blog & Resources
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
              Latest insights, tutorials, and best practices for AI prompt engineering
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto">
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Search blog posts..."
                  className="w-full px-6 py-4 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                  value={blogSearchQuery}
                  onChange={(e) => setBlogSearchQuery(e.target.value)}
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <span className="text-gray-400 text-xl">🔍</span>
                </div>
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { key: 'all', label: 'All Posts', emoji: '📝' },
                  { key: 'prompt-engineering', label: 'Prompt Engineering', emoji: '🔧' },
                  { key: 'ai-models', label: 'AI Models', emoji: '🤖' },
                  { key: 'productivity', label: 'Productivity', emoji: '📈' },
                  { key: 'ai-trends', label: 'AI Trends', emoji: '🚀' }
                ].map((category) => (
                  <button
                    key={category.key}
                    onClick={() => setSelectedBlogCategory(category.key)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedBlogCategory === category.key
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

          {/* Featured Posts */}
          {selectedBlogCategory === 'all' && featuredPosts.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">⭐ Featured Articles</h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {featuredPosts.map((post) => (
                  <div key={post.id} className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group cursor-pointer"
                       onClick={() => openBlogModal(post)}>
                    <div className="flex items-start justify-between mb-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">FEATURED</span>
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-400">⭐</span>
                        <span className="text-sm text-gray-300">{post.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-900/30 text-blue-400 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center space-x-4">
                        <span>👁️ {post.views}</span>
                        <span>📖 {post.readTime}</span>
                      </div>
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* All Posts */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">
              📚 All Blog Posts ({filteredBlogPosts.length})
            </h2>
            
            {filteredBlogPosts.length === 0 ? (
              <div className="text-center py-12">
                <span className="text-6xl mb-4 block">📝</span>
                <h3 className="text-xl font-bold text-white mb-2">No posts found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredBlogPosts.map((post) => (
                  <div key={post.id} className="bg-gray-700 rounded-lg p-6 border border-gray-600 hover:border-blue-500 transition-all duration-300 cursor-pointer group"
                       onClick={() => openBlogModal(post)}>
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-300 mb-3 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span>👤 {post.author}</span>
                          <span>📅 {new Date(post.date).toLocaleDateString()}</span>
                          <span>📖 {post.readTime}</span>
                          <span>👁️ {post.views}</span>
                          <div className="flex items-center space-x-1">
                            <span className="text-yellow-400">⭐</span>
                            <span>{post.rating}</span>
                          </div>
                        </div>
                      </div>
                      <button className="ml-4 text-gray-400 hover:text-white transition-colors">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-600 text-gray-300 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Blog Modal */}
      {isBlogModalOpen && selectedBlogPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
            <div className="sticky top-0 bg-gray-800 border-b border-gray-700 p-6 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">{selectedBlogPost.title}</h2>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span>👤 {selectedBlogPost.author}</span>
                  <span>📅 {new Date(selectedBlogPost.date).toLocaleDateString()}</span>
                  <span>📖 {selectedBlogPost.readTime}</span>
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-400">⭐</span>
                    <span>{selectedBlogPost.rating}</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={closeBlogModal}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6">
              <div className="prose prose-invert max-w-none">
                <div className="whitespace-pre-wrap text-gray-300 leading-relaxed">
                  {selectedBlogPost.content}
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-700">
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedBlogPost.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-900/30 text-blue-400 text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="bg-gray-700 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2">About the Author</h4>
                  <p className="text-gray-300">
                    <strong>{selectedBlogPost.author}</strong> - {selectedBlogPost.authorRole}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  )
}

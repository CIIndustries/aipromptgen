'use client'
import { useState } from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedPost, setSelectedPost] = useState(null)

  const categories = ['All', 'AI Tools', 'Prompt Engineering', 'Tutorials', 'Industry News', 'Tips & Tricks']

  const blogPosts = [
    {
      id: 1,
      title: 'The Complete Guide to AI Prompt Engineering in 2025',
      excerpt: 'Master the art of creating effective AI prompts with our comprehensive guide covering techniques, best practices, and real-world examples.',
      content: `
# The Complete Guide to AI Prompt Engineering in 2025

Prompt engineering has become one of the most valuable skills in the AI era. Whether you're working with ChatGPT, Claude, Gemini, or any other AI model, knowing how to craft effective prompts can dramatically improve your results.

## What is Prompt Engineering?

Prompt engineering is the practice of designing and optimizing text inputs to get the best possible outputs from AI language models. It's both an art and a science that requires understanding how AI models interpret and respond to different types of instructions.

## Key Principles

### 1. Be Specific and Clear
Instead of: "Write about dogs"
Try: "Write a 300-word article about the benefits of adopting rescue dogs for first-time pet owners"

### 2. Use Context and Examples
Provide background information and examples to guide the AI's response.

### 3. Structure Your Prompts
Use clear formatting, bullet points, and numbered lists to organize your requests.

## Advanced Techniques

- **Chain of Thought**: Ask the AI to explain its reasoning step by step
- **Role Playing**: Have the AI take on specific personas or expertise
- **Template Prompts**: Create reusable prompt structures for common tasks

## Conclusion

Mastering prompt engineering takes practice, but the investment is worth it. Start with these fundamentals and gradually experiment with more advanced techniques.
      `,
      category: 'Prompt Engineering',
      author: 'AIPromptGen Team',
      date: '2025-01-15',
      readTime: '8 min read',
      image: '/api/placeholder/600/300',
      tags: ['AI', 'Prompt Engineering', 'Tutorial', 'Guide']
    },
    {
      id: 2,
      title: 'Top 10 AI Tools Every Content Creator Should Know in 2025',
      excerpt: 'Discover the most powerful AI tools that are revolutionizing content creation, from writing assistants to image generators.',
      content: `
# Top 10 AI Tools Every Content Creator Should Know in 2025

The content creation landscape has been transformed by AI. Here are the essential tools every creator should have in their toolkit.

## 1. ChatGPT - The Writing Assistant

Perfect for brainstorming, drafting, and editing content across all formats.

## 2. Midjourney - Visual Storytelling

Create stunning images and artwork with simple text descriptions.

## 3. Claude - Long-form Content

Excellent for detailed articles, research, and complex writing tasks.

## 4. Canva AI - Design Made Simple

Generate professional designs with AI-powered suggestions.

## 5. ElevenLabs - Voice Synthesis

Create realistic voiceovers and audio content.

And 5 more amazing tools that will transform your content creation workflow...
      `,
      category: 'AI Tools',
      author: 'Content Team',
      date: '2025-01-14',
      readTime: '12 min read',
      image: '/api/placeholder/600/300',
      tags: ['AI Tools', 'Content Creation', 'Productivity']
    },
    {
      id: 3,
      title: 'How to Use Voice Input for AI Prompt Generation',
      excerpt: 'Learn how to leverage speech-to-text technology to create prompts faster and more naturally than ever before.',
      content: `
# How to Use Voice Input for AI Prompt Generation

Voice input is revolutionizing how we interact with AI. Instead of typing lengthy prompts, you can now speak naturally and let speech-to-text technology do the work.

## Benefits of Voice Input

- **Speed**: Speak 3x faster than you type
- **Natural Flow**: Express ideas more naturally
- **Accessibility**: Perfect for users with typing difficulties
- **Multitasking**: Create prompts while doing other tasks

## Getting Started

1. **Enable Microphone**: Allow browser access to your microphone
2. **Speak Clearly**: Use clear pronunciation and natural pacing
3. **Structure Your Thoughts**: Organize ideas before speaking
4. **Edit and Refine**: Review and improve the transcribed text

## Best Practices

- Speak in complete sentences
- Use verbal punctuation ("comma", "period")
- Pause between different ideas
- Review and edit the transcribed text

Voice input is the future of AI interaction. Start practicing today!
      `,
      category: 'Tutorials',
      author: 'Tech Team',
      date: '2025-01-13',
      readTime: '6 min read',
      image: '/api/placeholder/600/300',
      tags: ['Voice Input', 'Tutorial', 'Technology']
    },
    {
      id: 4,
      title: 'The Future of AI: What to Expect in 2025',
      excerpt: 'Explore the latest trends and predictions for artificial intelligence, from multimodal AI to new breakthrough applications.',
      content: `
# The Future of AI: What to Expect in 2025

2025 is shaping up to be a pivotal year for artificial intelligence. Here's what experts predict we'll see.

## Major Trends

### Multimodal AI
AI systems that can process text, images, audio, and video simultaneously.

### Improved Reasoning
Better logical thinking and problem-solving capabilities.

### Specialized Models
Industry-specific AI tools for healthcare, finance, education, and more.

## Impact on Industries

- **Education**: Personalized learning experiences
- **Healthcare**: Diagnostic assistance and drug discovery
- **Creative Industries**: New forms of art and entertainment
- **Business**: Automated decision-making and analysis

The future is exciting, and we're just getting started!
      `,
      category: 'Industry News',
      author: 'Research Team',
      date: '2025-01-12',
      readTime: '10 min read',
      image: '/api/placeholder/600/300',
      tags: ['Future', 'AI Trends', 'Industry', 'Predictions']
    },
    {
      id: 5,
      title: '5 Quick Tips to Improve Your AI Prompts Instantly',
      excerpt: 'Simple but effective techniques to get better results from any AI model with minimal effort.',
      content: `
# 5 Quick Tips to Improve Your AI Prompts Instantly

Want better AI results? These simple tips will immediately improve your prompt effectiveness.

## Tip 1: Add Context
Always provide background information about your request.

## Tip 2: Specify Format
Tell the AI exactly how you want the output structured.

## Tip 3: Use Examples
Show the AI what you're looking for with concrete examples.

## Tip 4: Set Constraints
Define length, tone, style, and other requirements clearly.

## Tip 5: Iterate and Refine
Don't expect perfection on the first try - refine your prompts.

These simple changes will dramatically improve your AI interactions!
      `,
      category: 'Tips & Tricks',
      author: 'AIPromptGen Team',
      date: '2025-01-11',
      readTime: '4 min read',
      image: '/api/placeholder/600/300',
      tags: ['Tips', 'Quick Guide', 'Improvement']
    },
    {
      id: 6,
      title: 'Building an AI-Powered Workflow for Content Teams',
      excerpt: 'Step-by-step guide to integrating AI tools into your content creation process for maximum efficiency.',
      content: `
# Building an AI-Powered Workflow for Content Teams

Transform your content team's productivity with a well-designed AI workflow.

## Planning Phase
- Use AI for topic research and trend analysis
- Generate content calendars and publishing schedules
- Create detailed content briefs and outlines

## Creation Phase
- Draft content with AI writing assistants
- Generate images and graphics with AI tools
- Create variations and alternatives quickly

## Review Phase
- AI-powered editing and proofreading
- SEO optimization suggestions
- Performance prediction and improvement tips

## Publishing Phase
- Automated social media post generation
- Meta descriptions and title optimization
- Distribution strategy recommendations

A well-integrated AI workflow can increase content team productivity by 300%!
      `,
      category: 'Tutorials',
      author: 'Workflow Expert',
      date: '2025-01-10',
      readTime: '15 min read',
      image: '/api/placeholder/600/300',
      tags: ['Workflow', 'Content Teams', 'Productivity', 'AI Integration']
    }
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category.toLowerCase() === selectedCategory.toLowerCase()
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const handleReadMore = (post) => {
    setSelectedPost(post)
  }

  const handleCloseModal = () => {
    setSelectedPost(null)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              AI Insights Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Latest insights, tutorials, and news about AI, prompt engineering, and productivity
            </p>
          </div>

          {/* Search and Filter */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category.toLowerCase())}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedCategory === category.toLowerCase()
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

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-colors card-hover">
                <div className="h-48 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">📝</span>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-xs">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-400">
                      <div>{post.author}</div>
                      <div>{post.date}</div>
                    </div>
                    <button
                      onClick={() => handleReadMore(post)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>

      {/* Blog Post Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded-full">
                      {selectedPost.category}
                    </span>
                    <span className="text-gray-400 text-xs">{selectedPost.readTime}</span>
                  </div>
                  <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {selectedPost.title}
                  </h1>
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-6">
                    <span>By {selectedPost.author}</span>
                    <span>{selectedPost.date}</span>
                  </div>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="ml-4 text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="prose prose-invert max-w-none">
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {selectedPost.content}
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-700">
                <div className="flex flex-wrap gap-2">
                  {selectedPost.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full">
                      #{tag}
                    </span>
                  ))}
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

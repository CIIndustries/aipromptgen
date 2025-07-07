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


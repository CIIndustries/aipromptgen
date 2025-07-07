'use client'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import DonationPopup from '../components/DonationPopup'
import VoiceInput from '../components/VoiceInput'
import { showToast } from '../components/Toast'

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'https://aipromptgen.tech-backend-production.up.railway.app'
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
        prompt: inputPrompt,
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


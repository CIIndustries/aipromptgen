'use client'
import { useState, useEffect, useRef } from 'react'

export default function VoiceInput({ onTranscript, disabled }) {
  const [isListening, setIsListening] = useState(false)
  const [interimTranscript, setInterimTranscript] = useState('')
  const speechRecognitionRef = useRef(null)
  const timeoutRef = useRef(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      const recognition = new SpeechRecognition()
      
      recognition.continuous = true
      recognition.interimResults = true
      recognition.lang = 'en-US'
      recognition.maxAlternatives = 1
      
      recognition.onresult = (event) => {
        let interim = ''
        let final = ''
        
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript
          if (event.results[i].isFinal) {
            final += transcript
          } else {
            interim += transcript
          }
        }
        
        if (final) {
          onTranscript(final)
          setInterimTranscript('')
          
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
          }
          timeoutRef.current = setTimeout(() => {
            if (speechRecognitionRef.current) {
              speechRecognitionRef.current.stop()
              showToast('Voice input stopped (4 second pause detected)')
            }
          }, 4000)
        } else {
          setInterimTranscript(interim)
        }
      }
      
      recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error)
        if (event.error === 'not-allowed') {
          showToast('Microphone access denied. Please allow microphone permission.')
        } else if (event.error === 'no-speech') {
          console.log('No speech detected, waiting for timeout...')
        } else if (event.error === 'aborted') {
          setIsListening(false)
          setInterimTranscript('')
        } else {
          showToast('Voice input error. Please try again.')
        }
        setIsListening(false)
      }
      
      recognition.onend = () => {
        setIsListening(false)
        setInterimTranscript('')
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
          timeoutRef.current = null
        }
      }
      
      recognition.onstart = () => {
        setIsListening(true)
        setInterimTranscript('')
        
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }
        timeoutRef.current = setTimeout(() => {
          if (speechRecognitionRef.current) {
            speechRecognitionRef.current.stop()
            showToast('Voice input stopped (6 second timeout)')
          }
        }, 6000)
      }
      
      speechRecognitionRef.current = recognition
    }
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [onTranscript])

  const showToast = (message) => {
    const toast = document.createElement('div')
    toast.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 transition-all duration-300'
    toast.textContent = message
    document.body.appendChild(toast)
    setTimeout(() => {
      toast.style.opacity = '0'
      setTimeout(() => document.body.removeChild(toast), 300)
    }, 2000)
  }

  const toggleVoiceInput = () => {
    if (!speechRecognitionRef.current) {
      showToast('Voice input not supported in this browser')
      return
    }
    
    if (isListening) {
      speechRecognitionRef.current.stop()
      setIsListening(false)
      setInterimTranscript('')
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
      return
    }
    
    try {
      speechRecognitionRef.current.start()
    } catch (error) {
      console.error('Speech recognition error:', error)
      setIsListening(false)
      showToast('Failed to start voice input. Please try again.')
    }
  }

  return (
    <div className="relative">
      <button
        onClick={toggleVoiceInput}
        disabled={disabled}
        className={`p-2 rounded-lg transition-all duration-300 ${
          disabled 
            ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
            : isListening 
              ? 'bg-red-500 text-white animate-pulse' 
              : 'bg-blue-500 text-white hover:bg-blue-600'
        }`}
        title={isListening ? 'Stop recording' : 'Start voice input'}
      >
        {isListening ? (
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
          </svg>
        ) : (
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
        )}
      </button>
      
      {isListening && (
        <div className="absolute top-12 left-0 bg-gray-800 border border-red-500 rounded-lg p-4 w-64 z-50 animate-fadeIn">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-white">Recording... Keep speaking naturally</span>
          </div>
          
          <button
            onClick={toggleVoiceInput}
            className="absolute top-2 right-2 text-gray-400 hover:text-white"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {interimTranscript && (
            <div className="mt-2 p-2 bg-gray-700 rounded text-sm text-gray-300">
              <span className="text-blue-400">Live:</span> {interimTranscript}
            </div>
          )}
          
          <div className="mt-2 text-xs text-gray-400">
            💡 Pauses of 4 seconds will automatically stop recording
          </div>
        </div>
      )}
    </div>
  )
}

'use client'
import { useEffect, useState } from 'react'

let toastId = 0

export function showToast(message, type = 'success') {
  const id = ++toastId
  const toast = document.createElement('div')
  toast.id = `toast-${id}`
  toast.className = `fixed top-4 right-4 px-4 py-2 rounded-lg shadow-lg z-50 transition-all duration-300 text-white font-medium ${
    type === 'success' ? 'bg-green-500' : 
    type === 'error' ? 'bg-red-500' : 
    type === 'warning' ? 'bg-yellow-500' : 
    'bg-blue-500'
  }`
  toast.textContent = message
  
  document.body.appendChild(toast)
  
  // Animate in
  setTimeout(() => {
    toast.style.transform = 'translateX(0)'
    toast.style.opacity = '1'
  }, 10)
  
  // Auto remove
  setTimeout(() => {
    toast.style.opacity = '0'
    toast.style.transform = 'translateX(100%)'
    setTimeout(() => {
      if (document.body.contains(toast)) {
        document.body.removeChild(toast)
      }
    }, 300)
  }, 3000)
}

export default function Toast({ message, type = 'success', onClose }) {
  const [isVisible, setIsVisible] = useState(true)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(() => onClose?.(), 300)
    }, 3000)
    
    return () => clearTimeout(timer)
  }, [onClose])
  
  if (!isVisible) return null
  
  return (
    <div className={`fixed top-4 right-4 px-4 py-2 rounded-lg shadow-lg z-50 transition-all duration-300 text-white font-medium ${
      type === 'success' ? 'bg-green-500' : 
      type === 'error' ? 'bg-red-500' : 
      type === 'warning' ? 'bg-yellow-500' : 
      'bg-blue-500'
    }`}>
      {message}
    </div>
  )
}

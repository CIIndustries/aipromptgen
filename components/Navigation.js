'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: 'Generator', href: '/', current: pathname === '/' },
    { name: 'AI Tools', href: '/tools', current: pathname === '/tools' },
    { name: 'About', href: '/about', current: pathname === '/about' },
    { name: 'Contact', href: '/contact', current: pathname === '/contact' },
    { name: 'History', href: '/history', current: pathname === '/history' },
    { name: 'Favorites', href: '/favorites', current: pathname === '/favorites' },
  ]

  return (
    <nav className="bg-gray-800 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-2xl">🚀</span>
                <span className="text-xl font-bold text-white">
                  AIPromptGen<span className="text-blue-400">Pro</span>
                </span>
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    item.current
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  item.current
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

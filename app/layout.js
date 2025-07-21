import './globals.css'

export const metadata = {
  title: 'AIPromptGen Pro - Professional AI Prompt Generator',
  description: 'Transform simple ideas into powerful AI prompts. Professional prompt engineering for ChatGPT, Claude, Gemini, Midjourney and more. Free online tool with model-specific optimization.',
  keywords: 'AI prompt generator, ChatGPT prompts, Claude prompts, prompt engineering, AI tools, artificial intelligence, prompt optimization, Midjourney prompts, DALL-E prompts, Gemini prompts',
  authors: [{ name: 'AIPromptGen Pro' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://aipromptgen.tech/',
    title: 'AIPromptGen Pro - Professional AI Prompt Generator',
    description: 'Transform simple ideas into powerful AI prompts. Professional prompt engineering for ChatGPT, Claude, Gemini, Midjourney and more.',
    siteName: 'AIPromptGen Pro',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AIPromptGen Pro',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AIPromptGen Pro - Professional AI Prompt Generator',
    description: 'Transform simple ideas into powerful AI prompts. Professional prompt engineering for ChatGPT, Claude, Gemini, Midjourney and more.',
    images: ['/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://aipromptgen.tech/',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="theme-color" content="#2563eb" />
        <meta name="google-adsense-account" content="ca-pub-4591516845324922" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-5GX6BQS5NP"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-5GX6BQS5NP');
            `,
          }}
        />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "AIPromptGen Pro",
              "description": "Professional AI prompt generator that transforms simple ideas into detailed, structured prompts for various AI models including ChatGPT, Claude, Gemini, and Midjourney.",
              "url": "https://aipromptgen.tech",
              "applicationCategory": "ProductivityApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "provider": {
                "@type": "Organization",
                "name": "AIPromptGen Pro",
                "url": "https://aipromptgen.tech"
              },
              "featureList": [
                "AI Prompt Generation",
                "Model-Specific Optimization",
                "Prompt History",
                "Favorites Management",
                "Export Options",
                "Direct AI Integration"
              ]
            })
          }}
        />
        
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4591516845324922"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-gray-900 text-white min-h-screen">
        {children}
      </body>
    </html>
  )
}

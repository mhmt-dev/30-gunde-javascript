'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { CheckCircle, Download, Mail, Sparkles, ArrowRight } from 'lucide-react'

function SuccessContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [email, setEmail] = useState('')

  useEffect(() => {
    // Track conversion for analytics
    if (typeof window !== 'undefined' && sessionId) {
      // Facebook Pixel
      // fbq('track', 'Purchase', { value: 4.99, currency: 'USD' })

      // Google Analytics
      // gtag('event', 'purchase', { value: 4.99, currency: 'USD' })
    }
  }, [sessionId])

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6 animate-bounce">
              <CheckCircle className="w-14 h-14 text-green-600" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Payment Successful! 🎉
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              Thank you for your purchase! Your AI Prompt Library is ready.
            </p>

            {sessionId && (
              <div className="inline-block bg-gray-100 px-6 py-3 rounded-lg">
                <p className="text-sm text-gray-500">Order ID</p>
                <p className="font-mono text-sm">{sessionId.slice(0, 24)}...</p>
              </div>
            )}
          </div>

          {/* Download Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Download className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold">Download Your Prompts</h2>
            </div>

            <div className="space-y-4 mb-6">
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl border-2 border-purple-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-lg mb-1">AI Prompt Library - Complete Collection</h3>
                    <p className="text-sm text-gray-600">PDF Format • 1000+ Prompts • 15 MB</p>
                  </div>
                  <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full font-bold hover:shadow-lg transition-shadow flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    Download
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl border-2 border-purple-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-lg mb-1">Bonus: Quick Start Guide</h3>
                    <p className="text-sm text-gray-600">PDF Format • How to Use • 2 MB</p>
                  </div>
                  <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full font-bold hover:shadow-lg transition-shadow flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    Download
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-semibold text-blue-900 mb-1">Check Your Email</p>
                  <p className="text-blue-800">
                    We've sent download links to your email address. Check your inbox and spam folder.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-yellow-500" />
              What's Next?
            </h2>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-purple-600">
                  1
                </div>
                <div>
                  <h3 className="font-bold mb-1">Download Your Files</h3>
                  <p className="text-gray-600">Click the download buttons above to get your prompt library</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-purple-600">
                  2
                </div>
                <div>
                  <h3 className="font-bold mb-1">Open ChatGPT</h3>
                  <p className="text-gray-600">Go to ChatGPT, Claude, or your favorite AI assistant</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-purple-600">
                  3
                </div>
                <div>
                  <h3 className="font-bold mb-1">Copy & Paste Prompts</h3>
                  <p className="text-gray-600">Choose any prompt from the library and start getting amazing results!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Share Section */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl shadow-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Love It? Share With Friends! 🚀</h2>
            <p className="mb-6 opacity-90">
              Help your friends save time with AI prompts. They'll thank you!
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-bold hover:shadow-lg transition-shadow">
                Share on Twitter
              </button>
              <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-bold hover:shadow-lg transition-shadow">
                Share on Facebook
              </button>
              <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-bold hover:shadow-lg transition-shadow">
                Share on LinkedIn
              </button>
            </div>
          </div>

          {/* Support */}
          <div className="text-center mt-8 text-gray-600">
            <p className="mb-2">Need help? Have questions?</p>
            <a href="mailto:support@aipromptlibrary.com" className="text-purple-600 font-semibold hover:underline">
              support@aipromptlibrary.com
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600"></div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  )
}

'use client'

import { useState } from 'react'
import { Sparkles, Zap, TrendingUp, DollarSign, Clock, CheckCircle, Star, Users, ArrowRight, Lock, Download } from 'lucide-react'

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)
  const [selectedPrice, setSelectedPrice] = useState('basic')

  const pricingPlans = {
    basic: {
      name: 'Starter Pack',
      price: 2.99,
      prompts: '500+ Prompts',
      priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_BASIC
    },
    pro: {
      name: 'Pro Pack',
      price: 4.99,
      prompts: '1000+ Prompts',
      priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_PRO
    },
    ultimate: {
      name: 'Ultimate Pack',
      price: 9.99,
      prompts: '2000+ Prompts + Updates',
      priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ULTIMATE
    }
  }

  const handleCheckout = async () => {
    setIsLoading(true)

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: pricingPlans[selectedPrice as keyof typeof pricingPlans].priceId,
          planName: pricingPlans[selectedPrice as keyof typeof pricingPlans].name
        }),
      })

      const { url } = await response.json()

      if (url) {
        window.location.href = url
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg animate-pulse">
              🔥 2,847 people bought this in the last 24 hours
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text leading-tight">
            1000+ Premium AI Prompts<br />That Actually Work
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Stop wasting time writing prompts. Get instant access to our battle-tested ChatGPT prompt library used by 50,000+ professionals
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <span className="font-semibold">4.9/5</span>
              <span className="text-gray-500">(3,421 reviews)</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
              <Users className="w-5 h-5 text-purple-600" />
              <span className="font-semibold">50,000+ Users</span>
            </div>
          </div>
        </header>

        {/* Pricing Cards */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Choose Your Plan</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {Object.entries(pricingPlans).map(([key, plan]) => (
              <div
                key={key}
                onClick={() => setSelectedPrice(key)}
                className={`relative bg-white rounded-2xl p-8 cursor-pointer transition-all transform hover:scale-105 ${
                  selectedPrice === key
                    ? 'ring-4 ring-purple-600 shadow-2xl'
                    : 'shadow-lg hover:shadow-xl'
                }`}
              >
                {key === 'pro' && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-5xl font-bold gradient-text mb-2">
                    ${plan.price}
                  </div>
                  <p className="text-gray-600">{plan.prompts}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Instant Download</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Ready to Use</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Lifetime Access</span>
                  </li>
                  {key !== 'basic' && (
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Advanced Prompts</span>
                    </li>
                  )}
                  {key === 'ultimate' && (
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Free Updates Forever</span>
                    </li>
                  )}
                </ul>

                {selectedPrice === key && (
                  <div className="text-center text-purple-600 font-bold">
                    ✓ Selected
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={handleCheckout}
              disabled={isLoading}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xl font-bold px-12 py-6 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all pulse-glow disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                  Processing...
                </>
              ) : (
                <>
                  <Lock className="w-6 h-6" />
                  Get Instant Access Now
                  <ArrowRight className="w-6 h-6" />
                </>
              )}
            </button>

            <p className="text-sm text-gray-500 mt-4">
              🔒 Secure checkout powered by Stripe • 30-day money-back guarantee
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <Sparkles className="w-7 h-7 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">1000+ Tested Prompts</h3>
            <p className="text-gray-600">
              Every prompt has been tested and optimized for maximum results with ChatGPT, GPT-4, and Claude
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Zap className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Instant Results</h3>
            <p className="text-gray-600">
              Copy, paste, and get amazing results in seconds. No learning curve, no complicated setup
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <TrendingUp className="w-7 h-7 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">10x Your Productivity</h3>
            <p className="text-gray-600">
              Save 10+ hours per week with ready-to-use prompts for marketing, coding, writing, and business
            </p>
          </div>
        </div>

        {/* Categories */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">What's Inside?</h2>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              { icon: '💼', name: 'Business Strategy', count: 150 },
              { icon: '📱', name: 'Social Media', count: 200 },
              { icon: '✍️', name: 'Content Writing', count: 180 },
              { icon: '💻', name: 'Coding & Tech', count: 120 },
              { icon: '🎨', name: 'Design & Creative', count: 90 },
              { icon: '📊', name: 'Data Analysis', count: 80 },
              { icon: '🎓', name: 'Education', count: 100 },
              { icon: '🚀', name: 'Productivity', count: 80 }
            ].map((category) => (
              <div key={category.name} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-2">{category.icon}</div>
                <div className="font-bold">{category.name}</div>
                <div className="text-sm text-gray-500">{category.count}+ prompts</div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Proof */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">What People Are Saying</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Sarah K.',
                role: 'Marketing Manager',
                text: 'These prompts are GOLD! Saved me 15 hours this week alone. Best $5 I\'ve ever spent.',
                rating: 5
              },
              {
                name: 'Mike Chen',
                role: 'Software Engineer',
                text: 'The coding prompts are insanely good. Worth 100x the price. My productivity has skyrocketed!',
                rating: 5
              },
              {
                name: 'Jessica R.',
                role: 'Content Creator',
                text: 'Finally! Prompts that actually work. Got 10k views on my first post using these.',
                rating: 5
              }
            ].map((review) => (
              <div key={review.name} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                <div className="font-bold">{review.name}</div>
                <div className="text-sm text-gray-500">{review.role}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white p-12 rounded-3xl shadow-2xl">
          <h2 className="text-4xl font-bold mb-4">
            Don't Waste Another Hour on Bad Prompts
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join 50,000+ professionals who are already 10x-ing their productivity with AI
          </p>

          <button
            onClick={handleCheckout}
            disabled={isLoading}
            className="inline-flex items-center gap-3 bg-white text-purple-600 text-xl font-bold px-12 py-6 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all disabled:opacity-50"
          >
            <Download className="w-6 h-6" />
            Get Instant Access - ${pricingPlans[selectedPrice as keyof typeof pricingPlans].price}
            <ArrowRight className="w-6 h-6" />
          </button>

          <p className="text-sm mt-6 opacity-75">
            ⚡ Instant download • 🔒 Secure payment • 💯 30-day guarantee
          </p>
        </div>

        {/* Footer */}
        <footer className="text-center mt-16 text-gray-500 text-sm">
          <p>© 2024 AI Prompt Library. All rights reserved.</p>
          <p className="mt-2">Questions? Contact: support@aipromptlibrary.com</p>
        </footer>
      </div>
    </main>
  )
}

"use client";

import Link from "next/link";

export default function Pricing() {
  return (
    <section className="py-16 px-4 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          One price. Unlimited value.
        </p>
        
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 shadow-2xl transform hover:scale-105 transition-all duration-300">
          <div className="inline-block bg-yellow-400 text-black font-bold px-4 py-2 rounded-full text-sm mb-6">
            LIMITED TIME OFFER
          </div>
          
          <div className="mb-6">
            <div className="text-gray-300 line-through text-2xl mb-2">$19.99</div>
            <div className="text-7xl font-extrabold mb-2">$2.99</div>
            <div className="text-xl text-gray-200">One-time payment</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 text-left">
            <h3 className="font-bold text-xl mb-4 text-center">What You Get:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-green-400 text-xl flex-shrink-0">✓</span>
                <span>6 professional AI-generated headshots</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 text-xl flex-shrink-0">✓</span>
                <span>Multiple styles (corporate, creative, casual)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 text-xl flex-shrink-0">✓</span>
                <span>High-resolution downloads (perfect for print)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 text-xl flex-shrink-0">✓</span>
                <span>Instant delivery (60 seconds or less)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 text-xl flex-shrink-0">✓</span>
                <span>Commercial usage rights included</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 text-xl flex-shrink-0">✓</span>
                <span>100% money-back guarantee</span>
              </li>
            </ul>
          </div>
          
          <Link 
            href="/upload"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-xl px-12 py-5 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-200"
          >
            Get My Headshots Now
          </Link>
          
          <p className="text-sm text-gray-200 mt-6">
            🔒 Secure payment via Stripe • 💳 All major cards accepted
          </p>
        </div>
        
        <div className="mt-12 text-gray-400 text-sm">
          <p>Compare: Professional photographer headshots cost $150-500+</p>
          <p className="mt-2">Save 98% with AI Headshot Pro</p>
        </div>
      </div>
    </section>
  );
}

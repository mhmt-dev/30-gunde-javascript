"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      
      <div className="relative max-w-6xl mx-auto text-center z-10">
        <div className="inline-block mb-4 px-4 py-2 bg-yellow-400 text-black font-bold rounded-full text-sm animate-pulse">
          🔥 OVER 50,000+ HEADSHOTS CREATED
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Get Professional Headshots<br />
          <span className="text-yellow-300">in 60 Seconds</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95">
          Transform your selfie into stunning AI-powered professional photos. 
          Perfect for LinkedIn, resumes, dating apps, and social media.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Link 
            href="/upload"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-10 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-200"
          >
            Create My Headshots Now - $2.99
          </Link>
          <div className="text-sm opacity-90">
            ⚡ Instant delivery • 💳 Secure payment • ✨ Money-back guarantee
          </div>
        </div>
        
        <div className="flex justify-center items-center gap-8 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-2xl">⭐⭐⭐⭐⭐</span>
            <span>4.9/5 (12,847 reviews)</span>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}

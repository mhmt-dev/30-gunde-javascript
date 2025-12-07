"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function SuccessContent() {
  const searchParams = useSearchParams();
  const [isProcessing, setIsProcessing] = useState(true);
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const imageId = searchParams.get('image_id');

  useEffect(() => {
    // Retrieve the original image from localStorage
    if (imageId) {
      const storedImage = localStorage.getItem(imageId);
      if (storedImage) {
        setOriginalImage(storedImage);
      }
    }

    // Simulate AI processing
    const timer = setTimeout(() => {
      setIsProcessing(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [imageId]);

  const styles = [
    { name: "Corporate Professional", color: "from-blue-600 to-blue-800" },
    { name: "Creative Modern", color: "from-purple-600 to-pink-600" },
    { name: "Casual Friendly", color: "from-green-600 to-teal-600" },
    { name: "Executive Formal", color: "from-gray-700 to-gray-900" },
    { name: "Modern Minimalist", color: "from-indigo-600 to-blue-600" },
    { name: "Classic Timeless", color: "from-amber-700 to-orange-800" },
  ];

  if (isProcessing) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-600 mb-8"></div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Creating Your Professional Headshots...
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our AI is working its magic ✨
          </p>
          <div className="max-w-md mx-auto bg-white rounded-xl p-6 shadow-lg">
            <div className="space-y-3 text-left">
              <div className="flex items-center gap-3">
                <div className="text-green-500 text-2xl">✓</div>
                <span className="text-gray-700">Analyzing your photo...</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-green-500 text-2xl">✓</div>
                <span className="text-gray-700">Enhancing features...</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="animate-pulse text-blue-500 text-2xl">⟳</div>
                <span className="text-gray-700">Generating 6 styles...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-green-500 text-white px-6 py-3 rounded-full font-bold mb-6 animate-bounce">
            ✓ Payment Successful!
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your Headshots Are Ready! 🎉
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Download all 6 professional styles below
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {styles.map((style, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className={`bg-gradient-to-br ${style.color} h-64 flex items-center justify-center relative`}>
                {originalImage ? (
                  <img 
                    src={originalImage} 
                    alt={style.name}
                    className="w-full h-full object-cover opacity-90"
                  />
                ) : (
                  <div className="text-white text-center p-6">
                    <div className="text-6xl mb-4">✨</div>
                    <div className="font-bold text-lg">{style.name}</div>
                  </div>
                )}
                <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
                  AI Enhanced
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900 mb-3">{style.name}</h3>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors duration-200">
                  Download High-Res
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center shadow-xl mb-8">
          <h3 className="text-2xl font-bold mb-4">Love Your Headshots?</h3>
          <p className="text-lg mb-6">
            Share with friends and get 50% off your next order!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-8 py-3 rounded-full transition-colors duration-200">
              Share on LinkedIn
            </button>
            <button className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-8 py-3 rounded-full transition-colors duration-200">
              Share on Twitter
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            What&apos;s Next?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl mb-3">💼</div>
              <h4 className="font-bold text-gray-900 mb-2">Update LinkedIn</h4>
              <p className="text-gray-600 text-sm">
                Upload your new headshot to stand out professionally
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">📧</div>
              <h4 className="font-bold text-gray-900 mb-2">Check Your Email</h4>
              <p className="text-gray-600 text-sm">
                We&apos;ve sent download links to your email address
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">⭐</div>
              <h4 className="font-bold text-gray-900 mb-2">Leave a Review</h4>
              <p className="text-gray-600 text-sm">
                Help others discover AI Headshot Pro
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link 
            href="/"
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-600 mb-8"></div>
          <h2 className="text-3xl font-bold text-gray-900">Loading...</h2>
        </div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}

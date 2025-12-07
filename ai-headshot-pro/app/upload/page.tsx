"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function UploadPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const router = useRouter();

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file');
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert('File size must be less than 10MB');
      return;
    }

    setSelectedFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleCheckout = async () => {
    if (!selectedFile) {
      alert('Please upload a photo first');
      return;
    }

    setIsProcessing(true);

    try {
      // Generate a unique image ID
      const imageId = `img_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      // Store the image in localStorage for demo purposes
      if (preview) {
        localStorage.setItem(imageId, preview);
      }

      // Create Stripe checkout session
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imageId }),
      });

      const data = await response.json();

      if (data.url) {
        // Redirect to Stripe Checkout
        window.location.href = data.url;
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <Link href="/" className="text-blue-600 hover:text-blue-700 font-semibold mb-4 inline-block">
              ← Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Upload Your Photo
            </h1>
            <p className="text-xl text-gray-600">
              Get 6 professional AI headshots in 60 seconds
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
            {!preview ? (
              <div
                className={`border-4 border-dashed rounded-xl p-12 text-center transition-all duration-200 ${
                  dragActive
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <div className="text-6xl mb-4">📸</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Drop your photo here
                </h3>
                <p className="text-gray-600 mb-6">
                  or click to browse
                </p>
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleChange}
                />
                <label
                  htmlFor="file-upload"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-full cursor-pointer transition-colors duration-200"
                >
                  Choose Photo
                </label>
                <p className="text-sm text-gray-500 mt-4">
                  Supported: JPG, PNG, HEIC • Max size: 10MB
                </p>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-full max-w-md mx-auto rounded-xl shadow-lg"
                  />
                </div>
                <div className="text-center">
                  <button
                    onClick={() => {
                      setSelectedFile(null);
                      setPreview(null);
                    }}
                    className="text-gray-600 hover:text-gray-800 font-semibold mb-4 inline-block"
                  >
                    Choose Different Photo
                  </button>
                </div>
              </div>
            )}
          </div>

          {preview && (
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform?</h3>
              <p className="mb-6 text-lg">
                You&apos;ll receive 6 professional headshots in different styles
              </p>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-3xl mb-1">⚡</div>
                  <div className="text-xs">60 seconds</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-3xl mb-1">🎨</div>
                  <div className="text-xs">6 styles</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-3xl mb-1">📱</div>
                  <div className="text-xs">High-res</div>
                </div>
              </div>
              <button
                onClick={handleCheckout}
                disabled={isProcessing}
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-xl px-12 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isProcessing ? 'Processing...' : 'Continue to Payment - $2.99'}
              </button>
              <p className="text-sm mt-4 text-white/80">
                🔒 Secure payment • 💰 Money-back guarantee
              </p>
            </div>
          )}

          <div className="mt-8 bg-blue-50 rounded-xl p-6">
            <h4 className="font-bold text-gray-900 mb-3">Tips for Best Results:</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Use a clear, well-lit photo of your face</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Face the camera directly</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Avoid sunglasses, hats, or heavy filters</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Make sure your face is clearly visible</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

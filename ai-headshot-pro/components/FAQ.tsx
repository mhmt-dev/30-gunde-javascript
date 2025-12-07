"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does it work?",
      answer: "Simply upload a clear selfie, pay $2.99, and our AI will generate 6 professional headshots in different styles within 60 seconds. You'll get instant download access to all images."
    },
    {
      question: "What photo should I upload?",
      answer: "Upload a clear, well-lit photo of your face. Front-facing selfies work best. Avoid sunglasses, hats, or heavy filters. The better your input photo, the better your results!"
    },
    {
      question: "How long does it take?",
      answer: "Most headshots are ready in under 60 seconds! You'll receive an email with download links immediately after processing is complete."
    },
    {
      question: "Can I use these photos commercially?",
      answer: "Yes! You have full commercial usage rights. Use them on LinkedIn, your website, business cards, marketing materials, dating apps, or anywhere else you need a professional photo."
    },
    {
      question: "What if I'm not satisfied?",
      answer: "We offer a 100% money-back guarantee. If you're not happy with your headshots, contact us within 30 days for a full refund, no questions asked."
    },
    {
      question: "Is my photo secure?",
      answer: "Absolutely. Your photos are processed securely and automatically deleted after 24 hours. We never share or sell your images to third parties."
    },
    {
      question: "What styles do I get?",
      answer: "You'll receive 6 headshots in different professional styles: Corporate, Creative, Casual, Executive, Modern, and Classic. Perfect for any professional context!"
    },
    {
      question: "What resolution are the photos?",
      answer: "All headshots are high-resolution (2048x2048 pixels), perfect for both digital use and professional printing."
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
          Frequently Asked Questions
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          Everything you need to know
        </p>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left p-6 bg-white hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
              >
                <span className="font-bold text-lg text-gray-900">{faq.question}</span>
                <span className="text-2xl text-gray-600 flex-shrink-0 ml-4">
                  {openIndex === idx ? "−" : "+"}
                </span>
              </button>
              {openIndex === idx && (
                <div className="p-6 pt-0 bg-gray-50">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

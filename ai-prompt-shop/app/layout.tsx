import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Prompt Library - 1000+ Premium ChatGPT Prompts',
  description: 'Unlock the power of AI with our premium collection of 1000+ tested ChatGPT prompts for business, marketing, coding, writing & more. Instant access for just $2.99!',
  keywords: 'ChatGPT prompts, AI prompts, GPT-4 prompts, prompt engineering, AI tools, productivity',
  openGraph: {
    title: 'AI Prompt Library - 1000+ Premium ChatGPT Prompts',
    description: 'Unlock the power of AI with our premium collection of 1000+ tested ChatGPT prompts',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Prompt Library - 1000+ Premium ChatGPT Prompts',
    description: 'Unlock the power of AI with our premium collection of 1000+ tested ChatGPT prompts',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

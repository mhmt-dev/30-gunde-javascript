import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Headshot Pro - Professional Profile Pictures in 60 Seconds",
  description: "Transform your selfie into stunning professional headshots perfect for LinkedIn, resumes, and social media. AI-powered, instant results.",
  keywords: "AI headshot, professional photo, LinkedIn profile picture, AI portrait, headshot generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

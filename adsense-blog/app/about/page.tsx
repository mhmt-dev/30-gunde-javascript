import Image from "next/image";

export const metadata = {
  title: "About Us | InsightHub",
  description: "Learn more about InsightHub and our mission to provide expert insights and practical guides.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">About InsightHub</h1>
          <p className="text-xl">Your trusted source for expert knowledge and insights</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            At InsightHub, we believe that knowledge should be accessible, practical, and actionable. Our mission is to provide high-quality, well-researched content that helps our readers make informed decisions, develop new skills, and stay ahead in their personal and professional lives.
          </p>

          <h2 className="text-3xl font-bold mb-6 mt-12">What We Do</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We publish comprehensive guides, expert analyses, and practical tips across a wide range of topics including technology, lifestyle, health, finance, career development, and more. Each article is carefully researched and written by experienced professionals who are passionate about sharing their knowledge.
          </p>

          <h2 className="text-3xl font-bold mb-6 mt-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Quality First</h3>
              <p className="text-gray-700">
                We prioritize quality over quantity, ensuring every article provides genuine value to our readers.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Accuracy</h3>
              <p className="text-gray-700">
                All our content is thoroughly researched and fact-checked to ensure accuracy and reliability.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Accessibility</h3>
              <p className="text-gray-700">
                We make complex topics easy to understand, breaking down information into digestible insights.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Community</h3>
              <p className="text-gray-700">
                We foster a community of learners and professionals who support each other's growth.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6 mt-12">Our Team</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            InsightHub is powered by a diverse team of writers, editors, and subject matter experts from various fields. Our contributors include industry professionals, academics, and experienced practitioners who bring real-world insights to every article they write.
          </p>

          <h2 className="text-3xl font-bold mb-6 mt-12">Join Our Community</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We're more than just a blog—we're a community of curious minds and lifelong learners. Subscribe to our newsletter to receive the latest articles, exclusive insights, and updates directly to your inbox. Follow us on social media to join the conversation and connect with fellow readers.
          </p>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mt-12">
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <p className="mb-6">
              Have questions, suggestions, or want to contribute? We'd love to hear from you!
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

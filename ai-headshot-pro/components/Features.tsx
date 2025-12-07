export default function Features() {
  const features = [
    {
      emoji: "⚡",
      title: "Lightning Fast",
      description: "Get your professional headshots in under 60 seconds"
    },
    {
      emoji: "🎨",
      title: "6 Unique Styles",
      description: "Corporate, creative, casual, executive, modern, and classic"
    },
    {
      emoji: "📱",
      title: "High Resolution",
      description: "Perfect quality for print, web, and social media"
    },
    {
      emoji: "🔒",
      title: "100% Private",
      description: "Your photos are processed securely and never shared"
    },
    {
      emoji: "💰",
      title: "Money Back Guarantee",
      description: "Not satisfied? Get a full refund, no questions asked"
    },
    {
      emoji: "🌍",
      title: "Instant Download",
      description: "Download all your headshots immediately after payment"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
          Why Choose AI Headshot Pro?
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          Professional results without the professional price tag
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="text-center p-6 rounded-xl hover:bg-gray-50 transition-all duration-300">
              <div className="text-6xl mb-4">{feature.emoji}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

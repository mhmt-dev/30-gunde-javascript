export default function Gallery() {
  const examples = [
    { before: "Casual selfie", after: "Corporate professional", color: "bg-blue-200" },
    { before: "Home photo", after: "Studio quality", color: "bg-purple-200" },
    { before: "Outdoor snap", after: "LinkedIn ready", color: "bg-pink-200" },
    { before: "Phone pic", after: "Executive portrait", color: "bg-green-200" },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
          See The Transformation
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          Real results from our AI technology
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {examples.map((example, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="relative">
                <div className={`${example.color} h-48 flex items-center justify-center`}>
                  <div className="text-center p-4">
                    <div className="text-6xl mb-2">📸</div>
                    <div className="text-sm font-semibold text-gray-700">{example.before}</div>
                  </div>
                </div>
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  BEFORE
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 h-48 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="text-6xl mb-2">✨</div>
                    <div className="text-sm font-semibold text-white">{example.after}</div>
                  </div>
                </div>
                <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  AFTER
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Join thousands of satisfied customers</p>
          <a 
            href="/upload"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg px-10 py-4 rounded-full shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Get Started Now - Only $2.99
          </a>
        </div>
      </div>
    </section>
  );
}

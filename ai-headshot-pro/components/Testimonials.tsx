export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Manager",
      text: "I needed a professional headshot for LinkedIn ASAP. This saved me hundreds of dollars and hours of time!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      text: "Incredible quality! My colleagues thought I hired a professional photographer. Best $3 I've ever spent.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Entrepreneur",
      text: "I use these headshots everywhere - website, social media, business cards. They look amazing!",
      rating: 5
    },
    {
      name: "David Thompson",
      role: "Sales Director",
      text: "Got 3x more profile views on LinkedIn after updating my photo. This tool is a game-changer!",
      rating: 5
    },
    {
      name: "Jessica Lee",
      role: "Freelance Designer",
      text: "As a creative professional, I'm picky about photos. These exceeded my expectations. Highly recommend!",
      rating: 5
    },
    {
      name: "Robert Martinez",
      role: "Real Estate Agent",
      text: "My clients love my new professional look. This is perfect for anyone in client-facing roles!",
      rating: 5
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
          Loved by Professionals Worldwide
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          Join 50,000+ happy customers
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">&quot;{testimonial.text}&quot;</p>
              <div className="border-t pt-4">
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

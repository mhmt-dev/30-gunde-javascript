import { Metadata } from "next";
import Link from "next/link";
import { getAllCategories, getArticlesByCategory } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Categories - InsightHub",
  description: "Browse articles by category on InsightHub. Find content about technology, lifestyle, health, finance, career, and more.",
};

export default function CategoriesPage() {
  const categories = getAllCategories();

  const categoryDescriptions: Record<string, string> = {
    Technology: "Explore the latest in tech trends, AI, software development, and digital innovation.",
    Lifestyle: "Discover tips for sustainable living, personal development, and modern lifestyle choices.",
    Health: "Learn about wellness, mental health, fitness, and healthy living practices.",
    Finance: "Get insights on personal finance, investing, cryptocurrency, and financial planning.",
    Career: "Advance your career with professional development tips, remote work strategies, and personal branding.",
    Travel: "Find travel guides, destination recommendations, and tips for exploring the world.",
    Food: "Explore culinary adventures, recipes, nutrition, and food culture.",
    Science: "Dive into scientific discoveries, research, and innovations shaping our world.",
  };

  const categoryColors: Record<string, string> = {
    Technology: "from-blue-500 to-cyan-500",
    Lifestyle: "from-green-500 to-emerald-500",
    Health: "from-red-500 to-pink-500",
    Finance: "from-yellow-500 to-orange-500",
    Career: "from-purple-500 to-indigo-500",
    Travel: "from-teal-500 to-blue-500",
    Food: "from-orange-500 to-red-500",
    Science: "from-indigo-500 to-purple-500",
  };

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Browse by Category</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our diverse collection of articles organized by topic. Find exactly what you're looking for.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const articleCount = getArticlesByCategory(category).length;
            const colorClass = categoryColors[category] || "from-gray-500 to-gray-700";

            return (
              <Link
                key={category}
                href={`/category/${category.toLowerCase()}`}
                className="group block"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                  <div className={`h-32 bg-gradient-to-r ${colorClass} flex items-center justify-center`}>
                    <h2 className="text-3xl font-bold text-white">{category}</h2>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">
                      {categoryDescriptions[category] || "Explore articles in this category."}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {articleCount} {articleCount === 1 ? "article" : "articles"}
                      </span>
                      <span className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                        View Articles →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getArticlesByCategory, getAllCategories } from "@/lib/articles";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({
    slug: category.toLowerCase(),
  }));
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const category = slug.charAt(0).toUpperCase() + slug.slice(1);
  
  return {
    title: `${category} Articles - InsightHub`,
    description: `Browse all ${category.toLowerCase()} articles on InsightHub. Expert insights, guides, and analysis.`,
  };
}

export default async function CategoryPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const category = slug.charAt(0).toUpperCase() + slug.slice(1);
  const articles = getArticlesByCategory(category);

  if (articles.length === 0) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Link href="/categories" className="text-blue-600 hover:text-blue-700 mb-4 inline-block">
            ← Back to Categories
          </Link>
          <h1 className="text-4xl font-bold mb-4">{category}</h1>
          <p className="text-xl text-gray-600">
            {articles.length} {articles.length === 1 ? "article" : "articles"} in this category
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/articles/${article.slug}`}
              className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-blue-600">
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-500">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{article.author}</span>
                  <span>{new Date(article.date).toLocaleDateString()}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

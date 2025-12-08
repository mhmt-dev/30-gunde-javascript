import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getArticleBySlug, allArticles } from "@/lib/articles";

export async function generateStaticParams() {
  return allArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.title} | InsightHub`,
    description: article.excerpt,
    keywords: `${article.category}, ${article.title}, blog, article`,
  };
}

export default async function ArticlePage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = allArticles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Article Header */}
      <div className="relative h-96 w-full">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href={`/categories/${article.category.toLowerCase()}`}
              className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4"
            >
              {article.category}
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {article.title}
            </h1>
            <div className="flex items-center gap-4 text-white">
              <span>{article.author}</span>
              <span>•</span>
              <span>{new Date(article.date).toLocaleDateString()}</span>
              <span>•</span>
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <div
            dangerouslySetInnerHTML={{
              __html: article.content
                .split("\n")
                .map((line) => {
                  if (line.startsWith("# ")) {
                    return `<h1 class="text-4xl font-bold mt-8 mb-4">${line.slice(2)}</h1>`;
                  } else if (line.startsWith("## ")) {
                    return `<h2 class="text-3xl font-bold mt-8 mb-4">${line.slice(3)}</h2>`;
                  } else if (line.startsWith("### ")) {
                    return `<h3 class="text-2xl font-bold mt-6 mb-3">${line.slice(4)}</h3>`;
                  } else if (line.startsWith("![")) {
                    // Parse markdown image syntax: ![alt](url)
                    const match = line.match(/!\[(.*?)\]\((.*?)\)/);
                    if (match) {
                      const [, alt, url] = match;
                      return `<img src="${url}" alt="${alt}" class="w-full h-auto rounded-lg my-6 shadow-md" loading="lazy" />`;
                    }
                    return "";
                  } else if (line.trim() === "") {
                    return "<br />";
                  } else {
                    return `<p class="text-gray-700 leading-relaxed mb-4">${line}</p>`;
                  }
                })
                .join(""),
            }}
          />
        </div>

        {/* Author Bio */}
        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-bold mb-2">About the Author</h3>
          <p className="text-gray-700">
            <strong>{article.author}</strong> is an expert contributor to InsightHub,
            specializing in {article.category.toLowerCase()} topics. With years of
            experience and a passion for sharing knowledge, they provide valuable
            insights to help readers succeed.
          </p>
        </div>

        {/* Share Section */}
        <div className="mt-8 flex items-center gap-4">
          <span className="font-semibold">Share this article:</span>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
            Twitter
          </button>
          <button className="px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-900 transition-colors">
            Facebook
          </button>
          <button className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition-colors">
            LinkedIn
          </button>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  href={`/articles/${relatedArticle.slug}`}
                  className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={relatedArticle.image}
                      alt={relatedArticle.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{relatedArticle.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

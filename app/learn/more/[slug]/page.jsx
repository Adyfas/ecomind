"use client";

import "@/styles/articles.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ArticlePage() {
  const { slug } = useParams();
  console.log("ini slugnya :", slug);
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log("ini datanya ", setArticle);

  useEffect(() => {
    if (!slug) return;
    const fetchArticle = async () => {
      try {
        const res = await fetch("/api/articles/getbyslug", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ slug }),
        });
        const data = await res.json();
        setArticle(data.article);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchArticle();
  }, [slug]);

  if (loading) return <div className="p-12 text-center">Loading...</div>;
  if (!article)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
          <Link href="/learn" className="text-green-600 hover:underline">
            ← Back to Articles
          </Link>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-white">
      <header className="max-w-5xl mx-auto px-4 pt-16 pb-8">
        <div className="text-start mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {article.title}
          </h1>

          <p className="text-xl text-start md:text-2xl text-gray-600 mb-8 max-w-3xl leading-relaxed">
            {article.excerpt}
          </p>
        </div>

        {/* Author Info - Medium Style */}
        <div className="flex items-start justify-start gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-linear-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">
                {article.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
            <div className="text-left">
              <p className="font-medium text-gray-900">{article.author}</p>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>
                  {new Date(article.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span>•</span>
                <span>{article.readTime} min read</span>
              </div>
            </div>
          </div>
        </div>

        {article.imageUrl && (
          <div className="mb-12">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
        )}
      </header>

      <article className="max-w-4xl mx-auto px-4 pb-20">
        <div className="slug" dangerouslySetInnerHTML={{ __html: article.content }} />

        {article.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-gray-200">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-linear-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center shrink-0">
              <span className="text-white font-bold">
                {article.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Written by {article.author}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Passionate about sustainability and environmental conservation.
                Sharing knowledge to inspire positive change in our world.
              </p>
            </div>
          </div>
        </div>

        {/* Back to Articles */}
        <div className="mt-12 text-center">
          <Link
            href="/learn"
            className="
              inline-flex 
              items-center 
              gap-2 
              text-gray-600 
              hover:text-gray-900 
              font-medium 
              transition-colors
              border
              border-gray-300
              px-6
              py-3
              rounded-full
              hover:border-gray-400
            "
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to all articles
          </Link>
        </div>
      </article>
    </div>
  );
}

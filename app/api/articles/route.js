"use server";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
const articlesDirectory = path.join(process.cwd(), "articles");
export async function GET() {
  try {
    if (!fs.existsSync(articlesDirectory)) {
      return NextResponse.json({ articles: [] });
    }

    const fileNames = fs.readdirSync(articlesDirectory);

    const allArticlesData = fileNames.map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(articlesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);

      return {
        slug,
        title: matterResult.data.title || "No Title",
        excerpt: matterResult.data.excerpt || "",
        author: matterResult.data.author || "Anonymous",
        date: matterResult.data.date || new Date().toISOString().split("T")[0],
        readTime: matterResult.data.readTime || "5",
        tags: matterResult.data.tags || [],
        imageUrl: matterResult.data.imageUrl || "/images/default-article.jpg",
        authorImage: matterResult.data.authorImage || null,
      };
    });

    const sortedArticles = allArticlesData.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });

    return NextResponse.json({ sortedArticles });
  } catch (error) {
    console.error("Error reading articles:", error);
    return NextResponse.json(
      { error: "Failed to fetch articles" },
      { status: 500 }
    );
  }
}

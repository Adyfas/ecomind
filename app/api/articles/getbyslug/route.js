import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export async function POST(req) {
  try {
    const { slug } = await req.json();
    console.log("ini slugnya server:", slug);
    if (!slug) {
      return NextResponse.json({ error: "Slug is required" }, { status: 400 });
    }

    const articlesDir = path.join(process.cwd(), "articles");
    const fullPath = path.join(articlesDir, `${slug}.md`);
    if (!fs.existsSync(fullPath)) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 });
    }

    const fileContent = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContent);
    const processed = await remark().use(html).process(content);

    const article = {
      slug,
      title: data.title || "Untitled",
      excerpt: data.excerpt || "",
      author: data.author || "Anonymous",
      date: data.date || new Date().toISOString(),
      readTime: data.readTime || "5",
      tags: data.tags || [],
      imageUrl: data.imageUrl || "/images/default-article.jpg",
      content: processed.toString(),
    };

    console.log("ini artikelnya Server: ", article);

    return NextResponse.json({ article });
  } catch (err) {
    console.error("Error reading article:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

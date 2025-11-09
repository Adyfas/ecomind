"use client";
import React, { useEffect, useState, useMemo } from "react";
import BlogCard from "./BlogCard";
import { motion } from "framer-motion";
import Link from "next/link";

const BlogSection = ({ page = false, searchQuery = "" }) => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await fetch("/api/articles");
        const result = await response.json();
        setDatas(result.sortedArticles || []);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    }
    fetchArticles();
  }, []);

  const filteredArticles = useMemo(() => {
    if (!searchQuery.trim()) return datas;
    const lowerQuery = searchQuery.toLowerCase();
    return datas.filter(
      (a) =>
        a.title.toLowerCase().includes(lowerQuery) ||
        a.excerpt.toLowerCase().includes(lowerQuery) ||
        a.tags?.some((t) => t.toLowerCase().includes(lowerQuery))
    );
  }, [datas, searchQuery]);

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <motion.h1
        className="text-4xl font-bold text-gray-900 mb-8 text-start"
        initial={{ opacity: page ? 1 : 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
      >
        Latest Articles
      </motion.h1>

      <motion.p
        className="text-xl max-w-2xl text-gray-900 mb-8 text-start"
        initial={{ opacity: page ? 1 : 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
      >
        Explore what you want to know. We've provided a little map to point you
        in the direction of a greener, cleaner, smarter, and more knowledgeable
        world.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        {filteredArticles.length === 0 ? (
          <p className="text-gray-500 italic">
            No articles found for “{searchQuery}”
          </p>
        ) : (
          filteredArticles.map((items, index) => (
            <BlogCard key={index} {...items} />
          ))
        )}
      </div>

      {!page && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
          className="grid place-content-center mt-8"
        >
          <Link
            href="/learn/more"
            className="p-4 hover:scale-105 transition-all duration-500 rounded-2xl border font-bold text-neon-dark border-neon-dark"
          >
            See More
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default BlogSection;

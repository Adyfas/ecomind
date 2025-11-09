"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const BlogCard = ({
  title,
  excerpt,
  author,
  date,
  readTime,
  tags,
  imageUrl,
  authorImage,
  slug,
}) => {
  const router = useRouter();

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      y: -4,
      transition: {
        duration: 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 1 },
    hover: { scale: 1.05 },
  };

  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      className="max-w-2xl mx-auto rounded-lg cursor-pointer mb-6 group"
      onClick={() => router.push(`/learn/more/${slug}`)}
    >
      <div className="flex flex-row items-start gap-4 p-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            {authorImage && (
              <div className="w-6 h-6 rounded-full overflow-hidden">
                <img
                  src={imageUrl}
                  alt={author}
                  width={24}
                  height={24}
                  className="object-cover"
                />
              </div>
            )}
            <span className="text-sm text-gray-900 font-medium">{author}</span>
            <span className="text-gray-500">·</span>
            <span className="text-sm text-gray-500">{date}</span>
          </div>
          <div className="mb-2">
            <h2 className="text-xl font-bold text-gray-900 line-clamp-2 leading-tight mb-2 group-hover:text-black">
              {title}
            </h2>
            <p className="text-gray-700 text-sm line-clamp-2 leading-relaxed">
              {excerpt}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-1">
              {tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs text-gray-500 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <span className="text-xs text-gray-500">{readTime} min read</span>
          </div>
        </div>

        {imageUrl && (
          <motion.div
            className="shrink-0 w-32 h-24 rounded overflow-hidden"
            variants={imageVariants}
            transition={{ duration: 0.3 }}
          >
            <img
              src={imageUrl}
              alt={title}
              width={128}
              height={96}
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </div>
    </motion.article>
  );
};

export default BlogCard;

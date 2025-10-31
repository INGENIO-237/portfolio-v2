"use client";

import { getKey } from "@/lib/utils";
import { motion } from "framer-motion";
import { Calendar, Clock, ExternalLink, BookOpen } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const blogPosts = [
    {
      title: "Building Scalable APIs with NestJS",
      excerpt: "Learn how to create robust and scalable backend services using NestJS framework with TypeScript.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Backend Development",
      tags: ["NestJS", "TypeScript", "API"],
      status: "coming-soon"
    },
    {
      title: "Microservices Architecture Patterns",
      excerpt: "Exploring different patterns and best practices for designing microservices architecture.",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "Architecture",
      tags: ["Microservices", "Architecture", "Design Patterns"],
      status: "coming-soon"
    },
    {
      title: "Payment Integration Best Practices",
      excerpt: "A comprehensive guide to integrating payment systems securely and efficiently.",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Integration",
      tags: ["Payments", "Stripe", "Security"],
      status: "coming-soon"
    },
    {
      title: "Database Optimization Techniques",
      excerpt: "Tips and strategies for optimizing database performance in production applications.",
      date: "2023-12-28",
      readTime: "15 min read",
      category: "Database",
      tags: ["MongoDB", "MySQL", "Performance"],
      status: "coming-soon"
    },
    {
      title: "Cloud Deployment Strategies",
      excerpt: "Modern approaches to deploying applications on cloud platforms with CI/CD pipelines.",
      date: "2023-12-20",
      readTime: "11 min read",
      category: "DevOps",
      tags: ["AWS", "Docker", "CI/CD"],
      status: "coming-soon"
    },
    {
      title: "API Security Fundamentals",
      excerpt: "Essential security practices for protecting your APIs from common vulnerabilities.",
      date: "2023-12-15",
      readTime: "9 min read",
      category: "Security",
      tags: ["Security", "API", "Authentication"],
      status: "coming-soon"
    }
  ];

  const categories = ["All", "Backend Development", "Architecture", "Integration", "Database", "DevOps", "Security"];

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen px-4 py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 text-4xl opacity-5">📝</div>
        <div className="absolute top-40 right-20 text-3xl opacity-5">💡</div>
        <div className="absolute bottom-40 left-20 text-5xl opacity-5">📚</div>
        <div className="absolute bottom-20 right-10 text-2xl opacity-5">✍️</div>
        <div className="absolute top-1/2 left-5 text-3xl opacity-5">🎯</div>
        <div className="absolute top-1/3 right-5 text-4xl opacity-5">🚀</div>
      </div>

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-p_green/10 text-p_green rounded-full border border-p_green/20 text-sm font-medium mb-6"
        >
          <span>📖</span>
          <span>Tech Blog</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-bold text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-white dark:from-white from-gray-900 to-gray-300 dark:to-gray-300 to-gray-600 bg-clip-text text-transparent"
        >
          Tech <span className="text-p_green">Insights</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl text-gray-300 dark:text-gray-300 text-gray-600 leading-relaxed"
        >
          Sharing knowledge about backend development, architecture patterns,
          <br className="hidden md:block" />
          and modern software engineering practices. 🚀
        </motion.p>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === category
                ? "bg-p_green text-white"
                : "bg-zinc-900/30 dark:bg-zinc-900/30 bg-white/90 text-gray-300 dark:text-gray-300 text-gray-600 border border-white/10 dark:border-white/10 border-gray-200 hover:border-p_green/30"
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={getKey()}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-p_green/10 to-blue-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative bg-zinc-900/50 dark:bg-zinc-900/50 bg-white/80 backdrop-blur-sm border border-white/10 dark:border-white/10 border-gray-200 rounded-2xl p-6 h-full hover:border-p_green/30 transition-all duration-500">
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-p_green/20 text-p_green text-xs rounded-full border border-p_green/30">
                    {post.category}
                  </span>
                  {post.status === "coming-soon" && (
                    <span className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-full border border-orange-500/30">
                      Coming Soon
                    </span>
                  )}
                </div>

                {/* Post Title */}
                <h2 className="font-bold text-xl mb-3 text-white dark:text-white text-gray-900 group-hover:text-p_green transition-colors duration-300">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-gray-300 dark:text-gray-300 text-gray-600 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                {post.status !== "coming-soon" && (
                  <div className="flex items-center gap-4 mb-4 text-xs text-gray-400 dark:text-gray-400 text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-700/50 dark:bg-gray-700/50 bg-gray-100 text-gray-300 dark:text-gray-300 text-gray-700 text-xs rounded border border-gray-600/50 dark:border-gray-600/50 border-gray-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Read More Button */}
                <div className="flex items-center justify-between">
                  {post.status === "coming-soon" ? (
                    <span className="inline-flex items-center gap-2 text-gray-400 dark:text-gray-400 text-gray-500 text-sm">
                      <BookOpen size={16} />
                      <span>Coming Soon</span>
                    </span>
                  ) : (
                    <Link
                      href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center gap-2 text-p_green hover:text-p_green/80 transition-colors duration-300 group/link"
                    >
                      <BookOpen size={16} className="group-hover/link:translate-x-1 transition-transform duration-300" />
                      <span className="text-sm font-medium">Read More</span>
                    </Link>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="text-center mt-20 max-w-2xl mx-auto"
      >
        <div className="bg-zinc-900/30 dark:bg-zinc-900/30 bg-white/90 backdrop-blur-sm border border-white/10 dark:border-white/10 border-gray-200 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4 text-white dark:text-white text-gray-900">
            Stay Updated! 📬
          </h3>
          <p className="text-gray-300 dark:text-gray-300 text-gray-600 mb-6">
            Get notified when new articles are published. I share insights about backend development,
            system architecture, and modern development practices.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-p_green/10 text-p_green rounded-full border border-p_green/20 text-sm">
              📝 Weekly Articles
            </span>
            <span className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 text-sm">
              💡 Tech Insights
            </span>
            <span className="px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20 text-sm">
              🚀 Best Practices
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
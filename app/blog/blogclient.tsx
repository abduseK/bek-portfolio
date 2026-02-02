"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Globe,
  Instagram,
  Linkedin,
  Send,
  Twitter,
} from "lucide-react";

interface Blog {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  author: string;
  category?: string;
  image?: string;
}

export default function BlogListClient({ blogs = [] }: { blogs: Blog[] }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="absolute top-0 w-full z-20 px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
          >
            <ArrowLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span className="text-sm tracking-widest uppercase font-light">
              Back to Home
            </span>
          </Link>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="relative w-full h-[450px] md:h-[400px] mb-16">
        <Image
          src="/blog-page.jpg"
          alt="The Inkwell"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center p-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6 italic"
          >
            The Inkwell & The Infinite
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl max-w-3xl leading-relaxed font-light"
          >
            A comprehensive collection of essays and creative inquiries
            exploring the intersection of classical literature and the poetic
            voice.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex mt-8 gap-8 text-gray-400"
          >
            {/* <a
              href="https://x.com/bek-apha"
              target="_blank"
              className="hover:text-white transition-colors"
            >
              <Twitter size={22} />
            </a> */}
            <a
              href="https://www.linkedin.com/in/bek3113/"
              target="_blank"
              className="hover:text-white transition-colors"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://t.me/beki_314"
              target="_blank"
              className="hover:text-white transition-colors"
            >
              <Send size={22} />
            </a>
            <a
              href="https://instagram.com/ibek2025"
              target="_blank"
              className="hover:text-white transition-colors"
            >
              <Instagram size={22} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        {blogs.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 italic font-serif">
              The archive is currently empty...
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
            {blogs.map((blog, idx) => (
              <motion.div
                key={blog.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link href={`/blog/${blog.slug}`}>
                  <div
                    className="group relative h-full p-8 rounded-2xl bg-[#111] border border-white/5 
                            hover:border-white/20 hover:bg-[#161616] 
                            transition-all duration-500 ease-out
                            hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:-translate-y-2"
                  >
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="w-8 h-[1px] bg-gray-700 group-hover:w-12 group-hover:bg-white transition-all duration-500"></span>
                        <p className="text-gray-500 text-xs tracking-widest uppercase">
                          {blog.date
                            ? new Date(blog.date).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })
                            : "Draft"}
                        </p>
                      </div>

                      <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-4 text-gray-100 group-hover:text-white transition-colors leading-tight italic">
                        {blog.title}
                      </h2>

                      <p className="text-gray-400 text-base leading-relaxed mb-8 flex-grow">
                        {blog.excerpt}
                      </p>

                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-sm font-medium text-white/70 group-hover:text-white flex items-center gap-2 transition-colors">
                          Read Article
                          <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                            →
                          </span>
                        </span>
                        <span className="text-[10px] text-white/10 font-mono tracking-tighter">
                          {idx < 9 ? `0${idx + 1}` : idx + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

import { notFound } from "next/navigation";
import Image from "next/image";
import { Twitter, Linkedin, Instagram, Send, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import { client } from "@/sanity/lib/client";

interface BlogProps {
  params: Promise<{ slug: string }>;
}

interface BlogPost {
  title: string;
  slug: string;
  date: string;
  image: string;
  excerpt: string;
  body: PortableTextBlock[];
  author?: string;
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    "date": publishedAt,
    "image": mainImage.asset->url,
    excerpt,
    author,
    body,
    "author": author->name
  }`;

  try {
    const post = await client.fetch(query, { slug });
    return post;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

// Add this for better Next.js caching control
export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogDetail({ params }: BlogProps) {
  const { slug } = await params;
  const blog = await getBlogPost(slug);

  if (!blog) return notFound();

  // Format date safely
  const formattedDate = blog.date
    ? new Date(blog.date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "Date unavailable";

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20">
      {/* Navigation Top Bar */}
      <nav className="absolute top-0 w-full z-20 px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/blog"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
          >
            <ArrowLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span className="text-sm tracking-widest uppercase font-light">
              Back to Archive
            </span>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px]">
        {blog.image && (
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover opacity-50"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-center items-center p-6 text-center">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-[1px] bg-white/30"></span>
            <p className="text-gray-300 text-xs tracking-[0.3em] uppercase">
              {formattedDate}
            </p>
            <span className="w-12 h-[1px] bg-white/30"></span>
          </div>

          <h1 className="text-4xl md:text-7xl font-serif font-bold mb-8 italic leading-tight max-w-5xl">
            {blog.title}
          </h1>

          <p className="text-gray-400 text-xs tracking-[0.2em] uppercase">
            Written by{" "}
            <span className="text-white font-medium">
              {blog.author ?? "Bereket A."}
            </span>
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-3xl mx-auto px-6 py-24">
        <h1 className="text-lg font-serif mb-8 italic leading-tight max-w-5xl">
          {blog.title}
        </h1>
        <article
          className="prose prose-invert prose-lg text-gray-400
          prose-headings:font-serif prose-headings:italic prose-headings:font-semibold
          prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-8
          prose-blockquote:border-l-white/20 prose-blockquote:text-gray-400 prose-blockquote:italic prose-blockquote:bg-white/5 prose-blockquote:py-2 prose-blockquote:pr-4
          max-w-none text-lg"
        >
          {blog.body && <PortableText value={blog.body} />}
        </article>

        {/* Share Section */}
        <footer className="mt-24 pt-10 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">
              Written by: <span className="text-white">Bereket A.</span>
            </span>
            {/* <div className="flex gap-6 text-gray-400">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter
                  size={16}
                  className="hover:text-white cursor-pointer transition-colors"
                />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${typeof window !== "undefined" ? encodeURIComponent(window.location.href) : ""}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin
                  size={16}
                  className="hover:text-white cursor-pointer transition-colors"
                />
              </a>
              <Instagram
                size={16}
                className="hover:text-white cursor-pointer transition-colors"
              />
              <a
                href={`mailto:?subject=${encodeURIComponent(blog.title)}&body=${encodeURIComponent(blog.excerpt)}`}
              >
                <Send
                  size={16}
                  className="hover:text-white cursor-pointer transition-colors"
                />
              </a>
            </div> */}
          </div>

          <Link
            href="/blog"
            className="group flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/40 hover:text-white transition-all"
          >
            Browse the Archive{" "}
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </footer>
      </section>
    </div>
  );
}

"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Header() {
  return (
    <nav className="fixed top-3 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-12 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-0 overflow-hidden rounded-md border-2 border-dashed border-gray-500 px-2 py-1 transition-all duration-300 hover:gap-2 hover:border-gray-500"
        >
          {/* Logo Image */}
          <Image
            src="/b-logo.png"
            alt="Logo"
            width={35}
            height={35}
            className="shrink-0"
          />

          {/* Sliding/Fading Text */}
          <span className="max-w-0 overflow-hidden font-serif text-lg font-bold italic tracking-tighter text-white transition-all duration-500 ease-in-out group-hover:max-w-[100px]">
            Bereket
          </span>
        </Link>
        <div className="flex items-center gap-8">
          <Link
            href="/blog"
            className="px-4 py-2 text-white hover:text-white/60 text-xs uppercase tracking-widest font-bold transition-colors border-2 border-dashed border-gray-500 rounded-md flex items-center gap-2"
          >
            Read Blog
          </Link>
        </div>
      </div>
    </nav>
  );
}

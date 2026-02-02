"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { PenTool } from "lucide-react";

export default function Header() {
  return (
    <nav className="fixed top-3 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="group relative flex items-center gap-0 overflow-hidden py-1 transition-all duration-300 hover:gap-2"
        >
          {/* 1. The "Bright Light" Glow Effect */}
          {/* We use an absolute div behind the image with a radial gradient and high blur */}
          <div className="absolute left-1/2 top-1/2 -z-10 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 blur-2xl transition-all duration-500 group-hover:bg-white/40 group-hover:blur-3xl" />

          {/* Optional: A sharper core light for more "shine" */}
          <div className="absolute left-1/2 top-1/2 -z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/40 blur-lg" />

          {/* Logo Image */}
          <Image
            src="/b-logo-trs.png"
            alt="Logo"
            width={50}
            height={50}
            className="relative z-10 shrink-0 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
          />

          {/* Sliding/Fading Text */}
          <span className="max-w-0 overflow-hidden font-serif text-lg font-bold italic tracking-tighter text-white transition-all duration-500 ease-in-out group-hover:max-w-[100px] group-hover:ml-2">
            Bereket
          </span>
        </Link>
        <div className="flex items-center gap-8">
          <Link
            href="/blog"
            className="group relative flex items-center gap-3 px-4 py-2 text-white transition-all duration-300"
          >
            {/* Poetic Writing Icon */}
            <PenTool
              size={16}
              className="text-gray-500 group-hover:text-white transition-colors duration-300"
            />

            <span className="text-xs mr-0 sm:mr-10 uppercase tracking-[0.3em] font-light group-hover:tracking-[0.4em] transition-all duration-500">
              Read Blog
            </span>

            {/* Elegant underline animation instead of a box */}
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent transition-all duration-500 group-hover:w-full" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
